//component.js
'use strict';

import React from 'react';
require('./App.scss');

let Login = React.createClass({
	getInitialState: function () {
		return {
			clicked: false
		}
	},
	// 组件内部行为逻辑
	getDrogenKillingSword: function() {
		console.info('Ah ha! Dragen sword.');
		this.setState({
			clicked: true
		})
	},

	render: function () {
		let $nodes = ['z', 'z', 'l'].map(function (str) {
			return(<span>{str}</span>)
		});
		// 返回的节点只能有一个根元素，例如Welcome外面套着的div
		var clicked = this.state.clicked;
		if(clicked) return (
			<div>
				<p>Welcome to React&Webpack worlds!{$nodes}</p>
				{/*组件内部行为逻辑*/}
				<button disabled="disabled" onClick={this.getDrogenKillingSword}>Free</button>
				<button onClick={this.props.clickCallback}>callBack</button>
			</div>
		);
		else return (
			<div>
				<p>Welcome to React&Webpack worlds!{$nodes}</p>
				{/*组件内部行为逻辑*/}
				<button onClick={this.getDrogenKillingSword}>Free</button>
				<button onClick={this.props.clickCallback}>callBack</button>
			</div>
		);
	}
	/*render() {
		return(<div>Welcome to login</div>);
	}*/
});

export default Login;