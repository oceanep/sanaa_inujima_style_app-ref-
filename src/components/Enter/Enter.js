import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Enter.scss';


const Enter = (props) => {

  return (
    <div className={styles.enterContainer}>
      <div className={styles.topHalf}></div>
      <div className={styles.bottomHalf}></div>
      {props.children}
    </div>

  );

  Enter.propTypes = {
    // style: React.PropTypes.object,
  };
}

export default Enter;
