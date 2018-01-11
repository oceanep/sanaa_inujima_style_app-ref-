import React, { PropTypes, Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import styles from './HomeContainer.scss';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        HomeContainer COMPONENT
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
