import { getSiteFromLang } from "../middleware/firebase";
import {push} from 'react-router-redux';
import { browserHistory } from 'react-router';


export const loadInfoModal = (id) => {
  return (dispatch) => {
    // dispatch(browserHistory.push(`${id}`));
  }
}

export function fetchSiteData(id) {
  return function(dispatch) {
    dispatch({type: "FETCH_SITE_DATA", payload: id});
  }
}

export function fetchSitesImages(id){
  return function(dispatch) {
    dispatch({type: "FETCH_SITE_IMAGES", payload: id})
  }
}
