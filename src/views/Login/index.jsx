/*
 * @Author: cola
 * @Date: 2022-08-25 20:54:44
 * @Description: 
 */
import Style from "./style.module.scss"
import useLogic from "./logic";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const { events } = useLogic();
  const { login } = events;

  return(
    <div className={Style.login}>
      <img className={Style.logo} src="https://13211-1304602868.cos.ap-shanghai.myqcloud.com/logo.png" alt="" />
      <div className={Style.master}>
        {/* 左侧背景 下载按钮 */}
        <div className={Style.downloadbox}>
          <span className={Style.bg}></span>
          <span className={Style.download}>
            <button>下载简书APP</button>
            <span className={Style.qrcode}></span>
          </span>
        </div>
        {/* 右侧登录面板 */}
        <div className={Style.submitbox}>
          <ul>
            <li className={Style.login_li}>登录</li>
            ·
            <li>注册</li>
          </ul>
          {/* 帐号密码输入框 */}
          <div className={Style.inputbox}>
            <span>
              <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe60e;</i>
              <input className={Style.accountnum} placeholder="手机号或邮箱" />
            </span>
            <span>
              <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe6b2;</i>
              <input className={Style.password} placeholder="密码" type="password" />
            </span>
          </div>
          <p>登录遇到问题？</p>
          <button className={Style.submit} onClick={() => {login(navigate)}}>登录</button>
          <small>社交帐号登录</small>
          <span className={Style.iconbox}>
              <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe618;</i>
              <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe608;</i>
              <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe882;</i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login;