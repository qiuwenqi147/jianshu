/*
 * @Author: cola
 * @Date: 2022-08-23 10:55:01
 * @Description:
 */
import { useDispatch, useSelector } from "react-redux";
import { globalActions } from "../../../../store/global";
const useLogic = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.globalStore)
  
  // 删除搜索历史
  const deleteHistory = (item) => {
    dispatch(globalActions.deleteHistory(item));
  };
  // 改变鼠标悬停状态
  const changeMouseIn = (status) => {
    dispatch(globalActions.changeMouseIn(status));
  };
  // 改变Input内容
  const setInputvalue = (val) => {
    dispatch(globalActions.setInputvalue(val));
  };
  
  const events = { deleteHistory, changeMouseIn, setInputvalue };

  return { state, events };
};

export default useLogic;
