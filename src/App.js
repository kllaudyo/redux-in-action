import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskPage from './components/TaskPage';
import { createTask, editStatus, fetchTasks } from "./actions";

class App extends Component {

    onCreateTask = (task) => {
        this.props.dispatch(createTask(task));
    };

    onChangeStatus = (task) => {
        this.props.dispatch(editStatus(task));
    };

    componentDidMount(){
        this.props.dispatch(fetchTasks());
    }

    render() {
        console.log('props from app: ', this.props);
        return (
            <div className="main-content">
                <TaskPage
                    tasks={this.props.tasks}
                    onCreateTask={this.onCreateTask}
                    onChangeStatus={this.onChangeStatus}
                    isLoading={this.props.isLoading}
                />
            </div>
        );
    }
}

const mapStateToProps = ({tasks,isLoading}) => ({tasks, isLoading});

export default connect(mapStateToProps)(App);