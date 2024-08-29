/* Component in the Budget component to edit Cast */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Cast = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataCast, setPostDataCast, setShow,
         principalsTotal, setPrincipalsTotal,
         actorsTotal, setActorsTotal,
         stuntcoordinatorsTotal, setStuntcoordinatorsTotal,
         stuntperformersTotal, setStuntperformersTotal,
         otherperformersTotal, setOtherperformersTotal,
         extrasTotal, setExtrasTotal,
         castTotal, setCastTotal,
         princ2Total, setPrinc2Total,
         princ3Total, setPrinc3Total,
         actor2Total, setActor2Total,
         actor3Total, setActor3Total,
         actor4Total, setActor4Total,
         actor5Total, setActor5Total,
         actor6Total, setActor6Total,
         actor7Total, setActor7Total,
         actorweekTotal, setActorweekTotal,
         actordayTotal, setActordayTotal,
  } = props;
         
  // Cast postData values
  const {
    prin_2_qty, prin_2_uno, prin_2_una, prin_2_rt,
    prin_3_qty, prin_3_uno, prin_3_una, prin_3_rt,
    actors_2_qty, actors_2_uno, actors_2_una, actors_2_rt,
    actors_3_qty, actors_3_uno, actors_3_una, actors_3_rt, 
    actors_4_qty, actors_4_uno, actors_4_una, actors_4_rt,
    actors_5_qty, actors_5_uno, actors_5_una, actors_5_rt,
    actors_6_qty, actors_6_uno, actors_6_una, actors_6_rt,
    actors_7_qty, actors_7_uno, actors_7_una, actors_7_rt,
    actors_week_qty, actors_week_uno, actors_week_una, actors_week_rt,
    actors_day_qty, actors_day_uno, actors_day_una, actors_day_rt,
    // old
    rehersals_cast, rehersals_unit_cast,
    overtime_cast, overtime_unit_cast,
    days6th7th_cast, days6th7th_unit_cast,
    holidays_cast, holidays_unit_cast,
    principals_quantity, principals_units_number,
    principals_units_name, principals_rate,
    actors_quantity, actors_units_number, 
    actors_units_name, actors_rate,
    stuntcoordinators_quantity, stuntcoordinators_units_number,
    stuntcoordinators_units_name, stuntcoordinators_rate,
    stuntperformers_quantity, stuntperformers_units_number,
    stuntperformers_units_name, stuntperformers_rate,
    otherperformers_quantity, otherperformers_units_number,
    otherperformers_units_name, otherperformers_rate,
    extras_quantity, extras_units_number,
    extras_units_name, extras_rate,
    casting_director, extras_casting,
    other_cast, fringes_taxes_cast, rights_payments_cast,
  } = postDataCast;

  // handleChange1 
  const handleChangeCast = (event) => {
    setPostDataCast({
    ...postDataCast,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
  };

  // Cast handleChange Text 
  const handleChangeCastText = (event) => {
    setPostDataCast({
      ...postDataCast,
      [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // function to calculate principals 1 on change
  useEffect(() => {
    const addPrincipals = () => {
      setPrincipalsTotal((parseFloat(principals_units_number || 0) * 
      parseFloat(principals_quantity || 0) * 
      parseFloat(principals_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addPrincipals();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [principals_units_number, principals_quantity, principals_rate]);

  // function to calculate principals 2 on change
  useEffect(() => {
    const addPrincipal2 = () => {
    setPrinc2Total((parseFloat(prin_2_qty || 0) * 
      parseFloat(prin_2_uno || 0) * 
      parseFloat(prin_2_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addPrincipal2();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [prin_2_qty, prin_2_uno, prin_2_rt]);

  // function to calculate principals 3 on change
  useEffect(() => {
    const addPrincipal3 = () => {
    setPrinc3Total((parseFloat(prin_3_qty || 0) * 
      parseFloat(prin_3_uno || 0) * 
      parseFloat(prin_3_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addPrincipal3();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [prin_3_qty, prin_3_uno, prin_3_rt]);

  // function to calculate actors 1 on change
  useEffect(() => {
    const addActors = () => {
      setActorsTotal((parseFloat(actors_units_number || 0) * 
      parseFloat(actors_quantity || 0) * 
      parseFloat(actors_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addActors();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [actors_units_number, actors_quantity, actors_rate]);

  // function to calculate actors 2 on change
  useEffect(() => {
    const addActor2 = () => {
      setActor2Total((parseFloat(actors_2_qty || 0) * 
      parseFloat(actors_2_uno || 0) * 
      parseFloat(actors_2_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addActor2();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [actors_2_qty, actors_2_uno, actors_2_rt]);

  // function to calculate actors 3 on change
  useEffect(() => {
    const addActor3 = () => {
      setActor3Total((parseFloat(actors_3_qty || 0) * 
      parseFloat(actors_3_uno || 0) * 
      parseFloat(actors_3_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addActor3();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [actors_3_qty, actors_3_uno, actors_3_rt]);

  // function to calculate actors 4 on change
  useEffect(() => {
    const addActor4 = () => {
      setActor4Total((parseFloat(actors_4_qty || 0) * 
      parseFloat(actors_4_uno || 0) * 
      parseFloat(actors_4_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addActor4();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [actors_4_qty, actors_4_uno, actors_4_rt]);

  // function to calculate actors 5 on change
  useEffect(() => {
    const addActor5 = () => {
      setActor5Total((parseFloat(actors_5_qty || 0) * 
      parseFloat(actors_5_uno || 0) * 
      parseFloat(actors_5_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addActor5();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [actors_5_qty, actors_5_uno, actors_5_rt]);

  // function to calculate actors 6 on change
  useEffect(() => {
    const addActor6 = () => {
      setActor6Total((parseFloat(actors_6_qty || 0) * 
      parseFloat(actors_6_uno || 0) * 
      parseFloat(actors_6_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addActor6();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [actors_6_qty, actors_6_uno, actors_6_rt]);

  // function to calculate actors 7 on change
  useEffect(() => {
    const addActor7 = () => {
      setActor7Total((parseFloat(actors_7_qty || 0) * 
      parseFloat(actors_7_uno || 0) * 
      parseFloat(actors_7_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addActor7();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [actors_7_qty, actors_7_uno, actors_7_rt]);

  // function to calculate actors week on change
  useEffect(() => {
    const addActorweek = () => {
      setActorweekTotal((parseFloat(actors_week_qty || 0) * 
      parseFloat(actors_week_uno || 0) * 
      parseFloat(actors_week_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addActorweek();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [actors_week_qty, actors_week_uno, actors_week_rt]);

  // function to calculate actors day on change
  useEffect(() => {
    const addActorday = () => {
      setActordayTotal((parseFloat(actors_day_qty || 0) * 
      parseFloat(actors_day_uno || 0) * 
      parseFloat(actors_day_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addActorday();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [actors_day_qty, actors_day_uno, actors_day_rt]);

  // function to calculate stuntcoordinators on change
  useEffect(() => {
    const addStuntcoordinators = () => {
      setStuntcoordinatorsTotal((parseFloat(stuntcoordinators_units_number || 0) * 
      parseFloat(stuntcoordinators_quantity || 0) * 
      parseFloat(stuntcoordinators_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addStuntcoordinators();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [stuntcoordinators_units_number, stuntcoordinators_quantity, stuntcoordinators_rate]);

  // function to calculate stuntperformers on change
  useEffect(() => {
    const addStuntperformers = () => {
      setStuntperformersTotal((parseFloat(stuntperformers_units_number || 0) * 
      parseFloat(stuntperformers_quantity || 0) * 
      parseFloat(stuntperformers_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addStuntperformers();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [stuntperformers_units_number, stuntperformers_quantity, stuntperformers_rate]);

  // function to calculate otherperformers on change
  useEffect(() => {
    const addOtherperformers = () => {
      setOtherperformersTotal((parseFloat(otherperformers_units_number || 0) * 
      parseFloat(otherperformers_quantity || 0) * 
      parseFloat(otherperformers_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addOtherperformers();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [otherperformers_units_number, otherperformers_quantity, otherperformers_rate]);

  // function to calculate extras on change
  useEffect(() => {
    const addExtras = () => {
      setExtrasTotal((parseFloat(extras_units_number || 0) * 
      parseFloat(extras_quantity || 0) * 
      parseFloat(extras_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addExtras();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [extras_units_number, extras_quantity, extras_rate]);

  // function to add all cast on change
  useEffect(() => {
    const addCast = () => {
      setCastTotal(
      parseFloat(principalsTotal || 0) +
      parseFloat(princ2Total || 0) +
      parseFloat(princ3Total || 0) +
      parseFloat(actorsTotal || 0) +
      parseFloat(actor2Total || 0) +
      parseFloat(actor3Total || 0) +
      parseFloat(actor4Total || 0) +
      parseFloat(actor5Total || 0) +
      parseFloat(actor6Total || 0) +
      parseFloat(actor7Total || 0) +
      parseFloat(actorweekTotal || 0) +
      parseFloat(actordayTotal || 0) +
      parseFloat(stuntcoordinatorsTotal || 0) +
      parseFloat(stuntperformersTotal || 0) +
      parseFloat(otherperformersTotal || 0) +
      parseFloat(extrasTotal || 0) +
      parseFloat(casting_director || 0) +
      parseFloat(extras_casting || 0) +
      parseFloat(other_cast || 0) +
      parseFloat(rights_payments_cast || 0) +
      parseFloat(rehersals_cast || 0) +
      parseFloat(overtime_cast || 0) +
      parseFloat(days6th7th_cast || 0) +
      parseFloat(holidays_cast || 0) +
      parseFloat(fringes_taxes_cast || 0) 
      )
    }
    const timer = setTimeout(() => {
      addCast();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [principalsTotal, actorsTotal, stuntcoordinatorsTotal,
    stuntperformersTotal, otherperformersTotal, extrasTotal,
    casting_director, extras_casting, other_cast,
    rights_payments_cast, fringes_taxes_cast, rehersals_cast, 
    overtime_cast, days6th7th_cast, holidays_cast,
    princ2Total, princ3Total, actor2Total, actor3Total,
    actor4Total, actor5Total, actor6Total, actor7Total,
    actorweekTotal, actordayTotal,
  ]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    CAST
    </p>
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>CAST</p>
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
    {/* Principals 1 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.10</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Principals #1 - wks/rt #1</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_quantity"
        value={principals_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.principals_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_units_number"
        value={principals_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.principals_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_units_name"
        value={principals_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.principals_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="principals_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principals_rate"
        value={principals_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.principals_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="principalsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="principalsTotal"
        value={principalsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.principalsTotal?.map((message, idx) => (
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
    {/* Principals 2 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.20</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Principals #2 - wks/rt #2</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prin_2_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prin_2_qty"
        value={prin_2_qty}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.prin_2_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prin_2_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prin_2_uno"
        value={prin_2_uno}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.prin_2_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prin_2_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prin_2_una"
        value={prin_2_una}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.prin_2_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prin_2_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prin_2_rt"
        value={prin_2_rt}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.prin_2_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="princ2Total" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="princ2Total"
        value={princ2Total}
        readOnly
            />
    </Form.Group>
    {errors?.princ2Total?.map((message, idx) => (
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
    {/* Principals 3 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.30</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Principals #3 - wks/rt #3</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prin_3_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prin_3_qty"
        value={prin_3_qty}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.prin_3_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prin_3_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prin_3_uno"
        value={prin_3_uno}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.prin_3_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prin_3_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prin_3_una"
        value={prin_3_una}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.prin_3_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prin_3_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prin_3_rt"
        value={prin_3_rt}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.prin_3_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="princ3Total" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="princ3Total"
        value={princ3Total}
        readOnly
            />
    </Form.Group>
    {errors?.princ3Total?.map((message, idx) => (
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
    {/* Actors 1 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.40</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Actors #1 - wks/rt #1</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_quantity"
        value={actors_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_units_number"
        value={actors_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_units_name"
        value={actors_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_rate"
        value={actors_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actorsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actorsTotal"
        value={actorsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.actorsTotal?.map((message, idx) => (
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
    {/* Actors 2 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.50</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Actors #2 - wks/rt #2</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_2_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_2_qty"
        value={actors_2_qty}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_2_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_2_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_2_uno"
        value={actors_2_uno}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_2_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_2_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_2_una"
        value={actors_2_una}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_2_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_2_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_2_rt"
        value={actors_2_rt}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_2_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actor2Total" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actor2Total"
        value={actor2Total}
        readOnly
            />
    </Form.Group>
    {errors?.actor2Total?.map((message, idx) => (
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
    {/* Actors 3 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.60</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Actors #3 - wks/rt #3</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_3_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_3_qty"
        value={actors_3_qty}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_3_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_3_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_3_uno"
        value={actors_3_uno}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_3_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_3_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_3_una"
        value={actors_3_una}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_3_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_3_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_3_rt"
        value={actors_3_rt}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_3_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actor3Total" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actor3Total"
        value={actor3Total}
        readOnly
            />
    </Form.Group>
    {errors?.actor3Total?.map((message, idx) => (
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
    {/* Actors 4 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.70</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Actors #4 - wks/rt #4</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_4_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_4_qty"
        value={actors_4_qty}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_4_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_4_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_4_uno"
        value={actors_4_uno}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_4_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_4_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_4_una"
        value={actors_4_una}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_4_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_4_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_4_rt"
        value={actors_4_rt}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_4_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actor4Total" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actor4Total"
        value={actor4Total}
        readOnly
            />
    </Form.Group>
    {errors?.actor4Total?.map((message, idx) => (
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
    {/* Actors 5 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.80</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Actors #5 - wks/rt #5</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_5_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_5_qty"
        value={actors_5_qty}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_5_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_5_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_5_uno"
        value={actors_5_uno}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_5_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_5_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_5_una"
        value={actors_5_una}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_5_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_5_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_5_rt"
        value={actors_5_rt}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_5_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actor5Total" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actor5Total"
        value={actor5Total}
        readOnly
            />
    </Form.Group>
    {errors?.actor5Total?.map((message, idx) => (
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
    {/* Actors 6 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.90</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Actors #6 - wks/rt #6</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_6_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_6_qty"
        value={actors_6_qty}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_6_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_6_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_6_uno"
        value={actors_6_uno}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_6_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_6_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_6_una"
        value={actors_6_una}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_6_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_6_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_6_rt"
        value={actors_6_rt}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_6_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actor6Total" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actor6Total"
        value={actor6Total}
        readOnly
            />
    </Form.Group>
    {errors?.actor6Total?.map((message, idx) => (
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
    {/* Actors 7 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.91</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Actors #7 - wks/rt #7</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_7_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_7_qty"
        value={actors_7_qty}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_7_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_7_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_7_uno"
        value={actors_7_uno}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_7_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_7_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_7_una"
        value={actors_7_una}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_7_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_7_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_7_rt"
        value={actors_7_rt}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_7_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actor7Total" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actor7Total"
        value={actor7Total}
        readOnly
            />
    </Form.Group>
    {errors?.actor7Total?.map((message, idx) => (
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
    {/* Actors 1 week */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.92</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Actors - 1 Week</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_week_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_week_qty"
        value={actors_week_qty}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_week_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_week_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_week_uno"
        value={actors_week_uno}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_week_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_week_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_week_una"
        value={actors_week_una}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_week_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_week_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_week_rt"
        value={actors_week_rt}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_week_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actorweekTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actorweekTotal"
        value={actorweekTotal}
        readOnly
            />
    </Form.Group>
    {errors?.actorweekTotal?.map((message, idx) => (
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
    {/* Actors 1 day */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.93</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Actors - 1 Day</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_day_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_day_qty"
        value={actors_day_qty}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_day_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_day_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_day_uno"
        value={actors_day_uno}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_day_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_day_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_day_una"
        value={actors_day_una}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.actors_day_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="actors_day_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actors_day_rt"
        value={actors_day_rt}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.actors_day_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="actordayTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="actordayTotal"
        value={actordayTotal}
        readOnly
            />
    </Form.Group>
    {errors?.actordayTotal?.map((message, idx) => (
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
    {/* Stunt Coordinators */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.94</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Stunt Coordinators</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_quantity"
        value={stuntcoordinators_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntcoordinators_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_units_number"
        value={stuntcoordinators_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntcoordinators_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_units_name"
        value={stuntcoordinators_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.stuntcoordinators_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntcoordinators_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinators_rate"
        value={stuntcoordinators_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntcoordinators_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stuntcoordinatorsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntcoordinatorsTotal"
        value={stuntcoordinatorsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stuntcoordinatorsTotal?.map((message, idx) => (
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
    {/* Stunt Performers */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.95</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Stunt Performers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_quantity"
        value={stuntperformers_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntperformers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_units_number"
        value={stuntperformers_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntperformers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_units_name"
        value={stuntperformers_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.stuntperformers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stuntperformers_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformers_rate"
        value={stuntperformers_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.stuntperformers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stuntperformersTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stuntperformersTotal"
        value={stuntperformersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stuntperformersTotal?.map((message, idx) => (
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
    {/* Other Performers */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.96</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Other Performers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_quantity"
        value={otherperformers_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.otherperformers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_units_number"
        value={otherperformers_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.otherperformers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_units_name"
        value={otherperformers_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.otherperformers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="otherperformers_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformers_rate"
        value={otherperformers_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.otherperformers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherperformersTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherperformersTotal"
        value={otherperformersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherperformersTotal?.map((message, idx) => (
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
    {/* Extras */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.97</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Extras</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_quantity"
        value={extras_quantity}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_units_number"
        value={extras_units_number}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_units_name"
        value={extras_units_name}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.extras_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="extras_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_rate"
        value={extras_rate}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="extrasTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extrasTotal"
        value={extrasTotal}
        readOnly
            />
    </Form.Group>
    {errors?.extrasTotal?.map((message, idx) => (
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
    {/* Casting Director */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.98</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Casting Director</p>
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
    <Form.Group controlId="casting_director" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="casting_director"
        value={casting_director}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.casting_director?.map((message, idx) => (
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
    {/* Extras Casting */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.99</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Extras Casting</p>
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
    <Form.Group controlId="extras_casting" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="extras_casting"
        value={extras_casting}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.extras_casting?.map((message, idx) => (
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
    {/* Rehersals */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.991</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Rehersals</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="rehersals_unit_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="rehersals_unit_cast"
        value={rehersals_unit_cast}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.rehersals_unit_cast?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="rehersals_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="rehersals_cast"
        value={rehersals_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.rehersals_cast?.map((message, idx) => (
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
    {/* 6th/7th Days */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.992</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_cast"
        value={days6th7th_unit_cast}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_cast?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_cast"
        value={days6th7th_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.days6th7th_cast?.map((message, idx) => (
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
    {/* Overtime */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.993</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_cast"
        value={overtime_unit_cast}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.overtime_unit_cast?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_cast"
        value={overtime_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.overtime_cast?.map((message, idx) => (
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
    {/* Holidays */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.994</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_cast"
        value={holidays_unit_cast}
        onChange={handleChangeCastText}
            />
    </Form.Group>
    {errors?.holidays_unit_cast?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_cast"
        value={holidays_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.holidays_cast?.map((message, idx) => (
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
    {/* Rights Payments - Cast */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.995</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Rights Payments - Cast</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} className="text-center" >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="rights_payments_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="rights_payments_cast"
        value={rights_payments_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.rights_payments_cast?.map((message, idx) => (
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
    {/* Other */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.996</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Other</p>
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
    <Form.Group controlId="other_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cast"
        value={other_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.other_cast?.map((message, idx) => (
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
    {/* Fringes Taxes - Cast */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>06.997</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Fringes & Taxes</p>
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
    <Form.Group controlId="fringes_taxes_cast" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_cast"
        value={fringes_taxes_cast}
        onChange={handleChangeCast}
            />
    </Form.Group>
    {errors?.fringes_taxes_cast?.map((message, idx) => (
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
    {/* Cast Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CAST</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="castTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="castTotal"
        value={castTotal}
        readOnly
            />
    </Form.Group>
    {errors?.castTotal?.map((message, idx) => (
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

export default Cast