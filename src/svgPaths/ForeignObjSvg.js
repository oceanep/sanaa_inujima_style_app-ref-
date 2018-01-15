import React from 'react';
import styles from './ForeignObjSvg.scss';

export default (props) => {
  return (
    <g id="IconContainer">
      <foreignObject x='1166.9' y ='446.3' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[0]}
      </foreignObject>
      <foreignObject x='1170.2' y ='361.3' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[1]}
      </foreignObject>
      <foreignObject x='1056.9' y ='269.5' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[2]}
      </foreignObject>
      <foreignObject x='936.6' y ='304.8' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[3]}
      </foreignObject>
      <foreignObject x='802.7' y ='326.2' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[4]}
      </foreignObject>
      <foreignObject x='820' y ='411.9' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[5]}
      </foreignObject>
      <foreignObject x='749.2' y ='401.4' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[6]}
      </foreignObject>
      <foreignObject x='702.2' y ='511.5' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[7]}
      </foreignObject>
      <foreignObject x='647.4' y ='433.5' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[8]}
      </foreignObject>
      <foreignObject x='821.5' y ='543.6' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[9]}
      </foreignObject>
      <foreignObject x='810.7' y ='776' height="50px" width="50px" className={styles.iconContainer}>
        {props.children[10]}
      </foreignObject>
    </g>

  )
}
