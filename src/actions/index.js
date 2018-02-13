import { CREATE_TASK, EDIT_STATUS, FETCH_TASKS_SUCCEEDED } from "../constants";
import axios from 'axios';

let _id = 1;
export const uniqueId = () => _id++;
export const createTask = ({title, description}) => ({
    type: CREATE_TASK,
    id:uniqueId(),
    title,
    description,
    status:'Unstarted'
});

export const editStatus = ({id, status}) => ({
    type: EDIT_STATUS,
    id,
    status
});

export const fetchTaskSucceeded = tasks => ({
    type : FETCH_TASKS_SUCCEEDED,
    tasks
});

export const fetchTasks = () => dispatch =>
    axios.get('http://localhost:3001/tasks')
        .then(res => {
            dispatch(fetchTaskSucceeded(res.data))
        });