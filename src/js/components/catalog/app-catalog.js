// var React = require('react');
// var AppActions = require('../actions/app-actions');
// var ServerActions = require('../actions/app-server-actions.jsx');

import React from 'react';
import AppStore from '../../stores/app-store';
import CatalogItem from './app-catalogItem';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

function getCatalog() {
	return { items: AppStore.getRecipeCatalog() }
}

// set up ES6 Class Component
const Catalog = (props) => {
		console.log("Catalog props: ", props);
		let items = props.items.map(item => {
			return <CatalogItem key={ item.id } item={ item } />
		});

		return (
			<div className="row">
				{ items }
			</div>
			)

}

export default StoreWatchMixin(Catalog, getCatalog);

// var AllRecipes = React.createClass({

// 	_getAllRecipes: function() {
// 		AppActions.getAllRecipes();
// 	},

// 	// add recipe to saved recipe list
// 	addToList: function(event) {
// 		var recipe = this.props.selected;
// 		AppActions.addRecipe(recipe);
// 		AppActions.updateSavedVisible(true);
// 	},

// 	// Render catalog view
// 	render: function() {
// 		console.log("this.props object: ", this.props);
// 		var recipes = this.props.catalog;
// 		console.log("Recipes: ", recipes);

// 		return (
// 			<div>
// 			<div className="row">
// 				<div className="col-md-4">{recipes.map(function(recipe) {
// 					console.log("recipe.name: ", recipe.name);
// 					return <h3>{recipe.name} {recipe.description}</h3>
// 				})}</div>
// 			</div>
// 			<div><button onClick={this._getAllRecipes}>Get All Recipes</button></div>
// 			</div>
// 		);
// 	}

// });

// module.exports = AllRecipes;