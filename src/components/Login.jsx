import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Alert, Col, Row } from "reactstrap";
import { formField, loginFormValidator } from "../utils/formHelpers";

/**
 * login form component using redux forms
 */
const LoginComponent = ({
  handleSubmit,
  errorMessage,
  processLogin,
  isLoginInProcess,
  candisplayErrorMessage,
  valid,
  pristine,
  history,
  submitting
}) => (
  <div>
    <div className="login-page">
      <div className="">
        <div className="container-fluid">
          <Row>
            <Col className="container" xs={12} sm={6} md={6} lg={6}>
              <Col>
                <img
                  src="./images/logo.svg"
                  alt="Intelligent Crazy People logo"
                  className="logo-intelligent-elephant"
                />
              </Col>
              <Row className="login-page__form">
                <Col
                  className="login-page__form-intro"
                  md={{ size: 8, offset: 2 }}
                >
                  <span>
                    Intelligent Crazy People is your global polymath community
                    of domain enthusiast
                  </span>
                </Col>
                <Col md={{ size: 8, offset: 2 }}>
                  <form
                    onSubmit={handleSubmit(val => processLogin(val, history))}
                  >
                    <Alert color="danger" isOpen={candisplayErrorMessage}>
                      {errorMessage}
                    </Alert>
                    <div className="form-group">
                      <Field
                        name="email"
                        type="text"
                        className="form-control"
                        component={formField}
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <Field
                        name="password"
                        type="password"
                        className="form-control"
                        component={formField}
                        id="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="signup-page__submit">
                        {isLoginInProcess ? "Loading..." : "Sign in"}
                      </button>
                    </div>
                  </form>
                  <div
                    className="login-page__cta text-center"
                    md={{ size: 8, offset: 2 }}
                  >
                    <p>
                      Don&#39;t have an account? &nbsp;
                      <a className="login-page__cta-text" href="/sign-up">
                        Sign Up Here
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
);

/**
 * validate each redux forms params to ensure they match their types
 */
LoginComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  processLogin: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  isLoginInProcess: PropTypes.bool.isRequired,
  candisplayErrorMessage: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  history: PropTypes.shape({}).isRequired,
  errorMessage: PropTypes.string.isRequired
};

/**
 * export form with validate func
 */
export default reduxForm({
  form: "loginForm",
  validate: loginFormValidator
})(LoginComponent);
