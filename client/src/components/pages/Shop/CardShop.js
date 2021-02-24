import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AddBoxIcon from '@material-ui/icons/AddBox'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import { useDispatch, useSelector } from 'react-redux'
import { deleteShopProducts } from '../../../js/actions/shopActions'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

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

export const CardShop = ({ products }) => {
  const dispatch = useDispatch()
  const prod = useSelector((state) => state.shopReducer.shops.shops)
  const [count, setCount] = useState(products.count)

  // const inc = (id) => {
  //   prod.forEach(item=> {
  //     if(item._id === id){
  //         item.count += 1
  //     }
  // })

  // }
  // const dec = (id) => {
  //   prod.forEach(item=> {
  //     if(item._id === id){
  //       item.count === 1 ? item.count = 1 : item.count -= 1
  //     }
  // })

  // }

  const del = () => {
    dispatch(deleteShopProducts(products._id))
  }

  const classes = useStyles()

  return (
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
              <AddBoxIcon />
            </Grid>
            <Grid item>{products.count}</Grid>
            <Grid item>
              <IndeterminateCheckBoxIcon />
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                startIcon={<DeleteForeverIcon />}
                onClick={del}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </CardActionArea>
    </Card>
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
{
  /* <Button
                  className={classes.button}
                  variant="outlined"
                  startIcon={<mdiNoteEdit />}
                >
                  Edit
                </Button> */
}

// export const CardsellerStore = ({ products, stores }) => {
//   const dispatch = useDispatch();
//   const del = () => {
//     dispatch(deleteProducts(products._id));
//   };
//   const classes = useStyles();

//   return (
//     <BrowserRouter>
//       <Card className={classes.root} style={{ background: "white" }}>
//         <CardMedia
//           image={products.images}
//           component="img"
//           alt="i1"
//           height="250"
//           src="images/i1jpg"
//         />
//         <CardActionArea>
//           <CardContent>
//             <Grid container justify="space-between">
//               <Grid item>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   {products.title}
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   {products.price}$
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Typography variant="body2" color="textSecondary" component="p">
//               {products.description}
//             </Typography>
//           </CardContent>

//           <CardActions>
//             <Grid container justify="space-around">
//               <Grid item>
//                 <Cardsellerstoremodal key={products._id} products={products} />
//               </Grid>
//               <Grid item>
//                 <EditdesignStore key={stores._id} stores={stores} />
//               </Grid>
//               <Grid item>
//                 <Button
//                   className={classes.button}
//                   variant="outlined"
//                   startIcon={<DeleteForeverIcon />}
//                   onClick={del}
//                 >
//                   Delete
//                 </Button>
//               </Grid>
//             </Grid>
//           </CardActions>
//         </CardActionArea>
//       </Card>
//     </BrowserRouter>
//   );
// };
