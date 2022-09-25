import { lazy, Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
const Login = lazy(() => import(/* webpackChunkName: "Login" */ "../views/Login"));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ "../views/Home"));
const Detail = lazy(() => import(/* webpackChunkName: "Detail" */ "../views/Detail"));

function Redirect({ to }) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to);
  });
  return null;
}

const App = () => {
  const state = useSelector(state => state.globalStore)
  const [ login, setLogin ] = useState()

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    setLogin(userInfo && userInfo.timer > Date.now())
  }, [state.userInfo])

  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={!login ? <Login /> : <Redirect to="/" />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
