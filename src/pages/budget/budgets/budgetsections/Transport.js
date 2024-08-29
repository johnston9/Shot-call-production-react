/* Component in the Budget component to edit Transport */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Transport = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataTransport, setPostDataTransport,
        tpcoordinatorTotal, setTpcoordinatorTotal,
        tpcaptainTotal, setTpcaptainTotal,
        tpmanagerTotal, setTpmanagerTotal,
        headdriverTotal, setHeaddriverTotal,
        driversTotal, setDriversTotal, setShow,
        transportlabourTotal, setTransportlabourTotal,
        tpcoorprepTotal, setTpcoorprepTotal,
        tpcoorwrapTotal, setTpcoorwrapTotal,
        tpcoorallTotal, setTpcoorallTotal,
        tpcapprepTotal, setTpcapprepTotal,
        tpcapwrapTotal, setTpcapwrapTotal,
        tpcapallTotal, setTpcapallTotal,
        tpmanprepTotal, setTpmanprepTotal,
        tpmanwrapTotal, setTpmanwrapTotal,
        tpmanallTotal, setTpmanallTotal,
        headdriprepTotal, setHeaddriprepTotal,
        headdriwrapTotal, setHeaddriwrapTotal,
        headdriallTotal, setHeaddriallTotal,
        driverprepTotal, setDriverprepTotal,
        driverwrapTotal, setDriverwrapTotal,
        driverallTotal, setDriverallTotal,
    } = props;

    const {days6th7th_unit_tran, days6th7th_tran,
        overtime_unit_tran, overtime_tran, holidays_unit_tran, holidays_tran,
        box_rent_unit_tran, box_rent_tran, other_solo_tran,
        tp_coor_qty_prep, tp_coor_uno_prep, tp_coor_una_prep, tp_coor_rt_prep,
        tp_coor_qty_wrap, tp_coor_uno_wrap, tp_coor_una_wrap, tp_coor_rt_wrap,
        tp_cap_qty_prep, tp_cap_uno_prep, tp_cap_una_prep, tp_cap_rt_prep,
        tp_cap_qty_wrap, tp_cap_uno_wrap, tp_cap_una_wrap, tp_cap_rt_wrap,
        tp_man_qty_prep, tp_man_uno_prep, tp_man_una_prep, tp_man_rt_prep,
        tp_man_qty_wrap, tp_man_uno_wrap, tp_man_una_wrap, tp_man_rt_wrap,
        head_dr_qty_prep, head_dr_uno_prep, head_dr_una_prep, head_dr_rt_prep,
        head_dr_qty_wrap, head_dr_uno_wrap, head_dr_una_wrap, head_dr_rt_wrap,
        drive_qty_prep, drive_uno_prep, drive_una_prep, drive_rt_prep,
        drive_qty_wrap, drive_uno_wrap, drive_una_wrap, drive_rt_wrap,
        tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_una, tp_coordinator_rt,
        tp_captain_qty,tp_captain_uno, tp_captain_una, tp_captain_rt,
        tp_manager_qty, tp_manager_uno, tp_manager_una, tp_manager_rt,
        head_driver_qty, head_driver_uno, head_driver_una, head_driver_rt,
        drivers_qty, drivers_uno, drivers_una, drivers_rt,
        fringes_taxes_transport,} = postDataTransport;

    // handleChange 
    const handleChange = (event) => {
        setPostDataTransport({
        ...postDataTransport,
        [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
        });
    }; 
  
    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataTransport({
        ...postDataTransport,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions

    // Transport Coordinator
    // function to calculate Transport Coordinator shoot on change
    useEffect(() => {
      const addTracoo = () => {
      setTpcoordinatorTotal((parseFloat(tp_coordinator_qty || 0) * 
      parseFloat(tp_coordinator_uno || 0) * 
      parseFloat(tp_coordinator_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addTracoo();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_rt]);

    // function to calculate Transport Coordinator prep on change
    useEffect(() => {
        const addTracooprep = () => {
        setTpcoorprepTotal((parseFloat(tp_coor_qty_prep || 0) * 
        parseFloat(tp_coor_uno_prep || 0) * 
        parseFloat(tp_coor_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTracooprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tp_coor_qty_prep, tp_coor_uno_prep, tp_coor_rt_prep]);

    // function to calculate Transport Coordinator wrap on change
    useEffect(() => {
        const addTracoowrap = () => {
        setTpcoorwrapTotal((parseFloat(tp_coor_qty_wrap || 0) * 
        parseFloat(tp_coor_uno_wrap || 0) * 
        parseFloat(tp_coor_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTracoowrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tp_coor_qty_wrap, tp_coor_uno_wrap, tp_coor_rt_wrap]);

    // function to calculate Transport Coordinator all on change
    useEffect(() => {
        const addTracooall = () => {
        setTpcoorallTotal(parseFloat(tpcoordinatorTotal || 0) +
        parseFloat(tpcoorprepTotal || 0) +
        parseFloat(tpcoorwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addTracooall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tpcoordinatorTotal, tpcoorprepTotal, tpcoorwrapTotal]);

    // Transport Captain
    // function to calculate Transport Captain shoot on change
    useEffect(() => {
      const addTracap = () => {
      setTpcaptainTotal((parseFloat(tp_captain_qty || 0) * 
      parseFloat(tp_captain_uno || 0) * 
      parseFloat(tp_captain_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addTracap();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [tp_captain_qty, tp_captain_uno, tp_captain_rt]);

    // function to calculate Transport Captain prep on change
    useEffect(() => {
        const addTracapprep = () => {
        setTpcapprepTotal((parseFloat(tp_cap_qty_prep || 0) * 
        parseFloat(tp_cap_uno_prep || 0) * 
        parseFloat(tp_cap_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTracapprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tp_cap_qty_prep, tp_cap_uno_prep, tp_cap_rt_prep]);

    // function to calculate Transport Captain wrap on change
    useEffect(() => {
        const addTracapwrap = () => {
        setTpcapwrapTotal((parseFloat(tp_cap_qty_wrap || 0) * 
        parseFloat(tp_cap_uno_wrap || 0) * 
        parseFloat(tp_cap_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTracapwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tp_cap_qty_wrap, tp_cap_uno_wrap, tp_cap_rt_wrap]);

    // function to calculate Transport Captain all on change
    useEffect(() => {
        const addTracapall = () => {
        setTpcapallTotal(parseFloat(tpcaptainTotal || 0) +
        parseFloat(tpcapprepTotal || 0) +
        parseFloat(tpcapwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addTracapall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tpcaptainTotal, , tpcapprepTotal, tpcapwrapTotal]);

    // Transport Manager
    // function to calculate Transport Manager shoot on change
    useEffect(() => {
      const addTraman = () => {
      setTpmanagerTotal((parseFloat(tp_manager_qty || 0) * 
      parseFloat(tp_manager_uno || 0) * 
      parseFloat(tp_manager_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addTraman();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [tp_manager_qty, tp_manager_uno, tp_manager_rt]);

    // function to calculate Transport Manager prep on change
    useEffect(() => {
        const addTramanprep = () => {
        setTpmanprepTotal((parseFloat(tp_man_qty_prep || 0) * 
        parseFloat(tp_man_uno_prep || 0) * 
        parseFloat(tp_man_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTramanprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tp_man_qty_prep, tp_man_uno_prep, tp_man_rt_prep]);

    // function to calculate Transport Manager wrap on change
    useEffect(() => {
        const addTramanwrap = () => {
        setTpmanwrapTotal((parseFloat(tp_man_qty_wrap || 0) * 
        parseFloat(tp_man_uno_wrap || 0) * 
        parseFloat(tp_man_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTramanwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tp_man_qty_wrap, tp_man_uno_wrap, tp_man_rt_wrap]);

    // function to calculate Transport Manager all on change
    useEffect(() => {
        const addTramanall = () => {
        setTpmanallTotal(parseFloat(tpmanagerTotal || 0) +
        parseFloat(tpmanprepTotal || 0) +
        parseFloat(tpmanwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addTramanall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tpmanagerTotal, tpmanprepTotal, tpmanwrapTotal]);

    // Head Driver
    // function to calculate Head Driver shoot on change
    useEffect(() => {
      const addHeadri = () => {
      setHeaddriverTotal((parseFloat(head_driver_qty || 0) * 
      parseFloat(head_driver_uno || 0) * 
      parseFloat(head_driver_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addHeadri();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [head_driver_qty, head_driver_uno, head_driver_rt]);

    // function to calculate Head Driver prep on change
    useEffect(() => {
        const addHeadriprep = () => {
        setHeaddriprepTotal((parseFloat(head_dr_qty_prep || 0) * 
        parseFloat(head_dr_uno_prep || 0) * 
        parseFloat(head_dr_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addHeadriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [head_dr_qty_prep, head_dr_uno_prep, head_dr_rt_prep]);

    // function to calculate Head Driver wrap on change
    useEffect(() => {
        const addHeadriwrap = () => {
        setHeaddriwrapTotal((parseFloat(head_dr_qty_wrap || 0) * 
        parseFloat(head_dr_uno_wrap || 0) * 
        parseFloat(head_dr_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addHeadriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [head_dr_qty_wrap, head_dr_uno_wrap, head_dr_rt_wrap]);

    // function to calculate Head Driver all on change
    useEffect(() => {
        const addHeadriall = () => {
        setHeaddriallTotal(parseFloat(headdriverTotal || 0) +
        parseFloat(headdriprepTotal || 0) +
        parseFloat(headdriwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addHeadriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [headdriverTotal, headdriprepTotal, headdriwrapTotal]);

    // Drivers
    // function to calculate Drivers shoot on change
    useEffect(() => {
      const addDriver = () => {
      setDriversTotal((parseFloat(drivers_qty || 0) * 
      parseFloat(drivers_uno || 0) * 
      parseFloat(drivers_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addDriver();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [drivers_qty, drivers_uno, drivers_rt]);

    // function to calculate Drivers prep on change
    useEffect(() => {
        const addDriveprep = () => {
        setDriverprepTotal((parseFloat(drive_qty_prep || 0) * 
        parseFloat(drive_uno_prep || 0) * 
        parseFloat(drive_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addDriveprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [drive_qty_prep, drive_uno_prep, drive_rt_prep]);

    // function to calculate Drivers wrap on change
    useEffect(() => {
        const addDrivewrap = () => {
        setDriverwrapTotal((parseFloat(drive_qty_wrap || 0) * 
        parseFloat(drive_uno_wrap || 0) * 
        parseFloat(drive_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addDrivewrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [drive_qty_wrap, drive_uno_wrap, drive_rt_wrap]);

    // function to calculate Drivers all on change
    useEffect(() => {
        const addDriveall = () => {
        setDriverallTotal(parseFloat(driversTotal || 0) +
        parseFloat(driverprepTotal || 0) +
        parseFloat(driverwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addDriveall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [driversTotal, driverprepTotal, driverwrapTotal]);

    // function to add all Transport Labour on change
    useEffect(() => {
      const AddTraLab = () => {
      setTransportlabourTotal(
      parseFloat(tpcoorallTotal || 0) +
      parseFloat(tpcapallTotal || 0) +
      parseFloat(tpmanallTotal || 0) +
      parseFloat(headdriallTotal || 0) +
      parseFloat(driverallTotal || 0) +
      parseFloat(days6th7th_tran || 0) +
      parseFloat(overtime_tran || 0) +
      parseFloat(holidays_tran || 0) +
      parseFloat(box_rent_tran || 0) +
      parseFloat(other_solo_tran || 0) +
      parseFloat(fringes_taxes_transport || 0)
      )
      }
      const timer = setTimeout(() => {
        AddTraLab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
      }, [tpcoorallTotal, tpcapallTotal, tpmanallTotal,
        headdriallTotal, driverallTotal, days6th7th_tran, 
        overtime_tran, holidays_tran, box_rent_tran,
        other_solo_tran, fringes_taxes_transport]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    TRANSPORTATION LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2">
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>TRANSPORTATION LABOUR</p>
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
    {/* Transport Coordinator */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Transport Coordinator</p>
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
    <Form.Group controlId="tp_coor_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coor_qty_prep"
        value={tp_coor_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coor_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coor_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coor_uno_prep"
        value={tp_coor_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coor_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coor_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coor_una_prep"
        value={tp_coor_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_coor_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coor_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coor_rt_prep"
        value={tp_coor_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coor_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpcoorprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpcoorprepTotal"
        value={tpcoorprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpcoorprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="tp_coordinator_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coordinator_qty"
        value={tp_coordinator_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coordinator_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coordinator_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coordinator_uno"
        value={tp_coordinator_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coordinator_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coordinator_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coordinator_una"
        value={tp_coordinator_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_coordinator_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coordinator_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coordinator_rt"
        value={tp_coordinator_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coordinator_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpcoordinatorTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpcoordinatorTotal"
        value={tpcoordinatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpcoordinatorTotal?.map((message, idx) => (
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
    <Form.Group controlId="tp_coor_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coor_qty_wrap"
        value={tp_coor_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coor_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coor_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coor_uno_wrap"
        value={tp_coor_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coor_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coor_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coor_una_wrap"
        value={tp_coor_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_coor_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_coor_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_coor_rt_wrap"
        value={tp_coor_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_coor_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpcoorwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpcoorwrapTotal"
        value={tpcoorwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpcoorwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="tpcoorallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpcoorallTotal"
        value={tpcoorallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpcoorallTotal?.map((message, idx) => (
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
    {/* Transport Captain */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Transport Captain</p>
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
    <Form.Group controlId="tp_cap_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_cap_qty_prep"
        value={tp_cap_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_cap_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_cap_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_cap_uno_prep"
        value={tp_cap_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_cap_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_cap_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_cap_una_prep"
        value={tp_cap_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_cap_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_cap_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_cap_rt_prep"
        value={tp_cap_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_cap_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpcapprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpcapprepTotal"
        value={tpcapprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpcapprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="tp_captain_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_captain_qty"
        value={tp_captain_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_captain_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_captain_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_captain_uno"
        value={tp_captain_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_captain_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_captain_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_captain_una"
        value={tp_captain_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_captain_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_captain_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_captain_rt"
        value={tp_captain_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_captain_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpcaptainTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpcaptainTotal"
        value={tpcaptainTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpcaptainTotal?.map((message, idx) => (
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
    <Form.Group controlId="tp_cap_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_cap_qty_wrap"
        value={tp_cap_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_cap_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_cap_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_cap_uno_wrap"
        value={tp_cap_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_cap_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_cap_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_cap_una_wrap"
        value={tp_cap_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_cap_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_cap_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_cap_rt_wrap"
        value={tp_cap_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_cap_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpcapwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpcapwrapTotal"
        value={tpcapwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpcapwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="tpcapallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpcapallTotal"
        value={tpcapallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpcapallTotal?.map((message, idx) => (
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
    {/* Transport Manager */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Transport Manager</p>
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
    <Form.Group controlId="tp_man_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_man_qty_prep"
        value={tp_man_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_man_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_man_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_man_uno_prep"
        value={tp_man_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_man_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_man_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_man_una_prep"
        value={tp_man_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_man_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_man_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_man_rt_prep"
        value={tp_man_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_man_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpmanprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpmanprepTotal"
        value={tpmanprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpmanprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="tp_manager_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_manager_qty"
        value={tp_manager_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_manager_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_manager_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_manager_uno"
        value={tp_manager_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_manager_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_manager_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_manager_una"
        value={tp_manager_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_manager_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_manager_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_manager_rt"
        value={tp_manager_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_manager_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpmanagerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpmanagerTotal"
        value={tpmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpmanagerTotal?.map((message, idx) => (
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
    <Form.Group controlId="tp_man_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_man_qty_wrap"
        value={tp_man_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_man_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_man_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_man_uno_wrap"
        value={tp_man_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_man_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_man_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_man_una_wrap"
        value={tp_man_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tp_man_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tp_man_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tp_man_rt_wrap"
        value={tp_man_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tp_man_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tpmanwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpmanwrapTotal"
        value={tpmanwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpmanwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="tpmanallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tpmanallTotal"
        value={tpmanallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tpmanallTotal?.map((message, idx) => (
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
    {/* Head Driver */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Head Driver</p>
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
    <Form.Group controlId="head_dr_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_dr_qty_prep"
        value={head_dr_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_dr_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_dr_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_dr_uno_prep"
        value={head_dr_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_dr_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_dr_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_dr_una_prep"
        value={head_dr_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.head_dr_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_dr_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_dr_rt_prep"
        value={head_dr_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_dr_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headdriprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headdriprepTotal"
        value={headdriprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headdriprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="head_driver_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_driver_qty"
        value={head_driver_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_driver_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_driver_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_driver_uno"
        value={head_driver_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_driver_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_driver_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_driver_una"
        value={head_driver_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.head_driver_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_driver_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_driver_rt"
        value={head_driver_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_driver_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headdriverTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headdriverTotal"
        value={headdriverTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headdriverTotal?.map((message, idx) => (
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
    <Form.Group controlId="head_dr_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_dr_qty_wrap"
        value={head_dr_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_dr_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_dr_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_dr_uno_wrap"
        value={head_dr_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_dr_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_dr_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_dr_una_wrap"
        value={head_dr_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.head_dr_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_dr_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_dr_rt_wrap"
        value={head_dr_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_dr_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headdriwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headdriwrapTotal"
        value={headdriwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headdriwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="headdriallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headdriallTotal"
        value={headdriallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headdriallTotal?.map((message, idx) => (
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
    {/* Drivers */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>20.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Drivers</p>
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
    <Form.Group controlId="drive_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drive_qty_prep"
        value={drive_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drive_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drive_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drive_uno_prep"
        value={drive_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drive_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drive_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drive_una_prep"
        value={drive_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.drive_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drive_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drive_rt_prep"
        value={drive_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drive_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="driverprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="driverprepTotal"
        value={driverprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.driverprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="drivers_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drivers_qty"
        value={drivers_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drivers_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drivers_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drivers_uno"
        value={drivers_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drivers_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drivers_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drivers_una"
        value={drivers_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.drivers_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drivers_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drivers_rt"
        value={drivers_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drivers_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="driversTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="driversTotal"
        value={driversTotal}
        readOnly
            />
    </Form.Group>
    {errors?.driversTotal?.map((message, idx) => (
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
    <Form.Group controlId="drive_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drive_qty_wrap"
        value={drive_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drive_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drive_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drive_uno_wrap"
        value={drive_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drive_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drive_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drive_una_wrap"
        value={drive_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.drive_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drive_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drive_rt_wrap"
        value={drive_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drive_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="driverwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="driverwrapTotal"
        value={driverwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.driverwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="driverallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="driverallTotal"
        value={driverallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.driverallTotal?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>20.60</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_tran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_tran"
        value={days6th7th_unit_tran}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_tran?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_tran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_tran"
        value={days6th7th_tran}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_tran?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>20.70</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_tran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_tran"
        value={overtime_unit_tran}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_tran?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_tran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_tran"
        value={overtime_tran}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_tran?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>20.80</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_tran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_tran"
        value={holidays_unit_tran}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_tran?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_tran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_tran"
        value={holidays_tran}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_tran?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>20.90</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_tran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_tran"
        value={box_rent_unit_tran}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_tran?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_tran" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_tran"
        value={box_rent_tran}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_tran?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>20.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_solo_tran" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_solo_tran"
        value={other_solo_tran}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_solo_tran?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>20.92</p>
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
    <Form.Group controlId="fringes_taxes_transport" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_transport"
        value={fringes_taxes_transport}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_transport?.map((message, idx) => (
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
    {/* Transport Total */}
    <Row className="mt-3 pb-2">
    <Col md={1}></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TRANSPORTATION TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="transportlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="transportlabourTotal"
        value={transportlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.transportlabourTotal?.map((message, idx) => (
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

export default Transport