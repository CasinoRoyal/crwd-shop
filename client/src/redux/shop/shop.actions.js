import shopActionTypes from './shop.types';
import { firestore, 
  convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collection');
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch((errorMessage) => dispatch(fetchCollectionFailure(errorMessage)));
  }
};