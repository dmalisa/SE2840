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
let numCoins;
let numFlips;

window.onload = () => {
    /* TODO - Set up events and code to process user input */
    let button = document.getElementById("button");
    button.onclick = run;
}

const run = () => {
    let body = document.getElementsByTagName('body')[0];

    numCoins = document.getElementById("num_of_Coins").value;
    numFlips = document.getElementById("num_Of_Flips").value;

    numCoins = parseInt(numCoins);
    numFlips = parseInt(numFlips);
    let executionTime_label;
    if (noInputGiven() && integer() && validateValues()) {
        let frequency = [];
        let executionTime = performance.now();
        frequency = flipCoins();
        executionTime = performance.now() - executionTime;

        printHistogram(numCoins, numFlips, frequency);

        executionTime_label = document.createElement('label');
        executionTime_label.innerHTML = "Coin Flipper Time: " + executionTime + "ms";
        executionTime_label.style.margin = '25px';
        executionTime_label.style.borderWidth = '3px';
        executionTime_label.style.borderColor = 'black';
        executionTime_label.style.borderStyle = 'outset';
        executionTime_label.style.backgroundColor = 'greenyellow';
        body.appendChild(executionTime_label);
    }

}

const noInputGiven = () => {
    let coins = "";
    let flips = "";
    let valid = true;

    coins = document.getElementById('coins');
    coins.style.visibility = "hidden";
    flips = document.getElementById('flips');
    flips.style.visibility = "hidden";

    if (!noInput(numCoins)) {
        valid = false;
        coins = document.getElementById("coins").innerHTML
            = "Input value is not valid. No input given";

        coins = document.getElementById('coins');
        coins.style.visibility = "visible";
    } else {
        coins = document.getElementById('coins');
        coins.style.visibility = "hidden";
    }

    if (!noInput(numFlips)) {
        valid = false;
        flips = document.getElementById("flips").innerHTML
            = "Input value is not valid. No input given";

        flips = document.getElementById('flips')
        flips.style.visibility = "visible";

    } else {
        flips = document.getElementById('flips')
        flips.style.visibility = "hidden";
    }
    return valid;
};

const integer = () => {
    let coins = "";
    let flips = "";
    let valid = true;

    coins = document.getElementById('coins');
    coins.style.visibility = "hidden";
    flips = document.getElementById('flips');
    flips.style.visibility = "hidden";

    if (!isInteger(numCoins)) {
        valid = false;
        coins = document.getElementById("coins").innerHTML
            = "Input value is not valid. Input must be an integer.";

        coins = document.getElementById('coins');
        coins.style.visibility = "visible";
    } else {
        coins = document.getElementById('coins');
        coins.style.visibility = "hidden";
    }

    if (!isInteger(numFlips)) {
        valid = false;
        flips = document.getElementById("flips").innerHTML
            = "Input value is not valid. Input must be an integer";

        flips = document.getElementById('flips')
        flips.style.visibility = "visible";

    } else {
        flips = document.getElementById('flips')
        flips.style.visibility = "hidden";
    }
    return valid;
};

const validateValues = () => {
    let coins = "";
    let flips = "";
    let valid = true;

    coins = document.getElementById('coins');
    coins.style.visibility = "hidden";
    flips = document.getElementById('flips');
    flips.style.visibility = "hidden";

    if (!coinNumValidate(numCoins)) {
        valid = false;
        coins = document.getElementById("coins").innerHTML
            = "Input value " + numCoins + " is not valid. Input must be >= 1 and <= 10.";

        coins = document.getElementById('coins');
        coins.style.visibility = "visible";
    }
    if (!flipsNumValidate(numFlips)) {
        valid = false;
        flips = document.getElementById('flips').innerHTML
            = "Input value " + numFlips + " is not valid. Input must be >= 1 and <= 1000000.";

        flips = document.getElementById('flips');
        flips.style.visibility = "visible";
    }
    return valid;
}

/**
 * This method flips a specified number of coins a specified number of times
 * and gathers the number of times a certain number of heads
 * occurred in each flip into a frequency[] array.
 * @param coins the number of coins to flip
 * @param times the number of times to flip each coin
 * @return array representing the frequency of 'heads' for each flip repetition
 */
const flipCoins = () => {
    let frequency;
    frequency = new Array(numCoins + 1);
    let i;
    for (i = 0; i < frequency.length; i++) {
        frequency[i] = 0;
    }
    let rep;
    for (rep = 0; rep < numFlips; rep++) {
        let heads = flipCoinsOneTime(numCoins);
        frequency[heads] = frequency[heads] + 1;
    }
    return frequency;
};

/**
 * This method flips a set of coins and returns the number heads that occurred.
 * It makes use of a random number generator to randomly generate heads or tails for each flip.
 * @param coins the number of coins to flip
 * @return the number of heads that occurred in the flips
 */
const flipCoinsOneTime = () => {
    let heads = 0;
    let i;
    for (i = 0; i < numCoins; i++) {
        heads += Math.floor(Math.random() * 2); // make sure it's an int
    }
    return heads;
};

const noInput = (value) => {
    // Make sure the input string is a number
    if (isNaN(value)) {
        return false;
    }
    return true;
}

const isInteger = (value) => {
    // We now know the string contains a number, but is it an integer?
    // Parse the string to a float (decimal with precision) and then verify that it is an integer
    if (!Number.isInteger(parseFloat(value))) {
        return false;
    }
    return true;
}

/**
 * checks that the number of coins entered
 * is between 1 and 10
 * @param coins the number of coins
 */
const coinNumValidate = (coins) => {
    let valid = true;
    if (coins > 10 || coins < 1) {
        valid = false;
    }
    return valid;
};

/**
 * checks that the number of fips is
 * between 1 and 1000000
 * @param flips
 */
const flipsNumValidate = (flips) => {
    let valid = true;
    if (flips > 1000000 || flips < 1) {
        valid = false;
    }
    return valid;

};

/**
 * This method prints a histogram of the number of heads that occurred for a specified number of flip repetitions
 * Notes: The output generated for coins=5 and times=100000 may look something like this:
 *
 * Number of times each head count occurred in 100000 flips of 5 coins:
 * 0  3076  ***
 * 1  15792  ****************
 * 2  31348  *******************************
 * 3  31197  *******************************
 * 4  15552  ****************
 * 5  3035  ***
 *
 * @param coins the number of coins flipped in each repetition
 * @param times the number of times the coins were flipped
 * @param frequency the frequency (count) of heads for each flip repetition
 */
const printHistogram = (coins, times, frequency) => {

    const body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");
    table.style.width = '700px';
    table.style.margin = '25px';
    // creating all cells

    let progress;
    for (let i = 0; i < frequency.length; i++) {
        // creates a table row
        const row = document.createElement("tr");

        let fractionOfReps = frequency[i] / times;
        let loadValue = Math.round(fractionOfReps * 100);

        for (let j = 0; j < 3; j++) {


            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const cell = document.createElement("td");
            cell.id = j.toString();
            if (cell.id === '0') {
                cell.style.width = '50px';
                cell.innerHTML = i.toString();
            }
            if (cell.id === '1') {
                cell.style.width = '50px';
                cell.innerHTML = frequency[i];
            }
            if (cell.id === '2') {
                progress = document.createElement('progress');
                progress.value = loadValue;
                progress.max = 100;
                // progress.style.width = '90%';
                progress.style.width = '100%';
                progress.style.height = '20px';
                progress.innerHTML = loadValue.toString() + "%";
                cell.appendChild(progress);
                // document.getElementById("progress").innerHTML = loadValue.toString() + "%";
            }

            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tableBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    table.appendChild(tableBody);
    // appends <table> into <body>
    body.appendChild(table);
    // sets the border attribute of table to 2;
    table.setAttribute("border", "2");

};
