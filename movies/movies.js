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
            if (movie_array[i].length == 0) {
                continue;
            }
            str = movie_array[i].match(/>.+</)[0];
            str = str.substring(1, str.length - 1);
            console.log(str);
            if (str.search(input) > 0) {
                output += movie_array[i] + "\n";
            } 
        }
    }
    document.getElementById("movies-list").innerHTML = output;
}
