import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute, hashHistory } from 'react-router';
import App from './component/app';
import NewsContainer from './component/news_container';
import NewsDetail from './component/news_detail';
import UserCenter from './component/user_center';
import './index.css';

ReactDOM.render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={App}>
			  	<IndexRoute component={NewsContainer}></IndexRoute>
			  	<Route path="/detail/:news_id" component={NewsDetail}></Route>
			  	<Route path="/usercenter" component={UserCenter}></Route>
			</Route>
		</Router>
    ),
	document.getElementById('root')
);
