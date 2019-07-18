import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => { 
  console.log(currentUser)
  return(
    <div className="header">
      <div className="logo-container">
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className="options">
        <Link className="option" to='/shop'>
          Shop
        </Link>

        <Link className="option" to='/contact'>
          Contact
        </Link>

        {
          currentUser ?
            <button className="option" onClick={() => auth.signOut()}>
              Sign out
            </button>
            :
            <Link className="option" to='/login'>
              Sign in
            </Link>
        }

      </div>
    </div>
  )
}

export default Header;