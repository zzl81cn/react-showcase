import React from 'react';
import NewsHeader from './NewsHeader.js';
import NewsItem from './NewsItem.js';
import '../assets/css/NewsList.css';

export default class NewsList extends React.Component {
	render() {
		var testData = {
			"by": "bane",
			"descentants": 49,
			"id": 11600137,
			"kids": [11600138, 11600139, 11600140, 11600141, 11600142],
			"score": 56,
			"time": 1468985332,
			"title": "Oh hohoho!",
			"url": "http://www.sdfs.com/sdfsd.html",
			"type": "story"
		};
		/*return (
			<div className="newsList">
				<NewsHeader/>
				<NewsItem item={testData} rank={1} />
			</div>
		);*/
		return (
			<div className="newsList">
				<NewsHeader/>
				<div className="newsList-newsItem">
					{
						(this.props.items).map(function (item, index) {
							return (
								<NewsItem key={item.id} item={item} rank={index+1} />
							);
						})
					}
				</div>
			</div>
		);
	}
}