def main():
    with open('start.txt', 'r') as file:
        start = file.read()
    with open('movies.txt', 'r') as file:
        movies = [e.strip() for e in file]
        nr_of_movies = len(movies)
        movies = '\n'.join(movies)
    with open('end.txt', 'r') as file:
        end = file.read()
    with open('index.html', 'w') as file:
        file.write(start)
        file.write('<p class="lead">The ' + str(nr_of_movies) + ' ')
        file.write('movies I have seen are listed on this page.</p>\n')
        file.write('<p class="movies">\n')
        file.write(movies)
        file.write(end)

main()
