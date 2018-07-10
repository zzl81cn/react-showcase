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

const userinfoURL = 'https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/userInfo';

export function getUserInfoFetch() {
  return (dispatch) => {
    dispatch(getUserInfoRequest());

    fetch(userinfoURL)
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
// axios-1: action creator创建函数是这样的。比我们现在写的fetch简单多了。
export function getUserInfo() {
  return {
    types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
    promise: client => client.get(userinfoURL)
  }
}