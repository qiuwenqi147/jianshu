/*
 * @Author: cola
 * @Date: 2022-08-22 16:04:01
 * @Description:
 */
import { lazy } from "react";
const Header = lazy(() =>
  import(/* webpackChunkName: "Header" */ "../../components/Header")
);

function Detail() {
  return (
    <>
      <Header />
      <div>详情</div>
    </>
  );
}

export default Detail;
