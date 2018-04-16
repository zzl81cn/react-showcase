// 一个项目有很多的reducers,我们要把他们整合到一起
import counter from './reducers/counter';

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action)
  }
}
/**
 * 到这里，我们必须再理解下一句话。
 * reducer就是纯函数，接收state 和 action，然后返回一个新的 state。
 * 看看上面的代码，无论是combineReducers函数也好，还是reducer函数也好，都是接收state和action，返回更新后的state。区别就是combineReducers函数是处理整棵树，reducer函数是处理树的某一点。
  */