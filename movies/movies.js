var movie_array;
var sort_year, sort_title, sort_rating;
var toggle_year = true;
var toggle_title = false;
var toggle_rating = false;

function set_up() {
    temp = document.getElementById("movies-list").innerHTML;
    movie_array = temp.trim().split("\n");
    sort_year = document.getElementById("year-sort");
    sort_title = document.getElementById("title-sort");
    sort_rating = document.getElementById("rating-sort");
    movies_sort_year();
}

function extract_year(str) {
    year = str.match(/\(.*(19|20)\d{2}\)/)[0];
    year = year.match(/\d{4}/)[0];
    return parseInt(year);
}

function extract_rating(str) {
    rating = str.match(/\"rating:\s\d+\.\d+\"/g)[0];
    rating = rating.match(/\d+\.\d+/g)[0];
    return parseFloat(rating);
}

function movies_sort_rating() {
    sort_year.className = "blank glyphicon glyphicon-ok";
    sort_title.className = "blank glyphicon glyphicon-ok";
    sort_rating.className = "glyphicon glyphicon-ok";
    toggle_year = false;
    toggle_title = false;
    toggle_rating = !toggle_rating;

    movie_array.sort(function(a, b) {
        rating_a = extract_rating(a);
        rating_b = extract_rating(b);
        year_a = extract_year(a);
        year_b = extract_year(b);
        if (rating_a == rating_b) {
            return year_b - year_a;
        }
        if (toggle_rating) {
            return rating_b - rating_a;
        } else {
            return rating_a - rating_b;
        }
    });

    output = movie_array.join("\n");
    document.getElementById("movies-list").innerHTML = output;
}

function movies_sort_year() {
    sort_year.className = "glyphicon glyphicon-ok";
    sort_title.className = "blank glyphicon glyphicon-ok";
    sort_rating.className = "blank glyphicon glyphicon-ok";
    toggle_year = !toggle_year;
    toggle_title = false;
    toggle_rating = false;

    movie_array.sort(function(a, b) {
        year_a = extract_year(a);
        year_b = extract_year(b);
        if (year_a == year_b) {
            str_a = a.match(/>.+</);
            str_b = b.match(/>.+</);
            return str_a > str_b;
        }
        if (toggle_year) {
            return year_a - year_b;
        } else {
            return year_b - year_a;
        }
    });
    output = movie_array.join("\n");
    document.getElementById("movies-list").innerHTML = output;
}

function movies_sort_title() {
    sort_year.className = "blank glyphicon glyphicon-ok";
    sort_title.className = "glyphicon glyphicon-ok";
    sort_rating.className = "blank glyphicon glyphicon-ok";
    toggle_title = !toggle_title;
    toggle_year = false;
    toggle_rating = false;

    movie_array.sort(function compareYear(a, b) {
        str_a = a.match(/>.+</);
        str_b = b.match(/>.+</);
        if (toggle_title) {
            return str_a < str_b;
        } else {
            return str_a > str_b;
        }
    });
    output = movie_array.join("\n");
    document.getElementById("movies-list").innerHTML = output;
}

function movies_search() {
    input = document.getElementById("search-input").value.toLowerCase();
    output = "";
    if (input == "") {
        for (var i = 0; i < movie_array.length; ++i) {
            output += movie_array[i] + "\n";
        }
        document.getElementById("search-results").innerHTML = "";
    } else {
        found = 0;
        for (var i = 0; i < movie_array.length; ++i) {
            str = movie_array[i].match(/>.+</);
            if (str == null) {
                continue;
            }
            str = str[0].substring(1, str[0].length - 1).toLowerCase();
            if (str.search(input) >= 0) {
                output += movie_array[i] + "\n";
                found++;
            } 
        }
        document.getElementById("search-results").innerHTML = found + " results";
    }
    document.getElementById("movies-list").innerHTML = output;
}
