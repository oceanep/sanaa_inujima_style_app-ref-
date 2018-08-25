import React, { Component} from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Map from '../../components/Map/Map';
import Loader2 from '../../components/Loader/Loader2';
import InfoContainer from '../infoContainer/infoContainer';

import styles from './MapContainer.scss';

import * as mapActions from '../../actions/mapActions';
import * as homeActions from '../../actions/homeActions';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: this.props.fetching,
      fetched: this.props.fetched,
      removeModal: false,
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
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

  modalClosed = () => {
    this.setState({removeModal: true});
  }

  onIconClick = (iconId) => {
    this.props.actions.mapActions.loadInfoModal(iconId);
  }

  render() {
    const {height, width, lang} = this.state;
    return (
        <div>
          <Loader2 opened={!this.props.fetching}/>
          <Map
            icons={this.renderIconUrls()}
            ids={this.props.siteIds}
            animate={this.props.fetched}
            clickHandler={this.onIconClick}
            height={height}
            width={width}
            lang={lang}
          />
          {this.props.children}
        </div>
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
  return {
    fetching: state.mapReducer.fetching,
    fetched: state.mapReducer.fetched,
    siteIds: state.mapReducer.siteIds,
    sites: state.mapReducer.siteInfo,
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
