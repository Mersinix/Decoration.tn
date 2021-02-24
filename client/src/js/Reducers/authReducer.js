import {
  USER_LOADING,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  GET_AUTH_USER,
  AUTH_ERRORS,
  GET_ALL_USER
} from '../constants/ActionsTypes'

const initialState = {
  token: localStorage.getItem('token'), //null
  user: null,
  role:null,
  alluser:[],
  isAuth: false,
  isAuthadmin: false,
  isLoading: true,
  msg: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        role:payload.user.role,
        msg: payload.msg,
        ...payload,
      }
    case GET_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        role:payload.user.role,
        
        ...payload,
      }
      case GET_ALL_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        

        ...payload,
      };

    case LOGOUT_USER:
    case AUTH_ERRORS:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuth: false,
        user: null,
        isLoading: false,
        role:null,
      }
    default:
      return state
  }
}

export default authReducer
