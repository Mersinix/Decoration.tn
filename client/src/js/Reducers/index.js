import { combineReducers } from 'redux'
import authReducer from './authReducer'
import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import storeReducer from './storeReducer'
import AllstoreReducer from './AllstoreReducer'
import authAdminReducer from './authAdminReducer'
import shopReducer from './shopReducer'

export default combineReducers({
  authReducer,
  productReducer,
  categoryReducer,
  storeReducer,
  AllstoreReducer,
  authAdminReducer,
  shopReducer,
})
