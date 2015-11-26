import React from 'react';
import AppActions from '../../actions/app-actions';

export default (props) => {
	return (
		<button
			className="btn btn-default btn-sm"
			onClick={ props.handler }>
			{ props.txt }
		</button>
	)



}