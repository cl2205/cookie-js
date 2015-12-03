// connect node to database

var Sequelize = require('sequelize');

// create an instance of a db connection 
var cookiejsDB = new Sequelize('cookiejs', 'root', null, {
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
		console.log('Connection to db has been established successfully.');
	});

// set up "tables"
var User = require('./user')(cookiejsDB);
var IngredientType = require('./ingredient-type')(cookiejsDB);
var Ingredient = require('./ingredient')(cookiejsDB);
var RecipeIngredient = require('./recipe-ingredient')(cookiejsDB);
var Recipe = require('./recipe')(cookiejsDB);


// DEFINE ASSOCIATIONS 

User.hasMany(Recipe);
Recipe.belongsTo(User); //Adds a UserId foreign key to the 'Recipes' table

IngredientType.hasMany(Ingredient); // Adds a IngredientTypeID to 'Ingredients' Table
IngredientType.hasMany(Recipe); // Adds a IngredientTypeID to 'Recipes' Table
// Recipe.hasMany(IngredientType);	// Adds a RecipeId to 'Ingredient Type' Table
// RecipeIngredient.belongsTo(Recipe);	// Adds a RecipeId to 'RecipeIngredients' Table
IngredientType.belongsToMany(Recipe, { through: 'RecipeIngredient'});	// Adds an IngredientTypeId & RecipeId to to 'RecipeIngredients' Table

// export references to tables
module.exports = {
	User: User,
	Recipe: Recipe,
	IngredientType: IngredientType,
	Ingredient: Ingredient,
	RecipeIngredient: RecipeIngredient
};