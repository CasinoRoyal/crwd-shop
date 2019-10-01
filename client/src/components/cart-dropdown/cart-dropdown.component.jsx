import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import CustomButton from '../custom-button';
import CartItem from '../cart-item';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ history }) => {
  const { cartItems, toogleCartDropdown } = useContext(CartContext);

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
        toogleCartDropdown();
      }}>
        Go to checkout
      </CustomButton>
    </div>
  )
}

export default CartDropdown;