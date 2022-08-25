/*
 * @Author: cola
 * @Date: 2022-08-22 22:04:25
 * @Description:
 */
import { getHomeData } from "../../../api";
import { homeActions } from "./index";

// 分页 
const paging = (newArr, arr, num) => {
  newArr = arr.filter(
    (item, index) =>
      index >= (num - 1) * 5 && index < (num - 1) * 5 + 5
  );
  return newArr
}

// 初始化首页数据
export const initHomeData = (state, action) => {
  state.bannerImg = action.payload.bannerImg;
  state.topicList = action.payload.topicList;
  state.articleList = action.payload.articleList;
  state.recommendList = action.payload.recommendList;
  state.authorListCopy = action.payload.authorList;
  state.authorList = paging(state.authorList, state.authorListCopy, state.pageNum)
};
// 推荐作者换页
export const changeAuthor = (state, action) => {
  if (state.pageNum === Math.ceil(state.authorListCopy.length / 5)) {
    state.pageNum = 1;
  } else {
    state.pageNum += 1;
  }
  state.authorList = paging(state.authorList, state.authorListCopy, state.pageNum)
};

/* 异步action */
// 接口获取首页数据
export const init = () => {
  return async (dispatch, getState) => {
    getHomeData().then((res) => {
      dispatch(homeActions.initHomeData(res.data));
    });
  };
};
