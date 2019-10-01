import React, { useContext } from 'react';

import { CartContext } from '../../providers/cart/cart.provider';
import CustomButton from '../custom-button';

import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const { imageUrl, name, price } = item;

  return(
    <div className="collection-item">
      <div className="image" 
           style={{
            backgroundImage: `url(${imageUrl})`
           }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
  )
}



export default CollectionItem;