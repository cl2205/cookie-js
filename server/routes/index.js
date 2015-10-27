var router = require('express').Router();
var bodyParser = require('body-parser');
var models = require('../models');

var urlEncodedParser = bodyParser.urlencoded({ extended: false});
var jsonParser = bodyParser.json();

module.exports = router;

router.get('/', function(req, res) {
	models.User.findOne({ where: { id: 1 }})
	.then(function(user) {
		return user.getRecipes();
	})
	.then(function(recipes) {
		res.send(recipes);
	});
});