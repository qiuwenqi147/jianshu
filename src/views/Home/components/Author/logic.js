/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: cola
 * @Date: 2022-08-24 00:26:27
 * @Description:
 */
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../../store";

const useLogic = () => {
  const dispatch = useDispatch()
  let state = useSelector((state) => state.homeStore);
  const changeRef = useRef()
  const [pageNum, setPageNum] = useState(1);

  console.log("------Author")

  useEffect(() => {
    if(pageNum === 1) return
    console.log("页面增加调取接口", pageNum)
  }, [pageNum])
  // 点击换一批 
  const handleChange = () => {
    // 图标旋转180度
    var num = Number(changeRef.current.style.transform.replace(/[^0-9]/ig,''));
    changeRef.current.style.transform = `rotate(${num + 360}deg)`
    console.log("pageNum", pageNum)
    setPageNum(() => pageNum+1)

    dispatch(homeActions.changeAuthor())
  }

  state = {...state, changeRef }
  
  const events = { handleChange }

  return { state, events };
};
export default useLogic;
