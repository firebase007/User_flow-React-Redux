import API from '../utils/api';

/**
 * export all LOGIN action const to be used in the reducers file
 */

export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_INITIALIZED = 'LOGIN_INITIALIZED';

/**
 * start the login process by dispatching all login action const and hitting the login API enpoint
 * set the user data to localStorage
 * after login attempt is succesful, redirect users to the homepage using the history API
 * @param {*} forminfo User auth info submitted via login form
 * @param {*} history React History Api
 */

export const processLogin = (formInfo, history) => (
  (dispatch) => {
    // console.log(baseUrl); // eslint-disable-line
    dispatch({ type: LOGIN_INITIALIZED });
    API.post('login', formInfo)
      .then((response) => {
        const { data, status } = response.data;
        if (status && status === 200) {
          localStorage.setItem('userToken', data);
          dispatch({ type: LOGIN_SUCCESSFUL });
          history.push('/home');
        } else if (status === 400) {
          dispatch({ type: LOGIN_FAILED, error: response.data.errors });
        }
      })
      .catch((errorObj) => {
        dispatch({ type: LOGIN_FAILED, error: `${errorObj}` });
      });
  }
);
  

