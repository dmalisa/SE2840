// Class: SE2840 - Coin Flip Charter
// Name: Denise Malisa
// Class Section: 031

// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

/**
 * chartSetup
 * Set up the Google chart properties and other page events
 */
const chartSetup = () => {

    // Initialize the Google chart package
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(createDefaultDisplay);

    // Set up the button handler to call a function that updates the page
    document.getElementById("update").onclick = updateDisplay;
};

/**
 * createDefaultDisplay
 * Create the "default" page - display all data with no filters
 */
const createDefaultDisplay = () => {

    //initializing data for chart display
    let flipCoinsData = new Array();
    flipCoinsData.push(['Index', 'Coin flipper Execution Time', {role: 'style'}])
    for (let i = 1; i < results.length; i++) {
        let resultsData = results[i];
        flipCoinsData.push([i, resultsData.time, 'blue'])
    }
    const data = google.visualization.arrayToDataTable(flipCoinsData);

    const view = new google.visualization.DataView(data);
    // view.setColumns([])

    const options = {
        width: 1200,
        height: 400,
        legend: 'top',
        title: 'Coin Flipper Execution Time',
        chartArea: {width: '90%', height: '80%'},
    };

    // Display the chart
    const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(view, options);


    // Initialize the HTML of the table
    // creates a <table> element and a <body> element
    // const body = document.getElementsByTagName("body")[0];
    //const table = document.createElement("table");
    const table = document.getElementById("table1");
    const tableBody = document.getElementById("table1body")
    // const tableBody = document.createElement("tbody");

    // Iterate through the result set, adding table rows and table data
    for (let i = 0; i < results.length; i++) {
        //create table row
        const row = document.createElement("tr");

        //creating a column
        const cell1 = document.createElement("td");
        cell1.innerHTML = i.toString();
        const cell2 = document.createElement("td");
        cell2.innerHTML = results[i].id;
        const cell3 = document.createElement("td");
        cell3.innerHTML = results[i].coins;
        const cell4 = document.createElement("td");
        cell4.innerHTML = results[i].flips;
        const cell5 = document.createElement("td");
        cell5.innerHTML = results[i].browser;
        const cell6 = document.createElement("td");
        cell6.innerHTML = results[i].time;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);

        // add the row to the end of the table body
        tableBody.appendChild(row);

    }
    // put the <tbody> in the <table>
    table.appendChild(tableBody);

};


/**
 * drawChart
 * Display the given chartData in the Google chart
 */
const drawChart = (chartData) => {

    // Create a Google data table for the bar chart data
    //   Must include 2 columns
    //      A string for the 'Index'
    //      A number for the 'Coin Flipper Execution Time'
    let flipCoinsData = new Array();
    flipCoinsData.push(['Index', 'Coin flipper Execution Time', {role: 'style'}])
    for (let i = 1; i < chartData.length; i++) {
        let resultsData = chartData[i];
        flipCoinsData.push([i, resultsData.time, 'blue'])
    }
    const data = google.visualization.arrayToDataTable(flipCoinsData);

    // Set the options for the Google chart
    //   The chart must be 1200 pixels wide
    //   The chart must be 400 pixels tall
    //   The legend must be on the 'top'
    //   The chartArea should have a height that is 80% of the chart space
    //   The chartArea should have a width that is 90% of the chart space
    const options = {
        width: 1200,
        height: 400,
        legend: 'top',
        chartArea: {width: '90%', height: '80%'}

    }

    // Add the chartData to the data table
    // Draw the chart on the chart_div
    const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
};

/**
 * method used to update the display
 * based on the filters applied, firstly, by the radio button chosen then more specifically using the
 * filter value
 * method changes the chart data and hides rows that do not contain filtered information
 */
const updateDisplay = () => {
    // Retrieve the filter expression to determine what rows of the result set to show and hide.
    let filterValue = document.getElementById('filter').value;
    if (filterValue === " ") {
        createDefaultDisplay();
    }

    // Convert the provided results object elements to the data format supported by Google charts
    // Iterate through the result set, insert the appropriate values into the "chartData" object

    // Iterate through the results object elements filtering based on filter value and type
    // Create a new "filteredData" object to be used by Google charts based on the filter value
    //    i.e. repopulate it with only the data that the filter does not remove

    // Draw the chart with the new data
    // Determine which radio button is currently selected.
    if (document.getElementById('id1').checked) {
        let filteredData = new Array();
        for (let i = 0; i < results.length; i++) {
            if (results[i].id.includes(filterValue)) {
                filteredData.push(results[i]);
            }
        }
        drawChart(filteredData);
    } else if (document.getElementById('coins1').checked) {
        let filteredData = new Array();
        for (let i = 0; i < results.length; i++) {
            if (results[i].coins === parseInt(filterValue)) {
                filteredData.push(results[i]);
            }
        }
        drawChart(filteredData);
    } else if (document.getElementById('flips1').checked) {
        let filteredData = new Array();
        for (let i = 0; i < results.length; i++) {
            if (results[i].flips === parseInt(filterValue)) {
                filteredData.push(results[i]);
            }
        }
        drawChart(filteredData);
    } else if (document.getElementById('browser1').checked) {
        let filteredData = new Array();
        for (let i = 0; i < results.length; i++) {
            if (results[i].browser.includes(filterValue)) {
                filteredData.push(results[i]);
            }
        }
        drawChart(filteredData);
    }

    // Iterate through the results object elements filtering based on filter value and type
    // When done iterating, set the HTML of the table
    // Data must not be removed from the result set - The 'filtered' data is hidden in the table
    // Thus, the indices of the subset will match those of the original data set.
    //
    // NOTE: recall to show a table row element, set its style.display property to 'table-row'
    // NOTE: recall to hide an element, set its style.display property to 'none'
    if (document.getElementById('id1').checked) {
        for (let i = 0; i < results.length; i++) {
            let row = document.getElementById('table1body').rows[i].cells;
            if (!row[1].innerHTML.includes(filterValue)) {
                row = document.getElementById('table1body').rows[i];
                row.style.display = 'none';
            }
        }
    } else if (document.getElementById('coins1').checked) {
        for (let i = 0; i < results.length; i++) {
            let row = document.getElementById('table1body').rows[i].cells;
            if (!(parseInt(row[2].innerHTML) === parseInt(filterValue))) {
                row = document.getElementById('table1body').rows[i];
                row.style.display = 'none';
            }
        }
    } else if(document.getElementById('flips1').checked){
        for (let i = 0; i < results.length; i++) {
            let row = document.getElementById('table1body').rows[i].cells;
            if (!(parseInt(row[3].innerHTML) === parseInt(filterValue))) {
                row = document.getElementById('table1body').rows[i];
                row.style.display = 'none';
            }
        }
    } else if (document.getElementById('browser1').checked) {
        for (let i = 0; i < results.length; i++) {
            let row = document.getElementById('table1body').rows[i].cells;
            if (!row[4].innerHTML.includes(filterValue)) {
                row = document.getElementById('table1body').rows[i];
                row.style.display = 'none';
            }
        }
    }

};

window.onload = () => {
    chartSetup();
};
