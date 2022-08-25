/*
 * @Author: cola
 * @Date: 2022-08-22 16:04:01
 * @Description:
 */
import Style from "./style.module.scss"
import useLogic from "./logic";
import Header from "../../components/Header";
import Totop from "../../components/Totop";

function Detail() {
  useLogic();
  return (
    <div className={Style.detail}>
      <Header />
      详情
      <Totop />
    </div>
  );
}

export default Detail;
