import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from "pages/Home/Home";
import Page1 from "pages/Page1/Page1";
import Counter from "pages/Counter/Counter";

/* 注意此处是小括弧 */
/* Home的exact应该是强制默认路由 */
const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/counter" component={Counter}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;