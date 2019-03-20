import React, {Component} from 'react';

/* react-redux 的其中两个方法connect,Provider.
    connect将redux的state和方法转换为组件能用的(一个mapStateToProps,就是把redux的state，转为组件的Props)
    Provider在index里面使用，那个组件去接收store，然后包裹router等
 */
import { connect } from 'react-redux';
// 引入action-creator
import {increment, decrement, reset} from '../../redux/actions/counter';

class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前计数为: {this.props.counter.count}</div>
        <button onClick={() => {
          console.log("调用自增函数");
          this.props.increment();
        }}>自增</button>
        
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
 * connect接收两个参数：
 * - 一个mapStateToProps,就是把redux的state，转为组件的Props；
 * - 还有一个参数是mapDispatchToprops,就是把发射actions的方法，转为Props属性函数。
 * 
 * 1.Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。
 * 2.connect函数作用是从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。也传递dispatch(action)函数到props。
  */
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

/* 
    Counter
       ^
       | redux.state -> Component Props + dispatch Component actions method to Props func.
    connect
*/