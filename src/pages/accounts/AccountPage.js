/* Page to fetch the user's Profile and Account data
 * Contains the Account Component to which it passes the data*/
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Asset from "../../components/Asset";
import { useLocation, useParams } from "react-router-dom";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import Account from "./Account";
import useRedirect from "../../hooks/Redirect";

function AccountPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const stripeSuccess = queryParams.get("success");
  const stripeSessionId = queryParams.get("session_id");
  const stripeProjectName = queryParams.get("project_name");
  const stripeCategoryType = queryParams.get("category_type");

  // useRedirect()
  const [hasLoaded, setHasLoaded] = useState(false);
  const [account, setAccount] = useState({ results: [] });
  const [profileInfo, setProfileInfo] = useState(null);
  // eslint-disable-next-line
  const [name, setName] = useState({ results: [] });
  const { id } = useParams();

  const { setProfileData } = useSetProfileData();
  const { profilePage } = useProfileData();

  const [profile] = profilePage.results;

  const fetchData = async () => {
    // console.log("token in account", localStorage.getItem("accessToken"));
    try {
      if (localStorage.getItem("accessToken")) {
        const [{ data: profilePage }, { data: accountInfo }] =
          await Promise.all([
            axiosInstance.get(`/profiles/${id}/`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }),
            axiosInstance.get(`/accounts/?owner__profile=${id}`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              withCredentials: true,
            }),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          profilePage: { results: [profilePage] },
        }));
        setAccount(accountInfo);
        setProfileInfo(profilePage);
        // console.log(profilePage);
        // console.log(profilePage);
        setName(accountInfo?.data?.results[0].name);
        setHasLoaded(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, setProfileData]);

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2">
        {hasLoaded ? (
          <>
            <Account
              account={account}
              profile={profile}
              id={id}
              stripeCategoryType={stripeCategoryType}
              stripeProjectName={stripeProjectName}
              stripeSessionId={stripeSessionId}
              stripeSuccess={stripeSuccess}
              profileInfo={profileInfo}
            />
          </>
        ) : (
          <Asset spinner />
        )}
      </Col>
    </Row>
  );
}

export default AccountPage;
