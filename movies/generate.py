def main():
    with open('start.txt', 'r') as file:
        start = file.read()
    with open('movies.txt', 'r') as file:
        movies = file.read()
    with open('end.txt', 'r') as file:
        end = file.read()
    with open('index.html', 'w') as file:
        file.write(start)
        file.write(movies)
        file.write(end)

main()
