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
import { Card } from 'react-bootstrap';

const Budgeting = () => {
    const history = useHistory();
  
    return (
      <div className={`mt-0 ${styles.BlueBody} px-3`}>
        <h2 className={`text-center py-2 ${styles.SubTitle } ${appStyles.cinzel}`}>
       BUDGETING</h2>
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
      {/* desktop cinzel*/}
      <div className="d-none d-md-block">
      {/* one */}
      <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="px-1 px-md-3" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      Create Industry Standard Budgets with easy to use Budgeting Software
      </h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <Card className='mx-3 mx-md-5' >
      <Card.Body className={`text-center px-md-5`}  >
      <div className="text-center px-1 px-md-3">
      <Image src={bb} alt="image" 
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
      {/* two */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <Card className='mx-3 mx-md-5' >
      <Card.Body className={`text-center px-md-5 `}  >
      <div className="text-center px-1 px-md-3">
      <Image src={bbedit} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Card.Body>
      </Card>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
      className="px-1 px-md-3" >
      <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      The Budget sections display on top with their
       current total
      </h4>
      <h4 >
      Click on each section title to open 
      its input page and add the values
      </h4>
      <h4 >
      All totals including the section's total and Grand Total update
      automatically on each input 
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
        className="px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4>Set Globals for Crew Prep, Shoot and Wrap weeks quickly and easily
      </h4>
      <h4>
        Simply input the number and click
      </h4>
      </div>
      </Col>
      <Col xs={12} md={8}>
      <Card className='mx-3 mx-md-5' >
      <Card.Body className={`text-center px-md-5`}  >
      <div className="text-center px-1 px-md-3">
      <Image src={bbglob3} alt="image" 
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
      {/* four */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <Card className='mx-3 mx-md-5' >
      <Card.Body className={`text-center px-md-5`}  >
      <div className="text-center px-1 px-md-3">
      <Image src={bbtop} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Card.Body>
      </Card>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
        className="px-1 px-md-3" >
          <div className={` ${styles.FeatureBox1}`}>
      <h4 >
      The finished Budget also includes a Cover Page
      and Topsheet
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
      {/* 1 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <Card className='mx-3 mx-md-5' >
      <Card.Body className={`text-center px-md-5 `}  >
      <div className="text-center px-1">
      <Image src={bb} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Card.Body>
      </Card>
      </Col>
      <Col xs={12}
      className="text-center px-3 mt-3" >
        <div className={` ${styles.FeatureBoxM} mx-3`}>
      <h4 >
      Create Industry Standard Budgets with easy to use Budgeting Software
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.OverviewM} py-2 mt-3 px-0 mx-0`}>
        <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
        </hr>
        </div>
      {/* 2 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <Card className='mx-3 mx-md-5' >
      <Card.Body className={`text-center px-md-5 `}  >
      <div className="text-center px-1">
      <Image src={bbedit} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Card.Body>
      </Card>
      </Col>
      <Col xs={12}
      className="text-center px-3 mt-3" >
        <div className={` ${styles.FeatureBoxM} mx-3`}>
      <h4 >
      The Budget sections display on top with their
       current total
      </h4>
      <h4 >
      Click on each section title to open 
      its input page and add the values
      </h4>
      <h4 >
      All totals including the section's total and Grand Total update
      automatically on each input 
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.OverviewM} py-2 mt-3 px-0 mx-0`}>
        <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
        </hr>
        </div>
      {/* 3 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <Card className='mx-3 mx-md-5' >
      <Card.Body className={`text-center px-md-5 `}  >
      <div className="text-center px-1">
      <Image src={bbglob3} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Card.Body>
      </Card>
      </Col>
      <Col xs={12}
      className="text-center px-3 mt-3" >
        <div className={` ${styles.FeatureBoxM} mx-3`}>
      <h4>Set Globals for Crew Prep, Shoot and Wrap weeks quickly and easily
      </h4>
      <h4>
        Simply input the number and click
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.OverviewM} py-2 mt-3 px-0 mx-0`}>
        <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
        </hr>
        </div>
      {/* 4 */}
      <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <Card className='mx-3 mx-md-5' >
      <Card.Body className={`text-center px-md-5 `}  >
      <div className="text-center px-1">
      <Image src={bbtop} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Card.Body>
      </Card>
      </Col>
      <Col xs={12}
      className="text-center px-3 mt-3" >
        <div className={` ${styles.FeatureBoxM} mx-3`}>
      <h4 >
      The finished Budget also includes a Cover Page
      and Topsheet
      </h4>
      </div>
      </Col>
      </Row>
      <div className={`${styles.OverviewM} py-2 mt-3 px-0 mx-0`}>
        <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
        </hr>
        </div>
      </div>
      </div>
    )
  }

export default Budgeting