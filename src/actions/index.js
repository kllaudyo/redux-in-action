import * as c from "../constants";
import * as api from '../api';
import { CALL_API } from '../middleware/api';

export const createTaskSucceeded = ({id, title, description, status}) => ({
    type: c.CREATE_TASK_SUCCEEDED,
    id,
    title,
    description,
    status,
    meta:{
        analytics: {
            event: 'create_task',
            data: { id }
        }
    }
});

export const createTask = ({title,description,status=c.TASK_UNSTARTED}) => ({
    [CALL_API]:{
        types: [c.CREATE_TASK_STARTED, c.CREATE_TASK_SUCCEEDED, c.CREATE_TASK_FAILED],
        endpoint: '/tasks',
        method: 'POST',
        body: {
            title,
            description,
            status
        }
    }
});

// export const createTask = ({title,description,status=c.TASK_UNSTARTED}) =>
//         dispatch =>
//             api.createTask({title, description, status})
//                 .then(res => dispatch(createTaskSucceeded(res.data)));

export const editStatusSucceeded = ({id, status}) => ({
    type: c.EDIT_STATUS_SUCCEEDED,
    id,
    status
});

export const editStatus = task =>
        dispatch =>
            api.editTask(task)
                .then(res => dispatch(editStatusSucceeded(res.data)));

export const fetchTasks = () => ({
    [CALL_API]:{
        types:[c.FETCH_TASKS_STARTED, c.FETCH_TASKS_SUCCEEDED, c.FETCH_TASKS_FAILED],
        endpoint:'/tasks'
    }
});

// export const fetchTaskSucceeded = tasks => ({
//     type : c.FETCH_TASKS_SUCCEEDED,
//     tasks
// });
//
// export const fetchTaskFailed = error => ({
//     type: c.FETCH_TASKS_FAILED,
//     error
// });
//
// export const fetchTaskStarted = () => ({
//     type: c.FETCH_TASKS_STARTED,
// });
//
// export const fetchTasks = () => dispatch => {
//     dispatch(fetchTaskStarted());
//     api.fetchTasks()
//         .then(res =>
//             setTimeout(
//                 () => dispatch(fetchTaskSucceeded(res.data))
//                 , 2000
//             )
//         )
//         .catch(err =>
//             dispatch(fetchTaskFailed(err.message))
//         );
// };