/* Important Info component sub page */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Account.module.css";

const InfoSub = () => {
  return (
    <div className="mb-5">
        <Row className="my-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`px-3 py-2 ${styles.SubTitle6 }`}>
          <p className={`${styles.Blue} text-center`}>SUBSCRIPTIONS INFO</p>
          <hr className={`mt-2 mb-0`}/>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> Subscriptions <span className={`${styles.Blue}`}>Costume</span> are.
          </p>
          <p className={`pt-2 ${styles.Small}`}>
          Note: .
          </p>
          <hr className={`mt-2 mb-0`}/>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoSub