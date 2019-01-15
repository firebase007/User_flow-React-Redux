import React from 'react';
import PropTypes from 'prop-types';

/**
 * Form Field Component with params
 * @param {input**, inputType, inputPlaceholder, inputId, and meta } param
 * this needs refactoring tho...
 */
export const formField = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
}) => (
  <div>
    <input className="form-control" {...input} placeholder={placeholder} type={type} id={id} />
    {touched && (error && <span style={{ color: 'red' }}>*{error}</span>)}
  </div>
);

/**
 * form component properties and their types
 */
formField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({}).isRequired,
  input: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string.isRequired,
};

/**
 * Register form validator helper function
 * @param {email, phone, password} values
 */
export const registerFormValidator = (values) => {
  const errors = {};

  /**
   * validate if input is an email
   */
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }

  /**
   * validate if input is a phone number
   */
  if (!values.phone) {
    errors.phone = 'Phone number is required';
  } else if (values.phone.length < 11) {
    errors.phone = 'Phone number should be atleast 11 digit';
  } else if (isNaN(values.phone)) { // eslint-disable-line
    errors.phone = 'Phone number should be a combination of numbers';
  }

  /**
   * validate if input is a password
   */
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password should be atleast 8 characters long';
  }

  return errors;
};

/**
 * Login form validator helper function
 * @param {email, password} values
 */
export const loginFormValidator = (values) => {
  const errors = {};

  /**
   * validate if input is an email field
   */
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }

  /**
   * validate is input is a password field
   */
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password should be atleast 8 characters long';
  }

  return errors;
};

export const passwordResetValidator = (values) => {
  const errors = {};

  /**
   * validate if input is an email field
   */
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }

  return errors;
};
