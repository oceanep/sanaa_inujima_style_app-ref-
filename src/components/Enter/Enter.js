import React, { PropTypes, Component} from 'react';
import classNames from 'classnames';

import styles from './Enter.scss';



class Enter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        ENTER COMPONENT
      </div>
    );
  }

  Enter.propTypes = {
    // style: React.PropTypes.object,
  };
}
function mapStateToProps(state) {
  return {

  };
}


export default Enter;
