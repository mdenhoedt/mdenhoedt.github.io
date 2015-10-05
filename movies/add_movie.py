import urllib2, sys, cgi
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
    t_html = cgi.escape(title).encode('ascii', 'xmlcharrefreplace')
    out = '<a href="' + link + '" class="btn btn-default">' + t_html + '</a> '
    return (out, title)

def main():
    imdb_code = raw_input('enter imdb code: ')
    (link, title) = get_html_movie(imdb_code.strip())
    with open('movies.txt', 'r') as file:
        if link in file.read():
            print '"' + title + '" already in list'
            return
    with open('movies.txt', 'a') as file:
        file.write(link + '\n')
    print 'succesfully added "' + title + '"'

main()
