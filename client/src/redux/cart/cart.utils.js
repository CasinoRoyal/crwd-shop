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

export const deleteCartItem = (cartItems, cartItemToDelete) => {
  return cartItems.filter(({ id }) => id !== cartItemToDelete.id)
} 

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const isCartItemExist = cartItems.find(({ id }) => id === cartItemToRemove.id);

  if (isCartItemExist.quantity === 1) {
    return deleteCartItem(cartItems, cartItemToRemove)
  }

  return cartItems.map((item) => {
    return item.id === cartItemToRemove.id
      ? {...item, quantity: item.quantity - 1}
      : item
  })
}