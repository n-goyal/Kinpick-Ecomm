import React, { Component } from "react";
import { MenuItem } from "../menu-item/menu-item.component";
import "./directory.styles.scss";

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "women",
          imageUrl:
            "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/ladies_s03/april_2021/1163/1163-1x1-lemlem-x-hm.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
          id: 1,
          linkUrl: "shop/women",
        },
        {
          title: "Graphic Tees",
          imageUrl:
            "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/men_s03/february_2021/3063j/3063J-1x1-mens-graphic-tees.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
          id: 2,
          linkUrl: "shop/tees",
        },
        {
          title: "sleeps & cuddles",
          imageUrl:
            "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/kids_s03/march_2021/4143-parenthood/4143j-cs/4143J-1x1-dressed-for-sleep-and-cuddles.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
          id: 3,
          linkUrl: "shop/payjamas",
        },
        {
          title: "crop tops",
          imageUrl:
            "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/divided_s03/april_2021/5103d/5103D-1x1-crop-tops.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
          id: 4,
          linkUrl: "shop/tops",
        },
        {
          title: "mens",
          imageUrl:
            "//lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1a%2F0b%2F1a0b0d30da947a516154db8f9c8df0f76258e461.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherItemProps }) => (
          <MenuItem key={id} {...otherItemProps} />
        ))}
      </div>
    );
  }
}
