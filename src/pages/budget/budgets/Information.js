/* Information component on the Budget Page */
   import React from 'react';
   import Row from "react-bootstrap/Row";
   import Col from "react-bootstrap/Col";
   import styles from "../../../styles/Account.module.css";
   
   const Information = () => {
     return (
       <div>
           <Row className="mb-3">
           <Col md={{span: 10, offset: 1}}>
           <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
           <h5 className={`text-center `} >INFO</h5>  
            <p>To initialize the Budget click the Create Budget button to 
            open the Create Budget form.</p>
            <p>Enter as many details as you want at this stage,
            the form does not need to be completed. One value is enough
            to initially create the Budget. Then press Submit.
            </p>
            <p>Click the Edit Budget button to add the main Budgets details.
                This may be used as many times as needed to create the 
                preliminary Budget, the Final Budget and all necessary
                Budgets inbetween.
            </p>  
            <p>Once you are happy with each one print it off along with 
                it's Cover and Topsheet
            </p>

            </div> 
           </Col>
         </Row>
       </div>
     )
   }

export default Information