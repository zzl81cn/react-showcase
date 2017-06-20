/**
 * Created by zzl81cn on 2017/6/16.
 * https://segmentfault.com/a/1190000004355491
 */

/**
 * 0 引入依赖包
 * 我们需要react的本体、react-dom的render方法、redux的createStore和bindActionCreators方法，以及react-redux的Provider和connect方法
 * */
import React from 'react'
import { render } from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'

const CHANGE_TEXT = 'CHANGE_TEXT';
const BUTTON_CLICK = 'BUTTON_CLICK';

// Action(定义两种事件：“文字来回切换”、“按钮点击”。)
function changeText() {
	return {
		type: CHANGE_TEXT
	}
}
function buttonClick() {
	return {
		type: BUTTON_CLICK
	}
}

const initialState = {
	text: 'Hello'
}

function myApp(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_TEXT':
			return {
				text: state.text == 'Hello' ? 'Stark' : 'Hello'
			};
			// break;
		case 'BUTTON_CLICK':
			return {
				text: 'You just click button.'
			};
			// break;
		default:
			return {
				text: 'Hello'
			}
	}
}

let store = createStore(myApp);

class Hello extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.actions.changeText();
	}
	render() {
		return (
			<h1 onClick={this.handleClick}>{this.props.text}</h1>
		)
	}
}

class Change extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.actions.buttonClick();
	}
	render() {
		return (
			<button onClick={this.handleClick}>change</button>
		)
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {actions, text} = this.props;
		return (
			<div>
				<Hello actions={actions} text={text}/>
				<Change actions={actions}/>
			</div>
		)
	}
}

/**
 * 5 连接React组件和Redux
 * mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的？
 * 由于我们这个应用太小，只有一个属性，所以只有text这个字段。
 * */
function mapStateToProps(state) {
	return {
		text: state.text
	}
}
// mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({changeText: changeText, buttonClick: buttonClick}, dispatch)
	}
}
// 这里实际上给了App两个props：text和actions，即第4步中的那段注释
App = connect(mapStateToProps, mapDispatchToProps)(App);

// 6 Render us App

render(
	<Provider store={store}><App/></Provider>, document.getElementById('root')
);