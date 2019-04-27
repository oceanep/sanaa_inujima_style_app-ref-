import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router';
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
  ForeignObjSvg,
  SeaSvg,
  LakeSvg,
  RoutesSvg,
} from '../../svgPaths';

import Icon from '../Icon/Icon';

import SvgMap from './SvgMap';

import styles from './Map.scss';


const Map = props => {

  function onClickHandle(id){
    props.clickHandler(id);
  }

  function mapIconsToArray({...props}){
    const renderedIcons = props.ids.map((id) =>
      <Link to={`map/${id}`} key={id}>
        <Icon
          key={id}
          url={props.icons[`${id}`]}
          id={id}
          onClick={onClickHandle}
        />
      </Link>
    );
    return (renderedIcons);
  }

const icons = mapIconsToArray(props);

  return (
    <g>
      <SeaSvg/>
      <GroundSvg/>
      <ContourSvg/>
      <LakeSvg/>
      <RoadSvg/>
      <BuildingSvg/>
      <RoutesSvg/>

      <IconSvg/>
      <ForeignObjSvg>{icons}</ForeignObjSvg>
    </g>
  );

}

Map.propTypes = {
  icons: PropTypes.object,
  ids: PropTypes.array,
};

Map.defaultProps = {

}

export default SvgMap(Map);
