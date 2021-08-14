import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import WishlistItem from "../../components/wishlist-item/wishlist-item.component";
// import { CustomButton } from "../../components/custom-button/custom-button.component";

import "./wishlist.style.scss";
import {
  selectWishlistItems,
  selectWishlistItemsCount,
} from "../../redux/wishlist/wishlist.selectors";

const Wishlist = ({ wishlistItems, wishlistItemsCount, history }) => {
  console.log(wishlistItemsCount);
  console.log(wishlistItems);

  return (
    <div className="item-container">
      {wishlistItemsCount ? (
        wishlistItems.map((item) => <WishlistItem item={item} key={item.id} />)
      ) : (
        <div className="empty-text">
          <span>Your wishlist is empty😕!</span>
          <Link className="link" to="/shop/en_in/men">
            Add items to your wishlist, Now!
          </Link>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  wishlistItems: selectWishlistItems,
  wishlistItemsCount: selectWishlistItemsCount,
});

export default withRouter(connect(mapStateToProps)(Wishlist));
