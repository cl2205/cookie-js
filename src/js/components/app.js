var React = require('react');
var AppStore = require('../stores/app-store');
var savedRecipeStore = require('../stores/saved-recipe-store');
var AllRecipes = require('./all-recipes');
var AppActions = require('../actions/app-actions');

// private method to retrieve state from Store
function getState() {
	console.log("called getState");
	return {
		catalog: AppStore.returnAllRecipes(),
		savedRecipes: savedRecipeStore.getSavedRecipes(),
		savedVisible: savedRecipeStore.getListVisible(),
		selectedRecipe: AppStore.getSelected()
	};
}

// Define main Controller View
var App = React.createClass({

	// Get initial state from stores
	getInitialState: function() {
		return getState();
	},
	// Add change listeners to stores
	componentDidMount: function() {

		AppStore.addChangeListener(this._onChange);
		AppActions.getAllRecipes();
	},

	// Remove change listeners from stores
	componentWillUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

	// Method to setState based upon Store changes
	_onChange: function() {
		console.log("heard change event");
		this.setState(getState());
	},

	// Render our child components, passing state via props
	render: function() {

		console.log("This.state: ", this.state);
		return (
			<AllRecipes catalog={this.state.catalog} visible={this.state.savedVisible} />		
		);
	}
});

module.exports = App;