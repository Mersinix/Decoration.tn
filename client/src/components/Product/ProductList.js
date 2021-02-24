import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../js/actions/productActions";
import { Carddesign } from "../xdesign/Carddesign";
import "../../App.css";

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const prod = useSelector((state) => state.productReducer.products.products);
  return (
    <div
      className="apphome"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: 40,
        maxWidth: "100%",
        height: 1800,
        alignItems: "center",
      }}
    >
      
      
      {prod &&
        prod.map((products) => (
          <Carddesign key={products._id} products={products} />
        ))}
        
    </div>
  );
};
export default ProductList;
//
