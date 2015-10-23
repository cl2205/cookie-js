var Sequelize = require('sequelize');

module.exports = function(db) {
	var Instruction = db.define('Instruction', {
		// recipe_id,
		// ingredient_id,
		// id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		step_no: Sequelize.INTEGER,
		step_description: Sequelize.STRING
	});
	return Instruction;
		

};