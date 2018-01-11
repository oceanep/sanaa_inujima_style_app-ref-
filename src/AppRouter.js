import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';

class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router {...this.props} />
    );
  }
}

export default AppRouter;
