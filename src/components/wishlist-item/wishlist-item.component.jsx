import React from "react";
import ProductCard from "../product-card/product-card.component";

import "./wishlist-item.style.scss";

const WishlistItem = ({ item }) => {
  return (
    <div className="item-sizing">
      <ProductCard item={item} />
    </div>
  );
};

export default WishlistItem;
