/* Page to display the info for the Mobile feature */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import moscenes from "../../assets/moscenes.png";
import moscene from "../../assets/moscene.png";
import mobreakedit1 from "../../assets/mobreakedit1.png";
import mobreakedit3 from "../../assets/mobreakedit3.png";
import moposts from "../../assets/moposts.png";
import mopost2 from "../../assets/mopost2.png";
import moshot from "../../assets/moshot.png";
import moshotinfo from "../../assets/moshotinfo.png";
import moeditshot from "../../assets/moeditshot.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Mobile = () => {
    const history = useHistory();
  
    return (
      <div>
      <div className={`mt-0 ${styles.Overview}`}>
      <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
       text-center`} >Moblile View</h2>
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
      <Row>
      <Col className="text-center" >
      <p >
      All features apart from the Budget are totally compatable in Mobile in terms 
      of functionality and view.
      </p>
      <h4 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
       text-center`} >Scenes features including Breakdown & Workspace</h4>
      </Col>
      </Row>
      {/* 1 Scenes */}
      <Row className="px-3 pb-md-4 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={moscenes} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      The Scenes page in mobile view
      </p>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      </Col>
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={moscene} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      The Scene page and Workspace in mobile view
      </p>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      </Col>
      </Row>
      {/* 2 Posts */}
      <Row className="px-3 pb-md-4 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={moposts} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      The Workspace Posts page in mobile view
      </p>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      </Col>
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={mopost2} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      A Workspace Post in mobile view
      </p>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      </Col>
      </Row>
      {/* 3 breakdown */}
      <Row className="px-3 pb-md-4 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={mobreakedit3} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      The Scene Breakdown page in mobile view
      </p>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      </Col>
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={mobreakedit1} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      The Scene Breakdown Edit page in mobile view
      </p>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      </Col>
      </Row>
      <Row>
      <Col className="text-center" >
      <h4 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
       text-center`} >Scenes Shotlist</h4>
      </Col>
      </Row>
      {/* 4 shotlist */}
      <Row className="px-3 pb-md-4 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={moshot} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      The Shotlist in mobile view
      </p>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      </Col>
      <Col xs={12} md={6}>
      <div className="text-center px-1 px-md-3">
      <Image src={moshotinfo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      A Shot's Extra Info in mobile view
      </p>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      </Col>
      </Row>
      {/* 5 shotlist */}
      <Row className="px-3 pb-md-4 mt-3">
      <Col xs={12} md={{span: 6, offset: 3}}>
      <div className="text-center px-1 px-md-3">
      <Image src={moeditshot} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      <p className="mt-3 text-center">
      The Shotlist Edit page in mobile view
      </p>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      </Col>
      </Row>
      </div>
    )
  }

export default Mobile