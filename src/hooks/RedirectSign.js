import axios from "axios"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { getCookie } from "../utils/utils"

export const useRedirectSign = () => {
  const history = useHistory()

  useEffect(() => {
    const handleMount = async () => {
      try {
        const data = await axios.post("/dj-rest-auth/token/refresh/", {
          refresh: getCookie("JWT_AUTH_REFRESH_COOKIE"),
        })
        console.log(data)
        console.log("RedirectSign")
        history.push("/")
      } catch (err) {
        console.log("Redirected no refresh token")
      }
    }

    handleMount()
  }, [history])
}

export default useRedirectSign
