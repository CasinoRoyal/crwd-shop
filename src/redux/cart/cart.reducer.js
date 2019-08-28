import CartActionsTypes from './cart.types';
import { 
  addItemToCart, 
  removeItemFromCart, 
  deleteCartItem } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CartActionsTypes.TOOGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionsTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionsTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }      
    case CartActionsTypes.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: deleteCartItem(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}

export default cartReducer;