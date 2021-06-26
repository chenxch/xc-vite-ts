/*
 * @Description: axios配置
 * @Author: chenxch
 * @Date: 2021-02-27 22:29:14
 */
/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, Method } from 'axios'
// import msgInfo from './errorMessage'

// 定义接口
interface PendingType {
  url: string | undefined
  method: Method | undefined
  params: object
  data: object
  cancel: Function
}

const pending: Array<PendingType> = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const cancelToken = axios.CancelToken
// const BASE_URL = process.env.VUE_APP_API_BASE_URL

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
  for (const key in pending) {
    const item: PendingType = pending[key]
    // if (item.url === config.url && item.method === config.method && JSON.stringify(item.params) === JSON.stringify(config.params) && JSON.stringify(item.data) === JSON.stringify(config.data))
    if (item.url === config.url && item.method === config.method) {
      // 当当前请求在数组中存在时执行函数体
      item.cancel() // 执行取消操作
      pending.splice(+key, 1) // 把这条记录从数组中移除
    }
  }
}

// default setting 
axios.defaults.timeout = 10000000
// axios.defaults.headers.post['Content-Type'] =
//   'application/x-www-form-urlencodedcharset=UTF-8'
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.baseURL = BASE_URL

// 添加响应拦截器 - 统一处理状态码
axios.interceptors.response.use(
  config => config,
  error => {
    if (error && error.response) {
      if (error.response.status === 401) {
        location.reload()
      }
      //  else {
      //   error.message = msgInfo.apiErrorMessage[error.response.status]
      // }
    }
    //  else {
    //   error.message = msgInfo.apiErrorMessage[404]
    // }
    return Promise.reject(error)
  }
)

// 创建拦截重复请求实例
const cancelRepeat = axios.create({
  // baseURL: BASE_URL
})

// 添加取消重复请求拦截器
cancelRepeat.interceptors.request.use(
  config => {
    // 在一个ajax发送前执行一下取消操作
    removePending(config)
    // get参数编码
    if (config.method === 'get' && config.params) {
      // encodeURIComponent拦截get进行encodeURIComponent
      const keys = Object.keys(config.params)
      for (const key of keys) {
        config.params[key] = `${config.params[key]}`.match(/[@]/)
          ? encodeURIComponent(config.params[key])
          : config.params[key]
      }
    }
    config.cancelToken = new cancelToken(cancel => {
      const {url, method, params, data} = config
      pending.push({ url, method, params, data , cancel })
    })
    return config
  },
  error => Promise.reject(error)
)

// 添加响应拦截器
cancelRepeat.interceptors.response.use(
  response => {
    removePending(response.config) // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    return response
  },
  error => {
    if (error && error.response) {
      if (error.response.status === 401) {
        location.reload()
      }
      //  else {
      //   error.message = msgInfo.apiErrorMessage[error.response.status]
      // }
    }
    // if (error.message === undefined) {
    //   return
    // }
    return Promise.reject(error)
  }
)

export { axios, cancelRepeat }
