import React from "react";
import "./custom-button.styles.scss";

export const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button
      style={{
        backgroundColor: `${otherProps.bgColor}`,
        borderColor: `${otherProps.bgColor}`,
        color: `${otherProps.color}`,
      }}
      className="button large"
      {...otherProps}
    >
      {children}
    </button>
  );
};
