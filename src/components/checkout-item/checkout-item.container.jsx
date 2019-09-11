import { connect } from 'react-redux';

import { deleteCartItem, addItem, removeItem } from '../../redux/cart/cart.actions';
import CheckoutItem from './checkout-item.component'

const mapDispatchToProps = (dispatch) => ({
  deleteCartItem: (item) => dispatch(deleteCartItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
});

const CheckoutItemContainer = connect(null, mapDispatchToProps)(CheckoutItem);

export default CheckoutItemContainer