import React from 'react';
// react router basic example: https://reacttraining.com/react-router/web/example/basic
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';
import Counter from '../pages/Counter/Counter';
import UserInfo from '../pages/UserInfo/UserInfo';
// import Topics from '../pages/Topics/Topics';
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

/* 
  route 的三种写法
    <Route component>
    <Route render>
    <Route children>
  route 传给组件的参数
    match 跟爸爸有关
      isExact 是否完全匹配
      params 参数，一般指path中的参数
      path <route>中 path 属性的值，与浏览器地址栏 url 进行匹配，“/topics/:topicId”
      url Link 或者 a 标签 中跳转的地址，一般情况下为浏览器地址栏中地址，如果有 basename，浏览器地址栏为 basename + url 的值，“/topics/components”
    location 跟自己有关
      pathname 与 match 中的 url 属性相同，“/topics/components”
      hash: "" 不知所云，换成 hashHistory 也没有值
      key: "" 随机生成一个6位的字符串，唯一喔
      search: "" 参数
    history
      -history对象，可以通过代码控制前进、后退
  <route> 属性
    path 匹配的路径 “/topics/:topicId”
    exact 完全匹配
    strict 结尾斜线匹配
 */
const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/userinfo">UserInfo</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/counter" component={Counter}/>
        <Route path="/userinfo" component={UserInfo}/>
        <Route path="/topics" component={Topics} />
        {/* <Route path="/topics" render={(match) => <Topics {...match} />}/> */}
      </Switch>
    </div>
  </Router>
);

export default getRouter;