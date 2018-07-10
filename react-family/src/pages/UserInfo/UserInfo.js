import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from "reduxPath/actions/userInfo";
import { getUserInfoAxios } from "reduxPath/actions/userInfo";

class UserInfo extends Component {

  render() {
    const { userInfo, isLoading, errorMsg } = this.props.userInfo;
    return (
      <div>
        {
          isLoading ? '请求信息中......' :
            (
              errorMsg ? errorMsg :
                <div>
                  <p>用户信息</p>
                  <p>用户名：{userInfo.name}</p>
                  <p>介绍：{userInfo.intro}</p>
                </div>
            )
        }
        <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
      </div>
    )
  }
}
// 将store的state 转为容器的props
const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => {
      /* axios-2:然后在dispatch(getUserInfo())后，通过redux中间件来处理请求逻辑。 */
      dispatch(getUserInfo())
    }
  }
}


// export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
