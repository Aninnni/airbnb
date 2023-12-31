import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config"

class HYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 响应拦截
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }
  // 网络请求的方法
  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}


export default new HYRequest(BASE_URL, TIMEOUT)

