/* Important Info component acc page */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Account.module.css";

const InfoAcc = () => {
  return (
    <div className="mb-5">
        <Row className="my-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`px-3 py-2 ${styles.SubTitle6 }`}>
          <p className={`${styles.Blue} text-center`}>ACCOUNT INFO</p>
          <hr className={`mt-2 mb-0`}/>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> Purchase a <span className={`${styles.Blue}`}>Platform Project</span> subscription 
          on the Subscriptions page then create Platform Projects below.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> Purchase a <span className={`${styles.Blue}`}>Budget Only</span> subscription 
          on the Subscriptions page then create separate Budgets on the Budgets page.
          </p>
          <p className={`pt-2 ${styles.SmallSize}`}><span className={`${styles.Blue}`}>*</span> Note: All Platform Projects include Budgets.
          </p>
          <hr className={`mt-2 mb-0`}/>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoAcc