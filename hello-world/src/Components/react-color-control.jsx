/*
* Author: zzl81cn
* Date: 20170224
* */

/*
* In this case, the color picker will initialize with the color #2ad6d6 or special color. When the color is changed, handleChangeComplete will fire and set the new color to state.
* 标题的背景色与颜色拾取关联起来，选择颜色关联标题背景色会变更。
 * */
import React, {Component} from 'react';
import ReactCSS from 'reactcss'
import ReactColor, {SketchPicker, PhotoshopPicker} from 'react-color';

export default class RCSketchTest extends Component {
	constructor(props) {
		super(props);
		this.state = {
			background: {
				h: 180,
				s: 0.68,
				l: 0.50,
				a: 1,
			},
			displayColorPicker: false
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleChangeComplete = this.handleChangeComplete.bind(this);
	}

	// 拾取颜色改变结果的操作
	/*handleChangeComplete = (color) => {
		this.setState({ background: color});
		// console.log(this.state.background)
	};*/
	// Toggle display state
	handleClick= () => {
		this.setState({displayColorPicker: !this.state.displayColorPicker})
	};
	//
	handleClose = () => {
		this.setState({displayColorPicker: false})
	};
	// 改变颜色后标题背景色同步改变
	handleChangeComplete = (data) => {
		if(data.hsl !== this.state.background) {
			this.setState({ background: data.hsl});
		}
		this.props.onChange && this.props.onChange(data.hex);
		console.log('Current pick color is: ', data.hex);
		// console.log('Current pick color is: ', this.state.background)
	};

	render() {
		const styles = ReactCSS({
			'default':  {
				title: {
					backgroundColor: this.props.primaryColor,
					transition: '100ms linear background-color'
				},
				popover: {
					position: 'absolute',
					zIndex: '2'
				},
				cover: {
					position: 'fixed',
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px'
				}
			}
		})

		return (
			<div className="container">
				<h3 style={styles.title}>SketchPicker</h3>
				<button onClick={ this.handleClick}>Picker Color</button>
				{/*Or color={this.state.background}*/}
				{
					this.state.displayColorPicker?<div style={styles.popover}>
							<div style={styles.cover} onClick={this.handleClose}/>
							<PhotoshopPicker color={ this.props.primaryColor } onChangeComplete={ this.handleChangeComplete } />
						</div>: null
				}
			</div>
		);
	}
}