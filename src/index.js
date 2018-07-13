import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducer from './redux/reducers';

// sagas
import rootSaga from './redux/sagas';
import createSagaMiddleware from 'redux-saga';

// Initializing to an empty object, but here is where you could
// preload your redux state with initial values (from localStorage, perhaps)

// const startingLogArray = [
//   { id: 1, destination: 'work'}
// ];

const preloadedState = {};
const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
