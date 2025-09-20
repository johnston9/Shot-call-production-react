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
                <h5 className={`${styles.Header}`}  style={{fontStyle: 'italic'}}>
                  The entire Creative and Production processes 
                  in one Workflow.</h5>
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
                Collaborate and design in Scene Workspaces
                </p>
                <Row >
                {/* Breakdowns / Workspaces */}
                <Col md={6} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/workspaces')}>
                Breakdowns / Workspaces
                </p>
                </Col>
                {/* Moodboards / Indexshots */}
                <Col md={6} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/moodboards')}>
                Moodboards / Indexshots
                </p>
                </Col>
                </Row>
                <Row>
                  {/* Characters / Locations  */}
                <Col md={6}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/charslocates')} >
                Characters / Locations 
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
                Cast / Crew
                </p>
                </Col>
                {/* Mobile View */}
                <Col md={6}>
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
        {/* Mobile view possibly don't need one */}
        {/* <div className={`${styles.HomeBoxMo} d-md-none`}
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
                <Col className={`text-center  ${styles.Creative} `} md={6}>
                <h4 className={`mb-2 ${styles.Creative}`}>
                The Creative
                </h4>
                <p className={`${styles.Creative}`} 
                  style={{fontStyle: 'italic'}}>
                Collaborate and design in Scene Department Workspaces
                </p>
                <Row >
                <Col xs={12} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/workspaces')}>
                Breakdowns / Workspaces
                </p>
                </Col>
                <Col xs={12}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/moodboards')}>
                Moodboards / Indexshots
                </p>
                </Col>
                </Row>
                <Row>
                <Col xs={12} >
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/shotstory')} >
                Shotlists
                </p>
                </Col>
                <Col xs={12}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/charslocates')} >
                Characters / Locations 
                </p>
                </Col>
                </Row>
                </Col>
                <Col xs={12} className={` ${styles.Creative} `} >
                <h4 className={`mb-2 ${styles.Creative}`}>
                Production
                </h4>
                <p className={`${styles.Header}`}
                  style={{fontStyle: 'italic'}}>
                All Production Software Tools in one Connected Workflow
                </p>
                <Row>
                <Col xs={12}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/schedule')}>
                Schedule Stripboards
                </p>
                </Col>
                <Col xs={12}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/callsheets')} >
                Callsheets
                </p>
                </Col>
                </Row>
                <Row>
                <Col xs={12}>
                <p className={`${styles.Depts}`}
                  onClick={() => history.push('/castcrew')}>
                Cast / Crew
                </p>
                </Col>
                <Col xs={12}>
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
        </div> */}

      {/* Section 2 - Overview in 4 parts with temporary image   */}
      <div>
        <div className="px-3 mt-3">
          {/* part 1 - platform */}
          <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
            <Col xs={12} md={12} className="text-center">
              <h5>
                Design and manage TV and Film Production on one platform
                utilizing interlinking features.
              </h5>
            </Col>
          </Row>
          {/* 1 */}
          <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
            <Col xs={6} className="text-center">
              <p>
                Create professional standard highly detailed Budgets quickly.
              </p>
              <p>
                Create and collaborate in Scene Workspaces and Moodboards.
              </p>
            </Col>
            <Col xs={6} >
              <div className="text-center">
                <Image src={home8} alt="image" className={` ${styles.ImageSection2}`} />
              </div>
            </Col>
          </Row>
          {/* 2 */}
          <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
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
          </Row>
          {/* Quick Runthrough */}
          <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
            <Col xs={6} className="text-center">
            <h3>
                A Quick Runthrough
              </h3>
            </Col>
            <Col xs={6} >
              <div>
                <iframe
                  width="70%"
                  height="315"
                  src={`${VIMEO_BASE_URL}403530213`} // Replace with your dummy YouTube link
                  title="Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
          {/* A Closer Look */}
          <Row className="mt-1 mt-md-5 d-flex align-items-center justify-content-center">
            <Col xs={6} md={{span: 6, offset: 1}} >
              <div>
                <iframe
                  width="70%"
                  height="315"
                  src={`${VIMEO_BASE_URL}403530213`} // Replace with your dummy YouTube link
                  title="Tutorial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
            <Col xs={6} md={5} className="text-center">
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
        <h4>Breakdowns and Workspaces</h4>
        <p >
        Create a Scene Page for each Scene
        that contains the all the work features 
        including Breakdowns and Department Workspaces.
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
        {/* Mobile */}
        <Col className="d-none d-md-block" md={2}></Col>
        <Col xs={12} md={8} className="mt-3 mt-md-0">
        <div onClick={() => history.push('/mobile')}
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
        <h4>Mobile View</h4>
        <p >
        Use all Features in Mobile View and find all Posts fast 
        using the Quick Find Feature
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
