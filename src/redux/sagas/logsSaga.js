import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '..../App';
// import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// saga
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';

function* logsSaga() {
    yield takeEvery('GET_LOGS', getLogs);
    yield takeEvery('POST_LOG', postLog);
  }

const sagaMiddleware = createSagaMiddleware();

function* getLogs() {
    try { 
        const logsResponse = yield call(axios.get, '/api/logs');
        yield put( {type: 'GET_LOGS', 
                    payload: logsResponse.data})
    } catch (error) {
        console.log('bad things happened', error); 
    }
}

function* postLog(action) {
    try {
        yield call(axios.post, '/api/logs', action.payload);
        yield put( {type: 'POST_LOG'} );
    } catch (error) {
        console.log('bad things happened', error);
    }
}

const logListReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_LOGS':
            return action.payload;
        default:
            return state;
    }
};

// const storeInstance = createStore(
//     combineReducers({
//         logListReducer,
//     }),
//     applyMiddleware(sagaMiddleware, logger)
// );

// sagaMiddleware.run(logsSaga);

// ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();

export default logsSaga;


