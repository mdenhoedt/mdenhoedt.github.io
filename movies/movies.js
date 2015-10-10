var movie_array;

function set_up() {
    temp = document.getElementById("movies-list").innerHTML;
    movie_array = temp.split("\n");
}

function movies_sort_year() {

}

function movies_sort_title() {

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
