/* store */
import { createStore } from "redux";
import combineReducers from "./reducers";
/* 使用redux的createStore包裹函数对象combineReducers */
let store = createStore(combineReducers);

export default store;

/* 
接下来，我们要创建一个store。
前面我们可以使用 action 来描述“发生了什么”，使用action创建函数来返回action。
还可以使用 reducers 来根据 action 更新 state 。
那我们如何提交action？提交的时候，怎么才能触发reducers呢？
store 就是把它们联系到一起的对象。store 有以下职责：

维持应用的 state；
提供 getState() 方法获取 state；
提供 dispatch(action) 触发reducers方法更新 state；
通过 subscribe(listener) 注册监听器;
通过 subscribe(listener) 返回的函数注销监听器。

后面再通过index的react-redux引入Provider组件包含路由，此处store作为Provider的属性使用

*/