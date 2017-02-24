import React, {Component} from 'react';
import ReactColor, {SketchPicker, BlockPicker} from 'react-color';

export default class RCSketch extends Component {
	render() {
		return (
			<div className="react-color">
				<div className="container">
					<SketchPicker/>
				</div>
				<div className="container">
					<BlockPicker/>
				</div>
			</div>
		)
	}
}