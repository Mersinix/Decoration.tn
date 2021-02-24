import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import StoreModelcard from "./StoreModelcard";
import { Route, Link, BrowserRouter } from "react-router-dom";

// import Modal from "./Modal";

const useStyles = makeStyles({
  root: {
    width: 350,
    height: 400,
    margin: 10,
  },
  button: {
    color: "#005B9A",
    borderRadius: 5,
    background: "#FFC478",
    marginTop: 50,
  },
});

export const StoreDesignCard = ({ stores }) => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Card className={classes.root} style={{ background: "white" }}>
        <CardMedia
          image={stores.image}
          component="img"
          alt="i1"
          height="250"
          src="images/i1jpg"
        />
        <CardActionArea>
          <CardContent>
            <Grid container justify="space-between">
              <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                  {stores.store_Name.toUpperCase()}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                  {stores.seller}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="textSecondary" component="p">
              {stores.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container justify="space-around">
            <Grid item>
              <StoreModelcard key={stores._id} stores={stores} /> 
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </BrowserRouter>
  );
};
