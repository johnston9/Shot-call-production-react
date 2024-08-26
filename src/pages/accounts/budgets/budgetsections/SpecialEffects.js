/* Component in the Budget component to edit FX */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const SpecialEffects = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataSpecialEffects, setPostDataSpecialEffects,
        fxsupervisorTotal, setFxsupervisorTotal,
        assistfxTotal, setAssistfxTotal,
        otherfxlabourTotal, setOtherfxlabourTotal,
        fxlabourTotal, setFxlabourTotal, setShow,
        fxsupprepTotal, setFxsupprepTotal,
        fxsupwrapTotal, setFxsupwrapTotal,
        fxsupallTotal, setFxsupallTotal,
        assfxprepTotal, setAssfxprepTotal,
        assfxwrapTotal, setAssfxwrapTotal,
        assfxallTotal, setAssfxallTotal,
        othfxlabprepTotal, setOthfxlabprepTotal,
        othfxlabwrapTotal, setOthfxlabwrapTotal,
        othfxlaballTotal, setOthfxlaballTotal,
    } = props;
    
    const {days6th7th_unit_fx, days6th7th_fx, overtime_unit_fx, overtime_fx,
        holidays_unit_fx,  holidays_fx, box_rent_unit_fx, box_rent_fx, other_solo_fx,
        fx_sup_qty_prep, fx_sup_uno_prep, fx_sup_una_prep, fx_sup_rt_prep,
        fx_sup_qty_wrap, fx_sup_uno_wrap, fx_sup_una_wrap, fx_sup_rt_wrap,
        ass_fx_qty_prep, ass_fx_uno_prep, ass_fx_una_prep, ass_fx_rt_prep,
        ass_fx_qty_wrap, ass_fx_uno_wrap, ass_fx_una_wrap, ass_fx_rt_wrap,
        ot_fx_l_qty_prep, ot_fx_l_uno_prep, ot_fx_l_una_prep, ot_fx_l_rt_prep,
        ot_fx_l_qty_wrap, ot_fx_l_uno_wrap, ot_fx_l_una_wrap, ot_fx_l_rt_wrap,
        fx_supervisor_quantity, fx_supervisor_units_number,
        fx_supervisor_units_name, fx_supervisor_rate,
        assist_fx_quantity, assist_fx_units_number,
        assist_fx_units_name, assist_fx_rate,
        other_fx_labour_quantity, other_fx_labour_units_number,
        other_fx_labour_units_name, other_fx_labour_rate,
        fringes_taxes_fx,} = postDataSpecialEffects;
    
    // handleChange 
    const handleChange = (event) => {
        setPostDataSpecialEffects({
        ...postDataSpecialEffects,
        [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
        });
    };

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataSpecialEffects({
        ...postDataSpecialEffects,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions

    // fx supervisor
    // function to calculate fx supervisor shoot on change
    useEffect(() => {
        const addSpeeff = () => {
        setFxsupervisorTotal((parseFloat(fx_supervisor_quantity || 0) * 
        parseFloat(fx_supervisor_units_number || 0) * 
        parseFloat(fx_supervisor_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSpeeff();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [fx_supervisor_quantity, fx_supervisor_units_number,
    fx_supervisor_rate]);

    // function to calculate fx supervisor prep on change
    useEffect(() => {
        const addSpeeffprep = () => {
        setFxsupprepTotal((parseFloat(fx_sup_qty_prep || 0) * 
        parseFloat(fx_sup_uno_prep || 0) * 
        parseFloat(fx_sup_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSpeeffprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [fx_sup_qty_prep, fx_sup_uno_prep, fx_sup_rt_prep]);

    // function to calculate fx supervisor wrap on change
    useEffect(() => {
        const addSpeeffwrap = () => {
        setFxsupwrapTotal((parseFloat(fx_sup_qty_wrap || 0) * 
        parseFloat(fx_sup_uno_wrap || 0) * 
        parseFloat(fx_sup_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSpeeffwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [fx_sup_qty_wrap, fx_sup_uno_wrap, fx_sup_rt_wrap]);

    // function to calculate fx supervisor all on change
    useEffect(() => {
        const addSpeeffall = () => {
        setFxsupallTotal(parseFloat(fxsupervisorTotal || 0) +
        parseFloat(fxsupprepTotal || 0) +
        parseFloat(fxsupwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addSpeeffall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [fxsupervisorTotal, fxsupprepTotal, fxsupwrapTotal]);
    
    // assistant fx
    // function to calculate assistant fx shoot on change
    useEffect(() => {
        const addAssfx = () => {
        setAssistfxTotal((parseFloat(assist_fx_quantity || 0) * 
        parseFloat(assist_fx_units_number || 0) * 
        parseFloat(assist_fx_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAssfx();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [assist_fx_quantity, assist_fx_units_number,
    assist_fx_rate]);

    // function to calculate assistant fx prep on change
    useEffect(() => {
        const addAssfxprep = () => {
        setAssfxprepTotal((parseFloat(ass_fx_qty_prep || 0) * 
        parseFloat(ass_fx_uno_prep || 0) * 
        parseFloat(ass_fx_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAssfxprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ass_fx_qty_prep, ass_fx_uno_prep, ass_fx_rt_prep]);

    // function to calculate assistant fx wrap on change
    useEffect(() => {
        const addAssfxwrap = () => {
        setAssfxwrapTotal((parseFloat(ass_fx_qty_wrap || 0) * 
        parseFloat(ass_fx_uno_wrap || 0) * 
        parseFloat(ass_fx_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAssfxwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ass_fx_qty_wrap, ass_fx_uno_wrap, ass_fx_rt_wrap]);

    // function to calculate assistant fx all on change
    useEffect(() => {
        const addAssfxall = () => {
        setAssfxallTotal(parseFloat(assistfxTotal || 0) +
        parseFloat(assfxprepTotal || 0) +
        parseFloat(assfxwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addAssfxall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [assistfxTotal, assfxprepTotal, assfxwrapTotal]);
    
    // other fx labour
    // function to calculate other fx labour shoot on change
    useEffect(() => {
        const addOthfx = () => {
        setOtherfxlabourTotal((parseFloat(other_fx_labour_quantity || 0) * 
        parseFloat(other_fx_labour_units_number || 0) * 
        parseFloat(other_fx_labour_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthfx();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [other_fx_labour_quantity, other_fx_labour_units_number,
    other_fx_labour_rate]);

    // function to calculate other fx labour prep on change
    useEffect(() => {
        const addOthfxprep = () => {
        setOthfxlabprepTotal((parseFloat(ot_fx_l_qty_prep || 0) * 
        parseFloat(ot_fx_l_uno_prep || 0) * 
        parseFloat(ot_fx_l_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthfxprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ot_fx_l_qty_prep, ot_fx_l_uno_prep, ot_fx_l_rt_prep]);

    // function to calculate other fx labour wrap on change
    useEffect(() => {
        const addOthfxwrap = () => {
        setOthfxlabwrapTotal((parseFloat(ot_fx_l_qty_wrap || 0) * 
        parseFloat(ot_fx_l_uno_wrap || 0) * 
        parseFloat(ot_fx_l_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthfxwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ot_fx_l_qty_wrap, ot_fx_l_uno_wrap, ot_fx_l_rt_wrap]);

    // function to calculate all other fx labour on change
    useEffect(() => {
        const addOthfxall = () => {
        setOthfxlaballTotal(parseFloat(otherfxlabourTotal || 0) +
        parseFloat(othfxlabprepTotal || 0) +
        parseFloat(othfxlabwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthfxall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [otherfxlabourTotal, othfxlabprepTotal, othfxlabwrapTotal]);

    // function to add all FX Labour on change
    useEffect(() => {
        const addFxlab = () => {
        setFxlabourTotal(
        parseFloat(fxsupallTotal || 0) +
        parseFloat(assfxallTotal || 0) +
        parseFloat(othfxlaballTotal || 0) +
        parseFloat(days6th7th_fx || 0) +
        parseFloat(overtime_fx || 0) +
        parseFloat(holidays_fx || 0) +
        parseFloat(box_rent_fx || 0) +
        parseFloat(other_solo_fx || 0) +
        parseFloat(fringes_taxes_fx || 0)
        )
        }
        const timer = setTimeout(() => {
            addFxlab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
        }, [fxsupallTotal, assfxallTotal, othfxlaballTotal,
            days6th7th_fx, overtime_fx, holidays_fx, box_rent_fx,
            other_solo_fx, fringes_taxes_fx]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    SPECIAL EFFECTS LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2">
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>SPECIAL EFFECT LABOUR</p>
    </Col>
    <Col md={1}>
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
    {/* FX Supervisor */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>FX Supervisor</p>
    </Col>
    </Row>
    {/* Prep */} 
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_sup_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_sup_qty_prep"
        value={fx_sup_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_sup_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_sup_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_sup_uno_prep"
        value={fx_sup_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_sup_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_sup_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_sup_una_prep"
        value={fx_sup_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.fx_sup_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_sup_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_sup_rt_prep"
        value={fx_sup_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_sup_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="fxsupprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fxsupprepTotal"
        value={fxsupprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.fxsupprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1}></Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_supervisor_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_supervisor_quantity"
        value={fx_supervisor_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_supervisor_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_supervisor_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_supervisor_units_number"
        value={fx_supervisor_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_supervisor_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_supervisor_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_supervisor_units_name"
        value={fx_supervisor_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.fx_supervisor_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_supervisor_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_supervisor_rate"
        value={fx_supervisor_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_supervisor_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="fxsupervisorTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fxsupervisorTotal"
        value={fxsupervisorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.fxsupervisorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_sup_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_sup_qty_wrap"
        value={fx_sup_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_sup_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_sup_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_sup_uno_wrap"
        value={fx_sup_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_sup_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_sup_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_sup_una_wrap"
        value={fx_sup_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.fx_sup_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="fx_sup_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fx_sup_rt_wrap"
        value={fx_sup_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fx_sup_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="fxsupwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fxsupwrapTotal"
        value={fxsupwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.fxsupwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fxsupallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fxsupallTotal"
        value={fxsupallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.fxsupallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* FX Assistant */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>FX Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_fx_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_fx_qty_prep"
        value={ass_fx_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ass_fx_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_fx_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_fx_uno_prep"
        value={ass_fx_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ass_fx_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_fx_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_fx_una_prep"
        value={ass_fx_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ass_fx_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_fx_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_fx_rt_prep"
        value={ass_fx_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ass_fx_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assfxprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assfxprepTotal"
        value={assfxprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assfxprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_fx_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_fx_quantity"
        value={assist_fx_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_fx_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_fx_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_fx_units_number"
        value={assist_fx_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_fx_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_fx_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_fx_units_name"
        value={assist_fx_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.assist_fx_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_fx_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_fx_rate"
        value={assist_fx_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_fx_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistfxTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistfxTotal"
        value={assistfxTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistfxTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_fx_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_fx_qty_wrap"
        value={ass_fx_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ass_fx_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_fx_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_fx_uno_wrap"
        value={ass_fx_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ass_fx_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_fx_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_fx_una_wrap"
        value={ass_fx_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ass_fx_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_fx_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_fx_rt_wrap"
        value={ass_fx_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ass_fx_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assfxwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assfxwrapTotal"
        value={assfxwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assfxwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="assfxallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assfxallTotal"
        value={assfxallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assfxallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Other FX Labour */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.30</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Add'l FX Labour</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_fx_l_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_fx_l_qty_prep"
        value={ot_fx_l_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_fx_l_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_fx_l_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_fx_l_uno_prep"
        value={ot_fx_l_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_fx_l_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_fx_l_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_fx_l_una_prep"
        value={ot_fx_l_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ot_fx_l_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_fx_l_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_fx_l_rt_prep"
        value={ot_fx_l_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_fx_l_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othfxlabprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othfxlabprepTotal"
        value={othfxlabprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othfxlabprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_fx_labour_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_fx_labour_quantity"
        value={other_fx_labour_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_fx_labour_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_fx_labour_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_fx_labour_units_number"
        value={other_fx_labour_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_fx_labour_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_fx_labour_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_fx_labour_units_name"
        value={other_fx_labour_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_fx_labour_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_fx_labour_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_fx_labour_rate"
        value={other_fx_labour_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_fx_labour_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherfxlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherfxlabourTotal"
        value={otherfxlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherfxlabourTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_fx_l_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_fx_l_qty_wrap"
        value={ot_fx_l_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_fx_l_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_fx_l_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_fx_l_uno_wrap"
        value={ot_fx_l_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_fx_l_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_fx_l_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_fx_l_una_wrap"
        value={ot_fx_l_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ot_fx_l_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_fx_l_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_fx_l_rt_wrap"
        value={ot_fx_l_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_fx_l_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othfxlabwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othfxlabwrapTotal"
        value={othfxlabwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othfxlabwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="othfxlaballTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othfxlaballTotal"
        value={othfxlaballTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othfxlaballTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.40</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_fx" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_fx"
        value={days6th7th_unit_fx}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_fx?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_fx" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_fx"
        value={days6th7th_fx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_fx?.map((message, idx) => (
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
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.50</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_fx" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_fx"
        value={overtime_unit_fx}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_fx?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_fx" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_fx"
        value={overtime_fx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_fx?.map((message, idx) => (
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
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.60</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_fx" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_fx"
        value={holidays_unit_fx}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_fx?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_fx" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_fx"
        value={holidays_fx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_fx?.map((message, idx) => (
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
    {/* Box Rentals */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.70</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_fx" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_fx"
        value={box_rent_unit_fx}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_fx?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_fx" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_fx"
        value={box_rent_fx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_fx?.map((message, idx) => (
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
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.80</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_solo_fx" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_solo_fx"
        value={other_solo_fx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_solo_fx?.map((message, idx) => (
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
    {/* Fringes and Taxes */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>13.90</p>
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
    <Form.Group controlId="fringes_taxes_fx" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_fx"
        value={fringes_taxes_fx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_fx?.map((message, idx) => (
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
    {/* FX Total */}
    <Row className="mt-3 pb-2">
    <Col md={1}></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL FX  LABOUR</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fxlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fxlabourTotal"
        value={fxlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.fxlabourTotal?.map((message, idx) => (
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

export default SpecialEffects