import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollectionsToArray } from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/collection-preview';


import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {
        collections.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />
        })
      }    
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsToArray
})

export default connect(mapStateToProps)(CollectionOverview);