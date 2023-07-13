import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

export const setTokenTimestamp = (data) => {
    const refreshShotCallerProTimestamp = jwtDecode(data?.refresh_token).exp;
    localStorage.setItem("refreshShotCallerProTimestamp", refreshShotCallerProTimestamp);
    console.log(`timestamp set ${refreshShotCallerProTimestamp} ` )
  };
  
  export const shouldRefreshToken = () => {
    return !!localStorage.getItem("refreshShotCallerProTimestamp");
  };
  
  export const getRefreshToken = () => {
    return localStorage.getItem("refreshShotCallerProTimestamp");
  };
  
  export const removeTokenTimestamp = () => {
    localStorage.removeItem("refreshShotCallerProTimestamp");
  };

export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

export const followHelper = (profile, clickedProfile, following_id) => {
  return profile.id === clickedProfile.id
    ? // update followers count and set following id
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id,
      }
    : profile.is_owner
    ? // update following count
      { ...profile, following_count: profile.following_count + 1 }
    : // return unchanged
      profile;
};

export const unfollowHelper = (profile, clickedProfile) => {
  return profile.id === clickedProfile.id
    ? // update followers count and set following id
      {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
      }
    : profile.is_owner
    ? // update following count
      { ...profile, following_count: profile.following_count - 1 }
    : // return unchanged
      profile;
};