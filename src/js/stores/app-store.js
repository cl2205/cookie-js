// Store manages the state of our Flux application

import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import { EventEmitter } from 'events'; // event emitter from Node
import WebAPIUtils from '../api/WebAPIUtils';

const CHANGE_EVENT = 'change'; // what we broadcast every time something changes in app-dispatcher

// extend Event Emitter with new properties
const AppStore = Object.assign(EventEmitter.prototype, {

	// Return all recipe data
	getRecipeCatalog() {
		return WebAPIUtils.getCatalog();
	},

	getSaved() {
		return WebAPIUtils.savedItems;
	},

	getTotalSaved() {
		return WebAPIUtils.getSavedCount();
		// let total = _savedItems.length;
		// return {total};
	},

	getSelected() {
		return WebAPIUtils.selected;
	},

		// Return selected recipe
	// selectRecipe(index) {
	// 	setSelected(index);
	// },


	emitChange() {
		console.log("Emit Change");
		this.emit(CHANGE_EVENT);
	},

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});


// Register callback with AppDispatcher
AppStore.dispatchToken = register(function(action) {

	switch(action.actionType) {

		case AppConstants.LOAD_ALL_DATA:
			console.log("load all data event");
			break;

		case AppConstants.REQUEST_DATA:
			console.log("request data event");
			break;

		case AppConstants.SAVE_RECIPE:
			console.log("save recipe event");
			WebAPIUtils.saveRecipe(action.recipe);
			break;

		case AppConstants.UNSAVE_RECIPE:
			console.log("unsave recipe event");
			WebAPIUtils.unsaveRecipe(action.recipe);
			break;

		case AppConstants.SELECT_RECIPE:
			setSelected(action.recipe);
			break;

		default:
			return true;
	}

	// If action was responded to, emit change event
	AppStore.emitChange();
	return true;

});

export default AppStore;

