/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: cola
 * @Date: 2022-08-22 16:04:49
 * @Description:
 */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { init } from "./store/actions";

const useLogic = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.homeStore);

  console.log("------Home")
  useEffect(() => {
    // 初始化页面数据
    dispatch(init())
  }, []);

  return { state };
};

export default useLogic;
