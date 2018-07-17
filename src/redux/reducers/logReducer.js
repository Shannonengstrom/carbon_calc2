import { combineReducers } from 'redux';
import axios from 'axios';


const logListReducer = (state = {}, action) => {
    if(action.type === 'SET_LOGS') {
        console.log(`I'm the logListReducer`, action);
        const newLog = action.payload;
        state = {...state, newLog};
    }
    if(action.type === 'ADD_MULTIPLIERID') {
    console.log(`I'm the logListReducer`, action);
    console.log('in loglist', action.payload);
    state = {...state, co2_emis_id: action.payload};
    }
    if(action.type === 'ADD_INPUTS') {
        console.log(`I'm the logListReducer`, action);
        // return {...state, destination: action.payload.destination, 
        //     date: action.payload.date,
        //     miles: action.payload.miles,
        //     notes: action.payload.notes
        //     };
    state = {...state, co2: action.payload.co2, 
        destination: action.payload.destination, 
        date: action.payload.date,
        miles: action.payload.miles,
        notes: action.payload.notes
        };
        console.log(state);
        }
      return state;
    }
    
    
//     switch (action.type) {
//         case 'SET_LOGS':
//         console.log('in logListReducer', action);
//             return action.payload;
//     switch (action.type) {
//         case 'ADD_MULTIPLIERID':
//         console.log('in logListReducer', action);
//             return {...state, co2_emis_id: action.payload};
//     switch (action.type) {
//         case 'ADD_INPUTS':
//         console.log('in logListReducer', action);
//             return {...state, destination: action.payload.destination, 
//                     date: action.payload.date,
//                     miles: action.payload.miles,
//                     notes: action.payload.notes
//                 };
//         default:
//             return state;
//             }
//         }   
//     }
// }

// const multiplierReducer = (state = [], action) => {
//     // switch (action.type) {
//     //     case 'SET_MULTIPLIER':
//     //         return action.payload;
//     switch (action.type) {
//         case 'ADD_MULTIPLIERID':
//             return action.payload;
//         default:
//             return state;
//     }
// };

export default combineReducers({
    logListReducer 
    // multiplierReducer
  });
