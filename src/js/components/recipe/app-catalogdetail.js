import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppActions from '../../actions/app-actions';
import SaveButton from '../cart/app-save-button';
import { Link } from 'react-router';

function getCatalogItem( props ) {
	// console.log("props.params.item:", props.params.item);
	// let item = AppStore.getRecipeCatalog().find( ({id}) => id === Number(props.params.item) )
	// console.log("item: ", item);
	// return { item };

	let item = AppStore.getRecipeDetail(Number(props.params.item));
	console.log("item: ", item);
	return { item };


}

const CatalogDetail = (props) => {
	return (
		<div>
			<h4>{ props.item.name }</h4>
			<img src={ props.item.pictureUrl } />
			<p>{ props.item.description }</p>
			<p>{ props.item.instructions }</p>
			<p>{ props.item.ingredients}</p>
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