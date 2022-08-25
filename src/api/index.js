/*
 * @Author: cola
 * @Date: 2022-08-23 13:44:26
 * @Description:
 */
import Request from "./request";

/* Common */
//
export const login = (data) =>
  Request.get("/index/login", data);

export const getHistoryList = (data) =>
  Request.get("/home/getHistoryList", data);

export const getHomeData = (data) =>
  Request.get("/home/getHomeData", data);

export const getHeaderTags = (data) =>
  Request.get("/home/getHeaderTags", data);
