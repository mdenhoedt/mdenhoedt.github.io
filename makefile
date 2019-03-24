all: movie_gen serie_gen

movie_gen:
	cd movies; python3 movies.py --generate

movie_add:
	cd movies; python3 movies.py --add

movie_todo:
	cd movies; python3 movies.py --todo

serie_gen:
	cd series; python3 series.py --generate

serie_add:
	cd series; python3 series.py --add
