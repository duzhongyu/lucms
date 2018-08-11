import Axios from 'axios'
import baseURL from '_conf/url'
import { Notice, Message } from 'iview'
import Cookies from 'js-cookie'
import { TOKEN_KEY } from '@/libs/util'
class httpRequest {
  constructor () {
    this.options = {
      method: '',
      url: ''
    }
    // 存储请求队列
    this.queue = {}
  }
  // 销毁请求实例
  destroy (url) {
    delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }
  // 请求拦截
  interceptors (instance, url) {
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      if (!config.url.includes('/users')) {
        config.headers['x-access-token'] = Cookies.get(TOKEN_KEY)
      }
      // Spin.show()
      // 在发送请求之前做些什么
      return config
    }, error => {
      // 对请求错误做些什么
      return Promise.reject(error)
    })

    // 添加响应拦截器
    instance.interceptors.response.use((res) => {
      let { response } = res
      const is = this.destroy(url)
      if (!is) {
        setTimeout(() => {
          // Spin.hide()
        }, 500)
      }
      // 后端服务在个别情况下回报201，待确认
      if (response.code === 401) {
        Cookies.remove(TOKEN_KEY)
        window.location.href = window.location.pathname + '#/login'
        Notice.error({
          title: '出错了',
          desc: response.data.message
        })
      } else {
        if (response.data.message) {
          Notice.error({
            title: '出错了',
            desc: response.data.message
          })
        }
      }
      return response
    }, (error) => {
      let { response } = error
      if (response.hasOwnProperty('data')) {
        Notice.error({
          title: '出错了',
          desc: response.data.message
        })
        return Promise.reject(response.data)
      } else {
        Notice.error({
          title: '出错了',
          desc: response.data.message
        })
        Message.error(response.message)
        return Promise.reject(response)
      }
    })
  }
  // 创建实例
  create () {
    let conf = {
      baseURL: baseURL,
      // timeout: 2000,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-URL-PATH': location.pathname
      }
    }
    return Axios.create(conf)
  }
  // 合并请求实例
  mergeReqest (instances = []) {
    //
  }
  // 请求实例
  request (options) {
    var instance = this.create()
    this.interceptors(instance, options.url)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }
}
export default httpRequest
