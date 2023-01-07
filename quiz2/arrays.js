// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

// REPLACE THIS COMMENT WITH YOUR NAME

const ARRAY_LENGTH = 100;
const MAX_RANDOM = 20;

// Generate an array of random numbers
const array = Array.from(Array(ARRAY_LENGTH))
    .map(x => Math.floor(MAX_RANDOM * Math.random()));

// Print the numbers to the console
console.log(array);

// Create 'filtered_array' that contains only the elements of 'array' that are greater than 5
const filtered_array = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            filtered_array[i] = array[i];
        }
    }

// Print the numbers in 'filtered_array'
console.log(filtered_array);

// Create a 'doubled_array' that contains the elements of 'filtered_array' multiplied by 2
const doubled_array =  [];
    for (let i = 0; i < filtered_array.length; i++) {
        doubled_array[i] = filtered_array[i] * 2;
    }

// Print the numbers in 'doubled_array'
console.log(doubled_array);

// Compute the sum of all elements in 'doubled_array'
let sum = []
    for (let i = 0; i < doubled_array.length; i++) {
        sum = sum + doubled_array[i];
    }

// Print the sum
    console.log(sum);
