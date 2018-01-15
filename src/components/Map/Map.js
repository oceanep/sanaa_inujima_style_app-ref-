import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/Icon';

import styles from './Map.scss';


const Map = props => {

  function onClickHandle(id){
    props.clickHandler(id);
    console.log('fired at map level');
  }
console.log(props.ids);
console.log('in maps');
  return (
    <div>
      <div className={styles.screenContainer} >
        <svg viewBox="0 0 750 250" preserveAspectRatio="xMidYMid meet" className={styles.mapSVG}>
          <rect x='0' y='0' width='375' height='250' className={styles.rect1}/>
          <rect x='375' y='0' width='375' height='250' className={styles.rect2}/>
          <foreignObject x='300' y ='125' width="200px" height="200px" className={styles.iconContainer}>
            <Icon
              url={props.icons[`${props.ids[0]}`]}
              id={props.ids[0]}
              onClick={onClickHandle}
            />
          </foreignObject>
        </svg>
      </div>
    </div>
  );

}

Map.propTypes = {
  icons: PropTypes.object,
  ids: PropTypes.array,
};

Map.defaultProps = {

}

export default Map;
