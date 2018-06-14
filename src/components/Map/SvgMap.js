import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Map.scss';

let cx = classNames.bind(styles);

export default (ComposedComponent) => {

  class SvgMap extends Component {
    constructor(props) {
      super(props);
      this.cx = 0;
      this.cy = 0;

      this.width = +1654.4;
      this.height = +1195.9;

      if (this.props.height > this.props.width) {
        this.cx = this.width/2;
        this.cy = this.props.height/4;
      } else {
        this.cx = this.props.width/2;
        this.cy = this.props.height/2;
      }
      this.state = {
        matrix: [1, 0, 0, 1, 0 - this.cx, 0 - this.cy],
        dragging: false,
        ogScale: 1,
        zoomScale: 1,
        lHeight: 0 - 1195.9/2,
        uHeight: +1195.9/4,
        lWidth: 0 - 1654.4/2,
        uWidth: +1654.4/4,
        opened: false
      };
    }



    componentDidMount(){
      setTimeout(() => {
        this.setState({opened: true});
      }, 2000);
    }

    pan = (dx,dy) => {
      const m = this.state.matrix;
      const lHeight = this.state.lHeight;
      const uHeight = this.state.uHeight;
      const lWidth = this.state.lWidth;
      const uWidth = this.state.uWidth;

      m[4] += dx;
      m[5] += dy;

      if ( m[4] <= lWidth ){
        m[4] = lWidth;
      } else if ( m[4] >= uWidth ){
        m[4] = uWidth;
      }

      if ( m[5] <= lHeight ){
        m[5] = lHeight;
      } else if ( m[5] >= uHeight ){
        m[5] = uHeight;
      }


      this.setState({ matrix: m });
    }
// store original width and binding with (which will multiply with scale)
//when binding with has doubled, allow no more up scaling, when halfed, same
    zoom = scale => {
      const m = this.state.matrix;
      // const ogS = this.state.ogScale;
      // let zS = this.state.zoomScale;
      let { lHeight, uHeight, lWidth, uWidth} = this.state;
      const len = m.length;
      console.log(`scale: ${scale}`);
      //
      // zS += (1-scale) * (ogS);
      //
      // if ( 0 > zS > 2 * ogS) {
        for (let i = 0; i < len; i++){
          m[i] *= scale;
        }

        m[4] += (1-scale) * (this.props.height/2);
        m[5] += (1-scale) * (this.props.width/2);

        lHeight += (1-scale) * (this.props.height/2);
        uHeight += (1-scale) * (this.props.height/2);

        lWidth += (1-scale) * (this.props.width/2);
        uWidth += (1-scale) * (this.props.width/2);

        this.setState({ matrix: m, lHeight, uHeight, lWidth, uWidth });
      // }

    }

    onWheel = e => {
      if (e.deltaY < 0) {
        this.zoom(1.05);
      } else {
        this.zoom(0.95);
      }
    }

    onDragStart = e => {
      // Find start position of drag based on touch/mouse coordinates.
      const startX = typeof e.clientX === 'undefined' ? e.changedTouches[0].clientX : e.clientX;
      const startY = typeof e.clientY === 'undefined' ? e.changedTouches[0].clientY : e.clientY;

      // Update state with above coordinates, and set dragging to true.
      const state = {
        dragging: true,
        startX,
        startY,
      };

      this.setState(state);
    }

    onDragMove = e => {
      // First check if the state is dragging, if not we can just return
      // so we do not move unless the user wants to move
      if (!this.state.dragging) {
        return;
      }

      // Get the new x and y coordinates
      const x = typeof e.clientX === 'undefined' ? e.changedTouches[0].clientX : e.clientX;
      const y = typeof e.clientY === 'undefined' ? e.changedTouches[0].clientY : e.clientY;

      // Take the delta where we are minus where we came from.
      const dx = x - this.state.startX;
      const dy = y - this.state.startY;

      // Pan using the deltas
      this.pan(dx, dy);

      // Update the new startX and startY position
      // because a drag is likely a continuous movement
      this.setState({
        startX: x,
        startY: y,
      });
    }

    onDragEnd = () => {
      this.setState({ dragging: false });
    }

    render () {
      const {...props} = this.props;

      this.classes = cx({
        screenContainer: true,
        opened: this.state.opened
      });

      return (
        <div>
          <div className={this.classes} >
            <svg
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 1654.4 1195.9"
              preserveAspectRatio="xMidYMid meet"
              className={styles.mapSVG}

              onMouseDown={this.onDragStart}
              onTouchStart={this.onDragStart}
              onMouseMove={this.onDragMove}
              onTouchMove={this.onDragMove}
              onMouseUp={this.onDragEnd}
              onTouchEnd={this.onDragEnd}
              onWheel={this.onWheel}
            >
              <g id="Water">
                <rect className={styles.st0} width="1654.4" height="1195.9"/>
              </g>
              <g transform={`matrix(${this.state.matrix.join(' ')})`}>
                <ComposedComponent
                    {...props}
                    pan={this.pan}
                    zoom={this.zoom}
                  >
                </ComposedComponent>
              </g>

            </svg>
          </div>
        </div>
      )
    }
  }

  return SvgMap;
};
