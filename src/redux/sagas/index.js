import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import logsSaga from './logsSaga';



export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    logsSaga(),
    // watchIncrementAsync()
  ]);
}
