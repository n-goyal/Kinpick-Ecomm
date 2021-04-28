import React, { Component } from "react";
import collections from "./shop.data";
import Preview from "../../components/collection-preview/preview.component";

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collections: collections,
    };
  }
  render() {
    return (
      <div className="shop-page">
        {collections.map(({ id, ...restCollectionProps }) => (
          <Preview key={id} {...restCollectionProps} />
        ))}
      </div>
    );
  }
}
