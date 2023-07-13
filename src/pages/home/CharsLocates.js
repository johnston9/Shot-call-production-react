/* Page to display the info for the Characters and Locations features */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import char1 from "../../assets/char1.png";
import char2 from "../../assets/char2.png";
import loca1 from "../../assets/loca1.png";
import loca2 from "../../assets/loca2.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const CharsLocates = () => {
  const history = useHistory();
  
  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
    <div className={`mt-0 ${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Characters and Locations</h2>
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
    <div className="px-3 mt-3 mt-md-3">
    {/* char one */}
    <Row className="pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
    <p >
    Add the Character Details, Actor Details and Actor Callsheet Details
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={char1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    </div>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* char two */}
    <Row className="px-3 pb-4 mt-4  d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={char2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <p >
    Add the Character Makeup Details and Image 
    and up to seven Costume Details and Images
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* loc one  */}
    <Row className="px-3 pb-4 mt-4  d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Add Location details and addresses
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={loca1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* loc two */}
    <Row className="px-3 pb-4 mt-4  d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={loca2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <p >
    Add Location Images 
    </p>
    </Col>
    </Row>
    </div>
  )
}

export default CharsLocates