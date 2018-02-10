import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import './index.css';
import tasks from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(tasks, devToolsEnhancer());

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
