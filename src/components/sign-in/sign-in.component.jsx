import React, { Component } from 'react';

import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

export default class SignIn extends Component {
  
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({email: '', password: ''})
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' 
                     type="email" 
                     value={this.state.email}  
                     label="Email"
                     handleChange={this.handleChange} 
                     required />

          <FormInput name='password' 
                     type="password"
                     value={this.state.password}  
                     label="Password"
                     handleChange={this.handleChange} 
                     required />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleAuth>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}