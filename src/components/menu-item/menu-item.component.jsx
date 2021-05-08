import React from "react";
import LinkButton from "../link-button/link-button.component";
import "./menu-item.styles.scss";

export const MenuItem = ({ name, imageUrl, routeName }) => {
  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <div className={`menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{name.toProperCase()}</h1>
        <LinkButton
          routeName={routeName}
          buttonColor="black"
          buttonLabel="Shop Now"
          labelColor="white"
          size="medium"
        />
      </div>
    </div>
  );
};
