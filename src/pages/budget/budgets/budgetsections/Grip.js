/* Component in the Budget component to edit Grip */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Grip = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataGrip, setPostDataGrip,
           keygripTotal, setKeygripTotal,
           bestboygripTotal, setBestboygripTotal,
           gripsTotal, setGripsTotal,
           dailiesgripTotal, setDailiesgripTotal,
           dollycranegripTotal, setDollycranegripTotal,
           swinggripsTotal, setSwinggripsTotal, setShow,
           othergriplabourTotal, setOthergriplabourTotal,
           griplabourTotal, setGriplabourTotal,
           kgripprepTotal, setKgripprepTotal,
           kgripwrapTotal, setKgripwrapTotal,
           kgripallTotal, setKgripallTotal,
           bbgripprepTotal, setBbgripprepTotal,
           bbgripwrapTotal, setBbgripwrapTotal,
           bbgripallTotal, setBbgripallTotal,
           gripsprepTotal, setGripsprepTotal,
           gripswrapTotal, setGripswrapTotal,
           gripsallTotal, setGripsallTotal,
           dolgripprepTotal, setDolgripprepTotal,
           dolgripwrapTotal, setDolgripwrapTotal,
           dolgripallTotal, setDolgripallTotal,
           swigripsprepTotal, setSwigripsprepTotal,
           swigripswrapTotal, setSwigripswrapTotal,
           swigripsallTotal, setSwigripsallTotal,
           othgripprepTotal, setOthgripprepTotal,
           othgripwrapTotal, setOthgripwrapTotal,
           othgripallTotal, setOthgripallTotal,
        } = props;

    const {days6th7th_unit_grip, days6th7th_grip, overtime_unit_grip,
    overtime_grip, holidays_unit_grip, 
    holidays_grip, box_rent_unit_grip, box_rent_grip, other_solo_grip,
    k_grip_qty_prep, k_grip_uno_prep, k_grip_una_prep, k_grip_rt_prep,
    k_grip_qty_wrap, k_grip_uno_wrap, k_grip_una_wrap, k_grip_rt_wrap, 
    bb_grip_qty_prep, bb_grip_uno_prep, bb_grip_una_prep, bb_grip_rt_prep,
    bb_grip_qty_wrap, bb_grip_uno_wrap, bb_grip_una_wrap, bb_grip_rt_wrap,
    grips_qty_prep, grips_uno_prep, grips_una_prep, grips_rt_prep,
    grips_qty_wrap, grips_uno_wrap, grips_una_wrap, grips_rt_wrap,
    dol_grip_qty_prep, dol_grip_uno_prep, dol_grip_una_prep, dol_grip_rt_prep,
    dol_grip_qty_wrap, dol_grip_uno_wrap, dol_grip_una_wrap, dol_grip_rt_wrap,
    sw_grips_qty_prep, sw_grips_uno_prep, sw_grips_una_prep, sw_grips_rt_prep,
    sw_grips_qty_wrap, sw_grips_uno_wrap, sw_grips_una_wrap, sw_grips_rt_wrap,
    oth_grip_qty_prep, oth_grip_uno_prep, oth_grip_una_prep, oth_grip_rt_prep,
    oth_grip_qty_wrap, oth_grip_uno_wrap, oth_grip_una_wrap, oth_grip_rt_wrap,
    key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
    best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_una, best_boy_grip_rt,
    grips_qty, grips_uno, grips_una, grips_rt,
    dailies_grip_qty, dailies_grip_uno, dailies_grip_una, dailies_grip_rt, 
    dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_una, dolly_crane_grip_rt,
    swing_grips_qty, swing_grips_uno, swing_grips_una, swing_grips_rt,
    other_grip_labour_qty, other_grip_labour_uno, other_grip_labour_una, other_grip_labour_rt,
    fringes_taxes_grip,} = postDataGrip;

    // handleChange 
    const handleChange = (event) => {
      setPostDataGrip({
      ...postDataGrip,
      [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
      });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
      setPostDataGrip({
    ...postDataGrip,
    [event.target.name]: event.target.value,
    });
    };

    // Calculate Functions

    // key grip
    // function to calculate key grip shoot on change
    useEffect(() => {
      const addKetgri = () => {
      setKeygripTotal((parseFloat(key_grip_qty || 0) * 
      parseFloat(key_grip_uno || 0) * 
      parseFloat(key_grip_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addKetgri();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [key_grip_qty, key_grip_uno, key_grip_rt]);

    // function to calculate key grip prep on change
    useEffect(() => {
        const addKetgriprep = () => {
        setKgripprepTotal((parseFloat(k_grip_qty_prep || 0) * 
        parseFloat(k_grip_uno_prep || 0) * 
        parseFloat(k_grip_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addKetgriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [k_grip_qty_prep, k_grip_uno_prep, k_grip_rt_prep]);

    // function to calculate key grip wrap on change
    useEffect(() => {
        const addKetgriwrap = () => {
        setKgripwrapTotal((parseFloat(k_grip_qty_wrap || 0) * 
        parseFloat(k_grip_uno_wrap || 0) * 
        parseFloat(k_grip_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addKetgriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [k_grip_qty_wrap, k_grip_uno_wrap, k_grip_rt_wrap]);

    // function to calculate key grip all on change
    useEffect(() => {
        const addKetgriall = () => {
        setKgripallTotal(parseFloat(keygripTotal || 0) +
        parseFloat(kgripprepTotal || 0) +
        parseFloat(kgripwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addKetgriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [keygripTotal, kgripprepTotal, kgripwrapTotal]);

    // best boy grip
    // function to calculate best boy grip shoot on change
    useEffect(() => {
      const addBbgrip = () => {
      setBestboygripTotal((parseFloat(best_boy_grip_qty || 0) * 
      parseFloat(best_boy_grip_uno || 0) * 
      parseFloat(best_boy_grip_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addBbgrip();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_rt]);

    // function to calculate best boy grip prep on change
    useEffect(() => {
        const addBbgriprep = () => {
        setBbgripprepTotal((parseFloat(bb_grip_qty_prep || 0) * 
        parseFloat(bb_grip_uno_prep || 0) * 
        parseFloat(bb_grip_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addBbgriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [bb_grip_qty_prep, bb_grip_uno_prep, bb_grip_rt_prep]);

    // function to calculate best boy grip wrap on change
    useEffect(() => {
        const addBbgriwrap = () => {
        setBbgripwrapTotal((parseFloat(bb_grip_qty_wrap || 0) * 
        parseFloat(bb_grip_uno_wrap || 0) * 
        parseFloat(bb_grip_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addBbgriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [bb_grip_qty_wrap, bb_grip_uno_wrap, bb_grip_rt_wrap]);

    // function to calculate best boy grip all on change
    useEffect(() => {
        const addBbgriall = () => {
        setBbgripallTotal(parseFloat(bestboygripTotal || 0) +
        parseFloat(bbgripprepTotal || 0) +
        parseFloat(bbgripwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addBbgriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [bestboygripTotal, bbgripprepTotal, bbgripwrapTotal]);

    // grips
    // function to calculate grips shoot on change
    useEffect(() => {
      const addGrips = () => {
      setGripsTotal((parseFloat(grips_qty || 0) * 
      parseFloat(grips_uno || 0) * 
      parseFloat(grips_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addGrips();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [grips_qty, grips_uno, grips_rt]);

    // function to calculate grips prep on change
    useEffect(() => {
        const addGriprep = () => {
        setGripsprepTotal((parseFloat(grips_qty_prep || 0) * 
        parseFloat(grips_uno_prep || 0) * 
        parseFloat(grips_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addGriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [grips_qty_prep, grips_uno_prep, grips_rt_prep]);

    // function to calculate grips wrap on change
    useEffect(() => {
        const addGriwrap = () => {
        setGripswrapTotal((parseFloat(grips_qty_wrap || 0) * 
        parseFloat(grips_uno_wrap || 0) * 
        parseFloat(grips_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addGriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [grips_qty_wrap, grips_uno_wrap, grips_rt_wrap]);

    // function to calculate grips all on change
    useEffect(() => {
        const addGriall = () => {
        setGripsallTotal(parseFloat(gripsTotal || 0) +
        parseFloat(gripsprepTotal || 0) +
        parseFloat(gripswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addGriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [gripsTotal, gripsprepTotal, gripswrapTotal]);

    // dolly crane grip
    // function to calculate dolly crane grip shoot on change
    useEffect(() => {
      const addDolcra = () => {
      setDollycranegripTotal((parseFloat(dolly_crane_grip_qty || 0) * 
      parseFloat(dolly_crane_grip_uno || 0) * 
      parseFloat(dolly_crane_grip_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addDolcra();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_rt]);

    // function to calculate dolly crane grip prep on change
    useEffect(() => {
        const addDolcraprep = () => {
        setDolgripprepTotal((parseFloat(dol_grip_qty_prep || 0) * 
        parseFloat(dol_grip_uno_prep || 0) * 
        parseFloat(dol_grip_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addDolcraprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dol_grip_qty_prep, dol_grip_uno_prep, dol_grip_rt_prep]);

    // function to calculate dolly crane grip wrap on change
    useEffect(() => {
        const addDolcrawrap = () => {
        setDolgripwrapTotal((parseFloat(dol_grip_qty_wrap || 0) * 
        parseFloat(dol_grip_uno_wrap || 0) * 
        parseFloat(dol_grip_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addDolcrawrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dol_grip_qty_wrap, dol_grip_uno_wrap, dol_grip_rt_wrap]);

    // function to calculate dolly crane grip all on change
    useEffect(() => {
        const addDolcraall = () => {
        setDolgripallTotal(parseFloat(dollycranegripTotal || 0) +
        parseFloat(dolgripprepTotal || 0) +
        parseFloat(dolgripwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addDolcraall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dollycranegripTotal, dolgripprepTotal, dolgripwrapTotal]);

    // swing grips
    // function to calculate swing grips shoot on change
    useEffect(() => {
      const addSwigri = () => {
      setSwinggripsTotal((parseFloat(swing_grips_qty || 0) * 
      parseFloat(swing_grips_uno || 0) * 
      parseFloat(swing_grips_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addSwigri();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [swing_grips_qty, swing_grips_uno, swing_grips_rt]);

    // function to calculate swing grips prep on change
    useEffect(() => {
        const addSwigriprep = () => {
        setSwigripsprepTotal((parseFloat(sw_grips_qty_prep || 0) * 
        parseFloat(sw_grips_uno_prep || 0) * 
        parseFloat(sw_grips_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSwigriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [sw_grips_qty_prep, sw_grips_uno_prep, sw_grips_rt_prep]);

    // function to calculate swing grips wrap on change
    useEffect(() => {
        const addSwigriwrap = () => {
        setSwigripswrapTotal((parseFloat(sw_grips_qty_wrap || 0) * 
        parseFloat(sw_grips_uno_wrap || 0) * 
        parseFloat(sw_grips_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSwigriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [sw_grips_qty_wrap, sw_grips_uno_wrap, sw_grips_rt_wrap]);

    // function to calculate swing grips all on change
    useEffect(() => {
        const addSwigriall = () => {
        setSwigripsallTotal(parseFloat(swinggripsTotal || 0) +
        parseFloat(swigripsprepTotal || 0) +
        parseFloat(swigripswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addSwigriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [swinggripsTotal, swigripsprepTotal, swigripswrapTotal]);

    // other grip labour
    // function to calculate other grip labour shoot on change
    useEffect(() => {
      const addOthgri = () => {
      setOthergriplabourTotal((parseFloat(other_grip_labour_qty || 0) * 
      parseFloat(other_grip_labour_uno || 0) * 
      parseFloat(other_grip_labour_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addOthgri();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [other_grip_labour_qty, other_grip_labour_uno, other_grip_labour_rt]);

    // function to calculate other grip labour prep on change
    useEffect(() => {
        const addOthgriprep = () => {
        setOthgripprepTotal((parseFloat(oth_grip_qty_prep || 0) * 
        parseFloat(oth_grip_uno_prep || 0) * 
        parseFloat(oth_grip_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthgriprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_grip_qty_prep, oth_grip_uno_prep, oth_grip_rt_prep]);

    // function to calculate other grip labour wrap on change
    useEffect(() => {
        const addOthgriwrap = () => {
        setOthgripwrapTotal((parseFloat(oth_grip_qty_wrap || 0) * 
        parseFloat(oth_grip_uno_wrap || 0) * 
        parseFloat(oth_grip_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthgriwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_grip_qty_wrap, oth_grip_uno_wrap, oth_grip_rt_wrap]);

    // function to calculate  other grip labour all on change
    useEffect(() => {
        const addOthgriall = () => {
        setOthgripallTotal(parseFloat(othergriplabourTotal || 0) +
        parseFloat(othgripprepTotal || 0) +
        parseFloat(othgripwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthgriall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [othergriplabourTotal, othgripprepTotal, othgripwrapTotal]);

    // function to calculate dailies grip on change
    useEffect(() => {
        const addDaigri = () => {
        setDailiesgripTotal((parseFloat(dailies_grip_qty || 0) * 
        parseFloat(dailies_grip_uno || 0) * 
        parseFloat(dailies_grip_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
          addDaigri();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [dailies_grip_qty, dailies_grip_uno, dailies_grip_rt]);

    // function to add all Grip Labour on change
    useEffect(() => {
      const AddGriLab = () => {
      setGriplabourTotal(
      parseFloat(kgripallTotal || 0) +
      parseFloat(bbgripallTotal || 0) +
      parseFloat(gripsallTotal || 0) +
      parseFloat(dolgripallTotal || 0) +
      parseFloat(swigripsallTotal || 0) +
      parseFloat(othgripallTotal || 0) +
      parseFloat(dailiesgripTotal || 0) +
      parseFloat(days6th7th_grip || 0) +
      parseFloat(overtime_grip || 0) +
      parseFloat(holidays_grip || 0) +
      parseFloat(box_rent_grip || 0) +
      parseFloat(other_solo_grip || 0) +
      parseFloat(fringes_taxes_grip || 0)
      )
      }
      const timer = setTimeout(() => {
        AddGriLab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
      }, [kgripallTotal, bbgripallTotal, gripsallTotal,
        dolgripallTotal, swigripsallTotal, othgripallTotal,
        dailiesgripTotal, days6th7th_grip, overtime_grip,
        holidays_grip, box_rent_grip, other_solo_grip,
        fringes_taxes_grip,]);
   
  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    GRIP LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2">
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>GRIP LABOUR</p>
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
    {/* Key Grip */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Key Grip</p>
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
    <Form.Group controlId="k_grip_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="k_grip_qty_prep"
        value={k_grip_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.k_grip_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="k_grip_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="k_grip_uno_prep"
        value={k_grip_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.k_grip_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="k_grip_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="k_grip_una_prep"
        value={k_grip_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.k_grip_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="k_grip_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="k_grip_rt_prep"
        value={k_grip_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.k_grip_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="kgripprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="kgripprepTotal"
        value={kgripprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.kgripprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="key_grip_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_grip_qty"
        value={key_grip_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_grip_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_grip_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_grip_uno"
        value={key_grip_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_grip_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_grip_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_grip_una"
        value={key_grip_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.key_grip_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_grip_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_grip_rt"
        value={key_grip_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_grip_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="keygripTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keygripTotal"
        value={keygripTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keygripTotal?.map((message, idx) => (
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
    <Form.Group controlId="k_grip_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="k_grip_qty_wrap"
        value={k_grip_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.k_grip_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="k_grip_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="k_grip_uno_wrap"
        value={k_grip_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.k_grip_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="k_grip_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="k_grip_una_wrap"
        value={k_grip_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.k_grip_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="k_grip_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="k_grip_rt_wrap"
        value={k_grip_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.k_grip_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="kgripwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="kgripwrapTotal"
        value={kgripwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.kgripwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="kgripallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="kgripallTotal"
        value={kgripallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.kgripallTotal?.map((message, idx) => (
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
    {/* Best Boy Grip */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Best Boy Grip</p>
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
    <Form.Group controlId="bb_grip_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bb_grip_qty_prep"
        value={bb_grip_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.bb_grip_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="bb_grip_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bb_grip_uno_prep"
        value={bb_grip_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.bb_grip_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="bb_grip_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bb_grip_una_prep"
        value={bb_grip_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.bb_grip_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="bb_grip_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bb_grip_rt_prep"
        value={bb_grip_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.bb_grip_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="bbgripprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bbgripprepTotal"
        value={bbgripprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.bbgripprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="best_boy_grip_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_grip_qty"
        value={best_boy_grip_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.best_boy_grip_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_grip_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_grip_uno"
        value={best_boy_grip_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.best_boy_grip_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_grip_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_grip_una"
        value={best_boy_grip_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.best_boy_grip_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="best_boy_grip_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="best_boy_grip_rt"
        value={best_boy_grip_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.best_boy_grip_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="bestboygripTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bestboygripTotal"
        value={bestboygripTotal}
        readOnly
            />
    </Form.Group>
    {errors?.bestboygripTotal?.map((message, idx) => (
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
    <Form.Group controlId="bb_grip_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bb_grip_qty_wrap"
        value={bb_grip_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.bb_grip_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="bb_grip_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bb_grip_uno_wrap"
        value={bb_grip_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.bb_grip_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="bb_grip_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bb_grip_una_wrap"
        value={bb_grip_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.bb_grip_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="bb_grip_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bb_grip_rt_wrap"
        value={bb_grip_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.bb_grip_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="bbgripwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bbgripwrapTotal"
        value={bbgripwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.bbgripwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="bbgripallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="bbgripallTotal"
        value={bbgripallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.bbgripallTotal?.map((message, idx) => (
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
    {/* Grips */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Grips</p>
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
    <Form.Group controlId="grips_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_qty_prep"
        value={grips_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_uno_prep"
        value={grips_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_una_prep"
        value={grips_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.grips_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_rt_prep"
        value={grips_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="gripsprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gripsprepTotal"
        value={gripsprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.gripsprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="grips_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_qty"
        value={grips_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_uno"
        value={grips_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_una"
        value={grips_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.grips_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_rt"
        value={grips_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="gripsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gripsTotal"
        value={gripsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.gripsTotal?.map((message, idx) => (
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
    <Form.Group controlId="grips_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_qty_wrap"
        value={grips_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_uno_wrap"
        value={grips_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_una_wrap"
        value={grips_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.grips_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="grips_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="grips_rt_wrap"
        value={grips_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.grips_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="gripswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gripswrapTotal"
        value={gripswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.gripswrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="gripsallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="gripsallTotal"
        value={gripsallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.gripsallTotal?.map((message, idx) => (
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
    {/* Dolly/Crane Grips */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Dolly/Crane Grips</p>
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
    <Form.Group controlId="dol_grip_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dol_grip_qty_prep"
        value={dol_grip_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dol_grip_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dol_grip_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dol_grip_uno_prep"
        value={dol_grip_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dol_grip_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dol_grip_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dol_grip_una_prep"
        value={dol_grip_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dol_grip_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dol_grip_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dol_grip_rt_prep"
        value={dol_grip_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dol_grip_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dolgripprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolgripprepTotal"
        value={dolgripprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dolgripprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="dolly_crane_grip_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolly_crane_grip_qty"
        value={dolly_crane_grip_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dolly_crane_grip_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dolly_crane_grip_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolly_crane_grip_uno"
        value={dolly_crane_grip_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dolly_crane_grip_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dolly_crane_grip_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolly_crane_grip_una"
        value={dolly_crane_grip_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dolly_crane_grip_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dolly_crane_grip_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolly_crane_grip_rt"
        value={dolly_crane_grip_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dolly_crane_grip_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dollycranegripTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dollycranegripTotal"
        value={dollycranegripTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dollycranegripTotal?.map((message, idx) => (
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
    <Form.Group controlId="dol_grip_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dol_grip_qty_wrap"
        value={dol_grip_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dol_grip_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dol_grip_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dol_grip_uno_wrap"
        value={dol_grip_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dol_grip_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dol_grip_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dol_grip_una_wrap"
        value={dol_grip_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dol_grip_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dol_grip_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dol_grip_rt_wrap"
        value={dol_grip_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dol_grip_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dolgripwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolgripwrapTotal"
        value={dolgripwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dolgripwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="dolgripallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dolgripallTotal"
        value={dolgripallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dolgripallTotal?.map((message, idx) => (
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
    {/* Swing Grips */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Swing Grips</p>
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
    <Form.Group controlId="sw_grips_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sw_grips_qty_prep"
        value={sw_grips_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sw_grips_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sw_grips_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sw_grips_uno_prep"
        value={sw_grips_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sw_grips_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sw_grips_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sw_grips_una_prep"
        value={sw_grips_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.sw_grips_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sw_grips_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sw_grips_rt_prep"
        value={sw_grips_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sw_grips_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="swigripsprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swigripsprepTotal"
        value={swigripsprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.swigripsprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="swing_grips_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_grips_qty"
        value={swing_grips_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.swing_grips_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_grips_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_grips_uno"
        value={swing_grips_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.swing_grips_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_grips_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_grips_una"
        value={swing_grips_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.swing_grips_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="swing_grips_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swing_grips_rt"
        value={swing_grips_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.swing_grips_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="swinggripsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swinggripsTotal"
        value={swinggripsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.swinggripsTotal?.map((message, idx) => (
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
    <Form.Group controlId="sw_grips_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sw_grips_qty_wrap"
        value={sw_grips_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sw_grips_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sw_grips_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sw_grips_uno_wrap"
        value={sw_grips_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sw_grips_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sw_grips_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sw_grips_una_wrap"
        value={sw_grips_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.sw_grips_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sw_grips_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sw_grips_rt_wrap"
        value={sw_grips_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sw_grips_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="swigripswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swigripswrapTotal"
        value={swigripswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.swigripswrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="swigripsallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="swigripsallTotal"
        value={swigripsallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.swigripsallTotal?.map((message, idx) => (
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
    {/* Other Grip Labour */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Other Grip Labour</p>
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
    <Form.Group controlId="oth_grip_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_grip_qty_prep"
        value={oth_grip_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_grip_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_grip_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_grip_uno_prep"
        value={oth_grip_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_grip_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_grip_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_grip_una_prep"
        value={oth_grip_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.oth_grip_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_grip_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_grip_rt_prep"
        value={oth_grip_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_grip_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othgripprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othgripprepTotal"
        value={othgripprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othgripprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="other_grip_labour_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_grip_labour_qty"
        value={other_grip_labour_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_grip_labour_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_grip_labour_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_grip_labour_uno"
        value={other_grip_labour_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_grip_labour_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_grip_labour_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_grip_labour_una"
        value={other_grip_labour_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_grip_labour_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_grip_labour_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_grip_labour_rt"
        value={other_grip_labour_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_grip_labour_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othergriplabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othergriplabourTotal"
        value={othergriplabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othergriplabourTotal?.map((message, idx) => (
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
    <Form.Group controlId="oth_grip_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_grip_qty_wrap"
        value={oth_grip_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_grip_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_grip_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_grip_uno_wrap"
        value={oth_grip_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_grip_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_grip_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_grip_una_wrap"
        value={oth_grip_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.oth_grip_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_grip_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_grip_rt_wrap"
        value={oth_grip_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_grip_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othgripwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othgripwrapTotal"
        value={othgripwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othgripwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="othgripallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othgripallTotal"
        value={othgripallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othgripallTotal?.map((message, idx) => (
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
    {/* Dailies - Grip */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>18.70</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Grip Dailies</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_grip_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_grip_qty"
        value={dailies_grip_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dailies_grip_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_grip_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_grip_uno"
        value={dailies_grip_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dailies_grip_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_grip_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_grip_una"
        value={dailies_grip_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dailies_grip_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dailies_grip_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailies_grip_rt"
        value={dailies_grip_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dailies_grip_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dailiesgripTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dailiesgripTotal"
        value={dailiesgripTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dailiesgripTotal?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>18.80</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_grip" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_grip"
        value={days6th7th_unit_grip}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_grip" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_grip"
        value={days6th7th_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_grip?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>18.90</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_grip" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_grip"
        value={overtime_unit_grip}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_grip" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_grip"
        value={overtime_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_grip?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>18.91</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_grip" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_grip"
        value={holidays_unit_grip}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_grip" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_grip"
        value={holidays_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_grip?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>18.92</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_grip" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_grip"
        value={box_rent_unit_grip}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_grip?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_grip" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_grip"
        value={box_rent_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_grip?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>18.93</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_solo_grip" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_solo_grip"
        value={other_solo_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_solo_grip?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>18.94</p>
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
    <Form.Group controlId="fringes_taxes_grip" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_grip"
        value={fringes_taxes_grip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_grip?.map((message, idx) => (
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
    {/* Grip Total */}
    <Row className="mt-3 pb-2">
    <Col md={1}></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>GRIP TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="griplabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="griplabourTotal"
        value={griplabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.griplabourTotal?.map((message, idx) => (
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

export default Grip