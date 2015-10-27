var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
var assign = require('react/lib/Object.assign'); // object.assign from React library
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';
var _savedRecipes = {}, _listVisible = false;

function add(recipe) {
	if (!_savedRecipes[recipe.id]) {
		_savedRecipes[recipe.id] = recipe;
	}
}

function setListVisible(listVisible) {
	_listVisible = listVisible;
}

function remove(recipe) {
	if (_savedRecipes[recipe.id]) {
		delete _savedRecipes[recipe.id];
	}
}

var savedRecipeStore = assign(EventEmitter.prototype, {

	// Return all saved recipes
	getSavedRecipes: function() {
		return _savedRecipes;
	},

	getListVisible: function() {
		return _listVisible;
	},

	// Return selected recipe
	selectRecipe: function() {
		return _selected;
	},

	// Emit change event
	emitChange: function() {
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
savedRecipeStore.dispatchTocken = AppDispatcher.register(function(payload) {
	var action = payload.action; // our action from handleViewAction
	var text;

	switch(action.actionType) {

		// Respond to RECEIVE_DATA action
		case AppConstants.ADD_RECIPE:
			add(action.recipe);
			break;

		case AppConstants.SAVED_VISIBLE:
			setListVisible(action.listVisible);
			break;

		// Respond to SELECT_RECIPE action
		case AppConstants.REMOVE_RECIPE:
			remove(action.index);
			break;

		default:
			return true;
	}

	// If action was responded to, emit change event
	savedRecipeStore.emitChange();
	return true;

});


module.exports = savedRecipeStore;
