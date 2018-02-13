import { CREATE_TASK, EDIT_STATUS, FETCH_TASKS_SUCCEEDED, TASK_UNSTARTED } from "../constants";
import * as api from '../api';

let _id = 1;
export const uniqueId = () => _id++;
export const createTask = ({title, description}) => ({
    type: CREATE_TASK,
    id:uniqueId(),
    title,
    description,
    status: TASK_UNSTARTED
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
    api.fetchTasks()
        .then(res => dispatch(fetchTaskSucceeded(res.data)));