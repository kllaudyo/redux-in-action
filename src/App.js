import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskPage from './components/TaskPage';
import { createTask, editStatus, fetchTasks } from "./actions";
import FlashMessage from "./components/FlashMessage";

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
            <div className="container">
                {this.props.error && <FlashMessage message={this.props.error}/> }
                <div className="main-content">
                    <TaskPage
                        tasks={this.props.tasks}
                        onCreateTask={this.onCreateTask}
                        onChangeStatus={this.onChangeStatus}
                        isLoading={this.props.isLoading}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({tasks,isLoading, error}) => ({tasks, isLoading, error});

export default connect(mapStateToProps)(App);