/**
 * Created by zzl81cn_pre on 2016/12/27.
 * 入口文件代码如下
 */
import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './components/Login';

let App = React.createClass({
	render() {
		return (
			<div className="nav">
				<Link to="app">Home</Link>
				<Link to="login">Login</Link>

				 {/*this is the importTant part */}
				<RouteHandler/>
			</div>
		);
	}
});

let routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="login" path="/login" handler={LoginHandler}/>
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.body);
});
/*
文章头部是我们将要用的react和react-router的插件包引进来。同事我们还引入login.js作为我们的Login React 组件。接着，我们使用React 创建一个类。这个例子中，其实就是一个简单的导航条会出现所有的子组件中。我们简单的Link到我们的路由:App和Login.然后React route将会被RouteHandler组件初始化。

在这个App中，我们定义路由并且指定了相应的处理程序（React 组件）。我们定义了我们的根路径为app，并且其他的地址将会是App的子组件。这个例子中，我们添加了一个登录页面，用于用户登录到App中。

最后，React-router会将我们定义的一切加载到document.body中来。这就是index.html转变成我们React App.

*/
