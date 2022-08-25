/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: cola
 * @Date: 2022-08-22 16:06:34
 * @Description:
 */
import { globalActions } from "../../store/global";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { initData } from "../../store/actions";
import { useNavigate } from "react-router-dom";

export default function useLogic() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let state = useSelector((state) => state.globalStore);
  const { tagsShow } = state;
  const inputRef = useRef();

  // 用户信息 tags鼠标都移出  更改tagsShow状态为true  继续显示tags列表  0.2秒后关闭(淡出动画0.2s)
  useEffect(() => {
    if(tagsShow) {
      setTimeout(() => {
        dispatch(globalActions.changeShowTags(false))
      }, 200);
    }
  },[tagsShow])

  // 初始化页面，调用接口修改store数据
  useEffect(() => {
    dispatch(initData());
  }, [dispatch]);

  // 改变搜索框内容
  const changeInputvalue = (e) => {
    dispatch(globalActions.setInputvalue(e.target.value));
  };

  // 切换导航标签
  const handleSelect = (item) => {
    if (item.checked) return;
    dispatch(globalActions.handleSelect(item.text));
  };

  // 改变input聚焦状态
  const changeFocused = (status) => {
    dispatch(globalActions.changeFocused(status));
  };

  // 搜索添加历史记录
  const addHistoryList = () => {
    dispatch(globalActions.addHistoryList());
  };

  // input回车事件
  const handleEnter = (e) => {
    // keyCode === 13   回车
    if (e.keyCode === 13) {
      changeFocused(false);
      addHistoryList();
      dispatch(globalActions.changeMouseIn(false));
      inputRef.current.blur();
    }
  };

  // 鼠标悬停用户信息tag
  const changeUserInfoMouseIn = (status) => {
    // 判断status是移入还是移出  移出0.2秒后派发action
    if(status) {
      dispatch(globalActions.changeUserInfoMouseIn(status));
    } else {
      setTimeout(() => {
        dispatch(globalActions.changeUserInfoMouseIn(status));
      }, 200);
    }
  }

  // 登录
  const handleLogin = () => {
    navigate("/login")
  }

  state = { ...state, inputRef };

  const events = {
    changeInputvalue,
    handleSelect,
    changeFocused,
    handleEnter,
    addHistoryList,
    handleLogin,
    changeUserInfoMouseIn
  };

  return { state, events };
}
