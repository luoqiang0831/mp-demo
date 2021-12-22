import request from "../../../util/request";

const app = getApp();

Page({
  onShareAppMessage() {
    return {
      title: "微信登录",
      path: "package/API/pages/login/login",
    };
  },

  onLoad() {
    this.setData({
      hasLogin: app.globalData.hasLogin,
      openid: "",
      unionid: "",
    });
  },
  data: {},
  login() {
    const that = this;

    wx.login({
      success({ code }) {
        if (code) {
          request("/min/user/getOpenId", { code }).then(({ data }) => {
            const { openid, unionid } = data;
            app.globalData.hasLogin = true;
            app.globalData.openid = openid;

            that.setData({
              hasLogin: true,
              openid,
              unionid,
            });
          });
        }
      },
    });
  },
});
