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
import NoteList from '../react-api/notelist-this-child';
import MyForm from '../react-api/form.js';
import LifeCycle from '../react-api/lifecycle.js';
import UserGist from '../react-api/ajax.js'

export default class NewsList extends Component {
	/*
	 https://segmentfault.com/q/1010000002958539
	* 需要理解的是，props是一个父组件传递给子组件的数据流，这个数据流可以一直传递到子孙组件。而state代表的是一个组件内部自身的状态（可以是父组件、子孙组件）。
	 改变一个组件自身状态，从语义上来说，就是这个组件内部已经发生变化，有可能需要对此组件以及组件所包含的子孙组件进行重渲染。
	 而props是父组件传递的参数，可以被用于显示内容，或者用于此组件自身状态的设置（部分props可以用来设置组件的state），不仅仅是组件内部state改变才会导致重渲染，父组件传递的props发生变化，也会执行。
	 既然两者的变化都有可能导致组件重渲染，所以只有理解props与state的意义，才能很好地决定到底什么时候用props或state。
	 例如：
	 props和state都是用于描述component状态的，并且这个状态应该是与显示相关的。

	 State
	 如果component的某些状态需要被改变，并且会影响到component的render，那么这些状态就应该用state表示。 例如：一个购物车的component，会根据用户在购物车中添加的产品和产品数量，显示不同的价格，那么“总价”这个状态，就应该用state表示。

	 Props
	 如果component的某些状态由外部所决定，并且会影响到component的render，那么这些状态就应该用props表示。 例如：一个下拉菜单的component，有哪些菜单项，是由这个component的使用者和使用场景决定的，那么“菜单项”这个状态，就应该用props表示，并且由外部传入。
	* */
	constructor(props) {
		super(props);
		this.state = {
			primaryColor: '#2ad6d6',
			secondColor: {
				h: 180,
				s: 0.68,
				l: 0.50,
				a: 1,
			}
		};
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(primaryColor) {
		this.setState({primaryColor})
	}
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
				{/*ReactColor*/}
				<RCSketchTest primaryColor={ this.state.primaryColor } onChange={ this.handleChange }/>

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
			</div>
		)
	}
}