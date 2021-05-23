import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { productName, imageUrl, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img
        src="https://lp2.hm.com/hmgoepprod?set=source[/22/8a/228a6bcb3c2ec2d28d75799ef0163949e889cdb3.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&amp;call=url[file:/product/main]"
        alt=""
      />
      <div className="item-details">
        <span className="name">{productName} </span>
        <span className="name">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
