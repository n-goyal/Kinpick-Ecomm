import { wishlistActionTypes } from "./wishlist.types";
import { addWishlistItems, removeWishlistItem } from "./wishlist.utils";

const {
  ADD_ITEM_To_WISHLIST,
  TOGGLE_WISHLIST_DROPDOWN,
  MOVE_ITEM_WISHLIST_TO_CART,
  REMOVE_ITEM_FROM_WISHLIST,
  MOVE_ITEM_CART_TO_WISHLIST,
} = wishlistActionTypes;

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

    case MOVE_ITEM_WISHLIST_TO_CART:
      return {
        ...state,
        wishlistItems: removeWishlistItem(state.wishlistItems, action.payload),
      };

    case REMOVE_ITEM_FROM_WISHLIST:
      return {
        ...state,
        wishlistItems: removeWishlistItem(state.wishlistItems, action.payload),
      };

    case MOVE_ITEM_CART_TO_WISHLIST:
      return {
        ...state,
        wishlistItems: addWishlistItems(state.wishlistItems, action.payload),
      };

    default:
      return state;
  }
};

export default wishlistReducer;
