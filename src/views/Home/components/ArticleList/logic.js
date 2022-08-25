/*
 * @Author: cola
 * @Date: 2022-08-22 16:07:12
 * @Description:
 */

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogic = () => {
  const navigate = useNavigate()
  const state = useSelector((state) => state.homeStore);

  const goPage = (id) => {
    navigate("/detail?id=" + id)
  }

  const events = { goPage }

  return { state, events };
};
export default useLogic;
