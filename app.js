//app.js
var common = require('utils/common.js')
App({
  globalData:{
    location:[]
  },
  url: 'https://js.yingzaiqifei.com/public/index.php?pbid=81&s=/',
  PHPSESSID: '',
  common: common,
  onLaunch: function (options) {
    var that=this
    var from_uid = options.query.from_uid == undefined ? '0' : options.query.from_uid
    if (from_uid != 0) {
      wx.setStorageSync("from_uid", from_uid)
    }

    common.initApp(this.url + 'weiapp/Api/', true)    
  },

  success: function (msg) {
    if (!msg) {
      msg = '操作成功'
    }
    wx.showToast({
      title: msg,
      icon: 'success',
      duration: 2000
    });
  },
  error: function (msg) {
    if (!msg) {
      msg = '操作成功'
    }
    wx.showToast({
      title: msg,
      image: '/images/icon_wrong.png',
      duration: 2000
    });
  }
})