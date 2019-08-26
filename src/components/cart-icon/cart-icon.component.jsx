import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toogleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ toogleCartDropdown, countItem }) => {
  return(
    <div className="cart-icon" onClick={toogleCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{countItem}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  countItem: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => {
 return {
   toogleCartDropdown: () => dispatch(toogleCartDropdown())
 }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);