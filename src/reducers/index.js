import { uniqueId } from "../actions";
import { CREATE_TASK, EDIT_STATUS } from "../constants";

const mockTasks = [
    {
        id: uniqueId(),
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: uniqueId(),
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
];

export default function tasks(state = {tasks: mockTasks}, action){
    const {id, title, description, status} = action;
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
        default:
            return state;
    }
};