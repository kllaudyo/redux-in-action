import React from 'react';

const Task = props => (
    <div className="task">
        <div className="task-header">
            <div>{props.task.title}</div>
        </div>
        <hr />
        <div className="task-body">
            {props.task.description}
        </div>
    </div>
);

export default Task;