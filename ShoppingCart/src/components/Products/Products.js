import React from "react";
import styles from "./Products.module.css";
import { connect } from "react-redux";
import Product from "./Product/Product";

const Products = ({products}) => {
  return (
    <div className="products">
      {products.map((product)=>(
        <Product key={product.id} product={product}/>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    products : state.products
  }
}

export default connect(mapStateToProps)(Products)