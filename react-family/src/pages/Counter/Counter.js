import React, {Component} from 'react';
export default class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前计数为（redux计数）</div>
        <button onClick={() => {
          console.log("调用自增函数")
        }}>自增</button>
        <button onClick={() => {
          console.log("调用自减函数")
        }}>--</button>
        <button onClick={() => {
          console.log("调用reset函数")
        }}>R</button>
      </div>
    )
  }
}