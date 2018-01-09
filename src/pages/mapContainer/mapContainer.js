import React, { PropTypes, Component} from 'react';
import classNames from 'classnames';
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

  MapContainer.propTypes = {
    // style: React.PropTypes.object,
  };
}

function mapStateToProps(state) {
  return {

  };
}

export default MapContainer;
