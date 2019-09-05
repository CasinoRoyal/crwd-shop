import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collection-overview/';
import CollectionPage from '../collection-page/';
import withSpinner from '../../components/with-spinner/';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import { 
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

import './shop-page.styles.scss';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { getCollections } = this.props;
    getCollections();
  }

  render() {
    const { match, isFetching, isLoaded } = this.props;
    return (
      <div className="shop">
        <Route exact path={`${match.path}`} render={
          (props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />}/>
        <Route path={`${match.path}/:collectionId`} render={
          (props) => <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />}/>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionsFetching,
  isLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
  getCollections: () => dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);