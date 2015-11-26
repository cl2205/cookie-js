
import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
// var AppConstants = require('../constants/app-constants');
// var AppDispatcher = require('../dispatchers/app-dispatcher');
// var assign = require('react/lib/Object.assign'); // object.assign from React library
// var EventEmitter = require('events').EventEmitter; // event emitter from Node

// var CHANGE_EVENT = 'change'; // what we broadcast every time something changes in app-dispatcher
var _catalog = [], _selected = null;
var _savedItems = [];

// Store manages the state of our Flux application
	

function getAllRecipes() {
	console.log("called getAllRecipes");
	console.log("returned ", _catalog);
	return _catalog;

}

function setSelected(index) {
	_selected = _catalog[index];
}

function saveRecipe(recipe) {
	_savedItems.push(recipe);
}

function unsaveRecipe(index) {
	_savedItems.splice(_savedItems.findIndex( i => i === index), 1);
}

// const totalSaved = _savedItems.length;
// extend Event Emitter with new properties
const AppStore = Object.assign(EventEmitter.prototype, {

// Return all recipe data

	// getCatalog() {
	// 	return _catalog.map(item => {
	// 		return Object.assign( {}, item, _cartItems.find( cItem => cItem.id === item.id))
	// 	})
	// },

	getRecipeCatalog() {
		return _catalog;
	},

	// Return selected recipe
	selectRecipe(index) {
		setSelected(index);
	},


	getSaved() {
		return _savedItems;
	},

	getTotalSaved() {
		return _savedItems.length;
	},

	getSelected() {
		return _selected;
	},

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

function loadRecipeData(data) {
	console.log("data in loadrecipedata: ", data);
	// _catalog.push(data);
	_catalog = data;
	console.log("catalog: ", _catalog);

}

// Register callback with AppDispatcher
AppStore.dispatchToken = register(function(action) {

	console.log("ACTIONTYPE: ", action.actionType);
	console.log("ACTION: ", action);


	switch(action.actionType) {

		// Respond to LOAD_DATA_RESPONSE action
		case AppConstants.LOAD_ALL_DATA:
			console.log("load data response event");
			console.log("action: ", action);
			loadRecipeData(action.data);
			break;

		case AppConstants.REQUEST_DATA:
			console.log("request data event");
			break;

		case AppConstants.SAVE_RECIPE:
			console.log("save recipe event");
			saveRecipe(action.recipe);
			break;

		case AppConstants.UNSAVE_RECIPE:
			console.log("unsave recipe event");
			unsaveRecipe(action.recipe);
			break;

		// Respond to SELECT_RECIPE action
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

// module.exports = AppStore;
export default AppStore;

// Extend Store with EventEmitter to add eventing capabilities
// var AppStore = assign(EventEmitter.prototype, {

// 	// Return all recipe data
// 	getRecipeCatalog: function(data) {
// 		console.log("called getRecipeCatalog");
// 		loadRecipeData(data);

// 	},

// 	returnAllRecipes: function() {
// 		return getAllRecipes();
// 	},

// 	// Return selected recipe
// 	selectRecipe: function(index) {
// 		setSelected(index);
// 	},

// 	getSelected: function() {
// 		return _selected;
// 	},

// 	// Emit change event
// 	emitChange: function() {
// 		console.log("Emit Change");
// 		this.emit(CHANGE_EVENT);
// 	},

// 	addChangeListener: function(callback) {
// 		this.on(CHANGE_EVENT, callback);
// 	},

// 	removeChangeListener: function(callback) {
// 		this.removeListener(CHANGE_EVENT, callback);
// 	}

// });

