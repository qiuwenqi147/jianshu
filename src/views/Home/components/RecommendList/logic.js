import { useSelector } from "react-redux";

/*
 * @Author: cola
 * @Date: 2022-08-23 23:24:49
 * @Description:
 */
const useLogic = () => {
  const state = useSelector((state) => state.homeStore);

  return { state };
};
export default useLogic;
