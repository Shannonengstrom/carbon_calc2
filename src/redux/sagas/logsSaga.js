import axios from 'axios';
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';

function* getLogs(action) {
    try { 
        const logsResponse = yield call(axios.get, '/api/logs');
        yield put( {type: 'SET_LOGS', 
                    payload: logsResponse.data})
    } catch (error) {
        console.log('bad things happened', error); 
    }
}

function* postLog(action) {
    try {
        yield call(axios.post, '/api/logs', action.payload);
    } catch (error) {
        console.log('bad things happened', error);
    }
}

function* getEmisTotal() {
    try { 
        const totalResponse = yield call(axios.get, '/api/logs/total');
        yield put( {type: 'SET_TOTAL', 
                    payload: totalResponse.data})
    } catch (error) {
        console.log('bad things happened', error); 
    }
}

function* deleteLog(action) {
    try {
      yield call(axios.delete, `/api/logs?id=${action.payload}`);
      yield put ({type: 'GET_LOGS'});
    } catch ( error ) {
      console.log('something went wrong', error);
    }
  }

function* updateLog(action) {
    try {
      yield call(axios.put, '/api/logs/edit', action.payload);
    } catch ( error ) {
      console.log('something went wrong', error);
    }
  }

  function* getLogById(action) {
    try { 
        const logResponse = yield call(axios.get, `/api/logs/update/${action.payload}`);
        yield put( {type: 'SET_LOG_BY_ID', 
                    payload: logResponse.data})
    } catch (error) {
        console.log('bad things happened', error); 
    }
}

function* logsSaga() {
    yield takeLatest('GET_LOGS', getLogs);
    yield takeLatest('POST_LOG', postLog);
    yield takeLatest('GET_TOTAL', getEmisTotal);
    yield takeLatest('DELETE_LOG', deleteLog);
    yield takeLatest('UPDATE_LOG', updateLog);
    yield takeLatest('GET_LOG_BY_ID', getLogById);
  }

export default logsSaga;


