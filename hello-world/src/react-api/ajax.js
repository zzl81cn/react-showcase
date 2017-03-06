/**
 * Created by zzl81cn on 2017/3/3.
 */
import React from 'react';
const $ = window.$ = require('jquery');

export default class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			lastGistUrl: ''
		}
	}
	componentDidMount() {
		$.get(this.props.source, function(result) {
			let lastGist = result[0];
			// See it.
			// https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html
			/*if (this.isMounted()) {
				this.setState({
					username: lastGist.owner.login,
					lastGistUrl: lastGist.html_url
				});
			}*/
			this.setState({
				username: lastGist.owner.login,
				lastGistUrl: lastGist.html_url
			});
		}.bind(this));
	}
	render() {
		return (
			<div>
				{this.state.username}'s last gist is
				<a href={this.state.lastGistUrl}>here</a>.
			</div>
		);
	}
}