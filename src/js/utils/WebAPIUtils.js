import request from 'axios';
import ServerActions from '../actions/app-server-actions.jsx';

var WebAPIUtils = {
	getRecipeCatalog: function() {
		return request.get('http://localhost:3000/api/')
			.then(function(response) {
				console.log("Response data: ", response.data);
				return response.data;
				// ServerActions.loadAllRecipes(response.data);
			})
			.catch(function(err) {
				console.log("error: ", err);
			});
	}
};

module.exports = WebAPIUtils;
