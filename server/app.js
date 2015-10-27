var path = require('path');
var express = require('express');
var app = express();
var routes = require('./routes/');
var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({ extended: false});
var jsonParser = bodyParser.json();

var browserPath = path.join(__dirname, '../dist');

app.listen(3000, function() {
	console.log("server listening on port 3000");
});


//static files routing

app.use(express.static(browserPath));

// custom logging middleware
app.use(function(req, res, next) {
	console.log(req.method + " " + req.originalUrl + " " + res.statusCode);
	next();
});

app.use('/api', routes);
