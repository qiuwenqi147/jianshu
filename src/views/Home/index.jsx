/*
 * @Author: cola
 * @Date: 2022-08-22 16:04:01
 * @Description:
 */
import { lazy } from "react";
const Header = lazy(() =>
  import(/* webpackChunkName: "Header" */ "../../components/Header")
);

function Home() {
  return (
    <>
      <Header />
    </>
  );
}

export default Home;
 