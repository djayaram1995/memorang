import { GET_TASK_LIST } from '../constants'
import initialState from './initialState';
export const taskList = (state=initialState,action) => {
    switch(action.type) {
            case GET_TASK_LIST: 
                return action.payload
            
            default:
                return state.taskList;
            
        }
    }