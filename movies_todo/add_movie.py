import urllib2, sys, cgi
from bs4 import BeautifulSoup

imdb = 'http://www.imdb.com/title/'

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

def main():
    imdb_code = raw_input('enter imdb code: ')
    (link, title, rating) = get_html_movie(imdb_code.strip())
    with open('movies.txt', 'r') as file:
        if link in file.read():
            print '"' + title + '" already in the TODO list'
            return
    with open('movies.txt', 'a') as file:
        file.write(link + '\n')
    print 'succesfully added "' + title + '" to the TODO list'

main()
