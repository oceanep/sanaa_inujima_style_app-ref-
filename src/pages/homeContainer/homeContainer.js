import React, { Component} from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Enter from '../../components/Enter/Enter';
import Loader from '../../components/Loader/Loader';
import Language from '../../components/Language/Language';

import * as homeActions from '../../actions/homeActions';

import styles from './HomeContainer.scss';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: false,
      hideLanding: false,
    };
  }

  enterApp = () => {
    // this.setState({entry: !this.state.entry});
    setTimeout(()=>{
      this.setState({entry:true});
    },3000);
    setTimeout(()=>{
      this.setState({hideLanding:true});
    },4000);
  }

  requestSites = lang => {
    this.props.actions.fetchSites(lang);
  }

  componentDidMount(){
    this.enterApp();
  }

  render() {
    return (
      <div className={styles.homeContainer} >
        <Loader opened={this.state.entry} startDelay={this.enterApp}/>
        {this.state.entry ? <Language onClick={this.requestSites} opened={this.state.entry} animate={this.state.hideLanding}/> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(homeActions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
