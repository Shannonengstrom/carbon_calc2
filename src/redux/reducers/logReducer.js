import { combineReducers } from 'redux';

const logListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LOGS':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    logListReducer
  });
