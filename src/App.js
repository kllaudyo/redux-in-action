import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskPage from './components/TaskPage';

class App extends Component {

    onCreateTask = ({title, description}) => {
        this.props.dispatch({
            type: 'CREATE_TASK',
            title,
            description
        });
    };

    render() {
        console.log('props from app: ', this.props);
        return (
            <div className="main-content">
                <TaskPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} />
            </div>
        );
    }
}

const mapStateToProps = ({tasks}) => ({tasks});

export default connect(mapStateToProps)(App);