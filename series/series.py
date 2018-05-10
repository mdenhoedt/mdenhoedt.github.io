import urllib2, sys, cgi, json, re
import numpy as np
import matplotlib.pyplot as plt
from bs4 import BeautifulSoup

imdb_url = 'http://www.imdb.com/title/'
nr_green = 5


def get_html_imdb(imdb_code, season_nr=None):
    if season_nr == None:
        url = imdb_url + imdb_code
    else:
        url = imdb_url + imdb_code + '/episodes?season=' + str(season_nr)
    return urllib2.urlopen(url).read().strip()


def get_serie_info(html):
    soup = BeautifulSoup(html, 'html.parser')
    title = soup.find('h1', {'itemprop': 'name'}).text.strip()
    try:
        rating = str(soup.find('span', {'itemprop': 'ratingValue'}).text).strip()
    except AttributeError:
        rating = '-'
    return title, rating


def get_json_serie(imdb_code):
    html = get_html_imdb(imdb_code)
    title, rating = get_serie_info(html)
    return {'id': imdb_code,
            'title': title,
            'rating':rating,
            'seasons': []
            }


def get_season_info(html):
    soup = BeautifulSoup(html, 'html.parser')
    year = int(soup.find('div', {'class': 'airdate'}).text.strip().split(' ')[-1])
    return year


def get_json_season(imdb_code, season_nr):
    html = get_html_imdb(imdb_code, season_nr)
    year = get_season_info(html)
    return {'nr': season_nr,
            'year': year
            }


def json_to_html(serie, btn_type='default'):
    html = '<a href="http://www.imdb.com/title/{0}" title="rating: {1}" class="btn btn-{4}">{2}</br>{3}</a>\n'
    if 'rating' in serie:
        rating = serie['rating']
    else:
        rating = '-'
    seasons = serie['seasons']
    if len(seasons) == 0:
        raise Error('No seasons defined') 
    if len(seasons) == 1:
        extra_info = 'S{0} | {1}'.format(seasons[0]['nr'], seasons[0]['year'])
    else:
        extra_info = 'S{0}-S{1} | {2}-{3}'.format(seasons[0]['nr'], seasons[-1]['nr'], seasons[0]['year'], seasons[-1]['year'])
    return html.format(serie['id'], rating, serie['title'], extra_info, btn_type)


def generate(folder, todo):
    with open(folder + 'start.txt') as f:
        start_html = f.read()
    with open(folder + 'series.json') as f:
        data = json.load(f)
        if 'series' not in data:
            return
        series = data['series']
    with open('search_form.txt') as f:
        search_form = f.read()
    with open('end.txt') as f:
        end_html = f.read()
    with open(folder + 'index.html', 'w') as f:
        f.write(start_html)
        f.write('<p class="lead">The ' + str(len(series)) + ' ')
        f.write('series I have seen are listed on this page. The last 5 ')
        f.write('series I have seen are labeled green.</p>\n')
        f.write(search_form)
        f.write('<p class="series" id="series-list">\n')
        for i, serie in enumerate(series):
            if i >= len(series) - 5:
                f.write(json_to_html(serie, btn_type='success'))
            else:
                f.write(json_to_html(serie))
        f.write(end_html)


def add_serie_to_json(file_name, new_serie):
    with open(file_name) as f:
        data = json.load(f)
    if 'series' not in data:
        print 'invalid JSON file'
        return False
    for serie in data['series']:
        if new_serie['id'] == serie['id']:
            print serie['title'] + ' already added'
            return False
    data['series'].append(new_serie)
    with open(file_name, 'w') as f:
        json.dump(data, f, indent=2, sort_keys=True)
    return True


def add_serie(folder):
    imdb_code = raw_input('enter imdb code: ').strip()
    new_serie = get_json_serie(imdb_code)
    season_nr = int(raw_input('enter season number: ').strip())
    season = get_json_season(imdb_code, season_nr)
    new_serie['seasons'] = [season]
    if not add_serie_to_json(folder + 'series.json', new_serie):
        return

    title = new_serie['title']
    print 'succesfully added "' + title + '" to the WATCH list.'


def main():
    if len(sys.argv) < 2:
        print 'not enough arguments'

    watch_folder = ''

    if sys.argv[1] == '--generate':
        generate(watch_folder, False)
    if sys.argv[1] == '--add':
        add_serie(watch_folder)

if __name__ == '__main__':
    main()
