import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './Enter.scss';


const Enter = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.topHalf}></div>
      <div className={styles.bottomHalf}></div>
    </div>
  );

  Enter.propTypes = {
    // style: React.PropTypes.object,
  };
}

export default Enter;
