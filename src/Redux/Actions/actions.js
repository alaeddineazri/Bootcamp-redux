import { uuid } from "uuidv4"
import { ADD_TASK, DEL_TASK, FILTRE_TASK, TOGGLE_TASK, UPDATE_TASK } from "./actionTypes"

export const addTask = (discrption)=>      {
    return{
        type:ADD_TASK,
        payload :{id:uuid(),discrption,isDone:false}
    }
    }
export const deleteTask = (id)=>      {
    return{
        type:DEL_TASK,
            payload :id
        }
        }
export const toogle = (id)=>      {
    return{
        type:TOGGLE_TASK,
            payload :id
        }
        }
    
export const handelfilter = (filtre)=>      {
    return{
        type:FILTRE_TASK,
            payload :filtre
        }
        }
export function updateToDo(task) {
    
    return {
        
            type: UPDATE_TASK,
            payload: task,
            };
    }








        














// <!-- () {} [] "" '' # &    -->   