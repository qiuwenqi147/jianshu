/*
 * @Author: cola
 * @Date: 2022-08-25 00:27:18
 * @Description: ;
 */
import { useSearchParams } from "react-router-dom"

const useLogic = () => {
  const [params] = useSearchParams();
  const id = params.get("id")
  console.log("id", id)
}

export default useLogic