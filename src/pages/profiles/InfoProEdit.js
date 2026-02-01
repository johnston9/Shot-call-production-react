/* Important Info component acc page */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Account.module.css";

const InfoProEdit = () => {
  return (
    <div className="mb-5">
        <Row className="my-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`px-3 py-2 ${styles.SubTitle6 }`}>
          <p className={`${styles.Blue} text-center`}>EDIT PROFILE INFO</p>
          <hr className={`mt-2 mb-0`}/>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> Add your Name, Company and Profile
          Image here.
          </p>
          <hr className={`mt-2 mb-0`}/>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoProEdit