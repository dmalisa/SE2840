// SE2840 Winter 2021 - Lab 2 JS Coin Flipper
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

/**
 * run - Coin flipper entry point
 *       NOTE: Feel free to change this to use a JavaScript class if desired
 */
class coinFlipper {

    constructor() {

        /**
         * Gathers input from the user,
         * controls execution, and measures how long it takes to execute.
         */
        this.run = () => {
            let numberOfCoins = 0; // number of coins to flip
            let numberOfRepetitions = 0; // number of times the coins are flipped

            let frequency = [];

            numberOfCoins = prompt("Enter the number of coins to be flipped: ");
            numberOfCoins = parseInt(numberOfCoins);
            numberOfRepetitions = prompt("Enter the number of flips: ");
            numberOfRepetitions = parseInt(numberOfRepetitions);

            while (!validate(numberOfCoins) || coinNumValidate(numberOfCoins)) {
                alert("Invalid input. Try again.");
                numberOfCoins = prompt("Enter the number of coins to be flipped: ");
                numberOfCoins = parseInt(numberOfCoins);
            }
            while (!validate(numberOfRepetitions) || numberOfFlips(numberOfRepetitions)) {
                alert("Invalid input. Try again.");
                numberOfRepetitions = prompt("Enter the number of flips: ");
                numberOfRepetitions = parseInt(numberOfRepetitions);
            }

            let executionTime = performance.now();
            frequency = flipCoins(numberOfCoins, numberOfRepetitions);
            executionTime = performance.now() - executionTime;
            executionTime = executionTime.toFixed(5);

            printHistogram(numberOfCoins, numberOfRepetitions, frequency);
            console.log("Coin Flipper Time: " + executionTime + "ms");
        };

        /**
         * This method flips a specified number of coins a specified number of times
         * and gathers the number of times a certain number of heads
         * occurred in each flip into a frequency[] array.
         * @param coins the number of coins to flip
         * @param times the number of times to flip each coin
         * @return array representing the frequency of 'heads' for each flip repetition
         */
        const flipCoins = (coins, times) => {
            let frequency;
            frequency = new Array(coins + 1);
            let i;
            for (i = 0; i < frequency.length; i++) {
                frequency[i] = 0;
            }
            let rep;
            for (rep = 0; rep < times; rep++) {
                let heads = flipCoinsOneTime(coins);
                frequency[heads++] = frequency[heads] + 1;
            }
            return frequency;
        };

        /**
         * This method flips a set of coins and returns the number heads that occurred.
         * It makes use of a random number generator to randomly generate heads or tails for each flip.
         * @param coins the number of coins to flip
         * @return the number of heads that occurred in the flips
         */
        const flipCoinsOneTime = (coins) => {
            let heads = 0;
            let i;
            for (i = 0; i < coins; i++) {
                heads += Math.floor(Math.random() * 2); // make sure it's an int
            }
            return heads;
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
            console.log("Number of times each head count occurred in " + times + " flips of " + coins + " coins:");

            let heads = [];
            let i;
            for (i = 0; i < frequency.length; i++) {
                heads[i] = 0;
            }
            for (heads = 0; heads < frequency.length; heads++) {

                let fractionOfReps = frequency[heads] / times;
                let numOfAsterisks = Math.round(fractionOfReps * 100);
                let i;
                let line = "";
                for (i = 0; i < numOfAsterisks; i++) {
                    line = line + "*";
                }
                console.log(" " + heads + "  " + frequency[heads] + "  " + line);
            }
        };

        /**
         * method checks that a number is valid
         * @param number being checked
         * @returns {boolean} true if the number is valid
         */
        const validate = (number) => {
            if (isInputAnInteger(number)) {
                return true;
            }
        };

        /**
         * method determines whether a number is valid
         * by checking that the field isn't null
         * and checking that it is an integer
         * @param value to be checked
         * @returns {boolean} true if the number is valid
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
        };

        /**
         * checks that the number of coins entered
         * is between 1 and 10
         * @param coins the number of coins
         */
        const coinNumValidate = (coins) => {
            if (coins > 10 && coins < 1) {
                console.log("invalid number of coins");
            }
        };

        /**
         * checks that the number of fips is
         * between 1 and 1000000
         * @param flips
         */
        const numberOfFlips = (flips) => {
            if (flips > 1000000 && flips < 1) {
                console.log("invalid number of flips");
            }
        };
    }
}

// Run the coin flipper code when the browser finishes loading the js file
let flipper = new coinFlipper();
flipper.run();

