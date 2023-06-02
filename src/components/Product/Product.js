import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} id={product.subCategoryTitle}>
      <div className="product_container_category_title">
        {product.subCategoryTitle}
      </div>
      <div className="product_container">
        <div
          className="product_container_image"
          style={{ backgroundImage: `url(${product?.image})` }}
        ></div>

        <div className="product_container_right">
          <div className="product_container_right_title">{product.title}</div>
          <div className="product_container_right_others">
            <div className="product_container_right_calories">
              {product.calories}
            </div>
            <div className="product_container_right_price">{product.price}</div>
          </div>
          <div className="product_container_right_des">
            {product.description}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
