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
            .map(({ id, ...otherItemProps }) => {
              return <CollectionItem key={id} {...otherItemProps} />
            })
        }
      </div>
    </div>
  )
}

export default CollectionPreview;