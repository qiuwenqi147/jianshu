/*
 * @Author: cola
 * @Date: 2022-08-22 22:12:15
 * @Description: 
 */

import {createSlice} from "@reduxjs/toolkit";
import state from "./state";
import * as actions from "./actions"

const globalSlice = createSlice({
  name: "globalStore",
  initialState: state,
  reducers: actions
})

export const globalActions = globalSlice.actions;

export default globalSlice.reducer;