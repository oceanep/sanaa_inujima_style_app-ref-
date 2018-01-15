import { getSiteFromLang } from "../middleware/firebase";

export function fetchSites(lang) {
  return function(dispatch) {
      dispatch({type: "FETCHING_SITES"});

      getSiteFromLang(lang).then(sites => {
        dispatch({type: "FETCHED_SITES", payload: sites.val()});
      }).catch(error => {
        dispatch({type: "FETCHED_SITES_FAILED", payload: error})
      });
    }
}
