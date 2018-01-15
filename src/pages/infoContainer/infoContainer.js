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

  setImages = () => {
    let images = [];

    for (let image in this.props.images){
      images.push({original: this.props.images[image], thumbnail: this.props.images[image]});
    }
    let imageSet = images;
    return imageSet;
  }

  render() {

    return (
      <div className={styles.infoContainer}>
        <Image
          items = {this.setImages()}
          id = {this.props.name}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    images: Object.assign({},state.mapReducer.siteImages[ownProps.params.id].images),
    name: state.mapReducer.siteInfo[ownProps.params.id].name

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
