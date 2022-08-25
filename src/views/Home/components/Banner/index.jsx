/*
 * @Author: cola
 * @Date: 2022-08-22 16:06:58
 * @Description:
 */
import Style from "./style.module.scss";

const Banner = (props) => {
  const { bannerImg, topicList } = props;
  
  return (
    <div className={Style.banner}>
      {/*banner图*/}
      <a
        className={Style.bannerimg}
        target="_blank"
        rel="noreferrer"
        href="https://www.jianshu.com/activity?utm_medium=index-banner&utm_source=desktop"
      >
        <img src={bannerImg}alt="" />
      </a>
      {/*导航标签*/}
      <div className={Style.topiclist}>
        {
         (topicList || []).map(item => (
          <span key={item.id} className={Style.topicitem}>
            <img src={item.imgUrl} alt="" />
            <p>{item.title}</p>
          </span>
         ))
        }
      </div>
    </div>
  );
};

export default Banner;
