// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';
// import axios from 'axios';

// // redux
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import logger from 'redux-logger';

// // saga
// import createSagaMiddleware from 'redux-saga';
// import { takeEvery, call, put } from 'redux-saga/effects';


// const sagaMiddleware = createSagaMiddleware();

// function* getLogs() {
//     try { 
//         const logsResponse = yield call(axios.get, '/api/logs');
//         yield put( {type: 'GET_LOGS', 
//                     payload: logsResponse.data})
//     } catch (error) {
//         console.log('bad things happened', error); 
//     }
// }

// function* postLog(action) {
//     try {
//         yield call(axios.post, '/api/logs', action.payload);
//         yield put( {type: 'POST_LOG'} );
//     } catch (error) {
//         console.log('bad things happened', error);
//     }l
// }


//   function* logsSaga() {
//     yield takeEvery(GET_LOGS, getLogs);
//     yield takeEvery(POST_LOG, postlog);
//   }

//   export default logsSaga;


// const logsListReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'GET_LOGS':
//             return action.payload;
//         default:
//             return state;
//     }
// };


import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';


function* rootSaga() {
  yield takeEvery('FETCH_LOGS', fetchLogs);
  yield takeEvery('FETCH_LOGS', postLog);
//   yield takeEvery('DELETE_LOG', deleteSaga);
}

const sagaMiddleware = createSagaMiddleware();

function* fetchLogs() {
    try {
      const logsResponse = yield call(axios.get, '/api/log');
      console.log({logsResponse});
      yield put({type: 'SET_LOGS', payload: logsResponse.data})
    } catch (error) {
      console.log('error fetching logs', error);
    }
  }

function* postLog(action) {
    try {
      yield call(axios.post, '/api/log', action.payload);
      yield put ({type: 'FETCH_LOGS'});
    } catch ( error ) {
      console.log('something went wrong', error);
    }
  console.log(action);
  }

const logListReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_LOGS':
      return action.payload;
    default:
      return state;
  }
};





// function* deleteLog(action) {
//   try {
//     yield call(axios.delete, `/api/plant?id=${action.payload}`);
//     yield put ({type: 'GET_LOGS'});
//   } catch ( error ) {
//     console.log('something went wrong', error);
//   }
// console.log(action);
// }
// 


const store = createStore(
  combineReducers({ logListReducer }),
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));

export default logsSaga;
