import React, {Component} from 'react';
// 引入action-creator
import {increment, decrement, reset} from '../../redux/actions/counter';

// react-redux提供了一个方法connect
/**
 * 容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。
 */
import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前计数为{this.props.counter.count}</div>
        <button onClick={() => {
          console.log("调用自增函数");
          this.props.increment();
        }}>自增偶数倍</button>
        <button onClick={() => {
          console.log("调用自减函数");
          this.props.decrement();
        }}>自减</button>
        <button onClick={() => {
          console.log("调用reset函数");
          this.props.reset();
        }}>重置</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    }
  }
}
/**
 * connect接收两个参数，一个mapStateToProps,就是把redux的state，转为组件的Props，还有一个参数是mapDispatchToprops,就是把发射actions的方法，转为Props属性函数。
 * 1.Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。
 * 2.connect函数作用是从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。也传递dispatch(action)函数到props。
  */
export default connect(mapStateToProps, mapDispatchToProps)(Counter)