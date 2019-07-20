import React from 'react';

import CustomButton from '../custom-button';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return(
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  )
}

export default CartDropdown;