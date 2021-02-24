import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Paper from "@material-ui/core/Paper";
import {CardHomeStore} from './CardHomeStore'
import { getMyProducts } from "../../js/actions/productActions";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "#FFC478",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    color: "#005B9A",
    borderRadius: 5,
    background: "#FFC478",
    marginTop: 50,
  },
  button2: {
    color: "#005B9A",
    borderRadius: 5,
    background: "#FFC478",
    marginBottom: "20",
  },
  phrase: {
    padding: "10",
  },
  Gridbg: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8ES3)",
  },
  contourimg: {
    Width: "50",
    height: "40",
    display: "block",
  },
  image: {
    margin: 20,
    display: "block",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 10,
    width: 350,
    height: 400,
    marginTop: 120,
  },
  paper2: {
    width: "auto",
    height: 2000,
    background: "#99bbad",
    display:"flex",
    flexWrap:"wrap"
  },
  image: {
    width: 400,
    height: 400,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ stores }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyProducts());
  }, []);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const prod = useSelector((state) => state.productReducer.products.products);
  
  

  


  return (
    <div>
      <Button
        className={classes.button}
        onClick={handleClickOpen}
        variant="outlined"
        startIcon={<VisibilityIcon />}
      >
        Visit Store
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Presentation of the Store
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.paper2}>
        {prod&&
        prod.filter((x)=> x.store === stores.store_Name)
        .map((products) => (
          <CardHomeStore key={products._id} products={products} />
        ))}
          {/*================================================= mapping prod */}
          
        </Paper>
      </Dialog>
    </div>
  );
}
