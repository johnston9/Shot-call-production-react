/* Component in Accountpage to display the Profile and Account data
 * Contains the CreateProject and Projects components */
import React, { useEffect, useState } from "react"; 
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
import InfoAcc from "./InfoAcc";

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
  const [showImp, setShowImp] = useState(false);

  const topProfile = (
    <div className={`${styles.Top}`}>
      <Row className="py-2 d-flex align-items-center">
        <Col md={3}>
          <Image
            className={`${styles.Avatar}`}
            height={50}
            width={50}
            src={profileInfo?.data?.image}
          />
        </Col>
        <Col md={6} className="text-center">
        <h5 className={` ${styles.TopName}`}>
            ACCOUNT PAGE
          </h5>
          <h3 className={`pt-3 ${styles.TopCompany}`}>
            {account?.data?.results[0]?.name} - {account?.data?.results[0]?.company}
          </h3>
        {/* <h3 className={` ${styles.TopName}`}>
            {account?.data?.results[0]?.name}
          </h3>
          <h5 className={` ${styles.TopCompany}`}>
            {account?.data?.results[0]?.company}
          </h5> */}
        </Col>
        <Col md={3} className="d-flex align-items-center">
          <ProfileEditDropdown id={id} />
        </Col>
      </Row>
    </div>
  );

  const topProfileMo = (
    <div className={`${styles.Top} text-center`}>
      <Row className="d-flex align-items-center py-1">
        <Col xs={2} className="d-flex align-items-center" >
        <Image
            className={`${styles.Avatar}`}
            height={30}
            width={30}
            src={profileInfo?.data?.image}
          />
        </Col>
        <Col xs={8}>
        <h5 className={` ${styles.TopName}`}>
            ACCOUNT PAGE
          </h5>
        </Col>
        <Col xs={2} className="d-flex align-items-center">
          <ProfileEditDropdown id={id} />
        </Col>
      </Row>
      <Row>
      <Col>
      <h3 className={`pt-3 ${styles.TopCompany}`}>
            {account?.data?.results[0]?.name} - {account?.data?.results[0]?.company}
          </h3>
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
      {/* back button */}
      <Row className="mt-1">
        <Col xs={6} className="">
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => history.goBack()}
          >
            Back
        </Button>
        </Col>
        <Col xs={6} >
        <Button
          className={`float-right px-3 ${btnStyles.Button} ${btnStyles.Order}`}
          onClick={() => setShowImp(showImp => !showImp)}
        >INFO
        </Button>
        </Col>
      </Row>
      {!showImp ? (
          ""
              ) : (
                <InfoAcc  /> 
      ) } 
      <Row className={` mb-0`}>
      <Col md={{span: 8, offset: 2}} className={`text-center mb-0`} >
      <p className={`${styles.SmallSize} mb-0`}>
      Click here to go to the Seperate Budgets page
      </p>
      </Col>
      </Row>
      {/* budgets */}
      <Row className="mb-3">
        <Col xs={12} className="text-center">
        <Button
          className={`px-5 ${btnStyles.Button} ${btnStyles.Track}`}
          onClick={handleShowBudget}
        >BUDGETS
        </Button>
        </Col>
      </Row>
      <Row className="px-3">
        <Col className="text-center">
        <h3 className={`mt-1 py-1 text-center ${styles.SubTitle4}`}
      >PLATFORM PROJECTS
      </h3>
        {/* <h3 className="mt-2">PROJECTS</h3>
        <hr className={`mt-0 mb-0 py-1 ${styles.BreakTitle}`}/> */}
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
