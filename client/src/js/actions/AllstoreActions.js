import axios from 'axios'
import {
  GET_STORES,
  STORE_LOADING,
 
} from '../constants/AllStoreActionsTypes'

//Set the user loading
const storeLoading = () => (dispatch) => {
  dispatch({
    type: STORE_LOADING,
  })
}

// export const deleteStores = (idStore) => async (dispatch) => {
//   dispatch(storeLoading())
//   axios
//     .delete(`/api/stores/delete/${idStore}`)
//     .then((res) => dispatch(getStores()))
//     .catch((err) => console.log(err))
// }


export const getStores = () => async (dispatch) => {
  dispatch(storeLoading())
  axios
    .get('/api/stores/store')
    .then((res) => dispatch({ type: GET_STORES, payload: res.data }))
    .catch((err) => console.log(err))
}
// // Get auth store
// export const getStores = () => async (dispatch) => {
//   dispatch(storeLoading())

//   try {
    
//     const res = await axios.get('/api/stores/store')
//     dispatch({
//       type: GET_STORES,
//       payload: res.data, // { msg: 'Stores getted', stores }
//     })
//   } catch (error) {
//     console.log(error)
//     dispatch({
//       type: STORE_ERRORS,
//     })
//   }
// }


