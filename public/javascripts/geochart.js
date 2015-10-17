
google.load('visualization', '1', {'packages':['corechart','geochart']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    $.get('/api/cities', function(response) {

        console.log(response);

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'City Name');
        data.addColumn('number', 'Population');

        var chartData = [];
        for(var idx = 0; idx < response.length; ++idx) {
            var item = response[idx];
            chartData.push([item.cityName, item.population]);
        }
        data.addRows(chartData);

        var options = {
            region: 'HU',
            displayMode: 'markers',
            colorAxis: {colors: ['red', 'green']}
        };

        //create and draw the chart from DIV
        var chart = new google.visualization.GeoChart(document.getElementById('geochart'));
        chart.draw(data, options);

    }, 'json');


}


