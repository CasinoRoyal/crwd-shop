import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toogleCartDropdown } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toogleCartDropdown }) => {
  return(
    <div className="cart-icon" onClick={toogleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"></span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
 return {
   toogleCartDropdown: () => dispatch(toogleCartDropdown())
 }
};

export default connect(null, mapDispatchToProps)(CartIcon);