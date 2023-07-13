/* Component in the Account component to fetch a users Projects data
 * Contains the Project component to which it passes the data for each project */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/Account.module.css";
import NoResults from "../../assets/no-results.png";
import { useEffect } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import Project from "./Project";
import CreateProject from "./CreateProject";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";

const Projects = ({id} ) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [projects, setProjects] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [query, setQuery] = useState("");
  const [showCreateProject, setShowCreateProject ] = useState(false);

  const fetchProjects = async () => {
    try {
      const { data } = await axiosReq.get(`/projects/?owner__profile=${id}&search=${query}`);
      setProjects(data);
      console.log(data);
      setHasLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchProjects();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };

  }, [query,id]);

  return (
    <div className="px-3">
    {/* create project */}
    <Row>
    <Col className="text-center">
    <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => setShowCreateProject(showCreateProject => !showCreateProject)} >
          Create Project
      </Button>
      </Col>
    </Row>
    {showCreateProject ? (
              <CreateProject
                setShow={setShowCreateProject}
                fetchProjects={fetchProjects}
              />
            ) : (
              ""
            )}
    {/* search */}
    <Row>
      <Col className="py-2 p-0 p-lg-2" 
        xs={{span: 10, offset: 1}} md={{span: 6, offset: 3}} >
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
            <Col xs={12} md={4} 
            className="">
            <Project key={proj.id} {...proj} />
            </Col>
            ))) 
            : (
            <Container className={appStyles.Content}>
                <Asset src={NoResults } message="No Projects" />
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
  )
}

export default Projects