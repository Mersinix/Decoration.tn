import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import { Grid, MenuItem, Paper } from "@material-ui/core";
import { getCategorys } from "../../js/actions/categoryActions";
import { addStores } from "../../js/actions/storeActions";
import AddBoxIcon from "@material-ui/icons/AddBox";

import { EditProducts } from "../../js/actions/productActions";

import EditIcon from "@material-ui/icons/Edit";
import LineWeightIcon from "@material-ui/icons/LineWeight";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    background: "#FFC478",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 10,
    margin: 15,
    borderColor: "red",
    borderWidth: 2,
  },
  paper: {
    width: 1000,
    height: 315,
    background: "white",
    marginLeft: 165,
    border: "0",
  },
  paper2: {
    background: "#99bbad",
    width: "auto",
    height: 800,
  },
  button: {
    color: "#005B9A",
    borderRadius: 5,
    background: "#FFC478",
  },
  button2: {
    marginTop: 30,
    color: "#005B9A",
    borderRadius: 5,
    background: "#FFC478",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditDesignModal({ products }) {
  // const [dropdownOpen, setDropdownOpen] = useState(false)

    const [title, setTitle] = useState(products.title)
    const [price, setPrice] = useState(products.price)
    const [description, setDescription] = useState(products.description)
    const [store, setStore] = useState(products.store)
    const [images, setImages] = useState(products.images)
    const [category, setCategory] = useState(products.category)

  const dispatch = useDispatch();
    // const toggle = () => setDropdownOpen((prevState) => !prevState);
    // const categorys = useSelector((state) => state.categoryReducer.categorys);
    // const getCat = () => dispatch(getCategorys());
    // useEffect(() => {
    //   getCat();
    // }, []);

  const Edit = () => {
    dispatch(
  EditProducts(products._id, {
      title,
      price,
      description,
      store,
      images,
      category,
    }),
    );
    setOpen(false);
    setTitle(products.title)
  setPrice(products.price)
  setDescription(products.description)
  setStore(products.store)
  setImages(products.images)
  setCategory(products.category)
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<LineWeightIcon />}
        onClick={handleClickOpen}
        className={classes.button}
      >
        Edit
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
              Edit Product
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.paper2}>
          <Paper className={classes.paper}>
            <form className={classes.form} noValidate autoComplete="off">
              <Grid container justify="space-around">
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  className={classes.input}
                  id="outlined-basic"
                  label="Name of product"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  className={classes.input}
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  className={classes.input}
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  color="secondary"
                />
              </Grid>
              <Divider />
              <Grid container justify="space-around">
                <TextField
                    onChange={(e) => setStore(e.target.value)}
                    value={store}
                  className={classes.input}
                  id="outlined-basic"
                  label="Store"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                    onChange={(e) => setImages(e.target.value)}
                    value={images}
                  className={classes.input}
                  id="outlined-basic"
                  label="Image"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  className={classes.input}
                  id="outlined-basic"
                  label="Category"
                  variant="outlined"
                  color="secondary"
                />
              </Grid>
              <Divider />
              <Grid container justify="space-evenly">
                <Button
                  onClick={Edit}
                  className={classes.button2}
                  variant="outlined"
                  startIcon={<EditIcon />}
                >
                  Finish
                </Button>
              </Grid>
              <Grid container alignItems="center"></Grid>
            </form>
          </Paper>
        </Paper>
      </Dialog>
    </div>
  );
}
