import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item.component";
import { CustomButton } from "../custom-button/custom-button.component";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <span className="empty-message">Your Cart Is Empty!</span>
        )}
      </div>
      <div className="btn-actions">
        <CustomButton
          bgColor="white"
          bdColor="black"
          color="black"
          className="empty-message"
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartDropdown());
          }}
        >
          Checkout
        </CustomButton>
        <CustomButton
          bgColor="black"
          color="white"
          className="empty-message"
          onClick={() => {
            history.push("/bag");
            dispatch(toggleCartDropdown());
          }}
        >
          Shopping Bag
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// connect by default passes dispatch if mapDispatchToProps is not provided
// hence using this for our advantage

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartDropdown: () => dispatch(toggleCartDropdown()),
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));
