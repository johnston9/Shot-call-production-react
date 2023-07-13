/* Page to fetch the user's Profile and Account data
 * Contains the Account Component to which it passes the data*/
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Asset from "../../components/Asset";
import { useParams } from "react-router-dom";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";
import Account from "./Account";
import useRedirect from "../../hooks/Redirect";

function AccountPage() {
  useRedirect();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [account, setAccount] = useState({ results: [] });
  // eslint-disable-next-line
  const [name, setName] = useState({ results: [] });
  const { id } = useParams();

  const { setProfileData } = useSetProfileData();
  const { profilePage } = useProfileData();

  const [profile] = profilePage.results;

  const fetchData = async () => {
    try {
      const [{ data: profilePage }, { data: accountInfo }] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/accounts/?owner__profile=${id}`),
        ]);
      setProfileData((prevState) => ({
        ...prevState,
        profilePage: { results: [profilePage] },
      }));
      setAccount(accountInfo);
      console.log(accountInfo);
      console.log(profilePage);
      setName(accountInfo.results[0].name)
      setHasLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, setProfileData]);

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" >
          {hasLoaded ? (
            <>
              <Account 
              account={account}
              profile={profile}
              id={id}
               />
            </>
          ) : (
            <Asset spinner />
          )}
      </Col>
    </Row>
  );
}

export default AccountPage