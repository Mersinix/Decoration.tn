import React, { useEffect } from "react";
import "./ShoppingCard.css";
import { useDispatch, useSelector } from "react-redux";
import { CardShop } from "./CardShop";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { deleteAllShopProducts } from "../../../js/actions/shopActions";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import  Loading  from '../../utils/loading/Loading';
import { getShopProducts } from "../../../js/actions/shopActions";

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

function ShoppingCard() {

  const dispatch = useDispatch();
//   const mystore = useSelector((state) => state.storeReducer.stor);
  // const store = useSelector((state) => state.storeReducer.stor.store_Name);
  // const storeName=useSelector((state) => state.AllstoreReducer.stores)
  const prod = useSelector((state) => state.shopReducer.shops.shops);
  const user=useSelector((state)=>state.authReducer.isAuth)
  useEffect(() => {
    dispatch(getShopProducts());
  }, []);

  const history = useHistory();
  
  const del = () => {
    
    if(user){
      dispatch(deleteAllShopProducts(prod))
      history.push('/')
      return alert('You Will Receive Your Products Today')
      
    } else {
      history.push('/')
      return alert('please sign in OR Register Before')
    }
    
    
  };
  const classes = useStyles();
  
  if (!prod) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Loading
          
        />
      </div>
    );
  }
  
  
  return (
    <div className="title">
      <h3>Hello Shop Card </h3>

      
      <div
      className="apphome"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: 40,
        maxWidth: "100%",
        height: 2000,
        alignItems: "center",
      }}
    >
      
      
      {prod&&
        prod.map((products) => (
          <CardShop key={products._id} products={products}  />
        ))}
        
    </div>
      
      <div>
      <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                startIcon={<LocalShippingIcon />}
                onClick={del}
              >
                Buy Products
              </Button>
            </Grid>
        <Paper className={classes.root}>
          <Typography variant="h6" className={classes.text}>
            Total Price : $ {prod&&
        prod.map((products) => (products.price*products.count)).reduce((a,b)=>a+b,0)
        }
          </Typography>
          
        </Paper>
        
      </div>

      
    </div>
  );
}

export default ShoppingCard;


  
  

  
 

  

  