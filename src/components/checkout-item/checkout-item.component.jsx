import React from "react";
import { connect } from "react-redux";
import {
  removeCartItem,
  addItem,
  reduceQuantity,
  moveItemToWishlist,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";
import RemoveIconContainer from "../../containers/removeIconContainer/RemoveIconContainer";

const CheckoutItem = ({
  moveItemToWishlist,
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
      <div className="name">
        {name}
        <div className="actions">
          <div
            className="icon-container"
            onClick={() => {
              moveItemToWishlist(cartItem);
            }}
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
            </svg>
          </div>
          <RemoveIconContainer item={cartItem} itemType="cart" />
        </div>
      </div>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  reduceQuantity: (item) => dispatch(reduceQuantity(item)),
  addItem: (item) => dispatch(addItem(item)),
  moveItemToWishlist: (item) => dispatch(moveItemToWishlist(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
