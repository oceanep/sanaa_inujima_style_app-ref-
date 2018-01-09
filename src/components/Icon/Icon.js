import React, { PropTypes, Component} from 'react';
import classNames from 'classnames';

import styles from './Icon.scss';



class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Icon COMPONENT
      </div>
    );
  }

  Icon.propTypes = {
    // style: React.PropTypes.object,
  };
}

function mapStateToProps(state) {
  return {

  };
}

export default Icon;
