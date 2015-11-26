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

