import axios from 'axios'
import { GET_SHOPS} from '../constants/ShopActionsTypes'

export const getShopProducts = () => (dispatch) => {
  axios
    .get('/api/ShopCard/')
    .then((res) => dispatch({ type: GET_SHOPS, payload: res.data }))
    .catch((err) => console.log(err))
}


export const addShopProducts = (Product) => (dispatch) => {
  axios
    .post('/api/ShopCard/add', Product)
    .then((res) => dispatch(getShopProducts()))
    .catch((err) => console.log(err))
}

// export const upShopProducts = (idProduct,number) => (dispatch) => {
//     axios
//       .put(`/api/ShopCard/incCount/${idProduct}`,number)
//     //   .then((res) => dispatch({ type: INCREMENT, payload: res.data }))
//       .then((res) => dispatch(getShopProducts()))
//       .catch((err) => console.log(err))
//   }

// export const incShopProducts = (idProduct,inccount) => (dispatch) => {
//     axios
//       .put(`/api/ShopCard/incCount/${idProduct}`,inccount)
//     //   .then((res) => dispatch({ type: INCREMENT, payload: res.data }))
//       .then((res) => dispatch(getShopProducts()))
//       .catch((err) => console.log(err))
//   }
  
//   export const decShopProducts = (idProduct,deccount) => (dispatch) => {
//     axios
//       .put(`/api/ShopCard/decCount/${idProduct}`,deccount)
//     //   .then((res) => dispatch({ type: DECREMENT, payload: res.data }))
//       .then((res) => dispatch(getShopProducts()))
//       .catch((err) => console.log(err))
//   }

export const deleteShopProducts = (idProduct) => (dispatch) => {
  axios
    .delete(`/api/ShopCard/delete/${idProduct}`)
    .then((res) => dispatch(getShopProducts()))
    .catch((err) => console.log(err))
}


export const deleteAllShopProducts = () => (dispatch) => {
    axios
      .delete(`/api/ShopCard/deleteAll`)
      .then((res) => dispatch(getShopProducts()))
      .catch((err) => console.log(err))
  }
