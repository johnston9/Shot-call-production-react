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
import work7 from "../../assets/work7.png";
import quick1 from "../../assets/quick1.png";
import quick2 from "../../assets/quick2.png";
import break23 from "../../assets/break23.png";
import charbg from "../../assets/charbg.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";
import { Card } from 'react-bootstrap';

const Workspaces = () => {
  const history = useHistory();
  
  return (
    <div className={`mt-0 ${styles.BlueBody} mx-0`}>
    <h2 className={`text-center py-2 ${styles.SubTitle } ${appStyles.cinzel}`}>
      SCENES WORKSPACE - BREAKDOWNS & WORKSHOPS</h2>
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
    The primary Creative work takes place in the the Scenes Workspace
    </h4>
    <h4 >
    The Scene page being the Platform's core Production element 
    </h4>
     <h4 >
    Create Scenes quickly then select a Scene to work in
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* 2 */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8} className="text-center px-1 px-md-3" >
    <div className="text-center px-1 px-md-3 mb-3">
    <Image src={work7} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Each Scene contains a Breakdown, Workshop, Shotlist, Characters/BG,
    Storyboard, Moodboards and Script feature
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* 3 */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
     Create the Scene Breakdown quickly with the help of Select Dropdowns
    </h4>
    <h4 >
     This will be automatically loaded in other features, including Stripboards
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={break23} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* 4 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={charbg} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
     Create the Scene Character/BG Breakdown, the Characters being added quickly from a Dropdown
    </h4>
    <h4 >The Wardrobe Department can use the Costume box to quickly add or update
     Character's Costumes Numbers which will also be automatically loaded in other features
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* 5 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Use the Production Tracker to design, collaborate and build Production Items by Scene 
    in the Scene Workshop 
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
      <Image src={work5} alt="image" 
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
    <Image src={work6} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
      The Workshops are divided by Department and use Requirements, Workspaces 
    and Finals Categories each displaying the number of Read and Unread Posts
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* 7 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Upload Ideas and Images/Files in Posts each with a Comments Section
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work4} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* 8 */}
    <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8} className="text-center px-1 px-md-3" >
    <div className="text-center px-1 px-md-3 mb-3">
    <Image src={quick1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Use the Quick Find Posts page to easily find Posts by Department, your Feed 
    or Liked or Starred Posts
    </h4>
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
    <Col xs={12}>
    <div className="text-center px-1 px-md-3">
    <Image src={work1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center mt-3 px-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    The primary Creative work takes place in the the Scenes Workspace
    </h4>
    <h4 >
    The Scene page being the Platform's core Production element 
    </h4>
    <h4 >
    Create Scenes quickly then select a Scene to work in
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
    <Col xs={12} md={8} className="text-center px-1 px-md-3" >
    <div className="text-center px-1 px-md-3 mb-3">
    <Image src={work7} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Each Scene contains a Breakdown, Workshop, Shotlist, Characters/BG,
    Storyboard, Moodboards and Script feature
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* 3 */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={break23} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
     Create the Scene Breakdown quickly with the help of Select Dropdowns
    </h4>
    <h4 >
     This will be automatically loaded in other features, including Stripboards
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* 4 */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={charbg} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
     <h4 >
     Create the Scene Character/BG Breakdown, the Characters being added quickly from a Dropdown
    </h4>
    <h4 >The Wardrobe Department can use the Costume box to quickly add or update
     Character's Costumes Numbers which will also be automatically loaded in other features
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
      <Image src={work5} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Use the Production Tracker to design, collaborate and build Production Items by Scene 
    in the Scene Workshop 
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
    <Image src={work6} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
      The Workshops are divided by Department and use Requirements, Workspaces 
    and Finals Categories each displaying the number of Read and Unread Posts
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
    <Image src={work4} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Upload Ideas and Images/Files in Posts each with a Comments Section
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* 8 */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={work4} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Use the Quick Find Posts page to easily find Posts by Department, your Feed 
    or Liked or Starred Posts
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    </div>
    <Row>
    <Col className="text-center mt-4" >
    <p className={` ${styles.Find}`}style={{fontStyle: 'italic'}}>
    Find the mobile view images for Scenes features on the Mobile View page
    </p>
    </Col>
    </Row>
    </div>
  )
}

export default Workspaces