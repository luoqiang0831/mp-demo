Page({
  onShareAppMessage() {
    return {
      title: "获取用户信息",
      path: "packageAPI/pages/get-user-info/get-user-info",
    };
  },

  data: {
    hasUserInfo: false,
  },
  getUserInfo(info) {
    const userInfo = info.detail.userInfo;
    console.log(userInfo);
    this.setData({
      userInfo,
      hasUserInfo: true,
    });
  },
  getUserProfile() {
    wx.getUserProfile({
      desc: "用于完善会员资料", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        });
      },
    });
  },
  clear() {
    this.setData({
      hasUserInfo: false,
      userInfo: {},
    });
  },
});
