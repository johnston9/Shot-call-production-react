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
import fullsize from "../../assets/fullsize.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { Card } from 'react-bootstrap';

const CharsLocates = () => {
  const history = useHistory();
  
  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
    <h2 className={`text-center py-2 ${styles.SubTitle } ${appStyles.cinzel}`}>
            CHARACTERS & LOCATIONS</h2>
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
    {/* char one */}
    <Row className="px-3 mt-4 pb-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Create Characters then add the Actor Details which will be automaticlly added
    to the Callsheet
    </h4>
    <h4 >
    View and add Character Moodboards from the links on top
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={char1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* char two */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={char2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Add the Character Makeup Image and Details
    and up to seven Costume Images and Details
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* loc one  */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Create Locations then add the Shooting Address which will be passed to the Schedule
    </h4>
    <h4 >
    View and add the Location's Moodboards from the links on top
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={loca1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* loc two */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={loca2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Add up to 8 Location Images and Descriptions
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* full size */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Click on images for Fullsize view
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={fullsize} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    </div>
    {/* mobile */}
    <div className="d-block d-md-none">
    {/* char one */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={char1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Create Characters then add the Actor Details which will be automaticlly added
    to the Callsheet
    </h4>
    <h4 >
    View and add Character Moodboards from the links on top
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* char two */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={char2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Add the Character Makeup Image and Details
    and up to seven Costume Images and Details
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* loc one  */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={loca1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Create Locations then add the Shooting Address which will be passed to the Schedule
    </h4>
    <h4 >
    View and add the Location's Moodboards from the links on top
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* loc two */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={loca2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Add up to 8 Location Images and Descriptions
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* full size */}
    <Row className="px-3 pb-4 mt-4  d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={fullsize} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Click on images for Fullsize view
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    </div>
    </div>
  )
}

export default CharsLocates