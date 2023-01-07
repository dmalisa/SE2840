const httpServer = require('http');
const files = require('fs');

//creating the server
const server1 = httpServer.createServer((request, response) => {
    console.log(request);
    console.log(response);

    //writer header tells browser how to render the response
    response.writeHead(200, {"Content-Type": "html"});
    const filePath = './html_file.html' // you don't have an index file
    response.write(files.readFileSync(filePath));

    // response.write("Hello from your server");
    //  response.write("<html><body><h1>Hello from server</h1></body></html>");
    response.end();
    // we can't write a whole page it isn't ideal
});

const express = require("express");
const myApp = new express();
myApp.use(express.static(__dirname+"/srv"))
myApp.listen(8090);
console.log("running on localhost://8090");


server1.listen(9000);

console.log("server is listening on http://localhost:9000");