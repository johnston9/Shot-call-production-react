/* Page to display the info for the Cast and Crew feature */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import crewaddview from "../../assets/crewaddview.png";
import calact from "../../assets/calact.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const CastCrew = () => {
  const history = useHistory();
  
  return (
    <div>
    <div className={`mt-0 ${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Cast and Crew</h2>
    </div>
    <Row className="mt-1 ml-2" >
        <Col xs={3}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        </Col>
    </Row>
    {/* one */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
      <p >
       Add the Crew easily with the Departments dropdown. Each Department 
       page contains that Department's main positions and five additional
       positions. 
       </p>
       <p>
       All Crew added are automatically displayed on the Callsheet 
       Create page, all you have to do is add the Calltime.
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={crewaddview} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* two */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={calact} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <p >
    Add the Cast member to their Character page along with their
    personal details and pickup/commute info.
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    </div>
  )
}

export default CastCrew