/*
 * @Author: cola
 * @Date: 2022-08-23 13:44:26
 * @Description: 
 */
import axios from "axios";
import env from "./env";

const AJAX = axios.create({
  baseURL: env.baseURL,
  timeout: 120000
});
axios.defaults.withCredentials = true;

// 添加请求拦截器
AJAX.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
AJAX.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response.data;
  },
  function(error) {
    // 对响应错误做点什么，比如400、401、402等等
    return Promise.reject(error);
  }
);

// 定义对外Get、Post、File请求
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  AJAX,
  get(url, param = {}, headers = {}) {
    return AJAX.get(url, {
      params: param,
      headers
    });
  },
  post(url, param = null, headers = {}) {
    return AJAX.post(url, param, {
      headers
    });
  },
  put(url, param = null, headers = {}) {
    return AJAX.put(url, param, {
      headers
    });
  },
  file(url, param = null, headers = {}) {
    return AJAX.post(url, param, {
      headers: Object.assign(
        {
          "Content-Type": "multipart/form-data"
        },
        headers
      )
    });
  },
  delete(url, param = null, headers = {}) {
    return AJAX.delete(url, {
      param,
      headers: Object.assign(
        {
          "Content-Type": "multipart/form-data"
        },
        headers
      )
    });
  }
};
