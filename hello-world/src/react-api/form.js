/**
 * Created by zzl81cn on 2017/3/3.
 * Link:
 * 1.https://facebook.github.io/react/docs/forms.html
 * 2.https://www.kancloud.cn/kancloud/react/67584
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class MyForm extends Component {
	/*constructor(props) {
		super(props);
		this.focus = this.focus.bind(this);
	}*/
	constructor(props) {
		super(props);
		this.state = {
			value: '123'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
 	}
 	handleChange(event) {
		this.setState({value: event.target.value})
	}
	handleSubmit(event) {
		window.alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}
	/*focus() {
		this.textInput.focus()
	}*/
	/*handleClick () {
		ReactDOM.findDOMNode(this.refs.myTextInput).focus();
	}*/
	render() {
		/*return (
			<div>
				<input type="text" ref="myTextInput" />
				<input type="button" value="Focus the text input" onClick={this.handleClick} />
			</div>
		)*/
		/*return (
			<div>
				<input type="text" ref={(input) => {this.textInput = input;}}/>
				<input type="button" value="Focus the text input" onClick={this.focus}/>
			</div>
		)*/
		return(
		<form onSubmit={this.handleSubmit}>
			{/*// <h1>Is this {this.state.value}</h1>*/}
			<label>
				Name:<input type="text" value={this.state.value} onChange={this.handleChange}/>
			</label>
			<input type="submit" value="Submit"/>

		</form>
		)
	}
}