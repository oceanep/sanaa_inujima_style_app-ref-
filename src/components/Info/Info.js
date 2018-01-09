import React, { PropTypes, Component} from 'react';
import classNames from 'classnames';

import styles from './Info.scss';



class Info extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Info COMPONENT
      </div>
    );
  }

  Info.propTypes = {
    // style: React.PropTypes.object,
  };
}

function mapStateToProps(state) {
  return {

  };
}

export default Info;
