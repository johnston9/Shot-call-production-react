/* Component in the Budget component to edit Post Staff/Facilities */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const StaffFacilities = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostStaffFac, setPostDataPostStaffFac,
         postSuperTotal, setPostSuperTotal,
         postCoordinTotal, setPostCoordinTotal,
         postAssistTotal, setPostAssistTotal,
         postAccountTotal, setPostAccountTotal, setShow,
         postAccountAssTotal, setPostAccountAssTotal,
         postStaffFacTotal, setPostStaffFacTotal,} = props;

  const {post_supervisor_qty, post_supervisor_uno, 
    post_supervisor_una, post_supervisor_rt, 
    post_coordinator_qty, post_coordinator_uno,
    post_coordinator_una, post_coordinator_rt,
    post_assistants_qty, post_assistants_uno,
    post_assistants_una, post_assistants_rt,
    post_accountants_qty, post_accountants_uno,
    post_accountants_una, post_accountants_rt,
    post_accountants_ass_qty, post_accountants_ass_uno,
    post_accountants_ass_una, post_accountants_ass_rt,
    post_office_rent, post_office_equ, post_office_sup, 
    post_it_network, post_phone_net, post_computers_soft, post_store,
    post_ship, post_craft, fringes_taxes_post, post_other, post_consultant,
  } = postDataPostStaffFac;

  // handleChange
  const handleChange = (event) => {
    setPostDataPostStaffFac({
    ...postDataPostStaffFac,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
  }; 

  // handleChange Text 
  const handleChangeText = (event) => {
    setPostDataPostStaffFac({
    ...postDataPostStaffFac,
    [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // function to calculate Supervisor on change
  useEffect(() => {
    const addPossup = () => {
    setPostSuperTotal((parseFloat(post_supervisor_qty || 0) * 
    parseFloat(post_supervisor_uno || 0) * 
    parseFloat(post_supervisor_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addPossup();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [post_supervisor_qty, post_supervisor_uno,
      post_supervisor_rt]);

  // function to calculate Coordinator on change
  useEffect(() => {
    const addPoscoo = () => {
    setPostCoordinTotal((parseFloat(post_coordinator_qty || 0) * 
    parseFloat(post_coordinator_uno || 0) * 
    parseFloat(post_coordinator_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addPoscoo();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [post_coordinator_qty, post_coordinator_uno, post_coordinator_rt]);

  // function to calculate Post Production Assistants on change
  useEffect(() => {
    const addPosass = () => {
    setPostAssistTotal((parseFloat(post_assistants_qty || 0) * 
    parseFloat(post_assistants_uno || 0) * 
    parseFloat(post_assistants_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addPosass();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [post_assistants_qty, post_assistants_uno, post_assistants_rt]);

  // function to calculate Post Production Accountants on change
  useEffect(() => {
    const addPosacc = () => {
    setPostAccountTotal((parseFloat(post_accountants_qty || 0) * 
    parseFloat(post_accountants_uno || 0) * 
    parseFloat(post_accountants_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addPosacc();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [post_accountants_qty, post_accountants_uno, post_accountants_rt]);

  // function to calculate Post Production Accountants Assistants on change
  useEffect(() => {
    const addPosaccass = () => {
    setPostAccountAssTotal((parseFloat(post_accountants_ass_qty || 0) * 
    parseFloat(post_accountants_ass_uno || 0) * 
    parseFloat(post_accountants_ass_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addPosaccass();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [post_accountants_ass_qty, post_accountants_ass_uno, 
    post_accountants_ass_rt]);

  // function to add all Post Production Staff/Facilities on change
  useEffect(() => {
    const AddPosstafac = () => {
    setPostStaffFacTotal(
    parseFloat(postSuperTotal || 0) +
    parseFloat(postCoordinTotal || 0) +
    parseFloat(postAssistTotal || 0) +
    parseFloat(postAccountTotal || 0) +
    parseFloat(postAccountAssTotal || 0) +
    parseFloat(post_consultant || 0) +
    parseFloat(post_office_rent || 0) +
    parseFloat(post_office_equ || 0) +
    parseFloat(post_office_sup || 0) +
    parseFloat(post_it_network || 0) +
    parseFloat(post_phone_net || 0) +
    parseFloat(post_computers_soft || 0) +
    parseFloat(post_store || 0) +
    parseFloat(post_ship || 0) +
    parseFloat(post_craft || 0) +
    parseFloat(fringes_taxes_post || 0) +
    parseFloat(post_other || 0)
    )
    }
    const timer = setTimeout(() => {
        AddPosstafac();
    }, 1000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
    }, [postSuperTotal, postCoordinTotal, postAssistTotal,
        postAccountTotal, postAccountAssTotal,
        post_office_rent, post_office_equ, post_office_sup, post_consultant, 
        post_it_network, post_phone_net, post_computers_soft, post_store,
        post_ship, post_craft, fringes_taxes_post, post_other,]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    POST PRODUCTION STAFF/FACILITIES SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>POST PRODUCTION STAFF/FACILITIES</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={`mb-2 py-0`} >
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
    {/* Post Production Supervisor */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.10</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Post Production Supervisor</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_supervisor_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_supervisor_qty"
        value={post_supervisor_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_supervisor_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_supervisor_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_supervisor_uno"
        value={post_supervisor_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_supervisor_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_supervisor_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_supervisor_una"
        value={post_supervisor_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.post_supervisor_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_supervisor_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_supervisor_rt"
        value={post_supervisor_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_supervisor_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="postSuperTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postSuperTotal"
        value={postSuperTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postSuperTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Coordinator */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.20</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Post Production Coordinator</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_coordinator_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_coordinator_qty"
        value={post_coordinator_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_coordinator_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_coordinator_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_coordinator_uno"
        value={post_coordinator_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_coordinator_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_coordinator_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_coordinator_una"
        value={post_coordinator_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.post_coordinator_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_coordinator_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_coordinator_rt"
        value={post_coordinator_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_coordinator_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="postCoordinTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postCoordinTotal"
        value={postCoordinTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postCoordinTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Assistants */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.30</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Post Production Assistants</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_assistants_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_assistants_qty"
        value={post_assistants_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_assistants_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_assistants_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_assistants_uno"
        value={post_assistants_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_assistants_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_assistants_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_assistants_una"
        value={post_assistants_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.post_assistants_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_assistants_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_assistants_rt"
        value={post_assistants_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_assistants_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="postAssistTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postAssistTotal"
        value={postAssistTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postAssistTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Accountants */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.40</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Post Production Accountants</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_accountants_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_accountants_qty"
        value={post_accountants_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_accountants_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_accountants_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_accountants_uno"
        value={post_accountants_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_accountants_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_accountants_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_accountants_una"
        value={post_accountants_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.post_accountants_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_accountants_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_accountants_rt"
        value={post_accountants_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_accountants_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="postAccountTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postAccountTotal"
        value={postAccountTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postAccountTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Accounting Assistants */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.50</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Post Production Accounting Assistants</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_accountants_ass_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_accountants_ass_qty"
        value={post_accountants_ass_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_accountants_ass_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_accountants_ass_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_accountants_ass_uno"
        value={post_accountants_ass_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_accountants_ass_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_accountants_ass_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_accountants_ass_una"
        value={post_accountants_ass_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.post_accountants_ass_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="post_accountants_ass_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_accountants_ass_rt"
        value={post_accountants_ass_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_accountants_ass_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="postAccountAssTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postAccountAssTotal"
        value={postAccountAssTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postAccountAssTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Consultant */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.60</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Post Production Consultant</p>
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
    <Form.Group controlId="post_consultant" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_consultant"
        value={post_consultant}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_consultant?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Production Office Rental */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Post Production Office Rental</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_office_rent" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_office_rent"
        value={post_office_rent}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_office_rent?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Office Equipment */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Post Production Equipment</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_office_equ" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_office_equ"
        value={post_office_equ}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_office_equ?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Office Supplies */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Post Production Supplies</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_office_sup" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_office_sup"
        value={post_office_sup}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_office_sup?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post IT, Network Equipment & Support */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Post IT, Network Equipment & Support</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_it_network" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_it_network"
        value={post_it_network}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_it_network?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Phone & Internet */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.92</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Post Phone & Internet</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_phone_net" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_phone_net"
        value={post_phone_net}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_phone_net?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Computers & Software */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.93</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Post Computers & Software</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_computers_soft" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_computers_soft"
        value={post_computers_soft}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_computers_soft?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Storage */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.94</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Post Storage</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_store" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_store"
        value={post_store}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_store?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Shipping */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.95</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Post Shipping</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_ship" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_ship"
        value={post_ship}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_ship?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Post Catering & Craft Services */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.96</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Post Catering & Craft Services</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_craft" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_craft"
        value={post_craft}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_craft?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other - incl. 6th/7th Days, Overtime and Holidays */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.97</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other - incl. 6th/7th Days, Overtime and Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_other" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_other"
        value={post_other}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_other?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes & Taxes */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>42.98</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
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
    <Form.Group controlId="fringes_taxes_post" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_post"
        value={fringes_taxes_post}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_post?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* POST PRODUCTION STAFF/FACILITIES Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>POST PRODUCTION STAFF/FACILITIES TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="postStaffFacTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postStaffFacTotal"
        value={postStaffFacTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postStaffFacTotal?.map((message, idx) => (
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

export default StaffFacilities