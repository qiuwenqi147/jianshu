/*
 * @Author: cola
 * @Date: 2022-08-22 15:42:59
 * @Description:
 */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store"
import App from "./router/index";
import Loading from "./components/Loading";
import "./utils/rem";
import "./reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loading />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
