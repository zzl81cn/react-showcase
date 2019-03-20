/* reducer */
/* 看看上面的代码，无论是combineReducers函数也好，还是reducer函数也好，都是接收state和action，返回更新后的state。区别就是combineReducers函数是处理整棵树，reducer函数是处理树的某一点。 */

import {INCREMENT, DECREMENT, RESET} from '../actions/counter';

/* init state */
const initState = {
    count: 0
};

/* reducer，switch别忘了给个default */
function reducer(state = initState, action) {
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
            };
        default:
            return state;
    }
};

export default reducer;