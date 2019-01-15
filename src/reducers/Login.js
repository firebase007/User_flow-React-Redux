import { LOGIN_INITIALIZED, LOGIN_SUCCESSFUL, LOGIN_FAILED } from '../actions/Login';

/**
 * set default state values
 */
const defaultState = {
  errorMessage: '',
  isLoginInProcess: false,
  isLoginSuccessful: false,
  candisplayErrorMessage: false,
};

/**
 * state what happens during each state
 * and re-initialize each default state values
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_INITIALIZED:
      return {
        ...state,
        isLoginInProcess: true,
        candisplayErrorMessage: false,
      };
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoginInProcess: false,
        isLoginSuccessful: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoginInProcess: false,
        errorMessage: action.error,
        candisplayErrorMessage: true,
      };
    default:
      return state;
  }
};
