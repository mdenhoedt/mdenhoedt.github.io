import urllib2, sys, cgi
from bs4 import BeautifulSoup

imdb = 'http://www.imdb.com/title/'
nr_green = 5

def get_html_imdb(url):
    return urllib2.urlopen(url).read().strip()

def get_info(html):
    soup = BeautifulSoup(html, 'html.parser')
    title = soup.title.string
    rating = soup.find('span', {'itemprop': 'ratingValue'})
    rate = str(rating.text).strip()
    return (title.replace(' - IMDb', ''), rate)

def get_html_movie(imdb_code):
    link = imdb + imdb_code
    html = get_html_imdb(link)
    (title, rating) = get_info(html)
    t_html = cgi.escape(title).encode('ascii', 'xmlcharrefreplace')
    out = '<a href="' + link + '" title="rating: ' + rating + \
            '" class="btn btn-success">' + t_html + '</a> '
    return (out, title, rating)

def add_to_statistics(title, rating):
    file_name = '../movies_statistics/statistics.js'
    with open(file_name, 'r') as file:
        contents = file.readlines()
    line = "            ,['" + title + "', " + rating + "]\n"
    contents.insert(5, line)
    with open(file_name, 'w') as file:
        output = "".join(contents)
        file.write(output)

def remove_from_todo_list(imdb_code):
    with open('../movies_todo/movies.txt') as f:
        lines = f.readlines()
    movie_in_todo = False
    with open('../movies_todo/movies.txt', 'w') as f:
        for line in lines:
            if imdb_code in line:
                movie_in_todo = True
            else:
                f.write(line)
    return movie_in_todo

def update_button_color(arr):
    pos = len(arr) - nr_green - 2
    arr[pos] = arr[pos].replace('btn-success', 'btn-default')

def main():
    imdb_code = raw_input('enter imdb code: ')
    (link, title, rating) = get_html_movie(imdb_code.strip())
    lines = []
    with open('movies.txt', 'r') as file:
        lines = file.readlines()
        for line in lines:
            if link in lines:
                print '"' + title + '" already in list'
                return
    with open('movies.txt', 'w') as file:
        lines.append(link + '\n')
        update_button_color(lines)
        file.writelines(lines)
    add_to_statistics(title, rating)
    print 'succesfully added "' + title + '"'
    if remove_from_todo_list(imdb_code.strip()):
        print 'succesfully removed "' + title + '" from the todo list'

main()
