import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { push } from 'react-router-redux';

import classNames from 'classnames';

import styles from './Icon.scss';



const Icon = (props) => {

  let bgImg = {
      background: `url(${props.url}) 0 0 no-repeat`,
      backgroundSize: '50px'
    };

    return (
      // <Link to={`map/info/${props.id}`} >
        <div style={bgImg} className={styles.iconImg} onClick={props.onClick.bind(this,props.id)}></div>
      // </Link>
    );


  Icon.propTypes = {
    url: PropTypes.string,
    id: PropTypes.string,
  };
}

export default Icon;
