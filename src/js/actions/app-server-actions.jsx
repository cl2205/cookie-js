
import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';


export default {
	loadAllRecipes(data) {
		dispatch({
			actionType: AppConstants.LOAD_ALL_DATA, data
		})
	}
}
