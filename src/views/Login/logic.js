/* eslint-disable react-hooks/exhaustive-deps */
/*
 * @Author: cola
 * @Date: 2022-08-25 20:54:56
 * @Description: 
 */
import { useDispatch } from "react-redux"
import { handleLogin } from "../../store/actions";

const useLogic = () => {
  const dispatch = useDispatch();

  const login = (navigate) => {
    dispatch(handleLogin(navigate))
  }

  const events = { login }

  return { events }
}

export default useLogic;