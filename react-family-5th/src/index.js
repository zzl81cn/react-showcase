import React from 'react';
import ReactDom from 'react-dom';

// import Hello from './components/Hello/Hello'
import getRouter from './router/router';

ReactDom.render(
    getRouter(), document.getElementById('App')
);