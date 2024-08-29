/* Component in the Budget Edit component to edit Rights */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Rights = (props) => {
  // eslint-disable-next-line
    const [errors, setErrors] = useState({});
    const {postDataRights, setPostDataRights, setShow,
        postDataRightsTotal, setPostDataRightsTotal} = props;

    // Rights postData values
  const {story_rights, miscellaneous} = postDataRights;

    // Rights handleChange
  const handleChangeRights = (event) => {
    setPostDataRights({
    ...postDataRights,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
};

  // function to add all rights on change
  useEffect(() => {
    const addRights = () => {
      setPostDataRightsTotal(parseFloat(story_rights || 0) + 
      parseFloat(miscellaneous ||0) )
    }
    const timer = setTimeout(() => {
      addRights();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [story_rights, miscellaneous ]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    RIGHTS SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>01.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>RIGHTS</p>
    </Col>
    <Col md={2}>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={ `mb-2 py-0`} >
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
    {/* Story Rights */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col className="mb-0 pb-0" md={1} >
    <p className={`${styles.Underline}`}>01.10</p>
    </Col>
    <Col className="mb-0 pb-0" md={4} >
    <p className={`${styles.BoldBlack}`} >Story Rights</p>
    </Col>
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0"></p>
    </Col>
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0"></p>
    </Col>
    <Col className="mb-0 pb-0" md={1} >
    <p className="mb-0 pb-0"></p>
    </Col>
    <Col className="mb-0 pb-0" md={2} >
    <Form.Group controlId="story_rights" 
        className={`${styles.Width95} text-center mb-0 pb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="story_rights"
        value={story_rights}
        onChange={handleChangeRights}
            />
    </Form.Group>
    {errors?.story_rights?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Miscellaneous */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>01.20</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Miscellaneous</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="miscellaneous" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="miscellaneous"
        value={miscellaneous}
        onChange={handleChangeRights}
            />
    </Form.Group>
    {errors?.miscellaneous?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Rights Total */}
    <Row className="pb-2 mt-3">
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} mb-0 py-0`} md={4} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL RIGHTS</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="postDataRightsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="postDataRightsTotal"
        value={postDataRightsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.postDataRightsTotal?.map((message, idx) => (
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

export default Rights