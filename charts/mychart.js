<!--
Name: malisad
Course: 2840
Section Number: 031
Created: 1/12/2022 at 11:49 AM
-->
/*
method for drawing the chart
 */
const drawChart = () => {
    //chart data
    const data = new google.visualization.DataTable();

    data.addColumn('number', 'Year');
    data.addColumn('number', '# of Wolves');
    data.addColumn('number', '# of Moose');

    data.addRow([2010, 16, 510]);
    data.addRow([2011, 16, 515]);
    data.addRow([2012, 9, 750]);
    data.addRow([2013, 8, 975]);
    data.addRow([2014, 9, 1050]);
    data.addRow([2015, 3, 1250]);
    data.addRow([2016, 2, 1300]);
    data.addRow([2017, 2, 1600]);
    data.addRow([2018, 2, 1500]);
    data.addRow([2019, 14, 2060]);

    //chart customizations and styling
    const options = {
        width: 1200,
        height: 400,
        legend: 'top',
        title: 'Wolves and Moose on Isle Royale',
        chartArea: { width: '90%', height: '80%'},
        vAxis: {
            scaleType: 'log',
        },
        hAxis: {
            format: '',
        },
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
};

/*
method does the drawing of the pieChart
 */
const drawPie = () => {

    // data of the pieChart
    const data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Week'],
        ['Sleeping',     42],
        ['Class',      19],
        ['Homework',  35],
        ['Web Surfing', 28],
        ['Work',   6 ]
    ]);

    //customization and styling of the pie chart
    const options = {
        title: 'My Daily Activities',
        // is3D: true,
        slices:{
            1: {offset: 0.2},
            4: {offset: 0.4}
        },
        pieHole: 0.5,
        pieStartAngle: 50,
    };

   const chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
    chart.draw(data, options);
}


window.onload = () => {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    google.charts.setOnLoadCallback(drawPie);
};