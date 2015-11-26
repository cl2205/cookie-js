import request from 'axios';
import ServerActions from '../actions/app-server-actions.jsx';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';

const WebAPIUtils = {
	catalog: [],
	selected: null,
	savedItems: [],
	getCatalog() {
		return this.catalog;
	},

	getSavedCount( total = this.savedItems.length) {
		return { total };
	},

	saveRecipe(recipe) {
		this.savedItems.push(recipe);
	},
	unsaveRecipe(recipe) {
		this.savedItems.splice(this.savedItems.findIndex( i => i === recipe), 1);
	},

	init() {
		let self = this;
		return request.get('http://localhost:3000/api/')
			.then(function(response) {
				console.log("Response data: ", response.data);
				self.catalog = response.data;
				console.log("self catalog: ", self.catalog);
				return self.catalog;

				// return response.data;
				// ServerActions.loadAllRecipes(response.data);
			})
			.then(function(catalog) {
				return dispatch({
					actionType: AppConstants.LOAD_ALL_DATA, catalog
				});
			})
			.catch(function(err) {
				console.log("error: ", err);
			});
	}

}



// function loadRecipeData(data) {
// 	console.log("data in loadrecipedata: ", data);
// 	// _catalog.push(data);
// 	_catalog = data;
// 	console.log("catalog: ", _catalog);

// }
	
// function getAllRecipes() {
// 	console.log("called getAllRecipes");
// 	console.log("returned ", _catalog);
// 	return _catalog;
// }

// function setSelected(index) {
// 	_selected = _catalog[index];
// }



WebAPIUtils.init();
export default WebAPIUtils;

// module.exports = WebAPIUtils;
