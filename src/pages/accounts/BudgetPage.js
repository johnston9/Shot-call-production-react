/* Page to fetch the Project's Budget data
 * Contains the Budget Component to which it passes the data*/
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import useRedirect from "../../hooks/Redirect";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { axiosReq } from "../../api/axiosDefaults";
import Budget from "./Budget";

const BudgetPage = () => {
  useRedirect();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [budget, setBudget] = useState({ results: [] });
  const { id } = useParams();

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const { data } = await axiosReq.get(`/budgets/?project=${id}`);
        setBudget({ results: [data] });
        console.log(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBudget();

  }, [id]);

  return (
    <div className='mt-3'>
    {/* <Row className="mt-1 ml-2" >
        <Col xs={3}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        </Col>
    </Row> */}
    {/* Add /Edit Budget */}
    {/* {hasLoaded ? (
      <>
      {budget.results.length ? (
      <Row className='mt-0'>
      <Col className="text-center">
      <Link to={`/budgets/edit/${id}`}>
      <div className={`px-1`}>
      <p className={ `${styles.BudgetLink} pl-3`}>Edit Budget</p>
      </div>
      </Link>
      </Col>
      </Row>
    ) : (
      <Row className='mt-0'>
      <Col className="text-center" xs={{span: 6, offset: 3 }} 
       md={{span: 4, offset: 4 }} >
      <Link to={`/budgets/create/${id}`}>
      <div className={`px-1`}>
      <p className={ `${styles.BudgetLink} pl-3`}>Create Budget</p>
      </div>
      </Link>
      </Col>
    </Row>
    ) }
      </>
    ) : (
      ""
    ) } */}
    {/* budget */}
    <Row>
      <Col className="py-2 p-0 p-lg-2" >
          {hasLoaded ? (
              <Budget
              // {...budget.results[0]}
              budget1={budget.results[0]} 
              projectId={id}
               />
            ) : (
              ""
            ) }
      </Col>
    </Row>
    </div>
  )
}

export default BudgetPage