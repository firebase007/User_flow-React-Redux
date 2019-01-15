import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import Login from './Login';
import SignUp from './SignUp';

/**
 * gather all reducers to be used
 * on the index page
*/
export default combineReducers({
  Login,
  SignUp,
  form: formReducer,
});
