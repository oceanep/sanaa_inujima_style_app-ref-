let initialState = {
  siteIds: []
}

export default function(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    // case expression:
    //
    //   break;
    default:
      return state;
  };
}
// import * as types from '../constants/actionTypes';
// import { combineReducers } from 'redux';
//
// const initialState = {
//   home: {
//     feed: {}
//   }
// };
//
// function createReducer(initialState, handlers) {
//   return function reducer(state = initialState, action) {
//     if (handlers.hasOwnProperty(action.type)) {
//       return handlers[action.type](state, action);
//     } else {
//       return state;
//     }
//   }
// }
//
// export const home = createReducer(initialState.home, {
//   [types.ALBUMS_SUCCESS](state, action) {
//     return {
//       ...state,
//       feed: action.response.responseBody.feed
//     }
//   }
// })
