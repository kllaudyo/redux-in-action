import React, { Component } from 'react';
import TaskPage from './components/TaskPage';

class App extends Component {
  render() {
    return (
        <div className="main-content">
            <TaskPage tasks={mockTasks} />
        </div>
    );
  }
}

export default App;

