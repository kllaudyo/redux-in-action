import { CREATE_TASK, EDIT_STATUS } from "../constants";

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