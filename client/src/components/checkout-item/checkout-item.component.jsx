import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { clearItemsFromCart, addItem, removeItem } = useContext(CartContext);
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
        onClick={() => clearItemsFromCart(cartItem)}>&#10005;</button>
    </div>
  )
}

export default CheckoutItem;