import React, { createContext, useState, useEffect } from 'react';

import {
   addItemToCart,
   removeItemFromCart,
   deleteCartItem,
   cartItemsCountFromCart,
   cartItemsTotalPrice } from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toogleCartDropdown: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemsFromCart: () => {},
  cartItemsCount: 0,
  cartItemsTotal: 0
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsTotal, setCartItemsTotal] = useState(0);

  useEffect(() => {
    setCartItemsCount(cartItemsCountFromCart(cartItems));
    setCartItemsTotal(cartItemsTotalPrice(cartItems));
  }, [cartItems]);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item));
  const toogleCartDropdown = () => setHidden(!hidden);
  const clearItemsFromCart = (item) => setCartItems(deleteCartItem(cartItems, item));
  
  return (
    <CartContext.Provider value={{
      hidden,
      toogleCartDropdown,
      cartItems,
      addItem,
      removeItem,
      clearItemsFromCart,
      cartItemsCount,
      cartItemsTotal
    }}>
      {children}
    </CartContext.Provider>
  )
  
};

export default CartProvider;