import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartDropdownContainer from '../cart-dropdown/cart-dropdown.container';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => { 
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
        
        <CartIcon />
      </div>

      {hidden ? null : <CartDropdownContainer />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);