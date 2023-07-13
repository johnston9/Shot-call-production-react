/* Page to display if no results are found for a request
   Contains the Asset component */
import React from 'react';
import styles from "../styles/PageNotFound.module.css";
import Asset from "./Asset";
import NoResults from "../assets/no-results.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import btnStyles from "../styles/Button.module.css";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
  const history = useHistory();
    return (
        <div className={styles.margin} >
            <Row>
            <Col xs={3}>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
              onClick={() => history.goBack()}
            >
              Back
            </Button>
            </Col>
            </Row>
            <h2 className="mb-4 text-center" >Page not found</h2>
            <Asset
              src={NoResults}
              message="We're sorry, no results for that page"
            />
        </div>
    )
}

export default PageNotFound