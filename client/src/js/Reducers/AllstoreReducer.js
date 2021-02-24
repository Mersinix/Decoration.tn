import {
    GET_STORES,
    STORE_LOADING,
    
  } from '../constants/AllStoreActionsTypes'
  
  const initState = {
    stores: [],
    isLoading: true,
    msg: null,
  }
  export const AllstoreReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_STORES:
        return {
          ...state,
          isLoading: false,
          ...payload,
        }
     
      case STORE_LOADING:
        return {
          ...state,
          isLoading: false,
        }
     
      default:
        return state
    }
  }
  
  export default AllstoreReducer
  