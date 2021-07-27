import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

// import ProductCard from "../product-card/product-card.component";
import { removeItemFromWishlist } from "../../redux/wishlist/wishlist.actions";
import { moveItemWishlistToCart } from "../../redux/wishlist/wishlist.actions";

import "./wishlist-item.style.scss";
import { CustomButton } from "../custom-button/custom-button.component";

const WishlistItem = ({
  item,
  removeItemFromWishlist,
  moveItemWishlistToCart,
}) => {
  // modified product card component - styles are same as that of product card
  return (
    <div className="item-sizing">
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
        </div>
        <CustomButton
          onClick={() => {
            // add to cart
            moveItemWishlistToCart(item);
          }}
          bgColor="white"
          color="black"
          bdColor="black"
          className="button"
        >
          Move Item To Cart
        </CustomButton>
        <CustomButton
          onClick={() => {
            removeItemFromWishlist(item);
          }}
          bgColor="black"
          color="white"
          className="button"
        >
          Remove Item From Wishlist
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromWishlist: (item) => dispatch(removeItemFromWishlist(item)),
  moveItemWishlistToCart: (item) => dispatch(moveItemWishlistToCart(item)),
});

export default connect(null, mapDispatchToProps)(WishlistItem);
