import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import mui from 'material-ui';
import * as homeActions from '../actions/homeActions';

import { Link } from 'react-router';

class Information extends Component {

  static propTypes = {
    location: React.PropTypes.object.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired
  };

  getStyles() {
    return {
      root: {
        paddingTop: 64
      }
    }
  }


  componentDidMount() {
  }

  constructor(props) {
    super(props);
  }


  render() {
    let styles = this.getStyles()

    return <div style={styles.root}>
      <h2>Information</h2>
      <div>
        <button
            className={classNames({
              btn: true,
              accept: true
            })}
          >
          Press!
        </button>
      </div>


    </div>
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps
)(Information);
