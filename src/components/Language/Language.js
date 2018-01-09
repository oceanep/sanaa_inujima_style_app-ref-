import React, { PropTypes, Component} from 'react';
import classNames from 'classnames';

import styles from './Language.scss';



class Language extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Language COMPONENT
      </div>
    );
  }

  Language.propTypes = {
    // style: React.PropTypes.object,
  };
}

function mapStateToProps(state) {
  return {

  };
}

export default Language;
