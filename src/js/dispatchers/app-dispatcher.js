// var Dispatcher = require('flux').Dispatcher;
import { Dispatcher } from 'flux';

// var assign = require('react/lib/Object.assign'); // like extend in Angular // pass additional properities to existing Object

// Dispatchers broadcast Actions to all Stores

const flux = new Dispatcher();

export function register(callback) {
	return flux.register(callback);
}

export function dispatch(actionType, action) {
	flux.dispatch(actionType, action);
}

// var AppDispatcher = assign(new Dispatcher(), {	// assign new properties to a new dispatcher instance, passing in an object
// 	handleViewAction: function(action) {
// 		console.log('action: ', action);
// 		// dispatch method on our new Dispatcher
// 		this.dispatch({	
// 			source: 'VIEW_ACTION',
// 			action: action 	// pass the actual action
// 		});
// 	},

// 	handleServerAction: function(action) {
// 		console.log("action: ", action);
// 		var payload = {
// 			source: 'SERVER_ACTION',
// 			action: action
// 		};
// 		this.dispatch(payload);
// 	}
// });

// module.exports = AppDispatcher;