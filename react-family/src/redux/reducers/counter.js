/* counter */
// reducer是一个纯函数，接收action和旧的state,生成新的state.
// reducer引入的是action的type，page引入action-creator
import {INCREMENT, DECREMENT, RESET} from 'reduxPath/actions/counter';

/**
 * http://cn.redux.js.org/
 * 初始化state
  */
/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
const initState = {
  count: 0
}
/**
 * reducer
*/
export default function reducer(state = initState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      }
    default:
      return state
  }
}