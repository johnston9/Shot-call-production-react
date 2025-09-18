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
import scenescript from "../../assets/scenescript.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const ShotStory = () => {
  const history = useHistory();
  
  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
    <div className={`mt-0 ${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Scenes - Storyboard / Shotlist / Script</h2>
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
    {/* desktop */}
    <div className="d-none d-md-block">
    {/* story 1 */}
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
    {/* shot 2 */}
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
    Create detailed easy to read Shotlists for each Scene
    </p>
    <p >
    Use Drag and Drop to re-order them quickly and automatically change
    all Order numbers
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* shot 3 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center" >
    <p >
    Click the Info link to view Extra Info
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
    {/* shot 4 */}
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
    Click the Image link to view the Shot Sketch
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* story/shotlist 5 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center" >
    <p >
    View the Storyboard and the Shotlist
    side by side to facilitate Shotlist creation
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
    {/* scipt 6 */} 
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={scenescript} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <p >
    The Scene Script can be add to the Scene page and changed when necessary
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* full script */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center" >
    <p >
    Add the Full Script to the Scenes page along with
    changes details and notes
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={break2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    </div>
    {/* mobile */}
    <div className="d-block d-md-none">
    {/* story 1 */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={story1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 1 }} className="text-center mt-3 px-3" >
    <p >
    Create the Scene Storyboard in your prefered method then upload it 
    to the Scene Page
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* shot 2*/}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={shot7} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center mt-3 px-3" >
    <p >
    Create detailed easy to read Shotlists for each Scene
    </p>
    <p >
    Use Drag and Drop to re-order them quickly and automatically change
    all Order numbers
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* shot 3 */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={shot5} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center mt-3 px-3" >
    <p >
    Click the Info link to view Extra Info
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* shot 4 */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={sketchshot} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }} className="text-center px-3 mt-3" >
    <p >
    Click the Image link to view the Shot Sketch
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* story/shotlist  */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={shot1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
    <p >
    View the Storyboard and the Shotlist
    side by side to facilitate Shotlist creation
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* scene scipt */} 
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={scenescript} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 mt-3" >
    <p >
    The Scene Script can be add to the Scene page and changed when necessary
    </p>
    </Col>
    </Row>
    {/* full script  */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={break2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
    <p >
    Add the Full Script to the Scenes page along with
    changes details and notes
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
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

export default ShotStory