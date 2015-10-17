google.load('visualization', '1', {'packages':['corechart', 'bar']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    $.get('/api/cities', function(response) {
        console.log(response);
        var chartData = [];
        for(var idx = 0; idx < response.length; ++idx) {
            var item = response[idx];
            chartData.push([item.cityName, item.income]);
        }

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'City Name');
        data.addColumn('number', 'Income');
        data.addRows(chartData);

        var options = {
            title: 'Hungarian Income Spread'
        };

        //create and draw the chart from DIV
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }, 'json');
}


