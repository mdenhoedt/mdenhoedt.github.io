import urllib2, sys
from bs4 import BeautifulSoup

imdb = 'http://www.imdb.com/title/'

def get_html_imdb(url):
    return urllib2.urlopen(url).read().strip()

def get_title(html):
    soup = BeautifulSoup(html, 'html.parser')
    title = soup.title.string
    return title.replace(' - IMDb', '')

def get_html_movie(imdb_code):
    link = imdb + imdb_code
    html = get_html_imdb(link)
    title = get_title(html)
    return '<a href="' + link + '" class="btn btn-default">' + title + '</a> '

def main():
    imdb_code = raw_input('enter imdb code: ')
    link = get_html_movie(imdb_code.strip())
    with open('movies.txt', 'a') as file:
        file.write(link + '\n')

main()
