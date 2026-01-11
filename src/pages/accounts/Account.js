/* Component in Accountpage to display the Profile and Account data
 * Contains the CreateProject and Projects components */
import React from "react";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../../styles/Account.module.css";
import { Image } from "react-bootstrap";
import { ProfileEditDropdown } from "../../components/UniDropDown";
import Projects from "./Projects";
import { useHistory } from "react-router-dom";
import useActivePlan from "../../hooks/useActivePlan";
import { hasBudgetPlan } from "../../utils/hasBudgetPlan";
import toast from "react-hot-toast";

const Account = ({
  id,
  profile,
  account,
  stripeCategoryType,
  stripeProjectName,
  stripeSessionId,
  stripeSuccess,
  profileInfo,
}) => {
  const history = useHistory();

  const topProfile = (
    <div className={`${styles.Top}`}>
      <Row className="">
        <Col md={3}>
          <Image
            className={styles.ProfileImage}
            height={40}
            width={40}
            roundedCircle
            src={profileInfo?.data?.image}
          />
          {/* <span className={`${styles.TopName} pl-2`}>
            {account?.data?.results[0]?.owner}
          </span> */}
        </Col>
        <Col md={6} className="text-center">
          <h5 className={` ${styles.TopCompany}`}>
            {account?.data?.results[0]?.company}
            <span className={`pl-5 ${styles.TopName}`}>
              {account?.data?.results[0]?.name}
            </span>
          </h5>
        </Col>
        <Col md={3}>
          <ProfileEditDropdown id={id} />
        </Col>
      </Row>
    </div>
  );

  const topProfileMo = (
    <div className={`${styles.Top}`}>
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="text-center">
          <Image
            className={styles.ProfileImage}
            height={40}
            width={40}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col xs={2}>
          <ProfileEditDropdown id={id} />
        </Col>
        <Col xs={12} className="text-center">
          <h3 className={`pl-5 ${styles.TopCompany}`}>{profile?.company}</h3>
        </Col>
        <Col xs={12} className="text-center">
          <span className={`pl-5 ${styles.TopName}`}>{profile?.name}</span>
        </Col>
      </Row>
    </div>
  );

  const accountInfo = (
    <div className="px-3">
      <Row>
        <Col className="my-2">
          <p className="pb-0 float-right ml-3">
            Account Created: {account?.data?.results[0].created_at}
          </p>
          <p className="pb-0 float-right">
            Account Owner: {account?.data?.results[0].owner}
          </p>
        </Col>
      </Row>
    </div>
  );
  const { currentlyActivePlans } = useActivePlan();

  const handleShowBudget = () => {
    if (!hasBudgetPlan(currentlyActivePlans)) {
      toast.error(`You don't have any active packages!`);
      history.push(`/subscription-plans`);
      return;
    }

    // history.push(`/profiles/${userData?.pk}`);
    history.push("/my-budgets");
    // setShowCreateProject((showCreateProject) => !showCreateProject);
  };
  return (
    <div className="px-3">
      <div className="d-none d-md-block">{topProfile}</div>
      <div className="d-block d-md-none">{topProfileMo}</div>
      {/* budget button */}
      <Row className="my-2">
        <Col xs={6} className="">
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => history.goBack()}
          >
            Back
        </Button>
        </Col>
        <Col xs={6} className="">
        <Button
          className={`float-right px-5 ${btnStyles.Button} ${btnStyles.Order} `}
          onClick={handleShowBudget}
        >BUDGETS
        </Button>
        </Col>
      </Row>
      <Row className="px-3">
        <Col className="text-center">
        <h3 className="my-3">
          {/* <h3 className="my-3" style={{ marginLeft: "130px" }}> */}
            PROJECTS</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Projects
            id={id}
            stripeCategoryType={stripeCategoryType}
            stripeProjectName={stripeProjectName}
            stripeSessionId={stripeSessionId}
            stripeSuccess={stripeSuccess}
          />
        </Col>
      </Row>
      {accountInfo}
    </div>
  );
};

export default Account;
