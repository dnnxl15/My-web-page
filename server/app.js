'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Routes

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// Routes
app.get('/', (req, res) =>
{
    res.status(200).send(
        "<h1>Started page<h1>"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hello world from API of NodeJS"
    });
});

// Export
module.exports = app;
