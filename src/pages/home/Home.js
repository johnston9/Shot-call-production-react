/* Home Page 
 * Section 1 - the temporary background image city1
   Quick links to the Creative and Production feature information pages
 * Section 2 - Overview in 4 parts with temporary images
 * Section 3 - Links to the Creative feature information pages
 * Section 4 - Links to the Production feature information pages */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import appStyles from "../../App.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import city1 from "../../assets/city1.png";
import home1 from "../../assets/home1.png";
import home2 from "../../assets/home2.png";
import home3 from "../../assets/home3.png";
import home8 from "../../assets/home8.png";
// eslint-disable-next-line 
import city2 from "../../assets/city2.png";
import features from "../../assets/r-1.png";
import Container from "react-bootstrap/Container";
import TopBox2 from "../../components/TopBox2";
import { Image } from "react-bootstrap";

const Home = () => {
  // const setCurrentUser = useSetCurrentUser();
  const history = useHistory();
  const height = "75px";

  return (
      <div >
        <TopBox2 title="SHOT CALLER PRODUCTION" />
        {/* Section 1 - the temporary background image city1
            and The Creative and Production feature information links */}
        <div className={styles.HomeBox} 
          style={{ backgroundImage: `url(${city1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', }}
          >
        <Row className={styles.Row}>
          <Col className="my-5" xs={12}>
            <Row>
               <Col xs={12} className={` text-center ${styles.Header}`} >
                <h2 className={`${styles.Header}`} >TV and Film Production Software</h2>
                <h5 className={`${styles.Header}`}  style={{fontStyle: 'italic'}}>
                  The entire Creative and Production processes 
                  in one Workflow.</h5>
                <Row className="mt-5" >
                <Col className={`text-center  ${styles.Creative} `}
                 md={6}>
                {/* The Creative links */}
                <h4 className={`mb-2 ${styles.Creative}`}>
                The Creative
                </h4>
                <p className={`${styles.Creative}`} 
                  style={{fontStyle: 'italic'}}>
                Collaborate and design in Scene Department Workspaces
                </p>
                <Row >
                {/* Breakdowns / Workspaces */}
                <Col mx={6} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/workspaces')}>
                Breakdowns / Workspaces
                </p>
                </Col>
                {/* Moodboards / Indexshots */}
                <Col mx={6} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/moodboards')}>
                Moodboards / Indexshots
                </p>
                </Col>
                </Row>
                <Row>
                {/* Shotlists / Storyboards */}
                <Col xs={6} >
                <span className={`${styles.Depts}`}
                  onClick={() => history.push('/shotstory')} >
                Storyboard / Shotlists / Script
                </span>
                </Col>
                <Col mx={6}>
                {/* Characters / Locations  */}
                <span className={`${styles.Depts}`}
                  onClick={() => history.push('/charslocates')} >
                Characters / Locations 
                </span>
                </Col>
                </Row>
                </Col>
                <Col md={6} className={` ${styles.Creative} `} >
                <h4 className={`mb-2 ${styles.Creative}`}>
                Production
                </h4>
                <p className={`${styles.Header}`}
                  style={{fontStyle: 'italic'}}>
                All Production Software Tools in one Connected Workflow
                </p>
                <Row>
                {/* Schedule / Stripboard */}
                <Col xs={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/schedule')}>
                Schedule / Stripboard
                </p>
                </Col>
                {/* Callsheets */}
                <Col mx={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/callsheets')} >
                Callsheets
                </p>
                </Col>
                </Row>
                <Row>
                {/* Cast / Crew */}
                <Col mx={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/castcrew')}>
                Cast / Crew
                </p>
                </Col>
                {/* Mobile View */}
                <Col mx={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/mobile')} >
                Mobile View
                </p>
                </Col>
                </Row>
                </Col>
                </Row>
                <Container className="mt-3" >
                <Link className={styles.Link} to="/signup">
                  Sign up <span>Here</span>
                </Link>
                </Container>
               </Col>
             </Row>
          </Col>
        </Row>
        </div>
        {/* Section 2 - Overview in 4 parts with
            temporary image   */}
        <div>
        <div className={`mt-5 ${styles.Overview}`}>
        <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair}
         text-center`} >Overview</h2>
        </div>
        <div className="px-3 mt-3">
        {/* part 1 - platform */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={{span: 3, offset: 1 }} className="text-center" >
        <p >
        Build and manage TV and Film Production in the 
        one platform utilizing interlinking tools.
        </p>
        </Col>
        <Col xs={6} md={{span: 6, offset: 2 }}>
        <div className="text-center">
        <Image src={home1} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        </Row>
        {/* part 2 - Workspaces */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={6}>
        <div className="text-center">
        <Image src={home8} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        <Col xs={6} md={{span: 3, offset: 2 }}
        className="text-center" >
        <p >
        Collaborate and design in Scene Department Workspaces and use 
        Moodboards to explore ideas.
        </p>
        </Col>
        </Row>
        {/* part 3 - Callsheets  */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={{span: 3, offset: 1 }}
          className="text-center" >
        <p >
        Manage Cast and Crew. Easily create Shotlists, Schedules and 
        personalized Callsheets.
        </p>
        </Col>
        <Col xs={6} md={{span: 6, offset: 2 }}>
        <div className="text-center">
        <Image src={home2} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        </Row>
        {/* part 4 - mobile */}
        <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
        <Col xs={6} md={6}>
        <div className="text-center">
        <Image src={home3} alt="image" 
          className={` ${styles.Image}`} />
        </div>
        </Col>
        <Col xs={6} md={{span: 3, offset: 2 }}
          className="text-center" >
        <p >
        All features easy to use on Mobile. Use Quick Find to locate all Info fast.
        </p>
        </Col>
        </Row>
        </div>
        </div>
        {/* Section 3 - Links to the Creative feature information pages */}
        <div className={`mt-5 px-5 mx-5 ${styles.Overview}`}>
        <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair} 
        text-center`} >The Creative Features</h2>
        </div>
        <div className="px-5">
        <Row className="mb-3 mt-5">
        {/* Workspaces */}
        <Col xs={12} md={6} >
        <Row className="d-flex align-items-center justify-content-center">
        <div onClick={() => history.push('/workspaces')}
          className={`${styles.FeatureLink} d-flex align-items-center 
          justify-content-center`}>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} className="text-center" >
        <h4>Breakdowns and Workspaces</h4>
        <p >
        Create a Scene Page for each Scene
        that contains the all the work features 
        including Breakdowns and Department Workspaces.
        </p>
        </Col>
        </div>
        </Row>
        </Col>
        {/* Moodboards and Script*/}
        <Col xs={12} md={6} >
        <Row className="d-flex align-items-center justify-content-center">
        <div onClick={() => history.push('/moodboards')}
          className={`${styles.FeatureLink} d-flex align-items-center 
           justify-content-center`}>
        <Col xs={9} className="text-center" >
        <h4>Moodboards and Indexshots</h4>
        <p >
        Use Moodboards to guide and design Scenes,
        Characters and Locations. Use Indexshots to design sequences
        and previs visual style flow.
        </p>
        </Col>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          onClick={() => history.push('/breakdown')}
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </div>
        </Row>
        </Col>
        </Row>
        <Row className="my-3">
        {/*  Storyboard and Shotlists */}
        <Col xs={12} md={6}>
        <Row className="d-flex align-items-center justify-content-center">
        <div onClick={() => history.push('/shotstory')}
          className={`${styles.FeatureLink} d-flex align-items-center
          justify-content-center`}>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} className="text-center" >
        <h4>Storyboard, Shotlist and Script</h4>
        <p >
        Create the Shotlist in the Scene Page and add the 
        Storyboard and the Scene Script.
        </p>
        </Col>
        </div>
        </Row>
        </Col>
        {/* Characters and Locations */}
        <Col xs={12} md={6}>
        <Row className="d-flex align-items-center justify-content-center">
        <div onClick={() => history.push('/charslocates')}
          className={`${styles.FeatureLink} d-flex align-items-center 
          justify-content-center`}>
        <Col xs={9} className="text-center" >
        <h4>Characters and Locations</h4>
        <p >
        Create Characters and Locations Pages with Images
        and all relevant Info.
        </p>
        </Col>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </div>
        </Row>
        </Col>
        </Row>
        </div>
        {/* Section 4 - Links to the Production feature information pages  */}
        <div className={`mt-5 px-5 mx-5 ${styles.Overview}`}>
        <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair} 
        text-center`} >Production Features</h2>
        </div>
        <div className="px-5">
        <Row className="mb-3 mt-5">
        {/* Cast and Crew */}
        <Col xs={12} md={6} >
        <Row className="d-flex align-items-center justify-content-center">
        <div onClick={() => history.push('/castcrew')}
          className={`${styles.FeatureLink} d-flex align-items-center 
          justify-content-center`}>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} className="text-center" >
        <h4>Cast and Crew</h4>
        <p >
        Manage the Cast and Crew with all the necessary Info Requirements
        </p>
        </Col>
        </div>
        </Row>
        </Col>
        {/* Schedule */}
        <Col xs={12} md={6}>
        <Row className="d-flex align-items-center justify-content-center">
        <div onClick={() => history.push('/schedule')}
          className={`${styles.FeatureLink} d-flex align-items-center 
          justify-content-center`}>
        <Col xs={9} className="text-center" >
        <h4>Create Schedules</h4>
        <p >
        Create Schedules and Stripboards in a flash automatically 
        adding all details from the Scene Breakdown 
        </p>
        </Col>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </div>
        </Row>
        </Col>
        </Row>
        <Row className="my-3">
        {/* Callsheets */}
        <Col xs={12} md={6} >
        <Row className="d-flex align-items-center justify-content-center">
        <div onClick={() => history.push('/callsheets')}
          className={`${styles.FeatureLink} d-flex align-items-center 
          justify-content-center`}>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} className="text-center" >
        <h4>Callsheets</h4>
        <p >
        Create stylish Callsheets with personalized Call Times
        and Google Maps for Locations
        </p>
        </Col>
        </div>
        </Row>
        </Col>
        {/* Mobile */}
        <Col xs={12} md={6}>
        <Row className="d-flex align-items-center justify-content-center">
        <div onClick={() => history.push('/mobile')}
          className={`${styles.FeatureLink} d-flex align-items-center 
          justify-content-center`}>
        <Col xs={9} className="text-center" >
        <h4>Mobile View</h4>
        <p >
        Use all Features in Mobile View and find all Info fast 
        using the Quick Find Feature
        </p>
        </Col>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </div>
        </Row>
        </Col>
        </Row>
        </div>
    </div>
  );
};

export default Home;