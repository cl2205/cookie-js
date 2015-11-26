import React from 'react';
import AppStore from '../stores/app-store.js';
import AppActions from '../actions/app-actions';
									// function to get the componenet's initial state
export default ( InnerComponent, stateCallback) => class extends React.Component {
	constructor(props) {
		super(props);
		this.state = stateCallback( props );
		this._onChange = this._onChange.bind(this);
	}
	componentWillMount() {
		AppStore.addChangeListener( this._onChange );
	}

	componentDidMount() {
		AppStore.addChangeListener( this._onChange );
		AppActions.getAllRecipes();
	}

	componentWillUnmount() {
		AppStore.removeChangeListener( this._onChange );
	}
	_onChange() {
		this.setState( stateCallback( this.props ) );
	}

	render() {
		return <InnerComponent {...this.state} {...this.props} />
	}
}