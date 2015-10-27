var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');

var ServerActions = {

	loadAllRecipes: function(data) {
		AppDispatcher.handleServerAction({
			actionType: AppConstants.LOAD_DATA_RESPONSE,
			data: data
		});
	}
};

module.exports = ServerActions;