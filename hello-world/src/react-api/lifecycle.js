/**
 * Created by zzl81cn on 2017/3/3.
 * Link: https://www.kancloud.cn/kancloud/react/67585
 */
import React from 'react';

const LifeHello = React.createClass({
	getInitialState: function () {
		return {
			opacity: 1.0
		};
	},

	componentDidMount: function () {
		this.timer = setInterval(function () {
			var opacity = this.state.opacity;
			opacity -= .05;
			if (opacity < 0.1) {
				opacity = 1.0;
			}
			this.setState({
				opacity: opacity
			});
		}.bind(this), 100);
	},

	render: function () {
		return (
			<div style={{opacity: this.state.opacity}}>
				Hello {this.props.name}
			</div>
		);
	}
});

export default LifeHello;