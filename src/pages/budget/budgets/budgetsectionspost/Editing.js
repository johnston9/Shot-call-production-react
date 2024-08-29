/* Component in the Budget component to edit Editing */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Editing = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataEdit, setPostDataEdit,
         editorTotal, setEditorTotal,
         editorVfxTotal, setEditorVfxTotal,
         editorAssTotal, setEditorAssTotal,
         graderTotal, setGraderTotal, setShow,
         graphicsTotal, setGraphicsTotal,
  editingTotal, setEditingTotal,} = props;

  const {editor_qty, editor_uno, editor_una, editor_rt,
    editor_vfx_qty, editor_vfx_uno, editor_vfx_una, editor_vfx_rt,
    editor_ass_qty, editor_ass_uno, editor_ass_una, editor_ass_rt,
    colorist_grader_qty, colorist_grader_uno, colorist_grader_una, colorist_grader_rt,
    graphics_qty, graphics_uno, graphics_una, graphics_rt,
    edit_rooms, edit_equip, edit_equip_nonlin, online,
    vfx_ed_system, post_edit_pur, lossdam_edit, fringes_taxes_post_edit,
  other_post_edit,} = postDataEdit;

  // handleChange 
  const handleChange = (event) => {
    setPostDataEdit({
    ...postDataEdit,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
  };

  // handleChange Text 
  const handleChangeText = (event) => {
    setPostDataEdit({
    ...postDataEdit,
    [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // function to calculate Editor on change
  useEffect(() => {
    const addEditor = () => {
    setEditorTotal((parseFloat(editor_qty || 0) * 
    parseFloat(editor_uno || 0) * 
    parseFloat(editor_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addEditor();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_qty, editor_uno, editor_rt]);

  // function to calculate VFX Editor on change
  useEffect(() => {
    const addEdivfx = () => {
    setEditorVfxTotal((parseFloat(editor_vfx_qty || 0) * 
    parseFloat(editor_vfx_uno || 0) * 
    parseFloat(editor_vfx_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addEdivfx();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_vfx_qty, editor_vfx_uno, editor_vfx_rt]);

  // function to calculate Assistant Editor on change
  useEffect(() => {
    const addEdiass = () => {
    setEditorAssTotal((parseFloat(editor_ass_qty || 0) * 
    parseFloat(editor_ass_uno || 0) * 
    parseFloat(editor_ass_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addEdiass();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_ass_qty, editor_ass_uno, editor_ass_rt]);

  // function to calculate Grader on change
  useEffect(() => {
    const addGrader = () => {
    setGraderTotal((parseFloat(colorist_grader_qty || 0) * 
    parseFloat(colorist_grader_uno || 0) * 
    parseFloat(colorist_grader_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addGrader();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [colorist_grader_qty, colorist_grader_uno, colorist_grader_rt]);

  // function to calculate Graphics on change
  useEffect(() => {
    const addGraphics = () => {
    setGraphicsTotal((parseFloat(graphics_qty || 0) * 
    parseFloat(graphics_uno || 0) * 
    parseFloat(graphics_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addGraphics();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [graphics_qty, graphics_uno, graphics_rt]);

  // function to add all Editing on change
  useEffect(() => {
    const AddEditing = () => {
    setEditingTotal(
    parseFloat(editorTotal || 0) +
    parseFloat(editorVfxTotal || 0) +
    parseFloat(editorAssTotal || 0) +
    parseFloat(graderTotal || 0) +
    parseFloat(graphicsTotal || 0) +
    parseFloat(edit_rooms || 0) +
    parseFloat(edit_equip || 0) +
    parseFloat(edit_equip_nonlin || 0) +
    parseFloat(online || 0) +
    parseFloat(vfx_ed_system || 0) +
    parseFloat(post_edit_pur || 0) +
    parseFloat(lossdam_edit || 0) +
    parseFloat(fringes_taxes_post_edit || 0) +
    parseFloat(other_post_edit || 0)
    )
    }
    const timer = setTimeout(() => {
        AddEditing();
    }, 1000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
    }, [editorTotal, editorVfxTotal, editorAssTotal,
        graderTotal, graphicsTotal, other_post_edit,
        edit_rooms, edit_equip, edit_equip_nonlin, online,
        vfx_ed_system, post_edit_pur, lossdam_edit, fringes_taxes_post_edit,]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    EDITING SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>EDITING</p>
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
    {/* Film/Video Editors */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.10</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Film/Video Editors</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_qty"
        value={editor_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_uno"
        value={editor_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_una"
        value={editor_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.editor_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_rt"
        value={editor_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="editorTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editorTotal"
        value={editorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.editorTotal?.map((message, idx) => (
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
    {/* VFX Editors */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.20</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>VFX Editors</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_vfx_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_vfx_qty"
        value={editor_vfx_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_vfx_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_vfx_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_vfx_uno"
        value={editor_vfx_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_vfx_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_vfx_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_vfx_una"
        value={editor_vfx_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.editor_vfx_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_vfx_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_vfx_rt"
        value={editor_vfx_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_vfx_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="editorVfxTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editorVfxTotal"
        value={editorVfxTotal}
        readOnly
            />
    </Form.Group>
    {errors?.editorVfxTotal?.map((message, idx) => (
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
    {/* Assistant Editors */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.30</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Assistant Editors</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_ass_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_ass_qty"
        value={editor_ass_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_ass_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_ass_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_ass_uno"
        value={editor_ass_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_ass_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_ass_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_ass_una"
        value={editor_ass_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.editor_ass_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_ass_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_ass_rt"
        value={editor_ass_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_ass_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="editorAssTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editorAssTotal"
        value={editorAssTotal}
        readOnly
            />
    </Form.Group>
    {errors?.editorAssTotal?.map((message, idx) => (
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
    {/* Colorist/Grader */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.40</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Colorist Grader</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="colorist_grader_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="colorist_grader_qty"
        value={colorist_grader_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.colorist_grader_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="colorist_grader_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="colorist_grader_uno"
        value={colorist_grader_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.colorist_grader_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="colorist_grader_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="colorist_grader_una"
        value={colorist_grader_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.colorist_grader_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="colorist_grader_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="colorist_grader_rt"
        value={colorist_grader_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.colorist_grader_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="graderTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graderTotal"
        value={graderTotal}
        readOnly
            />
    </Form.Group>
    {errors?.graderTotal?.map((message, idx) => (
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
    {/* Graphics */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.50</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Graphics</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphics_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphics_qty"
        value={graphics_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.graphics_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphics_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphics_uno"
        value={graphics_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.graphics_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphics_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphics_una"
        value={graphics_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.graphics_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="graphics_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphics_rt"
        value={graphics_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.graphics_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="graphicsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="graphicsTotal"
        value={graphicsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.graphicsTotal?.map((message, idx) => (
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
    {/* Editing Rooms */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.60</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Editing Rooms</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="edit_rooms" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="edit_rooms"
        value={edit_rooms}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.edit_rooms?.map((message, idx) => (
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
    {/* Editing Equipment */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Editing Equipment</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="edit_equip" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="edit_equip"
        value={edit_equip}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.edit_equip?.map((message, idx) => (
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
    {/* Editing Equipment Offline */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Editing Equipment Offline</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="edit_equip_nonlin" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="edit_equip_nonlin"
        value={edit_equip_nonlin}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.edit_equip_nonlin?.map((message, idx) => (
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
    {/* Editing Equipment Online */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Editing Equipment Online</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="online" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="online"
        value={online}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.online?.map((message, idx) => (
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
    {/* VFX Editing System */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>VFX Editing System</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="vfx_ed_system" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vfx_ed_system"
        value={vfx_ed_system}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vfx_ed_system?.map((message, idx) => (
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
    {/* Editing Purchases */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.92</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Editing Purchases</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_edit_pur" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_edit_pur"
        value={post_edit_pur}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_edit_pur?.map((message, idx) => (
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
    {/* Loss/Damage Editing */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>43.93</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Loss/Damage</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="lossdam_edit" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lossdam_edit"
        value={lossdam_edit}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lossdam_edit?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>43.94</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other - incl. 6th/7th Days, Overtime and Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_post_edit" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_post_edit"
        value={other_post_edit}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_post_edit?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>43.95</p>
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
    <Form.Group controlId="fringes_taxes_post_edit" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_post_edit"
        value={fringes_taxes_post_edit}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_post_edit?.map((message, idx) => (
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
    {/* EDITING Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>EDITING TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="editingTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editingTotal"
        value={editingTotal}
        readOnly
            />
    </Form.Group>
    {errors?.editingTotal?.map((message, idx) => (
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

export default Editing