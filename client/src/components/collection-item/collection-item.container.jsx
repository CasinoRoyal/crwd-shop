import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import CollectionItem from './collection-item.component';

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
};

const CollectionItemContainer = connect(null, mapDispatchToProps)(CollectionItem);

export default CollectionItemContainer;