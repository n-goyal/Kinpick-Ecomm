import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CustomButton } from "../../components/custom-button/custom-button.component";

import {
  selectCartTotal,
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const Checkout = ({ cartItems, total, count }) => (
  <div className="checkout-page">
    {count ? (
      <>
        <div className="empty-text link">Cart</div>
        <br />
        <br />
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
        <div className="total">
          Total: Rs. {total}
          <CustomButton
            className="checkout-btn"
            bgColor="white"
            bdColor="black"
            color="black"
          >
            Checkout ➡
          </CustomButton>
        </div>
      </>
    ) : (
      <div className="empty-text">
        <span>Your cart is empty😕!</span>
        <Link className="link" to="/shop/en_in/men">
          Add items, Now!
        </Link>
      </div>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  count: selectCartItemsCount,
});

export default connect(mapStateToProps)(Checkout);
