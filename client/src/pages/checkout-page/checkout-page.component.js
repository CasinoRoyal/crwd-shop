import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import StripeButton from '../../components/stripe-button/';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout-page.styles.scss';

const CheckoutPage = () => {
  const { cartItems, cartItemsTotal } = useContext(CartContext);
  return (
    <div className='checkout-page'>
      <ul className="checkout-header">
        <li className="header-block">
          <span>Product</span>
        </li>
        <li className="header-block">
          <span>Description</span>
        </li>
        <li className="header-block">
          <span>Quantity</span>
        </li>
        <li className="header-block">
          <span>Price</span>
        </li>
        <li className="header-block">
          <span>Remove</span>
        </li>
      </ul>
      {
        cartItems.map((cartItem) => 
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
      }
      <div className="total">TOTAL: ${cartItemsTotal}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeButton price={cartItemsTotal} />
    </div>
  )
}

export default CheckoutPage;