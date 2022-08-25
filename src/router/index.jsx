/*
 * @Author: cola
 * @Date: 2022-08-22 16:07:50
 * @Description:
 */
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = lazy(() => import(/* webpackChunkName: "Login" */ "../views/Login"));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "../views/Home"));
const Detail = lazy(() => import(/* webpackChunkName: "Detail" */ "../views/Detail"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
