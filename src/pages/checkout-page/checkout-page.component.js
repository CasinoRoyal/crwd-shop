import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeButton from '../../components/stripe-button/';
import CheckoutItem from '../../components/checkout-item/';
import { 
  selectCartItems, 
  selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import './checkout-page.styles.scss';

const CheckoutPage = ({ cartItems, totalPrice }) => {
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
      <div className="total">TOTAL: ${totalPrice}</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeButton price={totalPrice} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckoutPage);