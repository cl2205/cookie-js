var React = require('react');
var AppActions = require('../actions/app-actions');
var ServerActions = require('../actions/app-server-actions.jsx');

var AllRecipes = React.createClass({

	_getAllRecipes: function() {
		AppActions.getAllRecipes();
	},

	// add recipe to saved recipe list
	addToList: function(event) {
		var recipe = this.props.selected;
		AppActions.addRecipe(recipe);
		AppActions.updateSavedVisible(true);
	},

	// Render catalog view
	render: function() {
		console.log("this.props object: ", this.props);
		var recipes = this.props.catalog;
		console.log("Recipes: ", recipes);

		return (
			<div>
			<div className="row">
				<div className="col-md-4">{recipes.map(function(recipe) {
					console.log("recipe.name: ", recipe.name);
					return <h3>{recipe.name} {recipe.description}</h3>
				})}</div>
			</div>
			<div><button onClick={this._getAllRecipes}>Get All Recipes</button></div>
			</div>
		);
	}

});

module.exports = AllRecipes;