import { CREATE_TASK_SUCCEEDED, EDIT_STATUS_SUCCEEDED, FETCH_TASKS_SUCCEEDED, TASK_UNSTARTED } from "../constants";
import * as api from '../api';

export const createTaskSucceeded = ({id, title, description, status}) => ({
    type: CREATE_TASK_SUCCEEDED,
    id,
    title,
    description,
    status
});

export const createTask = ({title,description,status=TASK_UNSTARTED}) =>
        dispatch =>
            api.createTask({title, description, status})
                .then(res => dispatch(createTaskSucceeded(res.data)));

export const editStatusSucceeded = ({id, status}) => ({
    type: EDIT_STATUS_SUCCEEDED,
    id,
    status
});

export const editStatus = (task) =>
        dispatch =>
            api.editTask(task)
                .then(res => dispatch(editStatusSucceeded(res.data)));

export const fetchTaskSucceeded = tasks => ({
    type : FETCH_TASKS_SUCCEEDED,
    tasks
});

export const fetchTasks = () => dispatch =>
    api.fetchTasks()
        .then(res => dispatch(fetchTaskSucceeded(res.data)));