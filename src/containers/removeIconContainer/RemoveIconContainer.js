import RemoveIcon from "../../components/remove-icon/remove-icon.component";

import { connect } from "react-redux";
import { removeCartItem } from "../../redux/cart/cart.actions";
import { removeItemFromWishlist } from "../../redux/wishlist/wishlist.actions";

const RemoveIconContainer = ({
  item,
  itemType,
  removeCartItem,
  removeWishlistItem,
}) => {
  const removeItem =
    itemType === "wishlist" ? removeWishlistItem : removeCartItem;
  return <RemoveIcon item={item} removeItem={removeItem} />;
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  removeWishlistItem: (item) => dispatch(removeItemFromWishlist(item)),
});

export default connect(null, mapDispatchToProps)(RemoveIconContainer);
