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
