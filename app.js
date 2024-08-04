const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send("Sto cercando di far funzionare tutto");
 })
 
const server = app.listen(8080, function () {
    console.log("Express App running at http://127.0.0.1:8080/");
 })
 

