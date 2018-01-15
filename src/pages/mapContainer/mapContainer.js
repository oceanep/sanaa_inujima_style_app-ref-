import React, { Component} from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Map from '../../components/Map/Map';
import Loader from '../../components/Loader/Loader';
import InfoContainer from '../infoContainer/infoContainer';

import styles from './MapContainer.scss';

import * as mapActions from '../../actions/mapActions';
import * as homeActions from '../../actions/homeActions';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: this.props.fetching,
      fetched: this.props.fetched
    }
  }

  // componentWillMount() {
  //   // //fix later
  //   let lang='eng';
  //   // if (e.target.innerHTML == "English"){
  //   //   lang = 'eng';
  //   // } else if (e.target.innerHTML == "Japanese") {
  //   //   lang = 'jap';
  //   // }
  //   !this.props.fetched? this.props.actions.fetchSites(lang):null;
  // }

  // shouldcomponentUpdate(nextState) {
  //   return nextState.mapReducer.fetched;
  // }
  renderIconUrls = () => {
    let iconUrls = {};
    this.props.siteIds.map( ids => {
      iconUrls[ids] = this.props.sites[ids].icon;
    });
    return iconUrls;
  }

  onIconClick = (iconId) => {
    console.log(this.props.mapActions);
    this.props.actions.mapActions.loadInfoModal(iconId);
    console.log('fired icon action');
  }

  render() {
    {console.log(this.props)}
    return (
    this.props.fetching ?
      <Loader/>
    : this.props.fetched ?
        <div>
          <Map icons={this.renderIconUrls()} ids={this.props.siteIds} clickHandler={this.onIconClick}/>
          {this.props.children}
        </div>
      :
        null
    );
  }


}

MapContainer.propTypes = {
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired
};

MapContainer.defaultProps = {
  fetched: false,
  fetching: true,
};

function mapStateToProps(state) {
  console.log("mapping");
  console.log(state);
  return {
    fetching: state.mapReducer.fetching,
    fetched: state.mapReducer.fetched,
    siteIds: state.mapReducer.siteIds,
    sites: state.mapReducer.siteInfo
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: {
        homeActions: bindActionCreators(homeActions, dispatch),
        mapActions: bindActionCreators(mapActions, dispatch)
      }
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
