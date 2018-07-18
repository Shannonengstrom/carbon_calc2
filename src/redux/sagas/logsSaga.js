import axios from 'axios';
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';

function* getLogs() {
    try { 
        console.log('log in get logs');
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
        console.log(action.payload);
        // yield put( {type: 'GET_LOGS'} );
    } catch (error) {
        console.log('bad things happened', error);
    }
}

function* logsSaga() {
    yield takeLatest('GET_LOGS', getLogs);
    yield takeLatest('POST_LOG', postLog);
  }

export default logsSaga;


