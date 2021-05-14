// contains catelogue of product for a category
import React from "react";
import { useParams } from "react-router-dom";
import data from "./tempData.json";

const Catelogue = () => {
  const { section, category } = useParams();
  console.log(section, category);
  return (
    <div>
      {section || category ? (
        <p>
          Looking for product catelogue of <strong>{category}</strong> in{" "}
          <strong>{section}</strong>
        </p>
      ) : (
        <p>Default Catelogue View</p>
      )}
    </div>
  );
};

export default Catelogue;
