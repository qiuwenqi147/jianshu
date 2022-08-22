/*
 * @Author: cola
 * @Date: 2022-08-22 19:32:15
 * @Description: 
 */
module.exports = {
  plugins: {
      autoprefixer: {},
      // flexible配置
      "postcss-pxtorem": {
          "rootValue": 75, // 设计稿宽度的1/10
          "propList": ["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
      }
  }
}