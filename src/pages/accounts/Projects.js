/* Component in the Account component to fetch a users Projects data
 * Contains the Project component to which it passes the data for each project */
import React, { useCallback, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/Account.module.css";
import NoResults from "../../assets/no-results.png";
import { useEffect } from "react";
import { axiosInstance, axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import Project from "./Project";
import CreateProject from "./CreateProject";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import { Alert as ManAlert } from "@mantine/core";
import { toast } from "react-hot-toast";
import useActivePlan from "../../hooks/useActivePlan";
import { hasProjectPlan } from "../../utils/hasProjectPlan";
import { hasBudgetPlan } from "../../utils/hasBudgetPlan";
import { Alert } from "react-bootstrap";

const Projects = ({
  id,
  stripeCategoryType,
  stripeProjectName,
  stripeSessionId,
  stripeSuccess,
}) => {
  const history = useHistory();
  const userData = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  console.log("user data: ", userData);
  const { currentlyActivePlans } = useActivePlan();
  console.log(currentlyActivePlans, userData);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [projects, setProjects] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [query, setQuery] = useState("");
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const fetchProjects = useCallback(
    async (searchQuery = "") => {
      console.log("userData.pk", userData.pk);

      try {
        const { data } = await axiosInstance.get(
          `/projects/${userData.pk}${
            searchQuery !== "" ? `?search=${searchQuery}` : ""
          }`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            withCredentials: true,
          }
        );

        setProjects(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
        setHasLoaded(true);
      }
    },
    [userData.pk]
  );

  useEffect(() => {
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchProjects(query);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query, id]);

  const handleCreateProject = async (
    session_id,
    project_name,
    category_type
  ) => {
    const { data } = await axiosInstance.get(
      `/projects/stripe-success/?session_id=${session_id}&project_name=${project_name}&category_type=${category_type}`
    );

    console.log(data);

    fetchProjects();
    getCurrentUserData();
    history.push(`/accounts/${userData.pk}`);
  };

  useEffect(() => {
    if (
      stripeSuccess &&
      JSON.parse(stripeSuccess) &&
      stripeCategoryType &&
      stripeSessionId &&
      stripeProjectName
    ) {
      handleCreateProject(
        stripeSessionId,
        stripeProjectName,
        stripeCategoryType
      );
    }
  }, [stripeSuccess, stripeCategoryType, stripeProjectName, stripeSessionId]);

  const handleShowProject = () => {
    console.log(hasProjectPlan(currentlyActivePlans));
    if (!hasProjectPlan(currentlyActivePlans)) {
      toast.error(`You don't have any active packages!`);
      history.push(`/subscription-plans`);
      return;
    }
    if (
      userData?.email === "" ||
      userData?.email === null ||
      userData?.email === undefined
    )
      history.push(`/profiles/${userData?.pk}`);
    setShowCreateProject((showCreateProject) => !showCreateProject);
  };

  const getMaxProject = (plans) => {
    const projectPlan = plans?.find((p) => p?.plan?.plan_type === "project");
    if (projectPlan) {
      return projectPlan?.plan?.max_projects;
    } else {
      return null;
    }
  };

  // const getMessage = (stripeSuccess) => {
  //   setShowMessage(true)
  //   setTimeout(() => {
  //     setShowMessage(false)
  //   }, 5000)

  //   if (!stripeSuccess) return null

  //   if (stripeSuccess && JSON.parse(stripeSuccess)) {
  //     return <ManAlert color="green">Payment successful.</ManAlert>
  //   }

  //   if (stripeSuccess && !JSON.parse(stripeSuccess)) {
  //     return <ManAlert color="red">Payment successful.</ManAlert>
  //   }
  // }

  useEffect(() => {
    if (!stripeSuccess) return;
    if (stripeSuccess && JSON.parse(stripeSuccess)) {
      return toast.success(
        "Your payment has been done successfully and you can find your project in the project listing. Also please check your registered email address for the username & password for the project."
      );
    }
    if (stripeSuccess && !JSON.parse(stripeSuccess)) {
      return toast.error("Payment failed. Please try again!");
    }
  }, [stripeSuccess]);

  const getCurrentUserData = async () => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);
      const { data } = await axiosInstance.get(`/profiles/${user?.pk}/`);
      console.log(data);
      setCurrentUser({
        ...user,
        profile_image: data?.data?.image,
        remaining_projects: data?.data?.remaining_projects,
      });
    }
  };

  useEffect(() => {
    getCurrentUserData();
  }, []);

  return (
    <div className="px-3">
      {/* create project */}
      <Row>
        <Col className="text-center">
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
            onClick={handleShowProject}
          >
            Create Project
          </Button>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
            // onClick={handleShowProject}
            onClick={() => {
              if (
                hasProjectPlan(currentlyActivePlans) ||
                hasBudgetPlan(currentlyActivePlans)
              ) {
                history.push("/budgets");
              } else {
                toast.error(
                  "Cannot access budget. Please buy either budget or project packages."
                );
                history.push(`/subscription-plans`);
              }
            }}
          >
            Create Budget
          </Button>
          {/* {showMessage && getMessage(stripeSuccess)} */}
        </Col>
      </Row>
      {showCreateProject ? (
        <CreateProject
          setShow={setShowCreateProject}
          fetchProjects={fetchProjects}
          stripeCategoryType={stripeCategoryType}
          stripeProjectName={stripeProjectName}
          stripeSessionId={stripeSessionId}
          stripeSuccess={stripeSuccess}
          getCurrentUserData={getCurrentUserData}
        />
      ) : (
        ""
      )}
      {getMaxProject(currentlyActivePlans) && (
        <Alert
          variant="info"
          style={{
            maxWidth: "fit-content",
            margin: "0 auto",
          }}
        >
          {userData?.remaining_projects ? userData?.remaining_projects : 0}{" "}
          {Number(userData?.remaining_projects) === 1 ? "project" : "projects"}{" "}
          remaining out of {getMaxProject(currentlyActivePlans)}
        </Alert>
      )}
      {/* search */}
      <Row>
        <Col
          className="py-2 p-0 p-lg-2"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          {/* search */}
          <Form
            className={`${styles.SearchBar}`}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              className="mr-sm-2"
              placeholder="Search"
            />
          </Form>
        </Col>
      </Row>
      {/* projects */}
      <Row className="px-5">
        {hasLoaded ? (
          <>
            {projects.results.length ? (
              projects.results.map((proj) => (
                <Col xs={12} md={4} className="">
                  <Project key={proj.id} {...proj} />
                </Col>
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message="No Projects" />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Row>
    </div>
  );
};

export default Projects;
