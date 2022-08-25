/*
 * @Author: cola
 * @Date: 2022-08-22 17:57:42
 * @Description: 
 */
(function () {
  document.addEventListener("DOMContentLoaded", function (e) {
    let width = document.documentElement.clientWidth;
    document.getElementsByTagName("html")[0].style.fontSize = width / 10 + "px";
  }, false);
}());