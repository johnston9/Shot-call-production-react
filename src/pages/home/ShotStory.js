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
import { Card } from 'react-bootstrap';

const ShotStory = () => {
  const history = useHistory();
  
  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
      <h2 className={`text-center py-2 ${styles.SubTitle } ${appStyles.cinzel}`}>
            THE SCENES WORKSPACE - STORYBOARD & SHOTLIST & SCRIPT</h2>
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
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Create the Scene Storyboard in your prefered method then upload it 
    to the Scene Page
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={story1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
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
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Create easy to read Shotlists for each Scene the main Info displaying on top
    </h4>
    <h4 >
    Use Drag and Drop to re-order Shots quickly and automatically change
    all Shot Numbers
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* shot 3 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Click the Info tab to view the extra Info added
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={shot5} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
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
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Click the Image link to view the Shot Sketch if added
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* story/shotlist 5 */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    View the Storyboard and the Shotlist
    side by side to facilitate Shotlist creation
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={shot1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
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
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    The Scene Script can be added to the Scene page if desired and changed when necessary
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* full script */}
    <Row className="px-3 pb-4 mt-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Add the Full Script to the Scenes page along with
    changes details and notes
    </h4>
    </div>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center">
    <Image src={break2} alt="image" 
      className={` ${styles.FeatureImage}`} />
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
    {/* story 1 */}
    <Row className="mt-3 px-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={story1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 1 }} className="text-center mt-3 px-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Create the Scene Storyboard in your prefered method then upload it 
    to the Scene Page
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
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
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Create easy to read Shotlists for each Scene the main Info displaying on top
    </h4>
    <h4 >
    Use Drag and Drop to re-order Shots quickly and automatically change
    all Shot Numbers
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* shot 3 */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={shot5} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center mt-3 px-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Click the Info tab to view the extra Info added
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* shot 4 */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={sketchshot} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }} className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Click the Image link to view the Shot Sketch if added
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* story/shotlist  */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={shot1} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    View the Storyboard and the Shotlist
    side by side to facilitate Shotlist creation
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
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
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    The Scene Script can be added to the Scene page if desired and changed when necessary
    </h4>
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-2 mt-3 px-0 mx-0`}>
    <hr className={`${styles.Five} py-2 mt-3 px-0 mx-0`}>
    </hr>
    </div>
    {/* full script  */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={break2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
    <div className={` ${styles.FeatureBox1}`}>
    <h4 >
    Add the Full Script to the Scenes page along with
    changes details and notes
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

export default ShotStory