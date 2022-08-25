/*
 * @Author: cola
 * @Date: 2022-08-22 16:07:12
 * @Description:
 */
import Style from "./style.module.scss";
import useLogic from "./logic";

const ArticleList = () => {
  const { state, events } = useLogic();
  const { articleList } = state;
  const { goPage } = events
  
  return (
    <ul className={Style.articlelist}>
      {(articleList || []).map((item) => (
        <li key={item.id} className={Style.articleitem}>
          <div className={Style.container}>
            {/*文章标题*/}
            <h3 onClick={() => {goPage(item.id)}}>{item.title}</h3>
            {/*文章内容*/}
            <p>{item.desc}</p>
            <div className={Style.info}>
              {/*阅读数*/}
              <span className={Style.active}>
                <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe63d;</i>
                {item.start}
              </span>
              {/*作者*/}
              <small className={Style.hover}>{item.author}</small>
              {/*留言*/}
              <span className={Style.hover}>
                <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xe633;</i>
                {item.liuyan}
              </span>
              {/*点赞*/}
              <span>
                <i className={[Style.iconfont, "iconfont"].join(" ")}>&#xeca1;</i>
                {item.zan}
              </span>
              {/*打赏*/}
              {item.shang ? (
                <span>
                  <i className={[Style.shang, "iconfont"].join(" ")}>&#xe611;</i>
                  {item.shang}
                </span>
              ) : ("")}
            </div>
          </div>
          {/*文章配图*/}
          {item.imgUrl ? <img src={item.imgUrl} alt=""></img> : ""}
        </li>
      ))}
      <button>阅读更多</button>
    </ul>
  );
};

export default ArticleList;
