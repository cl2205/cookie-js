import React from 'react';
import SaveButton from './app-save-button';
import AppActions from '../../actions/app-actions';

export default (props) => {
	return (
		<tr>
			<td>
				<SaveButton
					txt="x"
					handler={AppActions.unsaveRecipe.bind(null, props.item)}
				 />
			</td>
			<td>{props.item}</td>
		</tr>
	)
}