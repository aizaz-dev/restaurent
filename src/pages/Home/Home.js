import React from "react";
import { Header } from "../../components/Header/Header";
import "./Home.scss";
import ProductsHeader from "../../components/ProductsHeader/ProductsHeader";
const Home = ({productsArray}) => {
  return (
    <div className="homeContainer">
      <Header productsArray={productsArray} />
      <ProductsHeader productsArray={productsArray} />
    </div>
  );
};

export default Home;
