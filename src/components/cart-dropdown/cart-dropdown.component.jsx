import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item.component";
import { CustomButton } from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history }) => {
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
          onClick={() => history.push("/checkout")}
        >
          Checkout
        </CustomButton>
        <CustomButton
          bgColor="black"
          color="white"
          className="empty-message"
          onClick={() => history.push("/bag")}
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

export default withRouter(connect(mapStateToProps)(CartDropdown));
