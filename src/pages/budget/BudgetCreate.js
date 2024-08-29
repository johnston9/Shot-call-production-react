/* Component in the Account component to create Budgets */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Account.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory, useParams } from 'react-router-dom';

function BudgetCreate() {
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { id } = useParams();

  // DETAILS -------------------------------

  const [postDataDetails, setPostDataDetails] = useState({
    // details
    title: "",
    series: "",
    prodco: "",
    format: "",
    location: "",
    dated: "",
  });

  // Details postData values 
  const { 
    title, series, prodco, format, location, dated,} = postDataDetails;

  // Details handleChange
  const handleChange_details = (event) => {
    setPostDataDetails({
      ...postDataDetails,
      [event.target.name]: event.target.value,
    });
  };

  // LENGTH ------------------------
  // Length postData
  const [postDataLength, setPostDataLength] = useState({
    research: 0,
    prep: 0,
    shoot: 0,
    wrap: 0,
    post: 0,});

  // Length postData values
  const { 
    research, prep, shoot, wrap, post,} = postDataLength; 
  
  // Length Total postData 
  const [postDataLengthTotal, setPostDataLengthTotal] = useState(0)

  // Length handleChange
  const handleChangeLength = (event) => {
    setPostDataLength({
      ...postDataLength,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all lengths on change
  useEffect(() => {
    const addLength = () => {
      setPostDataLengthTotal(research + prep + shoot + wrap + post )
    }
    const timer = setTimeout(() => {
      addLength();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [research, prep, shoot, wrap, post ])

  // Details Length Input Boxes
  const detailslength = (
    <div>
    {/* Titles */}
    <Row>
    <Col md={6}>
    <p>Details</p>
    </Col>
    <Col md={6}>
    <p>Length</p>
    </Col>
    </Row>
    <Row>
    {/* DETAILS COLUMN */}
    <Col md={6} >
    {/* title */}
    <Row>
    <Col md={6}>
    <p>Title</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="title" 
        className={`${styles.Width95} text-center`} >
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
    <p>Series</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="series" 
        className={`${styles.Width95} text-center`} >
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
    <p>Prodco</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="prodco" 
        className={`${styles.Width95} text-center`} >
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
    {/* Format */}
    <Row>
    <Col md={6}>
    <p>Format</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="format" 
        className={`${styles.Width95} text-center`} >
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
    <p>Location</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="location" 
        className={`${styles.Width95} text-center`} >
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
    {/* Budget Date */}
    <Row>
    <Col md={6}>
    <p>Budget Date</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="dated" 
        className={`${styles.Width95} text-center`} >
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
    {/* LENGTH COLUMN */}
    <Col md={6} >
    {/* Research */}
    <Row>
    <Col md={4}>
    <p>Research</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="research" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="research"
        value={research}
        onChange={handleChangeLength}
            />
    </Form.Group>
    {errors?.research?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row>
    <Col md={4}>
    <p>Prep</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="prep" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prep"
        value={prep}
        onChange={handleChangeLength}
            />
    </Form.Group>
    {errors?.prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    {/* Shoot */}
    <Row>
    <Col md={4}>
    <p>Shoot</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="shoot" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shoot"
        value={shoot}
        onChange={handleChangeLength}
            />
    </Form.Group>
    {errors?.shoot?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    {/* Wrap */}
    <Row>
    <Col md={4}>
    <p>Wrap</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="wrap" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wrap"
        value={wrap}
        onChange={handleChangeLength}
            />
    </Form.Group>
    {errors?.wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    {/* Post */}
    <Row>
    <Col md={4}>
    <p>Post</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="post" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post"
        value={post}
        onChange={handleChangeLength}
            />
    </Form.Group>
    {errors?.post?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    {/* Length Total */}
    <Row>
    <Col md={4}>
    <p>TOTAL</p>
    </Col>
    <Col md={4}>
    <Form.Group controlId="postDataLengthTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postDataLengthTotal"
        value={postDataLengthTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postDataLengthTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={4}>
    <p>Weeks</p>
    </Col>
    </Row>
    </Col>
    </Row>
    </div>
  );
  
  // RIGHTS ----------------------------------------------------
  
  // Rights postData
  const [postDataRights, setPostDataRights] = useState({
    story_rights: 0,
    miscellaneous: 0,
  });

  // Rights postData values
  const {story_rights, miscellaneous} = postDataRights

  // Rights Total postData 
  const [postDataRightsTotal, setPostDataRightsTotal] = useState(0)

  // Rights handleChange
  const handleChangeRights = (event) => {
    setPostDataRights({
      ...postDataRights,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all rights on change
  useEffect(() => {
    const addRights = () => {
      setPostDataRightsTotal(story_rights + miscellaneous )
    }
    const timer = setTimeout(() => {
      addRights();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [story_rights, miscellaneous ])

  // Rights input boxes
  const rights = (
    <div>
    <Row className="mt-3" >
    <Col md={1} >
    <p>1000</p>
    </Col>
    <Col md={6} >
    <h5 className={ `${styles.Bold}`}>RIGHTS</h5>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} pt-2`} >
    <Col md={1} >
    <p>ACCT</p>
    </Col>
    <Col md={6} >
    <p>Description</p>
    </Col>
    <Col md={1} >
    <p>#</p>
    </Col>
    <Col md={1} >
    <p>Unit</p>
    </Col>
    <Col md={1} >
    <p>Price</p>
    </Col>
    <Col md={2} >
    <p>Total</p>
    </Col>
    </Row>
    {/* Story Rights */}
    <Row>
    <Col md={1} >
    <p>1010</p>
    </Col>
    <Col md={6} >
    <p>Story Rights</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="story_rights" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="story_rights"
        value={story_rights}
        onChange={handleChangeRights}
            />
    </Form.Group>
    {errors?.story_rights?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Miscellaneous */}
    <Row>
    <Col md={1} >
    <p>1020</p>
    </Col>
    <Col md={6} >
    <p>Miscellaneous</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="miscellaneous" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="miscellaneous"
        value={miscellaneous}
        onChange={handleChangeRights}
            />
    </Form.Group>
    {errors?.miscellaneous?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Rights Total */}
    <Row>
    <Col md={1} >
    </Col>
    <Col md={6} >
    <h5 className={ `${styles.Bold}`}>TOTAL</h5>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="postDataRightsTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postDataRightsTotal"
        value={postDataRightsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postDataRightsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  );

  // PRE-PRODUCTION AND DEVELOPMENT --------------------------------------------
  
  // Development postData
  const [postDataDevelopment, setPostDataDevelopment] = useState({
    research_development: 0,
    prelim_budget: 0,
    consultant_expenses: 0,
    office_expenses: 0,
    staff: 0,
    travel_expenses_development: 0,
    living_expenses_development: 0,
    other_development: 0,
    fringes_taxes_development: 0,
  });

  // Development postData values
  const {research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development,
    fringes_taxes_development} = postDataDevelopment

  // Development Total postData 
  const [developmentTotal, setDevelopmentTotal] = useState(0)

  // Development handleChange
  const handleChangeDevelopment = (event) => {
    setPostDataDevelopment({
      ...postDataDevelopment,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // function to add all development on change
  useEffect(() => {
    const addDevelopment = () => {
      setDevelopmentTotal(research_development + prelim_budget + consultant_expenses
        + office_expenses + staff + travel_expenses_development
        + living_expenses_development + other_development 
        + fringes_taxes_development)
    }
    const timer = setTimeout(() => {
      addDevelopment();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development,
    fringes_taxes_development ])

  // Development input boxes
  const development = (
    <div>
    <Row className="mt-3" >
    <Col md={1} >
    <p>2000</p>
    </Col>
    <Col md={6} >
    <h5 className={ `${styles.Bold}`}>RESEARCH AND DEVELOPMENT</h5>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} pt-2`} >
    <Col md={1} >
    <p>ACCT</p>
    </Col>
    <Col md={6} >
    <p>Description</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <p>Total</p>
    </Col>
    </Row>
    {/* Research and Development */}
    <Row>
    <Col md={1} >
    <p>2010</p>
    </Col>
    <Col md={6} >
    <p>Research</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="research_development" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="research_development"
        value={research_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.research_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Preliminary Breakdown/Budget */}
    <Row>
    <Col md={1} >
    <p>2020</p>
    </Col>
    <Col md={6} >
    <p>Preliminary Breakdown/Budget</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="prelim_budget" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prelim_budget"
        value={prelim_budget}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.prelim_budget?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Consultant Expenses */}
    <Row>
    <Col md={1} >
    <p>2030</p>
    </Col>
    <Col md={6} >
    <p>Consultant Expenses</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="consultant_expenses" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultant_expenses"
        value={consultant_expenses}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.consultant_expenses?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Office Expenses */}
    <Row>
    <Col md={1} >
    <p>2040</p>
    </Col>
    <Col md={6} >
    <p>Office Expenses</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="office_expenses" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="office_expenses"
        value={office_expenses}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.office_expenses?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Staff */}
    <Row>
    <Col md={1} >
    <p>2050</p>
    </Col>
    <Col md={6} >
    <p>Staff</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="staff" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="staff"
        value={staff}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.staff?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses Development */}
    <Row>
    <Col md={1} >
    <p>2060</p>
    </Col>
    <Col md={6} >
    <p>Travel Expenses</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="travel_expenses_development" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_development"
        value={travel_expenses_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.travel_expenses_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses Development */}
    <Row>
    <Col md={1} >
    <p>2070</p>
    </Col>
    <Col md={6} >
    <p>Living Expenses Development</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="living_expenses_development" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_development"
        value={living_expenses_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.living_expenses_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other Development */}
    <Row>
    <Col md={1} >
    <p>2080</p>
    </Col>
    <Col md={6} >
    <p>Other</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_development" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_development"
        value={other_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.other_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p>2090</p>
    </Col>
    <Col md={6} >
    <p>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_development" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_development"
        value={fringes_taxes_development}
        onChange={handleChangeDevelopment}
            />
    </Form.Group>
    {errors?.fringes_taxes_development?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Development Total */}
    <Row>
    <Col md={1} >
    </Col>
    <Col md={6} >
    <h5 className={ `${styles.Bold}`}>TOTAL</h5>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="developmentTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="developmentTotal"
        value={developmentTotal}
        readOnly
            />
    </Form.Group>
    {errors?.developmentTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  );
  // ------------------------------------------------------
  // SCENARIO --------------------------------------------
  
  // Scenario postData
  const [postDataScenario, setPostDataScenario] = useState({
    writers_units_number: 0,
    writers_units_name: "",
    writers_quantity: 0,
    writers_rate: 0,
    consultants_units_number: 0,
    consultants_units_name: "",
    consultants_quantity: 0,
    consultants_rate: 0,
    editors_units_number: 0,
    editors_units_name: "",
    editors_quantity: 0,
    editors_rate: 0,
    admin_scenario_units_number: 0,
    admin_scenario_units_name: "",
    admin_scenario_quantity: 0,
    admin_scenario_rate: 0,
    office_expenses_scenario: 0,
    travel_expenses_scenario: 0,
    living_expenses_scenario: 0,
    other_scenario: 0,
    fringes_taxes_scenario: 0,
  });

  // Scenario postData values
  const {writers_units_number, writers_units_name,
    writers_quantity, writers_rate,
    consultants_units_number, consultants_units_name,
    consultants_quantity, consultants_rate,
    editors_units_number, editors_units_name,
    editors_quantity, editors_rate,
    admin_scenario_units_number, admin_scenario_units_name,
    admin_scenario_quantity, admin_scenario_rate,
    office_expenses_scenario, travel_expenses_scenario,
    living_expenses_scenario, other_scenario,
    fringes_taxes_scenario} = postDataScenario

  // Writers Total postData
  const [writersTotal, setWritersTotal] = useState(0);
  // Writers Total postData 
  const [consultantsTotal, setConsultantsTotal] = useState(0);
  // Writers Total postData 
  const [editorsTotal, setEditorsTotal] = useState(0);
  // Admin Total postData 
  const [adminScenarioTotal, setAdminScenarioTotal] = useState(0);

  // function to calculate writers on change
  useEffect(() => {
    const addWriters = () => {
      setWritersTotal(writers_units_number *
        writers_quantity * writers_rate )
    }
    const timer = setTimeout(() => {
      addWriters();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [writers_units_number,
    writers_quantity, writers_rate]);

  // function to calculate consultants on change
  useEffect(() => {
    const addConsultants = () => {
      setConsultantsTotal(consultants_units_number *
        consultants_quantity * consultants_rate, )
    }
    const timer = setTimeout(() => {
      addConsultants();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [consultants_units_number,
    consultants_quantity, consultants_rate, ])

  // function to calculate editors on change
  useEffect(() => {
    const addEditors = () => {
      setEditorsTotal(editors_units_number * editors_quantity * editors_rate )
    }
    const timer = setTimeout(() => {
      addEditors();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [editors_units_number, editors_quantity, editors_rate])

  // function to calculate admin on change
  useEffect(() => {
    const addAdminScenario = () => {
      setAdminScenarioTotal(admin_scenario_units_number *
        admin_scenario_quantity * admin_scenario_rate )
    }
    const timer = setTimeout(() => {
      addAdminScenario();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [admin_scenario_units_number,
    admin_scenario_quantity, admin_scenario_rate]);

  // Scenario Total postData 
  const [scenarioTotal, setScenarioTotal] = useState(0);

  // Scenario handleChange 
  const handleChangeScenario = (event) => {
    setPostDataScenario({
      ...postDataScenario,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // Scenario handleChange Text 
  const handleChangeScenarioText = (event) => {
    setPostDataScenario({
      ...postDataScenario,
      [event.target.name]: event.target.value,
    });
  }; 

  // function to add all scenario on change
  useEffect(() => {
    const addScenario = () => {
      setScenarioTotal(writersTotal + consultantsTotal + editorsTotal +
        office_expenses_scenario + adminScenarioTotal + travel_expenses_scenario +
    living_expenses_scenario + other_scenario + fringes_taxes_scenario)
    }
    const timer = setTimeout(() => {
      addScenario();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [writersTotal, consultantsTotal, editorsTotal,
    office_expenses_scenario, adminScenarioTotal, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, fringes_taxes_scenario ])

  // Scenario input boxes
  const scenario = (
    <div>
    <Row className="mt-3" >
    <Col md={1} >
    <p>3000</p>
    </Col>
    <Col md={6} >
    <h5 className={ `${styles.Bold}`}>SCENARIO</h5>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} pt-2`} >
    <Col md={1} >
    <p>ACCT</p>
    </Col>
    <Col md={5} >
    <p>Description</p>
    </Col>
    <Col md={1} >
    <p>Quantity</p>
    </Col>
    <Col md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p>Unit</p>
    </Col>
    <Col md={1} >
    <p>Price</p>
    </Col>
    <Col md={2} >
    <p>Total</p>
    </Col>
    </Row>
    {/* Writers */}
    <Row>
    <Col md={1} >
    <p>3010</p>
    </Col>
    <Col md={5} >
    <p>Writers</p>
    </Col>
    <Col md={1} >
    <Form.Group controlId="writers_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writers_quantity"
        value={writers_quantity}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.writers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="writers_units_number" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writers_units_number"
        value={writers_units_number}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.writers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="writers_units_name" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writers_units_name"
        value={writers_units_name}
        onChange={handleChangeScenarioText}
            />
    </Form.Group>
    {errors?.writers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="writers_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writers_rate"
        value={writers_rate}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.writers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="writersTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="writersTotal"
        value={writersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.writersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Consultants */}
    <Row>
    <Col md={1} >
    <p>3020</p>
    </Col>
    <Col md={5} >
    <p>Consultants</p>
    </Col>
    <Col md={1} >
    <Form.Group controlId="consultants_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultants_quantity"
        value={consultants_quantity}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.consultants_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="consultants_units_number" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultants_units_number"
        value={consultants_units_number}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.consultants_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="consultants_units_name" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultants_units_name"
        value={consultants_units_name}
        onChange={handleChangeScenarioText}
            />
    </Form.Group>
    {errors?.consultants_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="consultants_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultants_rate"
        value={consultants_rate}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.consultants_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="consultantsTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="consultantsTotal"
        value={consultantsTotal}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.consultantsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Editors */}
    <Row>
    <Col md={1} >
    <p>3030</p>
    </Col>
    <Col md={5} >
    <p>Editors</p>
    </Col>
    <Col md={1} >
    <Form.Group controlId="editors_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_quantity"
        value={editors_quantity}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editors_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="editors_units_number" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_units_number"
        value={editors_units_number}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editors_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="editors_units_name" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_units_name"
        value={editors_units_name}
        onChange={handleChangeScenarioText}
            />
    </Form.Group>
    {errors?.editors_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="editors_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_rate"
        value={editors_rate}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editors_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="editorsTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editorsTotal"
        value={editorsTotal}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editorsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Admin */}
    <Row>
    <Col md={1} >
    <p>3040</p>
    </Col>
    <Col md={5} >
    <p>Admin</p>
    </Col>
    <Col md={1} >
    <Form.Group controlId="admin_scenario_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="admin_scenario_quantity"
        value={admin_scenario_quantity}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.admin_scenario_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="admin_scenario_units_number" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="admin_scenario_units_number"
        value={admin_scenario_units_number}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.admin_scenario_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="admin_scenario_units_name" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="admin_scenario_units_name"
        value={admin_scenario_units_name}
        onChange={handleChangeScenarioText}
            />
    </Form.Group>
    {errors?.admin_scenario_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <Form.Group controlId="admin_scenario_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="admin_scenario_rate"
        value={admin_scenario_rate}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.admin_scenario_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="adminScenarioTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="adminScenarioTotal"
        value={adminScenarioTotal}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.adminScenarioTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Office Cost/Expenses Scenario */}
    <Row>
    <Col md={1} >
    <p>3050</p>
    </Col>
    <Col md={6} >
    <p>Office Cost/Expenses Scenario</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="office_expenses_scenario" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="office_expenses_scenario"
        value={office_expenses_scenario}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.office_expenses_scenario?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses Scenario */}
    <Row>
    <Col md={1} >
    <p>3060</p>
    </Col>
    <Col md={6} >
    <p>Travel Expenses</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="travel_expenses_scenario" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_scenario"
        value={travel_expenses_scenario}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.travel_expenses_scenario?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses */}
    <Row>
    <Col md={1} >
    <p>3070</p>
    </Col>
    <Col md={6} >
    <p>Living Expenses</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="living_expenses_scenario" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_scenario"
        value={living_expenses_scenario}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.living_expenses_scenario?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p>3080</p>
    </Col>
    <Col md={6} >
    <p>Other</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_scenario" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_scenario"
        value={other_scenario}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.other_scenario?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p>3090</p>
    </Col>
    <Col md={6} >
    <p>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_scenario" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_scenario"
        value={fringes_taxes_scenario}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.fringes_taxes_scenario?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Scenario Total */}
    <Row>
    <Col md={1} >
    </Col>
    <Col md={6} >
    <h5 className={ `${styles.Bold}`}>TOTAL</h5>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="scenarioTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenarioTotal"
        value={scenarioTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scenarioTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  );
  // ------------------------------------------------------

  // PRODUCERS DIRECTORS --------------------------------------------
  
  // producers postData
  const [postDataProducersDirs, setPostDataProducersDirs] = useState({
    executive_producers_rate: 0,
    producers_rate: 0,
    line_producers_rate: 0,
    co_producers_rate: 0,
    associate_producers_rate: 0,
    directors_rate: 0,
    unit2_directors_rate: 0,
    executive_producers_quantity: 0,
    producers_quantity: 0,
    line_producers_quantity: 0,
    co_producers_quantity: 0,
    associate_producers_quantity: 0,
    directors_quantity: 0,
    unit2_directors_quantity: 0,
    travel_expenses_producers_dirs: 0,
    living_expenses_producers_dirs: 0,
    other_producers_dirs: 0,
    fringes_taxes_producers_dirs: 0,
  });

  // producers directors postData values
  const {executive_producers_rate,
    producers_rate,
    line_producers_rate,
    co_producers_rate,
    associate_producers_rate,
    directors_rate,
    unit2_directors_rate,
    executive_producers_quantity,
    producers_quantity,
    line_producers_quantity,
    co_producers_quantity,
    associate_producers_quantity,
    directors_quantity,
    unit2_directors_quantity,
    travel_expenses_producers_dirs,
    living_expenses_producers_dirs,
    other_producers_dirs,
    fringes_taxes_producers_dirs,
    } = postDataProducersDirs

  // TOTALS
  // Exec Producers Total postData
  const [execProducersTotal, setExecProducersTotal] = useState(0);
  // Producers Total postData
  const [producersTotal, setProducersTotal] = useState(0);
  // Line Producers Total postData
  const [lineProducersTotal, setLineProducersTotal] = useState(0);
  // Co Producers Total postData
  const [coProducersTotal, setCoProducersTotal] = useState(0);
  // Associate Producers Total postData
  const [assocProducersTotal, setAssocProducersTotal] = useState(0);
  // Directors Total postData
  const [directorsTotal, setDirectorsTotal] = useState(0);
  // 2nd Unit Directors Total postData
  const [unit2DirectorsTotal, setUnit2DirectorsTotal] = useState(0);
  // ProducersDirs Total postData 
  const [producersDirsTotal, setProducersDirsTotal] = useState(0);

  // CALCULATE FUNCTIONS
  // function to calculate Exec Producers on change
  useEffect(() => {
    const addExecPros = () => {
      setExecProducersTotal(parseFloat(executive_producers_quantity || 0) * 
      parseFloat(executive_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addExecPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [executive_producers_quantity, executive_producers_rate]);

  // function to calculate Producers on change
  useEffect(() => {
    const addPros = () => {
      setProducersTotal(parseFloat(producers_quantity || 0) * 
      parseFloat(producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [producers_quantity, producers_rate]);

  // function to calculate Line Producers on change
  useEffect(() => {
    const addLinePros = () => {
      setLineProducersTotal(parseFloat(line_producers_quantity || 0) * 
      parseFloat(line_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addLinePros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [line_producers_quantity, line_producers_rate]);

  // function to calculate  Co Producers on change
  useEffect(() => {
    const addCoPros = () => {
      setCoProducersTotal(parseFloat(co_producers_quantity || 0) * 
      parseFloat(co_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addCoPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [co_producers_quantity, co_producers_rate]);

  // function to calculate  Assoc Producers on change
  useEffect(() => {
    const addAssocPros = () => {
      setAssocProducersTotal(parseFloat(associate_producers_quantity || 0) * 
      parseFloat(associate_producers_rate || 0))
    }
    const timer = setTimeout(() => {
      addAssocPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [associate_producers_quantity, associate_producers_rate]);

  // function to calculate Directors on change
  useEffect(() => {
    const addDirectors = () => {
      setDirectorsTotal(parseFloat(directors_quantity || 0) * 
      parseFloat(directors_rate || 0))
    }
    const timer = setTimeout(() => {
      addDirectors();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [directors_quantity, directors_rate]);

  // function to calculate 2nd Unit Directors on change
  useEffect(() => {
    const addUnit2Dirs = () => {
      setUnit2DirectorsTotal(parseFloat(unit2_directors_quantity || 0) * 
      parseFloat(unit2_directors_rate || 0))
    }
    const timer = setTimeout(() => {
      addUnit2Dirs();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [unit2_directors_quantity, unit2_directors_rate]);

  // end calculate functions

  // function to add all ProducersDirs on change
  useEffect(() => {
    const addProducersDirs = () => {
      setProducersDirsTotal(execProducersTotal +
        producersTotal + lineProducersTotal + coProducersTotal +
        assocProducersTotal + directorsTotal + unit2DirectorsTotal +
        travel_expenses_producers_dirs + living_expenses_producers_dirs +
        other_producers_dirs + fringes_taxes_producers_dirs,)
    }
    const timer = setTimeout(() => {
      addProducersDirs();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [execProducersTotal, producersTotal, lineProducersTotal, coProducersTotal,
    assocProducersTotal, directorsTotal, unit2DirectorsTotal,
    travel_expenses_producers_dirs, living_expenses_producers_dirs,
    other_producers_dirs, fringes_taxes_producers_dirs, ]);

  // ProducersDirs handleChange
  const handleChangeProducersDirs = (event) => {
    setPostDataProducersDirs({
      ...postDataProducersDirs,
      [event.target.name]: parseFloat(event.target.value || 0 ),
    });
  }; 

  // Producers Dirs input boxes
  const producersDirs = (
    <div>
    <Row className="mt-3" >
    <Col md={1} >
    <p>4000</p>
    </Col>
    <Col md={6} >
    <h5 className={ `${styles.Bold}`}>PRODUCERS AND DIRECTORS</h5>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `${styles.Overview} pt-2`} >
    <Col md={1} >
    <p>ACCT</p>
    </Col>
    <Col md={6} >
    <p>Description</p>
    </Col>
    <Col md={1} >
    <p>#</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p>Price</p>
    </Col>
    <Col md={2} >
    <p>Total</p>
    </Col>
    </Row>
    {/* Executive Producers */}
    <Row>
    <Col md={1} >
    <p>4010</p>
    </Col>
    <Col md={6} >
    <p>Executive Producers</p>
    </Col>
    {/* Quantity */}
    <Col md={1} >
    <Form.Group controlId="executive_producers_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="executive_producers_quantity"
        value={executive_producers_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.executive_producers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col md={1} >
    <Form.Group controlId="executive_producers_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="executive_producers_rate"
        value={executive_producers_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.executive_producers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="execProducersTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="execProducersTotal"
        value={execProducersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.execProducersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Producers */}
    <Row>
    <Col md={1} >
    <p>4020</p>
    </Col>
    <Col md={6} >
    <p>Producers</p>
    </Col>
    {/* Quantity */}
    <Col md={1} >
    <Form.Group controlId="producers_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="producers_quantity"
        value={producers_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.producers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col md={1} >
    <Form.Group controlId="producers_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="producers_rate"
        value={producers_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.producers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="producersTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="producersTotal"
        value={producersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.producersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Line Producers */}
    <Row>
    <Col md={1} >
    <p>4030</p>
    </Col>
    <Col md={6} >
    <p>Line Producers</p>
    </Col>
    {/* Quantity */}
    <Col md={1} >
    <Form.Group controlId="line_producers_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="line_producers_quantity"
        value={line_producers_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.line_producers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col md={1} >
    <Form.Group controlId="line_producers_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="line_producers_rate"
        value={line_producers_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.line_producers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="lineProducersTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lineProducersTotal"
        value={lineProducersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.lineProducersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Co Producers */}
    <Row>
    <Col md={1} >
    <p>4040</p>
    </Col>
    <Col md={6} >
    <p>Co-Producers</p>
    </Col>
    {/* Quantity */}
    <Col md={1} >
    <Form.Group controlId="co_producers_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="co_producers_quantity"
        value={co_producers_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.co_producers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col md={1} >
    <Form.Group controlId="co_producers_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="co_producers_rate"
        value={co_producers_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.co_producers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="coProducersTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="coProducersTotal"
        value={coProducersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.coProducersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Associate Producers */}
    <Row>
    <Col md={1} >
    <p>4050</p>
    </Col>
    <Col md={6} >
    <p>Associate Producers</p>
    </Col>
    {/* Quantity */}
    <Col md={1} >
    <Form.Group controlId="associate_producers_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="associate_producers_quantity"
        value={associate_producers_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.associate_producers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col md={1} >
    <Form.Group controlId="associate_producers_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="associate_producers_rate"
        value={associate_producers_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.associate_producers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="assocProducersTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assocProducersTotal"
        value={assocProducersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assocProducersTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Directors */}
    <Row>
    <Col md={1} >
    <p>4060</p>
    </Col>
    <Col md={6} >
    <p>Directors</p>
    </Col>
    {/* Quantity */}
    <Col md={1} >
    <Form.Group controlId="directors_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_quantity"
        value={directors_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.directors_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col md={1} >
    <Form.Group controlId="directors_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_rate"
        value={directors_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.directors_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="directorsTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directorsTotal"
        value={directorsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.directorsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* 2nd Unit Directors */}
    <Row>
    <Col md={1} >
    <p>4070</p>
    </Col>
    <Col md={6} >
    <p>2nd Unit Directors</p>
    </Col>
    {/* Quantity */}
    <Col md={1} >
    <Form.Group controlId="unit2_directors_quantity" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit2_directors_quantity"
        value={unit2_directors_quantity}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.unit2_directors_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* blank */}
    <Col md={1} >
    <p></p>
    </Col>
    {/* Price */}
    <Col md={1} >
    <Form.Group controlId="unit2_directors_rate" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit2_directors_rate"
        value={unit2_directors_rate}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.unit2_directors_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    {/* total */}
    <Col md={2} >
    <Form.Group controlId="unit2DirectorsTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit2DirectorsTotal"
        value={unit2DirectorsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.unit2DirectorsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Travel Expenses */}
    <Row>
    <Col md={1} >
    <p>4080</p>
    </Col>
    <Col md={6} >
    <p>Travel Expenses</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="travel_expenses_producers_dirs" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="travel_expenses_producers_dirs"
        value={travel_expenses_producers_dirs}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.travel_expenses_producers_dirs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Living Expenses */}
    <Row>
    <Col md={1} >
    <p>4090</p>
    </Col>
    <Col md={6} >
    <p>Living Expenses</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="living_expenses_producers_dirs" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="living_expenses_producers_dirs"
        value={living_expenses_producers_dirs}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.living_expenses_producers_dirs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Other */}
    <Row>
    <Col md={1} >
    <p>4100</p>
    </Col>
    <Col md={6} >
    <p>Other</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_producers_dirs" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_producers_dirs"
        value={other_producers_dirs}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.other_producers_dirs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row>
    <Col md={1} >
    <p>4110</p>
    </Col>
    <Col md={6} >
    <p>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_producers_dirs" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_producers_dirs"
        value={fringes_taxes_producers_dirs}
        onChange={handleChangeProducersDirs}
            />
    </Form.Group>
    {errors?.fringes_taxes_producers_dirs?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Producers Dirs Total */}
    <Row>
    <Col md={1} >
    </Col>
    <Col md={6} >
    <h5 className={ `${styles.Bold}`}>TOTAL</h5>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="producersDirsTotal" 
        className={`${styles.Width95} text-center`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="producersDirsTotal"
        value={producersDirsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.producersDirsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
  );
  // ------------------------------------------------------

  // OTHER --------------------------------------------------
  const aboveLine = (
    <div>
    <Row className={ `${styles.Overview} pt-2`} >
    <Col md={1} >
    <p>ACCT</p>
    </Col>
    <Col md={6} >
    <p>Description</p>
    </Col>
    <Col md={1} >
    <p>#</p>
    </Col>
    <Col md={1} >
    <p>Unit</p>
    </Col>
    <Col md={1} >
    <p>Price</p>
    </Col>
    <Col md={2} >
    <p>Total</p>
    </Col>
    </Row>
    </div>)

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
    formData.append("project", id );
    // details
    formData.append("title", title);
    formData.append("series", series);
    formData.append("prodco", prodco);
    formData.append("format", format);
    formData.append("location", location);
    formData.append("dated", dated);
    // length
    formData.append("research", research);
    formData.append("prep", prep);
    formData.append("shoot", shoot);
    formData.append("wrap", wrap);
    formData.append("post", post);
    formData.append("length_total", postDataLengthTotal);
    // ABOVE THE LINE
    // rights 
    formData.append("story_rights", story_rights);
    formData.append("miscellaneous", miscellaneous);
    formData.append("rights_total ", postDataRightsTotal);
    // development
    formData.append("research_development", research_development);
    formData.append("prelim_budget", prelim_budget);
    formData.append("consultant_expenses", consultant_expenses);
    formData.append("office_expenses", office_expenses);
    formData.append("staff", staff);
    formData.append("travel_expenses_development", travel_expenses_development);
    formData.append("living_expenses_development", living_expenses_development);
    formData.append("other_development", other_development);
    formData.append("development_total ", developmentTotal);
    // scenario
    formData.append("writers_units_number", writers_units_number);
    formData.append("writers_units_name", writers_units_name);
    formData.append("writers_quantity", writers_quantity);
    formData.append("writers_rate", writers_rate);
    formData.append("writers_total", writersTotal);
    formData.append("consultants_units_number", consultants_units_number);
    formData.append("consultants_units_name", consultants_units_name);
    formData.append("consultants_quantity", consultants_quantity);
    formData.append("consultants_rate", consultants_rate);
    formData.append("consultants_total", consultantsTotal);
    formData.append("editors_units_number ", editors_units_number);
    formData.append("editors_units_name", editors_units_name);
    formData.append("editors_quantity", editors_quantity);
    formData.append("editors_rate", editors_rate);
    formData.append("editors_total", editorsTotal);
    formData.append("admin_scenario_units_number ", admin_scenario_units_number);
    formData.append("admin_scenario_units_name", admin_scenario_units_name);
    formData.append("admin_scenario_quantity", admin_scenario_quantity);
    formData.append("admin_scenario_rate", admin_scenario_rate);
    formData.append("admin_total", adminScenarioTotal);
    formData.append("office_expenses_scenario ", office_expenses_scenario);
    formData.append("travel_expenses_scenario", travel_expenses_scenario);
    formData.append("living_expenses_scenario", living_expenses_scenario);
    formData.append("other_scenario", other_scenario);
    formData.append("scenario_total", scenarioTotal);
    // producers-directors
    formData.append("executive_producers_rate", executive_producers_rate);
    formData.append("producers_rate", producers_rate);
    formData.append("line_producers_rate", line_producers_rate);
    formData.append("co_producers_rate", co_producers_rate);
    formData.append("associate_producers_rate", associate_producers_rate);
    formData.append("directors_rate", directors_rate);
    formData.append("unit2_directors_rate", unit2_directors_rate);
    formData.append("executive_producers_quantity", executive_producers_quantity);
    formData.append("producers_quantity", producers_quantity);
    formData.append("line_producers_quantity", line_producers_quantity);
    formData.append("co_producers_quantity", co_producers_quantity);
    formData.append("associate_producers_quantity", associate_producers_quantity);
    formData.append("directors_quantity", directors_quantity);
    formData.append("unit2_directors_quantity", unit2_directors_quantity);
    formData.append("travel_expenses_producers_dirs", travel_expenses_producers_dirs);
    formData.append("living_expenses_producers_dirs", living_expenses_producers_dirs);
    formData.append("other_producers_dirs", other_producers_dirs);
    formData.append("fringes_taxes_producers_dirs", fringes_taxes_producers_dirs);
    formData.append("executive_producers_total", execProducersTotal);
    formData.append("producers_total", producersTotal);
    formData.append("line_producers_total", lineProducersTotal);
    formData.append("co_producers_total", coProducersTotal);
    formData.append("associate_producers_total", assocProducersTotal);
    formData.append("directors_total", directorsTotal);
    formData.append("unit2_directors_total", unit2DirectorsTotal);
    formData.append("producers_dirs_total", producersDirsTotal);

    try {
      const { data } = await axiosReq.post("/budgets/", formData);
      console.log(data);
      history.goBack();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <div className="mt-2">
    <Row >
    <Col className={`${styles.Back}`}>
    <h5 style={{ textTransform: 'uppercase'}} 
        className={`mt-1 mb-1 pl-3 py-1 ${styles.SubTitle } text-center`}>
        CREATE BUDGET - Project ID: {id}
    </h5>
    <Row className="mt-1 ml-2" >
        <Col xs={3}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        </Col>
    </Row>
    <Form className="mt-3 px-3" onSubmit={handleSubmit}>
    {detailslength}
    <h4>Above the Line</h4>
    {aboveLine}
    {rights}
    {development}
    {scenario}
    {producersDirs}
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