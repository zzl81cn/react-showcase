/* reducers */
/* 看看上面的代码，无论是combineReducers函数也好，还是reducer函数也好，都是接收state和action，返回更新后的state。区别就是combineReducers函数是处理整棵树，reducer函数是处理树的某一点。 */

import counter from './reducers/counter';

/* 此处注意es6的 "xx = {}"" 用法 */
export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action)
    }
};