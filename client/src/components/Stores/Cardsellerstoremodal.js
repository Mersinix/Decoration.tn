import React from "react";
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
import { Box, Grid } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";
import { addShopProducts } from "../../js/actions/shopActions";

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
    margin: "auto",
    width: 900,
    height: 430,
    marginTop: 120,
  },
  paper2: {
    width: "auto",
    height: 900,
    background: "#99bbad",
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

export default function FullScreenDialog({ products }) {
  const product_id =products.product_id;
  const title =products.title;
  const price = products.price;
  const description =products.description;
  const images  = products.images;
  const dispatch = useDispatch()
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const add =()=>{
    dispatch(
      addShopProducts({product_id,
        title,
        price,
        description,
        images,
        
      }),
    )
  }

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={classes.button}
        startIcon={<VisibilityIcon />}
      >
        View
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
              Presentation of the Product
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <Paper className={classes.paper2}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={products.images}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Box
                      gutterBottom
                      variant="subtitle1"
                      className={classes.phrase}
                      fontWeight="fontWeightBold"
                      fontSize="h4.fontSize"
                    >
                      {products.title.toUpperCase()}
                    </Box>
                    <Typography variant="body2" gutterBottom>
                      {products.description}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      className={classes.button2}
                      variant="outlined"
                      startIcon={<ShoppingCartIcon />}
                      onClick={add}
                    >
                      Add to Cart
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <Box
                    variant="subtitle1"
                    fontWeight="fontWeightBold"
                    fontSize="h5.fontSize"
                  >
                    {products.price}$
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Dialog>
    </div>
  );
}
