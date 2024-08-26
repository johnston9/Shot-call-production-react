/* Component in the Budget component to edit Post Sound */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Postsound = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataPostSound, setPostDataPostSound,
         desSoundTotal, setDesSoundTotal,
         editorSoundTotal, setEditorSoundTotal,
         editorMusicTotal, setEditorMusicTotal,
         soundEdAssTotal, setSoundEdAssTotal,
         adrSupTotal, setAdrSupTotal,
         folLabTotal, setFolLabTotal, setShow,
         postSoundTotal, setPostSoundTotal,
  } = props;

  const {sound_designer_qty, sound_designer_uno, sound_designer_una, sound_designer_rt,
    editor_sound_qty, editor_sound_uno, editor_sound_una, editor_sound_rt,
    editor_music_qty, editor_music_uno, editor_music_una, editor_music_rt,
    ed_sound_ass_qty, ed_sound_ass_uno, ed_sound_ass_una, ed_sound_ass_rt,
    adr_super_qty, adr_super_uno, adr_super_una, adr_super_rt,
    foley_labour_qty, foley_labour_uno, foley_labour_una, foley_labour_rt,
    sound_edit_rooms, sound_edit_equ, music_edit_equ,
    post_sound_edit_pur, adr, foley, pre_mix, mix, printmaster, transfers_deliverables,
    lossdam_sound, fringes_taxes_post_sound, other_post_sound,
  } = postDataPostSound;

  // handleChange
  const handleChange = (event) => {
    setPostDataPostSound({
    ...postDataPostSound,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
  }; 

  // handleChange Text 
  const handleChangeText = (event) => {
    setPostDataPostSound({
    ...postDataPostSound,
    [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions
  // function to calculate Sound Designer on change
  useEffect(() => {
    const addSoudes = () => {
    setDesSoundTotal((parseFloat(sound_designer_qty || 0) * 
    parseFloat(sound_designer_uno || 0) * 
    parseFloat(sound_designer_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addSoudes();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [sound_designer_qty, sound_designer_uno, sound_designer_rt]);

  // function to calculate Sound Editor on change
  useEffect(() => {
    const addSouedi = () => {
    setEditorSoundTotal((parseFloat(editor_sound_qty || 0) * 
    parseFloat(editor_sound_uno || 0) * 
    parseFloat(editor_sound_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addSouedi();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_sound_qty, editor_sound_uno, editor_sound_rt]);

  // function to calculate Music Editor on change
  useEffect(() => {
    const addMusedi = () => {
    setEditorMusicTotal((parseFloat(editor_music_qty || 0) * 
    parseFloat(editor_music_uno || 0) * 
    parseFloat(editor_music_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addMusedi();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [editor_music_qty, editor_music_uno, editor_music_rt]);

  // function to calculate Assistant Sound Editor on change
  useEffect(() => {
    const addAsssouedi = () => {
    setSoundEdAssTotal((parseFloat(ed_sound_ass_qty || 0) * 
    parseFloat(ed_sound_ass_uno || 0) * 
    parseFloat(ed_sound_ass_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addAsssouedi();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [ed_sound_ass_qty, ed_sound_ass_uno, ed_sound_ass_rt]);

  // function to calculate ADR Supervisor on change
  useEffect(() => {
    const addAdrsup = () => {
    setAdrSupTotal((parseFloat(adr_super_qty || 0) * 
    parseFloat(adr_super_uno || 0) * 
    parseFloat(adr_super_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addAdrsup();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [adr_super_qty, adr_super_uno, adr_super_rt]);

  // function to calculate Foley Labour on change
  useEffect(() => {
    const addFollabo = () => {
    setFolLabTotal((parseFloat(foley_labour_qty || 0) * 
    parseFloat(foley_labour_uno || 0) * 
    parseFloat(foley_labour_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addFollabo();
    }, 2000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [foley_labour_qty, foley_labour_uno, foley_labour_rt]);

  // function to add all Post Sound on change
  useEffect(() => {
    const AddPostSou = () => {
    setPostSoundTotal(
    parseFloat(desSoundTotal || 0) +
    parseFloat(editorSoundTotal || 0) +
    parseFloat(editorMusicTotal || 0) +
    parseFloat(soundEdAssTotal || 0) +
    parseFloat(adrSupTotal || 0) +
    parseFloat(folLabTotal || 0) +
    parseFloat(sound_edit_rooms || 0) +
    parseFloat(sound_edit_equ || 0) +
    parseFloat(music_edit_equ || 0) +
    parseFloat(post_sound_edit_pur || 0) +
    parseFloat(adr || 0) +
    parseFloat(foley || 0) +
    parseFloat(pre_mix || 0) +
    parseFloat(mix || 0) +
    parseFloat(printmaster || 0) +
    parseFloat(transfers_deliverables || 0) +
    parseFloat(lossdam_sound || 0) +
    parseFloat(fringes_taxes_post_sound || 0) +
    parseFloat(other_post_sound || 0)
    )
    }
    const timer = setTimeout(() => {
        AddPostSou();
    }, 1000);

    return () => {
    clearTimeout(timer);
    };
    // eslint-disable-next-line
    }, [desSoundTotal, editorSoundTotal, editorMusicTotal,
        soundEdAssTotal, adrSupTotal, folLabTotal,
        sound_edit_rooms, sound_edit_equ, music_edit_equ,
        post_sound_edit_pur, adr, foley, pre_mix, mix, printmaster, transfers_deliverables,
        lossdam_sound, fringes_taxes_post_sound, other_post_sound,]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    POST PRODUCTION SOUND SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>POST PRODUCTION SOUND</p>
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
    {/* Sound Designer */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.10</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Sound Designer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_designer_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_designer_qty"
        value={sound_designer_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_designer_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_designer_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_designer_uno"
        value={sound_designer_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_designer_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_designer_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_designer_una"
        value={sound_designer_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.sound_designer_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sound_designer_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_designer_rt"
        value={sound_designer_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_designer_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="desSoundTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="desSoundTotal"
        value={desSoundTotal}
        readOnly
            />
    </Form.Group>
    {errors?.desSoundTotal?.map((message, idx) => (
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
    {/* Sound Editor */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.20</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Sound Editor</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_sound_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_sound_qty"
        value={editor_sound_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_sound_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_sound_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_sound_uno"
        value={editor_sound_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_sound_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_sound_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_sound_una"
        value={editor_sound_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.editor_sound_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_sound_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_sound_rt"
        value={editor_sound_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_sound_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="editorSoundTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editorSoundTotal"
        value={editorSoundTotal}
        readOnly
            />
    </Form.Group>
    {errors?.editorSoundTotal?.map((message, idx) => (
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
    {/* Music Editor */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.30</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Music Editor</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_music_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_music_qty"
        value={editor_music_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_music_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_music_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_music_uno"
        value={editor_music_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_music_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_music_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_music_una"
        value={editor_music_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.editor_music_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="editor_music_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editor_music_rt"
        value={editor_music_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.editor_music_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="editorMusicTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="editorMusicTotal"
        value={editorMusicTotal}
        readOnly
            />
    </Form.Group>
    {errors?.editorMusicTotal?.map((message, idx) => (
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
    {/* Assistant Sound Editors */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.40</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Assistant Sound Editors</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ed_sound_ass_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ed_sound_ass_qty"
        value={ed_sound_ass_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ed_sound_ass_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ed_sound_ass_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ed_sound_ass_uno"
        value={ed_sound_ass_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ed_sound_ass_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ed_sound_ass_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ed_sound_ass_una"
        value={ed_sound_ass_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ed_sound_ass_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ed_sound_ass_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ed_sound_ass_rt"
        value={ed_sound_ass_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ed_sound_ass_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="soundEdAssTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="soundEdAssTotal"
        value={soundEdAssTotal}
        readOnly
            />
    </Form.Group>
    {errors?.soundEdAssTotal?.map((message, idx) => (
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
    {/* ADR Supervisor */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.50</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>ADR Supervisor</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="adr_super_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="adr_super_qty"
        value={adr_super_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.adr_super_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="adr_super_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="adr_super_uno"
        value={adr_super_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.adr_super_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="adr_super_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="adr_super_una"
        value={adr_super_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.adr_super_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="adr_super_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="adr_super_rt"
        value={adr_super_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.adr_super_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="adrSupTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="adrSupTotal"
        value={adrSupTotal}
        readOnly
            />
    </Form.Group>
    {errors?.adrSupTotal?.map((message, idx) => (
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
    {/* Foley Labour */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.60</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Foley Labour</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="foley_labour_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="foley_labour_qty"
        value={foley_labour_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.foley_labour_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="foley_labour_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="foley_labour_uno"
        value={foley_labour_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.foley_labour_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="foley_labour_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="foley_labour_una"
        value={foley_labour_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.foley_labour_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="foley_labour_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="foley_labour_rt"
        value={foley_labour_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.foley_labour_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="folLabTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="folLabTotal"
        value={folLabTotal}
        readOnly
            />
    </Form.Group>
    {errors?.folLabTotal?.map((message, idx) => (
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
    {/* Sound Editing Rooms */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.70</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Sound Editing Rooms</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="sound_edit_rooms" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_edit_rooms"
        value={sound_edit_rooms}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_edit_rooms?.map((message, idx) => (
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
    {/* Sound Editing Equipment */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.80</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Sound Editing Equipment</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="sound_edit_equ" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sound_edit_equ"
        value={sound_edit_equ}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sound_edit_equ?.map((message, idx) => (
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
    {/* Music Editing Equipment */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.90</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Music Editing Equipment</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="music_edit_equ" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="music_edit_equ"
        value={music_edit_equ}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.music_edit_equ?.map((message, idx) => (
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
    {/* Sound Editing Purchases */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.91</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Sound Editing Purchases</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="post_sound_edit_pur" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="post_sound_edit_pur"
        value={post_sound_edit_pur}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.post_sound_edit_pur?.map((message, idx) => (
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
    {/* ADR */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.92</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>ADR</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="adr" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="adr"
        value={adr}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.adr?.map((message, idx) => (
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
    {/* Foley */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.93</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Foley</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="foley" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="foley"
        value={foley}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.foley?.map((message, idx) => (
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
    {/* Pre-mix */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.94</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Pre-mix</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="pre_mix" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="pre_mix"
        value={pre_mix}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.pre_mix?.map((message, idx) => (
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
    {/* Mix */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.95</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Mix</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="mix" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mix"
        value={mix}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mix?.map((message, idx) => (
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
    {/* Printmaster */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.96</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Printmaster</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="printmaster" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="printmaster"
        value={printmaster}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.printmaster?.map((message, idx) => (
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
    {/* Transfers/Deliverables */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>44.97</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Transfers/Deliverables</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="transfers_deliverables" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="transfers_deliverables"
        value={transfers_deliverables}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.transfers_deliverables?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>44.98</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Loss/Damage</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="lossdam_sound" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lossdam_sound"
        value={lossdam_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lossdam_sound?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>44.99</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other - incl. 6th/7th Days, Overtime and Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_post_sound" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_post_sound"
        value={other_post_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_post_sound?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>44.991</p>
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
    <Form.Group controlId="fringes_taxes_post_sound" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_post_sound"
        value={fringes_taxes_post_sound}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_post_sound?.map((message, idx) => (
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
    {/* POST PRODUCTION SOUND Total */}
    <Row className="mt-3 pb-2">
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>POST PRODUCTION SOUND TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="postSoundTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postSoundTotal"
        value={postSoundTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postSoundTotal?.map((message, idx) => (
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

export default Postsound