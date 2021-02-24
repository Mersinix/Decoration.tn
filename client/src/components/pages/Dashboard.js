import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getOneStores } from '../../js/actions/storeActions';
import  Loading  from '../utils/loading/Loading';
import './Dashboard.css'


import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import DeleteIcon from "@material-ui/icons/Delete";


import { deleteStores } from "../../js/actions/storeActions";
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 450,
    height: 400,
    
  },
  paper: {
    width: 450,
    height: 400,
    marginLeft:550,
    
    
  },
  button: {
    color: "#005B9A",
    borderRadius: 5,
    background: "#FFC478",
    marginTop: 50,
  },
});

const Dashboard = () => {

  const dispatch = useDispatch();
    // const del = () => {
    //   dispatch(deleteStores(stores._id));//
    // };
  const classes = useStyles();
  
  // const getStor = () => dispatch(getOneStores())
  // useEffect(() => {
  //   getStor()
  // }, [])

  const user = useSelector((state) => state.authReducer.user);
  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Loading
          
        />
      </div>
    );
  }

  return (
    <div className="appDash">
      <Paper className={classes.paper}>
     <Card className={classes.root} style={{ background: "white" }}>
      <CardMedia
        image={
          "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/56949304_10213343183126124_6395085619457949696_o.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_ohc=lFEOFuARDCIAX-kDj8W&_nc_ht=scontent.ftun4-1.fna&oh=f3432a5f96a31dc54a139a25c69da137&oe=6054FED2"
        }
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
                {user.name.toUpperCase()}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                {user.lastName}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container justify="space-around">
          <Grid item>
            <Button
            //   onClick={del}
              className={classes.button}
              variant="outlined"
              
            >
              Welcome
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
    </Paper>
    </div>
  );
};

export default Dashboard;








