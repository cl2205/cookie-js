var Sequelize = require('sequelize');

// export a function that takes a Sequelize db representation 
// and defines a recipe table on it
module.exports = function(db) {
	var Recipe = db.define('Recipe', {
		name: Sequelize.STRING,
		description: Sequelize.STRING,
		cuisine: Sequelize.STRING,
		pictureUrl: Sequelize.STRING,
		instructions: Sequelize.STRING,
		type: Sequelize.STRING
	}, {
		timestamps: false
	});

	return Recipe;
};