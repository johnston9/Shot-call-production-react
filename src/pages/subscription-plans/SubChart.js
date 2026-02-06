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
    <div className={`${styles.SubTitleChart } text-center`}>
    <h5 className={`${styles.SubTitleC1 } `}>
    SUBSCRIPTIONS CHART
    </h5>
    <h3 className={`${styles.ChartTitleS } text-center py-3`}>
     Platform Projects with Budget Plans
    </h3>
    {/* company */}
    <div className='px-3'>
    <h3 className={`${styles.ChartTitle } text-center`}>
        Company <span className={`${styles.ChartTitleI }`}>(Large Scale Projects)</span>
    </h3>
    {/* plans */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Silver
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Gold
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Gold ++
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Platinum 
    </p>
    </Col>
    </Row>
    {/* type */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Project Type
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Commercial Work / Music Video / Short Film
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Film / TV Series
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Any
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Any 
    </p>
    </Col>
    </Row>
    {/* users */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Max Users Per Project
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    50
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Unlimited
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Unlimited
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Unlimited 
    </p>
    </Col>
    </Row>
    {/* Projects */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Max Projects
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    1
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    1
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    10
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    25 
    </p>
    </Col>
    </Row>
    {/* features */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Features
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    All
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    All
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    All
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    All 
    </p>
    </Col>
    </Row>
    {/* cost */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Monthly Cost
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $50
    </h4>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $100
    </h4>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $150
    </h4>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $200
    </h4>
    </Col>
    </Row>
    </div>
    {/* indie */}
    <div className='mt-5 px-3'>
    <h3 className={`${styles.ChartTitle } text-center`}>
        Indie/Student <span className={`${styles.ChartTitleI }`}>(Smaller Scale Projects)</span>
    </h3>
    {/* plans */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Silver
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Gold
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Gold ++
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Platinum 
    </p>
    </Col>
    </Row>
    {/* type */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Project Type
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Commercial Work / Music Video / Short Film
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Film / TV Series
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Any
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    Any 
    </p>
    </Col>
    </Row>
    {/* users */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Max Users Per Project
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    30
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    100
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    100
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    100 
    </p>
    </Col>
    </Row>
    {/* Projects */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Max Projects
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    1
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    1
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    10
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    25 
    </p>
    </Col>
    </Row>
    {/* features */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Features
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    All
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    All
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    All
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    All 
    </p>
    </Col>
    </Row>
    {/* cost */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Monthly Cost
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $30
    </h4>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $75
    </h4>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $100
    </h4>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $150
    </h4>
    </Col>
    </Row>
    </div>
    {/* budgets */}
    <div className='mt-5 px-3'>
    <h3 className={`${styles.ChartTitleS } text-center`}>
        Budget Only Subscription Plans
    </h3>
    {/* plans */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Silver
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Gold
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Gold ++
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTT } mb-0`}>
    Platinum 
    </p>
    </Col>
    </Row>
    {/* Projects */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Max Budgets
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    1
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    10
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    25
    </p>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartT } mb-0`}>
    50
    </p>
    </Col>
    </Row>
    {/* cost */}
    <Row>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <p className={`${styles.ChartTL } mb-0`}>
        Monthly Cost
    </p>
    </Col>
    <Col xs={4} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $25
    </h4>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $50
    </h4>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $75
    </h4>
    </Col>
    <Col xs={2} className={`${styles.ChartBor } px-0 text-center`}>
    <h4 className={`${styles.ChartTC } mb-0`}>
    $100
    </h4>
    </Col>
    </Row>
    </div>
    <hr className={`mt-2 mb-0`}/>
    </div> 
    </Col>
    </Row>
    </div>
  )
}

export default SubChart