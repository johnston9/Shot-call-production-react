/* Page to fetch all the Profiles data and render the cover info 
 * Contains the Profile component to which it passes the data 
   for each Profile cover */
import React from "react"
import Asset from "../../components/Asset";
import Profile from "./Profile";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useProfileData } from "../../contexts/ProfileDataContext";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import TopBox from "../../components/TopBox";

const ProfilesPage = () => {
  const history = useHistory();
  const {profilesAll} = useProfileData();

  return (
    <div>
      <TopBox title="Profiles"/>
      <Row>
      <Col xs={3}>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      </Col>
      </Row>
      <Row>
      <Col xs={{span: 8, offset: 2}} className="text-center" >
      <p>Click on a Profile's "follow" button to add them to 
                your feed.
           </p>
      </Col>
      </Row>
      <Row>
      {profilesAll.results.length ? (
        <>
          {profilesAll.results.map((profile) => (
            <Col xs={6} sm={4} md={3} lg={2} className="px-2 py-2 p-0 p-lg-2">
            <Profile key={profile.id} profile={profile} />
            </Col>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
      </Row>
    </div>
  );
};

export default ProfilesPage;