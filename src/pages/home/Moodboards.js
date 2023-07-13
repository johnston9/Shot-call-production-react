/* Page to display the info for the Moodboards feature */
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import mood8 from "../../assets/mood8.png";
import mood2 from "../../assets/mood2.png";
import mood1a from "../../assets/mood1a.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Moodboards = () => {
  const history = useHistory();

  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
    <div className={`${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Moodboards and Indexshots</h2>
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
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 1 */}
    <Row className="px-3 pb-4 mt-1 mt-md-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={mood1a} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
    className="text-center px-1 px-md-3" >
    <p >
    Create Moodboards for Characters, Locations,
    Scenes or other themes. They can be created or viewed from 
    their respective pages or from the Moodboards page.
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 2  */} 
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Use Moodboards for the exploration,
    design and guidance of Visual Style. Multiple Moodboards may be used
    for each Character, Location and Scene.
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={mood8} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 3 */}
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={mood2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <p >
    A Moodboard can be added solely for a Character, Location 
    and Scene or any combination of the three, interlinking them and 
    allowing general or specific exploration and design.
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 2  */} 
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Use Indexshots to pre-visualize sequences in terms of action, style,
    colour or shots. 
    </p>
    <p> Use then to pre-visualize any aspect of the whole project
    displaying in rows on desktop or as a single frame on mobile that can be
    flipped along to create a mini moving sequence.
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={mood8} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    </div>
  )
}

export default Moodboards