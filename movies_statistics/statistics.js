google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
            ['Movie', 'Rating']
            ]);
    var options = {
        title:        'Rating of movies',
        legend:       {position: 'none' },
        height:       500,
        histogram:    {hideBucketItems: true, bucketSize: 1},
    };

    var chart = new google.visualization.Histogram(document.getElementById('chart_div'));
    chart.draw(data, options);
}
