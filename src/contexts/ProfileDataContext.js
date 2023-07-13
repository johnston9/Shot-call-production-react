/* Context file to fetch all Profiles
 * handleFollow and unhandleFollow functions
   Which use the followHelper function in utils
 * query context is just used to reload after selection is changed */
import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    // This is used on the Profile page
    profilePage: { results: [] },
    profilesAll: { results: [] },
  });

  const currentUser = useCurrentUser();

  const handleFollow = async (clickedProfile) => {
    /* Function to create a follow item if a users clicks Follow
         and update the states to reflect this */
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      setProfileData((prevState) => ({
        ...prevState,
        profilePage: {
          results: prevState.profilePage.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
        profilesAll: {
          ...prevState.profilesAll,
          results: prevState.profilesAll.results.map((profile) =>
            followHelper(profile, clickedProfile, data.id)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow = async (clickedProfile) => {
    /* Function to remove a follow item if a users clicks unFollow
         and update the states to reflect this */
    try {
      await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);

      setProfileData((prevState) => ({
        ...prevState,
        profilePage: {
          results: prevState.profilePage.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
        profilesAll: {
          ...prevState.profilesAll,
          results: prevState.profilesAll.results.map((profile) =>
            unfollowHelper(profile, clickedProfile)
          ),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          profilesAll: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider value={{setProfileData, handleFollow, handleUnfollow}}>
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};