import { createSelector } from "reselect";

const selectWishlist = (state) => state.wishlist;

export const selectWishlistHidden = createSelector(
  [selectWishlist],
  (wishlist) => wishlist.hideWishlist
);

export const selectWishlistItems = createSelector(
  [selectWishlist],
  (wishlist) => wishlist.wishlistItems
);

export const selectWishlistItemsCount = createSelector(
  [selectWishlistItems],
  (wishlistItems) => wishlistItems.length
);
