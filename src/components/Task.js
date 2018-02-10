import React from 'react';
import { TASK_STATUSES } from "../constants";

const Task = props => (
    <div className="task">
        <div className="task-header">
            <div>{props.task.title}</div>
            <div>
                <select defaultValue={props.task.status} onChange={props.onChangeStatus}>
                    {TASK_STATUSES.map(status =>
                        <option value={status} key={status}>{status}</option>
                    )}
                </select>
            </div>
        </div>
        <hr />
        <div className="task-body">
            {props.task.description}
        </div>
    </div>
);

export default Task;