import React from 'react';
import AppActions from '../../actions/app-actions';
import SaveButton from '../cart/app-save-button';
import { Link } from 'react-router';


export default (props) => {

	let itemStyle = {
		borderBottom: '1px solid #ccc',
		paddingBottom: 15
	}

	return (
		<div className="col-xs-6 col-sm-4 col-md-3" style={itemStyle}>
			<h5>{ props.item.name }</h5>
			<img src={ props.item.pictureUrl } width="100%" className="img-responsive"/>
			<p>{ props.item.cuisine }</p>


			<div className="btn-group">
				<Link to={ `/item/${props.item.id}` } className="btn btn-default btn-sm">Learn More</Link>
				<SaveButton
					handler={
						AppActions.saveRecipe.bind(null, props.item)
					}
					txt="Save Recipe"
				/>
			</div>
		</div>
	);
}