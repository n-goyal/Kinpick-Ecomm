import { cartActionTypes } from "./cart.types";
import {
  addItemsToCart,
  removeItemFromCart,
  moveItemFromWishlist,
} from "./cart.utils";

const {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  MOVE_ITEM_WISHLIST_TO_CART,
  REMOVE_ITEM_FROM_CART,
} = cartActionTypes;

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemsToCart(state.cartItems, action.payload),
      };
    case MOVE_ITEM_WISHLIST_TO_CART:
      return {
        ...state,
        cartItems: moveItemFromWishlist(state.cartItems, action.payload),
      };

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
