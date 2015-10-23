var express = require('express');
var app = express();
var routes = require('./routes/');

app.listen(3000, function() {
	console.log("server listening on port 3000");
});

//static files routing
app.use(express.static(__dirname + '/public'));

// custom logging middleware
app.use(function(req, res, next) {
	console.log(req.method + " " + req.originalUrl + " " + res.statusCode);
	next();
});

app.use('/', routes);
