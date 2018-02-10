let _id = 1;
export const uniqueId = () => _id++;
export const createTask = ({title, description}) => ({
    type:'CREATE_TASK',
    id:uniqueId(),
    title,
    description,
    status:'Unstarted'
});