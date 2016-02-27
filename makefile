all:
	cd movies; python generate.py
	cd movies_todo; python generate.py

add:
	cd movies; python add_movie.py

todo:
	cd movies_todo; python add_movie.py
