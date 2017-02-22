/**
 * Created by zzl81cn on 2017/2/20.
 */
import React from 'react';

let Hello = React.createClass({
	render: function() {
		return (
			<div>Hello, {this.props.name}!</div>
		)
	}
})