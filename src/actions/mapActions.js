import * as firebase from "../api/firebase";

export function fetchSiteIds() {
  return function(dispatch) {
      dispatch({type: "FETCHING_SITES"});

      setTimeout(() => {
        firebase.getIds().then(ids => {
          dispatch({type: "FETCHED_SITES", payload: ids})
        }).catch(error => {
          dispatch({type: "FETCHED_SITES_FAILED", payload: error})
        });
      }, 3000);
  }
}

export function fetchSitesData() {
  return function(dispatch) {
    
  }
}

export function fetchSitesImages(){
  return function(dispatch) {

  }
}
