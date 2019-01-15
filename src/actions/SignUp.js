import axios from 'axios';

/**
  *export all sign up action const to be used in the reducers file
 */

export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';
export const SIGN_UP_SUCCESSFUL = 'SIGN_UP_SUCCESSFUL';
export const SIGN_UP_INITIALIZED = 'SIGN_UP_INITIALIZED';
/**
 * declare the base API URI either for use locally or in production
 */

// const baseUrl = process.env.NODE_ENV !== 'DEV' ? process.env.SERVER_BASE_URL : 'http://localhost:6000/api';
const baseUrl = 'http://localhost:3000/api';

/**
 * start the sign-up process by dispatching all
 * action const with the payload and hitting the signup API endpoint
 * @param {*} forminfo (user form data)
 */

export const signUp = (formInfo, history) => (
  (dispatch) => {
    const payload = {
      ...formInfo,
    };
    console.log(formInfo, "formInfo"); // eslint-disable-line
    dispatch({ type: SIGN_UP_INITIALIZED });
    axios.post(`${baseUrl}/register`, payload)
      .then((res) => {
        const serverPayload = res.data;
        if (serverPayload.data) {
          dispatch({ type: SIGN_UP_SUCCESSFUL });
        } else {
          let errorMsg;
          if (Array.isArray(serverPayload.error)) {
            errorMsg = serverPayload.error[0].details;
          } else {
            errorMsg = serverPayload.error.details;
          }
          dispatch({ type: SIGN_UP_FAILED, error: errorMsg });
        }
      })
      .catch(err => dispatch({ type: SIGN_UP_FAILED, error: `Failed to connect to server [${err}]` }));
  }
);
