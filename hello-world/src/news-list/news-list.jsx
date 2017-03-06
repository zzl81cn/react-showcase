/**
 * Created by zzl81cn on 2017/2/23.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// ReactColor sketchPicker
import RCSketch from '../Components/react-color.jsx';
import RCSketchTest from '../Components/react-color-control.jsx';
import RCSwatchTest from '../Components/react-color-swatch-onchange.jsx';

import NewsHeader from './news-header.jsx';
import NewsItem from './news-item.jsx';
import NoteList from '../react-api/this-child.jsx';
import MyForm from '../react-api/form.js';
import LifeCycle from '../react-api/lifecycle.js';
import UserGist from '../react-api/ajax.js'

export default class NewsList extends Component {
	render(){
		// 对于父子组件间的通信, 可以使用属性传递. 子组件可以使用 this.props 访问到父组件传入的属性数据.
		let testData = {
			"by" : "bane",
			"descendants" : 49,
			"id" : 11600137,
			"kids" : [ 11600476, 11600473, 11600501, 11600463, 11600452, 11600528, 11600421, 11600577, 11600483 ],
			"score" : 56,
			"time" : 1461985332,
			"title" : "Yahoo's Marissa Mayer could get $55M in severance pay",
			"type" : "story",
			"url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"
		};
		return (
			// Single item
			/*<div className="news-list">
				<NewsHeader/>
				<NewsItem item={testData} rank={1}/>
				<RCSketch/>
				<RCSketchTest/>
				<RCSwatchTest/>
			</div>*/
			// Mutiple item
			<div className="news-list">
				<NewsHeader/>
				{/*AJAX*/}
				<UserGist source="https://api.github.com/users/octocat/gists" />
				<LifeCycle/>
				<MyForm/>
				{/*EX: this.props.children */}
				<NoteList>
					<span>Ah ha!</span>
					<span>Hello</span>
					<span>World!</span>
				</NoteList>

				<div className="news-list-item">
					{
						(this.props.items).map(function (item, index) {
							return (
								<NewsItem key={item.id} item={item} rank={index+1} />
							)
						})
					}
				</div>
				<RCSketch/>
				<RCSketchTest/>
				<RCSwatchTest/>
			</div>
		)
	}
}