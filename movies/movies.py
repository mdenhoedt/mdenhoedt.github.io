import urllib2, sys, cgi, json, re
import numpy as np
import matplotlib.pyplot as plt
from bs4 import BeautifulSoup

imdb_url = 'http://www.imdb.com/title/'
nr_green = 5

def get_html_imdb(imdb_code):
    return urllib2.urlopen(imdb_url + imdb_code).read().strip()

def get_info(html):
    soup = BeautifulSoup(html, 'html.parser')
    title = str(soup.find('h1', {'itemprop': 'name'}).text.strip()[:-7])
    try:
        rating = str(soup.find('span', {'itemprop': 'ratingValue'}).text).strip()
    except AttributeError:
        rating = '-'
    year = int(soup.find('span', {'id': 'titleYear'}).find('a').text)
    return title, rating, year

def get_json_movie(imdb_code):
    html = get_html_imdb(imdb_code)
    title, rating, year = get_info(html)
    return {'id': imdb_code,
            'title': title,
            'rating':rating,
            'year': year
            }

def json_to_html(movie, btn_type='outline-dark'):
    html = '<a href="http://www.imdb.com/title/{0}" title="rating: {1}" class="btn btn-{4}" role="button">{2} ({3})</a>\n'
    if 'rating' in movie:
        rating = movie['rating']
    else:
        rating = '-'
    return html.format(movie['id'], rating, movie['title'], movie['year'], btn_type)

def generate(folder, todo):
    with open(folder + 'start.txt') as f:
        start_html = f.read()
    with open(folder + 'movies.json') as f:
        data = json.load(f)
        if 'movies' not in data:
            return
        movies = data['movies']
    with open('search_form.txt') as f:
        search_form = f.read()
    with open('end.txt') as f:
        end_html = f.read()
    with open(folder + 'index.html', 'w') as f:
        f.write(start_html)
        f.write('<p class="lead">The ' + str(len(movies)) + ' ')
        if todo:
            f.write('movies I want to watch are listed on this page. The 5 most ')
            f.write('recently added are marked green and the movies marked red are ')
            f.write('the longest in this list.</p>\n')
        else:
            f.write('movies I have seen are listed on this page. The last 5 ')
            f.write('movies I have seen are labeled green.</p>\n')
        f.write(search_form)
        f.write('<p class="movies" id="movies-list">\n')
        for i, movie in enumerate(movies):
            if i >= len(movies) - 5:
                f.write(json_to_html(movie, btn_type='success'))
            else:
                f.write(json_to_html(movie))
        f.write(end_html)

def compute_dict(lst):
    output = {}
    for e in lst:
        if e not in output:
            output[e] = 0
        output[e] += 1
    return output

def generate_stats(folder):
    with open(folder + 'movies.json') as f:
        data = json.load(f)
    ratings = [float(e['rating']) for e in data['movies']]

    n, bins, patches = plt.hist(ratings, 20, facecolor='#5cb85c')
    plt.xlabel('imdb score')
    plt.ylabel('occurrences')
    plt.savefig('../movies_statistics/plt_ratings.svg', bbox_inches='tight')
    plt.clf()

    years = [int(e['year']) for e in data['movies']]
    freq_dict = compute_dict(years)
    years = [e for e in freq_dict if freq_dict[e] > 5]
    years.sort()
    freqs = [freq_dict[e] for e in years]

    fig, ax = plt.subplots()
    ind = np.arange(len(years))
    width = .9
    rects = ax.bar(ind, freqs, width, color='#5cb85c')
    ax.set_xticks(ind + width / 2.0)
    ax.set_xticklabels(years, rotation='vertical')
    ax.set_ylabel('ocurrences')
    ax.set_title('removed years with 5 ocurrences or less')
    plt.savefig('../movies_statistics/plt_years.svg', bbox_inches='tight')
    plt.clf()

def remove_movie_from_json(file_name, movie):
    with open(file_name) as f:
        data = json.load(f)
    if 'movies' not in data:
        print 'invalid JSON file'
        return False
    nr_movies = len(data['movies'])
    data['movies'] = filter(lambda e: e['id'] != movie, data['movies'])
    with open(file_name, 'w') as f:
        json.dump(data, f, indent=2, sort_keys=True)
    return nr_movies != len(data['movies'])

def add_movie_to_json(file_name, new_movie):
    with open(file_name) as f:
        data = json.load(f)
    if 'movies' not in data:
        print 'invalid JSON file'
        return False
    for movie in data['movies']:
        if new_movie['id'] == movie['id']:
            print movie['title'] + ' already added'
            return False
    data['movies'].append(new_movie)
    with open(file_name, 'w') as f:
        json.dump(data, f, indent=2, sort_keys=True)
    return True

def add_movie(folder, todo, todo_file = None):
    imdb_code = raw_input('enter imdb code: ')
    new_movie = get_json_movie(imdb_code.strip())
    if not add_movie_to_json(folder + 'movies.json', new_movie):
        return

    title = new_movie['title']
    print 'succesfully added "' + title + '"',
    if todo:
        print 'to the TODO list.'
    else:
        print 'to the WATCH list.'
    if not todo and remove_movie_from_json(todo_file + 'movies.json', imdb_code.strip()):
        print 'succesfully removed "' + title + '" from the todo list'

def main():
    if len(sys.argv) < 2:
        print 'not enough arguments'

    watch_folder = ''
    todo_folder = '../movies_todo/'

    if sys.argv[1] == '--generate':
        generate(watch_folder, False)
        generate(todo_folder, True)
        generate_stats(watch_folder)
    if sys.argv[1] == '--add':
        add_movie(watch_folder, False, todo_folder)
    if sys.argv[1] == '--todo':
        add_movie(todo_folder, True)

if __name__ == '__main__':
    main()
