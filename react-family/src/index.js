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
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from 'reduxPath/store';
import Hello from './components/Hello/Hello';
import getRouter from 'router/router';

// init
renderWithHotReload(getRouter());

// HMR
if(module.hot) {
  module.hot.accept('router/router', () => {
    const getRouter = require('router/router').default;
    renderWithHotReload(getRouter());
  });
}

/* ReactDOM.render(
  getRouter(), document.getElementById('app')
); */
/**
 * 所有容器组件都可以访问 Redux store，所以可以手动监听它。一种方式是把它以 props 的形式传入到所有容器组件中。但这太麻烦了，因为必须要用 store 把展示组件包裹一层，仅仅是因为恰好在组件树中渲染了一个容器组件。
 * 建议的方式是使用指定的 React Redux 组件 来 魔法般的 让所有容器组件都可以访问 store，而不必显示地传递它。只需要在渲染根组件时使用即可。
 * Provider--组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。
  */

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>{RootElement}</Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}
// <Hello/>, document.getElementById('app')