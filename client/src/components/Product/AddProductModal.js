import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
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

import AddBoxIcon from "@material-ui/icons/AddBox";
import { addProducts } from "../../js/actions/productActions";
import { red } from "@material-ui/core/colors";

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
    height: 375,
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
    marginTop: 35,
  },
  button2: {
    color: "#005B9A",
    borderRadius: 5,
    background: "#FFC478",
    marginLeft: 180,
    marginTop: -60
  },
  text: {
    width: 250,
    color: red,
    marginTop: 25,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  // const [dropdownOpen, setDropdownOpen] = useState(false)
  const [product_id, setProduct_id] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [store, setStore] = useState("");
  const [images, setImages] = useState("");
  const [category, setCategory] = useState("Pic your Category");

  const dispatch = useDispatch();
  //   const toggle = () => setDropdownOpen((prevState) => !prevState);
  const categorys = useSelector((state) => state.categoryReducer.categorys);

  const getCat = () => dispatch(getCategorys());
  useEffect(() => {
    getCat();
  }, []);

  const add = () => {
    dispatch(
      addProducts({
        product_id,
        title,
        price,
        description,
        store,
        images,
        category,
      })
    );
    setOpen(false);
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
        className={classes.button2}
        variant="outlined"
        startIcon={<AddBoxIcon />}
        onClick={handleClickOpen}
      >
        Add Product
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
              Add Product
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
                  label="Product Name"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                  onChange={(e) => setProduct_id(e.target.value)}
                  value={product_id}
                  className={classes.input}
                  id="outlined-basic"
                  label="Product id"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className={classes.input}
                  id="outlined-basic"
                  label="Product price ($)"
                  variant="outlined"
                  color="secondary"
                />
              </Grid>
              <Divider />
              <Grid container justify="space-around">
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
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className={classes.input}
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  color="secondary"
                />
                <TextField
                  onChange={(e) => setStore(e.target.value)}
                  value={store}
                  className={classes.input}
                  id="outlined-basic"
                  label="Store"
                  variant="outlined"
                  color="secondary"
                />
              </Grid>
              <Divider />
              <Grid container justify="space-evenly">
                <TextField
                  className={classes.text}
                  select
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                >
                  {categorys &&
                    categorys.map((option) => (
                      <option
                        key={option.id}
                        value={option.name}
                        color="primary"
                      >
                        {option.name}
                      </option>
                    ))}
                </TextField>

                <Button
                  onClick={add}
                  className={classes.button}
                  variant="outlined"
                  startIcon={<AddBoxIcon />}
                >
                  Create it
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
