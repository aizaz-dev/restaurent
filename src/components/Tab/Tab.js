import React from "react";

const Tab = ({ product }) => {
  return (
    <div className="categories">
      <div className="category">
        {/* <img className="category_img" src={product.p} alt="" /> */}
        <p className="category_title">{product.subcategory}</p>
      </div>
    </div>
  );
};

export default Tab;
