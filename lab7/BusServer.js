/*Lab Name: Bus Tracker
Name: malisad
Course: 2840
Section Number: 031
Created: 2/2/2022 at 10:43 AM*/

const express = require('express');
const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/bustracker");
const model = mongoose.model('bus', {rt: String, vid: String, spd: Number, tmstmp: String, lat: String, lon: String});

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
    response.sendFile(`${webpagedir}/BusSpeed.html`);
});

// Set a static route for all resources that don't have an explicit route
//   to use the static directory webpagedir
app.use(express.static(webpagedir));

//response for get request /BusSpeed and validates input or the query
app.get("/BusSpeed", (request, response) => {
    let speed = request.query.spd;
    speed = parseInt(speed);

    if (speed <= 0) {
        response.send({
            "status": "error",
            "message": "Filter value must be a number > 0"
        })
    } else if (isInputAnInteger(speed)) {

        model.find({spd: {$gte: speed}}).then((data)=>{
            console.log("success");
                response.send({
                    "status": "success",
                    "values": data
                })
        }).catch((error)=>{
            console.log("error" + error);
            response.send({
                "status": "error",
                "message": "Invalid type for speed"
            })
        })
    } /*else if (speed <= 0) {
        response.send({
            "status": "error",
            "message": "Filter value must be a number > 0"
        })
    }*/ else {
        response.send({
            "status": "error",
            "message": "Invalid type for speed"
        })
    }
})

/**
 * method checks if the speed value is a number
 * @param value speed value to be checked
 * @returns {boolean} true if the speed is a number
 */
const isInputAnInteger = (value) => {
    // Make sure the input string is a number
    if (isNaN(value)) {
        return false;
    }

    // We now know the string contains a number, but is it an integer?
    // Parse the string to a float (decimal with precision) and then verify that it is an integer
    if (!Number.isInteger(parseFloat(value))) {
        return false;
    }

    // The input string is a number and an integer
    return true;
}