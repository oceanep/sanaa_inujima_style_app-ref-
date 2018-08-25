let initialState = {
  entered: false,
  siteIds: [],
  siteInfo: {},
  siteImages: {},
  lang: '',
  fetching: false,
  fetched: false,
  error: null
}

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {

    case "FETCHING_SITES":
        newState = {...state, fetching: true};
      return newState;

    case "FETCHED_SITES":
        newState = {
          ...state,
          fetching: false,
          fetched: true,
          siteIds: Object.keys(action.payload.siteInfo),
          siteInfo: action.payload.siteInfo,
          siteImages: action.payload.siteImages
        };
      return newState;

    default:
      return state;
  };
}
