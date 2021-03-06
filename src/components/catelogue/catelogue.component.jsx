// contains catelogue of product for a category
import React from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../banner/banner.component";
import ProductCard from "../product-card/product-card.component";
import "./catelogue.styles.scss";

const bannerDetails = {
  headline: "Checkout the classic go-to Jeans!",
  // preamble: "Valid on hm.com until 5th May 2021 23:59pm or while stock lasts.",
  headlineColor: "white",
  bgColor: "#bbf7df",
  bgImage:
    "url(https://images.unsplash.com/photo-1560851691-ebb64b584d3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1075&q=80)",
  links: [
    {
      label: "Shop Now",
      color: "black",
      bgColor: "white",
      size: "small",
      routeName: "/somewhere/to/go",
    },
  ],
};

// const item = {
//   productName: "White T-Shirt",
//   price: 399,
//   image1Url:
//     "https://lp2.hm.com/hmgoepprod?set=source[/22/8a/228a6bcb3c2ec2d28d75799ef0163949e889cdb3.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&amp;call=url[file:/product/main]",
//   id: 1,
// };

const Catelogue = () => {
  const { section, category } = useParams();
  console.log(section, category);
  let data;
  data = category ? require(`./../../assests/data/men/${category}.json`) : null;

  console.log(data);
  return (
    <div className="catalogue">
      {data ? (
        <>
          <Banner {...bannerDetails} />
          <div className="products-wrapper">
            {data.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </>
      ) : (
        <></>
      )}
      {/* {section || category ? (
        <></>
      ) : (
        <p>
          Looking for product catelogue of <strong>{category}</strong> in{" "}
          <strong>{section}</strong>
        </p>
      )} */}
    </div>
  );
};

export default Catelogue;
