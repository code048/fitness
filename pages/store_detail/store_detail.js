Page({
  data: {
    current: 'tab1',
    tab1:true,

    mode: "scaleToFill",
    arr: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,  
  },
  onLoad: function (options) {
    var array = this.data.arr
    for (let i = 1; i < 3; i++) {
      array.push("../../static/img/banner" + i + ".png")
    }
    this.setData({ arr: array })

  },
  handleChange({ detail }) {
    var index = detail.key
    this.setData({
      current: detail.key
    });
    if(index == 'tab1')
    {
      this.setData({
        tab1:true,
        tab2:false,
        tab3:false
      })
    }
    else if(index == 'tab2')
    {
      this.setData({
        tab1:false,
        tab2:true,
        tab3:false
      })
    }
    else if(index == 'tab3')
    {
      this.setData({
        tab1:false,
        tab2:false,
        tab3:true
      })
    }
  }
});