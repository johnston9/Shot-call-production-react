/* Component in the Account component to create Projects */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/ChatCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams, useHistory } from "react-router-dom";

function ProjectEdit() {
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const [postData, setPostData] = useState({
    name: "",
    stripe_id: "",
    url: "",
  });
  const { name, stripe_id, url } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/projects/${id}/`);
        const { name, stripe_id, url} = data;

        setPostData({ name, stripe_id, url });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  const textFields = (
    <div>
    <Form.Group controlId="name" 
        className={`${styles.Width95} text-center`} >
        <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
        <Form.Control 
        type="text"
        className={styles.Input}
        name="name"
        value={name}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    <Form.Group controlId="stripe_id" className={`${styles.Width95} text-center`} >
        <Form.Label className={`${styles.Bold} `} >Stripe id</Form.Label>
        <Form.Control 
            className={styles.InputScene}
            type="text"
            name="stripe_id"
            value={stripe_id}
            onChange={handleChange}
            />
    </Form.Group>
    {errors?.stripe_id?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    {/* url */}
    <Form.Group controlId="url" 
        className={`${styles.Width95} text-center`} >
        <Form.Label className={`${styles.Bold} `} >URL</Form.Label>
        <Form.Control 
        type="text"
        className={styles.Input}
        name="url"
        value={url}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.url?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </div>
  );

  const buttons = (
    <div className="text-center mt-3">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-3`}
        onClick={() => history.goBack()} 
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-5 pl-3`} type="submit">
        Create
      </Button>
    </div>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("stripe_id", stripe_id);
    formData.append("url", url);

    try {
      const { data } = await axiosReq.put(`/projects/${id}/`, formData);
      history.goBack()
      console.log(data)
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div >
    <Row >
    <Col className={`${styles.Back} mt-3`} md={{span: 6, offset: 3}}>
    <h5 style={{ textTransform: 'uppercase'}} 
        className={`mt-1 mb-1 pl-3 py-1 ${styles.SubTitle } text-center`}>
        EDIT PROJECT
    </h5>
    <Form className="mt-3 px-3" onSubmit={handleSubmit}>
      <Row>
      <Col md={{span: 6, offset: 3}} className="pl-3">
      {textFields}
        </Col>
      </Row>
      <Row>
      <Col>
        <div className= {`mt-1`} >{buttons} </div>
      </Col>
    </Row>
    </Form>
        </Col>
       </Row>
    </div>
  );
}

export default ProjectEdit