import React from "react";
import { withRouter } from "react-router";
import "./link-button.styles.scss";

export const LinkButton = withRouter(
  ({
    routeName,
    buttonLabel,
    size,
    buttonColor,
    history,
    match,
    labelColor,
  }) => {
    return (
      <div onClick={() => history.push(`${match.url}${routeName}`)}>
        <span
          className={`subtitle ${size}`}
          style={{ backgroundColor: `${buttonColor}`, color: `${labelColor}` }}
        >
          {buttonLabel.toUpperCase()}
        </span>
      </div>
    );
  }
);
