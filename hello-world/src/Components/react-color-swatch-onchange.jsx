/*
* Author: zzl81cn
* Date: 20170224
* */

/*
* Pass a function to call every time the color is changed. Use this to store the color in the state of a parent component or to make other transformations.

 Keep in mind this is called on drag events that can happen quite frequently. If you just need to get the color once use onChangeComplete.
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