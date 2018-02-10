import React, { Component } from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TaskPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            showNewCardForm:false,
            title:"",
            description:""
        }
    }

    toggleForm = () => {
        this.setState(({showNewCardForm}) => ({
            showNewCardForm: !showNewCardForm
        }));
    };

    handleTitleChange = e => this.setState({title:e.target.value});
    handleDescriptionChange = e => this.setState({description:e.target.value});
    handleCreateTask = e => {
        e.preventDefault();
        const { title, description } = this.state;
        this.props.onCreateTask({
            title,
            description
        });
        this.resetForm();
    };

    resetForm = () => {
        this.setState({
            showNewCardForm:false,
            title:'',
            description:''
        });
    };

    renderTaskList(){
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTask = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={statusTask} />;
        });
    }

    render(){
        return (
            <div className="tasks">
                <div className="task-list-title">
                    <button onClick={this.toggleForm} className="button button-default">+ New Task</button>
                </div>
                {this.state.showNewCardForm && (
                    <form className="new-task-form" onSubmit={this.handleCreateTask}>
                        <input
                            className="full-width-input"
                            onChange={this.handleTitleChange}
                            value={this.state.title}
                            type="text"
                            placeholder="title"
                        />
                        <input
                            className="full-width-input"
                            onChange={this.handleDescriptionChange}
                            value={this.state.description}
                            type="text"
                            placeholder="description"
                        />
                        <button className="button" type="submit">Save</button>
                    </form>
                )}
                <div className="task-list">
                    {this.renderTaskList()}
                </div>
            </div>
        )
    }
}

export default TaskPage;