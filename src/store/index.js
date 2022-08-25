/*
 * @Author: cola
 * @Date: 2022-08-22 22:06:35
 * @Description:
 */
import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../views/Home/store";
import globalSlice from "./global";

const store = configureStore({
  reducer: {
    homeStore: homeSlice,
    globalStore: globalSlice,
  },
});

export default store;
