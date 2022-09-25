/*
 * @Author: cola
 * @Date: 2022-08-22 15:42:59
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store"
import App from "./router/index";
import "./utils/rem";
import "./reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
