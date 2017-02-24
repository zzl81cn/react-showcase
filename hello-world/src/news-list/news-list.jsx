/**
 * Created by zzl81cn on 2017/2/23.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import NewsHeader from './news-header.jsx';
import NewsItem from './news-item.jsx';

export default class NewsList extends Component {
	render(){
		return (
			<div className="news-list">
				<NewsHeader/>
				<NewsItem/>
			</div>
		)
	}
}