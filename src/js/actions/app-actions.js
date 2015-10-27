var AppConstants = require('../constants/app-constants');
var WebAPIUtils = require('../utils/WebAPIUtils');
var AppDispatcher = require('../dispatchers/app-dispatcher');

// API calls here

// App actions object 
var AppActions = {

	// request recipe data
	getAllRecipes: function() {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REQUEST_DATA
		});

		WebAPIUtils.getRecipeCatalog();
	},

	// select recipe
	selectRecipe: function(recipe) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SELECT_RECIPE,
			recipe: recipe
		});
	},

	// add recipe to saved recipes list
	addRecipe: function(recipe) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_RECIPE,
			recipe: recipe
		});
	},

	// remove recipe from saved recipes list
	removeRecipe: function(index) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_RECIPE,
			index: index
		});
	},

	updateSavedVisible: function(listVisible) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SAVED_VISIBLE,
			listVisible: listVisible
		});
	}
};

module.exports = AppActions;