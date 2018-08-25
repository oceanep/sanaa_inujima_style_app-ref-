import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImageGallery from 'react-image-gallery';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

import { browserHistory } from 'react-router';

import styles from './Image.scss';

import "react-image-gallery/styles/css/image-gallery.css";


const Image = (props) => {

  return (
    <div className={styles.imageModule}>
      <ImageGallery
        items = {props.items}
        thumbnailLabel = {props.id}
        showFullscreenButton = {false}
        showPlayButton = {false}
        lazyload={true}
      />
      <div className={styles.info}>
        <span>{props.id}</span>
      </div>
<button className={styles.closeButton} onClick={()=>{browserHistory.goBack();}}>{`<< `}</button>
    </div>
  );

  Image.propTypes = {
    // style: React.PropTypes.object,
  };
}

export default Image;
