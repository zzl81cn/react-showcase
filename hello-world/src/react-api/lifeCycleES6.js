/**
 * Created by zzl81cn on 2017/6/16.
 */

import React, {Component} from "react"

export default class lifeCycleES6 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			opacity: 1.0
		}
	}

	componentDidMount() {
		this.timer = setInterval(function () {
			var opacity = this.state.opacity;
			opacity -= 0.05;
			if(opacity < 0.1){
				opacity = 1.0
				// opacity += 0.05
			} /*else {*/
				this.setState({
					opacity: opacity
				})
			/*}*/
		}.bind(this), 100)
	}
	render() {
		return (
			<div style={{opacity: this.state.opacity}}>
				<h1>Hello {this.props.name}</h1>
			</div>
		)
	}
}