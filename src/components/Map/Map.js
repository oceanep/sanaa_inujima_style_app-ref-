import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import * as SVGs from '../../svgPaths/';
import {
  GroundSvg,
  PathSvg,
  ContourSvg,
  BuildingSvg,
  RoadSvg,
  SanaaSvg,
  ScaleCompassSvg,
  IconSvg,
  TextSvg,
  ForeignObjSvg
} from '../../svgPaths';

import Icon from '../Icon/Icon';

import SvgMap from './SvgMap';

import styles from './Map.scss';


const Map = props => {

  function onClickHandle(id){
    props.clickHandler(id);
    console.log('fired at map level');
  }

  function mapIconsToArray({...props}){
    const renderedIcons = props.ids.map((id) =>
      <Icon
        key={id}
        url={props.icons[`${id}`]}
        id={id}
        onClick={onClickHandle}
      />
    );
    console.log(icons);
    return (renderedIcons);
  }

const icons = mapIconsToArray(props);
console.log(icons);

  return (
    <g>
      <GroundSvg/>
      <PathSvg/>
      <ContourSvg/>
      <BuildingSvg/>
      <RoadSvg/>
      <SanaaSvg/>
      <ScaleCompassSvg/>
      <IconSvg/>
      <TextSvg/>
      <ForeignObjSvg>{icons}</ForeignObjSvg>
    </g>
  );

}
//
// <svg viewBox="0 0 750 250" preserveAspectRatio="xMidYMid meet" className={styles.mapSVG}>
//   <rect x='0' y='0' width='375' height='250' className={styles.rect1}/>
//   <rect x='375' y='0' width='375' height='250' className={styles.rect2}/>
//   <foreignObject x='300' y ='125' width="200px" height="200px" className={styles.iconContainer}>
//     <Icon
//       url={props.icons[`${props.ids[0]}`]}
//       id={props.ids[0]}
//       onClick={onClickHandle}
//     />
//   </foreignObject>
// </svg>

Map.propTypes = {
  icons: PropTypes.object,
  ids: PropTypes.array,
};

Map.defaultProps = {

}

export default SvgMap(Map);
