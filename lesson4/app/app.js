/**
 * Created by zzl81cn on 2017/6/7.
 */

import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewsList from './NewsList.js';
import '../assets/css/app.css';

/*class HelloWorld extends React.Component {
	render() {
		return (
			<h1>HelloWorld</h1>
		);
	}
}*/

// render(<NewsList/>, document.getElementById('content'));

function get(url) {
	return Promise.resolve($.ajax(url));
}

get('https://hacker-news.firebaseio.com/v0/topstories.json')
	.then(function (stories) {
		return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
	}).then(function (items) {
		render(<NewsList items={items}/>, document.getElementById('content'))
}).catch(function (error) {
	console.error('err', error);
});