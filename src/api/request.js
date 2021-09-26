import Axios from 'axios'
/* 全局配置 axios */
const request = Axios.create({
  // baseURL: '',
  timeout: 50000
})
request.interceptors.request.use(
  config => {
    const token = window.sessionStorage.getItem('token')

    if (token && !config.url.includes('/login')) {
      config.headers.Authorization = token
    }
    // 配置 json编码 的请求头
    config.headers['Content-Type'] = 'application/json'
    return config
  }, err => {
    console.log(err)
    return err
  })
export default request
