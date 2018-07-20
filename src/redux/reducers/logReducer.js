import { combineReducers } from 'redux';

const logListReducer = (state = {newLog:[]}, action) => {
    if(action.type === 'SET_LOGS') {
        console.log(`I'm the logListReducer`, action);
        return state = {...state, 
            newLog: action.payload
            };
        }

    if(action.type === 'ADD_DEFAULTS') {
        console.log(`I'm the logListReducer`, action);
        console.log('in reducer: ADD DEFAULTS', action.payload);
        return state = {...state, 
            mode: action.payload.mode,
            co2_emis: action.payload.co2_emis
            };
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
 
    // if(action.type === 'GET_DEFAULTS') {
    //     console.log(`I'm the logListReducer`, action);
    //     console.log('in reducer: GET DEFAULTS', action.payload);
    //     return {...state, 
    //         mode: action.payload.mode,
    //         co2_emis: action.payload.co2_emis
    //         };
    //     }
    return state;
};

const updateReducer = (state = {}, action) => {
    if(action.type === 'UPDATE_INPUTS') {
        console.log(`I'm the updateReducer`, action);
        console.log('in reducer: UPDATE INPUTS', action.payload);
        return state = {...state,
            mode: action.payload.mode,
            co2_emis: action.payload.co2_emis,
            destination: action.payload.destination, 
            date: action.payload.date,
            miles: action.payload.miles,
            notes: action.payload.notes 
            };
        }
    // if(action.type === 'UPDATE_EMIS') {
    //     console.log(`I'm the logListReducer`, action);
    //     console.log('in reducer: UPDATE EMIS', action.payload);
    //     return state = {...state,
    //         total_emis: action.payload
    //         };
    //     }
    if(action.type === 'SET_LOG_BY_ID') {
        console.log(`I'm the updateReducer`, action);
        return state = {...state, 
            mode: action.payload.mode,
            co2_emis: action.payload.co2_emis,
            destination: action.payload.destination, 
            date: action.payload.date,
            miles: action.payload.miles,
            notes: action.payload.notes, 
            total_emis: action.payload.total_emis
            };
        }
    return state;
};


const totalReducer = (state = [], action) => {
    if(action.type === 'SET_TOTAL') {
        console.log(`I'm the totalReducer`, action.payload);
        return state = action.payload;
        }
    return state;
};

export default combineReducers({
    logListReducer, 
    totalReducer, 
    updateReducer
  });
