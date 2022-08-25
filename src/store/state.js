/*
 * @Author: cola
 * @Date: 2022-08-22 22:11:10
 * @Description:
 */
const state = {
  inputvalue: "",
  focused: false,
  mouseIn: false,
  tags: [
    {
      text: "发现",
      icon: "icon-faxian",
      checked: true
    },
    {
      text: "会员",
      icon: "icon-huiyuan",
      checked: false
    },
    {
      text: "IT技术",
      icon: "icon-line-codeboxdaimahezi",
      checked: false
    },
    {
      text: "消息",
      icon: "icon-xiaoxi",
      checked: false
    }
  ],
  historyList: [],
  showScroll: false,
  userInfo: {},
  tagsShow: false,
  userInfoMouseIn: false,
  tagsMouseIn: false
};

export default state;
