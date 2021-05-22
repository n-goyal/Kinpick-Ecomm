import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import "./product-card.styles.scss";
import { CustomButton } from "../custom-button/custom-button.component";

const ProductCard = ({ item, addItem }) => {
  return (
    <div class="product">
      <div className="image-container">
        <Link to="/:productName">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=source[/22/8a/228a6bcb3c2ec2d28d75799ef0163949e889cdb3.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&amp;call=url[file:/product/main]"
            alt={item.productName}
          />
        </Link>
      </div>
      <div className="item-details">
        <div className="item-price">
          <div className="item-heading">{item.productName}</div>
          <div>
            Rs.<span>{item.price}</span>
          </div>
        </div>
        <div className="icon-favorites favorite"></div>
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
});

export default connect(null, mapDispatchToProps)(ProductCard);
