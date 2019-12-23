import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './components/store/reducers';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
