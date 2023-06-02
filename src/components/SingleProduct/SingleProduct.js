import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./SingleProduct.scss";
import { BsShareFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
const SingleProduct = ({productsArray}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const singleProduct = productsArray.find((product) => {
    return product.id == id;
  });
  if (singleProduct?.image) {
    const imageS = singleProduct.image;
    var newImage = imageS.slice(0, -20);
  }
console.log("single product",singleProduct);
console.log("signle product id:",id);
  return (
    <div className="singleProduct">
      <div
        className="singleProduct_header"
        style={{ backgroundImage:`url(${newImage})` }}
      >
        <div className="singleProduct_header_btns">
          <div className="singleProduct_header_btns_btn">
            <BsShareFill />
          </div>
          <div
            onClick={() => navigate(-1)}
            className="singleProduct_header_btns_btn"
          >
            <BsArrowRightShort size={25} />
          </div>
        </div>
      </div>
      <div className="singleProduct_body">
        <div className="singleProduct_body_title">{singleProduct.title}</div>
        <div className="singleProduct_body_calories">
          {singleProduct.calories}
        </div>
        <div className="singleProduct_body_description">
          {singleProduct.description}
        </div>
        <div className="singleProduct_body_price">{singleProduct.price}</div>
      </div> 
    </div>
  );
};

export default SingleProduct;
