/* Page to display the info for the Schedule and Stripboard features */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bb from "../../assets/bb.png";
import bbedit from "../../assets/bbedit.png";
import bbtop from "../../assets/bbtop.png";
import bbglob3 from "../../assets/bbglob3.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Budgeting = () => {
    const history = useHistory();
  
    return (
      <div className={`mt-0 ${styles.BlueBody}`}>
      <div className={`mt-0 ${styles.Overview}`}>
      <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
       text-center`} >Budgeting</h2>
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
      {/* one */}
      <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
      <p >
      Create Industry Standard Budgets with the easy to use Budgeting Feature
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={bb} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* two */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={bbedit} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
      <p >
      On the Budget Edit page the Budget Sections' titles are displayed on top with their
      respective current total
      </p>
      <p >
      Simply click on each title to open 
      that sections input page below and add the values
      </p>
      <p >
      All totals including the Section's Total and Grand Total update
      automatically on each input 
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* three  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
      <p>Set Globals for Crew Prep, Shoot and Wrap weeks quickly and easily
      </p>
      <p>
        Simply input the number and click
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={bbglob3} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* four */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={bbtop} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="text-center px-1 px-md-3" >
      <p >
      The stylish end result also produced a Cover Page
      and a Topsheet
      </p>
      </Col>
      </Row>
      </div>
      {/* mobile */}
      <div className="d-block d-md-none">
      {/* 1 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1">
      <Image src={bb} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12}
      className="text-center px-3 mt-3" >
      <p >
      Create Industry Standard Budgets with the easy to use Budgeting Feature
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* 2 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1">
      <Image src={bbedit} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12}
      className="text-center px-3 mt-3" >
      <p >
      On the Budget Edit page the Budget Sections' titles are displayed on top with their
      respective current total
      </p>
      <p >
      Simply click on each title to open 
      that sections input page below and add the values
      </p>
      <p >
      All totals including the Section's Total and Grand Total update
      automatically on each input 
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* 3 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1">
      <Image src={bbglob3} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12}
      className="text-center px-3 mt-3" >
      <p>Set Globals for Crew Prep, Shoot and Wrap weeks quickly and easily
      </p>
      <p>
        Simply input the number and click
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* 4 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1">
      <Image src={bbtop} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12}
      className="text-center px-3 mt-3" >
      <p >
      The stylish end result also produced a Cover Page
      and a Topsheet
      </p>
      </Col>
      </Row>
      </div>
      </div>
    )
  }

export default Budgeting