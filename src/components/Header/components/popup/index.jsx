/*
 * @Author: cola
 * @Date: 2022-08-23 10:03:57
 * @Description: 搜索历史弹窗
 */
import Style from "./style.module.scss";
import useLogic from "./logic";

const Popup = (props) => {
  const { events } = useLogic();
  const { deleteHistory, changeMouseIn, setInputvalue } = events;
  const { historyList } = props;

  return (
    <div
      className={Style.popup}
      onMouseEnter={() => {changeMouseIn(true)}}
      onMouseLeave={() => {changeMouseIn(false)}}
    >
      <ul>
        {(historyList || []).map((item, index) => (
          <li
            key={index}
            onClick={() => {setInputvalue(item)}}
          >
            <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe63b;</i>
            <span>{item}</span>
            {/* 删除历史图标 */}
            <i
              className={[Style.iconfont, Style.delete, "iconfont"].join(" ")}
              onClick={(e) => {
                e.stopPropagation();
                deleteHistory(item);
              }}
            >&#xe601;</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;
