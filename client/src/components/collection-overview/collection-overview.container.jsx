import { compose } from 'redux';
import { connect }  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collection-overview/';
import withSpinner from '../../components/with-spinner/';

import { selectIsCollectionsFetching } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;