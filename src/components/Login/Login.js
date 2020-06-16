import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect} from 'react-router-dom';
import { login } from '../../actions/auth';

class Login extends React.Component {
  onSubmitForm = async (formData) => {
    this.props.login(formData);
    console.log(this.props.isLoggedIn)
    
  };

  renderError = (meta) => {
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
    if(this.props.isLoggedIn){
      return <Redirect to={'/'} />;
    }else{
      return (
        <form onSubmit={this.props.handleSubmit(this.onSubmitForm)}>
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
          <button>Submit</button>
        </form>
      );
    }
   
  }
}

function validate(formValues) {
  const errors = {};

  if (!formValues.email) {
    errors.email = 'Email is required';
  }
  if (!formValues.password) {
    errors.password = 'Password is required';
  }

  return errors;
}


const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  };
};

const LoginMapped = connect(mapStateToProps, { login })(Login);

export default reduxForm({
  form: 'login',
  validate,
})(LoginMapped);
