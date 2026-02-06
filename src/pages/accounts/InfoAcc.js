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
          <p className={`pt-2`}>PLATFORM PROJECTS
          </p>
          <p className={`pt-1`}>
          <span className={`${styles.Blue}`}>*</span> Purchase a <span className={`${styles.Blue}`}>Platform Projects with Budget</span> subscription 
          on the Subscriptions page then create Platform Projects below.
          </p>
          <p className={`pt-1`}>
          <span className={`${styles.Blue}`}>*</span> On creating a Project you will receive an email
          with the Project link and your <span className={`${styles.Blue}`}>Username and Password</span> for that Project.
          </p>
           <p className={`pt-1`}>
          <span className={`${styles.Blue}`}>*</span> The Project will also now display 
          below with all other created projects. Click on the Project link to open it.
          </p>
          <p className={`pt-1`}>
          <span className={`${styles.Blue}`}>*</span> You will find all the necessary instructions for using 
          the Platform there but
          you may begin by Registering other Users on the <span className={`${styles.Blue}`}>Manage Users</span> page or Registering other 
          Admin Users to do so.
          </p>
          <p className={`pt-1`}>
          <span className={`${styles.Blue}`}>*</span> As the <span className={`${styles.Blue}`}>holder of the Account</span> your Usernames and 
          Passwords will work differently to those of the Registered Cast and Crew using the Platform.
          </p>
          <p className={`pt-1`}>
          <span className={`${styles.Blue}`}>*</span> Your <span className={`${styles.Blue}`}>Username</span> will be the same as the one for your Account 
          and should not be changed. Your <span className={`${styles.Blue}`}>Password</span> will be a randomly created one and should be changed 
          to a personal one. It can be the changed to the same one as your Account one here for simplicity.
          </p>
          <p className={`pt-1`}>
          <span className={`${styles.Blue}`}>*</span> Going forward all new Projects you create 
          will use your <span className={`${styles.Blue}`}>current</span> Platform Username and Password.
          </p>
          <p className={`pt-1`}>
          <span className={`${styles.Blue}`}>*</span> Clicking the <span className={`${styles.Blue}`}>Budget Link</span> on the created Projects 
          displaying below will open that Project's Budget. Each Project Budget has a <span className={`${styles.Blue}`}>Share</span> button 
          allowing you to share access to that Budget with co-workers and is entirlely seperate 
          to the Platform Project and it's Users.
          </p>
          <p className={`pt-4`}>BUDGETS
          </p>
          <p className={`pt-1`}>
          <span className={`${styles.Blue}`}>*</span> Purchase a <span className={`${styles.Blue}`}>Budget Only</span> subscription 
          on the Subscriptions page then create separate Budgets on the Budgets page.
          </p>
          <p className={`pt-1`}>
          <span className={`${styles.Blue}`}>*</span> As with the Project Budgets they have a <span className={`${styles.Blue}`}>Share</span> button 
          allowing you to share access to that Budget with co-workers.
          </p>
          <hr className={`mt-2 mb-0`}/>
         </div> 
        </Col>
      </Row>
    </div>
  )
}

export default InfoAcc