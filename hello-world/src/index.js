'use strict';
/**
 * Created by zzl81cn on 2017/2/22.
 *
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
import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// redux
/*import {createStore} from 'redux';
const store = createStore(fn);
const state = store.getState();*/

// My tutorials NewsLists
import NewsList from './news-list/news-list.jsx';
// Modal example
// import ModalDemo from './Components/modal.jsx';

// Normal HelloWorld Components
/*class Hello extends Component{
	render(){
		return (
			<div>Hello, {this.props.name}!</div>
		)
	}
}*/

// Test props PropTypes&defaultProps
/*const data = 'xyz',
	data1 = 456;
const propTypes = {
	name: React.PropTypes.string,
}
const defaultProps = {
	name: '789',
}
class Hello extends Component{
	render(){
		return (
			<div>Hello, {this.props.name}!</div>
		)
	}
}
Hello.propTypes =  propTypes;
Hello.defaultProps = defaultProps;*/

// ReactDOM.render(<Hello name={data}/>, document.getElementById('appRoot'));
// ReactDOM.render(<Hello />, document.getElementById('appRoot'));
// ReactDOM.render(<Hello name="World"/>, $('#appRoot')[0]);
// ReactDOM.render(<NewsList/>, $('#appRoot')[0]);
//ReactDOM.render(<ModalDemo/>, $('#appRoot')[0]);
// ReactDOM.render(<RCSketch/>, document.getElementById('appRoot'));

// Define
function getData(url) {
	/**
	 * Use ES6 Generator's genesis Promise
	 * 将 jQuery 生成的deferred对象，转为一个新的 Promise 对象
	 * 等价于 new Promise(resolve => resolve($.ajax(url)))
	 *  */
	return Promise.resolve($.ajax(url));
}
// Call
getData('https://hacker-news.firebaseio.com/v0/topstories.json')
	.then(function (stories) {
		// console.log('Data is: ', stories.slice(0, 10));
		// [13729979, 13729517, 17172287, 17172287, 17175941, 17173051, 17175366, 17172092, 17176895, 17171614]

		return Promise.all(
			stories.slice(0, 10).map(itemId => getData('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json'))
		);
		// {"by":"blondie9x","descendants":22,"id":13729979,"kids":[13730353,13730307,13730309,13730289,13730224,13730400,13730185,13730123],"score":75,"time":1487995398,"title":"Amazon Deforestation, Once Tamed, Comes Roaring Back","type":"story","url":"https://www.nytimes.com/2017/02/24/business/energy-environment/deforestation-brazil-bolivia-south-america.html"}
	}).then(function (items) {
		ReactDOM.render(<NewsList items={items}/>, $('#appRoot')[0]);
	}).catch(function (e) {
		console.log('Oh Err', e);
	});

