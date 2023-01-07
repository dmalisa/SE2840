/**
 *Name: Denise Mlaisa
 *class: SE2840 031
 */
const readline = require('readline');

const greeting = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

greeting.question("What is your name? ", (answer) => {
    console.log("Hello: " + answer);
    //closing input stream
    greeting.close();
});

/* Doesn't work because Node.ja does not run in the browser environment,
 * so it has no access to the BOM elements
 */
/*let greeting2 = window.prompt("What is your name", "Carol");
window.alert("Hello " + greeting2);*/
