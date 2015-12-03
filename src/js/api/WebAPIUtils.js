import request from 'axios';
import ServerActions from '../actions/app-server-actions.jsx';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';

const WebAPIUtils = {
	catalog: [],
	selected: null,
	recipeDetail: {},
	savedItems: [],
	getCatalog() {
		return this.catalog;
	},

	getRecipeDetail(recipeId) {
		return this.recipeDetail;
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

	loadRecipeDetail(recipeId) {
		let self = this;
		console.log("typeof recipeId: ", typeof recipeId);
		return request.get('http://localhost:3000/api/' + recipeId)
			.then(function(response) {
				self.recipeDetail = response.data;
				console.log("self.recipeDetail: ", self.recipeDetail);
				return self.recipeDetail;
			})
			.then(function(recipeDetail) {
				console.log("hit here");
				return dispatch({
					actionType: AppConstants.LOAD_RECIPE_DETAIL, recipeDetail
				});
			})
			.catch(function(err) {
				console.log("recipeDetail error: ", err);
			});
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


