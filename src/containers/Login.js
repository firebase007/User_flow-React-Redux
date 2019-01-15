import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginComponent from '../components/Login.jsx';
import * as LoginActions from '../actions/Login';

/**
 * make state properties in the 'return' curly braces below available to state
 * @param {Object} state
 */
const mapStateToProps = (state) => {
  const { Login } = state;
  const {
    errorMessage,
    isLoginInProcess,
    isLoginSuccessful,
    candisplayErrorMessage,
  } = Login;

  return {
    errorMessage,
    isLoginInProcess,
    isLoginSuccessful,
    candisplayErrorMessage,
  };
};

/**
 * collect user LoginInfo and history, then send to LoginActions
 * @param {formInfo, history} dispatch
 */
const mapDispatchToProps = dispatch => ({
  processLogin: (formInfo, history) => dispatch(LoginActions.processLogin(formInfo, history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));
