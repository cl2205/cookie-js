// root component - define main Controller View
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


