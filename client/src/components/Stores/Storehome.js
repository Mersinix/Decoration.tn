import React, { useEffect } from "react";
import "./StoreHome.css";
import { useDispatch, useSelector } from "react-redux";
import { CardsellerStore } from "./CardsellerStore";
import AddProductModal from "../Product/AddProductModal";
import EditdesignStore from "./EditdesignStore";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import { getMyProducts } from "../../js/actions/productActions";
import "../../App.css";
import  Loading  from '../utils/loading/Loading';

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    height: 60,
    margin: 10,
  },
  text: {
    marginTop: 15,
    paddingTop: 15,
    paddingLeft: 15
  },
});

function StoreHome() {

  const dispatch = useDispatch();
  const mystore = useSelector((state) => state.storeReducer.stor);
  // const store = useSelector((state) => state.storeReducer.stor.store_Name);
  // const storeName=useSelector((state) => state.AllstoreReducer.stores)
  const prod = useSelector((state) => state.productReducer.products.products);
  
  useEffect(() => {
    dispatch(getMyProducts());
  }, []);


  const classes = useStyles();
  
  if (!mystore) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Loading
          
        />
      </div>
    );
  }
  
  
  return (
    <div className="title">
      <h3>My Store: {mystore.store_Name} </h3>

      <div className="">
      <div
      className="apphome"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: 40,
        maxWidth: "100%",
        height: 1900,
        alignItems: "center",
      }}
    >
      
      
      {
      prod&&
        prod.filter((x)=> x.store === mystore.store_Name)
        .map((products) => (
          <CardsellerStore key={products._id} products={products} />
        ))
        
        }
        
    </div>
      </div>
      <div>
        <Paper className={classes.root}>
          <Typography variant="h6" className={classes.text}>
            Make a Product :
          </Typography>

          <AddProductModal />
        </Paper>
        <Paper  className={classes.root}> 
        <Typography variant="h6" className={classes.text}>
            Edit Store :
          </Typography>
          <EditdesignStore key={mystore._id} mystore={mystore}/>
        </Paper>
      </div>

      {/* <div>
        {" "}
        {prod &&
          prod.map((products) => (
            <CardsellerStore key={products._id} products={products} />
          ))}{" "}
      </div> */}
    </div>
  );
}

export default StoreHome;


  
  

  
 

  

  