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

react-redux summary:
1.Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。
2.connect函数作用是从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。也传递dispatch(action)函数到props。

*/