/* Component in the Budget component to edit Wrangling */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Wrangling = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataWrangling, setPostDataWrangling,
           headwranglerTotal, setHeadwranglerTotal,
           otherwranglinglabourTotal, setOtherwranglinglabourTotal,
           wranglerlabourTotal, setWranglerlabourTotal, setShow,
           hewranprepTotal, setHewranprepTotal,
           hewranwrapTotal, setHewranwrapTotal,
           hewranallTotal, setHewranallTotal,
           othwranlabprepTotal, setOtwranlabprepTotal,
           othwranlabwrapTotal, setOtwranlabwrapTotal,
           othwranlaballTotal, setOtwranlaballTotal,
    } = props;

    const {days6th7th_unit_wran, days6th7th_wran,
        overtime_unit_wran, overtime_wran, holidays_unit_wran, 
        holidays_wran, box_rent_unit_wran, box_rent_wran, other_solo_wran,
        he_wran_qty_prep, he_wran_uno_prep, he_wran_una_prep, he_wran_rt_prep,
        he_wran_qty_wrap, he_wran_uno_wrap, he_wran_una_wrap, he_wran_rt_wrap,
        oth_wran_qty_prep, oth_wran_uno_prep, oth_wran_una_prep, oth_wran_rt_prep,
        oth_wran_qty_wrap, oth_wran_uno_wrap, oth_wran_una_wrap, oth_wran_rt_wrap,
        fringes_taxes_wrangling,
        head_wrangler_quantity, head_wrangler_units_number,
        head_wrangler_units_name, head_wrangler_rate,
        other_wrangling_labour_quantity, other_wrangling_labour_units_number,
        other_wrangling_labour_units_name, 
        other_wrangling_labour_rate,} = postDataWrangling;

    // handleChange 
    const handleChange = (event) => {
        setPostDataWrangling({
        ...postDataWrangling,
        [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
        });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataWrangling({
        ...postDataWrangling,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions

    // head wrangler
    // function to calculate head wrangler shoot on change
    useEffect(() => {
        const addWrangl = () => {
        setHeadwranglerTotal((parseFloat(head_wrangler_quantity || 0) * 
        parseFloat(head_wrangler_units_number || 0) * 
        parseFloat(head_wrangler_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWrangl();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [head_wrangler_quantity, head_wrangler_units_number,
    head_wrangler_rate]);

    // function to calculate head wrangler prep on change
    useEffect(() => {
        const addWranprep = () => {
        setHewranprepTotal((parseFloat(he_wran_qty_prep || 0) * 
        parseFloat(he_wran_uno_prep || 0) * 
        parseFloat(he_wran_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWranprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [he_wran_qty_prep, he_wran_uno_prep, he_wran_rt_prep]);

    // function to calculate head wrangler wrap on change
    useEffect(() => {
        const addWranwrap = () => {
        setHewranwrapTotal((parseFloat(he_wran_qty_wrap || 0) * 
        parseFloat(he_wran_uno_wrap || 0) * 
        parseFloat(he_wran_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWranwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [he_wran_qty_wrap, he_wran_uno_wrap, he_wran_rt_wrap]);

    // function to calculate head wrangler all on change
    useEffect(() => {
        const addWranall = () => {
        setHewranallTotal(parseFloat(headwranglerTotal || 0) +
        parseFloat(hewranprepTotal || 0) +
        parseFloat(hewranwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addWranall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [headwranglerTotal, hewranprepTotal, hewranwrapTotal]);

    // other wrangling labour
    // function to calculate other wrangling labour shoot on change
    useEffect(() => {
        const addOthwra = () => {
        setOtherwranglinglabourTotal((parseFloat(other_wrangling_labour_quantity || 0) * 
        parseFloat(other_wrangling_labour_units_number || 0) * 
        parseFloat(other_wrangling_labour_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthwra();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [other_wrangling_labour_quantity, other_wrangling_labour_units_number,
    other_wrangling_labour_rate]);

    // function to calculate other wrangling labour prep on change
    useEffect(() => {
        const addOthwraprep = () => {
        setOtwranlabprepTotal((parseFloat(oth_wran_qty_prep || 0) * 
        parseFloat(oth_wran_uno_prep || 0) * 
        parseFloat(oth_wran_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthwraprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_wran_qty_prep, oth_wran_uno_prep, oth_wran_rt_prep]);

    // function to calculate other wrangling labour wrap on change
    useEffect(() => {
        const addOthwrawrap = () => {
        setOtwranlabwrapTotal((parseFloat(oth_wran_qty_wrap || 0) * 
        parseFloat(oth_wran_uno_wrap || 0) * 
        parseFloat(oth_wran_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthwrawrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_wran_qty_wrap, oth_wran_uno_wrap, oth_wran_rt_wrap]);

    // function to calculate other wrangling labour all on change
    useEffect(() => {
        const addOthwraall = () => {
        setOtwranlaballTotal(parseFloat(otherwranglinglabourTotal || 0) +
        parseFloat(othwranlabprepTotal || 0) +
        parseFloat(othwranlabwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthwraall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [otherwranglinglabourTotal, othwranlabprepTotal, othwranlabwrapTotal]);
    
    // function to add all Wrangling Labour on change
    useEffect(() => {
        const addWraLab = () => {
        setWranglerlabourTotal(
        parseFloat(hewranallTotal || 0) +
        parseFloat(othwranlaballTotal || 0) +
        parseFloat(days6th7th_wran || 0) +
        parseFloat(overtime_wran || 0) +
        parseFloat(holidays_wran || 0) +
        parseFloat(box_rent_wran || 0) +
        parseFloat(other_solo_wran || 0) +
        parseFloat(fringes_taxes_wrangling || 0)
        )
        }
        const timer = setTimeout(() => {
            addWraLab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
        }, [hewranallTotal, othwranlaballTotal, days6th7th_wran, 
            overtime_wran, holidays_wran, box_rent_wran, 
            other_solo_wran, fringes_taxes_wrangling,]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    WRANGLING LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2">
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>12.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>Wrangling Labour</p>
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
    {/* Head Wrangler */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>12.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Head Wrangler</p>
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
    <Form.Group controlId="he_wran_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_wran_qty_prep"
        value={he_wran_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_wran_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_wran_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_wran_uno_prep"
        value={he_wran_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_wran_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_wran_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_wran_una_prep"
        value={he_wran_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.he_wran_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_wran_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_wran_rt_prep"
        value={he_wran_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_wran_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="hewranprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hewranprepTotal"
        value={hewranprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hewranprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1}></Col>
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
    <Form.Group controlId="head_wrangler_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wrangler_quantity"
        value={head_wrangler_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wrangler_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wrangler_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wrangler_units_number"
        value={head_wrangler_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wrangler_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wrangler_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wrangler_units_name"
        value={head_wrangler_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.head_wrangler_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wrangler_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wrangler_rate"
        value={head_wrangler_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wrangler_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headwranglerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headwranglerTotal"
        value={headwranglerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headwranglerTotal?.map((message, idx) => (
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
    <Form.Group controlId="he_wran_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_wran_qty_wrap"
        value={he_wran_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_wran_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_wran_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_wran_uno_wrap"
        value={he_wran_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_wran_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_wran_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_wran_una_wrap"
        value={he_wran_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.he_wran_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_wran_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_wran_rt_wrap"
        value={he_wran_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_wran_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="hewranwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hewranwrapTotal"
        value={hewranwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hewranwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="hewranallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hewranallTotal"
        value={hewranallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hewranallTotal?.map((message, idx) => (
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
    {/* Wranglers */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>12.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Wranglers</p>
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
    <Form.Group controlId="oth_wran_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_wran_qty_prep"
        value={oth_wran_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_wran_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_wran_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_wran_uno_prep"
        value={oth_wran_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_wran_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_wran_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_wran_una_prep"
        value={oth_wran_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.oth_wran_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_wran_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_wran_rt_prep"
        value={oth_wran_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_wran_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othwranlabprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othwranlabprepTotal"
        value={othwranlabprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othwranlabprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1}></Col>
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
    <Form.Group controlId="other_wrangling_labour_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wrangling_labour_quantity"
        value={other_wrangling_labour_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wrangling_labour_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wrangling_labour_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wrangling_labour_units_number"
        value={other_wrangling_labour_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wrangling_labour_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wrangling_labour_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wrangling_labour_units_name"
        value={other_wrangling_labour_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_wrangling_labour_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wrangling_labour_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wrangling_labour_rate"
        value={other_wrangling_labour_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wrangling_labour_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherwranglinglabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherwranglinglabourTotal"
        value={otherwranglinglabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherwranglinglabourTotal?.map((message, idx) => (
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
    <Form.Group controlId="oth_wran_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_wran_qty_wrap"
        value={oth_wran_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_wran_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_wran_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_wran_uno_wrap"
        value={oth_wran_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_wran_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_wran_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_wran_una_wrap"
        value={oth_wran_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.oth_wran_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_wran_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_wran_rt_wrap"
        value={oth_wran_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_wran_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othwranlabwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othwranlabwrapTotal"
        value={othwranlabwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othwranlabwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="othwranlaballTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othwranlaballTotal"
        value={othwranlaballTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othwranlaballTotal?.map((message, idx) => (
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
    {/* Other Wrangling Labour*/}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>12.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other - Add'l Trainers/Handlers/Dailies</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_solo_wran" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_solo_wran"
        value={other_solo_wran}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_solo_wran?.map((message, idx) => (
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
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>12.40</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_wran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_wran"
        value={days6th7th_unit_wran}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_wran?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_wran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_wran"
        value={days6th7th_wran}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_wran?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>12.50</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_wran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_wran"
        value={overtime_unit_wran}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_wran?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_wran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_wran"
        value={overtime_wran}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_wran?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>12.60</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_wran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_wran"
        value={holidays_unit_wran}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_wran?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_wran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_wran"
        value={holidays_wran}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_wran?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>12.70</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_wran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_wran"
        value={box_rent_unit_wran}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_wran?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_wran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_wran"
        value={box_rent_wran}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_wran?.map((message, idx) => (
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
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>12.80</p>
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
    <Form.Group controlId="fringes_taxes_wrangling" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_wrangling"
        value={fringes_taxes_wrangling}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_wrangling?.map((message, idx) => (
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
    {/* Wrangling Total */}
    <Row className="mt-3 pb-2">
    <Col md={1}></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL WRANGLING LABOUR</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="wranglerlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wranglerlabourTotal"
        value={wranglerlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wranglerlabourTotal?.map((message, idx) => (
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

export default Wrangling