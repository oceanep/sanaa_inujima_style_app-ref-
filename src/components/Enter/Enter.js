import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './Enter.scss';


const Enter = (props) => {

  return (
    <div className={styles.circle} >{console.log(styles.circle)}</div>
  );

  Enter.propTypes = {
    // style: React.PropTypes.object,
  };
}

export default Enter;
