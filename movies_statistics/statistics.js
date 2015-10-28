google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
            ['Movie', 'Rating']
            ,['Saving Private Ryan (1998)', 8.6]
            ,['Edge of Tomorrow (2014)', 7.9]
            ,['The Shawshank Redemption (1994)', 9.3]
            ,['Office Space (1999)', 7.8]
            ,['The Boy in the Striped Pyjamas (2008)', 7.8]
            ,['Pearl Harbor (2001)', 6.0]
            ,['V for Vendetta (2005)', 8.2]
            ]);
    var options = {
        title:        'Rating of movies',
        legend:       {position: 'none' },
        height:       500,
        histogram:    {hideBucketItems: true,
            bucketSize: 1},
    };

    var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
    chart.draw(data, options);
}
