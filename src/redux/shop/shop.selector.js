import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsToArray = createSelector(
  [selectShopCollections],
  (collections) => collections ? 
    Object.keys(collections).map((value) => collections[value]) : []
);

export const selectCollection = (collectionsUrl) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections ? collections[collectionsUrl] : null
  )