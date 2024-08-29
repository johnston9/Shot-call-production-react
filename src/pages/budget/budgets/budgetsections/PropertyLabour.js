/* Component in the Budget component to edit Property */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const PropertyLabour = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataProperty, setPostDataProperty,
           propertymasterTotal, setPropertymasterTotal,
           assistpropertymasterTotal, setAssistpropertymasterTotal,
           onsetpropspersonTotal, setOnsetpropspersonTotal,
           propertybuyerTotal, setPropertybuyerTotal,
           armorerTotal, setArmorerTotal, setShow,
           propertylabourTotal, setPropertylabourTotal,
           propmasprepTotal, setPropmasprepTotal,
           propmaswrapTotal, setPropmaswrapTotal,
           propmasallTotal, setPropmasallTotal,
           aspropmaprepTotal, setAspropmaprepTotal,
           aspropmawrapTotal, setAspropmawrapTotal,
           aspropmaallTotal, setAspropmaallTotal,
           onsetpropprepTotal, setOnsetpropprepTotal,
           onsetpropwrapTotal, setOnsetpropwrapTotal,
           onsetpropallTotal, setOnsetpropallTotal,
           propbuyprepTotal, setPropbuyprepTotal,
           propbuywrapTotal, setPropbuywrapTotal,
           propbuyallTotal, setPropbuyallTotal,
           armorprepTotal, setArmorprepTotal,
           armorwrapTotal, setArmorwrapTotal,
           armorallTotal, setArmorallTotal,
    } = props;
    
    const {days6th7th_unit_prop, days6th7th_prop, 
        overtime_unit_prop, overtime_prop,
        holidays_unit_prop, holidays_prop, box_rent_unit_prop, box_rent_prop,
        pro_mas_qty_prep, pro_mas_uno_prep, pro_mas_una_prep, pro_mas_rt_prep,
        pro_mas_qty_wrap, pro_mas_uno_wrap, pro_mas_una_wrap, pro_mas_rt_wrap,
        as_pro_ma_qty_prep, as_pro_ma_uno_prep, as_pro_ma_una_prep, as_pro_ma_rt_prep,
        as_pro_ma_qty_wrap, as_pro_ma_uno_wrap, as_pro_ma_una_wrap, as_pro_ma_rt_wrap,
        on_set_prop_qty_prep, on_set_prop_uno_prep, 
        on_set_prop_una_prep, on_set_prop_rt_prep,
        on_set_prop_qty_wrap, on_set_prop_uno_wrap, 
        on_set_prop_una_wrap, on_set_prop_rt_wrap, 
        prop_buy_qty_prep, prop_buy_uno_prep, prop_buy_una_prep, prop_buy_rt_prep,
        prop_buy_qty_wrap, prop_buy_uno_wrap, prop_buy_una_wrap, prop_buy_rt_wrap,
        armor_qty_prep, armor_uno_prep, armor_una_prep, armor_rt_prep,
        armor_qty_wrap, armor_uno_wrap, armor_una_wrap, armor_rt_wrap,
        fringes_taxes_property,
        property_master_quantity, property_master_units_number,
        property_master_units_name, property_master_rate,
        assist_property_master_quantity, assist_property_master_units_number,
        assist_property_master_units_name, assist_property_master_rate,
        on_set_props_person_quantity, on_set_props_person_units_number,
        on_set_props_person_units_name, on_set_props_person_rate,
        property_buyer_quantity, property_buyer_units_number,
        property_buyer_units_name, property_buyer_rate,
        armorer_quantity, armorer_units_number,
        armorer_units_name, armorer_rate,
        other_property,} = postDataProperty;
    
    // handleChange 
    const handleChange = (event) => {
        setPostDataProperty({
        ...postDataProperty,
        [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
        });
    };

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataProperty({
        ...postDataProperty,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions

    // property master
    // function to calculate property master shoot on change
    useEffect(() => {
        const addPromas = () => {
        setPropertymasterTotal((parseFloat(property_master_quantity || 0) * 
        parseFloat(property_master_units_number || 0) * 
        parseFloat(property_master_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addPromas();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [property_master_quantity, property_master_units_number,
    property_master_rate]);

    // function to calculate property master prep on change
    useEffect(() => {
        const addPromasprep = () => {
        setPropmasprepTotal((parseFloat(pro_mas_qty_prep || 0) * 
        parseFloat(pro_mas_uno_prep || 0) * 
        parseFloat(pro_mas_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addPromasprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [pro_mas_qty_prep, pro_mas_uno_prep, pro_mas_rt_prep]);

    // function to calculate property master wrap on change
    useEffect(() => {
        const addPromaswrap = () => {
        setPropmaswrapTotal((parseFloat(pro_mas_qty_wrap || 0) * 
        parseFloat(pro_mas_uno_wrap || 0) * 
        parseFloat(pro_mas_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addPromaswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [pro_mas_qty_wrap, pro_mas_uno_wrap, pro_mas_rt_wrap]);

    // function to calculate property master all on change
    useEffect(() => {
        const addPromasall = () => {
        setPropmasallTotal(parseFloat(propertymasterTotal || 0) +
        parseFloat(propmasprepTotal || 0) +
        parseFloat(propmaswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addPromasall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [propertymasterTotal, propmasprepTotal, propmaswrapTotal]);
    
    // assistant property master
    // function to calculate assistant property master shoot on change
    useEffect(() => {
        const addAssmas = () => {
        setAssistpropertymasterTotal((parseFloat(assist_property_master_quantity || 0) * 
        parseFloat(assist_property_master_units_number || 0) * 
        parseFloat(assist_property_master_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAssmas();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [assist_property_master_quantity, assist_property_master_units_number,
    assist_property_master_rate]);

    // function to calculate assistant property master prep on change
    useEffect(() => {
        const addAssmasprep = () => {
        setAspropmaprepTotal((parseFloat(as_pro_ma_qty_prep || 0) * 
        parseFloat(as_pro_ma_uno_prep || 0) * 
        parseFloat(as_pro_ma_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAssmasprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [as_pro_ma_qty_prep, as_pro_ma_uno_prep, as_pro_ma_rt_prep]);

    // function to calculate assistant property master wrap on change
    useEffect(() => {
        const addAssmaswrap = () => {
        setAspropmawrapTotal((parseFloat(as_pro_ma_qty_wrap || 0) * 
        parseFloat(as_pro_ma_uno_wrap || 0) * 
        parseFloat(as_pro_ma_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAssmaswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [as_pro_ma_qty_wrap, as_pro_ma_uno_wrap, as_pro_ma_rt_wrap]);

    // function to calculate assistant property master all on change
    useEffect(() => {
        const addAssmasall = () => {
        setAspropmaallTotal(parseFloat(assistpropertymasterTotal || 0) +
        parseFloat(aspropmaprepTotal || 0) +
        parseFloat(aspropmawrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addAssmasall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [assistpropertymasterTotal, aspropmaprepTotal, aspropmawrapTotal]);
    
    // on set props person
    // function to calculate on set props person shoot on change
    useEffect(() => {
        const addOnsepr = () => {
        setOnsetpropspersonTotal((parseFloat(on_set_props_person_quantity || 0) * 
        parseFloat(on_set_props_person_units_number || 0) * 
        parseFloat(on_set_props_person_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOnsepr();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [on_set_props_person_quantity, on_set_props_person_units_number,
    on_set_props_person_rate]);

    // function to calculate on set props person prep on change
    useEffect(() => {
        const addOnseprprep = () => {
        setOnsetpropprepTotal((parseFloat(on_set_prop_qty_prep || 0) * 
        parseFloat(on_set_prop_uno_prep || 0) * 
        parseFloat(on_set_prop_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOnseprprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [on_set_prop_qty_prep, on_set_prop_uno_prep, on_set_prop_rt_prep]);

    // function to calculate on set props person wrap on change
    useEffect(() => {
        const addOnseprwrap = () => {
        setOnsetpropwrapTotal((parseFloat(on_set_prop_qty_wrap || 0) * 
        parseFloat(on_set_prop_uno_wrap || 0) * 
        parseFloat(on_set_prop_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOnseprwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [on_set_prop_qty_wrap, on_set_prop_uno_wrap, on_set_prop_rt_wrap]);

    // function to calculate on set props person all on change
    useEffect(() => {
        const addOnseprall = () => {
        setOnsetpropallTotal(parseFloat(onsetpropspersonTotal || 0) +
        parseFloat(onsetpropprepTotal || 0) +
        parseFloat(onsetpropwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOnseprall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [onsetpropspersonTotal, onsetpropprepTotal, onsetpropwrapTotal]);
    
    // property buyer
    // function to calculate property buyer shoot on change
    useEffect(() => {
        const addPrbuye = () => {
        setPropertybuyerTotal((parseFloat(property_buyer_quantity || 0) * 
        parseFloat(property_buyer_units_number || 0) * 
        parseFloat(property_buyer_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addPrbuye();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [property_buyer_quantity, property_buyer_units_number,
    property_buyer_rate]);

    // function to calculate property buyer prep on change
    useEffect(() => {
        const addPrbuyeprep = () => {
        setPropbuyprepTotal((parseFloat(prop_buy_qty_prep || 0) * 
        parseFloat(prop_buy_uno_prep || 0) * 
        parseFloat(prop_buy_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addPrbuyeprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [prop_buy_qty_prep, prop_buy_uno_prep, prop_buy_rt_prep]);

    // function to calculate property buyer wrap on change
    useEffect(() => {
        const addPrbuyewrap = () => {
        setPropbuywrapTotal((parseFloat(prop_buy_qty_wrap || 0) * 
        parseFloat(prop_buy_uno_wrap || 0) * 
        parseFloat(prop_buy_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addPrbuyewrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [prop_buy_qty_wrap, prop_buy_uno_wrap, prop_buy_rt_wrap]);

    // function to calculate property buyer all on change
    useEffect(() => {
        const addPrbuyeall = () => {
        setPropbuyallTotal(parseFloat(propertybuyerTotal || 0) +
        parseFloat(propbuyprepTotal || 0) +
        parseFloat(propbuywrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addPrbuyeall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [propertybuyerTotal, propbuyprepTotal, propbuywrapTotal]);
    
    // armorer start here
    // function to calculate armorer shoot on change
    useEffect(() => {
        const addArmour = () => {
        setArmorerTotal((parseFloat(armorer_quantity || 0) * 
        parseFloat(armorer_units_number || 0) * 
        parseFloat(armorer_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addArmour();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [armorer_quantity, armorer_units_number,
    armorer_rate]);

    // function to calculate armorer prep on change
    useEffect(() => {
        const addArmourprep = () => {
        setArmorprepTotal((parseFloat(armor_qty_prep || 0) * 
        parseFloat(armor_uno_prep || 0) * 
        parseFloat(armor_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addArmourprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [armor_qty_prep, armor_uno_prep, armor_rt_prep]);

    // function to calculate armorer wrap on change
    useEffect(() => {
        const addArmourwrap = () => {
        setArmorwrapTotal((parseFloat(armor_qty_wrap || 0) * 
        parseFloat(armor_uno_wrap || 0) * 
        parseFloat(armor_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addArmourwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [armor_qty_wrap, armor_uno_wrap, armor_rt_wrap]);

    // function to calculate armorer all on change
    useEffect(() => {
        const addArmourall = () => {
        setArmorallTotal(parseFloat(armorerTotal || 0) +
        parseFloat(armorprepTotal || 0) +
        parseFloat(armorwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addArmourall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [armorerTotal, armorprepTotal, armorwrapTotal]);
    
    // function to add all Property Labour on change
    useEffect(() => {
        const addPropLab = () => {
        setPropertylabourTotal(
        parseFloat(propmasallTotal || 0) +
        parseFloat(aspropmaallTotal || 0) +
        parseFloat(onsetpropallTotal || 0) +
        parseFloat(propbuyallTotal || 0) +
        parseFloat(armorallTotal || 0) +
        parseFloat(days6th7th_prop || 0) +
        parseFloat(overtime_prop || 0) +
        parseFloat(holidays_prop || 0) +
        parseFloat(box_rent_prop || 0) +
        parseFloat(fringes_taxes_property || 0) +
        parseFloat(other_property || 0) 
        )
        }
        const timer = setTimeout(() => {
            addPropLab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
          // eslint-disable-next-line
        }, [propmasallTotal, aspropmaallTotal, onsetpropallTotal,
            propbuyallTotal, armorallTotal, days6th7th_prop,
            overtime_prop, holidays_prop, box_rent_prop,
            other_property, fringes_taxes_property]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    PROPERTY LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2">
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.00</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack} mb-1`}>PROPERTY LABOUR</p>
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
    {/* Property Master */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Property Master</p>
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
    <Form.Group controlId="pro_mas_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_mas_qty_prep"
        value={pro_mas_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pro_mas_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_mas_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_mas_uno_prep"
        value={pro_mas_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pro_mas_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_mas_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_mas_una_prep"
        value={pro_mas_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.pro_mas_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_mas_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_mas_rt_prep"
        value={pro_mas_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pro_mas_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="propmasprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propmasprepTotal"
        value={propmasprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propmasprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="property_master_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_master_quantity"
        value={property_master_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_master_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_master_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_master_units_number"
        value={property_master_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_master_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_master_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_master_units_name"
        value={property_master_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.property_master_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_master_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_master_rate"
        value={property_master_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_master_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="propertymasterTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propertymasterTotal"
        value={propertymasterTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propertymasterTotal?.map((message, idx) => (
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
    <Form.Group controlId="pro_mas_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_mas_qty_wrap"
        value={pro_mas_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pro_mas_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_mas_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_mas_uno_wrap"
        value={pro_mas_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pro_mas_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_mas_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_mas_una_wrap"
        value={pro_mas_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.pro_mas_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pro_mas_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pro_mas_rt_wrap"
        value={pro_mas_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pro_mas_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="propmaswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propmaswrapTotal"
        value={propmaswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propmaswrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="propmasallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propmasallTotal"
        value={propmasallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propmasallTotal?.map((message, idx) => (
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
    {/* Assistant Property Master */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Assistant Property Master</p>
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
    <Form.Group controlId="as_pro_ma_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_pro_ma_qty_prep"
        value={as_pro_ma_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_pro_ma_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_pro_ma_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_pro_ma_uno_prep"
        value={as_pro_ma_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_pro_ma_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_pro_ma_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_pro_ma_una_prep"
        value={as_pro_ma_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.as_pro_ma_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_pro_ma_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_pro_ma_rt_prep"
        value={as_pro_ma_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_pro_ma_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="aspropmaprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="aspropmaprepTotal"
        value={aspropmaprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.aspropmaprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="assist_property_master_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_property_master_quantity"
        value={assist_property_master_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_property_master_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_property_master_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_property_master_units_number"
        value={assist_property_master_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_property_master_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_property_master_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_property_master_units_name"
        value={assist_property_master_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.assist_property_master_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_property_master_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_property_master_rate"
        value={assist_property_master_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_property_master_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistpropertymasterTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistpropertymasterTotal"
        value={assistpropertymasterTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistpropertymasterTotal?.map((message, idx) => (
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
    <Form.Group controlId="as_pro_ma_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_pro_ma_qty_wrap"
        value={as_pro_ma_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_pro_ma_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_pro_ma_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_pro_ma_uno_wrap"
        value={as_pro_ma_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_pro_ma_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_pro_ma_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_pro_ma_una_wrap"
        value={as_pro_ma_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.as_pro_ma_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_pro_ma_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_pro_ma_rt_wrap"
        value={as_pro_ma_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_pro_ma_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="aspropmawrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="aspropmawrapTotal"
        value={aspropmawrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.aspropmawrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="aspropmaallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="aspropmaallTotal"
        value={aspropmaallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.aspropmaallTotal?.map((message, idx) => (
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
    {/* On Set Props Person */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>On-Set Props Person</p>
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
    <Form.Group controlId="on_set_prop_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_prop_qty_prep"
        value={on_set_prop_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_prop_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_prop_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_prop_uno_prep"
        value={on_set_prop_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_prop_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_prop_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_prop_una_prep"
        value={on_set_prop_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.on_set_prop_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_prop_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_prop_rt_prep"
        value={on_set_prop_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_prop_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="onsetpropprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="onsetpropprepTotal"
        value={onsetpropprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.onsetpropprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="on_set_props_person_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_props_person_quantity"
        value={on_set_props_person_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_props_person_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_props_person_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_props_person_units_number"
        value={on_set_props_person_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_props_person_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_props_person_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_props_person_units_name"
        value={on_set_props_person_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.on_set_props_person_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_props_person_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_props_person_rate"
        value={on_set_props_person_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_props_person_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="onsetpropspersonTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="onsetpropspersonTotal"
        value={onsetpropspersonTotal}
        readOnly
            />
    </Form.Group>
    {errors?.onsetpropspersonTotal?.map((message, idx) => (
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
    <Form.Group controlId="on_set_prop_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_prop_qty_wrap"
        value={on_set_prop_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_prop_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_prop_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_prop_uno_wrap"
        value={on_set_prop_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_prop_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_prop_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_prop_una_wrap"
        value={on_set_prop_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.on_set_prop_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="on_set_prop_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="on_set_prop_rt_wrap"
        value={on_set_prop_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.on_set_prop_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="onsetpropwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="onsetpropwrapTotal"
        value={onsetpropwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.onsetpropwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="onsetpropallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="onsetpropallTotal"
        value={onsetpropallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.onsetpropallTotal?.map((message, idx) => (
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
    {/* Property Buyer */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Property Buyer</p>
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
    <Form.Group controlId="prop_buy_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prop_buy_qty_prep"
        value={prop_buy_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.prop_buy_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prop_buy_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prop_buy_uno_prep"
        value={prop_buy_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.prop_buy_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prop_buy_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prop_buy_una_prep"
        value={prop_buy_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.prop_buy_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prop_buy_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prop_buy_rt_prep"
        value={prop_buy_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.prop_buy_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="propbuyprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propbuyprepTotal"
        value={propbuyprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propbuyprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="property_buyer_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_buyer_quantity"
        value={property_buyer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_buyer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_buyer_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_buyer_units_number"
        value={property_buyer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_buyer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_buyer_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_buyer_units_name"
        value={property_buyer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.property_buyer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="property_buyer_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="property_buyer_rate"
        value={property_buyer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.property_buyer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="propertybuyerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propertybuyerTotal"
        value={propertybuyerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propertybuyerTotal?.map((message, idx) => (
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
    <Form.Group controlId="prop_buy_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prop_buy_qty_wrap"
        value={prop_buy_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.prop_buy_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prop_buy_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prop_buy_uno_wrap"
        value={prop_buy_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.prop_buy_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prop_buy_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prop_buy_una_wrap"
        value={prop_buy_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.prop_buy_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="prop_buy_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prop_buy_rt_wrap"
        value={prop_buy_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.prop_buy_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="propbuywrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propbuywrapTotal"
        value={propbuywrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propbuywrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="propbuyallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propbuyallTotal"
        value={propbuyallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propbuyallTotal?.map((message, idx) => (
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
    {/* Armorer */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Armorer</p>
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
    <Form.Group controlId="armor_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armor_qty_prep"
        value={armor_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armor_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armor_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armor_uno_prep"
        value={armor_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armor_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armor_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armor_una_prep"
        value={armor_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.armor_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armor_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armor_rt_prep"
        value={armor_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armor_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="armorprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorprepTotal"
        value={armorprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.armorprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="armorer_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorer_quantity"
        value={armorer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armorer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armorer_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorer_units_number"
        value={armorer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armorer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armorer_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorer_units_name"
        value={armorer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.armorer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armorer_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorer_rate"
        value={armorer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armorer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="armorerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorerTotal"
        value={armorerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.armorerTotal?.map((message, idx) => (
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
    <Form.Group controlId="armor_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armor_qty_wrap"
        value={armor_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armor_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armor_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armor_uno_wrap"
        value={armor_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armor_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armor_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armor_una_wrap"
        value={armor_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.armor_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="armor_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armor_rt_wrap"
        value={armor_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.armor_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="armorwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorwrapTotal"
        value={armorwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.armorwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="armorallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="armorallTotal"
        value={armorallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.armorallTotal?.map((message, idx) => (
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
    {/* 6th/7th Days */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.60</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_prop" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_prop"
        value={days6th7th_unit_prop}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_prop?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_prop" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_prop"
        value={days6th7th_prop}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_prop?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>11.70</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_prop" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_prop"
        value={overtime_unit_prop}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_prop?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_prop" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_prop"
        value={overtime_prop}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_prop?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>11.80</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_prop" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_prop"
        value={holidays_unit_prop}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_prop?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_prop" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_prop"
        value={holidays_prop}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_prop?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>11.90</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_prop" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_prop"
        value={box_rent_unit_prop}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_prop?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_prop" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_prop"
        value={box_rent_prop}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_prop?.map((message, idx) => (
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
    {/* Other Property*/}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>11.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_property" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_property"
        value={other_property}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_property?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>11.92</p>
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
    <Form.Group controlId="fringes_taxes_property" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_property"
        value={fringes_taxes_property}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_property?.map((message, idx) => (
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
    {/* Property Total */}
    <Row className="mt-3 pb-2">
    <Col md={1}></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PROPERTY LABOUR</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="propertylabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="propertylabourTotal"
        value={propertylabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.propertylabourTotal?.map((message, idx) => (
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

export default PropertyLabour