import React, { Component } from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TaskPage extends Component {

    renderTaskList(){
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTask = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={statusTask} />;
        })
    }

    render(){
        return (
            <div className="tasks">
                <div className="task-list">
                    {this.renderTaskList()}
                </div>
            </div>
        )
    }
}

export default TaskPage;