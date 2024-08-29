/* Component in the Budget component to edit Producers/Directors */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const ProducersDirectors = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataProducersDirs, setPostDataProducersDirs,
         execProducersTotal, setExecProducersTotal,
         producersTotal, setProducersTotal,
         lineProducersTotal, setLineProducersTotal,
         coProducersTotal, setCoProducersTotal,
         assocProducersTotal, setAssocProducersTotal,
         directorsTotal, setDirectorsTotal, setShow,
         unit2DirectorsTotal, setUnit2DirectorsTotal,
         producersDirsTotal, setProducersDirsTotal} = props;
  
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
    } = postDataProducersDirs;

  // ProducersDirs handleChange
  const handleChangeProducersDirs = (event) => {
    setPostDataProducersDirs({
    ...postDataProducersDirs,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
  };

  // CALCULATE FUNCTIONS
  // function to calculate Exec Producers on change
  useEffect(() => {
    const addExecPros = () => {
      setExecProducersTotal((parseFloat(executive_producers_quantity || 0) * 
      parseFloat(executive_producers_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addExecPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [executive_producers_quantity, executive_producers_rate]);

  // function to calculate Producers on change
  useEffect(() => {
    const addPros = () => {
      setProducersTotal((parseFloat(producers_quantity || 0) * 
      parseFloat(producers_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [producers_quantity, producers_rate]);

  // function to calculate Line Producers on change
  useEffect(() => {
    const addLinePros = () => {
      setLineProducersTotal((parseFloat(line_producers_quantity || 0) * 
      parseFloat(line_producers_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addLinePros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [line_producers_quantity, line_producers_rate]);

  // function to calculate  Co Producers on change
  useEffect(() => {
    const addCoPros = () => {
      setCoProducersTotal((parseFloat(co_producers_quantity || 0) * 
      parseFloat(co_producers_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addCoPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [co_producers_quantity, co_producers_rate]);

  // function to calculate  Assoc Producers on change
  useEffect(() => {
    const addAssocPros = () => {
      setAssocProducersTotal((parseFloat(associate_producers_quantity || 0) * 
      parseFloat(associate_producers_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addAssocPros();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [associate_producers_quantity, associate_producers_rate]);

  // function to calculate Directors on change
  useEffect(() => {
    const addDirectors = () => {
      setDirectorsTotal((parseFloat(directors_quantity || 0) * 
      parseFloat(directors_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addDirectors();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [directors_quantity, directors_rate]);

  // function to calculate 2nd Unit Directors on change
  useEffect(() => {
    const addUnit2Dirs = () => {
      setUnit2DirectorsTotal((parseFloat(unit2_directors_quantity || 0) * 
      parseFloat(unit2_directors_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addUnit2Dirs();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [unit2_directors_quantity, unit2_directors_rate]);

  // end calculate functions

  // function to add all ProducersDirs on change
  useEffect(() => {
    const addProducersDirs = () => {
      setProducersDirsTotal(
        parseFloat(execProducersTotal || 0) +
        parseFloat(producersTotal || 0) +
        parseFloat(lineProducersTotal || 0) +
        parseFloat(coProducersTotal || 0) +
        parseFloat(assocProducersTotal || 0) +
        parseFloat(directorsTotal || 0) +
        parseFloat(unit2DirectorsTotal || 0) +
        parseFloat(travel_expenses_producers_dirs || 0) +
        parseFloat(living_expenses_producers_dirs || 0) +
        parseFloat(other_producers_dirs || 0) +
        parseFloat(fringes_taxes_producers_dirs || 0) )
    }
    const timer = setTimeout(() => {
      addProducersDirs();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [execProducersTotal, producersTotal, lineProducersTotal, coProducersTotal,
    assocProducersTotal, directorsTotal, unit2DirectorsTotal,
    travel_expenses_producers_dirs, living_expenses_producers_dirs,
    other_producers_dirs, fringes_taxes_producers_dirs, ]);
    
  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    PRODUCERS & DIRECTORS SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2" >
    <Row className="mt-3" >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>
      PRODUCERS & DIRECTORS</p>
    </Col>
    <Col md={2}>
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
    {/* Executive Producers */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.10</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Executive Producers</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="executive_producers_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="executive_producers_rate" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Producers */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.20</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Producers</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="producers_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="producers_rate" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Line Producers */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.30</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Line Producers</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="line_producers_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="line_producers_rate" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Co Producers */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.40</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Co-Producers</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="co_producers_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="co_producers_rate" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Associate Producers */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.50</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Associate Producers</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="associate_producers_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="associate_producers_rate" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Directors */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.60</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Directors</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_rate" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 2nd Unit Directors */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.70</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>2nd Unit Directors</p>
    </Col>
    {/* Quantity */}
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit2_directors_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit2_directors_rate" 
        className={`${styles.Width95} text-center mb-0`} >
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
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Travel Expenses */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>04.80</p>
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
    <Form.Group controlId="travel_expenses_producers_dirs" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <p className={`${styles.Underline}`}>04.90</p>
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
    <Form.Group controlId="living_expenses_producers_dirs" 
        className={`${styles.Width95} text-center mb-0`} >
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
    <p className={`${styles.Underline}`}>04.91</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Other</p>
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
        className={`${styles.Width95} text-center mb-0`} >
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
    <p className={`${styles.Underline}`}>04.92</p>
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
    <Form.Group controlId="fringes_taxes_producers_dirs" 
        className={`${styles.Width95} text-center mb-0`} >
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
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Producers Dirs Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCERS & DIRECTORS </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="producersDirsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
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
    </div>
  )
}

export default ProducersDirectors