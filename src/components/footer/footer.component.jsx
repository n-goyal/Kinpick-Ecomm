import React from "react";
import { Link } from 'react-router-dom';

import "./footer.styles.scss";

function Footer() {
  return <footer className="footer-global">
      <div className="layout">
          <div className="footer-content footer-menu">
            <div className="list">
                <div className="item">
                    <Link to="/en_in/women">Women</Link>
                </div>
                <div className="item">
                    <Link to="/en_in/men">Men</Link>
                </div>
                <div className="item">
                    <Link to="/en_in/kids">Kids</Link>
                </div>
            </div>
          </div>
      </div>
  </footer>;
}

export default Footer;
