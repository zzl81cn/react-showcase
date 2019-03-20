import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
/* 引入react-redux的Provider方法，将store作为参数传入 */
import {Provider} from 'react-redux';
import store from "./redux/store";

// import Hello from './component/Hello/Hello'
import getRouter from 'router/router';

/* ReactDOM.render(
    getRouter(), document.getElementById('App')
); */

function renderWithHotReload(RootElement) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('App')
    )
};

renderWithHotReload(getRouter());

if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}
