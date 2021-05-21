import React from "react";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const ShoppingCart = ({ toggleCartDropdown }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      Shopping Bag(<span>0</span>)
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(ShoppingCart);
