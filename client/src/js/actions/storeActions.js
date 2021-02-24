import axios from 'axios'
import {
  // GET_STORES,
  STORE_LOADING,
  STORE_ERRORS,
  LOGOUT_STORE,
  LOGIN_STORE,
  GET_MYSTORES,
  REGISTER_STORE,
} from '../constants/StoreActionsTypes'

//Set the user loading
const storeLoading = () => (dispatch) => {
  dispatch({
    type: STORE_LOADING,
  })
}
// export const loginStores = (formData) => (dispatch) => {
//   axios
//     .put(`/api/stores/login`, formData)
//     .then((res) => dispatch(getStores()))
//     .catch((err) => console.log(err))
// }

// Login Store
export const loginStores = (formData) => async (dispatch) => {
  dispatch(storeLoading())

  try {
    const res = await axios.post('/api/stores/login', formData).then((res) =>
      dispatch({
        type: LOGIN_STORE,
        payload: res.data, // { msg: 'Logged in with success', Store, tokenStore }
      })
      // .then((res) => dispatch(getStores())),
    )
  } catch (error) {
    console.dir(error)

    const { errors, msg } = error.response.data

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg))
    }
    console.log(errors)
    if (msg) {
      alert(msg)
    }

    dispatch({
      type: STORE_ERRORS,
    })
  }
}

// export const getStores = () => async (dispatch) => {
//   dispatch(userLoading())
//   axios
//     .get('/api/stores/store')
//     .then((res) => dispatch({ type: GET_STORES, payload: res.data }))
//     .catch((err) => console.log(err))
// }
// Get auth store
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

export const getOneStores = () => async (dispatch) => {
  dispatch(storeLoading())

  try {
    //headers
    const config = {
      headers: {
        'x-auth-token-Store': localStorage.getItem('tokenStore'),
      },
    }
    const res = await axios.get('/api/stores/mystore', config)
    dispatch({
      type: GET_MYSTORES,
      payload: res.data, // { store:req.store }
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: STORE_ERRORS,
    })
  }
}



// export const getOneStores = (nameStore) => async (dispatch) => {
//   dispatch(storeLoading())
//   axios
//     .get('/api/stores/mystore', nameStore)
//     .then((res) => dispatch(getOneStores()))
//     .catch((err) => console.log(err))
// }

// export const addStores = (newStore) => async (dispatch) => {
//   dispatch(storeLoading())
//   axios
//     .post('/api/stores/add', newStore)
//     .then((res) => dispatch(getStores()))
//     .catch((err) => console.log(err))
// }

// Register store
export const addStores = (newStore) => async (dispatch) => {
  dispatch(storeLoading())
  try {
    const res = await axios.post('/api/stores/add', newStore)
    dispatch({
      type: REGISTER_STORE,
      payload: res.data, // { msg: 'USer registred with success', Store, tokenStore } 
    })
  } catch (error) {
    console.dir(error)

    const { errors, msg } = error.response.data

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg))
    }
    console.log(errors)
    if (msg) {
      alert(msg)
    }

    dispatch({
      type: STORE_ERRORS,
    })
  }
}


export const EditStores = (idStore, editedstore) => async (dispatch) => {
  dispatch(storeLoading())
  axios
    .put(`/api/stores/edit/${idStore}`, editedstore)
    .then((res) => dispatch(getOneStores()))
    .catch((err) => console.log(err))
}

// Logout Store
export const logoutStore = () => (dispatch) => {
  dispatch({
    type: LOGOUT_STORE,
  })
}
