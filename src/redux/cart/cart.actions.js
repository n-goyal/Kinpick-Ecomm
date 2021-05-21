import { cartActionTypes } from "./cart.types";

const { TOGGLE_CART_DROPDOWN } = cartActionTypes;

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN,
});
