//main.js
'use strict';

/*
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import Component from './component'

let main = function () {
	render(<Component/>, document.getElementById('main'));
}

main();*/

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import LoginHandler from './component';

/*let App = React.createClass({
	render() {
		return (
			<div className="nav">
				<Link to="app">Home</Link>
				<Link to="login">Login</Link>
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
	React.render(<Handler/>, document.getElementById('react'));
});*/

let App = React.createClass({
	// 调用子组件的接口（方法）
	parentRefFn: function () {
		this.refs.getSwordBtn.getDrogenKillingSword();
	},
	theirCallbackFn: function () {
		console.log("xxx");
	},
	render() {
		return (
			<div>
				<p>parent components paragraph</p>
				{/*调用子组件的接口（方法），在对应调用组件上加入ref属性，再到父组件的逻辑处理，如上面的parentRefFn方法*/}
				<LoginHandler ref="getSwordBtn"/>
				{/*被子组件调用父组件的方法,父组件可以直接将需要执行的函数传递给子组件*/}
				<LoginHandler clickCallback={this.theirCallbackFn}/>
				<button onClick={this.parentRefFn}>parentsBtnFn</button>
			</div>
		)
	}
});

ReactDOM.render(<App/>, document.getElementById('react'));
