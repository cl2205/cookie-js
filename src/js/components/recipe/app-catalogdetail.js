import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';	// component on top right keeping track of state of app by keeping track of # of recipes in cart
import AppActions from '../../actions/app-actions';
import SaveButton from '../cart/app-save-button';
import { Link } from 'react-router';

function getCatalogItem( props ) {
	let item = AppStore.getRecipeCatalog().find( ({id}) => id === Number(props.params.item) )
	console.log("item: ", item);
	return { item };
}

const CatalogDetail = (props) => {
	return (
		<div>
			<h4>{ props.item.name }</h4>
			<img src="http://placehold.it/250x250" />
			<p>{ props.item.description }</p>

			<div className="btn-group">
				<Link to="/" className="btn btn-default btn-sm">Back to Recipe Catalog</Link>
				<SaveButton
					handler={
						AppActions.saveRecipe.bind(null, props.item)
					}
					txt="Save Recipe"
				/>
			</div>
		</div>
	)
}

export default StoreWatchMixin( CatalogDetail, getCatalogItem);