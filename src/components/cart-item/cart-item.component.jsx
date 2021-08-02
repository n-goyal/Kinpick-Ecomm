import React from "react";
import { connect } from "react-redux";
import {
  removeCartItem,
  moveItemToWishlist,
} from "../../redux/cart/cart.actions";
import { CustomButton } from "../custom-button/custom-button.component";

import "./cart-item.styles.scss";

const CartItem = ({ item, removeCartItem, moveItemToWishlist }) => {
  const { name, image1url, price, quantity } = item;
  console.log(item.id);
  return (
    <div className="cart-item">
      <img src={image1url} alt={name} />
      <div className="item-details">
        <span className="name">{name} </span>
        <span className="name">
          {quantity} X {price}
        </span>
      </div>
      <div
        className="icon-container"
        onClick={() => {
          moveItemToWishlist(item);
        }}
      >
        <svg
          className="delete-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
        </svg>
      </div>
      <div
        className="icon-container"
        onClick={() => {
          removeCartItem(item);
        }}
      >
        <svg
          className="delete-icon"
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
  moveItemToWishlist: (item) => dispatch(moveItemToWishlist(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
