import wx from 'weixin-js-sdk'
// import axios from 'axios'
import { $get } from '../api/api'
// const url = '/wx/get_signature?url=' + encodeURIComponent(location.href.split('#')[0])
export const wxInit = (id, url, jsApiList) => {
  $get(`/activeplatform/vfc/config?id=${id}&signUrl=${url}`).then((res) => {
    const par = {
      debug: false, // 开启调试模式
      appId: res.data.data.appId, // 必填，公众号的唯一标识
      timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
      nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
      signature: res.data.data.signature, // 必填，签名
      jsApiList: jsApiList
    }
    wx.config(par)
  }).catch((error) => {
    return error
  })
  // wx.ready((res) => {
  //   wx.scanQRCode({
  //     needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
  //     scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
  //     success: res => {
  //       // const result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
  //       console.log(res)
  //     },
  //     fail: err => {
  //       console.log(err)
  //     }
  //   })
  //   return res
  // })
  wx.error(function (res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    return res
  })
}
const plugin = { // 全局使用 wxSdk的插件
  install (Vue) {
    Vue.prototype.$wx = wx
    Vue.wechat = wx
  }
}
export default plugin
