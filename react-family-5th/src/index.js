import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

// import Hello from './components/Hello/Hello'
import getRouter from './router/router';

/* ReactDOM.render(
    getRouter(), document.getElementById('App')
); */

function renderWithHotReload(RootElement) {
    ReactDOM.render(
        <AppContainer>
            {RootElement}
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
