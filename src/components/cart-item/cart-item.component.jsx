import React from "react";
import { connect } from "react-redux";

import {
  moveItemToWishlist,
} from "../../redux/cart/cart.actions";

import RemoveIconContainer from "../../containers/removeIconContainer/RemoveIconContainer";

import "./cart-item.styles.scss";

const CartItem = ({ item, moveItemToWishlist }) => {
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
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
        </svg>
      </div>
      <RemoveIconContainer item={item} itemType="cart" />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  moveItemToWishlist: (item) => dispatch(moveItemToWishlist(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
