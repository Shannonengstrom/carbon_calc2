import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import logs from './logReducer';


const store = combineReducers({
  user,
  login,
  logs
});

export default store;
