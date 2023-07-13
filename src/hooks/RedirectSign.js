import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useRedirectSign = () => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const data = await axios.post("/dj-rest-auth/token/refresh/");
        console.log(data);
        console.log("RedirectSign");
        history.push("/");
      } catch (err) {
        console.log("Redirected no refresh token")
      }
    };

    handleMount();
  }, [history]);
};

export default useRedirectSign