import CartActionsTypes from './cart.types';

export const toogleCartDropdown = () => ({
  type: CartActionsTypes.TOOGLE_CART_DROPDOWN
});

export const addItem = (item) => ({
  type: CartActionsTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: CartActionsTypes.REMOVE_ITEM,
  payload: item
});


export const deleteCartItem = (item) => ({
  type: CartActionsTypes.DELETE_CART_ITEM,
  payload: item
});
