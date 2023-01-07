// Class: SE2840 - Person Tracker
// Name: Denise Malisa
// Class Section: 031

// Import the express library
const express = require('express');

const personData = require('./PersonData.js');
const {request, response} = require("express");
const webpagedir = `${__dirname}/srv`;
// Create a new express application
const app = express();

// Instruct the app to listen on port 3000
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});

// Set a static route for root (/) to send index.html
app.get("/", (request, response) => {
    response.sendFile(`${webpagedir}/PersonTracker.html`);
});

// Set a static route for all resources that don't have an explicit route
//   to use the static directory webpagedir
app.use(express.static(webpagedir));

// TODO: Add additional functions to implement the server JSON API
//response for get request /all
app.get("/all", (request, response) => {
    response.send(personData)
})
//response for get request /PersonTracker and validates input or the query
app.get("/PersonTracker", (request, response) => {
app.use(express.static(__dirname+"/srv"/{index:"PersonTracker.js"}));
})

//response for get request /firstname and validates input or the query
app.get("/firstname", (request, response) => {
    let response_data = [];
    let filter_value = request.query.fname;
    filter_value.toLowerCase();
    if (!isInputAnInteger(parseInt(filter_value)) || filter_value instanceof String){
        for (let i = 0; i < personData.length; i++) {
            let data_point = personData[i];
            if (data_point.firstname.toLowerCase().includes(filter_value)) {
                response_data.push(data_point)
            }
        }
        response.send({
            "status": "success",
            "length": response_data.length,
            "values": response_data
        })
    } else {
        response.send({
            "status": "error",
            "message": "Invalid Filter value"
        })
    }

})
//response for get request /lastname and validates input or the query
app.get("/lastname", (request, response) => {
    let response_data = [];
    let filter_value = request.query.lname;
    filter_value.toLowerCase();
    if (!isInputAnInteger(parseInt(filter_value)) || filter_value instanceof String){
        for (let i = 0; i < personData.length; i++) {
            let data_point = personData[i];
            if (data_point.lastname.toLowerCase().includes(filter_value)) {
                response_data.push(data_point);
            }
        }
        response.send({
            "status": "success",
            "length": response_data.length,
            "values": response_data
        })
    } else {
        response.send({
            "status": "error",
            "message": "Invalid filter value"
        })
    }
})
//response for get request /age and validates input or the query
app.get("/age", (request, response) => {
    let response_data = []
    let filter_value = request.query.ageVal;
    filter_value = parseInt(filter_value);
    if (isInputAnInteger(filter_value)) {
        for (let i = 0; i < personData.length; i++) {
            let data_point = personData[i]
            if (data_point.age === filter_value) {
                response_data.push(data_point)
            }
        }
        response.send({
            "status": "success",
            "length": response_data.length,
            "values": response_data
        })
    } else if (filter_value < 0) {
        response.send({
            "status": "error",
            "message": "Filter value must be a number > 0"
        })
    } else {
        response.send({
            "status": "error",
            "message": "Invalid type for age"
        })
    }
})
//response for get request /hometown and validates input or the query
app.get("/hometown", (request, response) => {
    let response_data = []
    let filter_value = request.query.htown;
    filter_value.toLowerCase();
    //checking to see that filter value was not left empty
    if (filter_value === " ") {
        response.send({
            "status": "error",
            "message": "Filter value is required"
        })
    } else if(!isInputAnInteger(parseInt(filter_value)) || filter_value instanceof String){
        for (let i = 0; i < personData.length; i++) {
            let data_point = personData[i];
            if (data_point.hometown.toLowerCase().includes(filter_value)) {
                response_data.push(data_point);
            }
        }
        response.send({
            "status": "success",
            "length": response_data.length,
            "values": response_data
        })
    } else {
        response.send({
            "status": "error",
            "message": "Invalid filter value"
        })
    }
})


const isInputAnInteger = (value) => {
    // Make sure the input string is a number
    if(isNaN(value)) {
        return false;
    }

    // We now know the string contains a number, but is it an integer?
    // Parse the string to a float (decimal with precision) and then verify that it is an integer
    if(!Number.isInteger(parseFloat(value))) {
        return false;
    }

    // The input string is a number and an integer
    return true;
}