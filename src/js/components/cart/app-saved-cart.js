import React from 'react';
import AppStore from '../../stores/app-store';
import AppCartItem from './app-saved-cart-item';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';

// to get our state
const cartItems = () => {
	return { items: AppStore.getSaved() }
}

// convert Cart to a stateless function component

const Cart = (props) => {
	var total = 0;
	var items = props.items.map( (item, i) => {
		return (
			<AppCartItem
				key={i}
				item={item.name}/>
		)
	});

	return (
		<div>
			<h3>Saved Recipes</h3>
			<table className="table table-hover">
				<thead>
					<tr>
						<th></th>
						<th>Item</th>
					</tr>
				</thead>
				<tbody>
					{items}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="4" className="text-right">Total Recipes Saved</td>
						<td>{items.length}</td>
					</tr>
				</tfoot>
			</table>
			<Link to="/">Back to Recipe Catalog</Link>
		</div>
	);
}

export default StoreWatchMixin(Cart, cartItems);