import {
  // GET_STORES,
  STORE_LOADING,
  LOGIN_STORE,
  REGISTER_STORE,
  LOGOUT_STORE,
  STORE_ERRORS,
  GET_MYSTORES,
} from '../constants/StoreActionsTypes'

const initState = {
  stores: [],
  stor:null,
  tokenStore: localStorage.getItem('tokenStore'), //null
  isAuthStore: false,
  isLoading: true,
  msg: null,
}
export const storeReducer = (state = initState, { type, payload }) => {
  switch (type) {
    // case GET_STORES:
    //   return {
    //     ...state,
    //     stores: payload,
    //     isLoading: false,
    //     isAuthStore: false,
    //   }
    case GET_MYSTORES:
      localStorage.setItem('tokenStore', payload.tokenStore)
      return {
        ...state,
        isLoading: false,
        isAuthStore: true,
        store: payload.store,
        ...payload,
      }
    case STORE_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    case REGISTER_STORE:
    case LOGIN_STORE:
      localStorage.setItem('tokenStore', payload.tokenStore)
      return {
        ...state,
        isLoading: false,
        isAuthStore: true,
        msg: payload.msg,
        ...payload,
      }

    case LOGOUT_STORE:
    case STORE_ERRORS:
      localStorage.removeItem('tokenStore')
      return {
        ...state,
        tokenStore: null,
        stores: null,
        isLoading: false,
        isAuthStore: false,
      }

    default:
      return state
  }
}

export default storeReducer
