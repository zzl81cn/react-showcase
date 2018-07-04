// document.getElementById('app').innerHTML = 'Welcome to webpack!';
// use es6 arrow function
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
import {Provider} from 'react-redux';
import store from 'reduxPath/store'

import Hello from './components/Hello/Hello';
import getRouter from 'router/router';

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

// Provider--组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。
function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>{RootElement}</Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
// <Hello/>, document.getElementById('app')