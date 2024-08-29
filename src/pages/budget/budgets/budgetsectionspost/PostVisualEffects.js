/* Component in the Budget component to edit Post Visual Effects */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const PostVisualEffects = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostVFX, setPostDataPostVFX,
  postVfxTotal, setPostVfxTotal, setShow,} = props;

  const {vfx_producer, vfx_supervisor, vfx_coordinator, vfx_post_other_lab,
    vfx_storyboard, vfx_pre_vis_team, vfx_post_vis_team, cyberscanning,
    vfx_rentals, vfx_purchases, vfx_vendor_1, vfx_vendor_2, vfx_vendor_3,
    vfx_vendor_4, vfx_vendor_5, vfx_vendor_6, vfx_vendor_7, vfx_vendor_8,
    vfx_vendor_9, vfx_vendor_10, vfx_vendors_x, vfx_traliv, vfx_expenses,
    miniatures_build, miniatures_shoot, motion_capture, lossdam_vfx,
    box_ren_vfx, fringes_taxes_vfx, other_post_vfx,
  } = postDataPostVFX;

  // handleChange
  const handleChange = (event) => {
    setPostDataPostVFX({
    ...postDataPostVFX,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
  }; 
  
  // function to add all Visual Effects on change
  useEffect(() => {
    const addPoVisef = () => {
        setPostVfxTotal(
        parseFloat(vfx_producer || 0) +
        parseFloat(vfx_supervisor || 0) +
        parseFloat(vfx_coordinator || 0) +
        parseFloat(vfx_post_other_lab || 0) +
        parseFloat(vfx_storyboard || 0) +
        parseFloat(vfx_pre_vis_team || 0) +
        parseFloat(vfx_post_vis_team || 0) +
        parseFloat(cyberscanning || 0) +
        parseFloat(vfx_rentals || 0) +
        parseFloat(vfx_purchases || 0) +
        parseFloat(vfx_vendor_1 || 0) +
        parseFloat(vfx_vendor_2 || 0) +
        parseFloat(vfx_vendor_3 || 0) +
        parseFloat(vfx_vendor_4 || 0) +
        parseFloat(vfx_vendor_5 || 0) +
        parseFloat(vfx_vendor_6 || 0) +
        parseFloat(vfx_vendor_7 || 0) +
        parseFloat(vfx_vendor_8 || 0) +
        parseFloat(vfx_vendor_9 || 0) +
        parseFloat(vfx_vendor_10 || 0) +
        parseFloat(vfx_vendors_x || 0) +
        parseFloat(miniatures_build || 0) +
        parseFloat(miniatures_shoot || 0) +
        parseFloat(motion_capture || 0) +
        parseFloat(vfx_expenses || 0) +
        parseFloat(vfx_traliv || 0) +
        parseFloat(box_ren_vfx || 0) +
        parseFloat(lossdam_vfx || 0) +
        parseFloat(fringes_taxes_vfx || 0) +
        parseFloat(other_post_vfx || 0)
       )
    }
    const timer = setTimeout(() => {
        addPoVisef();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
   // eslint-disable-next-line
  }, [vfx_producer, vfx_supervisor, vfx_coordinator, vfx_post_other_lab,
    vfx_storyboard, vfx_pre_vis_team, vfx_post_vis_team, cyberscanning,
    vfx_rentals, vfx_purchases, vfx_vendor_1, vfx_vendor_2, vfx_vendor_3,
    vfx_vendor_4, vfx_vendor_5, vfx_vendor_6, vfx_vendor_7, vfx_vendor_8,
    vfx_vendor_9, vfx_vendor_10, vfx_vendors_x, vfx_traliv, vfx_expenses,
    miniatures_build, miniatures_shoot, motion_capture, lossdam_vfx,
    box_ren_vfx, fringes_taxes_vfx, other_post_vfx,]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    POST PRODUCTION VISUAL EFFECTS SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>POST PRODUCTION VISUAL EFFECTS</p>
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
    {/* VFX Producer */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.10</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Producer</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_producer" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_producer"
        value={vfx_producer}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_producer?.map((message, idx) => (
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
    {/* VFX Supervisor */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.20</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Supervisor</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_supervisor" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_supervisor"
        value={vfx_supervisor}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_supervisor?.map((message, idx) => (
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
    {/* VFX Coordinator */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.30</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Coordinator</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_coordinator" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_coordinator"
        value={vfx_coordinator}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_coordinator?.map((message, idx) => (
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
    {/* VFX Storyboard */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.40</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Storyboard</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_storyboard" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_storyboard"
        value={vfx_storyboard}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_storyboard?.map((message, idx) => (
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
    {/* VFX Pre Vis Team */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.50</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Pre Vis Team</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_pre_vis_team" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_pre_vis_team"
        value={vfx_pre_vis_team}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_pre_vis_team?.map((message, idx) => (
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
    {/* VFX Post Vis Team */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Post Vis Team</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_post_vis_team" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_post_vis_team"
        value={vfx_post_vis_team}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_post_vis_team?.map((message, idx) => (
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
    {/* VFX Other Labour */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Other Labour</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_post_other_lab" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_post_other_lab"
        value={vfx_post_other_lab}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_post_other_lab?.map((message, idx) => (
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
    {/* Miniatures Build */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Miniatures Build</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="miniatures_build" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="miniatures_build"
        value={miniatures_build}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.miniatures_build?.map((message, idx) => (
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
    {/* Miniatures Shoot */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Miniatures Shoot</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="miniatures_shoot" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="miniatures_shoot"
        value={miniatures_shoot}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.miniatures_shoot?.map((message, idx) => (
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
    {/* Motion Capture */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Motion Capture</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="motion_capture" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="motion_capture"
        value={motion_capture}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.motion_capture?.map((message, idx) => (
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
    {/* Cyberscanning */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.92</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Cyberscanning</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="cyberscanning" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cyberscanning"
        value={cyberscanning}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cyberscanning?.map((message, idx) => (
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
    {/* VFX Rentals */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.93</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Rentals</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_rentals" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_rentals"
        value={vfx_rentals}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_rentals?.map((message, idx) => (
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
    {/* VFX Purchases */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.94</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Purchases</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_purchases" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_purchases"
        value={vfx_purchases}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_purchases?.map((message, idx) => (
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
    {/* VFX Vendor #1 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.95</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Vendor #1</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendor_1" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendor_1"
        value={vfx_vendor_1}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendor_1?.map((message, idx) => (
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
    {/* VFX Vendor #2 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.96</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Vendor #2</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendor_2" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendor_2"
        value={vfx_vendor_2}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendor_2?.map((message, idx) => (
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
    {/* VFX Vendor #3 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.97</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Vendor #3</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendor_3" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendor_3"
        value={vfx_vendor_3}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendor_3?.map((message, idx) => (
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
    {/* VFX Vendor #4 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.98</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Vendor #4</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendor_4" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendor_4"
        value={vfx_vendor_4}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendor_4?.map((message, idx) => (
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
    {/* VFX Vendor #5 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.99</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Vendor #5</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendor_5" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendor_5"
        value={vfx_vendor_5}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendor_5?.map((message, idx) => (
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
    {/* VFX Vendor #6 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.991</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Vendor #6</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendor_6" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendor_6"
        value={vfx_vendor_6}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendor_6?.map((message, idx) => (
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
    {/* VFX Vendor #7 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.992</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Vendor #7</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendor_7" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendor_7"
        value={vfx_vendor_7}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendor_7?.map((message, idx) => (
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
    {/* VFX Vendor #8 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.993</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Vendor #8</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendor_8" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendor_8"
        value={vfx_vendor_8}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendor_8?.map((message, idx) => (
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
    {/* VFX Vendor #9 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.994</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Vendor #9</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendor_9" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendor_9"
        value={vfx_vendor_9}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendor_9?.map((message, idx) => (
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
    {/* VFX Vendor #10 */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.995</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Vendor #10</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendor_10" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendor_10"
        value={vfx_vendor_10}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendor_10?.map((message, idx) => (
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
    {/* Other VFX Vendors Total */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.996</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other VFX Vendors Total</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_vendors_x" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_vendors_x"
        value={vfx_vendors_x}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_vendors_x?.map((message, idx) => (
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
    {/* VFX Expenses*/}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.997</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Expenses</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_expenses" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_expenses"
        value={vfx_expenses}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_expenses?.map((message, idx) => (
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
    {/* VFX Travel & Living */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.998</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Travel & Living</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_traliv" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_traliv"
        value={vfx_traliv}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_traliv?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>45.999</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Box Rentals</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_ren_vfx" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_ren_vfx"
        value={box_ren_vfx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_ren_vfx?.map((message, idx) => (
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
    {/* Loss/Damage */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>45.9991</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Loss/Damage</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="lossdam_vfx" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lossdam_vfx"
        value={lossdam_vfx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lossdam_vfx?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>45.9992</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_post_vfx" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_post_vfx"
        value={other_post_vfx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_post_vfx?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>45.9993</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_vfx" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_vfx"
        value={fringes_taxes_vfx}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_vfx?.map((message, idx) => (
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
    {/* VISUAL EFFECTS Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>VISUAL EFFECTS TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="postVfxTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postVfxTotal"
        value={postVfxTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postVfxTotal?.map((message, idx) => (
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

export default PostVisualEffects