/* NavBar Component
 * Currently the activeClassName item is working but is throwing an
   error in the console so is commented out on each link
   Am looking for a way to resolve this issue */
import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo1.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import useDropdownClick from "../hooks/useDropdownClick";
import { removeTokenTimestamp } from "../utils/utils";
import { axiosInstanceNoAuth } from "../api/axiosDefaults";
import useActivePlan from "../hooks/useActivePlan";
import { hasBudgetPlan } from "../utils/hasBudgetPlan";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  // const { currentlyActivePlans } = useActivePlan();

  // console.log(currentUser);
  // const {
  //   reff, reff1, reff2, reff3, reff4, reff5, reff6,
  //   refm, refm1, refm2, refin, refin2,
  //   refs, refs1, refs2, refs3,
  //   refp, refp1, refp2 } = useDropdownClick();
  const {
    expanded,
    setExpanded,
    ref,
    refw,
    refw1,
    refw2,
    refw3,
    refw4,
    reff,
    reff1,
    reff2,
    reff3,
    reff4,
    refp,
    refp1,
    refp2,
    refh1,
  } = useDropdownClick();
  const [videos, setVideos] = useState([]);

  const handleSignOut = async () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    // window.location.reload();
    window.location.href = "/signin";

    /* Function to sign a user out */
    // try {
    //   await axiosInstanceNoAuth.post("api-auth/logout/");

    //   setCurrentUser(null);
    //   localStorage.removeItem("user");
    //   localStorage.removeItem("accessToken");
    //   window.location.reload();
    //   removeTokenTimestamp();
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const fetchVideos = async () => {
    /* Function to sign a user out */
    try {
      const res = await axiosInstanceNoAuth.get("api/videos/");

      // console.log(res);
      setVideos(res?.data?.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const creativeIcons = (
    <>
      <NavDropdown
        title={
          <span style={{ color: "#555555" }}>
            <i className="navicon fas fa-stream pt-1"></i>Creative
          </span>
        }
        ref={refw}
        id="nav-dropdown1"
        className={` ${styles.NavLink} pt-1`}
        activeClassName={styles.Active}
      >
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.DropLink} `}
            activeClassName={styles.Active}
            ref={refw3}
            to="workspaces"
          >
            <i className="navicon fas fa-play"></i>Scenes: Breakdowns / Workshops
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.DropLink} `}
            activeClassName={styles.Active}
            ref={refw4}
            to="shotstory"
            Indexshots
          >
            <i className="navicon fas fa-play"></i>Scenes: Shotlist / Storyboard / Script
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.DropLink} `}
            activeClassName={styles.Active}
            ref={refw2}
            to="charslocates"
          >
            <i className="navicon fas fa-play"></i>Characters / Locations
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.DropLink} `}
            activeClassName={styles.Active}
            ref={refw1}
            to="/moodboards"
          >
            <i className="navicon fas fa-play"></i>Moodboards / Indexshots
          </NavLink>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const howItWorksIcons = (
    <>
      <NavDropdown
        title={
          <span style={{ color: "#555555" }}>
            <i className="navicon fas fa-stream pt-1"></i>How it Works
          </span>
        }
        ref={refh1}
        id="nav-dropdown2"
        // activeClassName={styles.Active}
        className={`${styles.NavLink} pt-1`}
      >
        {videos?.length > 0 &&
          videos?.map((v) => (
            <NavDropdown.Item key={v.id}>
              <NavLink
                className={` ${styles.NavLink} `}
                activeClassName={styles.Active}
                // ref={reff2}
                to={`/how-it-works/${v.video_id}/${v.title}`}
              >
                <i className="navicon fas fa-play"></i>
                {v.title}
              </NavLink>
            </NavDropdown.Item>
          ))}
      </NavDropdown>
    </>
  );

  const productionIcons = (
    <>
      <NavDropdown
        title={
          <span style={{ color: "#555555" }}>
            <i className="navicon fas fa-stream pt-0 pt-lg-1"></i>Production
          </span>
        }
        ref={reff}
        id="nav-dropdown2"
        className={`${styles.NavLink} pt-1`}
      >
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.DropLink} `}
            activeClassName={styles.Active}
            ref={reff2}
            to="schedule"
          >
            <i className="navicon fas fa-play"></i>Schedules / Stripboards
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.DropLink} `}
            activeClassName={styles.Active}
            ref={reff3}
            to="callsheets"
          >
            <i className="navicon fas fa-play"></i>Callsheets
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.DropLink} `}
            activeClassName={styles.Active}
            ref={reff1}
            to="/castcrew"
          >
            <i className="navicon fas fa-play"></i>Cast and Crew
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.DropLink} `}
            activeClassName={styles.Active}
            ref={reff4}
            to="mobile"
          >
            <i className="navicon fas fa-play"></i>Mobile View
          </NavLink>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const history = useHistory();

  const handleShowBudget = () => {
    // console.log(hasBudgetPlan(currentlyActivePlans));
    // if (!hasBudgetPlan(currentlyActivePlans)) {
    //   toast.error(`You don't have any active packages!`);
    //   history.push(`/subscription-plans`);
    //   return;
    // }

    // // history.push(`/profiles/${userData?.pk}`);
    // history.push("/my-budgets");
    // setShowCreateProject((showCreateProject) => !showCreateProject);
  };

  const loggedInIcons = (
    <>
      {/* sign out */}
      <NavLink
        className={` pt-1 ${styles.NavLink}`}
        to="/"
        onClick={handleSignOut}
      >
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      {/* my account */}
      <NavDropdown
        title={
          <span style={{ color: "#555555" }} className={styles.Title}>
            <i className="fas fa-play"></i>
            My Account
            <Avatar src={currentUser?.profile_image} text="" height={40} />
          </span>
        }
        ref={refp}
        id="nav-dropdown5"
        // activeClassName={styles.Active}
        className={`py-0 ${styles.NavLink}`}
      >
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.DropLink} `}
            activeClassName={styles.Active}
            ref={refp1}
            to={`/accounts/${currentUser?.profile_id}`}
          >
            <i className="navicon fas fa-play"></i>My Account
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.NavLink} `}
            activeClassName={styles.Active}
            ref={refp2}
            to={`/profiles/${currentUser?.profile_id}`}
          >
            <i className="navicon fas fa-play"></i>My Profile
          </NavLink>
        </NavDropdown.Item>
        
        {/* <NavDropdown.Item onClick={handleShowBudget}  ref={refp2}>
          <span className={` ${styles.NavLink} `}>
            <i className="navicon fas fa-play"></i> My Budgets
          </span>
        </NavDropdown.Item> */}

        <NavDropdown.Item>
          <NavLink
            className={` ${styles.NavLink} `}
            activeClassName={styles.Active}
            ref={refp2}
            to={`/subscription-plans`}
          >
            <i className="navicon fas fa-play"></i>Subscription Plans
          </NavLink>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <NavLink
            className={` ${styles.NavLink} `}
            activeClassName={styles.Active}
            ref={refp2}
            to={`/transactions`}
          >
            <i className="navicon fas fa-play"></i>Transactions
          </NavLink>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );

  const loggedOutIcons = (
    /* Icons that display when a user is logged out */
    <>
      <NavLink
        className={`${styles.NavLink} mx-2`}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={`pt-2 pt-lg-0 ${styles.NavLink}`}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={`${styles.NavBar} pb-1`}
      expand="lg"
      fixed="top"
    >
      <NavLink to="/landing">
        <Navbar.Brand>
          <img src={logo} alt="logo" height="34" className="pb-1" /> Shot Caller
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle
        ref={ref}
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-right align-items-center">
          {/* home */}
          <NavLink
            exact
            className={` pt-1 mx-2 ${styles.NavLink}`}
            activeClassName={styles.Active}
            to="/"
          >
            <i className="fas fa-play"></i>Home
          </NavLink>
          {/* budgeting */}
          <NavLink
            className={`pt-1 mx-2  ${styles.NavLink}`}
            activeClassName={styles.Active}
            to="/budgeting"
          >
            <i className="fas fa-play"></i>Budgeting
          </NavLink>
          {/* creative */}
          {creativeIcons}
          {/* Production */}
          {productionIcons}
          {/* chat */}
          {/* <NavLink
            className={` pt-1 mx-2  ${styles.NavLink}`}
            activeClassName={styles.Active}
            to="/chat"
          >
            <i className="fas fa-play"></i>Chat
          </NavLink> */}
          <NavLink
            className={` pt-1 mx-2  ${styles.NavLink}`}
            activeClassName={styles.Active}
            to="/contact-us"
          >
            <i className="fas fa-play"></i>Contact Us
          </NavLink>
          {howItWorksIcons}
          {currentUser && localStorage.getItem("user")
            ? loggedInIcons
            : loggedOutIcons}
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default NavBar;
