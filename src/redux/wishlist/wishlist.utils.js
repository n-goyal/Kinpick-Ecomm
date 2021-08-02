export const addWishlistItems = (wishlistItems, wishlistItemsToAdd) => {
  const existingWishlistItems = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === wishlistItemsToAdd.id
  );

  // if exist don't add again.
  if (existingWishlistItems) {
    return wishlistItems;
  }

  // otherwise add
  return [...wishlistItems, wishlistItemsToAdd];
};

export const removeWishlistItem = (wishlistItems, itemsToRemove) => {
  // filter itemToRemove from wishlistItems array
  // eslint-disable-next-line array-callback-return
  const updatedWishlist = wishlistItems.filter((item) => {
    if (item.id !== itemsToRemove.id) return item;
  });

  return updatedWishlist;
};