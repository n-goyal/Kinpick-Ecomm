import React from "react";
import { connect } from "react-redux";

import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const ShoppingCart = ({ toggleCartDropdown, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      Shopping Bag(<span>{itemCount}</span>)
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
