import { wishlistActionTypes } from "./wishlist.types";

const {
  ADD_ITEM_To_WISHLIST,
  TOGGLE_WISHLIST_DROPDOWN,
  MOVE_ITEM_WISHLIST_TO_CART,
  REMOVE_ITEM_FROM_WISHLIST,
} = wishlistActionTypes;

export const addItemToWishlist = (item) => ({
  type: ADD_ITEM_To_WISHLIST,
  payload: item,
});

export const toggleWishlistDropdown = () => ({
  type: TOGGLE_WISHLIST_DROPDOWN,
});

export const moveItemWishlistToCart = (item) => ({
  type: MOVE_ITEM_WISHLIST_TO_CART,
  payload: item,
});

export const removeItemFromWishlist = (item) => ({
  type: REMOVE_ITEM_FROM_WISHLIST,
  payload: item,
});
