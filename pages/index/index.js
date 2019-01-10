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
          console.log(app.globalData.location)
          for(var index in res.data)
          {
            var distance = that.getDistance(app.globalData.location['latitude'], app.globalData.location['longitude'], res.data[index]['lat'], res.data[index]['lng'])

            res.data[index]['juli'] = parseInt(distance / 1000) + "公里";

         //   this.getDistance(1,2,3,4);
          }
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
  onShow:function(){
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
  },
  getDistance: function(lat1, lng1, lat2, lng2) {
    lat1 = lat1 || 0;
    lng1 = lng1 || 0;
    lat2 = lat2 || 0;
    lng2 = lng2 || 0;

    var rad1 = lat1 * Math.PI / 180.0;
    var rad2 = lat2 * Math.PI / 180.0;
    var a = rad1 - rad2;
    var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
    var r = 6378137;
    var distance = r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)));

    return distance;
  }

})