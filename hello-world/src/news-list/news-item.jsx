/**
 * Created by zzl81cn on 2017/2/23.
 */
import React, {Component} from 'react';
import URL from 'url';
import ImageGrayArrows from '../../assets/images/grayarrow.gif';
// MomentJS. Format time.
import Moment from 'moment';

export default class NewsItem extends Component {
	// 解析主机域名
	getDomain() {
		// 利用URL解析提取“"url" : "http://www.latimes.com/business/technology/la-fi-0429-tn-marissa-mayer-severance-20160429-story.html"”里面的hostname，也就是www.latimes.com这部分。
		return URL.parse(this.props.item.url).hostname;
	}
	// 标题
	getTitle() {
		return (
			<div className="news-item-title">
				{/*对于获取的数据，如果其中有些是没有 url 属性的，则需要处理一下这种情况*/}
				<a className="news-item-link" href={this.props.item.url ? this.props.item.url: 'http://www.baidu.com/item?id=' + this.props.item.id}>{this.props.item.title}</a>
				{
					this.props.item.url && <span className="news-item-domain"><a href={'http://news.baidu.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
				}
			</div>
		)
	}
	// 评论链接
	getCommentLink() {
		let commentText = 'discuss';
		if (this.props.item.kids && this.props.item.kids.length) {
			commentText = this.props.item.kids.length + 'comment';
		}
		return (
			<a href={'http://www.galaxybigdata.com' + this.props.item.id}>{commentText}</a>
		)
	}
	// 分数, 作者, 时间, 评论数
	getSubText() {
		return (
			<div className="news-item-subtext">
				{/*这里计算时间间距使用了 MomentJS*/}
				{this.props.item.score} point by <a href={'http://news.galaxybigdata.com/user?id=' + this.props.item.by}>{this.props.item.by}</a> {Moment.utc(this.props.item.time * 1000).fromNow()}
			</div>
		)
	}
	//
	getRank() {
		return (
			<div className="news-item-rank">{this.props.rank}.</div>
		)
	}
	// 投票
	getVote() {
		return (
			<div className="news-item-vote">
				<a href={'http://news.galaxybigdata.com/vote?for=' + this.props.item.id + '&dir=up&goto=news'}><img
					src={ImageGrayArrows} width={10} alt="vote"/></a>
			</div>
		)
	}
	render() {
		return (
			<div className="news-item">
				{this.getRank()}
				{this.getVote()}
				<div className="news-item-titletext">
					{this.getTitle()}
					{this.getCommentLink()}
					{this.getSubText()}
				</div>
			</div>
		)
	}
}