// var AppConstants = require('../constants/app-constants');
import AppConstants from '../constants/app-constants';

// var AppDispatcher = require('../dispatchers/app-dispatcher');
import { dispatch, register } from '../dispatchers/app-dispatcher';

var WebAPIUtils = require('../utils/WebAPIUtils');


// API calls here

export default {
	getAllRecipes() {
		dispatch({
			actionType: AppConstants.REQUEST_DATA	
		});

		WebAPIUtils.getRecipeCatalog()
			.then(function(data) {
				dispatch({
					actionType: AppConstants.LOAD_ALL_DATA, data
				})
			})
			.catch(function(err) {
				console.log("error: ", err);
			});

	},

	selectRecipe(recipe) {
		dispatch({
			actionType: AppConstants.SELECT_RECIPE, recipe
		})
	},

	saveRecipe(recipe) {
		dispatch({
			actionType: AppConstants.SAVE_RECIPE, recipe
		})
	},

	unsaveRecipe(index) {
		dispatch({
			actionType: AppConstants.UNSAVE_RECIPE, index
		})
	},

	updateSavedVisible(listVisible) {
		dispatch({
			actionType: AppConstants.SAVED_VISIBLE, listVisible
		})
	}

}


// App actions object 
// var AppActions = {

// 	// request recipe data
// 	getAllRecipes: function() {
// 		AppDispatcher.handleViewAction({
// 			actionType: AppConstants.REQUEST_DATA
// 		});

// 		WebAPIUtils.getRecipeCatalog();
// 	},

// 	// select recipe
// 	selectRecipe: function(recipe) {
// 		AppDispatcher.handleViewAction({
// 			actionType: AppConstants.SELECT_RECIPE,
// 			recipe: recipe
// 		});
// 	},

// 	// add recipe to saved recipes list
// 	addRecipe: function(recipe) {
// 		AppDispatcher.handleViewAction({
// 			actionType: AppConstants.ADD_RECIPE,
// 			recipe: recipe
// 		});
// 	},

// 	// remove recipe from saved recipes list
// 	removeRecipe: function(index) {
// 		AppDispatcher.handleViewAction({
// 			actionType: AppConstants.REMOVE_RECIPE,
// 			index: index
// 		});
// 	},

// 	updateSavedVisible: function(listVisible) {
// 		AppDispatcher.handleViewAction({
// 			actionType: AppConstants.SAVED_VISIBLE,
// 			listVisible: listVisible
// 		});
// 	}
// };

// module.exports = AppActions;