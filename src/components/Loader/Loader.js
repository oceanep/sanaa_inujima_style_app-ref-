import React, { PropTypes, Component} from 'react';
import classNames from 'classnames';

import styles from './Loader.scss';



class Loader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Loader COMPONENT
      </div>
    );
  }

  Loader.propTypes = {
    // style: React.PropTypes.object,
  };
}

function mapStateToProps(state) {
  return {

  };
}

export default Loader;
