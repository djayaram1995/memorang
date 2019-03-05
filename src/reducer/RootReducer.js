import { combineReducers } from  'redux'
import {taskList} from './TaskListReducer'


const RootReducer = combineReducers({taskList: taskList});
export default RootReducer;