import {GET_CATEGORY} from "../constants/CategoryActionsTypes";


const initState={
  categorys :[]
}
export const categoryReducer=(state=initState,{type,payload}) =>{
 switch (type) {
     case GET_CATEGORY:
         return {
             ...state,categorys:payload,
         };
        
     default:
         return state;
 }
}

export default categoryReducer