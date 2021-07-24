import React from "react";
import { connect } from "react-redux";

import ProductCard from "../product-card/product-card.component";
import { removeItemFromWishlist } from "../../redux/wishlist/wishlist.actions";
import { moveItemWishlistToCart } from "../../redux/wishlist/wishlist.actions";

import "./wishlist-item.style.scss";
import { CustomButton } from "../custom-button/custom-button.component";

const WishlistItem = ({
  item,
  removeItemFromWishlist,
  moveItemWishlistToCart,
}) => {
  return (
    <div className="item-sizing">
      <ProductCard item={item} />
      <CustomButton
        onClick={() => {
          // add to cart
          moveItemWishlistToCart(item);
        }}
        bgColor="#ade8f4"
        color="black"
        className="button"
      >
        Move Item To Cart
      </CustomButton>
      <CustomButton
        onClick={() => {
          removeItemFromWishlist(item);
        }}
        bgColor="#ade8f4"
        color="black"
        className="button"
      >
        Remove Item From Wishlist
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromWishlist: (item) => dispatch(removeItemFromWishlist(item)),
  moveItemWishlistToCart: (item) => dispatch(moveItemWishlistToCart(item)),
});

export default connect(null, mapDispatchToProps)(WishlistItem);
