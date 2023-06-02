import React from "react";
import "./SingleBigProduct.scss";
import { Link } from "react-router-dom";
const SingleBigProduct = ({ product }) => {
  if (product?.image) {
    const imageS = product.image;
    var newImage = imageS.slice(0, -20);
  }

  return (
    <Link className="products_list_big_single" to={`/products/${product.id}/`}>
     {product.image  && <img className="products_list_big_single_img" src={newImage} alt="" />}
      
      <div className="singleProduct_body">
        <div className="singleProduct_body_title">{product.title}</div>
        <div className="singleProduct_body_calories">{product.calories}</div>
        <div className="singleProduct_body_description">
          {product.description}
        </div>
        <div className="singleProduct_body_price">{product.price}</div>
      </div>
    </Link>
  );
};

export default SingleBigProduct;
