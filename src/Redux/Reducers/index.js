import {combineReducers}  from 'redux'
import filterReducer from './filterReducer'
import todoReducer from './todoReducer'
import 'bootstrap/dist/css/bootstrap.min.css';


export default combineReducers ({
    tasks: todoReducer ,
    filter:filterReducer
} )