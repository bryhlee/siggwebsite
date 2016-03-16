/* -------- LOAD EXPRESS-------- */
var express = require('express');
var server = express();

/* -------- SERVE FILES -------- */
server.use(express.static(__dirname + '/'));
server.use(function(sreq, res) {
    res.sendFile(__dirname + '/index.html');
});

/* -------- DEPENDENCIES -------- */
var bodyParser = require('body-parser');
var path = require('path');

server.use(bodyParser.urlencoded({extended: true }));
server.use(bodyParser.json() );


/* -------- RUN LOCAL SERVER -------- */
server.listen(process.env.PORT || 8080, function () {
    console.log("Magic happens at ", process.env.PORT || 8080);
});

