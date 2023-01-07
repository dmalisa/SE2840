/**
 *Name: Denise Mlaisa
 *class: SE2840 031
 */
const readline = require('readline');
const file = require('fs')

const filename = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

filename.question("Enter a filename ", (answer) => {
    file.readFile(answer,((err, data) => {
        //closing input stream
        filename.close();
        if(err){
            console.log("error occurred")
        }
        console.log(data.toString());
    }))

});