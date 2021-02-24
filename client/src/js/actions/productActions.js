import axios from 'axios'
import { GET_PRODUCTS,GET_PRODUCT ,SHOP_PRODUCT} from '../constants/ProductActionsTypes'

export const getProducts = () => (dispatch) => {
  axios
    .get('/api/products/')
    .then((res) => dispatch({ type: GET_PRODUCTS, payload: res.data }))
    .catch((err) => console.log(err))
}

export const getMyProducts = (stor) => (dispatch) => {
  axios
    .get('/api/products/myprod',stor)
    .then((res) => dispatch({ type: GET_PRODUCT, payload: res.data }))
    .catch((err) => console.log(err))
}

export const getShopProducts = (idprod) => (dispatch) => {
  axios
    .get(`/api/products/${idprod}`)
    .then((res) => dispatch({ type: SHOP_PRODUCT, payload: res.data }))
    .catch((err) => console.log(err))
}

export const addProducts = (newProduct) => (dispatch) => {
  axios
    .post('/api/products/add', newProduct)
    .then((res) => dispatch(getProducts()))
    .catch((err) => console.log(err))
}

export const deleteProducts = (idProduct) => (dispatch) => {
  axios
    .delete(`/api/products/delete/${idProduct}`)
    .then((res) => dispatch(getProducts()))
    .catch((err) => console.log(err))
}

export const EditProducts = (idProduct, editedproduct) => (dispatch) => {
  axios
    .put(`/api/products/edit/${idProduct}`, editedproduct)
    .then((res) => dispatch(getProducts()))
    .catch((err) => console.log(err))
}
