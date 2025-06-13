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
import { useHistory, useParams, useLocation } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import InfoBudCreate from "./InfoBudCreate";
import toast from "react-hot-toast";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function BudgetCreate({ type }) {
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const currentUser = useCurrentUser()
  // console.log(currentUser.pk)
  // const navigate = useNavigate()
  const query = useQuery();
  const ids = query.get('id');
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
    title,
    series,
    prodco,
    format,
    location,
    dated,
    prelimfin,
    preparedby,
    approvedby,
    approvedbyco,
    writer,
  } = postDataDetails;

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
        <Col md={6}>
          {/* prelimfin */}
          <Row>
            <Col md={6}>
              <p className={`${styles.Underline}`}>Preliminary or Final</p>
            </Col>
            <Col md={6}>
              <Form.Group
                controlId="prelimfin"
                className={`${styles.Width95} text-center mb-1`}
              >
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
              <Form.Group
                controlId="preparedby"
                className={`${styles.Width95} text-center mb-1`}
              >
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
        <Col md={6}>
          {/* Approved By */}
          <Row>
            <Col md={6}>
              <p className={`${styles.Underline}`}>Approved By - Name</p>
            </Col>
            <Col md={6}>
              <Form.Group
                controlId="approvedby"
                className={`${styles.Width95} text-center mb-1`}
              >
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
              <Form.Group
                controlId="approvedbyco"
                className={`${styles.Width95} text-center mb-1`}
              >
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
              <Form.Group
                controlId="dated"
                className={`${styles.Width95} text-center mb-1`}
              >
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
  );

  // details by input boxes
  const details = (
    <div className="mt-3">
      {/* TITLE */}
      <Row className={`${styles.Overview} mb-2 py-1`}>
        <Col md={12} className="text-center">
          <p className="mb-0">Production Info</p>
        </Col>
      </Row>
      <Row className="mt-3">
        {/* DETAILS */}
        <Col md={6}>
          {/* title */}
          <Row>
            <Col md={6}>
              <p className={`${styles.Underline}`}>Title</p>
            </Col>
            <Col md={6}>
              <Form.Group
                controlId="title"
                className={`${styles.Width95} text-center mb-1`}
              >
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
              <Form.Group
                controlId="series"
                className={`${styles.Width95} text-center mb-1`}
              >
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
              <Form.Group
                controlId="prodco"
                className={`${styles.Width95} text-center mb-1`}
              >
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
        <Col md={6}>
          {/* Writers */}
          <Row>
            <Col md={6}>
              <p className={`${styles.Underline}`}>Writers</p>
            </Col>
            <Col md={6}>
              <Form.Group
                controlId="writer"
                className={`${styles.Width95} text-center mb-1`}
              >
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
              <Form.Group
                controlId="format"
                className={`${styles.Width95} text-center mb-1`}
              >
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
              <Form.Group
                controlId="location"
                className={`${styles.Width95} text-center mb-1`}
              >
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
  );

  // Buttons
  const buttons = (
    <div className="text-center mt-3">
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-3`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 pl-3`}
        type="submit"
      >
        Create
      </Button>
    </div>
  );
  // const [budgetID, setBudgetID] = useState(0);
  // const [budgetIDSecond, setBudgetIDSecond] = useState(0);
  // Submit 1
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();

  //   formData.append("budget_number", "1");
  //   // prepared by
  //   formData.append("dated", dated);
  //   formData.append("prelimfin", prelimfin);
  //   formData.append("preparedby", preparedby);
  //   formData.append("approvedby", approvedby);
  //   formData.append("approvedbyco", approvedbyco);
  //   // details
  //   formData.append("title", title);
  //   formData.append("series", series);
  //   formData.append("prodco", prodco);
  //   formData.append("writer", writer);
  //   formData.append("format", format);
  //   formData.append("location", location);
  //   if (type === 1) {
  //     formData.append('owner', currentUser?.pk)
  //   } else {
  //     formData.append("project", id ?? ids);
  //   }
  //   try {

  //     type === 0 ? await axiosReq.post("/budgets1/", formData) : await axiosReq.post("/budget-view/", formData).then((res) => {
  //       // console.log(res?.data?.budget?.id)
  //       // setBudgetID(res?.data?.budget?.id)
  //       handleSubmit2(event , res?.data?.budget?.id);
  //     })
  //   } catch (err) {
  //     const resData = err.response?.data;


  //     console.error("API Error:", resData.error);
  //     toast.error(resData.error)


  //     if (err.response?.status !== 401) {
  //       setErrors(resData);
  //     }

  //   }
  // };

  // // Submit 2
  // const handleSubmit2 = async (event,budget_ID) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   if (type === 1) {
  //     formData.append('budget', budget_ID)
  //   } else {
  //     formData.append("project", id ?? ids);
  //     formData.append("budget_number", "2");
  //   }
  //   try {
  //     await axiosReq.post("/budgets2/", formData).then((res) => {
  //       // console.log(res?.data)
  //       // setBudgetIDSecond(res?.data?.id)
  //       handleSubmit3(event, budget_ID);
  //     })
  //   } catch (err) {
  //     console.log(err);
  //     if (err.response?.status !== 401) {
  //       setErrors(err.response?.data);
  //     }
  //   }
  // };

  // // Submit 3
  // const handleSubmit3 = async (event, budget_ID) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   if (type === 1) {
  //     formData.append('budget', budget_ID)
  //   } else {
  //     formData.append("project", id ?? ids);
  //     formData.append("budget_number", "2");
  //   }
  //   try {
  //     await axiosReq.post("/budgets3/", formData);
  //     toast.success('Budget created successfully!')
  //     setTimeout(() => {
  //       if (type === 0) {
  //         history.goBack();
  //       } else if (type === 1) {
  //         history.push('/budgets')
  //       }
  //     }, 2000)
  //   } catch (err) {
  //     console.log(err);
  //     if (err.response?.status !== 401) {
  //       setErrors(err.response?.data);
  //     }
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("budget_number", "1");
    formData.append("dated", dated);
    formData.append("prelimfin", prelimfin);
    formData.append("preparedby", preparedby);
    formData.append("approvedby", approvedby);
    formData.append("approvedbyco", approvedbyco);
    formData.append("title", title);
    formData.append("series", series);
    formData.append("prodco", prodco);
    formData.append("writer", writer);
    formData.append("format", format);
    formData.append("location", location);

    if (type === 1) {
      formData.append("owner", currentUser?.pk);
    } else {
      formData.append("project", id ?? ids);
    }

    try {
      let res;
      if (type === 0) {
        res = await axiosReq.post("/budgets1/", formData);
        await handleSubmit2(event, null); // no budget_ID needed for type 0
      } else {
        res = await axiosReq.post("/budget-view/", formData);
        const budgetID = res?.data?.budget?.id;
        await handleSubmit2(event, budgetID);
      }
    } catch (err) {
      const resData = err.response?.data;
      console.error("API Error:", resData?.error);
      toast.error(resData?.error || "Submission failed");
      if (err.response?.status !== 401) {
        setErrors(resData);
      }
    }
  };

  const handleSubmit2 = async (event, budget_ID) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);

    if (type === 1) {
      formData.append("budget", budget_ID);
    } else {
      formData.append("project", id ?? ids);
      formData.append("budget_number", "2");
    }

    try {
      const res = await axiosReq.post("/budgets2/", formData);
      await handleSubmit3(event, budget_ID);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const handleSubmit3 = async (event, budget_ID) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);

    if (type === 1) {
      formData.append("budget", budget_ID);
    } else {
      formData.append("project", id ?? ids);
      formData.append("budget_number", "2");
    }

    try {
      await axiosReq.post("/budgets3/", formData);
      toast.success("Budget created successfully!");
      setTimeout(() => {
        if (type === 0) {
          history.goBack();
        } else if (type === 1) {
          history.push("/budgets");
        }
      }, 2000);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };


  return (
    <div className="mt-3">
      <Row>
        <Col className={`${styles.Back}`}>
          <Row className={`${styles.OverviewBlue} mx-1 mb-1 py-3 text-center`}>
            <Col md={12}>
              <h5 className={`${styles.BoldBlack}`}>
                CREATE BUDGET
                {/* - {type === 0  ? "PROJECT TITLE" : "BUDGET TITLE"}: {title} */}
              </h5>
            </Col>
          </Row>
          <Row className="mt-1 ml-0 px-3">
            <Col xs={12}>
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
                onClick={() => history.goBack()}
              >
                Back
              </Button>
              <Button
                className={`float-right py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
                onClick={() => setShowInfo((showInfo) => !showInfo)}
              >
                Information
              </Button>
            </Col>
          </Row>
          {!showInfo ? "" : <InfoBudCreate />}
          <Form className="mt-3 px-3" onSubmit={handleSubmit}>
            {details}
            {prepare}
            {/* buttons */}
            <Row>
              <Col>
                <div className={`mt-1`}>{buttons} </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default BudgetCreate;
