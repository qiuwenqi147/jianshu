/*
 * @Author: cola
 * @Date: 2022-08-22 22:11:05
 * @Description:
 */
import { getHistoryList, login } from "../api";
import { globalActions } from "./global";

// 改变input内容
export const setInputvalue = (state, action) => {
  state.inputvalue = action.payload;
};

// 切换选中状态
export const handleSelect = (state, action) => {
  state.tags.forEach((item) => {
    if (item.text === action.payload) {
      item.checked = true;
    } else {
      item.checked = false;
    }
  });
};

// 改变input聚焦状态
export const changeFocused = (state, action) => {
  state.focused = action.payload;
};

// 删除搜索历史
export const deleteHistory = (state, action) => {
  state.historyList = state.historyList.filter(
    (item) => item !== action.payload
  );
};

// 改变鼠标悬停状态
export const changeMouseIn = (state, action) => {
  state.mouseIn = action.payload;
};

// 初始化搜索历史
export const initHistoryList = (state, action) => {
  state.historyList = action.payload
};

// 添加搜索历史
export const addHistoryList = (state, action) => {
  state.historyList.splice(0, 0, state.inputvalue)
  state.historyList = [...new Set(state.historyList)]
};

// 改变回到顶部按钮状态
export const changeShowScroll = (state, action) => {
  state.showScroll = action.payload;
};

// 改变鼠标悬停用户信息状态
export const changeUserInfoMouseIn = (state, action) => {
  // 用户信息 tags鼠标都移出  更改tagsShow状态为true   继续显示 0.2秒后关闭(淡出动画0.2s)
  if(!action.payload) {
    if(!state.tagsMouseIn) {
      state.tagsShow = true
    }
    state.userInfoMouseIn = action.payload;
  } else {
    state.userInfoMouseIn = action.payload;
  }
};

// 改变鼠标悬停tag列表状态
export const changeTagMouseIn = (state, action) => {
  // 用户信息 tags鼠标都移出  更改tagsShow状态为true   继续显示 0.2秒后关闭(淡出动画0.2s)
  if(!action.payload) {
    if(!state.userInfoMouseIn) {
      state.tagsShow = true
    }
    state.tagsMouseIn = action.payload;
  } else {
    state.tagsMouseIn = action.payload;
  }
};

// 改变tags列表显示状态
export const changeShowTags = (state, action) => {
  state.tagsShow = action.payload;
};

// 添加用户信息
export const setUserInfo = (state, action) => {
  state.userInfo = action.payload;
};

// 登出删除用户信息
export const logout = (state, action) => {
  state.tagsShow = false;
  state.tagsMouseIn = false;
  state.userInfoMouseIn = false;
  state.userInfo = {};
  localStorage.removeItem("userInfo")
};



/* 异步action */

// 登录
export const handleLogin = (navigate) => {
  return async (dispatch) => {
    const { data } = await login()
    dispatch(globalActions.setUserInfo(data));
    const userInfo = {
      timer: Date.now() + 60 * 1000,
      data
    }
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
    navigate('/')
  };
};

// 异步获取搜索历史
export const initData = () => {
  return async (dispatch) => {
    const { data } = await getHistoryList()
    dispatch(globalActions.initHistoryList(data));
  };
};
