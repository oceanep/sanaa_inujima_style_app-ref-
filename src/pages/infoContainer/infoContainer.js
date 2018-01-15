import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Image from '../../components/Image/Image';

import styles from './infoContainer.scss';

class InfoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const images = [
    {
      original: 'http://lorempixel.com/1000/600/nature/1/',
      thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/2/',
      thumbnail: 'http://lorempixel.com/250/150/nature/2/'
    },
    {
      original: 'http://lorempixel.com/1000/600/nature/3/',
      thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    }];

    return (
      <div className={styles.infoContainer}>
        <Image
          items = {images}
          id = {this.props.params.id}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
