/* Page to display the info for the Cast and Crew feature */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import crewaddview from "../../assets/crewaddview.png";
import crewaddview2 from "../../assets/crewaddview2.png";
import crewmoview from "../../assets/crewmoview.png";
import crewmoadd from "../../assets/crewmoadd.png";
import calact from "../../assets/calact.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const CastCrew = () => {
  const history = useHistory();
  
  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
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
    {/* desktop */}
    <div className="d-none d-md-block">
    {/* cast */}
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
    Add Cast members to their Character page allowing their details
       to be pre-filled on selection in the Callsheet Cast Call Times section
    </p>
    <p >
    This also enables Callsheets to be automatically sent to their email
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* crew one */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
      <p >
       The Crew Info conprised two sections the Callsheet Main Crew 
       and the Non-Callsheet Extra Crew 
       </p>
      <p >
       Add the Callsheet Main Crew to their Department allowing their details
       to be pre-filled on the Callsheet Crew Call Times section
       </p>
       <p >
      This also enables Callsheets to be automatically sent to their email
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
    {/* crew two */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={crewaddview2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <p>
      Add the Non-Callsheet Extra Crew to their Department in a section
      below the Main Crew
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* crew mo one */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
      <p >
       The Mobile View Main Crew page
       </p>
       <p >
       The Extra Crew displays similarly on Mobile
       </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={crewmoview} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* crew two */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={crewmoadd} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
      <p >
       The Mobile View Add Main Crew page
    </p>
    <p >
       The Add Extra Crew displays similarly on Mobile
       </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    </div>
    {/* mobile */}
    <div className="d-block d-md-none">
    {/* cast */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={calact} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
    <p >
    Add Cast members to their Character page allowing their details
       to be pre-filled on selection in the Callsheet Cast Call Times section
    </p>
    <p >
    This also enables Callsheets to be automatically sent to their email
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* crew one */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={crewaddview} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
       The Crew Info conprised two sections the Callsheet Main Crew 
       and the Non-Callsheet Extra Crew 
       </p>
      <p >
       Add the Callsheet Main Crew to their Department allowing their details
       to be pre-filled on the Callsheet Crew Call Times section
       </p>
       <p >
      This also enables Callsheets to be automatically sent to their email
      </p>
      </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* crew two */}
    <Row className="mt-3 px-3 align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={crewaddview2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
    <p>
      Add the Non-Callsheet Extra Crew to their Department in a section
      below the Main Crew
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* crew mo one */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={crewmoview} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
       The Mobile View Main Crew page
       </p>
       <p >
       The Extra Crew displays similarly on Mobile
       </p>
      </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* crew mo two */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={crewmoadd} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
      <p >
       The Mobile Add Main Crew page
    </p>
    <p >
       The Add Extra Crew displays similarly on Mobile
       </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    </div>
    </div>
  )
}

export default CastCrew