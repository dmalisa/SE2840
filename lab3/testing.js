/*
// Class: SE2840 - JavaScript Coin Flipper DOM
// Name: Denise Malisa
// Class Section: 031

// In Webstorm: in File/Settings->Languages & Frameworks->Javascript, set language version to ECMAScript 6+
//              in File/Settings->Languages & Frameworks->Javascript->Code Quality Tools->JSHint, check Enable
// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

window.onload = () => {
    /!* TODO - Set up events and code to process user input *!/

    let button = document.getElementById("button");
    button.onclick = noInputGiven;
    /!*let coins = "";
    let flips = "";
    try{
        coins.document.getElementById("coins").style.visibility = "hidden";
        flips.document.getElementById("flips").style.visibility = "hidden";
    } catch (T){

    }*!/


}

const noInputGiven = () => {
    let coins = "";
    let flips ="";

    const numCoins = document.getElementById("numCoins");
    const numFlips = document.getElementById("numOfFlips");

    coins = document.getElementById("coins").style.visibility = "hidden";
    flips = document.getElementById("flips").style.visibility = "hidden";

    if (!isInputAnInteger(numCoins)) {
        coins = document.getElementById("coins").innerHTML
            = "Input value is not valid. No input given";
        if (coins.style.visibility === "hidden") {
            coins.style.visibility = "visible";
        }
    }

    if (!isInputAnInteger(numFlips)){
        flips = document.getElementById("flips").innerHTML
            = "Input value is not valid. No input given";
        if (flips.style.visibility === "hidden") {
            flips.style.visibility = "visible";
        }
    }

};

/!**
 * method determines whether a number is valid
 * by checking that the field isn't null
 * and checking that it is an integer
 * @param value to be checked
 * @returns {boolean} true if the number is valid
 *!/
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
};

/!**
 * checks that the number of coins entered
 * is between 1 and 10
 * @param coins the number of coins
 *!/
const coinNumValidate = (coins) => {
    let valid = true;
    if (coins > 10 || coins < 1) {
        valid = false;
    }
    return valid;
};

/!**
 * checks that the number of fips is
 * between 1 and 1000000
 * @param flips
 *!/
const numberOfFlips = (flips) => {
    let valid = true;
    if (flips > 1000000 || flips < 1) {
        valid = false;
    }
    return valid;

};*/
