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
          <p className={`${styles.Blue} text-center`}>SUBSCRIPTION PLANS INFO</p>
          <hr className={`mt-2 mb-0`}/>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> Purchase a <span className={`${styles.Blue}`}>Platform Projects with Budgets</span> Subscription Plan 
           then create as many Projects as the Subscription allows on the Account page.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> Purchase a <span className={`${styles.Blue}`}>Budget Only</span> Subscription Plan 
           then create as many Budgets as the Subscription allows from the Budgets link on the Account page.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> For the Platform Projects Plans are divided into two categories, Company or Indie/Student,
          depending on the amount of Users for the project.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> Please choose a Silver, Gold, Gold++, or Platinim Plan in either
          the Company or Indie/Student category that best suits your needs.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> The Silver Plans are for one smaller scale project such as Commercial work, Music Videos or Short films.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> The Gold Plans for one Film and TV project.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> The Gold++ Plans are for 10 of any combination and the platinum for 25 of any combination.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> The Budget Only Plan is just for the Budgeting software, the Silver allowing 1 Budget 
          to be made, Gold allowing 2, Gold ++ 10 and Platinum 25.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> You may only have one active Platform Project or Budget Only Plan at a time. If needed upgrade to 
          a higher Plan.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> You may cancel your Subscription Plan at any time.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> Once you purchase a Subscription Plan begin by creating Projects or Budgets
          on the Account page where you will find all the necessary informating needed.
          </p>
          <p className={`pt-2`}>
          <span className={`${styles.Blue}`}>*</span> Please see the chart for Subscription Plan details.
          </p>
          <hr className={`mt-2 mb-0`}/>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoSub