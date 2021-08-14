import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

// import ProductCard from "../product-card/product-card.component";
import {
  moveItemWishlistToCart,
  removeItemFromWishlist,
} from "../../redux/wishlist/wishlist.actions";

import RemoveIconContainer from "../../containers/removeIconContainer/removeIcon";

import "./wishlist-item.style.scss";
import { CustomButton } from "../custom-button/custom-button.component";

const WishlistItem = ({ item, moveItemWishlistToCart,removeItemFromWishlist }) => {
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

        <div className="actions">
          <CustomButton
            onClick={() => {
              // add to cart
              moveItemWishlistToCart(item);
            }}
            bgColor="white"
            bdColor="black"
            color="black"
            className="button"
            onclick="document.body.style.backgroundColor = 'green';"
          >
            <div className="icon-text">
              <svg
                class="icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .1c2.9 0 4.9 1.4 4.9 3.8v.6h3.8v5.1c0 4.7 2.1 13.3.5 13.3-.7 0-5 1.1-9.2 1.1-4.6 0-9.2-1.1-9.2-1.1-1.5 0 .5-8.7.5-13.3V4.4h3.8v-.6c0-2.4 2-3.7 4.9-3.7zm7.6 5.4h-2.7v2.2h-1.1V5.5H8.2v2.2H7.1V5.5H4.4v4c0 1.3-.1 2.9-.4 5.3l-.1.9c-.4 3-.5 3.9-.5 5v1.2c.8.1 1.6.3 2.4.4 2.1.3 4.2.5 6.1.5h.5c1.6 0 3.3-.2 5.2-.5.2 0 2-.4 2.9-.5v-1.4c0-1-.2-1.9-.5-4.7 0-.3-.1-.6-.1-.9-.3-2.4-.4-4-.4-5.3v-4zM12 1.2c-2.3 0-3.8 1-3.8 2.6v.6h7.6v-.6c0-1.7-1.5-2.6-3.8-2.6z"></path>
              </svg>
              <span className="text">Add</span>
            </div>
          </CustomButton>

          <CustomButton
            onClick={() => {
              removeItemFromWishlist(item);
            }}
            bgColor="white"
            bdColor="black"
            color="black"
            className="button"
          >
            <div className="icon-text">
              <RemoveIconContainer item={item} itemType="wishlist" />
            </div>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  moveItemWishlistToCart: (item) => dispatch(moveItemWishlistToCart(item)),
  removeItemFromWishlist: (item) => dispatch(removeItemFromWishlist(item)),
});

export default connect(null, mapDispatchToProps)(WishlistItem);
