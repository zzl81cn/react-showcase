/**
 * 
 * action
 * 
 * 引入到reducer里
 */
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";


// action creator -- action创建函数。通过action创建函数，可以创建action~
// 具体什么是 action creator，它们又是如何关联到 action 的呢？
/* 下面这些在view(视图)的dispatch调用 */
export function increment() {
  /* ...负责构建一个 action （是的，action creator 这个名字已经很明显了）并返回它 */
  return {type: INCREMENT}
  /*
   有一件事情需要注意，那就是 action 的格式。flux 一般约定 action 是一个拥有 type 属性的对象。
   action 依旧可以拥有其他属性，你可以任意存放想要的数据。
  */
}
// 在实际的场景中，我们需要的是将 action 发送到某个地方，让关心它的人知道发生了什么，并且做出相应的处理。
// 我们将这个过程称之为“分发 action（Dispatching an action）”。
export function decrement() {
  return {type: DECREMENT}
}
export function reset() {
  return {type: RESET}
}
// 至止，我们的应用中包含了以下流程：
// ActionCreator -> Action