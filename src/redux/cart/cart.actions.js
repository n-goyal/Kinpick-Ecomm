import { cartActionTypes } from "./cart.types";

const { TOGGLE_CART_DROPDOWN, REMOVE_ITEM_FROM_CART, ADD_ITEM } =
  cartActionTypes;

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item,
});
