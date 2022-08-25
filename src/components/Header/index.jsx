/* eslint-disable jsx-a11y/anchor-has-content */
/*
 * @Author: cola
 * @Date: 2022-08-22 16:06:34
 * @Description:
 */
import useLogic from "./logic";
import Style from "./style.module.scss";
import Popup from "./components/popup";
import TagPopup from "./components/tagpopup";

const Header = () => {
  const { state, events } = useLogic();
  const { inputvalue, tags, focused, historyList, mouseIn, inputRef, userInfo, userInfoMouseIn, tagsMouseIn, tagsShow } = state;
  const { changeInputvalue, handleSelect, changeFocused, handleEnter, addHistoryList, handleLogin, changeUserInfoMouseIn } = events;

  return (
    <div className={Style.header}>
      {/* logo */}
      <a className={Style.logo} href="/" />
      {/* 导航标签 */}
      <div className={Style.nav}>
        {tags.map((item) => (
          <span
            key={item.icon}
            className={[Style.nav_item, item.checked ? Style.active : ""].join(" ")}
            onClick={() => {handleSelect(item)}}
          >
            <i
              className={[Style.nav_item_iconfont, item.icon, "iconfont"].join(" ")}
            ></i>
            <span>{item.text}</span>
          </span>
        ))}
        {/* 搜索框 */}
        <div className={Style.inputwapper}>
          <input
            ref={inputRef}
            className={[Style.input, focused ? Style.focused : ""].join(" ")}
            value={inputvalue}
            onChange={(e) => {changeInputvalue(e)}}
            onFocus={() => {changeFocused(true)}}
            onBlur={() => {changeFocused(false)}}
            onKeyUp={(e) => {handleEnter(e)}}
            placeholder="搜索"
          />
          <i
            onClick={() => {addHistoryList()}}
            className={[Style.iconfont,focused ? Style.focused : "","iconfont",].join(" ")}
          >&#xe651;</i>
          {/* 历史弹窗 */}
          {
            (focused || mouseIn) && historyList.length ? <Popup historyList={historyList} /> : ""
          }
        </div>
      </div>
      {/* 个人信息（登录） */}
      <div className={Style.right}>
        <span className={Style.ziti}>Aa</span>
        {/* 存在用户资料时显示头像 否则 显示登录按钮 */}
        {userInfo.name ? (
          <div className={Style.img_box} onMouseEnter={() => {changeUserInfoMouseIn(true)}} onMouseLeave={() => {changeUserInfoMouseIn(false)}}>
            <img
              alt="加载失败..."
              src={userInfo.url}
            />
            <i className={Style.sanjiao}></i>
          </div>
        ) : (
          <button className={Style.login} onClick={() => {handleLogin()}}>登录</button>
        )}
        <button className={Style.write}>
          <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe600;</i>
          <span>写文章</span>
        </button>
        {userInfoMouseIn || tagsMouseIn || tagsShow ? (<TagPopup />) :  ""}
      </div>
    </div>
  );
};

export default Header;
