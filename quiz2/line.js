// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

// REPLACE THIS COMMENT WITH YOUR NAME

// Input point 1
let x1 = prompt("Enter X1:");
let y1 = prompt("Enter Y1:");

// Input point 2
let x2 = prompt("Enter X2:");
let y2 = prompt("Enter Y2:");

// Input count
let count = prompt("Enter a number:");

// Determine the equation for the line between the two points
//   y = a*x + b
//   Compute 'a' and 'b'
// Print out the equation

let a = (y2 - y1) / (x2 - x1);
let b = y1 - a * x1;

console.log("y = " + a + " * x + " + b);

// Compute the values of the equation from 0 to the entered count (inclusive)
// Print out the values
//  Ex: y(0) = ...
//      y(1) = ...
//  etc.


for (let i = 0; i < count+1; i++) {
    let y = a * i + b;
    console.log("y" + "(" + (i) + ")" + " = " + y);
}