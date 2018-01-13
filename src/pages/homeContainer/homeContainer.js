import React, { PropTypes, Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Enter from '../../components/Enter/Enter';
import Loader from '../../components/Loader/Loader';

import styles from './HomeContainer.scss';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Enter/>
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
