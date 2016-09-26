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
    pos = len(arr) - nr_green - 1
    arr[pos] = arr[pos].replace('btn-success', 'btn-default')

def generate(folder, todo):
    with open(folder + 'start.txt', 'r') as file:
        start = file.read()
    with open(folder + 'movies.txt', 'r') as file:
        movies = [e.strip() for e in file]
        nr_of_movies = len(movies)
        movies = '\n'.join(movies)
    with open('search_form.txt', 'r') as file:
        search_form = file.read()
    with open('end.txt', 'r') as file:
        end = file.read()
    with open(folder + 'index.html', 'w') as file:
        file.write(start)
        file.write('<p class="lead">The ' + str(nr_of_movies) + ' ')
        if todo:
            file.write('movies I want to watch are listed on this page. The 5 most ')
            file.write('recently added are marked green and the movies marked red are ')
            file.write('the longest in this list.</p>\n')
        else:
            file.write('movies I have seen are listed on this page. The last 5 ')
            file.write('movies I have seen are labeled green.</p>\n')
        file.write(search_form)
        file.write('<p class="movies" id="movies-list">\n')
        file.write(movies)
        file.write(end)

def add_movie(folder, todo):
    imdb_code = raw_input('enter imdb code: ')
    (link, title, rating) = get_html_movie(imdb_code.strip())
    lines = []
    with open(folder + 'movies.txt', 'r') as file:
        lines = file.readlines()
        for line in lines:
            if link in lines:
                print '"' + title + '" already in list'
                return
    with open(folder + 'movies.txt', 'w') as file:
        lines.append(link + '\n')
        update_button_color(lines)
        file.writelines(lines)
    if not todo:
        add_to_statistics(title, rating)
    print 'succesfully added "' + title + '"',
    if todo:
        print 'to the TODO list.'
    else:
        print 'to the WATCH list.'
    if not todo and remove_from_todo_list(imdb_code.strip()):
        print 'succesfully removed "' + title + '" from the todo list'

def main():
    if len(sys.argv) < 2:
        print 'not enough arguments'

    if sys.argv[1] == '--generate':
        generate('', False)
        generate('../movies_todo/', True)
    if sys.argv[1] == '--add':
        add_movie('', False)
    if sys.argv[1] == '--todo':
        add_movie('../movies_todo/', True)

if __name__ == '__main__':
    main()
