import React from 'react';
import CartSummary from './app-cartsummary';

export default () => {
	return (
		<div className="row" style={{borderBottom: '1px solid #ccc'}}>
			<div className="col-sm-4"><h1>Meal Planner</h1></div>
			<div className="col-sm-8 text-right">
				<CartSummary />
			</div>
		</div>
	);
}