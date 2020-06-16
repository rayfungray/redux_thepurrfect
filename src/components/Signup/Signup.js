import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

import { signup } from '../../actions/auth';

class Signup extends React.Component {
  onSubmitForm = async (formData) => {
    this.props.signup({ ...formData, confirmPassword: undefined });
  };

  renderError = (meta) => {
    console.log(meta)
    return meta.error && meta.touched ? (
      <p className='error-msg'>{meta.error}</p>
    ) : (
      ''
    );
  };

  renderInput = ({ label, input, type, meta }) => {
    const className = meta.error && meta.touched ? 'error-input' : '';
    return (
      <>
        <label>{label}</label>
        <input {...input} type={type} className={className} />
        {this.renderError(meta)}
      </>
    );
  };

  render() {
    // console.log('component props:', this.props);

    if(this.props.isLoggedIn){
      return <Redirect to={'/'} />;
    }else{
      return (
        <form onSubmit={this.props.handleSubmit(this.onSubmitForm)}>
          <Field
            name='name'
            component={this.renderInput}
            label='Enter Name'
            type='text'
          />
          <Field
            name='email'
            component={this.renderInput}
            label='Enter Email'
            type='email'
          />
          <Field
            name='password'
            component={this.renderInput}
            label='Enter Password'
            type='password'
          />
          <Field
            name='confirmPassword'
            component={this.renderInput}
            label='Confirm Password'
            type='password'
          />
  
          <button>Submit</button>
        </form>
      );

    }

    
  }
}

function validate(formValues) {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'Name is required';
  }
  if (!formValues.email) {
    errors.email = 'Email is required';
  }
  if (!formValues.password) {
    errors.password = 'Password is required';
  }
  if (formValues.confirmPassword !== formValues.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  };
};

const SignupMapped = connect(mapStateToProps, { signup })(Signup);

export default reduxForm({
  form: 'signup',
  validate,
})(SignupMapped);
