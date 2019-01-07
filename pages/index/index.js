//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    mode: "scaleToFill",
    arr: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    attendClassColor: null, //控制仅上课图片颜色
    venues: [], //场馆数组
    coach: []
  },
  onLoad: function(options) {
    var that = this;
    wx.request({
        url: app.url + 'weiapp/api/getIndexBanner',
        data: {},
        success: function(res) {
          console.log(res.data)
          that.setData({
            arr: res.data
          })
        }
      }),
      wx.request({
        url: app.url + 'weiapp/api/getVenues',
        data: {},
        success: function(res) {
          console.log(res.data)
          that.setData({
            venues: res.data
          })
        }
      }),
      wx.request({
        url: app.url + 'weiapp/api/getCoach',
        data: {},
        success: function(res) {
          console.log(res.data)
          that.setData({
            coach: res.data
          })
        }
      })

  },
  goStoreDetail(event) {
    wx.navigateTo({
      url: '../store_detail/store_detail',
    })
  },

  goVenueList() {
    wx.navigateTo({
      url: "../venue_list/venue_list",
    })
  },

  attendClass() {
    console.log(this.data.attendClassColor)
    if (this.data.attendClassColor == null) {
      this.setData({
        attendClassColor: 'red'
      })
    } else {
      this.setData({
        attendClassColor: null
      })
    }
  }

})