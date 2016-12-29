import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

//DEV TOOL HELPER
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
    applyMiddleware(ReduxPromise)
);

const store = createStore(reducers, enhancer);

ReactDOM.render(
    <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
