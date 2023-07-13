/* Page to display the info for the Mobile feature */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import promo from "../../assets/promo.png";
import find from "../../assets/find.png";
import charsmo from "../../assets/charsmo.png";
import scenemo from "../../assets/scenemo.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Mobile = () => {
    const history = useHistory();
  
    return (
      <div>
      <div className={`mt-0 ${styles.Overview}`}>
      <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
       text-center`} >Moblile View and Quick Find</h2>
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
      The entire app is totally compatable with mobile in terms 
      of functionality and view.
      </p>
      <p>
      Scene Workspace in mobile view.
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={scenemo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* two */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={charsmo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
      <p>
      Scene Characters and BG in mobile view.
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* three  */}
      <Row className="mt-1 mt-md-3 pb-4 px-3 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }} className="text-center px-1 px-md-3" >
      <p>
      Production Department crew info in mobile view.
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={promo} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* four */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={find} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
      <p>
      Find Workspace post quickly on the Quickfind page
      by Department, liked or feed.
      </p>
      <p>
      The Requirement posts for each departemnt are brought
      in order of Scene number.
      </p>
      </Col>
      </Row>
      </div>
    )
  }

export default Mobile