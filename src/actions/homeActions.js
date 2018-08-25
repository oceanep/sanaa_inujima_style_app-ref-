import { getSiteFromLang } from "../middleware/firebase";

export function setLang(lang) {
  return function(dispatch) {
      dispatch({type: "SET_LANG", payload: lang});
  }
}
export function fetchSites(lang) {
  return function(dispatch, getState) {
    const langCache = JSON.parse(sessionStorage.getItem('langCache'));
    const lang = !lang ? langCache : lang;
      dispatch({type: "FETCHING_SITES"});

      getSiteFromLang(lang).then(sites => {
        dispatch({type: "FETCHED_SITES", payload: sites.val()});
      }).catch(error => {
        dispatch({type: "FETCHED_SITES_FAILED", payload: error})
      });
    }
}
