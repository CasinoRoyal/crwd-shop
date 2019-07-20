export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isCartItemExist = cartItems.find(({ id }) => id === cartItemToAdd.id);

  if (isCartItemExist) {
    return cartItems.map((item) => {
     return item.id === cartItemToAdd.id 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    })
  }

  return [
    ...cartItems,
    { ...cartItemToAdd, quantity: 1 }
  ]
};