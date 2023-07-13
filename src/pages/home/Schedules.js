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
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Schedules = () => {
    const history = useHistory();
  
    return (
      <div>
      <div className={`mt-0 ${styles.Overview}`}>
      <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
       text-center`} >Schedules and Stripboards</h2>
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
      Create easy to read Stripboards in minutes</p>
      <p >
      Edit them by the edit button 
      and re-order then in a flash by the re-order button.</p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={shed1} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
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
      <p >
      This is done by selecting scenes from the Act or 
      Location menus to autogenerate Stripboard Scenes from
      the Scene Breakdown, Character and BG Info and
      then adding the Shooting Info
      </p>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
      {/* three  */}
      <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
      <Col xs={12} md={{span: 3, offset: 1 }}
        className="text-center px-1 px-md-3" >
      <p> Open the Scene Info box for extra Info 
      </p>
      </Col>
      <Col xs={12} md={8}>
      <div className="text-center px-1 px-md-3">
      <Image src={strip1} alt="image" 
        className={` ${styles.FeatureImage}`} />
      </div>
      </Col>
      </Row>
      <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
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
      <p >
      Open the Cast box for Cast, BG and Costumes Info
      </p>
      </Col>
      </Row>
      </div>
    )
  }

export default Schedules