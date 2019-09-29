import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection-page/collection-page.container';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

import './shop-page.styles.scss';

class ShopPage extends Component {
  componentDidMount() {
    const { getCollections } = this.props;
    getCollections();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop">
        <Route 
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        /> 
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCollections: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);