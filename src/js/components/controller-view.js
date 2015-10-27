var React = require('react');
var AppStore = require('../stores/app-store');
var savedRecipeStore = require('../stores/saved-recipe-store');
var AllRecipes = require('./all-recipes');
var AppActions = require('../actions/app-actions');
var ServerActions = require('../actions/app-server-actions.jsx');

// private method to retrieve state from Store
function getState() {
	return {
		catalog: AppStore.returnAllRecipes(),
		savedRecipes: savedRecipeStore.getSavedRecipes(),
		savedVisible: savedRecipeStore.getListVisible()
		// selectedRecipe: AppStore.getSelected()
	};
}

// Define main Controller View
var ControllerView = React.createClass({
	// handler: function() {
	// 	AppActions.addRecipe('this is a recipe');
	// },
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
		this.setState(getState());
	},

	// Render our child components, passing state via props
	render: function() {
		// return <h1>Hello</h1>
		return (
			<AllRecipes catalog={this.state.catalog} visible={this.state.savedVisible} />		
		);
	}


});

module.exports = ControllerView;