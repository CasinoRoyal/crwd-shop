import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import UserContext from '../../contexts/user/user.context';
import { CartContext } from '../../providers/cart/cart.provider';

import CartIcon from '../cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => { 
  const currentUser = useContext(UserContext);
  const { hidden } = useContext(CartContext);

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

      {hidden ? null : <CartDropdown />}
    </div>
  )
}

export default Header;