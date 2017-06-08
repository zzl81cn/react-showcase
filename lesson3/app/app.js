/**
 * Created by zzl81cn on 2017/6/7.
 */

import React from 'react';
import { render } from 'react-dom';
import NewsList from './NewsList.js';

class HelloWorld extends React.Component {
	render() {
		return (
			<h1>HelloWorld</h1>
		);
	}
}

render(<NewsList/>, document.getElementById('content'));