/* Component in the Budget component to edit Sound */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Sound = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataSoundPro, setPostDataSoundPro,
      soundmixerTotal, setSoundmixerTotal,
      boomoperatorTotal, setBoomoperatorTotal,
      cablewranglerTotal, setCablewranglerTotal, setShow,
      othersoundlabourTotal, setOthersoundlabourTotal,
      soundlabourTotal, setSoundlabourTotal,
      somixprepTotal, setSomixprepTotal,
      somixwrapTotal, setSomixwrapTotal,
      somixallTotal, setSomixallTotal,
      boomopprepTotal, setBoomopprepTotal,
      boomopwrapTotal, setBoomopwrapTotal,
      boomopallTotal, setBoomopallTotal,
      cawranprepTotal, setCawranprepTotal,
      cawranwrapTotal, setCawranwrapTotal,
      cawranallTotal, setCawranallTotal,
      otsoundprepTotal, setOtsoundprepTotal,
      otsoundwrapTotal, setOtsoundwrapTotal,
      otsoundallTotal, setOtsoundallTotal,
    } = props;

    const {days6th7th_unit_sound, days6th7th_sound, 
        overtime_unit_sound, overtime_sound, holidays_unit_sound, holidays_sound,
        box_rent_unit_sound, box_rent_sound, other_solo_sound,
        so_mix_qty_prep, so_mix_uno_prep, so_mix_una_prep, so_mix_rt_prep,
        so_mix_qty_wrap, so_mix_uno_wrap, so_mix_una_wrap, so_mix_rt_wrap,
        boom_op_qty_prep, boom_op_uno_prep, boom_op_una_prep, boom_op_rt_prep,
        boom_op_qty_wrap, boom_op_uno_wrap, boom_op_una_wrap, boom_op_rt_wrap,
        cab_wran_qty_prep, cab_wran_uno_prep, cab_wran_una_prep, cab_wran_rt_prep,
        cab_wran_qty_wrap, cab_wran_uno_wrap, cab_wran_una_wrap, cab_wran_rt_wrap,
        ot_sound_qty_prep, ot_sound_uno_prep, ot_sound_una_prep, ot_sound_rt_prep,
        ot_sound_qty_wrap, ot_sound_uno_wrap, ot_sound_una_wrap, ot_sound_rt_wrap,
      sound_mixer_qty, sound_mixer_uno,
      sound_mixer_una, sound_mixer_rt,
      boom_operator_qty, boom_operator_uno,
      boom_operator_una, boom_operator_rt,
      cable_wrangler_qty, cable_wrangler_uno,
      cable_wrangler_una, cable_wrangler_rt,
      other_sound_labour_qty, other_sound_labour_uno,
      other_sound_labour_una, other_sound_labour_rt,
      fringes_taxes_sound,} = postDataSoundPro;

    // handleChange 
    const handleChange = (event) => {
      setPostDataSoundPro({
      ...postDataSoundPro,
      [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
      });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
      setPostDataSoundPro({
    ...postDataSoundPro,
    [event.target.name]: event.target.value,
    });
    };

    // Calculate Functions

    // Sound Mixer
    // function to calculate Sound Mixer shoot on change
    useEffect(() => {
      const addSoumix = () => {
      setSoundmixerTotal((parseFloat(sound_mixer_qty || 0) * 
      parseFloat(sound_mixer_uno || 0) * 
      parseFloat(sound_mixer_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addSoumix();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [sound_mixer_qty, sound_mixer_uno, sound_mixer_rt]);

    // function to calculate Sound Mixer prep on change
    useEffect(() => {
        const addSoumixprep = () => {
        setSomixprepTotal((parseFloat(so_mix_qty_prep || 0) * 
        parseFloat(so_mix_uno_prep || 0) * 
        parseFloat(so_mix_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSoumixprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [so_mix_qty_prep, so_mix_uno_prep, so_mix_rt_prep]);

    // function to calculate Sound Mixer wrap on change
    useEffect(() => {
        const addSoumixwrap = () => {
        setSomixwrapTotal((parseFloat(so_mix_qty_wrap || 0) * 
        parseFloat(so_mix_uno_wrap || 0) * 
        parseFloat(so_mix_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSoumixwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [so_mix_qty_wrap, so_mix_uno_wrap, so_mix_rt_wrap]);

    // function to calculate Sound Mixer all on change
    useEffect(() => {
        const addSoumixall = () => {
        setSomixallTotal(parseFloat(soundmixerTotal || 0) +
        parseFloat(somixprepTotal || 0) +
        parseFloat(somixwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addSoumixall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [soundmixerTotal, somixprepTotal, somixwrapTotal]);

    // Boom Operator
    // function to calculate Boom Operator shoot on change
    useEffect(() => {
      const addBooope = () => {
      setBoomoperatorTotal((parseFloat(boom_operator_qty || 0) * 
      parseFloat(boom_operator_uno || 0) * 
      parseFloat(boom_operator_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addBooope();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [boom_operator_qty, boom_operator_uno, boom_operator_rt]);

    // function to calculate Boom Operator prep on change
    useEffect(() => {
        const addBooopprep = () => {
        setBoomopprepTotal((parseFloat(boom_op_qty_prep || 0) * 
        parseFloat(boom_op_uno_prep || 0) * 
        parseFloat(boom_op_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addBooopprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [boom_op_qty_prep, boom_op_uno_prep, boom_op_rt_prep]);

    // function to calculate Boom Operator wrap on change
    useEffect(() => {
        const addBooopwrap = () => {
        setBoomopwrapTotal((parseFloat(boom_op_qty_wrap || 0) * 
        parseFloat(boom_op_uno_wrap || 0) * 
        parseFloat(boom_op_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addBooopwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [boom_op_qty_wrap, boom_op_uno_wrap, boom_op_rt_wrap]);

    // function to calculate Boom Operator all on change
    useEffect(() => {
        const addBooopall = () => {
        setBoomopallTotal(parseFloat(boomoperatorTotal || 0) +
        parseFloat(boomopprepTotal || 0) +
        parseFloat(boomopwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addBooopall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [boomoperatorTotal, boomopprepTotal, boomopwrapTotal]);

    // Cable Wrangler
    // function to calculate Cable Wrangler shoot on change
    useEffect(() => {
      const addCabwra = () => {
      setCablewranglerTotal((parseFloat(cable_wrangler_qty || 0) * 
      parseFloat(cable_wrangler_uno || 0) * 
      parseFloat(cable_wrangler_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addCabwra();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [cable_wrangler_qty, cable_wrangler_uno, cable_wrangler_rt]);

    // function to calculate Cable Wrangler prep on change
    useEffect(() => {
        const addCabwraprep = () => {
        setCawranprepTotal((parseFloat(cab_wran_qty_prep || 0) * 
        parseFloat(cab_wran_uno_prep || 0) * 
        parseFloat(cab_wran_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCabwraprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cab_wran_qty_prep, cab_wran_uno_prep, cab_wran_rt_prep]);

    // function to calculate Cable Wrangler wrap on change
    useEffect(() => {
        const addCabwrawrap = () => {
        setCawranwrapTotal((parseFloat(cab_wran_qty_wrap || 0) * 
        parseFloat(cab_wran_uno_wrap || 0) * 
        parseFloat(cab_wran_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCabwrawrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cab_wran_qty_wrap, cab_wran_uno_wrap, cab_wran_rt_wrap]);

    // function to calculate Cable Wrangler all on change
    useEffect(() => {
        const addCabwraall = () => {
        setCawranallTotal(parseFloat(cablewranglerTotal || 0) +
        parseFloat(cawranprepTotal || 0) +
        parseFloat(cawranwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addCabwraall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cablewranglerTotal, cawranprepTotal, cawranwrapTotal]);

    // Other Sound Labour
    // function to calculate Other Sound Labour shoot on change
    useEffect(() => {
      const addOthsou = () => {
      setOthersoundlabourTotal((parseFloat(other_sound_labour_qty || 0) * 
      parseFloat(other_sound_labour_uno || 0) * 
      parseFloat(other_sound_labour_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addOthsou();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [other_sound_labour_qty, other_sound_labour_uno, other_sound_labour_rt]);

    // function to calculate Other Sound Labour prep on change
    useEffect(() => {
        const addOthsouprep = () => {
        setOtsoundprepTotal((parseFloat(ot_sound_qty_prep || 0) * 
        parseFloat(ot_sound_uno_prep || 0) * 
        parseFloat(ot_sound_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthsouprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ot_sound_qty_prep, ot_sound_uno_prep, ot_sound_rt_prep]);

    // function to calculate Other Sound Labour wrap on change
    useEffect(() => {
        const addOthsouwrap = () => {
        setOtsoundwrapTotal((parseFloat(ot_sound_qty_wrap || 0) * 
        parseFloat(ot_sound_uno_wrap || 0) * 
        parseFloat(ot_sound_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthsouwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ot_sound_qty_wrap, ot_sound_uno_wrap, ot_sound_rt_wrap]);

    // function to calculate Other Sound Labour all on change
    useEffect(() => {
        const addOthsouall = () => {
        setOtsoundallTotal(parseFloat(othersoundlabourTotal || 0) +
        parseFloat(otsoundprepTotal || 0) +
        parseFloat(otsoundwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthsouall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [othersoundlabourTotal, otsoundprepTotal, otsoundwrapTotal]);

    // function to add all Sound Labour on change
    useEffect(() => {
      const AddSouLab = () => {
      setSoundlabourTotal(
      parseFloat(somixallTotal || 0) +
      parseFloat(boomopallTotal || 0) +
      parseFloat(cawranallTotal || 0) +
      parseFloat(otsoundallTotal || 0) +
      parseFloat(days6th7th_sound || 0) +
      parseFloat(overtime_sound || 0) +
      parseFloat(holidays_sound || 0) +
      parseFloat(box_rent_sound || 0) +
      parseFloat(other_solo_sound || 0) +
      parseFloat(fringes_taxes_sound || 0)
      )
      }
      const timer = setTimeout(() => {
        AddSouLab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
      }, [somixallTotal, boomopallTotal, cawranallTotal,
        otsoundallTotal, days6th7th_sound, overtime_sound,
        holidays_sound, box_rent_sound, other_solo_sound,
        fringes_taxes_sound,]);
    
  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    PRODUCTION SOUND LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2">
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>PRODUCTION SOUND LABOUR</p>
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
    {/* Sound Mixer */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Sound Mixer</p>
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
    <Form.Group controlId="so_mix_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="so_mix_qty_prep"
        value={so_mix_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.so_mix_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="so_mix_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="so_mix_uno_prep"
        value={so_mix_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.so_mix_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="so_mix_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="so_mix_una_prep"
        value={so_mix_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.so_mix_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="so_mix_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="so_mix_rt_prep"
        value={so_mix_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.so_mix_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="somixprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="somixprepTotal"
        value={somixprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.somixprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="sound_mixer_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_qty"
        value={sound_mixer_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_mixer_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_uno"
        value={sound_mixer_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_mixer_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_una"
        value={sound_mixer_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.sound_mixer_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_mixer_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_mixer_rt"
        value={sound_mixer_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_mixer_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="soundmixerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="soundmixerTotal"
        value={soundmixerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.soundmixerTotal?.map((message, idx) => (
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
    <Form.Group controlId="so_mix_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="so_mix_qty_wrap"
        value={so_mix_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.so_mix_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="so_mix_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="so_mix_uno_wrap"
        value={so_mix_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.so_mix_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="so_mix_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="so_mix_una_wrap"
        value={so_mix_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.so_mix_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="so_mix_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="so_mix_rt_wrap"
        value={so_mix_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.so_mix_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="somixwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="somixwrapTotal"
        value={somixwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.somixwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="somixallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="somixallTotal"
        value={somixallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.somixallTotal?.map((message, idx) => (
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
    {/* Boom Operator */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Boom Operator</p>
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
    <Form.Group controlId="boom_op_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_op_qty_prep"
        value={boom_op_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_op_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_op_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_op_uno_prep"
        value={boom_op_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_op_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_op_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_op_una_prep"
        value={boom_op_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.boom_op_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_op_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_op_rt_prep"
        value={boom_op_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_op_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="boomopprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boomopprepTotal"
        value={boomopprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.boomopprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="boom_operator_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_operator_qty"
        value={boom_operator_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_operator_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_operator_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_operator_uno"
        value={boom_operator_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_operator_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_operator_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_operator_una"
        value={boom_operator_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.boom_operator_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_operator_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_operator_rt"
        value={boom_operator_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_operator_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="boomoperatorTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boomoperatorTotal"
        value={boomoperatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.boomoperatorTotal?.map((message, idx) => (
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
    <Form.Group controlId="boom_op_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_op_qty_wrap"
        value={boom_op_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_op_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_op_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_op_uno_wrap"
        value={boom_op_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_op_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_op_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_op_una_wrap"
        value={boom_op_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.boom_op_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boom_op_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boom_op_rt_wrap"
        value={boom_op_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boom_op_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="boomopwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boomopwrapTotal"
        value={boomopwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.boomopwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="boomopallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boomopallTotal"
        value={boomopallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.boomopallTotal?.map((message, idx) => (
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
    {/* Cable Wrangler */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Cable Wrangler</p>
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
    <Form.Group controlId="cab_wran_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cab_wran_qty_prep"
        value={cab_wran_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cab_wran_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cab_wran_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cab_wran_uno_prep"
        value={cab_wran_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cab_wran_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cab_wran_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cab_wran_una_prep"
        value={cab_wran_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cab_wran_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cab_wran_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cab_wran_rt_prep"
        value={cab_wran_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cab_wran_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="cawranprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cawranprepTotal"
        value={cawranprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cawranprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="cable_wrangler_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cable_wrangler_qty"
        value={cable_wrangler_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cable_wrangler_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cable_wrangler_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cable_wrangler_uno"
        value={cable_wrangler_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cable_wrangler_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cable_wrangler_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cable_wrangler_una"
        value={cable_wrangler_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cable_wrangler_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cable_wrangler_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cable_wrangler_rt"
        value={cable_wrangler_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cable_wrangler_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="cablewranglerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cablewranglerTotal"
        value={cablewranglerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cablewranglerTotal?.map((message, idx) => (
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
    <Form.Group controlId="cab_wran_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cab_wran_qty_wrap"
        value={cab_wran_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cab_wran_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cab_wran_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cab_wran_uno_wrap"
        value={cab_wran_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cab_wran_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cab_wran_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cab_wran_una_wrap"
        value={cab_wran_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cab_wran_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cab_wran_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cab_wran_rt_wrap"
        value={cab_wran_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cab_wran_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="cawranwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cawranwrapTotal"
        value={cawranwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cawranwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="cawranallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cawranallTotal"
        value={cawranallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cawranallTotal?.map((message, idx) => (
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
    {/* Other Sound Labour */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>19.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Other Sound Labour</p>
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
    <Form.Group controlId="ot_sound_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_sound_qty_prep"
        value={ot_sound_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_sound_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_sound_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_sound_uno_prep"
        value={ot_sound_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_sound_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_sound_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_sound_una_prep"
        value={ot_sound_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ot_sound_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_sound_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_sound_rt_prep"
        value={ot_sound_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_sound_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otsoundprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otsoundprepTotal"
        value={otsoundprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otsoundprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="other_sound_labour_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_sound_labour_qty"
        value={other_sound_labour_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_sound_labour_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_sound_labour_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_sound_labour_uno"
        value={other_sound_labour_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_sound_labour_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_sound_labour_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_sound_labour_una"
        value={other_sound_labour_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_sound_labour_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_sound_labour_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_sound_labour_rt"
        value={other_sound_labour_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_sound_labour_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othersoundlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othersoundlabourTotal"
        value={othersoundlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othersoundlabourTotal?.map((message, idx) => (
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
    <Form.Group controlId="ot_sound_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_sound_qty_wrap"
        value={ot_sound_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_sound_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_sound_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_sound_uno_wrap"
        value={ot_sound_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_sound_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_sound_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_sound_una_wrap"
        value={ot_sound_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ot_sound_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_sound_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_sound_rt_wrap"
        value={ot_sound_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_sound_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otsoundwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otsoundwrapTotal"
        value={otsoundwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otsoundwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="otsoundallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otsoundallTotal"
        value={otsoundallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otsoundallTotal?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>19.50</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_sound" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_sound"
        value={days6th7th_unit_sound}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_sound?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_sound" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_sound"
        value={days6th7th_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_sound?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>19.60</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_sound" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_sound"
        value={overtime_unit_sound}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_sound?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_sound" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_sound"
        value={overtime_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_sound?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>19.70</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_sound" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_sound"
        value={holidays_unit_sound}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_sound?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_sound" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_sound"
        value={holidays_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_sound?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>19.80</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_sound" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_sound"
        value={box_rent_unit_sound}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_sound?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_sound" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_sound"
        value={box_rent_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_sound?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>19.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_solo_sound" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_solo_sound"
        value={other_solo_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_solo_sound?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>19.91</p>
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
    <Form.Group controlId="fringes_taxes_sound" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_sound"
        value={fringes_taxes_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_sound?.map((message, idx) => (
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
    {/* Sound Total */}
    <Row className="mt-3 pb-2">
    <Col md={1}></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>PRODUCTION SOUND TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="soundlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="soundlabourTotal"
        value={soundlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.soundlabourTotal?.map((message, idx) => (
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

export default Sound