import React from 'react';

import CustomButton from '../custom-button';
import CartItem from '../cart-item';

import { toogleCartDropdown } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return(
    <div className="cart-dropdown">
      <div className="cart-items"> 
        {
          cartItems.length 
            ?
              cartItems.map((cartItem) => {
                return <CartItem key={cartItem.id} cartItem={cartItem} />
              })
            :
              <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toogleCartDropdown());
      }}>
        Go to checkout
      </CustomButton>
    </div>
  )
}

export default CartDropdown;