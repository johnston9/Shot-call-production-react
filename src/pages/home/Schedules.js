/* Page to display the info for the Schedule and Stripboard features */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import shed1 from "../../assets/shed1.png";
import strip1 from "../../assets/strip1.png";
import schedchar77 from "../../assets/schedchar77.png";
import schadd from "../../assets/schadd.png";
import mosched1 from "../../assets/mosched1.png";
import mosched2 from "../../assets/mosched2.png";
import mosched3 from "../../assets/mosched3.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { Card } from 'react-bootstrap';

const Schedules = () => {
    const history = useHistory();
  
    return (
      <div className={`mt-0 ${styles.BlueBody}`}>
      <h2 className={`text-center py-2 ${styles.SubTitle } ${appStyles.cinzel}`}>
      SCHEDULE & STRIPBOARDS</h2>
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
      {/* one */}
      <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Create Shooting Schedules Stripboards in minutes
      </h4>
      <h4 >
      Use Drag and Drop to re-order Shots quickly automatically changing
      Shot Numbers
      </h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={shed1} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* two */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={schadd} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Create the Stripboard by selecting Scenes by Dropdowns to autofill the 
      Stripboard Scene Breakdown then add the Shooting Info
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* three  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Click the Info tab to view pre-filled Info from the Scene Breakdown
      </h4>
      </div>    
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={strip1} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* four */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={schedchar77} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3" >
       <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Click the Cast tab to view pre-filled Cast, BG and Costumes Info from the Scene Breakdown
      </h4>
      </div>   
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* 5 */}
      <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Stripboards in Mobile View
      </h4>
      </div> 
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={mosched1} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* 6 */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={mosched2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Schedules Info and Characters/BG in Mobile View
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* 7  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
        <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Stripboard Edit page in Mobile View
      </h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={mosched3} alt="image" 
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
      {/* one */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1">
      <Image src={shed1} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-5" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Create Shooting Schedules Stripboards in minutes
      </h4>
      <h4 >
      Use Drag and Drop to re-order Shots quickly automatically changing
      Shot Numbers
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* two */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1">
      <Image src={schadd} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-3 mt-5" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Create the Stripboard by selecting Scenes by Dropdowns to autofill the 
      Stripboard Scene Breakdown then add the Shooting Info
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* three  */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1">
      <Image src={strip1} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-5" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Click the Info tab to view pre-filled Info from the Scene Breakdown
      </h4>
      </div>         
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* four */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={schedchar77} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-5" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Click the Cast tab to view pre-filled Cast, BG and Costumes Info from the Scene Breakdown
      </h4>
      </div> 
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* 5 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={mosched1} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-5" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Stripboards in Mobile View
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* 6 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={mosched2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-5" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Schedules Info and Characters/BG in Mobile View
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* 7 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={mosched3} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-5" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Stripboard Edit page in Mobile View
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

export default Schedules