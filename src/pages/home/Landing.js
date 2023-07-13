/* Page just to compare background images and styles for the home page */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import city1 from "../../assets/city1.png";
// eslint-disable-next-line 
import city2 from "../../assets/city2.png";
import Container from "react-bootstrap/Container";
// eslint-disable-next-line 
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";

const Landing = () => {
  // const setCurrentUser = useSetCurrentUser();
  // const admin = true;
  const history = useHistory()

  return (
      <div >
        <div className={styles.HomeBox} 
          // style={{ backgroundImage: `url(${r1})`, height:'100vh',
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat', }}
          style={{ backgroundImage: `url(${city1})`, height:'100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', }}
          >
        <Row className={styles.Row}>
          <Col className="my-5" xs={12}>
          <Row>
               <Col xs={12} className={` text-center ${styles.Header}`} >
                <h1>SHOT CALLER PRODUCTION</h1>
                <h2 className={`${styles.Header}`}>TV and Film Production Software</h2>
                <h5 className={`px-2 ${styles.Header}`}>
                  The entire Creative and Production processes 
                  in one work flow.</h5>
                  <Row className="mt-5 px-3" >
                <Col className={`text-center  ${styles.Creative} `}
                style={{fontStyle: 'italic'}} md={6}>
                <h4 className={`mb-2 text-center ${styles.Creative}`}
                    style={{fontStyle: 'normal'}}>
                The Creative
                </h4>
                <p className={`px-2 ${styles.Header}`}>
                Collaborate and design in Scene Department Workspaces
                </p>
                <p onClick={() => history.push('/scenes')}>
                Scene Breakdowns
                <span onClick={() => history.push('/scenes')}
                className="ml-3">
                Mood Shots
                </span>
                </p>
                <p>
                Scene Workspaces
                <span onClick={() => history.push('/scenes')}
                className="ml-3">
                Shotlists
                </span>
                </p>
                </Col>
                <Col md={6} style={{fontStyle: 'italic'}} className={`text-center  ${styles.Creative} `} >
                <h4 className={`mb-2 text-center ${styles.Creative}`}
                    style={{fontStyle: 'normal'}}>
                Production
                </h4>
                <p className={`px-2 ${styles.Header}`}>
                Manage Requirement and Production in Scene Workspaces
                </p>
                <p>
                <span onClick={() => history.push('/scenes')}
                className="ml-3">
                Cast and Crew Admin
                </span>
                </p>
                <p>
                Scheduling
                <span onClick={() => history.push('/scenes')}
                className="ml-3">
                Callsheets
                </span>
                </p>
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
    </div>
  );
};

export default Landing