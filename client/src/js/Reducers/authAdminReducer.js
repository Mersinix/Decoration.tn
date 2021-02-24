import {
  USER_LOADING,
  AUTH_ERRORS,
  GET_ALL_USER,
} from '../constants/adminActionsTypes'

const initialState = {
  alluser: [],
  isAuthadmin: false,
  isLoading: true,
}

const authAdminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: false,
      }

    case GET_ALL_USER:
      return {
        ...state,
        isLoading: false,
        isAuthadmin: true,
        alluser: payload,
      }

    case AUTH_ERRORS:
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthadmin: false,
        alluser: null,
        isLoading: false,
      }
    default:
      return state
  }
}

export default authAdminReducer
