import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

export const MenuItem = withRouter(
  ({ name, imageUrl, size, history, match, routeName }) => {
    return (
      <div
        className={`menu-item ${size}`}
        onClick={() => history.push(`${match.url}${routeName}`)}
      >
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="content">
          <h1 className="title">{name.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
);
