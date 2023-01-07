/**
 *Name: Denise Mlaisa
 *class: SE2840 031
 */
const express = require('express')
const {request, response} = require("express");
const app = express()
const port = 3000


// app.use(express.static(__dirname));
//
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.get("/add", (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    if (!isNaN(a) || typeof a !== "number" || !isNaN(b) || typeof b !== "number") {
        console.log("invalid input");
        res.sendStatus(404);
    }
    res.send({"answer": a + b});
})

app.get("/subtract", (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    if (!isNaN(a) || typeof a !== "number" || !isNaN(b) || typeof b !== "number") {
        res.sendStatus(404);
        console.log("invalid input");
    }
    res.send({"answer": a - b});
})

app.get("/multiply", (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    if (!isNaN(a) || typeof a !== "number" || !isNaN(b) || typeof b !== "number") {
        res.sendStatus(404);
        console.log("invalid input");
    }
    res.send({"answer": a * b});

})

app.get("/divide", (req, res) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    if (!isNaN(a) || typeof a !== "number" || !isNaN(b) || typeof b !== "number") {
        res.sendStatus(404);
        console.log("invalid input");
    }
    if (b < 0) {
        console.log("Zero division not applicable");
    }
    res.send({"answer": a / b});
})


app.get('/', (request, response) => {
    let pathname = request.query.pathname;
    if (pathname !== "/divide" || pathname !== "/multiply" ||
        pathname !== "/subtract" || pathname !== "/add"){
        request.sendStatus(404);
        console.log("Invalid pathname");
    }
        })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})