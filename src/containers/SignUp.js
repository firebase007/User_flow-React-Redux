import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignUpComponent from '../components/SignUp.jsx';
import * as SignUpActions from '../actions/SignUp';

/**
 * make state properties in the 'return' curly braces below available to state
 * @param {Object} state
 */
const mapStateToProps = (state) => {
  const { SignUp } = state;
  const {
    signUpErrorMessage,
    signUpInPogress,
    isSignUpSuccessful,
    canDisplaySignUpError,
  } = SignUp;

  return {
    signUpErrorMessage,
    signUpInPogress,
    isSignUpSuccessful,
    canDisplaySignUpError,
  };
};

/**
 * gather form inputs from users and send to SignUpActions
 * @param {formInfo} dispatch
 */
const mapDispatchToProps = dispatch => ({
  initiateSignUp: formInfo => dispatch(SignUpActions.signUp(formInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);
