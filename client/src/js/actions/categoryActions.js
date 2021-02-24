import axios from 'axios'
import { GET_CATEGORY } from '../constants/CategoryActionsTypes'

export const getCategorys = () => (dispatch) => {
  axios
    .get('/api/categorys/')
    .then((res) => dispatch({ type: GET_CATEGORY, payload: res.data }))
    .catch((err) => console.log(err))
}

export const addCategorys = (newProduct) => (dispatch) => {
  axios
    .post('/api/categorys/add', newProduct)
    .then((res) => dispatch(getCategorys()))
    .catch((err) => console.log(err))
}

export const deleteCategorys = (idProduct) => (dispatch) => {
  axios
    .delete(`/api/categorys/delete/${idProduct}`)
    .then((res) => dispatch(getCategorys()))
    .catch((err) => console.log(err))
}

export const EditCategorys = (idCategory, editedCategory) => (dispatch) => {
  axios
    .put(`/api/categorys/edit/${idCategory}`, editedCategory)
    .then((res) => dispatch(getCategorys()))
    .catch((err) => console.log(err))
}
