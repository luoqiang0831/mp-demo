export const SERVER_URL = "http://localhost:3002";

export default function (url, params, method = "GET", ...rest) {
  return new Promise((resolve, reject) => {
    //发起网络请求
    wx.request({
      url: `${SERVER_URL}${url}`,
      data: params,
      method,
      ...rest,
      success({ data }) {
        if (data.errcode === 0) {
          resolve(data);
        } else {
          reject(data && data.errmsg);
        }
      },
      fail(err) {
        reject(err);
      },
    });
  });
}
