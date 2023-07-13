import React from 'react';
import { useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";

const NeedToSignIn = () => {
    const history = useHistory();
  return (
    <div className='mt-3' >
    <Row>
    <Col>
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} ml-2 mb-2`}
      onClick={() => history.push("/")}
    >
      Back to Home
    </Button>
    </Col>
    </Row>
    <Row>
    <Col>
    <h5 className='text-center'>
        You need to login to Chat
    </h5>
    </Col>
    </Row>
    </div>
  )
}

export default NeedToSignIn