import { combineReducers } from 'redux';

const logListReducer = (state = {newLog:[]}, action) => {
    if(action.type === 'SET_LOGS') {
        return state = {...state, 
            newLog: action.payload
            };
        }
    if(action.type === 'ADD_DEFAULTS') {
        return state = {...state, 
            mode: action.payload.mode,
            co2_emis: action.payload.co2_emis
            };
        }
    if(action.type === 'ADD_INPUTS') {
        return state = {...state,
            destination: action.payload.destination, 
            date: action.payload.date,
            miles: action.payload.miles,
            notes: action.payload.notes
            };
        }
    if(action.type === 'ADD_EMIS') {
        return state = {...state,
            total_emis: action.payload
            };
        }
    return state;
};

const updateReducer = (state = {}, action) => {
    if(action.type === 'UPDATE_INPUTS') {
        return state = {...state,
            mode: action.payload.mode,
            co2_emis: action.payload.co2_emis,
            destination: action.payload.destination, 
            date: action.payload.date,
            miles: action.payload.miles,
            notes: action.payload.notes 
            };
        }
    if(action.type === 'SET_LOG_BY_ID') {
        return state = {...state, 
            mode: action.payload.mode,
            co2_emis: action.payload.co2_emis,
            destination: action.payload.destination, 
            date: action.payload.date,
            miles: action.payload.miles,
            notes: action.payload.notes };
        }
    return state;
};


const totalReducer = (state = [], action) => {
    if(action.type === 'SET_TOTAL') {
        return state = action.payload;
        }
    return state;
};

export default combineReducers({
    logListReducer, 
    totalReducer, 
    updateReducer
  });
