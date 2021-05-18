import React from "react";
import "./banner.styles.scss";
import LinkButton from "../link-button/link-button.component";

export const Banner = ({
  headline,
  preamble,
  links,
  headlineColor,
  bgColor,
  bgImage,
}) => {
  bgImage = bgImage ? `${bgImage}` : null;
  // bgColor = bgImage ? null : `${bgImage}`;

  return (
    <section
      style={{ backgroundImage: `${bgImage}`, backgroundColor: `${bgColor}` }}
      className="banner"
    >
      <div className="banner-container">
        <article className="banner-content">
          <h2 style={{ color: `${headlineColor}` }}>{headline}</h2>
          <p style={{ color: `${headlineColor}` }}>{preamble}</p>
        </article>
        <div className="links-container">
          {links.map((link) => {
            return (
              <div className="link">
                <LinkButton
                  routeName={link.routeName}
                  buttonColor={link.bgColor}
                  buttonLabel={link.label}
                  labelColor={link.color}
                  size={link.size}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
