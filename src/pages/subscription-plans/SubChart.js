/* Sub Chart component sub page */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Account.module.css";

const SubChart = () => {
  return (
    <div className="mb-5">
    <Row className="my-3">
    <Col md={{span: 10, offset: 1}}>
    <div className={`${styles.SubTitleChart }`}>
    <h5
    className="text-center"
    style={{
        background: "#39606e",
        color: "#F5F5F5",
    }}
    >
    SUBSCRIPTIONS CHART
    </h5>
    {/* company */}
    <div className='px-3'>
    <h3 className={`${styles.ChartTitle } text-center`}>
        Company - Platform Projects with Budget
    </h3>
    <Row>
    <Col xs={2} className={`${styles.ChartBor } text-center`}>
    <p>
    Name
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } text-center`}>
    <p>
    Type
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } text-center`}>
    <p>
    Max Users
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } text-center`}>
    <p>
    Max Projects 
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } text-center`}>
    <p>
    Cost
    </p>
    </Col>
    </Row>
    </div>
    {/* indie */}
    <div>
    <h3 className={`${styles.ChartTitle } text-center`}>
        Indie/Student - Platform Projects with Budget
    </h3>
    </div>
    {/* budgets */}
    <div>
    <h3 className={`${styles.ChartTitle } text-center`}>
        Budget Only Subscription Plans
    </h3>
    </div>
    <hr className={`mt-2 mb-0`}/>
    </div> 
    </Col>
    </Row>
    </div>
  )
}

export default SubChart