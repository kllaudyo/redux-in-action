import {
    FETCH_TASKS_SUCCEEDED,
    FETCH_TASKS_STARTED,
    CREATE_TASK_SUCCEEDED,
    EDIT_STATUS_SUCCEEDED
} from "../constants";

const initialState = {
    tasks:[],
    isLoading:false
};

export default function tasks(state = initialState, action){
    const {id, title, description, status, tasks=[]} = action;
    switch(action.type){
        case CREATE_TASK_SUCCEEDED:
            return {
                ...state,
                tasks: [...state.tasks, {id, title, description, status}]
            };
        case EDIT_STATUS_SUCCEEDED:
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
        case FETCH_TASKS_SUCCEEDED:
            return {
                ...state,
                isLoading:false,
                tasks
            };
        case FETCH_TASKS_STARTED:
            return {
                ...state,
                isLoading:true
            };
        default:
            return state;
    }
};