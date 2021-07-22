import { wishlistActionTypes } from "./wishlist.types";
import { addWishlistItems } from "./wishlist.utils";

const { ADD_ITEM_To_WISHLIST, TOGGLE_WISHLIST_DROPDOWN } = wishlistActionTypes;

const INITIAL_STATE = {
  hideWishlist: false,
  wishlistItems: [],
};

const wishlistReducer = (state = INITIAL_STATE, action) => {
  console.log("wishlist reducer triggered");
  switch (action.type) {
    case ADD_ITEM_To_WISHLIST:
      return {
        ...state,
        wishlistItems: addWishlistItems(state.wishlistItems, action.payload),
      };

    case TOGGLE_WISHLIST_DROPDOWN:
      return {
        ...state,
        hideWishlist: !state.hideWishlist,
      };
    default:
      return state;
  }
};

export default wishlistReducer;
