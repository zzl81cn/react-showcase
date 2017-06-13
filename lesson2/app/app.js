/**
 * Created by zzl81cn on 2017/6/7.
 */
// document.write('Hello webpack!');
// import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

class HelloWorld extends React.Component {
	render() {
		return (
			<div>Hello World!</div>
		);
	}
}

render(<HelloWorld/>, document.getElementById('content'));