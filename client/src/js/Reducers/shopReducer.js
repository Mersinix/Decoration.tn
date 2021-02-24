import {GET_SHOPS,INCREMENT} from "../constants/ShopActionsTypes";


const initState={
  shops :[],
  count:null,
}
export const shopReducer=(state=initState,{type,payload}) =>{
 switch (type) {
     case GET_SHOPS:
         return {
             ...state,shops:payload,
         };
         case INCREMENT:
         return {
             ...state,
             count:payload.count++,
             ...payload,
         };
        
        
     default:
         return state;
 }
}

export default shopReducer