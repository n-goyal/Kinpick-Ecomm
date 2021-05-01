import React from "react";
import { Banner } from "../../components/banner/banner.component";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

export const Homepage = () => {
  const bannerDetails = {
    headline: "Get Comfy : Buy 3 basics & get 20% off",
    preamble:
      "Valid on hm.com until 5th May 2021 23:59pm or while stock lasts.",
    headlineColor: "white",
    bgColor: "#bdb2ff",
    links: [
      {
        label: "Women",
        color: "white",
        bgColor: "black",
        size: "small",
        routeName: "/somewhere/to/go",
      },
      {
        label: "Men",
        color: "white",
        bgColor: "black",
        size: "small",
        routeName: "/somewhere/to/go",
      },
      {
        label: "Kids",
        color: "white",
        bgColor: "black",
        size: "small",
        routeName: "/somewhere/to/go",
      },
    ],
  };
  return (
    <div className="homepage">
      <Banner {...bannerDetails} />
      <Directory />
    </div>
  );
};
