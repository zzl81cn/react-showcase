import React, {Component} from 'react';

import './Page1.css';
// import './Page1.less';
import image from './images/gdpr_icons_process.png';

export default class Page1 extends Component {
  render () {
    return (
      <div className="page-box">
      This is Page1.

      <img src={image} alt="xxx"/>
      </div>
    )
  }
}