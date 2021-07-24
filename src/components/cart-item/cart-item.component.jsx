import React from "react";
import { connect } from "react-redux";
import { removeCartItem } from "../../redux/cart/cart.actions";
import { CustomButton } from "../custom-button/custom-button.component";

import "./cart-item.styles.scss";

const CartItem = ({ item, removeCartItem }) => {
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

      <CustomButton
        onClick={() => {
          removeCartItem(item);
        }}
        bgColor="#ade8f4"
        color="black"
        className="button"
      >
        Remove From Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
