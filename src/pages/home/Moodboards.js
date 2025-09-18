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
import indexshots from "../../assets/indexshots.png";
import indexcards from "../../assets/indexcards.png";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { Image } from "react-bootstrap";

const Moodboards = () => {
  const history = useHistory();

  return (
    <div className={`mt-0 ${styles.BlueBody}`}>
    <div className={`${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >Moodboards / Indexcards / Indexshots</h2>
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
    Scenes or other themes
    </p>
    <p >
    They can be created or viewed from 
    their respective pages or from the Moodboards page
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 2  */} 
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Multiple Moodboards may be used for each Character, Location and Scene
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
    allowing general or specific exploration and design
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 4  */} 
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-1 px-md-3" >
    <p >
    Create Indexcards to track the "Story" and "Style" elements
    for each Scene
    </p>
    </Col>
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={indexcards} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 5 */}
    <Row className="px-3 mt-4 pb-4 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={indexshots} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-1 px-md-3" >
    <p>
    Use Indexshots to pre-visualize action, style,
    colour or shot sequences and themes
    </p>
    <p>
    Similar to Moodboards but of unlimited length this feature is 
    designed for action sequences and exploring themes that may run throughout the
    entire production
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
    <Image src={mood1a} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12}
    className="text-center px-3 mt-3" >
    <p >
    Create Moodboards for Characters, Locations,
    Scenes or other themes
    </p>
    <p >
    They can be created or viewed from 
    their respective pages or from the Moodboards page
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 2  */} 
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1">
    <Image src={mood8} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} className="text-center px-3 mt-3" >
    <p >
    Multiple Moodboards may be used for each Character, Location and Scene
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* 3 */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={mood2} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-3 mt-3" >
    <p >
    A Moodboard can be added solely for a Character, Location 
    and Scene or any combination of the three, interlinking them and 
    allowing general or specific exploration and design
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* indexcards  */} 
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={indexcards} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 1 }}
      className="text-center px-3 mt-3" >
    <p >
    Create Indexcards to track the "Story" and "Style" elements
    for each Scene
    </p>
    </Col>
    </Row>
    <div className={`${styles.Overview} py-4 px-0 mx-0`}></div>
    {/* indexshots */}
    <Row className="px-3 mt-3 d-flex align-items-center justify-content-center">
    <Col xs={12} md={8}>
    <div className="text-center px-1 px-md-3">
    <Image src={indexshots} alt="image" 
      className={` ${styles.FeatureImage}`} />
    </div>
    </Col>
    <Col xs={12} md={{span: 3, offset: 0 }}
      className="text-center px-3 mt-3" >
    <p>
    Use Indexshots to pre-visualize action, style,
    colour or shot sequences and themes
    </p>
    <p>
    Similar to Moodboards but of unlimited length this feature is 
    designed for action sequences and exploring themes that may run throughout the
    entire production
    </p>
    </Col>
    </Row>
    </div>
    </div>
  )
}

export default Moodboards