/*
* Author: zzl81cn
* Date: 20170224
* */

/*
* In this case, the color picker will initialize with the color #2ad6d6 or special color. When the color is changed, handleChangeComplete will fire and set the new color to state.
 * */
import React, {Component} from 'react';
import ReactColor, {SketchPicker} from 'react-color';

export default class RCSketchTest extends Component {
	state = {
		background: '#2ad6d6',
	};

	handleChangeComplete = (color) => {
		this.setState({ background: color});
		console.log(this.state.background.hex)
	};

	render() {
		return (
			<SketchPicker
				color={ this.state.background }
				onChangeComplete={ this.handleChangeComplete }
			/>
		);
	}
}