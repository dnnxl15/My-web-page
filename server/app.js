
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Routes
var project_routes = require('./routes/project');

// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// Routes
app.use('/api', project_routes);
// Export
module.exports = app;
