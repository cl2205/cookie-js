var Sequelize = require('sequelize');

// export a function that takes a Sequelize db representation 
// and defines a recipe table on it
module.exports = function(db) {
	var User = db.define('User', {
		id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
		firstName: Sequelize.STRING,
		lastName: Sequelize.STRING,
		email: Sequelize.STRING
	}, {
		timestamps: false
	});

	return User;
};