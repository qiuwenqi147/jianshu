/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: cola
 * @Date: 2022-08-25 00:18:38
 * @Description:
 */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../store/global";

const useLogic = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.globalStore);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      changeScroll();
    });
  }, []);

  // 用时0.2秒回到页面顶部
  const totop = (speed) => {
    const topHeight = document.documentElement.scrollTop;
    const newSpeed = speed || topHeight / 20;
    window.scrollTo(0, topHeight - newSpeed);
    const newTopHeight = document.documentElement.scrollTop;
    if (newTopHeight) {
      setTimeout(() => {
        totop(speed || newSpeed);
      }, 10);
    }
  };

  const changeScroll = () => {
    const topHeight = document.documentElement.scrollTop;
    if (topHeight > 400) {
      dispatch(globalActions.changeShowScroll(true));
    } else {
      dispatch(globalActions.changeShowScroll(false));
    }
  };

  const events = { totop };
  return { state, events };
};

export default useLogic;
