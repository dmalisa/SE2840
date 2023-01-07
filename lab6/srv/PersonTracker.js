// Class: SE2840 - Person Tracker
// Name: Denise Malisa
// Class Section: 031

// TODO add client side functionality
//based on the filter value you'd change the url
let url = "http://localhost:3000";
let markerLayer;
let map;

window.onload = () => {
    let displayBtn = document.getElementById('displayButton');
    displayBtn.onclick = run;
    document.getElementById('allRadio').onclick = disableFilterText;
    document.getElementById('fnRadio').onclick = enableFilterText;
    document.getElementById('lnRadio').onclick = enableFilterText;
    document.getElementById('ageRadio').onclick = enableFilterText;
    document.getElementById('homeRadio').onclick = enableFilterText;
}

/**
 * method called after the display button is called
 */
const run = () => {
    url = "http://localhost:3000";
    determineURl();
    ajaxRequest();
}

//method enables the filter
const enableFilterText = () => {
    document.getElementById('filterText').disabled = false;
}

// method disabled the filter
const disableFilterText = () => {
    document.getElementById('filterText').disabled = true;
}

let filterValuePresent = false;

/**
 * method used to determine the different url options based on the filter value
 */
const determineURl = () => {
    let filterValue = document.getElementById('filterText').value;
    if (document.getElementById('allRadio').checked) {
        url = url + "/all";
        document.getElementById('filterText').disabled = true;
    } else if (document.getElementById('fnRadio').checked) {
        url = url + "/firstname?fname=" + filterValue;
        document.getElementById('filterText').disabled = false;
    } else if (document.getElementById('lnRadio').checked) {
        url = url + "/lastname?lname=" + filterValue;
        document.getElementById('filterText').disabled = false;
    } else if (document.getElementById("ageRadio").checked) {
        url = url + "/age?ageVal=" + filterValue;
        document.getElementById('filterText').disabled = false;
    } else if (document.getElementById("homeRadio").checked) {
        url = url + "/hometown?htown=" + filterValue;
        document.getElementById('filterText').disabled = false;
    }
    if (filterValue === null) {
        filterValuePresent = true;
    }
}

/**
 * function handles errors
 * @param error
 */
function handleError(error) {
    console.log(error);
}

/**
 * this method creates the table and also
 * calls the clicked method
 * @param data
 */
const createTable = (data) => {
    // creates a <table> element
    const table = document.getElementById("table");
    // creating a table head
    const tHead = document.createElement("thead");
    //create table row
    const table_heading = document.createElement("tr");
    //creating a column in the table header
    const cell1 = document.createElement("th");
    cell1.innerHTML = "FirstName";
    const cell2 = document.createElement("th");
    cell2.innerHTML = "LastName ";
    const cell3 = document.createElement("th");
    cell3.innerHTML = "age";
    const cell4 = document.createElement("th");
    cell4.innerHTML = "hometown";
    const cell5 = document.createElement("th");
    cell5.innerHTML = "Latitude";
    const cell6 = document.createElement("th");
    cell6.innerHTML = "Longitude";

    table_heading.appendChild(cell1);
    table_heading.appendChild(cell2);
    table_heading.appendChild(cell3);
    table_heading.appendChild(cell4);
    table_heading.appendChild(cell5);
    table_heading.appendChild(cell6);

    //add the tHead to the table
    tHead.appendChild(table_heading);

    // add the row to the end of the table body
    table.appendChild(tHead);

    //creating a tableBody
    const tableBody = document.createElement("tbody");

    for (let x = 0; x < data.length; x++) {
        //create table row
        const row = document.createElement("tr");

        //creating a column
        const cell1 = document.createElement("td");
        cell1.innerHTML = data[x].firstname;
        const cell2 = document.createElement("td");
        cell2.innerHTML = data[x].lastname;
        const cell3 = document.createElement("td");
        cell3.innerHTML = data[x].age;
        const cell4 = document.createElement("td");
        cell4.innerHTML = data[x].hometown;
        const cell5 = document.createElement("td");
        cell5.innerHTML = data[x].location.lat;
        const cell6 = document.createElement("td");
        cell6.innerHTML = data[x].location.lon;

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
    clickedRow();
}

/**
 * this method creates the map for the very first time
 * and is only called when the url included /all
 * @param data
 */
const createMap = (data) => {

    if (map === undefined) {
        map = L.map('map').setView([39.8283, -98.5795], 4);
        //adding a layer to the map
        markerLayer = L.layerGroup().addTo(map);
    }

    //clear all markers in the map
    markerLayer.clearLayers();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (let x = 0; x < data.length; x++) {
        let position = [data[x].location.lat, data[x].location.lon]
        L.marker(position).addTo(markerLayer);
    }

}

/**
 * method updates the map
 * firstly it will clear the previous markers
 * Then create a new layer and put that on the map
 * with new markers based on the data
 * @param data
 */
const updateMap = (data) => {

    if (map === undefined) {
        map = L.map('map').setView([39.8283, -98.5795], 4);
    } else{
        //clear all markers in the map
        markerLayer.clearLayers();
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //adding a layer to the map
    markerLayer = L.layerGroup().addTo(map);

    for (let x = 0; x < data.length; x++) {
        let position = [data[x].location.lat, data[x].location.lon]
        L.marker(position).addTo(markerLayer);
    }

}

/**
 * this method implements the calling of the building of the table and map
 * once a response is received, and it also clears a table before the next filter is chosen
 * the method also calls the sort button method which in turn reveals the sorting function once the
 * sort buttons is pressed
 * @param data
 */
const doDisplay = (data) => {
    // document.getElementById('filterText').disabled = false;
    if (document.getElementById('allRadio').checked) {
        document.getElementById('filterText').disabled = true;
        const table = document.getElementById("table");
        // clear the table with each new call to the table
        for (let i = 0; i < table.rows.length;) {
            table.deleteRow(i);
        }
        createTable(data);
        createMap(data);
        sort();
    } else if (document.getElementById('fnRadio').checked) {
        document.getElementById('filterText').disabled = false;
        const table = document.getElementById("table");
        // clear the table with each new call to the table
        for (let i = 0; i < table.rows.length;) {
            table.deleteRow(i);
        }
        createTable(data["values"]);
        updateMap(data["values"]);
        sort();
    } else if (document.getElementById('lnRadio').checked) {
        document.getElementById('filterText').disabled = false;
        const table = document.getElementById("table");
        // clear the table with each new call to the table
        for (let i = 0; i < table.rows.length;) {
            table.deleteRow(i);
        }
        createTable(data["values"]);
        createMap(data["values"]);
        sort();
    } else if (document.getElementById("ageRadio").checked) {
        document.getElementById('filterText').disabled = false;
        const table = document.getElementById("table");
        // clear the table with each new call to the table
        for (let i = 0; i < table.rows.length;) {
            table.deleteRow(i);
        }
        createTable(data["values"]);
        createMap(data["values"]);
        sort();
    } else if (document.getElementById("homeRadio").checked) {
        document.getElementById('filterText').disabled = false;
        const table = document.getElementById("table");
        // clear the table with each new call to the table
        for (let i = 0; i < table.rows.length;) {
            table.deleteRow(i);
        }
        createTable(data["values"]);
        createMap(data["values"]);
        sort();
    }

}

/**
 * creating AJAX request
 * and method also creates the error message when an error response is received
 */
const ajaxRequest = () => {
    fetch(url).then((response) => {
        if (response.status != 200) {
            console.log("error occurred");
        } else {
            response.json().then((data) => {
                if (data["status"] === "error") {
                    document.getElementById('messages').classList.remove('visually-hidden');
                    let errorMsg = document.getElementById('messages');
                    errorMsg.innerHTML = data["status"] + " " + data["message"];
                    console.log(data["status"]);
                    console.log(data["message"]);
                } else if (data["values"].length === 0 && filterValuePresent) {
                    console.log("Filter value not found in data");
                    document.getElementById('messages').classList.remove('visually-hidden');
                    let errorMsg = document.getElementById('messages');
                    errorMsg.innerHTML = "Filter value not found in data";
                } else {
                    doDisplay(data);
                }
            }).catch((error) => {
                handleError(error);
            })
        }
    }).catch(() => {
        console.log("error retrieving data");
    })
}

/**
 * this method takes care of the panning into a specific marker
 * of the person whose row the user has clicked and reflecting that the person of the row clicked
 * is located where on the map
 */
const clickedRow = () => {
    const tableRows = document.getElementsByTagName("tr");
    for(const row of tableRows) {
        row.onclick = ((event) => {
            const eventTarget = event.currentTarget;
            console.log(eventTarget);
            const position = [ parseInt(row.cells[4].innerHTML), parseInt(row.cells[5].innerHTML) ];
            map.panTo(position);
        });
    }
}

/**
 * method makes the sort function visible,
 * and it calls the sorttable method when the sort button is clicked
 */
const sort = () => {
    document.getElementById('sortControl')
        .classList.remove('visually-hidden');
    const sortBtn = document.getElementById('sortButton');
    sortBtn.onclick = sortTable;
}

/**
 * method sorts the table according to the filter values chosen
 * inspiration derived from w3schools
 */
const sortTable = () => {
    console.log("The sort button was clicked");
    let sortTypeNumber;
    const sortByOptions = document.getElementById('sortType');
    const sortType = sortByOptions.options[sortByOptions.selectedIndex].text;

    if (sortType === "Name"){
        sortTypeNumber = 0;
    } else if (sortType === "Hometown"){
       sortTypeNumber = 3;
    } else if(sortType === "Age"){
        sortTypeNumber = 2;
    }

    console.log(sortTypeNumber);

    const sortByDirection = document.getElementById('sortDirection');
    let sortDirection = sortByDirection.options[sortByDirection.selectedIndex].text;

    let tableBody = document.getElementsByTagName('tbody');
    let switched = true;
    let rows;
    let switchThis;
    let currentRow;
    let nextRow;
    let i =1;
    let switchNumber = 0;
    /* Make a loop that will continue until
    no switching has been done: */

    while (switched) {
        // Start by saying: no switching is done:
        switched = false;
        rows = document.getElementsByTagName("tr");
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (let i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            switchThis = false;

            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            currentRow = rows[i].cells[sortTypeNumber];
            nextRow = rows[i + 1].cells[sortTypeNumber];

            if (sortDirection === "Increasing") {
                if(sortType === "Age"){
                    if (Number(currentRow.innerHTML) > Number(nextRow.innerHTML)) {
                        switchThis = true;
                        break;
                    }
                } else if (currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    switchThis = true;
                    break;
                }
            } else if (sortDirection === "Descending") {
                if (currentRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    switchThis = true;
                    break;
                }
            }
        }

        if (switchThis) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switched = true;
            // Each time a switch is done, increase this count by 1:
            switchNumber++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchNumber === 0 && sortDirection === "Increasing") {
                sortDirection = "Decreasing";
                switched = true;
            }
        }
    }
}