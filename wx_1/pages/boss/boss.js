// pages/boss/boss.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  php: function () {
    wx.setStorageSync('name', 'PHP');
    wx.navigateTo({
      url: '../PHP/PHP'
    })
  },
  ui: function () {
    wx.setStorageSync('name', 'UI');
    wx.navigateTo({
      url: '../PHP/PHP'
    })
  },
  product: function () {
    wx.setStorageSync('name', 'PRO');
    wx.navigateTo({
      url: '../PHP/PHP'
    })
  },
  resurse: function () {
    wx.setStorageSync('name', 'RE');
    wx.navigateTo({
      url: '../PHP/PHP'
    })
  },
  market: function () {
    wx.setStorageSync('name', 'MA');
    wx.navigateTo({
      url: '../PHP/PHP'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.content);
    console.log('onLoad');
    console.log(options);
    console.log(wx.getSystemInfoSync());
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})