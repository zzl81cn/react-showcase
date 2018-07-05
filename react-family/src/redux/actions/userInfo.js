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
function getUserInfoSuccess() {
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
  return function (dispatch) {
    dispatch(getUserInfoRequest());

    return fetch('/api/user.json')
      .then((response => {
        console.log('called api');
        return response.json();
      }))
      .then((json) => {
        console.log('json data', json);
        dispatch(getUserInfoSuccess(json))
      })
      .catch(
        () => {
          console.log('catch error');
          dispatch(getUserInfoFail());
        }
      )
  }
}