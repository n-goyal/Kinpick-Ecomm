import React from "react";
import "./custom-button.styles.scss";

export const CustomButton = ({
  children,
  bgColor,
  color,
  size,
  ...otherProps
}) => {
  return (
    <button
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
      }}
      className="button large"
      {...otherProps}
    >
      {children}
    </button>
  );
};
