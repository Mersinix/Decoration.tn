import {GET_PRODUCTS,GET_PRODUCT,SHOP_PRODUCT} from "../constants/ProductActionsTypes";


const initState={
  products :[]
}
export const productReducer=(state=initState,{type,payload}) =>{
 switch (type) {
     case GET_PRODUCTS:
         return {
             ...state,products:payload,
         };
         case GET_PRODUCT:
         return {
             ...state,products:payload,
         };
         case SHOP_PRODUCT:
         return {
             ...state,
             ...payload,
         };
        
     default:
         return state;
 }
}

export default productReducer