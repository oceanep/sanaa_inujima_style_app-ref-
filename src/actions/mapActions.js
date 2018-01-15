import { getSiteFromLang } from "../middleware/firebase";
import {push} from 'react-router-redux'


export const loadInfoModal = (id) => {
  return (dispatch) => {
    dispatch(push(`/map/${id}`));
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
