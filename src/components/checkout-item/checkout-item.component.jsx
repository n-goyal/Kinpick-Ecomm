import React from "react";
import { connect } from "react-redux";
import {
  removeCartItem,
  addItem,
  reduceQuantity,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  removeCartItem,
  cartItem,
  reduceQuantity,
  addItem,
}) => {
  const { name, image1url, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={image1url} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <div
          className="arrow"
          onClick={() => {
            reduceQuantity(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </div>
      </div>
      <div className="price">{price}</div>
      <div
        className="icon-container"
        onClick={() => {
          removeCartItem(cartItem);
        }}
      >
        <svg
          className="icon"
          viewBox="0 0 14 16"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <path
            fill-rule="evenodd"
            d="M14 4v1h-1v10.455c0 .3-.224.545-.5.545h-11c-.276 0-.5-.244-.5-.545V5H0V4h14zm-2 1v10H2V5h10zM9.5 0a.5.5 0 01.5.5V2h4v1H0V2h4V.5a.5.5 0 01.5-.5h5zM9 1H5v1h4V1zM5 8h1v4H5V8zm3 0h1v4H8V8z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  reduceQuantity: (item) => dispatch(reduceQuantity(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
