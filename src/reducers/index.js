import { uniqueId } from "../actions";

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
    if(action.type === "CREATE_TASK"){
        return { tasks: [...state.tasks, {id, title, description, status}] }
    }
    return state;
};