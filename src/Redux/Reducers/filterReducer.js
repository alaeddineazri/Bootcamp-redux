import { FILTRE_TASK } from "../Actions/actionTypes"

const initState="all"


const filterReducer = (state=initState,{type,payload}) => {
   switch (type) {
       case FILTRE_TASK:
            return payload
   
       default:
           return state
   }
}

export default filterReducer