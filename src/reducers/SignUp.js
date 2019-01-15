import { SIGN_UP_INITIALIZED, SIGN_UP_SUCCESSFUL, SIGN_UP_FAILED } from '../actions/SignUp';

/**
 * set default state values
 */
const defaultState = {
  signUpErrorMessage: '',
  signUpInPogress: false,
  isSignUpSuccessful: false,
  canDisplaySignUpError: false,
};

/**
 * state what happens during each state
 * and re-initialize each default state values
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_UP_INITIALIZED:
      return {
        ...state,
        signUpInPogress: true,
        canDisplaySignUpError: false,
      };
    case SIGN_UP_SUCCESSFUL:
      return {
        ...state,
        signUpInPogress: false,
        isSignUpSuccessful: true,
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        signUpInPogress: false,
        isSignUpSuccessful: false,
        canDisplaySignUpError: true,
        signUpErrorMessage: action.error,
      };
    default:
      return state;
  }
};
