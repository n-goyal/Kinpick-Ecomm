import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { auth } from "../../firebase/firebase.utils";

import ShoppingCart from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ user, hidden }) => {
  console.log(user);
  return (
    <div className="header-wrapper">
      <ul className="menu__session">
        <li className="menu__item sign-in-icon">
          {user ? (
            <Link
              to="/"
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign Out
            </Link>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </li>
        <li className="menu__item favorites-icon">
          <Link to="/wishlist">Favourites</Link>
        </li>
        <li className="menu__item bag-icon">
          <ShoppingCart />
        </li>
      </ul>
      {hidden ? null : <CartDropdown />}
      <div className="header">
        <div>
          <Link to="/" className="menu__hm"></Link>
        </div>
        <nav className="menu__primary">
          <ul>
            <li className="menu__super">
              <Link className="menu__super-link" to="/shop/en_in/women">
                <span>Women</span>
              </Link>
            </li>
            <li className="menu__super">
              <Link className="menu__super-link" to="/shop/en_in/men">
                <span>Men</span>
              </Link>
            </li>
            <li className="menu__super">
              <Link className="menu__super-link" to="/shop/en_in/kids">
                <span>Kids</span>
              </Link>
            </li>
            <li className="menu__super">
              <Link className="menu__super-link" to="/shop/en_in/sale">
                <span>Sale</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
