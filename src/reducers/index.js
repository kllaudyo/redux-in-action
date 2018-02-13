import { CREATE_TASK, EDIT_STATUS, FETCH_TASKS_SUCCEEDED } from "../constants";

export default function tasks(state = {tasks: []}, action){
    const {id, title, description, status, tasks=[]} = action;
    switch(action.type){
        case CREATE_TASK:
            return { tasks: [...state.tasks, {id, title, description, status}] };
        case EDIT_STATUS:
            return {
                tasks: state.tasks.map(task => {
                    if(task.id === id){
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
                tasks
            };
        default:
            return state;
    }
};