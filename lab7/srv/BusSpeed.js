// Lab Name: Bus Tracker
// Name: malisad
// Course: 2840
// Section Number: 031
// Created: 2/2/2022 at 10:43 AM

let url = "http://localhost:3000";
let markerLayer;
let map;
let speed;

//method calls the run once the submit button has been clicked
window.onload = () => {
    let submitBtn = document.getElementById('submit');
    submitBtn.onclick = run;
}

/**
 * method called after the display button is called
 */
const run = () => {
    speed = document.getElementById('speedInput').value;
    console.log(speed);
    url = "http://localhost:3000/BusSpeed?spd=" + speed;
    ajaxRequest();
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
    cell1.innerHTML = "Bus";
    const cell2 = document.createElement("th");
    cell2.innerHTML = "Latitude";
    const cell3 = document.createElement("th");
    cell3.innerHTML = "Longitude";
    const cell4 = document.createElement("th");
    cell4.innerHTML = "Speed (MPH)";

    table_heading.appendChild(cell1);
    table_heading.appendChild(cell2);
    table_heading.appendChild(cell3);
    table_heading.appendChild(cell4);

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
        cell1.innerHTML = data[x].vid;
        const cell2 = document.createElement("td");
        cell2.innerHTML = data[x].lat;
        const cell3 = document.createElement("td");
        cell3.innerHTML = data[x].lon;
        const cell4 = document.createElement("td");
        cell4.innerHTML = data[x].spd;

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);

        // add the row to the end of the table body
        tableBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    table.appendChild(tableBody);
    let numSpeeding = document.getElementById('speedInfo');
    numSpeeding.innerHTML = "Buses speeding >= " + speed + " mph: " + (table.rows.length-1);
    clickedRow();
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
        map = L.map('map').setView([43.044240, -87.906446], 11);
    } else {
        //clear all markers in the map
        markerLayer.clearLayers();
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    //adding a layer to the map
    markerLayer = L.layerGroup().addTo(map);

    for (let x = 0; x < data.length; x++) {
        let position = [data[x].lat, data[x].lon]
       const marker = L.marker(position).addTo(markerLayer);
        marker.bindPopup(data[x].rt.toString()).openPopup();
        marker.bindTooltip(data[x].vid.toString() + ": " + data[x].spd.toString(),{
            direction:'bottom',
            offset:[0,2],
            permanent: true
        }).openTooltip();
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
    document.getElementById('errorMessages').classList.add('visually-hidden');
    const table = document.getElementById("table");
    // clear the table with each new call to the table
    for (let i = 0; i < table.rows.length;) {
        table.deleteRow(i);
    }
    createTable(data);
    updateMap(data);
}

/**
 * creating AJAX request
 * and method also creates the error message when an error response is received
 */
const ajaxRequest = () => {
    fetch(url).then((response) => {
        if (response.status !== 200) {
            console.log("error occurred");
        } else {
            response.json().then((data) => {
                if (data["status"] === "error") {
                    document.getElementById('errorMessages').classList.remove('visually-hidden');
                    let errorMsg = document.getElementById('errorMessages');
                    errorMsg.innerHTML = data["status"] + " " + data["message"];
                    console.log(data["status"]);
                    console.log(data["message"]);
                }else {
                    doDisplay(data["values"]);
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
    for (const row of tableRows) {
        row.onclick = ((event) => {
            const eventTarget = event.currentTarget;
            // console.log(eventTarget);
            const position = [parseInt(row.cells[1].innerHTML), parseInt(row.cells[2].innerHTML)];
            map.panTo(position);
        });
    }
}

