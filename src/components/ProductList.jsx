import React from "react";
import Product from "./Product";
import "./ProductList.css";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="productList">
      <div className="productList-text">
        <h1 className="productList-title">Create & Inspire</h1>
        <p className="productList-desc">
          These are some of the websites I have built using HTML, CSS and ReactJS. I try to make
          them as responsive as possible. Feel free to check it by clicking on the image below!
        </p>
      </div>
      <div className="productList-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
