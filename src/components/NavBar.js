/* NavBar Component
 * Currently the activeClassName item is working but is throwing an
   error in the console so is commented out on each link
   Am looking for a way to resolve this issue */  
import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo1.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from 'axios';
import Avatar from './Avatar';
import useDropdownClick from '../hooks/useDropdownClick';
import { removeTokenTimestamp } from '../utils/utils';

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  // const { 
  //   reff, reff1, reff2, reff3, reff4, reff5, reff6, 
  //   refm, refm1, refm2, refin, refin2,
  //   refs, refs1, refs2, refs3,
  //   refp, refp1, refp2 } = useDropdownClick();
  const { expanded, setExpanded, ref,
    refw, refw1, refw2, refw3, refw4,
    reff, reff1, reff2, reff3, reff4,
    refp, refp1, refp2 } = useDropdownClick();

  const handleSignOut = async () => {
    /* Function to sign a user out */
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const creativeIcons = (
    <>
    <NavDropdown
    title={
      <span style={{ color: '#555555'}}>
        <i 
        className="navicon fas fa-stream pt-1"></i>Creative
      </span>
    }
    ref={refw}
    id="nav-dropdown1"
    // activeClassName={styles.Active}
    className={`mt-1 ${styles.NavLink} `}
    >
    <NavDropdown.Item >
    <NavLink
    className={`mt-2 ${styles.NavLink} `}
    activeClassName={styles.Active}
    ref={refw3}
    to="workspaces"
    >
    <i className="navicon fas fa-play"></i>Breakdowns / Workspaces
    </NavLink>
    </NavDropdown.Item>
    <NavDropdown.Item >
    <NavLink
    className={` ${styles.NavLink} `}
    activeClassName={styles.Active}
    ref={refw1}
    to="/moodboards"
    >
    <i className="navicon fas fa-play"></i>Moodboards / Indexshots
    </NavLink>
    </NavDropdown.Item>
    <NavDropdown.Item >
    <NavLink
    className={`mt-2 ${styles.NavLink} `}
    activeClassName={styles.Active}
    ref={refw4}
    to="shotstory" Indexshots
    >
    <i className="navicon fas fa-play"></i>Storyboard / Shotlist / Script
    </NavLink>
    </NavDropdown.Item>
    <NavDropdown.Item >
    <NavLink
    className={`mt-2 ${styles.NavLink} `}
    activeClassName={styles.Active}
    ref={refw2}
    to="charslocates"
    >
    <i className="navicon fas fa-play"></i>Characters / Locations 
    </NavLink>
    </NavDropdown.Item>
    </NavDropdown>
    </>
  )

  const productionIcons = (
    <>
    <NavDropdown
    title={
      <span style={{ color: '#555555'}}>
        <i 
        className="navicon fas fa-stream pt-1"></i>Production
      </span>
    }
    ref={reff}
    id="nav-dropdown2"
    // activeClassName={styles.Active}
    className={`mt-1 ${styles.NavLink} `}
    >
    <NavDropdown.Item >
    <NavLink
    className={`mt-2 ${styles.NavLink} `}
    activeClassName={styles.Active}
    ref={reff2}
    to="schedule"
    >
    <i className="navicon fas fa-play"></i>Schedule and Stripboard
    </NavLink>
    </NavDropdown.Item>
    <NavDropdown.Item >
    <NavLink
    className={`mt-2 ${styles.NavLink} `}
    activeClassName={styles.Active}
    ref={reff3}
    to="callsheets"
    >
    <i className="navicon fas fa-play"></i>Callsheets
    </NavLink>
    </NavDropdown.Item>
    <NavDropdown.Item >
    <NavLink
    className={` ${styles.DropLink} `}
    activeClassName={styles.Active}
    ref={reff1}
    to="/castcrew"
    >
    <i className="navicon fas fa-play"></i>Cast and Crew
    </NavLink>
    </NavDropdown.Item>
    <NavDropdown.Item >
    <NavLink
    className={`mt-2 ${styles.NavLink} `}
    activeClassName={styles.Active}
    ref={reff4}
    to="mobile"
    >
    <i className="navicon fas fa-play"></i>Mobile and Quick Find 
    </NavLink>
    </NavDropdown.Item>
    </NavDropdown>
    </>
  )

  const loggedInIcons = (
    <>
      {/* sign out */}
      <NavLink 
        className={`mt-2 pt-1 ${styles.NavLink}`}
        to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      {/* my account */}
      <NavDropdown 
          title={
            <span style={{ color: '#555555'}} className={styles.Title}>
              <i className="fas fa-play"></i>
              My Account 
                  <Avatar src={currentUser?.profile_image} 
                  text="" height={40} />
            </span>
          }
          ref={refp}
          id="nav-dropdown5"
          // activeClassName={styles.Active}
          className={`py-0 ${styles.NavLink}`}
          >
        <NavDropdown.Item >
          <NavLink
          className={` ${styles.DropLink} `}
          activeClassName={styles.Active}
          ref={refp1}
          to={`/accounts/${currentUser?.profile_id}`}
        >
          <i className="navicon fas fa-play"></i>My Account
        </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item >
        <NavLink
          className={`mt-2 ${styles.NavLink} `}
          activeClassName={styles.Active}
          ref={refp2}
          to={`/profiles/${currentUser?.profile_id}`}
        >
          <i className="navicon fas fa-play"></i>My Profile 
      </NavLink>
      </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const loggedOutIcons = (
  /* Icons that display when a user is logged out */
    <>
      <NavLink
        className={`mt-2 mx-2 ${styles.NavLink}`}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={`mt-2 ${styles.NavLink}`}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar expanded={expanded} className={`${styles.NavBar} `} 
      expand="lg" fixed="top">
        <NavLink to="/landing">
          <Navbar.Brand>
          <img src={logo} alt="logo" height="30" /> Shot Caller
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
         ref={ref}
         onClick={() => setExpanded(!expanded)}
         aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
          {/* home */}
          <NavLink
            exact
            className={`mt-2 pt-1 mx-2 ${styles.NavLink}`}
            activeClassName={styles.Active}
            to="/"
          >
            <i className="fas fa-play"></i>Home
          </NavLink>
          {/* creative */}
          {creativeIcons}
          {/* Production */}
          {productionIcons}
          {/* chat */}
          <NavLink
            className={`mt-2 pt-1 mx-2  ${styles.NavLink}`}
            activeClassName={styles.Active}
            to="/chat"
          >
            <i className="fas fa-play"></i>Chat
          </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default NavBar;