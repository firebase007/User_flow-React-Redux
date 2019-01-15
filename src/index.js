import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers';
import './assets/styles/style.scss';
import App from './app';


const logger = createLogger();
const appMiddlewares = [thunk, logger];

const store = createStore(RootReducer, applyMiddleware(...appMiddlewares));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
