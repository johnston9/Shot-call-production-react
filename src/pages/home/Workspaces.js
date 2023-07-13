/* Page to display the info for the Scene Page
    Breakdowns and Workspaces features */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import work1 from "../../assets/work1.png";
import work4 from "../../assets/work4.png";
import work5 from "../../assets/work5.png";
import work6 from "../../assets/work6.png";
import break23 from "../../assets/break23.png";
import charbg from "../../assets/charbg.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Workspaces = () => {
  const history = useHistory();
  
  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
    <div className={`mt-0 ${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Scene Page - Breakdowns and Workspaces</h2>
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
    Create the Scene Pages quickly then easily select the 
    Scene
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* two */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3 mb-3">
    <Image src={break23} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <p >
    Create Breakdowns that include Department Info which will be
    automatically loaded in all other features including Stripboards
    </p>
    </Col>
    </Row>
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={charbg} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <p >
    Create the Character / BG Breakdown which includes
    Costumes and will also be
    automatically loaded in all other features including Stripboards
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* three */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Collaborate, design and build in the Scene Universal Workspace and or the
    Scene Department Workspaces using the Workspace Guide to instruct.
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work5} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* four */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work6} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <p >
    Use Requirements and Workspace Posts to 
    collaborate on the Scene
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* five */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Upload Ideas and Images in Posts each with a Comments Section
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work4} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    </div>
  )
}

export default Workspaces