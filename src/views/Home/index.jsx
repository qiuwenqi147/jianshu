/*
 * @Author: cola
 * @Date: 2022-08-22 16:04:01
 * @Description:
 */
import Style from "./style.module.scss";
import useLogic from "./logic";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import ArticleList from "./components/ArticleList";
import RecommendList from "./components/RecommendList";
import Author from "./components/Author";
import Totop from "../../components/Totop";

function Home() {
  const { state } = useLogic();
  const { bannerImg, topicList } = state;

  return (
    <div className={Style.home}>
      <Header />
      {/* 左侧区域 */}
      <div className={Style.left}>
        {/* Banner */}
        <Banner bannerImg={bannerImg} topicList={topicList} />
        {/* 文章列表 */}
        <ArticleList />
      </div>
      {/* 右侧区域 */}
      <div className={Style.right}>
        {/* 导航 下载App */}
        <RecommendList />
        {/* 推荐作者 */}
        <Author />
      </div>
      <Totop />
    </div>
  );
}

export default Home;
