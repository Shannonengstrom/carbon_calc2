import { combineReducers } from 'redux';


const logListReducer = (state = {newLog:[]}, action) => {
    if(action.type === 'SET_LOGS') {
        console.log(`I'm the logListReducer`, action);
        return state = {...state, newLog: action.payload};
    }
    if(action.type === 'ADD_MULTIPLIERID') {
        console.log(`I'm the logListReducer`, action);
        console.log('in reducer: ADD MULTIPLIERID', action.payload);
        return state = {...state, co2_emis: action.payload};
    }
    if(action.type === 'ADD_INPUTS') {
        console.log(`I'm the logListReducer`, action);
        return state = {...state,
            destination: action.payload.destination, 
            date: action.payload.date,
            miles: action.payload.miles,
            notes: action.payload.notes
            };
        }
    if(action.type === 'ADD_EMIS') {
        console.log(`I'm the logListReducer`, action);
        console.log('in reducer: ADD EMIS', action.payload);
        return state = {...state,
            total_emis: action.payload
            };
        }
      return state;
    }

export default combineReducers({
    logListReducer 
    // multiplierReducer
  });
