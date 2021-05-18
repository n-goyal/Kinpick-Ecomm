import React from "react";
import { Link } from "react-router-dom";
import "./product-card.styles.scss";

export const ProductCard = ({ productName }) => {
  return (
    <div class="product">
      <div className="image-container">
        <Link to="/:productName">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=source[/22/8a/228a6bcb3c2ec2d28d75799ef0163949e889cdb3.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&amp;call=url[file:/product/main]"
            alt={productName}
          />
        </Link>
      </div>
      <div className="item-details">
        <div>
          <div className="item-heading">{productName}</div>
          <div className="item-price">Rs.399</div>
        </div>
        <div className="icon-favorites favorite"></div>
      </div>
    </div>
  );
};
