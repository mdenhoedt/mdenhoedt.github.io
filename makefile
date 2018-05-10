all: movie_gen serie_gen

movie_gen:
	cd movies; python movies.py --generate

movie_add:
	cd movies; python movies.py --add

movie_todo:
	cd movies; python movies.py --todo

serie_gen:
	cd series; python series.py --generate

serie_add:
	cd series; python series.py --add
