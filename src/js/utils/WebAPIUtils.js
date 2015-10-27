var request = require('axios');
var ServerActions = require('../actions/app-server-actions.jsx');

var WebAPIUtils = {
	getRecipeCatalog: function() {
		request.get('/api/')
			.then(function(response) {
				console.log("Response data: ", response.data);
				ServerActions.loadAllRecipes(response.data);
			})
			.catch(function(err) {
				console.log("error: ", err);
			});
	}
};

module.exports = WebAPIUtils;
