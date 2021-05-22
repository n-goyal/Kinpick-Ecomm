import { cartActionTypes } from "./cart.types";

const { TOGGLE_CART_DROPDOWN, ADD_ITEM } = cartActionTypes;

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
