import React from "react";
import "./form-input.styles.scss";

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="input-wrapper">
      <label className="label">{label}</label>
      <input className="form-input" onChange={handleChange} {...otherProps} />
    </div>
  );
};
