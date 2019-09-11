import { compose } from 'redux';
import { connect }  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPage from '../collection-page/';
import withSpinner from '../../components/with-spinner/';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;