// connect node to database

var Sequelize = require('sequelize');

// create an instance of a db connection 
var cookiejsDB = new Sequelize('cookie', 'root', null, {
	dialect: "mysql",
	port: 3306
});

// open the connection to our db
cookiejsDB
	.authenticate()
	.catch(function(err){
		console.log('Unable to connect to the database: ', err);
	})
	.then(function() {
		console.log('Connection has been established successfully.');
	});

// set up "tables"
var User = require('./user')(cookiejsDB);
var Ingredient = require('./ingredient')(cookiejsDB);
var Instruction = require('./instruction')(cookiejsDB);
var RecipeIngredient = require('./recipe-ingredient')(cookiejsDB);
var Recipe = require('./recipe')(cookiejsDB);


// DEFINE ASSOCIATIONS 

User.hasMany(Recipe);
Recipe.belongsTo(User); //Adds a UserId foreign key to the 'Recipes' table

Recipe.hasMany(Instruction);	// Adds a RecipeId to 'Instruction' Table
RecipeIngredient.belongsTo(Recipe);	// Adds a RecipeId to 'RecipeIngredients' Table
Ingredient.belongsToMany(Recipe, { through: 'RecipeIngredient'});	// Adds an IngredientId & RecipeId to to 'RecipeIngredients' Table

// export references to tables
module.exports = {
	User: User,
	Recipe: Recipe,
	Ingredient: Ingredient,
	RecipeIngredient: RecipeIngredient,
	Instruction: Instruction
};