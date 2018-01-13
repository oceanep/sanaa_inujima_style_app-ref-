let initialState = {
  entered: false

}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    // case expression:
    //
    //   break;
    default:
      return state;
  };
}
