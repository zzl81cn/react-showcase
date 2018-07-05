import { combineReducers } from "redux";
// reducer是一个纯函数，接收action和旧的state,生成新的state.
// 一个项目有很多的reducers,我们要把他们整合到一起
import counter from 'reduxPath/reducers/counter';
import userInfo from 'reduxPath/reducers/userInfo';

/* export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
    userInfo: userInfo(state.userInfo, action)
  }
} */
export default combineReducers({
  counter,
  userInfo
})
/**
 * 到这里，我们必须再理解下一句话。
 * reducer就是纯函数，接收state 和 action，然后返回一个新的 state。
 * 看看上面的代码，无论是combineReducers函数也好，还是reducer函数也好，都是接收state和action，返回更新后的state。区别就是combineReducers函数是处理整棵树，reducer函数是处理树的某一点。
  */