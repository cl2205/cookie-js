// root component
import React from 'react';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-saved-cart';
import CatalogDetail from './recipe/app-catalogdetail';
import Template from './app-template';
import { Router, Route, IndexRoute } from 'react-router';

// convert to a stateless component where instead of returning regular jsx, 
// we're going to return some React Router components

export default () => {
    return (
        <Router>
            <Route path="/" component={ Template }>
                <IndexRoute component={ Catalog }/>
                <Route path="cart" component={ Cart }/>
                <Route path="item/:item" component={ CatalogDetail } />
            </Route>
        </Router>
    );
};

// export default () => {
// 	return (
// 		<Router>
// 			<Route path="/" component={Template}>
// 				<IndexRoute component={Catalog} />
// 				<Route path="cart" component={Cart}/>
// 				<Route path="item/:item" component={ CatalogDetail }/>
// 			</Route>
// 		</Router>
// 	);
// }


// export default class App extends React.Component {
// 	render() {
// 		return (
// 			<div className="container">
// 				<Catalog />
// 				<Cart />
// 			</div>
// 		)
// 	}
// }



// var AppStore = require('../stores/app-store');
// var savedRecipeStore = require('../stores/saved-recipe-store');
// var AllRecipes = require('./all-recipes');
// var AppActions = require('../actions/app-actions');

// private method to retrieve state from Store
// function getState() {
// 	console.log("called getState");
// 	return {
// 		catalog: AppStore.returnAllRecipes(),
// 		savedRecipes: savedRecipeStore.getSavedRecipes(),
// 		savedVisible: savedRecipeStore.getListVisible(),
// 		selectedRecipe: AppStore.getSelected()
// 	};
// }

// Define main Controller View
// var App = React.createClass({

// 	// Get initial state from stores
// 	getInitialState: function() {
// 		return getState();
// 	},
// 	// Add change listeners to stores
// 	componentDidMount: function() {

// 		AppStore.addChangeListener(this._onChange);
// 		AppActions.getAllRecipes();
// 	},

// 	// Remove change listeners from stores
// 	componentWillUnmount: function() {
// 		AppStore.removeChangeListener(this._onChange);
// 	},

// 	// Method to setState based upon Store changes
// 	_onChange: function() {
// 		console.log("heard change event");
// 		this.setState(getState());
// 	},

// 	// Render our child components, passing state via props
// 	render: function() {

// 		console.log("This.state: ", this.state);
// 		return (
// 			<AllRecipes catalog={this.state.catalog} visible={this.state.savedVisible} />		
// 		);
// 	}
// });


// module.exports = App;