def main():
    with open('start.txt', 'r') as file:
        start = file.read()
    with open('movies.txt', 'r') as file:
        movies = [e.strip() for e in file]
        nr_of_movies = len(movies)
        movies = '\n'.join(movies)
    with open('search_form.txt', 'r') as file:
        search_form = file.read()
    with open('end.txt', 'r') as file:
        end = file.read()
    with open('index.html', 'w') as file:
        file.write(start)
        file.write('<p class="lead">The ' + str(nr_of_movies) + ' ')
        file.write('movies I want to watch are listed on this page. The 5 most ')
        file.write('recently added are marked green and the movies marked red are ')
        file.write('the longest in this list.</p>\n')
        file.write(search_form)
        file.write('<p class="movies" id="movies-list">\n')
        file.write(movies)
        file.write(end)

main()
