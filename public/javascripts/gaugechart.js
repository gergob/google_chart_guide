google.load('visualization', '1', {'packages':['corechart','gauge']});
google.setOnLoadCallback(drawChart);

function drawChart() {
    $.get('/api/gaugedata', function(response) {
        console.log(response);
        var chartData = [];
        for(var idx = 0; idx < response.length; ++idx) {
            var item = response[idx];
            chartData.push([item.data, item.value]);
        }

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Temperature');
        data.addColumn('number', 'C');
        data.addRows(chartData);

        var options = {
            title: 'Temperatures',
            width: 580,
            height: 320,
            min: 0,
            max: 65,
            greenFrom: 5,
            greenTo: 20,
            redFrom: 30,
            redTo: 60,
            yellowFrom: 20,
            yellowTo: 30,
            minorTicks: 5
        };

        //create and draw the chart from DIV
        var chart = new google.visualization.Gauge(document.getElementById('gaugechart'));
        chart.draw(data, options);
    }, 'json');
}


