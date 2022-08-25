/*
 * @Author: cola
 * @Date: 2022-08-24 23:31:24
 * @Description: 
 */
import Style from "./style.module.scss"
import useLogic from "./logic"

const Totop = () => {
  const { state, events } = useLogic()
  const { showScroll } = state;
  const { totop } = events

  return(
    <>
      {showScroll ? <div className={Style.totop} onClick={() => {totop()}}>回到<br />顶部</div> : ""}
    </>
  )
}

export default Totop;