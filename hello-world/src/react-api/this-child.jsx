/**
 * Created by zzl81cn on 2017/2/25.
 * link: https://www.kancloud.cn/kancloud/react/67580
 */
import React, {Component} from 'react';

/*
* 这里需要注意， this.props.children 的值有三种可能：如果当前组件没有子节点，它就是 undefined ;如果有一个子节点，数据类型是 object ；如果有多个子节点，数据类型就是 array 。所以，处理 this.props.children 的时候要小心，只有当子节点多余1个时，this.props.children 才是一个数组，否则是不能用 map 方法的， 会报错。
 所以React 提供一个工具方法 React.Children 来处理 this.props.children 。我们可以用 React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object或是Array。更多的 React.Children 的方法，请参考官方文档。
* */
export default class NoteList extends Component {
	// 还不知道怎么用在children上面
	/*propTypes = {
		children: React.PropTypes.element.isRequired
	}*/
	render() {
		return (
			<ol>
				{
					React.Children.map(this.props.children, function (child) {
						return <li>{child}</li>
					})
				}
			</ol>
		)
	}
}