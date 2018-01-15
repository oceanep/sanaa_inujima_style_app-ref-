import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Language.scss';


const Language = (props) => {

  function sendSiteReq(e) {
    // e.preventDefault();
    // let lang;
    // if (e.target.innerHTML == "English"){
    //   lang = 'eng';
    // } else if (e.target.innerHTML == "Japanese") {
    //   lang = 'jap';
    // }
    // props.onClick(lang);
    console.log('here');
  }

  return (
    <div>
      <div className={styles.langContainer}>
        <ul className={styles.langList}>
          <li className={styles.langListOp}
              onClick={sendSiteReq}
            >
            <Link to='map/'
              style={{ textDecoration: 'none', color: 'black' }}
              >English
            </Link>
          </li>
          <li className={styles.langListOp}
              onClick={sendSiteReq}
            >
            <Link to='map/'
              style={{ textDecoration: 'none', color: 'black' }}
              >Japanese
            </Link>
          </li>
          <li className={styles.langListOp}>Spanish</li>
        </ul>
      </div>
    </div>
  );

  Language.propTypes = {
    // style: React.PropTypes.object,
  };
}

export default Language;
