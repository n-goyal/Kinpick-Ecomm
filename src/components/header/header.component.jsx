import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

export const Header = ({ user }) => {
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
        <li className="menu__item favorites-icon">Favourites</li>
        <li className="menu__item bag-icon">Shopping Bag(0)</li>
      </ul>
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
