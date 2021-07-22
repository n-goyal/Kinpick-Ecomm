import { wishlistActionTypes } from "./wishlist.types";

const { ADD_ITEM_To_WISHLIST, TOGGLE_WISHLIST_DROPDOWN } = wishlistActionTypes;

export const addItemToWishlist = (item) => ({
  type: ADD_ITEM_To_WISHLIST,
  payload: item,
});

export const toggleWishlistDropdown = () => ({
  type: TOGGLE_WISHLIST_DROPDOWN,
});
