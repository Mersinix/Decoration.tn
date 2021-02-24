import axios from 'axios'
import {
  USER_LOADING,

  AUTH_ERRORS,
  GET_ALL_USER
} from '../constants/adminActionsTypes'

//Set the user loading
const userLoading = () => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  })
}

// // Register USer
// export const registerUser = (formData) => async (dispatch) => {
//   dispatch(userLoading())
//   try {
//     const res = await axios.post('/api/auth/register', formData)
//     dispatch({
//       type: REGISTER_USER,
//       payload: res.data, // { msg: 'USer registred with success', user, token } 
//     })
//   } catch (error) {
//     console.dir(error)

//     const { errors, msg } = error.response.data

//     if (Array.isArray(errors)) {
//       errors.forEach((err) => alert(err.msg))
//     }
//     console.log(errors)
//     if (msg) {
//       alert(msg)
//     }

//     dispatch({
//       type: AUTH_ERRORS,
//     })
//   }
// }

// // Login User
// export const loginUser = (formData) => async (dispatch) => {
//   dispatch(userLoading())

//   try {
//     const res = await axios.post('/api/auth/login', formData)
//     dispatch({
//       type: LOGIN_USER,
//       payload: res.data, // { msg: 'Logged in with success', user, token }
//     })
//   } catch (error) {
//     console.dir(error)

//     const { errors, msg } = error.response.data

//     if (Array.isArray(errors)) {
//       errors.forEach((err) => alert(err.msg))
//     }
//     console.log(errors)
//     if (msg) {
//       alert(msg)
//     }

//     dispatch({
//       type: AUTH_ERRORS,
//     })
//   }
// }

// // Get auth user
// export const getAuthUser = () => async (dispatch) => {
//   dispatch(userLoading())

//   try {
//     //headers
//     const config = {
//       headers: {
//         'x-auth-token': localStorage.getItem('token'),
//       },
//     }
//     const res = await axios.get('/api/auth/user', config)
//     dispatch({
//       type: GET_AUTH_USER,
//       payload: res.data, // {user: req.user}
//     })
//   } catch (error) {
//     console.log(error)
//     dispatch({
//      type: AUTH_ERRORS,
//     })
//   }
// }



export const getAllUser = () => async (dispatch) => {
  dispatch(userLoading())

  try {
    
    const res = await axios.get('/api/auth/alluser')
    dispatch({
      type: GET_ALL_USER,
      payload: res.data, // {msg , alluser}
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: AUTH_ERRORS,
    })
  }
}

export const deleteUsers = (idUsers) => (dispatch) => {
  
  axios
    .delete(`/api/auth/deluser/${idUsers}`)
    .then((res) => dispatch(getAllUser()))
    .catch((err) => console.log(err))
}



// // Logout
// export const logout = () => (dispatch) => {
//   dispatch({
//     type: LOGOUT_USER,
//   })
// }
