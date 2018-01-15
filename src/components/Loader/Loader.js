import React, { PropTypes } from 'react';
import classNames from 'classnames';

import styles from './Loader.scss';



const Loader = (props) => {

  function fireHandler(e){
    e.preventDefault;
    props.onClick();
  }

  return (
    <div
      className={styles.circle}
      onClick={fireHandler}
      >

    </div>
  )

  Loader.propTypes = {
    // style: React.PropTypes.object,
  }
}

export default Loader;
