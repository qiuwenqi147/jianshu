/*
 * @Author: cola
 * @Date: 2022-08-25 23:27:08
 * @Description: 
 */
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../../../store/global";

const useLogic = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.globalStore)

  // 鼠标悬停用户信息tag
  const changeTagMouseIn = (status) => {
    // 判断status是移入还是移出  移出0.2秒后派发action
    if(status) {
      dispatch(globalActions.changeTagMouseIn(status))
    } else {
      setTimeout(() => {
        dispatch(globalActions.changeTagMouseIn(status))
      }, 200);
    }
  }

  const handleLogout = () => {
    dispatch(globalActions.logout())
  }

  const events = { changeTagMouseIn, handleLogout}

  return { state, events }

}

export default useLogic;