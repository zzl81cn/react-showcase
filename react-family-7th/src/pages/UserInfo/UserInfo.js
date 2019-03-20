import React, {Component} from 'react';
import {connect} from 'react-redux';

/* 这落下引入action了，connect报了半天没有"userInfo: state.userInfo" 20190320 pm17:29 */
import {getUserInfo} from "../../redux/actions/userInfo";

class UserInfo extends Component {
    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div>
                {
                    isLoading? 'is request':
                     (
                         errorMsg? errorMsg:
                            <div>
                                <p>userInfo</p>
                                <p>username: {userInfo.name}</p>
                                <p>userintro: {userInfo.intro}</p>
                            </div>
                     )
                }
                <button onClick={() => this.props.getUserInfo()}>get</button>
            </div>
        )
    }
};

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);
// 发现connect参数写法不一样了，mapStateToProps函数用了es6简写，mapDispatchToProps用了react-redux提供的简单写法。