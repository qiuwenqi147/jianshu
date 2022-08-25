/*
 * @Author: cola
 * @Date: 2022-08-24 00:25:51
 * @Description: 
 */
import Style from "./style.module.scss";
import useLogic from "./logic";

const Author = () => {
  const { state, events } = useLogic();
  const { authorList, changeRef } = state;
  const { handleChange } = events;

  return (
    <div className={Style.author}>
      <div className={Style.header}>
        <small>推荐作者</small>
        <span onClick={() => {handleChange()}}>
          <i ref={changeRef} className={[Style.iconfont, "iconfont"].join(" ")}>&#xe6a7;</i>
          换一批
        </span>
      </div>
      {/* 作者列表 */}
      <ul>
        {
          (authorList || []).map(item => (
            <li key={item.id}>
              {/* 头像 */}
              <img src={item.img} alt="" />
              {/* 作者信息 */}
              <span className={Style.info}>
                <p>{item.name}</p>
                <small>写了{item.writing}字 · {item.like}喜欢</small>
              </span>
              <span className={Style.follow}>
                <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe601;</i>
                关注
              </span>
            </li>
          ))
        }
      </ul>
      <button>查看全部</button>
    </div>
  )
}

export default Author;