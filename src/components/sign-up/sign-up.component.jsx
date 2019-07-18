import React, { Component } from 'react';

import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { auth, createUserProfile } from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss';

export default class SignUp extends Component {

  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email,
            password, confirmPassword } = this.state;
    
    if (password !== confirmPassword) {
      alert('password not confirm');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      
      await createUserProfile(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

    } catch(err) {
      console.error(err)
    }

  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  render() {
    const { displayName, email,
            password, confirmPassword } = this.state;
    return(
      <div className="sign-up">
        <h2 className="title">I haven't an account yet</h2>
        <span>Sign up with email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type='text' name='displayName' required
                     onChange={this.handleChange} value={displayName}
                     label='Display name' />

          <FormInput type='email' name='email' required
                     onChange={this.handleChange} value={email}
                     label='Email' />

          <FormInput type='password' name='password' required
                     onChange={this.handleChange} value={password}
                     label='Password' />

          <FormInput type='password' name='confirmPassword' required
                     onChange={this.handleChange} value={confirmPassword}
                     label='Confirm password' />
          <CustomButton type='submit'>Sign up</CustomButton>
        </form>
      </div>
    )
  }
}