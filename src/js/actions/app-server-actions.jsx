// var AppDispatcher = require('../dispatchers/app-dispatcher');
// var AppConstants = require('../constants/app-constants');

import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';


export default {
	loadAllRecipes(data) {
		dispatch({
			actionType: AppConstants.LOAD_ALL_DATA, data
		})
	}
}

// var ServerActions = {

// 	loadAllRecipes: function(data) {
// 		AppDispatcher.handleServerAction({
// 			actionType: AppConstants.LOAD_DATA_RESPONSE,
// 			data: data
// 		});
// 	}
// };

// module.exports = ServerActions;