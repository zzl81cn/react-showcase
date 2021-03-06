// 引入action的方法
import {increment, decrement, reset} from './actions/counter';
import store from './store';

// 打印初始状态
console.log(store.getState());
// 每次state更新时，打印日志
// 注意subscribe返回一个函数来注销监听器
let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

// stop listener
unsubscribe();

// webpack testRedux.js build.js
// node build.js