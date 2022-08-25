/*
 * @Author: cola
 * @Date: 2022-08-25 23:26:51
 * @Description: 
 */
import Style from "./style.module.scss"
import useLogic from "./logic"

const TagPopup = () => {
  const { state, events } = useLogic()
  const { changeTagMouseIn, handleLogout } = events
  const { tagsShow } = state;
  
  return (
    <div className={Style.tagPopup} onMouseEnter={() => {changeTagMouseIn(true)}} onMouseLeave={() => {changeTagMouseIn(false)}}>
      <ul className={ tagsShow ? Style.end : ""}>
      {/* <ul> */}
        <li>
          <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe8c8;</i>
          我的主页
        </li>
        <li>
          <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe672;</i>
          收藏的文章
        </li>
        <li>
          <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe761;</i>
          喜欢的文章
        </li>
        <li>
          <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe70a;</i>
          我的钱包
        </li>
        <li>
          <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe8b7;</i>
          设置
        </li>
        <li>
          <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe689;</i>
          帮助与反馈
        </li>
        <li onClick={() => {handleLogout()}}>
          <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe612;</i>
          退出
        </li>
      </ul>
    </div>
    
  )
}

export default TagPopup