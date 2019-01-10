Page({
  data: {
    current: 'tab1',
    tab1: true,
  },

  handleChange({ detail }) {
    var index = detail.key
    this.setData({
      current: detail.key
    });
    if (index == 'tab1') {
      this.setData({
        tab1: true,
        tab2: false,
        tab3: false
      })
    }
    else if (index == 'tab2') {
      this.setData({
        tab1: false,
        tab2: true,
        tab3: false
      })
    }
    else if (index == 'tab3') {
      this.setData({
        tab1: false,
        tab2: false,
        tab3: true
      })
    }
  }
});