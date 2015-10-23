var Sequelize = require('sequelize');

// export a function that takes a Sequelize db representation 
// and defines a recipe table on it
module.exports = function(db) {
	var Ingredient = db.define('Ingredient', {
		// id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		name: Sequelize.STRING
	}, {
		timestamps: false
	});

	return Ingredient;
};