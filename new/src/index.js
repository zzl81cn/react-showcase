/**
 * Created by zzl81cn on 2017/2/22.
 */
// let textNode = document.createTextNode("Hello React!");
// document.write(textNode.textContent);

//	ES5
/*let React = require('react');
let ReactDOM = require('react-dom');

// require('./style.scss');

let Hello = React.createClass({
	render: function render() {
		return <div> Hello {this.props.name}</div>;
	}
});

ReactDOM.render(
	<Hello name="World!"/>,
	document.getElementById('appRoot')
);*/

// ES6
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
	render() {
		return (
			<div>Hello, {this.props.name}!</div>
		)
	}
}
ReactDOM.render(<Hello name="WorldWorld"/>,document.getElementById('appRoot'));
