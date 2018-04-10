// document.getElementById('app').innerHTML = 'Welcome to webpack!';
// use es6
/* var func = str => {
  document.getElementById('app').innerHTML = str;
}
func('Now is babel.'); */

/* import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  <div>Hello React!</div>, document.getElementById('app')
); */

// use module
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello/Hello';
import getRouter from './router/router';

ReactDOM.render(
  getRouter(), document.getElementById('app')
);
// <Hello/>, document.getElementById('app')