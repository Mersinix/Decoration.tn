import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import VisibilityIcon from '@material-ui/icons/Visibility'

import { useDispatch } from 'react-redux'
import { Route, Link, BrowserRouter } from 'react-router-dom'

import Modal from './Modal'
import { addShopProducts, getShopProducts } from '../../js/actions/shopActions'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 400,
    margin: 10,
  },
  button: {
    color: '#005B9A',
    borderRadius: 5,
    background: '#FFC478',
  },
})

export const Carddesign = ({ products }) => {
  // const [title, setTitle] = useState(products.title)
  // const [price, setPrice] = useState(products.price)
  // const [description, setDescription] = useState(products.description)
  // const [images, setImages] = useState(products.images)
  
  const product_id =products.product_id;
  const title =products.title;
  const price = products.price;
  const description =products.description;
  const images  = products.images;
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getShopProducts())
  }, [])

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
  const classes = useStyles()

  return (
    <BrowserRouter>
      <Card className={classes.root} style={{ background: 'white' }}>
        <CardMedia
          image={products.images}
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
                  {products.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                  {products.price}$
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="textSecondary" component="p">
              {products.description}
            </Typography>
          </CardContent>

          <CardActions>
            <Grid container justify="space-around">
              <Grid item>
                <Button
                  className={classes.button}
                  variant="outlined"
                  startIcon={<ShoppingCartIcon />}
                  onClick={add}
                >
                  Buy
                </Button>
              </Grid>
              <Grid item>
                <Modal key={products._id} products={products} />
              </Grid>
            </Grid>
          </CardActions>
        </CardActionArea>
      </Card>
    </BrowserRouter>
  )
}

{
  /* <Button
                className={classes.button}
                variant="outlined"
                startIcon={<VisibilityIcon />}
              >
                View product
              </Button> */
}
