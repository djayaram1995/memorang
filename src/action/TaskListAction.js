import  { GET_TASK_LIST } from '../constants'


export const  taskListAction = data => {
   return {
        type: GET_TASK_LIST,
        payload: data
    }
}