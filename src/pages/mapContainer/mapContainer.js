import React, { PropTypes, Component} from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import styles from './MapContainer.scss';



class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        MapContainer COMPONENT
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
