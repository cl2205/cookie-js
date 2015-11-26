import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';	// component on top right keeping track of state of app by keeping track of # of recipes in cart
import { Link } from 'react-router'; // allows us to create links in app


const CartSummary = (props) => {
	return (
		<div style={{paddingTop: 15}}>
			<Link to="/cart" className="btn btn-success">
				{ `Saved Recipes: ${props.total}` }
			</Link>
		</div>
	);
}

// get the props from our App Store, get initial state from getTotalSaved

export default StoreWatchMixin( CartSummary, AppStore.getTotalSaved);