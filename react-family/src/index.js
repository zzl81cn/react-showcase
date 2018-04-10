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
import {AppContainer} from 'react-hot-loader';
import Hello from './components/Hello/Hello';
import getRouter from './router/router';

// init
renderWithHotReload(getRouter());

// HMR
if(module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('./router/router').default;
    renderWithHotReload(getRouter());
  });
}

/* ReactDOM.render(
  getRouter(), document.getElementById('app')
); */

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>{RootElement}</AppContainer>,
    document.getElementById('app')
  )
}
// <Hello/>, document.getElementById('app')