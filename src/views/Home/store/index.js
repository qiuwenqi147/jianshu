/*
 * @Author: cola
 * @Date: 2022-08-22 22:01:37
 * @Description:
 */
import { createSlice } from "@reduxjs/toolkit";
import state from "./state";
import * as actions from "./actions"

const homeSlice = createSlice({
  name: "homeSlice",
  initialState: state,
  reducers: actions,
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;
