/**
 * Created by zzl81cn on 2017/6/7.
 */

import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import NewsList from './NewsList.js';
import '../assets/css/load.css';
import '../assets/css/app.css';

function get(url) {
	// 将现有对象转为一个新的Promise对象并返回
	return Promise.resolve($.ajax(url));
}

/*get('https://hacker-news.firebaseio.com/v0/topstories.json')
	.then(function (stories) {
		// 将多个 Promise 实例，包装成一个新的 Promise实例并返回
		return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
	}).then(function (items) {
		render(<NewsList items={items}/>, document.getElementById('content'))
}).catch(function (error) {
	console.error('err', error);
});*/

get('http://localhost:8080/assets/json/result.json')
	.then(items => {
		render(<NewsList items={items}/>, document.getElementById('content'))
	})
	.catch( error => console.log('err', error));