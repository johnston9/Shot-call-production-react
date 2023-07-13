/* Page to display the info for the Scene Page Shotlist 
   and Storyboard features */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import break2 from "../../assets/break2.png";
import story1 from "../../assets/story1.png";
import shot1 from "../../assets/shot1.png";
import shot2 from "../../assets/shot2.png";
import sketchshot from "../../assets/sketchshot.png";
import shot5 from "../../assets/shot5.png";
import shot7 from "../../assets/shot7.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const ShotStory = () => {
  const history = useHistory();
  
  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
    <div className={`mt-0 ${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Storyboard, Shotlist and Script</h2>
    </div>
    <Row className="mt-1" >
        <Col xs={3}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        </Col>
    </Row>
    {/* story */}
    <Row className="mt-1 mt-md-3 px-3 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }} className="text-center" >
    <p >
    Create the Scene Storyboard in your prefered method then upload it 
    to the Scene Page
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={story1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* shot 1*/}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={shot7} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center" >
    <p >
    Create easy to read Shotlists on each Scene Page. Each Shot
    can be quickly edited without a page refresh.
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* shot 2  */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center" >
    <p >
    Expand each shot to view Extra Info
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={shot5} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* shot 3 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={sketchshot} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center" >
    <p >
    Expand each shot to view the Shot Sketch
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* shot Create*/}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={shot2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center" >
    <p >
    Create each shot, including a camera and lighting sketch,
     for the Scene Shotlist in the Shotlist Create form
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* story/shotlist  */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center" >
    <p >
    View the Storyboard and the Shotlist Create Form 
    side by side to facilitate the process
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={shot1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* scipt */} 
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={break2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <p >
    Add the Scene script to the Scene page along with
    changes details and notes.
    </p>
    <p>
      The whole Script can be added to the Scenes page.
    </p>
    </Col>
    </Row>
    </div>
  )
}

export default ShotStory