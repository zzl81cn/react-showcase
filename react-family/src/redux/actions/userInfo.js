export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

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
// 我们创建了请求中，请求成功，请求失败三个action创建函数
export function getUserInfo() {
  return function (dispatch) {
      dispatch(getUserInfoRequest());

      return fetch('http://localhost:8080/api/user.json')
          .then((response => {
              return response.json()
          }))
          .then((json) => {
                  dispatch(getUserInfoSuccess(json))
              }
          ).catch(
              () => {
                  dispatch(getUserInfoFail());
              }
          )
  }
}