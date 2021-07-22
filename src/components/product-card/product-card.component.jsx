import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import { addItemToWishlist } from "../../redux/wishlist/wishlist.actions";

import { CustomButton } from "../custom-button/custom-button.component";

import "./product-card.styles.scss";

const ProductCard = ({ item, addItem, addItemToWishlist }) => {
  return (
    <div className="product">
      <div className="image-container">
        <Link to="/:productName">
          <img src={item.image1url} alt={item.name} />
        </Link>
      </div>
      <div className="item-details">
        <div className="item-price">
          <div className="item-heading">{item.name}</div>
          <div>
            <span>{item.price}</span>
          </div>
        </div>
        <div
          className="icon-favorites favorite"
          onClick={() => addItemToWishlist(item)}
        ></div>
      </div>
      <CustomButton
        onClick={() => addItem(item)}
        bgColor="#ade8f4"
        color="black"
        className="button"
      >
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addItemToWishlist: (item) => dispatch(addItemToWishlist(item)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
