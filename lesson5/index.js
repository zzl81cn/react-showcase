/**
 * Created by zzl81cn on 2017/6/16.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore,bindActionCreators } from 'redux'
import { Provider,connect } from 'react-redux'

// Action
function changeText() {
	return {
		type: 'CHANGE_TEXT'
	}
}
function buttonClick() {
	return {
		type: 'BUTTON_CLICK'
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
