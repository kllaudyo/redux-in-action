import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskPage from './components/TaskPage';

class App extends Component {
  render() {
    return (
        <div className="main-content">
            <TaskPage tasks={this.props.tasks} />
        </div>
    );
  }
}

const mapStateToProps = ({tasks}) => ({tasks});

export default connect(mapStateToProps)(App);