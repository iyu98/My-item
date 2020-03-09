// axios 拦截器
import axios from 'axios' // 引入 axios
// 请求拦截器  发起请求之前对请求参数做拦截处理
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
// 相应拦截器, 接收到数据的时候对数据进行处理
axios.interceptors.response.use(function (response) {
  return response.data // 返回的时候只返回需要使用到的数据
}, function (error) {
  return Promise.reject(error)
})
export default axios
