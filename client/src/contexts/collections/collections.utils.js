export const collectionsToArray = (collections) => 
  collections ? 
    Object.keys(collections).map((value) => collections[value]) : [];