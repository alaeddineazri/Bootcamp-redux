import { uuid } from "uuidv4"
import { ADD_TASK, DEL_TASK, TOGGLE_TASK, UPDATE_TASK} from "../Actions/actionTypes";



const initState =[{
    id:uuid(),
    discrption:"",
    isDone:false
}]


const todoReducer =(state=[],{type,payload} )=> {
    switch (type) {
        case ADD_TASK:
            return[payload,...state]
        case DEL_TASK:
            return state.filter(elm=>elm.id !== payload)
        case TOGGLE_TASK:
            return state.map(elm=>elm.id === payload?{...elm , isDone:!elm.isDone } :elm)
        case UPDATE_TASK:
         const index = state.findIndex(elm => elm.id===payload.id)
         state[index]=payload
            console.log("payload",payload)
            return state
        default:
            return state;
            
    }

}

export default todoReducer
      