// import axios from 'axios';

// // add callResults to logSaga - have it yield the action.payload
// export function callLogs() {
//     return axios.get ('/api/logs')
//      .then( response => response.data)
//      .catch((error) => { throw error.response || error;});
// }

// export function placeholder() {
//     console.log('hi');
//   }



//     try { 
//         const logResponse = yield call(axios.get, '/api/logs');
//         yield put( {type: 'SET_LOGS', 
//                     payload: logResponse.data})
//     } catch (error) {
//         console.log('bad things happened', error); 
//     }
// }

// export function postLog(action) {
//     try {
//         yield call(axios.post, '/api/logs', action.payload);
//         yield put( {type: 'FETCH_LOGS'} );
//     } catch (error) {
//         console.log('bad things happened', error);
//     }l
// }


