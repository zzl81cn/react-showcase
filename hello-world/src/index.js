/**
 * Created by zzl81cn on 2017/2/22.
 */
// Normal js example
/*let textNode = document.createTextNode("Hello React!");
document.write(textNode.textContent);*/

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
/*import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
	render() {
		return (
			<div>Hello, {this.props.name}!</div>
		)
	}
}
ReactDOM.render(<Hello name="WorldWorld"/>,document.getElementById('appRoot'));*/
import '../assets/styles/style.scss';

// ES6 & jquery
import $ from 'jquery';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// My tutorials NewsLists
import NewsList from './news-list/news-list.jsx';
// Modal example
import ModalDemo from './Components/modal.jsx';

class Hello extends Component{
	render(){
		return (
			<div>Hello, {this.props.name}!</div>
		)
	}
}



// ReactDOM.render(<Hello name="World"/>, document.getElementById('appRoot'));
// ReactDOM.render(<Hello name="World"/>, $('#appRoot')[0]);
ReactDOM.render(<NewsList/>, $('#appRoot')[0]);
//ReactDOM.render(<ModalDemo/>, $('#appRoot')[0]);
// ReactDOM.render(<RCSketch/>, document.getElementById('appRoot'));