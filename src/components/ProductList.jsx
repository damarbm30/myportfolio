import React from "react";
import Product from "./Product";
import "./ProductList.css";
import { products } from "../data";

const ProductList = () => {
  return (
    <div className="productList">
      <div className="productList-text">
        <h1 className="productList-title">Create & Inspire. It's Damar</h1>
        <p className="productList-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi est molestias
          exercitationem quaerat autem quia non in sit, ipsam tenetur.
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
