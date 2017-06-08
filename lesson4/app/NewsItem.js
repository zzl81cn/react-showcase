import React from 'react';
import URL from 'url';
import '../assets/css/NewsItem.css';
import Moment from 'moment';
import ImgGrayArrow from '../assets/images/grayarrow.gif';

export default class NewsItem extends React.Component {
	getDomain() {
		return URL.parse(this.props.item.url).hostname;
	}
	// 新闻标题
	getTitle() {
		/*return (
			<div className="newsItem-title">
				<a className="newsItem-titleLink" href={this.props.item.url + this.props.item.id}>{this.props.item.title}</a>
				<span className="newsItem-domain"><a href={'https://news.yocombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
			</div>
		)*/
		return (
			<div className="newsItem-title">
				<a className="newsItem-titleLink" href={this.props.item.url ? this.props.item.url : 'https://news.ycombinator.com/item?id=' + this.props.item.id}>{this.props.item.title}</a>
				{
					this.props.item.url && <span className="newsItem-domain"><a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
				}
			</div>
		)
	}
	// 评论链接
	getCommentLink() {
		var commentText = 'discuss';
		if(this.props.item.kids && this.props.item.kids.length) {
			commentText = this.props.item.kids.length + ' comment';
		}
		return (
			<a href={'http://news.sdfs.com/item?id=' + this.props.item.id}>{commentText}</a>
		);
	}
	// 作者、时间、评论数
	getSubText() {
		return (
			<div className="newsItem-subtext">
				{this.props.item.score} 分 <a href={'http://news.sdfs.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {Moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
			</div>
		)
	}
	// rank No.
	getRank() {
		return (
			<div className="newsItem-rank">{this.props.item.rank}</div>
		);
	}
	// Vote
	getVote() {
		return (
			<div className="newsItem-vote">
				<a href={'http://news.sdfs.com/vote?for=' + this.props.item.id + '$dir=up&goto=news'}><img src={ImgGrayArrow} width="10" /></a>
			</div>
		)
	}
	render(){
		return (
			<div className="news-item">
				{/*我是新闻项*/}
				{/*<a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>*/}

				{this.getRank()}
				{this.getVote()}
				<div className="newsItem-itemText">
					{this.getTitle()}
					{this.getSubText()}
				</div>
			</div>
		);
	}
}