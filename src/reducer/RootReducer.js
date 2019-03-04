import { combineReducers } from  'redux'
import taskList from './TaskListReducer'


const RootReducer = combineReducers({taskList});
export default RootReducer;