/* Home Page -added budgeting 
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
import { VIMEO_BASE_URL } from "../../utils/config";

const Home = () => {
  // const setCurrentUser = useSetCurrentUser();
  const history = useHistory();
  const height = "75px";

  return (
    <div>
      <TopBox2 title="SHOT CALLER PRODUCTION" />
      {/* Section 1 - the temporary background image city1
            and The Creative and Production feature information links */}
      {/* Desktop view */}
        {/* <div className={`${styles.HomeBox} d-none d-md-block`} */}
        <div className={`${styles.HomeBox}`}
          style={{ backgroundImage: `url(${city1})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', }}
          >
        <Row className={styles.Row}>
          <Col className="my-5" xs={12}>
            <Row>
               <Col xs={12} className={` text-center ${styles.Header}`} >
                <h2 className={`${styles.Header}`} >TV and Film Production Software</h2>
                <h5 className={`${styles.Header}`} style={{fontStyle: 'italic'}}>
                  The entire Creative and Production processes 
                  in one Workflow
                </h5>
                <Row>
                <Col className="text-center" >
                <p className={`${styles.Header} pt-1`} style={{fontStyle: 'italic'}}>
                All features, apart from Budgeting, are totally Mobile compatable
                </p>
                </Col>
                </Row>
                  {/* Budgeting */}
                <Row className="mt-3" >
                <Col className={`text-center  ${styles.Creative} `} xs={12} >
                <h4 className={`mb-2 ${styles.Creative}`}>
                Budgeting
                </h4>
                <p className={`${styles.Creative}`} 
                  style={{fontStyle: 'italic'}}>
                Create Industry standard Budgets easily
                </p>
                </Col>
                </Row>
                <Row>
                <Col xs={12} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/budgeting')}>
                Budgeting
                </p>
                </Col>
                </Row>
                <Row className="mt-3" >
                <Col className={`text-center  ${styles.Creative} `} xs={6} md={6}>
                {/* The Creative links */}
                <h4 className={`mb-2 ${styles.Creative}`}>
                The Creative
                </h4>
                <p className={`${styles.Creative}`} 
                  style={{fontStyle: 'italic'}}>
                Collaborate and Design with Workspaces & Pre-vis
                </p>
                <Row >
                {/* Breakdowns / Workshops */}
                <Col md={6} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/workspaces')}>
                Breakdowns & Workshops 
                </p>
                </Col>
                {/* Moodboards / Indexshots */}
                <Col md={6} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/moodboards')}>
                Moodboards & Indexshots
                </p>
                </Col>
                </Row>
                <Row>
                  {/* Characters / Locations  */}
                <Col md={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/charslocates')} >
                Characters & Locations 
                </p>
                </Col>
                {/* Shotlists / Storyboards */}
                <Col md={6} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/shotstory')} >
                Shotlists
                </p>
                </Col>
                </Row>
                </Col>
                <Col xs={6} md={6} className={` ${styles.Creative} `} >
                <h4 className={`mb-2 ${styles.Creative}`}>
                Production
                </h4>
                <p className={`${styles.Header}`}
                  style={{fontStyle: 'italic'}}>
                All Production in one Connected Workflow
                </p>
                <Row>
                {/* Schedule / Stripboard */}
                <Col md={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/schedule')}>
                Scheduling
                </p>
                </Col>
                {/* Callsheets */}
                <Col md={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/callsheets')} >
                Callsheets
                </p>
                </Col>
                </Row>
                <Row>
                {/* Cast / Crew */}
                <Col md={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/castcrew')}>
                Cast & Crew
                </p>
                </Col>
                {/* 2ND UNIT */}
                <Col md={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/second')} >
                2nd Unit
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

      {/* Section 2 - Overview   */}
      <div>
        <div className="px-3 mt-3">
          {/* part 1 - platform */}
          <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
            <Col xs={12} md={12} className="text-center">
              <h5>
                Design and manage Film, TV and Video Production on one platform
                utilizing interlinking features
              </h5>
            </Col>
          </Row>
          <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
            <Col xs={12} className="text-center">
              <p>
                Create professional standard highly detailed Budgets quickly
              </p>
              <p>
                Create and collaborate in the Scenes Workspace and Moodboards
              </p>
               <p>
                Easily create Shotlists, Schedules and
                personalized Callsheets
              </p>
              <p>
                Manage Cast and Crew
              </p>
            </Col>
          </Row>
          {/* 1 */}
          {/* <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
            <Col xs={6} className="text-center">
              <p>
                Create professional standard highly detailed Budgets quickly.
              </p>
              <p>
                Create and collaborate in the Scenes Workspace and Moodboards.
              </p>
               <p>
                Easily create Shotlists, Schedules and
                personalized Callsheets.
              </p>
              <p>
                Manage Cast and Crew.
              </p>
              <p>
                All features are Mobile compatible.
              </p>
            </Col>
            <Col xs={6} >
              <div className="text-center">
                <Image src={home8} alt="image" className={` ${styles.ImageSection2}`} />
              </div>
            </Col>
          </Row> */}
          {/* 2 */}
          {/* <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
            <Col xs={6} md={6}>
              <div className="text-center">
                <Image src={home3} alt="image" className={` ${styles.ImageSection2}`} />
              </div>
            </Col>
            <Col xs={6} className="text-center">
              <p>
                Easily create Shotlists, Schedules and
                personalized Callsheets.
              </p>
              <p>
                Manage Cast and Crew.
              </p>
              <p>
                All features are Mobile compatible.
              </p>
            </Col>
          </Row> */}
          {/* Quick Runthrough */}
          <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
            <Col md={6} className="text-center d-none d-md-block">
            <h3>
                A Quick Runthrough
              </h3>
            </Col>
            <Col md={6} className="text-center">
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src={`${VIMEO_BASE_URL}403530213`} // Replace with your dummy YouTube link
                  title="Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-center d-block d-md-none">
                A Quick Runthrough
              </h3>
            </Col>
          </Row>
          {/* A Closer Look */}
          <Row className="mt-5 d-flex align-items-center justify-content-center">
            <Col xs={12} md={6} >
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src={`${VIMEO_BASE_URL}403530213`} // Replace with your dummy YouTube link
                  title="Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
            <Col xs={12} md={6} className="text-center">
            <h3>
                A Closer Look
              </h3>
            </Col>
          </Row>
        </div>
      </div>

      {/* Section 3 - Links to the Creative feature information pages */}
        <div className={`mt-5 px-5 mx-5 ${styles.Overview}`}>
        <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair} 
        text-center`} >The Creative Features</h2>
        </div>
        <div className="px-3">
        <Row className="mb-3 mt-5">
        {/* Workspaces */}
        <Col xs={12} md={6} >
        <div onClick={() => history.push('/workspaces')}
          className={`${styles.FeatureLink}`}>
        <Row >
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
        <h4>Breakdowns and Workshops</h4>
        <p >
          Use the Scenes Workspace to create Breakdowns and other creative features
        </p>
        <p >
        Use the Production Tracker to collaborate on Production Items in Scene Workshops
        </p>
        </Col>
        </Row>
        </div>
        </Col>
        {/* Moodboards and Script*/}
        <Col xs={12} md={6} className="mt-3 mt-md-0">
        <div onClick={() => history.push('/moodboards')}
          className={`${styles.FeatureLink} `}>
        <Row >
        <Col xs={9} className="text-center" >
        <h4>Pre-vis: Moodboards and Indexshots</h4>
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
        </Row>
        </div>
        </Col>
        </Row>
        <Row className="my-3">
        {/*  Storyboard and Shotlists */}
        <Col xs={12} md={6}>
        <div onClick={() => history.push('/shotstory')}
          className={`${styles.FeatureLink} `}>
        <Row >
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
        </Row>
        </div>
        </Col>
        {/* Characters and Locations */}
        <Col xs={12} md={6} className="mt-3 mt-md-0">
        <div onClick={() => history.push('/charslocates')}
          className={`${styles.FeatureLink}`}>
        <Row >
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
        </Row>
        </div>
        </Col>
        </Row>
        </div>
        {/* Section 4 - Links to the Production feature information pages  */}
        <div className={`mt-5 px-5 mx-5 ${styles.Overview}`}>
        <h2 className={`pb-1 ${styles.OverviewText} ${appStyles.playfair} 
        text-center`} >Production Features</h2>
        </div>
        <div className="px-3">
        <Row className="mb-3 mt-5">
        {/* Budgeting */}
        <Col xs={12} md={6} >
        <div onClick={() => history.push('/budgeting')}
          className={`${styles.FeatureLink} `}>
        <Row >
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
        <h4>Budgeting</h4>
        <p >
        Use the compact and compartmentalized Budgeting software to create elegant Budgets
        </p>
        </Col>
        </Row>
        </div>
        </Col>
        {/* Scheduling */}
        <Col xs={12} md={6} className="mt-3 mt-md-0">
        <div onClick={() => history.push('/schedule')}
          className={`${styles.FeatureLink}`}>
        <Row >
        <Col xs={9} className="text-center" >
        <h4>Scheduling</h4>
        <p >
        Use the Scheduling app to create Schedules and Stripboards in a flash, automatically 
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
        </Row>
        </div>
        </Col>
        </Row>
        <Row className="my-3">
        {/* Callsheets */}
        <Col xs={12} md={6} >
        <div onClick={() => history.push('/callsheets')}
          className={`${styles.FeatureLink} `}>
        <Row >
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
        </p>
        </Col>
        </Row>
        </div>
        </Col>
        {/* Cast and Crew */}
        <Col xs={12} md={6} className="mt-3 mt-md-0">
        <div onClick={() => history.push('/castcrew')}
          className={`${styles.FeatureLink} `}>
        <Row >
        <Col xs={9} className="text-center" >
        <h4>Cast and Crew</h4>
        <p >
        Manage the Cast and Crew Information and Functionality
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
        </Row>
        </div>
        </Col>
        </Row>
        <Row className="my-3">
        {/* second */}
        <Col className="d-none d-md-block" md={2}></Col>
        <Col xs={12} md={8} className="mt-3 mt-md-0">
        <div onClick={() => history.push('/second')}
          className={`${styles.FeatureLink} `}>
        <Row>
        <Col xs={3} >
        <div className="text-center" >
        <Image 
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        <Col xs={9} md={6} className="text-center" >
        <h4>2nd Unit</h4>
        <p >
        Manage the 2nd Unit Crew, Schedule and Callsheets in its own section
        </p>
        </Col>
        <Col xs={3} className="d-none d-md-block" >
        <div className="text-center" >
        <Image 
          height={height}
          width={height}
          src={features} alt="image" 
          className={`round ${styles.FeaturesImage}`} />
        </div>
        </Col>
        </Row>
        </div>
        </Col>
        </Row>
        </div>
    </div>
  );
};

export default Home;
