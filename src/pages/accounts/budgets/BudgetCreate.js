/* Component in the Account component to create Budgets */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Account.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../../api/axiosDefaults";
import { useHistory, useParams } from 'react-router-dom';
import InfoBudCreate from "./InfoBudCreate";

function BudgetCreate() {
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { id } = useParams();
  const [showInfo, setShowInfo] = useState(false);

  // INFO / LENGTH -------------------------
  // Info postData 
  const [postDataDetails, setPostDataDetails] = useState({
    // details
    title: "",
    series: "",
    prodco: "",
    format: "",
    location: "",
    dated: "",
    writer: "",
    prelimfin: "",
    preparedby: "",
    approvedby: "",
    approvedbyco: "",
  });

  // Info postData values 
  const { 
    title, series, prodco, format, location, dated,
    prelimfin, preparedby, approvedby, approvedbyco,
    writer} = postDataDetails;

  // Info handleChange
  const handleChange_details = (event) => {
    setPostDataDetails({
    ...postDataDetails,
    [event.target.name]: event.target.value,
    });
  };

  // prepared by input boxes
  const prepare = (
    <div className="mt-3">
    <Row>
    <Col md={6} >
    {/* prelimfin */}
    <Row >
    <Col md={6}>
    <p className={`${styles.Underline}`}>Preliminary or Final</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="prelimfin" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prelimfin"
        value={prelimfin}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.prelimfin?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* preparedby */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Budget Prepared By</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="preparedby" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="preparedby"
        value={preparedby}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.preparedby?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </Col>
    {/* Approved COLUMN */}
    <Col md={6} >
    {/* Approved By */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Approved By - Name</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="approvedby" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="approvedby"
        value={approvedby}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.approvedby?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Approved By Company */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Approved By - Company</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="approvedbyco" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="approvedbyco"
        value={approvedbyco}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.approvedbyco?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* date */}
    <Row className="mt-3">
    <Col md={6}>
      <p className={`${styles.Underline}`}>Budget Date</p>
      </Col>
      <Col md={6}>
      <Form.Group controlId="dated" 
          className={`${styles.Width95} text-center mb-1`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="dated"
          value={dated}
          onChange={handleChange_details}
              />
      </Form.Group>
      {errors?.dated?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
      </Col>
    </Row>
    </Col>
    </Row>
    </div>
  )

  // details by input boxes
  const details = (
    <div className="mt-3">
    {/* TITLE */}
    <Row className={ `${styles.Overview} mb-2 py-1`} >
    <Col md={12} className="text-center" >
    <p className="mb-0">Production Info</p>
    </Col>
    </Row>
    <Row className="mt-3">
    {/* DETAILS */}
    <Col md={6} >
    {/* title */}
    <Row >
    <Col md={6}>
    <p className={`${styles.Underline}`}>Title</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="title" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="title"
        value={title}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Series */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Series</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="series" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="series"
        value={series}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.series?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Prodco */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Prodco</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="prodco" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prodco"
        value={prodco}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.prodco?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </Col>
    <Col md={6} >
    {/* Writers */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Writers</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="writer" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writer"
        value={writer}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.writer?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Format */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Format</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="format" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="format"
        value={format}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.format?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Location */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Location</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="location" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location"
        value={location}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </Col>
    </Row>
    </div>
  )

  // Buttons
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

  // Submit 1
  const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append("project", id );
  formData.append("budget_number", "1");
  // prepared by
  formData.append("dated", dated);
  formData.append("prelimfin", prelimfin);
  formData.append("preparedby", preparedby);
  formData.append("approvedby", approvedby);
  formData.append("approvedbyco", approvedbyco);
  // details
  formData.append("title", title);
  formData.append("series", series);
  formData.append("prodco", prodco);
  formData.append("writer", writer);
  formData.append("format", format);
  formData.append("location", location);

  try {
    await axiosReq.post("/budgets1/", formData);
    handleSubmit2(event);
  } catch (err) {
    console.log(err);
    if (err.response?.status !== 401) {
      setErrors(err.response?.data);
    }
  }
  };

  // Submit 2
  const handleSubmit2 = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("project", id );
    formData.append("title", title);
    formData.append("budget_number", "2");

    try {
      await axiosReq.post("/budgets2/", formData);
      handleSubmit3(event);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  // Submit 3
  const handleSubmit3 = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("project", id );
    formData.append("title", title);
    formData.append("budget_number", "3");

    try {
      await axiosReq.post("/budgets3/", formData);
      history.goBack();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div className="mt-3">
    <Row >
    <Col className={`${styles.Back}`}>
    <Row className={ `${styles.OverviewBlue} mx-1 mb-1 py-3 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>
      CREATE BUDGET - Project Title: {title}</h5>
    </Col>
    </Row>
    <Row className="mt-1 ml-0 px-3" >
        <Col xs={12}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <Button
          className={`float-right py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} >Information
        </Button>
        </Col>
    </Row>
    {!showInfo ? (
      ""
          ) : (
            <InfoBudCreate  /> 
    ) } 
    <Form className="mt-3 px-3" onSubmit={handleSubmit}>
    {details}
    {prepare}
    {/* buttons */}
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

export default BudgetCreate