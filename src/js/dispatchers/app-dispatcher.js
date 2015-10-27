var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign'); // like extend in Angular // pass additional properities to existing Object

// Dispatchers broadcast Actions to all Stores

var AppDispatcher = assign(new Dispatcher(), {	// assign new properties to a new dispatcher instance, passing in an object
	handleViewAction: function(action) {
		console.log('action: ', action);
		// dispatch method on our new Dispatcher
		this.dispatch({	
			source: 'VIEW_ACTION',
			action: action 	// pass the actual action
		});
	},

	handleServerAction: function(action) {
		console.log("action: ", action);
		var payload = {
			source: 'SERVER_ACTION',
			action: action
		};
		this.dispatch(payload);
	}
});

module.exports = AppDispatcher;