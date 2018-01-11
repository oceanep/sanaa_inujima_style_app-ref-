


const reducer = combineReducers(reducers);

const middleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  callAPIMiddleware
);

export const store = createStore(reducer, middleware);
