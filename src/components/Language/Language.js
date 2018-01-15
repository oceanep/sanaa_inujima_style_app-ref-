import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Language.scss';

let cx = classNames.bind(styles);

const Language = (props) => {

  const classes = cx({
    langContainer: true,
    opened: props.animate
  });
  return (
    <div>
      <div className={classes}>
        <ul className={styles.langList}>
          <li className={styles.langListOp}
            >
            <Link to='map/'
              style={{ textDecoration: 'none', color: 'black' }}
              >English
            </Link>
          </li>
          <li className={styles.langListOp}
            >
            <Link to='map/'
              style={{ textDecoration: 'none', color: 'black' }}
              >Japanese
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  Language.propTypes = {
    // style: React.PropTypes.object,
  };
}

export default Language;
