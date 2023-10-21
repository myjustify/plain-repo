import axios from 'axios'
const requestTimeOut = 30 * 1000
// 系统全局请求对象
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: requestTimeOut,
  responseType: 'json',
})
service.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
service.interceptors.response.use((config) => {
  return config
}, (error) => {
  if (error.message.includes('timeout')) {
    alert("请求服务器超时")
  }
  return Promise.reject(error)
})

export default service
