var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var assign = require('react/lib/Object.assign'); // object.assign from React library
var EventEmitter = require('events').EventEmitter; // event emitter from Node

var CHANGE_EVENT = 'change'; // what we broadcast every time something changes in app-dispatcher
var _catalog = [], _selected = null;

	
function loadRecipeData(data) {
	console.log("data in loadrecipedata: ", data);
	// _catalog.push(data);
	_catalog = data;
	console.log("catalog: ", _catalog);

}

function getAllRecipes() {
	console.log("called getAllRecipes");
	console.log("returned ", _catalog);
	return _catalog;

}

function setSelected(index) {
	_selected = _catalog[index];
}

// Extend Store with EventEmitter to add eventing capabilities
var AppStore = assign(EventEmitter.prototype, {

	// Return all recipe data
	getRecipeCatalog: function(data) {
		console.log("called getRecipeCatalog");
		loadRecipeData(data);

	},

	returnAllRecipes: function() {
		return getAllRecipes();
	},

	// Return selected recipe
	selectRecipe: function(index) {
		setSelected(index);
	},

	getSelected: function() {
		return _selected;
	},

	// Emit change event
	emitChange: function() {
		console.log("Emit Change");
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

});


// Register callback with AppDispatcher
AppStore.dispatchToken = AppDispatcher.register(function(payload) {
	console.log("Payload:", payload);
	var action = payload.action; // our action from handleViewAction
	console.log("ACTIONTYPE: ", action.actionType);

	switch(action.actionType) {

		// Respond to LOAD_DATA_RESPONSE action
		case AppConstants.LOAD_DATA_RESPONSE:
			console.log("load data response event");
			loadRecipeData(action.data);
			break;

		case AppConstants.REQUEST_DATA:
			console.log("request data event");
			getAllRecipes();
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

module.exports = AppStore;

