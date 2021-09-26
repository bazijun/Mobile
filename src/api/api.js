import request from './request'
import axios from 'axios'
// import qs from 'querystring'
// const p = process.env.VUE_APP_BASE_URL
// process.env
let p
if (process.env.NODE_ENV === 'production') {
  p = ''
} else {
  p = '/api'
}
console.log(process.env.NODE_ENV)
// 封装 api 的 try catch 以便复用
const apiFrame = async (type, path, params) => {
  let allData
  try {
    const { data } = await request[type](path, params)
    allData = data
  } catch (e) {
    allData = { success: false, info: '接口错误' }
  }
  return allData
}

/* ***** Base ***** */
export const $get = (url) => { // 无token 轻便接口
  return axios.get(p + url)
}
export const $post = (url, params) => {
  return apiFrame('get', p + url, params)
}
/* ***** api ***** */

export const _Login = params => {
  return apiFrame('post', p + '/activeplatform/verification/login', params)
}
