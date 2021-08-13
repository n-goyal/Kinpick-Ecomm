export const addItemsToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  // filter the cartItems and remove the item
  // eslint-disable-next-line array-callback-return
  const updatedCartItems = cartItems.filter((item) => {
    if (item.id !== itemToRemove.id) return item;
  });
  return updatedCartItems;
};

export const moveItemFromWishlist = (cartItems, itemToMove) => {
  const existingCartItems = cartItems.find((item) => item.id === itemToMove.id);

  // if exist already don't add, otherwise add item to cartItems with quantity = 1.
  return existingCartItems
    ? cartItems
    : [
        ...cartItems,
        {
          ...itemToMove,
          quantity: 1,
        },
      ];
};

export const reduceItemQuantity = (cartItems, cartItemToReduce) => {
  const existingCartItems = cartItems.find(
    (item) => item.id === cartItemToReduce.id
  );

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToReduce.id);
  }

  return cartItems.map((item) =>
    item.id === cartItemToReduce.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
