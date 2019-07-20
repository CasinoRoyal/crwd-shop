import CartActionsTypes from './cart.types';

export const toogleCartDropdown = () => ({
  type: CartActionsTypes.TOOGLE_CART_DROPDOWN
});

export const addItem = (item) => ({
  type: CartActionsTypes.ADD_ITEM,
  payload: item
});