// action
export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

// 我们创建了请求中，请求成功，请求失败三个action creator
function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  }
}
function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: userInfo
  }
}
function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FAIL
  }
}


export function getUserInfo() {
  return (dispatch) => {
    dispatch(getUserInfoRequest());

    fetch('https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/userInfo')
      .then((response => {
        console.log('called api');
        return response.json();
      }))
      .then((responseData) => {
        console.log('responseData data', responseData);
        dispatch(getUserInfoSuccess(responseData))
      })
      .catch(
        () => {
          console.log('catch error');
          dispatch(getUserInfoFail());
        }
      )
  }
}