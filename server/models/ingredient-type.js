var Sequelize = require('sequelize');

// export a function that takes a Sequelize db representation 
// and defines a recipe table on it
module.exports = function(db) {
	var IngredientType = db.define('IngredientType', {
		// id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		name: Sequelize.STRING
	}, {
		timestamps: false
	});

	return IngredientType;
};