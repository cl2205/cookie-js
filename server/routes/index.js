var router = require('express').Router();
var bodyParser = require('body-parser');
var models = require('../models');

var urlEncodedParser = bodyParser.urlencoded({ extended: false});
var jsonParser = bodyParser.json();

module.exports = router;

router.get('/', function(req, res) {
	console.log("hit route");
	models.User.findOne({ where: { id: 1 }})
	.then(function(user) {
		return user.getRecipes();
	})
	.then(function(recipes) {
		// res.send(recipes); 
		// console.log("RECIPE data: ", recipes);
		// recipes.forEach((recipe) => recipe.getRecipeIngredients())
		// return recipes.getRecipeIngredients();
		var promisesArr = [];
		recipes.forEach((recipe) => { promisesArr.push(models.RecipeIngredient.findAll({ where: { RecipeId: recipe.id} })
			.then(function(ingredients) {
				recipe.dataValues.ingredients = ingredients;
				console.log("recipe ingredients: ", recipe.ingredients);
			}));
		});
		Promise.all(promisesArr).then(function() {
			console.log("all promises resolved");
			console.log("updated recipes with ingred: ", recipes);
			res.send(recipes);
		})
	})
	// .then(function(updatedRecipes){
	// 	console.log("updated recipes with ingred: ", updatedRecipes);
	// 	res.send(updatedRecipes);
	// })
	.catch(function(err) {
		console.log("err: ", err);
	});
});

router.get('/:recipeId', function(req, res) {
	models.RecipeIngredient.findAll({ where: { RecipeId: req.params.recipeId }})
	.then(function(ingredients) {
		console.log("ingredients: ", ingredients);
		res.send(ingredients);
	});
});
		