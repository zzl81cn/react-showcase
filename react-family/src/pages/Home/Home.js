import React, {Component} from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  _handleClick() {
    this.setState({
      count: ++this.state.count
    })
  }
  render () {
    let { count } = this.state;
    return (
      <div>
        This is Home.<br/>
        当前计数：{count}<br/>
        <p>此状态在按需加载情况下不支持保存状态，只有其他依赖redux的可以实现刷新后保存状态。</p>
        <button onClick={() => this._handleClick()}>自增</button>
      </div>
    )
  }
}