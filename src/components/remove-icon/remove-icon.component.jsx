import React from "react";
import "./remove-icon.styles.scss";

const RemoveIcon = ({ removeItem, item }) => {
  console.log("remove icon render");
  return (
    <div
      className="icon-container"
      onClick={() => {
        removeItem(item);
      }}
    >
      <svg
        className="icon"
        viewBox="0 0 14 16"
        xmlns="http://www.w3.org/2000/svg"
        // focusable="false"
      >
        <path
          fill-rule="evenodd"
          d="M14 4v1h-1v10.455c0 .3-.224.545-.5.545h-11c-.276 0-.5-.244-.5-.545V5H0V4h14zm-2 1v10H2V5h10zM9.5 0a.5.5 0 01.5.5V2h4v1H0V2h4V.5a.5.5 0 01.5-.5h5zM9 1H5v1h4V1zM5 8h1v4H5V8zm3 0h1v4H8V8z"
        ></path>
      </svg>
    </div>
  );
};

export default RemoveIcon;
