import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartTotal,
  selectCartItems,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>image</span>
      </div>
      <div className="header-block">
        <span>name</span>
      </div>
      <div className="header-block">
        <span>quantity</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem key={item.id} cartItem={item} />
    ))}
    <div className="total">Total: {total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
