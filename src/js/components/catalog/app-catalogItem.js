import React from 'react';
import AppActions from '../../actions/app-actions';
import SaveButton from '../cart/app-save-button';

export default (props) => {
	return (
		<div className="col-xs-6 col-sm-4 col-md-3">
			<h4>{ props.item.name }</h4>
			<img src="http://placehold.it/250x250" width="100%" className="img-responsive"/>
			<p>{ props.item.id }</p>
			<SaveButton
				handler={
					AppActions.saveRecipe.bind(null, props.item)
				}
				txt="Save Recipe"
			/>
		</div>
	)
}