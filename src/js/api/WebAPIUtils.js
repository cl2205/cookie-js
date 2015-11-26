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
			
				self.catalog = response.data;
				console.log("catalog: ", self.catalog);
				return self.catalog;
			})
			.then(function(catalog) {
				// return ServerActions.loadAllRecipes(catalog);
				return dispatch({
					actionType: AppConstants.LOAD_ALL_DATA, catalog
				});	
				// dispatch or create server action?
			})
			.catch(function(err) {
				console.log("error: ", err);
			});
	}
}


WebAPIUtils.init();
export default WebAPIUtils;


