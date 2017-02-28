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
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// My tutorials NewsLists
import NewsList from './news-list/news-list.jsx';
// Modal example
import ModalDemo from './Components/modal.jsx';

// HelloWorld Components
/*class Hello extends Component{
	render(){
		return (
			<div>Hello, {this.props.name}!</div>
		)
	}
}*/


// ReactDOM.render(<Hello name="World"/>, document.getElementById('appRoot'));
// ReactDOM.render(<Hello name="World"/>, $('#appRoot')[0]);
// ReactDOM.render(<NewsList/>, $('#appRoot')[0]);
//ReactDOM.render(<ModalDemo/>, $('#appRoot')[0]);
// ReactDOM.render(<RCSketch/>, document.getElementById('appRoot'));

// Define
function get(url) {
	return Promise.resolve($.ajax(url));
}
// Call
get('https://hacker-news.firebaseio.com/v0/topstories.json')
	.then(function (stories) {
		// console.log('Data is: ', stories.slice(0, 2));
		/*
		 * [13729979,13729517]
		 * */
		return Promise.all(stories.slice(0, 10).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
		// {"by":"blondie9x","descendants":22,"id":13729979,"kids":[13730353,13730307,13730309,13730289,13730224,13730400,13730185,13730123],"score":75,"time":1487995398,"title":"Amazon Deforestation, Once Tamed, Comes Roaring Back","type":"story","url":"https://www.nytimes.com/2017/02/24/business/energy-environment/deforestation-brazil-bolivia-south-america.html"}
	}).then(function (items) {
	ReactDOM.render(<NewsList items={items}/>, $('#appRoot')[0]);
}).catch(function (e) {
	console.log('Oh Err', e);
});

