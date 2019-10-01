import React, { useContext } from 'react';

import CollectionsContext from '../../contexts/collections/collections.context';
import { collectionsToArray } from '../../contexts/collections/collections.utils';

import CollectionPreview from '../../components/collection-preview';

import './collection-overview.styles.scss';

const CollectionOverview = () => {
  const collections = collectionsToArray(useContext(CollectionsContext));
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
export default CollectionOverview;