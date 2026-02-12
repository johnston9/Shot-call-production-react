/* Page to display the info for the Callsheets feature */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import email4 from "../../assets/email4.png";
import top2 from "../../assets/top2.png";
import caltopmo from "../../assets/caltopmo.png";
import callocdesk from "../../assets/callocdesk.png";
import callocmo from "../../assets/callocmo.png";
import shedcast5 from "../../assets/shedcast5.png";
import calshed2 from "../../assets/calshed2.png";
import crewaddcal from "../../assets/crewaddcal.png";
import calshedmo2 from "../../assets/calshedmo2.png";
import adshed from "../../assets/adshed.png";
import castcallsmo from "../../assets/castcallsmo.png";
import crewcallsmo from "../../assets/crewcallsmo.png";
import caltal from "../../assets/caltal.png";
import calcrew from "../../assets/calcrew.png";
import calnotes from "../../assets/calnotes.png";
import call3 from "../../assets/call3.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { Card } from 'react-bootstrap';

const Callsheets = () => {
    const history = useHistory();
  
    return (
      <div className={`mt-0 ${styles.BlueBody}`}>
      <h2 className={`text-center py-3 ${styles.SubTitle } ${appStyles.playfair}`}>
       Callsheets</h2>
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
      {/* 1  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="px-1 px-md-3" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Create Callsheets with a Personalised Calltime for each Crew and Cast User
      </h4>
      <h4>
      Use the Send Button to send the Callsheet to all Cast and Crew with one click
      </h4>
      <h4>
      Check the Received page to view all received Acknowledgements 
      </h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <Card className='mx-3 mx-md-5' >
      <Card.Body className={`text-center px-md-5 `}  >
      <div className="text-center px-1 px-md-3">
      <Image src={top2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Card.Body>
      </Card>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* 2 */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={caltopmo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3 mt-2" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      View the Callsheet on mobile with the top section displaying 
      all info as the desktop view and with 
      links below to all the other sections
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* 3 Locations  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      The Locations section
      </h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={callocdesk} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Locations mo */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={callocmo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      The Locations section Mobile view
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Schedule  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      The Schedule section which is added 
      automatically from the Schedule page
      </h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calshed2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Schedule mo */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calshedmo2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3 mt-2" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      View the Schedule section on Mobile by clicking on the Schedule link
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Advanced Schedule  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      The Advanced Schedule section which is added 
      automatically from the Schedule page
      </h4>
      <h4 className="mt-5">The Walkies Channels section below it</h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={adshed} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Cast */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={caltal} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4>
      The Cast and BG Calltimes sections</h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* crew  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      The Crew Call Times by Department
      </h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calcrew} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Cast mo */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={castcallsmo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      The Cast and BG Calltimes Mobile view</h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* crew mo */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
        <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      The Crew Call Times Mobile view
      </h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={crewcallsmo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* notes */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calnotes} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4>
      The Department, Transport and Important Notes section</h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* cast add */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-1" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Add the Cast quickly by selecting a Role
      which pre-fills their details and displays their Makeup
      and Commute times on top <br/>
      All previously added characters display below 
      </h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={call3} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* side by side */}
      <Row className="mt-3 px-3 pb-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={shedcast5} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
        <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      The Add Cast and Add BG forms can be viewed beside the Schedule for 
      maximum efficiency
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* add crew */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-1" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
        Add all the Crew Call Times in a second by using the Set Unit Call button which
        sets all times to its value</h4>
       <h4>
       Then set any different Calls individually by Department pre-filled from the Crew Info page
       </h4>
       </div>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={crewaddcal} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* emails */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={email4} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }} className="text-center px-1 px-md-1" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
       Use the Send button to send the Callsheet link
       to all Crew and relevant Cast members</h4>
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
      {/* 1  */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1">
      <Image src={top2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Create Callsheets with a Personalised Calltime for each Crew and Cast User
      </h4>
      <h4>
      Use the Send Button to send the Callsheet to all Cast and Crew with one click
      </h4>
      <h4>
      Check the Received page to view all received Acknowledgements 
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* 2 */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={caltopmo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      View the Callsheet on mobile with the top section displaying 
      all info as the desktop view and with 
      links below to all the other sections
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* 3 Locations  */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={callocdesk} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      The Locations section
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Locations mo */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={callocmo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      View the Locations section on Mobile by clicking on the Locations link
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Schedule  */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
        <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calshed2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      The Schedule section which is added 
      automatically from the Schedule page
      </p>
      <p >
      View the Cast and Info by clicking on their links
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Schedule mo */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calshedmo2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      View the Schedule section on Mobile by clicking on the Schedule link
      </p>
      <p >
      The Cast and Info open by clicking on their links
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Advanced Schedule  */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={adshed} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      The Advanced Schedule section which is added 
      automatically from the Schedule page
      </p>
      <p className="mt-5">The Walkies Channels section below it</p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Cast */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={caltal} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      The Cast and BG Calltimes sections</p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* crew  */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calcrew} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      The Crew Call Times by Department
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* Cast mo */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={castcallsmo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      View the Cast and BG Calltimes sections on Mobile</p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* crew mo */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={crewcallsmo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      View the Crew Call Times by Department on Mobile
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* notes */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calnotes} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      The Department, Transport and Important Notes section</p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* cast add  */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={call3} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      Add the Add Cast quickly to the Callsheet by selecting a Role
      to pre-fill their details and display their Makeup
      and Commute times on top while all previously added characters display below 
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* side by side */}
      <Row className="mt-3 px-3d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={shedcast5} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
      View the Add Cast and Add BG forms beside the Schedule for 
      maximum efficiency
      </p>
      <p >
      Click a Scene's Cast link to find 
      which cast members and BG to add
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* add crew */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={crewaddcal} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
        Add all the Crew Call Times in a second by using the Set Unit Call button which
        sets all times to it's value</p>
       <p>
       Then set any different Calls individually by Department pre-filled from the Crew Info page
       </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
      <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
      </hr>
      </div>
      {/* emails */}
      <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={email4} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} className="text-center px-3 mt-3" >
      <p >
       Use the Send button to send the Callsheet link
       to all Crew members and the relevant Cast members</p>
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

export default Callsheets
