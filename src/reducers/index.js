import * as c from "../constants";

const initialState = {
    tasks:[],
    isLoading:false,
    error: null
};

export default function tasks(state = initialState, action){
    const {id, title, description, status, tasks=[], error=null} = action;
    switch(action.type){
        case c.CREATE_TASK_SUCCEEDED:
            return {
                ...state,
                tasks: [...state.tasks, {id, title, description, status}]
            };
        case c.EDIT_STATUS_SUCCEEDED:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if(task.id===id){
                        return {
                            ...task,
                            status
                        }
                    }
                    return task;
                })
            };
        case c.FETCH_TASKS_SUCCEEDED:
            return {
                ...state,
                isLoading:false,
                error:null,
                tasks
            };
        case c.FETCH_TASKS_STARTED:
            return {
                ...state,
                isLoading:true
            };
        case c.FETCH_TASKS_FAILED:
            return {
                ...state,
                isLoading:false,
                error
            };
        default:
            return state;
    }
};