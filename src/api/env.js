/*
 * @Author: cola
 * @Date: 2022-08-23 13:44:26
 * @Description: 
 */
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * credential: 跨域
 *
 */

const dev = {
  routerMode: "history", // hash history

  baseURL: "http://192.168.1.62:3000" // 测试服务器
  // baseURL: "http://192.168.1.4:3000" // 测试服务器
  // baseURL: "http://192.168.2.139:3000" // 测试服务器
};
const prod = {
  baseURL: "http://192.168.1.62:3000" // 生产服务器
};

export default process.env.NODE_ENV === "development" ? dev : prod;
