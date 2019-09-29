import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item';

import './collection-preview.styles.scss';

const CollectionPreview = (props) => {
  const { title, items, history, match, routeName } = props;
  return(
    <div className="collection-preview">
      <h3 onClick={() => history.push(`${match.path}/${routeName}`)} 
          className="title">
        {title.toUpperCase()}
      </h3>

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

export default withRouter(CollectionPreview);