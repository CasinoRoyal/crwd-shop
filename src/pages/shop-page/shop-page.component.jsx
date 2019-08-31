import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/';
import CollectionPage from '../collection-page/';

import './shop-page.styles.scss';

const ShopPage = ({ match }) => (
  <div className="shop">
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
  </div>
)

export default ShopPage;