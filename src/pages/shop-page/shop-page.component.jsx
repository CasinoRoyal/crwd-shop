import React, { Component } from 'react';

import SHOP_DATA from './shop-data';
import CollectionPreview from '../../components/collection-preview';

import './shop-page.styles.scss';

export default class ShopPage extends Component {

  state = {
    collection: SHOP_DATA
  };

  render() {
    const { collection } = this.state;

    return(
      <div className="shop">
        {
          collection.map(({ id, ...otherProps}) => {
            return <CollectionPreview key={id} {...otherProps} />
          })
        }
      </div>
    )
  }
}