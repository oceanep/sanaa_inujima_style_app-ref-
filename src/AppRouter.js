import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from './actions/homeActions';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.props.actions.fetchSites();
  }

  render() {
    return (
      <Router {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(homeActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
