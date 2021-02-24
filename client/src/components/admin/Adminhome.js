import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStores } from "../.././js/actions/AllstoreActions";
import { getProducts } from "../.././js/actions/productActions";
import { getAllUser } from "../.././js/actions/authAdminAction";

import { ProductDesignCardadmin } from "./ProductDesignCardadmin";

import { UserDesignCard } from "./UserDesignCard";
import { StoreDesignCardadmin } from "./StoreDesignCardadmin";
import "./admin.css";
import { Divider } from "@material-ui/core";

const AdminHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStores());
  }, []);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const stor = useSelector((state) => state.AllstoreReducer.stores);
  const prod = useSelector((state) => state.productReducer.products.products);
  const usr = useSelector((state) => state.authAdminReducer.alluser.alluser);
  return (
    <div className="apphome" style={{ height: 5500 }}>
     
      <h1 className="title">All products:</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: 40,
          maxWidth: "100%",
          height: 2200,
          alignItems: "center",
        }}
      >
        {prod &&
          prod.map((products) => (
            <ProductDesignCardadmin key={products._id} products={products} />
          ))}
      </div>
      <Divider/>
      <h1 className="title">All Stores:</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: 40,
          maxWidth: "100%",
          height: 800,
          alignItems: "center",
        }}
      >
        {stor &&
          stor.map((stores) => (
            <StoreDesignCardadmin key={stores._id} stores={stores} />
          ))}
      </div>
      <Divider/>
      <h1 className="title">All Users:</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingTop:20,
          paddingRight:40,
          paddingLeft:40,
          paddingBottom:30,
          maxWidth: "100%",
          height: 1400,
          alignItems: "center",
          marginTop: 200,
        }}
      >
        {usr &&
          usr.map((alluser) => (
            <UserDesignCard key={alluser._id} alluser={alluser} />
          ))}
      </div>
    </div>
  );
};
export default AdminHome;
