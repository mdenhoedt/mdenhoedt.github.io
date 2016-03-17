import urllib2, sys, cgi
from bs4 import BeautifulSoup

imdb = 'http://www.imdb.com/title/'
nr_color = 5

def get_html_imdb(url):
    return urllib2.urlopen(url).read().strip()

def get_info(html):
    soup = BeautifulSoup(html, 'html.parser')
    title = soup.title.string
    rating = soup.find('span', {'itemprop': 'ratingValue'})
    if rating == None:
        rate = '-'
    else:
        rate = str(rating.text).strip()
    return (title.replace(' - IMDb', ''), rate)

def get_html_movie(imdb_code):
    link = imdb + imdb_code
    html = get_html_imdb(link)
    (title, rating) = get_info(html)
    t_html = cgi.escape(title).encode('ascii', 'xmlcharrefreplace')
    out = '<a href="' + link + '" title="rating: ' + rating + \
            '" class="btn btn-default">' + t_html + '</a> '
    return (out, title, rating)

def update_button_color(arr):
    global nr_color
    for i in range(len(arr)):
        arr[i] = arr[i].replace('btn-succes', 'btn-default')
        arr[i] = arr[i].replace('btn-danger', 'btn-success')
    if len(arr) < 10:
        nr_color = len(arr) / 2
    for i in range(nr_color):
        arr[len(arr) - i - 1] = arr[len(arr) - i - 1].replace('btn-default', 'btn-danger')
        arr[i] = arr[i].replace('btn-default', 'btn-succes')

def main():
    imdb_code = raw_input('enter imdb code: ')
    (link, title, rating) = get_html_movie(imdb_code.strip())
    lines = []
    with open('movies.txt', 'r') as file:
        lines = file.readlines()
        for line in lines:
            if link in lines:
                print '"' + title + '" already in the TODO list'
                return
    lines.append(link + '\n')
    update_button_color(lines)
    print lines
    with open('movies.txt', 'w') as file:
        file.writelines(lines)
    print 'succesfully added "' + title + '" to the TODO list'

main()
