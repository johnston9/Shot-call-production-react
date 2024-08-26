/* Component in the Budget component to edit Scenario */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Scenario = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {setShow, postDataScenario, setPostDataScenario,
         writersTotal, setWritersTotal,
         consultantsTotal, setConsultantsTotal,
         editorsscenarioTotal, setEditorsscenarioTotal,
         adminScenarioTotal, setAdminScenarioTotal,
         scenarioTotal, setScenarioTotal} = props;
  
  // Scenario postData values
  const {writers_units_number, writers_units_name,
    writers_quantity, writers_rate,
    consultants_units_number, consultants_units_name,
    consultants_quantity, consultants_rate,
    editors_scenario_units_number, editors_scenario_units_name,
    editors_scenario_quantity, editors_scenario_rate,
    admin_scenario_units_number, admin_scenario_units_name,
    admin_scenario_quantity, admin_scenario_rate,
    office_expenses_scenario, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, 
    fringes_taxes_scenario } = postDataScenario;

  // Scenario handleChange 
  const handleChangeScenario = (event) => {
    setPostDataScenario({
    ...postDataScenario,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
  };

  // Scenario handleChange Text 
  const handleChangeScenarioText = (event) => {
    setPostDataScenario({
      ...postDataScenario,
      [event.target.name]: event.target.value,
    });
  }; 

  // Calculate Functions
  // function to calculate writers on change
  useEffect(() => {
    const addWriters = () => {
      setWritersTotal((parseFloat(writers_units_number || 0) *
      parseFloat(writers_quantity || 0) *
      parseFloat(writers_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addWriters();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [writers_units_number, writers_quantity, writers_rate]);

  // function to calculate consultants on change
  useEffect(() => {
    const addConsultants = () => {
      setConsultantsTotal((parseFloat(consultants_units_number || 0) *
        parseFloat(consultants_quantity || 0) * 
        parseFloat(consultants_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addConsultants();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [consultants_units_number, consultants_quantity, consultants_rate, ])

  // function to calculate editors on change
  useEffect(() => {
    const addEditors = () => {
      setEditorsscenarioTotal((parseFloat(editors_scenario_units_number || 0) * 
      parseFloat(editors_scenario_quantity || 0) * 
      parseFloat(editors_scenario_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addEditors();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editors_scenario_units_number, 
    editors_scenario_quantity, editors_scenario_rate]);

  // function to calculate admin on change
  useEffect(() => {
    const addAdminScenario = () => {
      setAdminScenarioTotal((parseFloat(admin_scenario_units_number || 0) *
      parseFloat(admin_scenario_quantity || 0) *
      parseFloat(admin_scenario_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addAdminScenario();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [admin_scenario_units_number,
    admin_scenario_quantity, admin_scenario_rate]);

  // function to add all scenario on change
  useEffect(() => {
    const addScenario = () => {
      setScenarioTotal(
      parseFloat(writersTotal || 0) +
      parseFloat(consultantsTotal || 0) +
      parseFloat(editorsscenarioTotal || 0) +
      parseFloat(adminScenarioTotal || 0) +
      parseFloat(travel_expenses_scenario || 0) +
      parseFloat(office_expenses_scenario || 0) +
      parseFloat(living_expenses_scenario || 0) +
      parseFloat(other_scenario || 0) +
      parseFloat(fringes_taxes_scenario || 0) 
      )
    }
    const timer = setTimeout(() => {
      addScenario();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [writersTotal, consultantsTotal, editorsscenarioTotal,
    office_expenses_scenario, adminScenarioTotal, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, 
    fringes_taxes_scenario ]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    SCENARIO SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>SCENARIO</p>
    </Col>
    <Col md={1}>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
    <Col md={1} ></Col>
    <Col className={ `${styles.Overview} py-1`} md={1} >
    <p className="mb-0">ACCT</p>
    </Col>
    <Col className={ `${styles.Overview} py-1`} md={3} >
    <p className="mb-0">Description</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p className="mb-0">#</p>
    </Col>
    <Col className={`${styles.Overview} text-center py-1`} md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Unit</p>
    </Col>
    <Col md={1} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Price</p>
    </Col>
    <Col md={2} className={`${styles.Overview} text-center py-1`} >
    <p className="mb-0">Total</p>
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Writers */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.10</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Writers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="writers_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="writers_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="writers_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="writers_rate" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Consultants */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.20</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Consultants</p>
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="consultants_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="consultants_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="consultants_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="consultants_rate" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Editors */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.30</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Editors</p>
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="editors_scenario_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_scenario_quantity"
        value={editors_scenario_quantity}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editors_scenario_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="editors_scenario_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_scenario_units_number"
        value={editors_scenario_units_number}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editors_scenario_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="editors_scenario_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_scenario_units_name"
        value={editors_scenario_units_name}
        onChange={handleChangeScenarioText}
            />
    </Form.Group>
    {errors?.editors_scenario_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="editors_scenario_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editors_scenario_rate"
        value={editors_scenario_rate}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editors_scenario_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col  md={2} >
    <Form.Group controlId="editorsscenarioTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editorsscenarioTotal"
        value={editorsscenarioTotal}
        onChange={handleChangeScenario}
            />
    </Form.Group>
    {errors?.editorsscenarioTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Admin */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.40</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Admin</p>
    </Col>
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="admin_scenario_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="admin_scenario_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="admin_scenario_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0"  md={1} >
    <Form.Group controlId="admin_scenario_rate" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Office Cost/Expenses Scenario */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.50</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Office Cost/Expenses Scenario</p>
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Travel Expenses Scenario */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.60</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Travel Expenses</p>
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Living Expenses */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.70</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Living Expenses</p>
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_scenario" 
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>03.90</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} className="text-center" >
    <p className={`${styles.Underline}`}>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_scenario" 
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Scenario Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL SCENARIO</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="scenarioTotal" 
        className={`${styles.Width95} text-center mb-0`} >
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
    </div>
  )
}

export default Scenario