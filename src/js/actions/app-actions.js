
import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

// API calls here

export default {
	getAllRecipes() {
		dispatch({
			actionType: AppConstants.REQUEST_DATA	
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

	unsaveRecipe(recipe) {
		dispatch({
			actionType: AppConstants.UNSAVE_RECIPE, recipe
		})
	},

	updateSavedVisible(listVisible) {
		dispatch({
			actionType: AppConstants.SAVED_VISIBLE, listVisible
		})
	}

}

