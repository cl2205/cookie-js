var Sequelize = require('sequelize');

module.exports = function(db) {
	var RecipeIngredient = db.define('RecipeIngredient', {
		// recipe_id,
		// ingredient_id,
		// id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		quantity: Sequelize.FLOAT,
		unit: Sequelize.STRING
		// recipe_id: {
		// 	type: Sequelize.INTEGER,
		// 	references: {
		// 		model: "recipes",
		// 		key: 'id'
		// 	}
		// }
	});

	return RecipeIngredient;
	
};