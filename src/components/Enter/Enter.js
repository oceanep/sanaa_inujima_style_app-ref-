import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Enter.scss';

let cx = classNames.bind(styles);

const Enter = (props) => {

  const opened = props.opened;
  const topHalfClasses = cx({
       topHalf: true,
       animating: opened,
       open: opened
    }
  );
  const bottomHalfClasses = cx({
      bottomHalf: true,
      animating: opened,
      open: opened
    }
  );

  return (
    <div className={styles.enterContainer}>
      <div className={topHalfClasses}></div>
      <div className={bottomHalfClasses}></div>
      {props.children}
    </div>

  );

  Enter.propTypes = {
    // style: React.PropTypes.object,
  };
}

export default Enter;
