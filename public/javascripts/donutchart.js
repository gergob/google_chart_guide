google.load('visualization', '1', {'packages':['corechart', 'bar']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    $.get('/api/cities', function(response) {
        console.log(response);

        var chartData = [];
        for(var idx = 0; idx < response.length; ++idx) {
            var item = response[idx];
            chartData.push([item.cityName, item.population]);
        }

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'City Name');
        data.addColumn('number', 'Population');
        data.addRows(chartData);

        var options = {
            title: 'Hungarian Population Spread',
            pieHole: 0.4,
            slices: {
                0: {offset: 0.2},
                4: {offset: 0.1}
            }
        };

        //create and draw the chart from DIV
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }, 'json');
}


