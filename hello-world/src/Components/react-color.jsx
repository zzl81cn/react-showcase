/*
 * Author: zzl81cn
 * Date: 20170224
 * */

import React, {Component} from 'react';
import ReactColor, {SketchPicker, BlockPicker} from 'react-color';

export default class RCSketch extends Component {
	render() {
		return (
			<div className="react-color">
				<div className="container">
					<h1>SketchPicker</h1>
					<SketchPicker/>
				</div>
				<div className="container">
					<h1>BlockPicker</h1>
					<BlockPicker/>
				</div>
			</div>
		)
	}
}