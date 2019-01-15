import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Alert, Col, Row } from "reactstrap";
import { registerFormValidator, formField } from "../utils/formHelpers";

const SignUpComponent = ({
  handleSubmit,
  signUpErrorMessage,
  signUpInPogress,
  isSignUpSuccessful,
  canDisplaySignUpError,
  initiateSignUp,
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
                    className="signup-page__form"
                    onSubmit={handleSubmit(val => initiateSignUp(val))}
                  >
                    <Alert color="danger" isOpen={canDisplaySignUpError}>
                      {signUpErrorMessage}
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
                    <Field
                      name="full_name"
                      type="text"
                      className="form-control"
                      component={formField}
                      id="fullName"
                      placeholder="Full Name"
                      required
                    />

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
                        {signUpInPogress ? "Loading..." : "Signup"}
                      </button>
                    </div>
                  </form>
                  <div
                    className="login-page__cta text-center"
                    md={{ size: 8, offset: 2 }}
                  >
                    <p login-page__cta text-center>
                      Already have an account? &nbsp;
                      <a className="login-page__cta-text2" href="/login">
                        Login Here
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
SignUpComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initiateSignUp: PropTypes.func.isRequired,
  isSignUpSuccessful: PropTypes.bool.isRequired,
  signUpInPogress: PropTypes.bool.isRequired,
  canDisplaySignUpError: PropTypes.bool.isRequired,
  signUpErrorMessage: PropTypes.string.isRequired
};

/**
 * export form with validate func
 */
export default reduxForm({
  form: "registerForm",
  validate: registerFormValidator
})(SignUpComponent);
