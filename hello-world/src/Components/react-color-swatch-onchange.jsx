/*
* Author: zzl81cn
* Date: 20170224
* */

/*
* In this case, the color picker will initialize with the color #2ad6d6 or special color. When the color is changed, handleChangeComplete will fire and set the new color to state.
 * */
import React, {Component} from 'react';
import ReactColor, {SwatchesPicker} from 'react-color';

export default class RCSwatchTest extends Component {


	handleChange (color, event) {
		color = {
		  hex: '#333',
		  rgb: {
			r: 51,
			g: 51,
			b: 51,
			a: 1,
		  },
		  hsl: {
			h: 0,
			s: 0,
			l: .20,
			a: 1,
		  },
		}
	}

	render() {
		return (
			<SwatchesPicker	onChange={ this.handleChange}
			/>
		);
	}
}