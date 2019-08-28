import React from 'react';
import { connect } from 'react-redux';

import { deleteCartItem, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, deleteCartItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <button 
          className="arrow" 
          onClick={() => removeItem(cartItem)}>&#10094;</button>
        <span className="value">{quantity}</span>
        <button 
          className="arrow" 
          onClick={() => addItem(cartItem)}>&#10095;</button>
      </div>
      <span className="price">{price}</span>
      <button 
        className="remove-button"
        onClick={() => deleteCartItem(cartItem)}>&#10005;</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: (item) => dispatch(deleteCartItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);