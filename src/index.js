import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import tasks from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(tasks);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
