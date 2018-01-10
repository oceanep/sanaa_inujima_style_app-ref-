export function fetchSites(id, text) {
  return function(dispatch) {
      dispatch({type: "FETCHING_SITE"});

      dispatch({type: "FETCHING_SITE", payload: {
        id,
        text
      }
    });
  }
}
