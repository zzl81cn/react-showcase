/**
 * Created by zzl81cn on 2017/2/23.
 */
// import React, {Component} from 'react';
import React from 'react';

import navLogo from '../../assets/images/logo.jpg';
import '../../assets/styles/news-list.scss';

// export default class NewsHeader extends Component {
export default class NewsHeader extends React.Component {
	getLogo() {
		return (
			<span className="brand-logo">
				<a href="http://www.github.com/zzl81cn"><img width="33" src={navLogo} alt="visual"/></a>
			</span>
		)
	}
	getTitle() {
		return (
			<span className="news-header-title">
				<a href="" className="news-title-link">Hack title</a>
			</span>
		)
	}
	getNav() {
		let navLinks = [
			{
				name: '数据资源',
				url: 'data-resources'
			},
			{
				name: '看板',
				url: 'dashboard'
			}
		];
		return (
			<div className="news-header-nav">
				{
					navLinks.map(function (navLink) {
						return (
							<a key={navLink.url} className="news-header-link" href={"http://www.galaxybigdata.com" + navLink.url}>{navLink.name}</a>
						)
					})
				}
			</div>
		)
	}
	getLogin() {
		return (
			<div className="news-login">
				<a href="" className="news-login-link">Login</a>
			</div>
		)
	}
	render() {
		return (
			<div className="news-header">
				{this.getLogo()}
				{this.getTitle()}
				{this.getNav()}
				{this.getLogin()}
			</div>
		)
	}
}