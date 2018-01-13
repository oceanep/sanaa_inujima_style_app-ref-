import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './Loader.scss';


const Loader = (props) => {

  return (
    <div>
      <div className={styles.circle} ></div>
    </div>
  );

  Loader.propTypes = {
    // style: React.PropTypes.object,
  };
}

export default Loader;
