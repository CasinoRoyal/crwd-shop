import React from 'react';

import CollectionItem from '../collection-item';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, id }) => {
  return(
    <div className="collection-preview">
      <h3 className="title">{title.toUpperCase()}</h3>
      <div className="preview">
        {
          items
            .filter((item, idx) => idx < 4)
            .map((item) => {
              return <CollectionItem key={item.id} item={item} />
            })
        }
      </div>
    </div>
  )
}

export default CollectionPreview;