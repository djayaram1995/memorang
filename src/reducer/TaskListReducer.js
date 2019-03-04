import { GET_TASK_LIST } from '../constants'
import initialState from './initialState';
const taskList = (action, state=initialState) => {
    console.log('fu',action)
    switch(action.type) {
        case GET_TASK_LIST: 
            return action.payload
        
        default:
            return state.taskList;
        
    }
}
export default taskList;