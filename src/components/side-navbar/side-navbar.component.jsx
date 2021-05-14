import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

export const SideNavigation = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection, title, items);
  const { url } = useRouteMatch();

  return (
    <div key={title}>
      <div className="side-nav">
        <h2 className="catelogue-title">{title}</h2>
        {items.map(({ categoryName, categoryItems }) => (
          <div>
            {console.log(categoryName, categoryItems)}
            <h3>{categoryName}</h3>
            <ul>
              {categoryItems.map(({ slug, name, routeName }) => (
                <li key={slug}>
                  <Link to={`${url}${routeName}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNavigation;
