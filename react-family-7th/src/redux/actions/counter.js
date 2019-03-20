/* 1.action */
/* 使用 action 来描述“发生了什么”，使用action创建函数来返回action。
还可以使用 reducers 来根据 action 更新 state 。 */
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

/* action creator */
export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: RESET}
}