import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './Loader.scss';

let cx = classNames.bind(styles);

const Loader = (props) => {

  const opened = props.opened;

  // function fireHandler(e){
  //   e.preventDefault;
  //   props.onClick();
  // }
  const loaderClasses = cx({
    loader: true,
    open: opened
    }
  );

  return (
    <div>
      <div
        className={loaderClasses}
      ></div>
    </div>
  )

  Loader.propTypes = {
    // style: React.PropTypes.object,
  }
}

export default Loader;
