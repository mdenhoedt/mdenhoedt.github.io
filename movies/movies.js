var movie_array;
var sort_year, sort_title;

function set_up() {
    temp = document.getElementById("movies-list").innerHTML;
    movie_array = temp.trim().split("\n");
    sort_year = document.getElementById("year-sort");
    sort_title = document.getElementById("title-sort");
}

function extract_year(str) {
    year = str.match(/\(.*(19|20)\d{2}\)/)[0];
    year = year.match(/\d{4}/)[0];
    return parseInt(year);
}

function movies_sort_year() {
    sort_year.className = "glyphicon glyphicon-ok";
    sort_title.className = "blank glyphicon glyphicon-ok";
    movie_array.sort(function(a, b) {
        year_a = extract_year(a);
        year_b = extract_year(b);
        return year_a - year_b;
    });
    output = movie_array.join("\n");
    document.getElementById("movies-list").innerHTML = output;
}

function movies_sort_title() {
    sort_year.className = "blank glyphicon glyphicon-ok";
    sort_title.className = "glyphicon glyphicon-ok";
    movie_array.sort(function compareYear(a, b) {
        return Math.random() * 100 % 10;
    });
    output = movie_array.join("\n");
    document.getElementById("movies-list").innerHTML = output;
}

function movies_search() {
    input = document.getElementById("search-input").value;
    output = "";
    if (input == "") {
        for (var i = 0; i < movie_array.length; ++i) {
            output += movie_array[i] + "\n";
        }
    } else {
        for (var i = 0; i < movie_array.length; ++i) {
            str = movie_array[i].match(/>.+</);
            if (str == null) {
                continue;
            }
            str = str[0].substring(1, str[0].length - 1);
            if (str.search(input) >= 0) {
                output += movie_array[i] + "\n";
            } 
        }
    }
    document.getElementById("movies-list").innerHTML = output;
}
