/* Component in the Budget component to edit Construction */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Construction = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataConstruction, setPostDataConstruction,
           constructioncoordinatorTotal, setConstructioncoordinatorTotal,
           headcarpenterTotal, setHeadcarpenterTotal,
           carpentersTotal, setCarpentersTotal,
           scenicpaintersTotal, setScenicpaintersTotal,
           headpainterTotal, setHeadpainterTotal,
           paintersTotal, setPaintersTotal,
           labourersTotal, setLabourersTotal, setShow,
           constructionlabourTotal, setConstructionlabourTotal,
           concoorprepTotal, setConoorprepTotal,
           concoorwrapTotal, setConoorwrapTotal,
           concoorallTotal, setConoorallTotal,
           headcarprepTotal, setHeadcarprepTotal,
           headcarwrapTotal, setHeadcarwrapTotal,
           headcarallTotal, setHeadcarallTotal,
           carpenprepTotal, setCarpenprepTotal,
           carpenwrapTotal, setCarpenwrapTotal,
           carpenallTotal, setCarpenallTotal,
           scenicprepTotal, setScenicprepTotal,
           scenicwrapTotal, setScenicwrapTotal,
           scenicallTotal, setScenicallTotal,
           headpainprepTotal, setHeadpainprepTotal,
           headpainwrapTotal, setHeadpainwrapTotal,
           headpainallTotal, setHeadpainallTotal,
           paintprepTotal, setPaintprepTotal,
           paintwrapTotal, setPaintwrapTotal,
           paintallTotal, setPaintallTotal,
           laboprepTotal, setLaboprepTotal,
           labowrapTotal, setLabowrapTotal,
           laboallTotal, setLaboallTotal,
    } = props;

    const {days6th7th_unit_con, days6th7th_con, overtime_unit_con, overtime_con,
        holidays_unit_con, holidays_con, box_rent_unit_con, box_rent_con,
        con_coor_qty_prep, con_coor_uno_prep, con_coor_una_prep, con_coor_rt_prep,
        con_coor_qty_wrap, con_coor_uno_wrap, con_coor_una_wrap, con_coor_rt_wrap,
        headcar_qty_prep, headcar_uno_prep, headcar_una_prep, headcar_rt_prep,
        headcar_qty_wrap, headcar_uno_wrap, headcar_una_wrap, headcar_rt_wrap,
        carpen_qty_prep, carpen_uno_prep, carpen_una_prep, carpen_rt_prep,
        carpen_qty_wrap, carpen_uno_wrap, carpen_una_wrap, carpen_rt_wrap,
        scenic_qty_prep, scenic_uno_prep, scenic_una_prep, scenic_rt_prep,
        scenic_qty_wrap, scenic_uno_wrap, scenic_una_wrap, scenic_rt_wrap,
        headpain_qty_prep, headpain_uno_prep, headpain_una_prep, headpain_rt_prep,
        headpain_qty_wrap, headpain_uno_wrap, headpain_una_wrap, headpain_rt_wrap,
        pain_qty_prep, pain_uno_prep, pain_una_prep, pain_rt_prep,
        pain_qty_wrap, pain_uno_wrap, pain_una_wrap, pain_rt_wrap,
        labo_qty_prep, labo_uno_prep, labo_una_prep, labo_rt_prep,
        labo_qty_wrap, labo_uno_wrap, labo_una_wrap, labo_rt_wrap,
        fringes_taxes_construction,
        constructioncoordinator_quantity, constructioncoordinator_units_number,
        constructioncoordinator_units_name, constructioncoordinator_rate,
        headcarpenter_quantity, headcarpenter_units_number,
        headcarpenter_units_name, headcarpenter_rate,
        carpenters_quantity, carpenters_units_number,
        carpenters_units_name, carpenters_rate,
        scenicpainters_quantity, scenicpainters_units_number,
        scenicpainters_units_name, scenicpainters_rate,
        headpainter_quantity, headpainter_units_number,
        headpainter_units_name, headpainter_rate,
        painters_quantity, painters_units_number, 
        painters_units_name, painters_rate,
        labourers_quantity, labourers_units_number, 
        labourers_units_name, labourers_rate, 
        other_construction,} = postDataConstruction;

    // Construction handleChange 
    const handleChange = (event) => {
        setPostDataConstruction({
        ...postDataConstruction,
        [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
        });
    };

    // Construction handleChange Text 
    const handleChangeText = (event) => {
        setPostDataConstruction({
        ...postDataConstruction,
        [event.target.name]: event.target.value,
        });
    };

  // Calculate Functions

  // construction coordinator
  // function to calculate construction coordinator shoot on change
  useEffect(() => {
    const addConcoo = () => {
      setConstructioncoordinatorTotal((parseFloat(constructioncoordinator_quantity || 0) * 
      parseFloat(constructioncoordinator_units_number || 0) * 
      parseFloat(constructioncoordinator_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addConcoo();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [constructioncoordinator_quantity, constructioncoordinator_units_number,
  constructioncoordinator_rate]);

  // function to calculate construction coordinator prep on change
  useEffect(() => {
    const addConcooprep = () => {
      setConoorprepTotal((parseFloat(con_coor_qty_prep || 0) * 
      parseFloat(con_coor_uno_prep || 0) * 
      parseFloat(con_coor_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addConcooprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [con_coor_qty_prep, con_coor_uno_prep, con_coor_rt_prep]);

  // function to calculate construction coordinator wrap on change
  useEffect(() => {
    const addConcoowrap = () => {
      setConoorwrapTotal((parseFloat(con_coor_qty_wrap || 0) * 
      parseFloat(con_coor_uno_wrap || 0) * 
      parseFloat(con_coor_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addConcoowrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [con_coor_qty_wrap, con_coor_uno_wrap, con_coor_rt_wrap]);

  // function to add all construction coordinator on change 
  useEffect(() => {
    const addConCoor = () => {
      setConoorallTotal(
      parseFloat(constructioncoordinatorTotal || 0) +
      parseFloat(concoorprepTotal || 0) +
      parseFloat(concoorwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addConCoor();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [constructioncoordinatorTotal, concoorprepTotal, concoorwrapTotal]);

  // head carpenter
  // function to calculate head carpenter shoot on change
  useEffect(() => {
    const addHedcar = () => {
      setHeadcarpenterTotal((parseFloat(headcarpenter_quantity || 0) * 
      parseFloat(headcarpenter_units_number || 0) * 
      parseFloat(headcarpenter_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addHedcar();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [headcarpenter_quantity, headcarpenter_units_number,
  headcarpenter_rate]);

  // function to calculate head carpenter prep on change
  useEffect(() => {
    const addHedcarprep = () => {
      setHeadcarprepTotal((parseFloat(headcar_qty_prep || 0) * 
      parseFloat(headcar_uno_prep || 0) * 
      parseFloat(headcar_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addHedcarprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [headcar_qty_prep, headcar_uno_prep, headcar_rt_prep,]);

  // function to calculate head carpenter wrap on change
  useEffect(() => {
    const addHedcarwrap = () => {
      setHeadcarwrapTotal((parseFloat(headcar_qty_wrap || 0) * 
      parseFloat(headcar_uno_wrap || 0) * 
      parseFloat(headcar_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addHedcarwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [headcar_qty_wrap, headcar_uno_wrap, headcar_rt_wrap]);

  // function to add all head carpenter on change 
  useEffect(() => {
    const addHeadCar = () => {
      setHeadcarallTotal(
      parseFloat(headcarpenterTotal || 0) +
      parseFloat(headcarprepTotal || 0) +
      parseFloat(headcarwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addHeadCar();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [headcarpenterTotal, headcarprepTotal, headcarwrapTotal]);

  // carpenters
  // function to calculate carpenters shoot on change
  useEffect(() => {
    const addCarpen = () => {
      setCarpentersTotal((parseFloat(carpenters_quantity || 0) * 
      parseFloat(carpenters_units_number || 0) * 
      parseFloat(carpenters_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addCarpen();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [carpenters_quantity, carpenters_units_number,
  carpenters_rate]);

  // function to calculate carpenters prep on change
  useEffect(() => {
    const addCarpenprep = () => {
      setCarpenprepTotal((parseFloat(carpen_qty_prep || 0) * 
      parseFloat(carpen_uno_prep || 0) * 
      parseFloat(carpen_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addCarpenprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [carpen_qty_prep, carpen_uno_prep, carpen_rt_prep]);

  // function to calculate carpenters wrap on change
  useEffect(() => {
    const addCarpenwrap = () => {
      setCarpenwrapTotal((parseFloat(carpen_qty_wrap || 0) * 
      parseFloat(carpen_uno_wrap || 0) * 
      parseFloat(carpen_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addCarpenwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [carpen_qty_wrap, carpen_uno_wrap, carpen_rt_wrap]);

  // function to add all carpenters on change 
  useEffect(() => {
    const addCarPent = () => {
      setCarpenallTotal(
      parseFloat(carpentersTotal || 0) +
      parseFloat(carpenprepTotal || 0) +
      parseFloat(carpenwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addCarPent();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [carpentersTotal, carpenprepTotal, carpenwrapTotal]);

  // scenic painters
  // function to calculate scenic painters shoot on change
  useEffect(() => {
    const addScepan = () => {
      setScenicpaintersTotal((parseFloat(scenicpainters_quantity || 0) * 
      parseFloat(scenicpainters_units_number || 0) * 
      parseFloat(scenicpainters_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addScepan();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [scenicpainters_quantity, scenicpainters_units_number,
  scenicpainters_rate]);

  // function to calculate scenic painters prep on change
  useEffect(() => {
    const addScepanprep = () => {
      setScenicprepTotal((parseFloat(scenic_qty_prep || 0) * 
      parseFloat(scenic_uno_prep || 0) * 
      parseFloat(scenic_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addScepanprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [scenic_qty_prep, scenic_uno_prep, scenic_rt_prep]);

  // function to calculate scenic painters wrap on change
  useEffect(() => {
    const addScepanwrap = () => {
      setScenicwrapTotal((parseFloat(scenic_qty_wrap || 0) * 
      parseFloat(scenic_uno_wrap || 0) * 
      parseFloat(scenic_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addScepanwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [scenic_qty_wrap, scenic_uno_wrap, scenic_rt_wrap]);

  // function to add all scenic paintersr on change 
  useEffect(() => {
    const addScenPaint = () => {
      setScenicallTotal(
      parseFloat(scenicpaintersTotal || 0) +
      parseFloat(scenicprepTotal || 0) +
      parseFloat(scenicwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addScenPaint();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [scenicpaintersTotal, scenicprepTotal, scenicwrapTotal]);

  // head painter
  // function to calculate head painter shoot on change
  useEffect(() => {
    const addHeaPan = () => {
      setHeadpainterTotal((parseFloat(headpainter_quantity || 0) * 
      parseFloat(headpainter_units_number || 0) * 
      parseFloat(headpainter_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addHeaPan();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [headpainter_quantity, headpainter_units_number,
  headpainter_rate]);

  // function to calculate head painter prep on change
  useEffect(() => {
    const addHeaPanprep = () => {
      setHeadpainprepTotal((parseFloat(headpain_qty_prep || 0) * 
      parseFloat(headpain_uno_prep || 0) * 
      parseFloat(headpain_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addHeaPanprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [headpain_qty_prep, headpain_uno_prep, headpain_rt_prep]);

  // function to calculate head painter wrap on change
  useEffect(() => {
    const addHeaPanwrap = () => {
      setHeadpainwrapTotal((parseFloat(headpain_qty_wrap || 0) * 
      parseFloat(headpain_uno_wrap || 0) * 
      parseFloat(headpain_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addHeaPanwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [headpain_qty_wrap, headpain_uno_wrap, headpain_rt_wrap]);

  // function to add all head painter on change 
  useEffect(() => {
    const addHeaPaint = () => {
      setHeadpainallTotal(
      parseFloat(headpainterTotal || 0) +
      parseFloat(headpainprepTotal || 0) +
      parseFloat(headpainwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addHeaPaint();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [headpainterTotal, headpainprepTotal, headpainwrapTotal]);

  // painters
  // function to calculate painters shoot on change
  useEffect(() => {
    const addPainte = () => {
      setPaintersTotal((parseFloat(painters_quantity || 0) * 
      parseFloat(painters_units_number || 0) * 
      parseFloat(painters_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addPainte();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [painters_quantity, painters_units_number,
  painters_rate]);

  // function to calculate painters prep on change
  useEffect(() => {
    const addPainteprep = () => {
      setPaintprepTotal((parseFloat(pain_qty_prep || 0) * 
      parseFloat(pain_uno_prep || 0) * 
      parseFloat(pain_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addPainteprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [pain_qty_prep, pain_uno_prep, pain_rt_prep]);

  // function to calculate painters wrap on change
  useEffect(() => {
    const addPaintewrap = () => {
      setPaintwrapTotal((parseFloat(pain_qty_wrap || 0) * 
      parseFloat(pain_uno_wrap || 0) * 
      parseFloat(pain_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addPaintewrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [pain_qty_wrap, pain_uno_wrap, pain_rt_wrap]);

  // function to add all painters on change 
  useEffect(() => {
    const addPaintersall = () => {
      setPaintallTotal(
      parseFloat(paintersTotal || 0) +
      parseFloat(paintprepTotal || 0) +
      parseFloat(paintwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addPaintersall();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [paintersTotal, paintprepTotal, paintwrapTotal]);

  // labourers
  // function to calculate labourers shoot on change
  useEffect(() => {
    const addLabour = () => {
      setLabourersTotal((parseFloat(labourers_quantity || 0) * 
      parseFloat(labourers_units_number || 0) * 
      parseFloat(labourers_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addLabour();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [labourers_quantity, labourers_units_number,
  labourers_rate]);

  // function to calculate labourers prep on change
  useEffect(() => {
    const addLabourprep = () => {
      setLaboprepTotal((parseFloat(labo_qty_prep || 0) * 
      parseFloat(labo_uno_prep || 0) * 
      parseFloat(labo_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addLabourprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [labo_qty_prep, labo_uno_prep, labo_rt_prep]);

  // function to calculate labourers wrap on change
  useEffect(() => {
    const addLabourwrap = () => {
      setLabowrapTotal((parseFloat(labo_qty_wrap || 0) * 
      parseFloat(labo_uno_wrap || 0) * 
      parseFloat(labo_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addLabourwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [labo_qty_wrap, labo_uno_wrap, labo_rt_wrap]);

  // function to add all labourers on change 
  useEffect(() => {
    const addLaboall = () => {
      setLaboallTotal(
      parseFloat(labourersTotal || 0) +
      parseFloat(laboprepTotal || 0) +
      parseFloat(labowrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
        addLaboall();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [labourersTotal, laboprepTotal, labowrapTotal]);

  // function to add all Construction Labour on change
  useEffect(() => {
    const addConLab = () => {
      setConstructionlabourTotal(
      parseFloat(concoorallTotal || 0) +
      parseFloat(headcarallTotal || 0) +
      parseFloat(carpenallTotal || 0) +
      parseFloat(scenicallTotal || 0) +
      parseFloat(headpainallTotal || 0) +
      parseFloat(paintallTotal || 0) +
      parseFloat(laboallTotal || 0) +
      parseFloat(days6th7th_con || 0) +
      parseFloat(overtime_con || 0) +
      parseFloat(holidays_con || 0) +
      parseFloat(box_rent_con || 0) +
      parseFloat(fringes_taxes_construction || 0) +
      parseFloat(other_construction || 0) 
      )
    }
    const timer = setTimeout(() => {
        addConLab();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
    }, [concoorallTotal, headcarallTotal, carpenallTotal, scenicallTotal,
        headpainallTotal, paintallTotal, laboallTotal, days6th7th_con,
        overtime_con, holidays_con, box_rent_con, other_construction,
        fringes_taxes_construction]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    CONSTRUCTION LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>CONSTRUCTION LABOUR</p>
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
    {/* Construction Coordinator */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.10</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Construction Coordinator</p>
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
    <Form.Group controlId="con_coor_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="con_coor_qty_prep"
        value={con_coor_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.con_coor_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="con_coor_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="con_coor_uno_prep"
        value={con_coor_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.con_coor_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="con_coor_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="con_coor_una_prep"
        value={con_coor_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.con_coor_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="con_coor_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="con_coor_rt_prep"
        value={con_coor_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.con_coor_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="concoorprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="concoorprepTotal"
        value={concoorprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.concoorprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="constructioncoordinator_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructioncoordinator_quantity"
        value={constructioncoordinator_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.constructioncoordinator_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="constructioncoordinator_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructioncoordinator_units_number"
        value={constructioncoordinator_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.constructioncoordinator_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="constructioncoordinator_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructioncoordinator_units_name"
        value={constructioncoordinator_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.constructioncoordinator_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="constructioncoordinator_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructioncoordinator_rate"
        value={constructioncoordinator_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.constructioncoordinator_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="constructioncoordinatorTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructioncoordinatorTotal"
        value={constructioncoordinatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.constructioncoordinatorTotal?.map((message, idx) => (
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
    <Form.Group controlId="con_coor_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="con_coor_qty_wrap"
        value={con_coor_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.con_coor_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="con_coor_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="con_coor_uno_wrap"
        value={con_coor_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.con_coor_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="con_coor_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="con_coor_una_wrap"
        value={con_coor_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.con_coor_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="con_coor_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="con_coor_rt_wrap"
        value={con_coor_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.con_coor_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="concoorwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="concoorwrapTotal"
        value={concoorwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.concoorwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="concoorallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="concoorallTotal"
        value={concoorallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.concoorallTotal?.map((message, idx) => (
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
    {/* Head Carpenter */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.20</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Head Carpenter</p>
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
    <Form.Group controlId="headcar_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcar_qty_prep"
        value={headcar_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcar_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcar_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcar_uno_prep"
        value={headcar_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcar_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcar_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcar_una_prep"
        value={headcar_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.headcar_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcar_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcar_rt_prep"
        value={headcar_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcar_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headcarprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarprepTotal"
        value={headcarprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headcarprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="headcarpenter_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarpenter_quantity"
        value={headcarpenter_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcarpenter_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcarpenter_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarpenter_units_number"
        value={headcarpenter_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcarpenter_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcarpenter_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarpenter_units_name"
        value={headcarpenter_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.headcarpenter_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcarpenter_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarpenter_rate"
        value={headcarpenter_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcarpenter_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headcarpenterTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarpenterTotal"
        value={headcarpenterTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headcarpenterTotal?.map((message, idx) => (
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
    <Form.Group controlId="headcar_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcar_qty_wrap"
        value={headcar_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcar_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcar_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcar_uno_wrap"
        value={headcar_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcar_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcar_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcar_una_wrap"
        value={headcar_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.headcar_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headcar_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcar_rt_wrap"
        value={headcar_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headcar_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headcarwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarwrapTotal"
        value={headcarwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headcarwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="headcarallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headcarallTotal"
        value={headcarallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headcarallTotal?.map((message, idx) => (
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
    {/* Carpenters */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Carpenters</p>
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
    <Form.Group controlId="carpen_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpen_qty_prep"
        value={carpen_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpen_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpen_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpen_uno_prep"
        value={carpen_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpen_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpen_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpen_una_prep"
        value={carpen_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.carpen_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpen_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpen_rt_prep"
        value={carpen_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpen_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="carpenprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenprepTotal"
        value={carpenprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.carpenprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="carpenters_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenters_quantity"
        value={carpenters_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpenters_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpenters_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenters_units_number"
        value={carpenters_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpenters_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpenters_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenters_units_name"
        value={carpenters_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.carpenters_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpenters_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenters_rate"
        value={carpenters_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpenters_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="carpentersTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpentersTotal"
        value={carpentersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.carpentersTotal?.map((message, idx) => (
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
    <Form.Group controlId="carpen_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpen_qty_wrap"
        value={carpen_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpen_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpen_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpen_uno_wrap"
        value={carpen_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpen_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpen_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpen_una_wrap"
        value={carpen_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.carpen_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="carpen_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpen_rt_wrap"
        value={carpen_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.carpen_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="carpenwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenwrapTotal"
        value={carpenwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.carpenwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="carpenallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="carpenallTotal"
        value={carpenallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.carpenallTotal?.map((message, idx) => (
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
    {/* Scenic Painters */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Scenic Painters</p>
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
    <Form.Group controlId="scenic_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenic_qty_prep"
        value={scenic_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenic_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenic_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenic_uno_prep"
        value={scenic_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenic_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenic_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenic_una_prep"
        value={scenic_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.scenic_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenic_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenic_rt_prep"
        value={scenic_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenic_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="scenicprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicprepTotal"
        value={scenicprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scenicprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="scenicpainters_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicpainters_quantity"
        value={scenicpainters_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenicpainters_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenicpainters_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicpainters_units_number"
        value={scenicpainters_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenicpainters_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenicpainters_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicpainters_units_name"
        value={scenicpainters_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.scenicpainters_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenicpainters_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicpainters_rate"
        value={scenicpainters_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenicpainters_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="scenicpaintersTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicpaintersTotal"
        value={scenicpaintersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scenicpaintersTotal?.map((message, idx) => (
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
    <Form.Group controlId="scenic_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenic_qty_wrap"
        value={scenic_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenic_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenic_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenic_uno_wrap"
        value={scenic_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenic_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenic_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenic_una_wrap"
        value={scenic_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.scenic_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scenic_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenic_rt_wrap"
        value={scenic_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.scenic_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="scenicwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicwrapTotal"
        value={scenicwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scenicwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="scenicallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scenicallTotal"
        value={scenicallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scenicallTotal?.map((message, idx) => (
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
    {/* Head Painter */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Head Painter</p>
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
    <Form.Group controlId="headpain_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpain_qty_prep"
        value={headpain_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpain_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpain_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpain_uno_prep"
        value={headpain_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpain_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpain_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpain_una_prep"
        value={headpain_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.headpain_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpain_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpain_rt_prep"
        value={headpain_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpain_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headpainprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainprepTotal"
        value={headpainprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headpainprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="headpainter_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainter_quantity"
        value={headpainter_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpainter_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpainter_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainter_units_number"
        value={headpainter_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpainter_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpainter_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainter_units_name"
        value={headpainter_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.headpainter_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpainter_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainter_rate"
        value={headpainter_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpainter_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headpainterTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainterTotal"
        value={headpainterTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headpainterTotal?.map((message, idx) => (
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
    <Form.Group controlId="headpain_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpain_qty_wrap"
        value={headpain_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpain_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpain_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpain_uno_wrap"
        value={headpain_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpain_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpain_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpain_una_wrap"
        value={headpain_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.headpain_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="headpain_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpain_rt_wrap"
        value={headpain_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.headpain_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headpainwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainwrapTotal"
        value={headpainwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headpainwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="headpainallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headpainallTotal"
        value={headpainallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headpainallTotal?.map((message, idx) => (
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
    {/* Painters */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Painters</p>
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
    <Form.Group controlId="pain_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pain_qty_prep"
        value={pain_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pain_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pain_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pain_uno_prep"
        value={pain_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pain_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pain_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pain_una_prep"
        value={pain_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.pain_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pain_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pain_rt_prep"
        value={pain_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pain_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="paintprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="paintprepTotal"
        value={paintprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.paintprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="painters_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="painters_quantity"
        value={painters_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.painters_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="painters_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="painters_units_number"
        value={painters_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.painters_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="painters_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="painters_units_name"
        value={painters_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.painters_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="painters_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="painters_rate"
        value={painters_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.painters_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="paintersTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="paintersTotal"
        value={paintersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.paintersTotal?.map((message, idx) => (
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
    <Form.Group controlId="pain_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pain_qty_wrap"
        value={pain_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pain_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pain_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pain_uno_wrap"
        value={pain_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pain_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pain_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pain_una_wrap"
        value={pain_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.pain_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="pain_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pain_rt_wrap"
        value={pain_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pain_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="paintwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="paintwrapTotal"
        value={paintwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.paintwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="paintallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="paintallTotal"
        value={paintallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.paintallTotal?.map((message, idx) => (
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
    {/* Labourers */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Labourers</p>
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
    <Form.Group controlId="labo_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labo_qty_prep"
        value={labo_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labo_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labo_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labo_uno_prep"
        value={labo_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labo_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labo_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labo_una_prep"
        value={labo_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.labo_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labo_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labo_rt_prep"
        value={labo_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labo_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="laboprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="laboprepTotal"
        value={laboprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.laboprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="labourers_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labourers_quantity"
        value={labourers_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labourers_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labourers_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labourers_units_number"
        value={labourers_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labourers_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labourers_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labourers_units_name"
        value={labourers_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.labourers_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labourers_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labourers_rate"
        value={labourers_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labourers_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="labourersTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labourersTotal"
        value={labourersTotal}
        readOnly
            />
    </Form.Group>
    {errors?.labourersTotal?.map((message, idx) => (
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
    <Form.Group controlId="labo_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labo_qty_wrap"
        value={labo_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labo_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labo_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labo_uno_wrap"
        value={labo_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labo_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labo_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labo_una_wrap"
        value={labo_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.labo_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="labo_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labo_rt_wrap"
        value={labo_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.labo_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="labowrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="labowrapTotal"
        value={labowrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.labowrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="laboallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="laboallTotal"
        value={laboallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.laboallTotal?.map((message, idx) => (
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
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.80</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_con" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_con"
        value={days6th7th_unit_con}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_con?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_con" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_con"
        value={days6th7th_con}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_con?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>09.90</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_con" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_con"
        value={overtime_unit_con}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_con?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_con" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_con"
        value={overtime_con}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_con?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>09.91</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_con" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_con"
        value={holidays_unit_con}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_con?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_con" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_con"
        value={holidays_con}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_con?.map((message, idx) => (
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
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.92</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_con" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_con"
        value={box_rent_unit_con}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_con?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_con" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_con"
        value={box_rent_con}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_con?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>09.93</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_construction" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_construction"
        value={other_construction}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_construction?.map((message, idx) => (
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
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>09.94</p>
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
    <Form.Group controlId="fringes_taxes_construction" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_construction"
        value={fringes_taxes_construction}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_construction?.map((message, idx) => (
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
    {/* Construction Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL CONSTRUCTION LABOUR</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="constructionlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="constructionlabourTotal"
        value={constructionlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.constructionlabourTotal?.map((message, idx) => (
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

export default Construction