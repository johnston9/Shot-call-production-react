/* useRedirect function to direct non logged in users to the landing page
 * Fix needed - Gmail mobile browser issue: 
   The app does not work when the link is clicked in Gmail. 
   The DRF tail logs show 401 for requests
   If the link in Gmail is pressed so as to offer an open in 
   browser option the app does work.
 * The Gmail mobile browser issue was affecting the original code which
   used a request to see if there is a refresh token */
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

export const useRedirect = () => {
  const history = useHistory();
  const user = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      if (!user) {
        history.push("/");
      }
    };

    handleMount();
  }, [user, history]);
};

export default useRedirect