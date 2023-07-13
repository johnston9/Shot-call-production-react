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
import calshedmo2 from "../../assets/calshedmo2.png";
import adshed from "../../assets/adshed.png";
import caltal from "../../assets/caltal.png";
import calcrew from "../../assets/calcrew.png";
import calnotes from "../../assets/calnotes.png";
import call3 from "../../assets/call3.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Callsheets = () => {
    const history = useHistory();
  
    return (
      <div>
      <div className={`mt-0 ${styles.Overview}`}>
      <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
       text-center`} >Callsheets</h2>
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
      {/* 1  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
      <p >
      Create Callsheets for each Shoot Day. The top section containing 
      Company info, Times, Automatic live weather info
      and a Personalised Calltime for each individual user.
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={top2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* 2 */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={caltopmo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3" >
      <p >
      View the Callsheet on mobile with the top section displaying 
      all desktop info including the Personalised Calltime and with 
      links below to open all the other sections below it.
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* Locations  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
      <p >
      The Locations section show all Locations 
      each with a Google Maps box that opens underneath it.
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={callocdesk} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
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
      <p >
      View the Locations section on Mobile, as with the desktop 
      each Location with a Google Maps box that opens underneath it.
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* Schedule  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
      <p >
      View the Schedule section beneath which is added 
      automatically from the Schedule page
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calshed2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* Schedule mo */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calshedmo2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3" >
      <p >
      View the Schedule section on Mobile with extra info 
      opening in a seperate bos beneath 
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* Advanced Schedule  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
      <p >
      View the Advanced Schedule section which is added 
      automatically from the Schedule page. Underneath view 
      the Walkies Channels
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={adshed} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
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
      <p >
      View the Cast and BG / Standins</p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* crew  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
      <p >
      View the Crew Calls by Department. Easily add Calltime in the Create Callsheet form 
      as Crew added to the Crew Info page will at automatically display 
      with an imput box for their Calltime.
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={calcrew} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
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
      <p >
      View Department, Transport and Important notes</p>
      </Col>
      </Row>
      {/* cast add */}
      <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-1" >
      <p >
      When creating the Callsheet the Add Cast and Add BG forms allow 
      the Cast and BG calls to be quickly added.
      The Select Role feature allows Cast members to be quickly selected
      from a character dropdown. Once selected their details including their Makeup
      and Commute times will display on top and their address will be automatically
      prefilled. The Cast Added box displays all previously added characters. 
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={call3} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* side by side */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={shedcast5} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
      <p >
      View the Add Cast and Add BG / Stand-Ins forms beside the Schedule for 
      maximum efficiency. Open each Scene's "Cast" box to find 
      which cast members and BG to add.
      </p>
      </Col>
      </Row>
      {/* emails */}
      <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-1" >
      <p >
       Once a Callsheet is complete simply click the Send button to Send
       a group email to all Crew members and the relevant Cast members</p>
       <p>
       This email automatically includes a link to the Callsheet url and
       Shootday and Company info.
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={email4} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      </div>
    )
  }

export default Callsheets
