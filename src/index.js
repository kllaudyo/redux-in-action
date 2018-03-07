import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import tasksReducer from './reducers';
import logger from './middleware/logger';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const rootReducer = (state={}, action) => {
//     const tasks =tasksReducer(state.tasks, action);
//     return {tasks};
// };

const store = createStore(
    tasksReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
);

if(module.hot){
    module.hot.accept('./App', ()=> {
        const NextApp = require("./App").default;
        ReactDOM.render(
            <Provider store={store}>
                <NextApp/>
            </Provider>,
            document.getElementById('root')
        );
    });

    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
