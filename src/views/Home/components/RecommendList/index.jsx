/*
 * @Author: cola
 * @Date: 2022-08-23 23:24:31
 * @Description:
 */
import Style from "./style.module.scss";
import useLogic from "./logic";

const RecommendList = () => {
  const { state } = useLogic();
  const { recommendList } = state;
  
  return (
    <div className={Style.recommendlist}>
      <ul>
        {(recommendList || []).map((item) => (
          <li key={item.id}>
            <img src={item.imgUrl} alt="" />
          </li>
        ))}
      </ul>
      <div className={Style.download}>
        <img
          src="https://13211-1304602868.cos.ap-shanghai.myqcloud.com/qrcode.png"
          alt=""
        />
        <span>
          <p>下载简书手机App</p>
          <small>随时随地发现和创作内容</small>
        </span>
        {/*二维码弹窗*/}
        <div className={Style.qrcode}>
          <img
            src="https://13211-1304602868.cos.ap-shanghai.myqcloud.com/qrcode.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RecommendList;
