/* Component in the BudgetPage Component to display the budget data */
import React from 'react';
import styles from "../../styles/Account.module.css";
import appStyles from "../../App.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useHistory } from 'react-router-dom';
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";

const Budget = (props) => {
  // const {
  //   // details
  //   title, series, prodco, format, location, dated,
  //   // length
  //   research, prep, shoot, wrap, post, length_total,
  //   // rights
  //   story_rights, miscel_rights, rights_total, budget, projectId,
  // } = props;

  const {
    budget1, projectId,
  } = props;

  const budget = budget1.results[0] || "" ;

  const {// details
    title, series, prodco, format, location, dated,
    // length
    research, prep, shoot, wrap, post, length_total,
    // rights
    story_rights, miscellaneous, rights_total, 
    // development
    research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development, 
    fringes_taxes_development, developmentTotal,
    // scenario
    writers_units_number, writers_units_name,
    writers_quantity, writers_rate, writersTotal,
    consultants_units_number, consultants_units_name,
    consultants_quantity, consultants_rate, consultantsTotal,
    editors_units_number, editors_units_name,
    editors_quantity, editors_rate, editorsTotal,
    admin_scenario_units_number, admin_scenario_units_name,
    admin_scenario_quantity, admin_scenario_rate, adminScenarioTotal,
    office_expenses_scenario, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, fringes_taxes_scenario,
    scenarioTotal,} = budget;

  console.log(props);
  console.log(budget);

  const history = useHistory();

  return (
    <div >
    <div className={`${styles.Overview}`}>
    <h2 className={`py-2 ${styles.OverviewText} ${appStyles.playfair}
     text-center`} >{title} Budget </h2>
    </div>
    {/* back */}
    <Row className="mt-1 ml-2" >
        <Col xs={3}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        </Col>
    </Row>
    {/* Add /Edit Budget */}
      {budget ? (
      <Row className='mt-0 mb-4'>
      <Col className="text-center">
      <Link to={`/budgets/edit/${projectId}`}>
      <div className={`px-1`}>
      <span className={ `${styles.BudgetLink} py-1 px-3`}>Edit Budget</span>
      </div>
      </Link>
      </Col>
      </Row>
    ) : (
      <Row className='mt-0 mb-5'>
      <Col className="text-center" xs={{span: 6, offset: 3 }} 
       md={{span: 4, offset: 4 }} >
      <Link to={`/budgets/create/${projectId}`}>
      <div className={`px-1`}>
      <spam className={ `${styles.BudgetLink} py-1 px-3`}>Create Budget</spam>
      </div>
      </Link>
      </Col>
    </Row>
    ) }
    {/* BUDGET ALL */}
    <div className='px-3'>
    {/* DETAILS LENGTH */}
    <div>
    {/* details length titles */}
    <Row>
    <Col xs={12}md={6} >
    <h5 className={`${styles.Bold} mb-2 text-center`}>Details</h5>
    </Col>
    <Col xs={12} md={6} >
    <h5 className={`${styles.Bold} d-none d-md-block mb-2 text-center`}>Length</h5>
    </Col>
    </Row>
    {/* details length */}
    <Row className='px-3'>
    {/* details */}
    <Col xs={12} md={6} >
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Title</p>
    <p className={`${styles.Underline}`}>Series</p>
    <p className={`${styles.Underline}`}>Prodco</p>
    <p className={`${styles.Underline}`}>Format</p>
    <p className={`${styles.Underline}`}>Location</p>
    <p className={`${styles.Underline}`}>Dated</p>
    </Col>
    <Col xs={4}>   
    </Col>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>{title || ""}</p>
    <p className={`${styles.Underline}`}>{series || ""}</p>
    <p className={`${styles.Underline}`}>{prodco || ""}</p>
    <p className={`${styles.Underline}`}>{format || ""}</p>
    <p className={`${styles.Underline}`}>{location || ""}</p>
    <p className={`${styles.Underline}`}>{dated || ""}</p>
    </Col>
    </Row>  
    </Col>
    <Col xs={12} md={6} >
    {/* length */}
    <Row>
      <Col xs={12} md={6} >
      <h5 className={`${styles.Bold} d-block d-md-none mb-2 text-center`}>Length</h5>
      </Col>
    </Row>
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Research</p>
    <p className={`${styles.Underline}`}>Prep</p> 
    <p className={`${styles.Underline}`}>Shoot</p> 
    <p className={`${styles.Underline}`}>Wrap</p> 
    <p className={`${styles.Underline}`}>Post</p>
    <p className={`${styles.Underline}`}>Length Total</p>
    </Col>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>{research || 0}</p>
    <p className={`${styles.Underline}`}>{prep || 0}</p>
    <p className={`${styles.Underline}`}>{shoot || 0}</p>
    <p className={`${styles.Underline}`}>{wrap || 0}</p>
    <p className={`${styles.Underline}`}>{post || 0}</p>
    <p className={`${styles.Underline}`}>{length_total}</p>   
    </Col>
    <Col xs={4}>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row>      
    </Col>
    </Row>
    </div>
    {/* ABOVE THE LINE */}
    <div className='px-3'>
    <h4>ABOVE THE LINE</h4>
    {/* Rights */}
    <div>
    <Row>
    <Col xs={1}>
    <p>1000</p>
    </Col>
    <Col xs={10}>
    <h5>Rights</h5>
    </Col>
    </Row>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>1010</p>
    <p className={`${styles.Underline}`}>1020</p>
    <p ></p>
    </Col>
    <Col xs={5}>
    <p className={`${styles.Underline}`}>Story Rights</p>
    <p className={`${styles.Underline}`}>Miscellaneous</p>
    <p>Rights Total</p>
    </Col>
    <Col xs={6}>
    <Row>
    <Col xs={{span: 4, offset: 8 }}>
    <p className={`${styles.Underline}`}>{story_rights || 0} </p>
    <p className={`${styles.Underline}`}>{miscellaneous || 0 } </p>
    <p >{rights_total } </p>
    </Col>
    </Row> 
    </Col>
    </Row>
    </div>
    {/* Development */}
    <div>
    <Row>
    <Col xs={1}>
    <p>2000</p>
    </Col>
    <Col xs={10}>
    <h5>Development</h5>
    </Col>
    </Row>
    <Row>
    <Col xs={1}>
    <p className={`${styles.Underline}`}>2010</p>
    <p className={`${styles.Underline}`}>2020</p>
    <p className={`${styles.Underline}`}>2030</p>
    <p className={`${styles.Underline}`}>2040</p>
    <p className={`${styles.Underline}`}>2050</p>
    <p className={`${styles.Underline}`}>2060</p>
    <p className={`${styles.Underline}`}>2070</p>
    <p className={`${styles.Underline}`}>2080</p>
    <p className={`${styles.Underline}`}>2090</p>
    </Col>
    <Col xs={5}>
    <p className={`${styles.Underline}`}>Research</p>
    <p className={`${styles.Underline}`}>Preliminary Breakdown/Budget</p>
    <p className={`${styles.Underline}`}>Consultants</p>
    <p className={`${styles.Underline}`}>Office Costs/Expenses</p>
    <p className={`${styles.Underline}`}>Staff</p>
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    <p className={`${styles.Underline}`}>Living Expenses</p>
    <p className={`${styles.Underline}`}>Other</p>
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    <p>Total</p>
    </Col>
    <Col xs={6}>
    <Row>
    <Col xs={{span: 4, offset: 8 }}>
    <p className={`${styles.Underline}`}>{research_development || 0} </p>
    <p className={`${styles.Underline}`}>{prelim_budget || 0 } </p>
    <p className={`${styles.Underline}`}>{consultant_expenses || 0 } </p>
    <p className={`${styles.Underline}`}>{office_expenses || 0} </p>
    <p className={`${styles.Underline}`}>{staff || 0 } </p>
    <p className={`${styles.Underline}`}>{travel_expenses_development || 0 } </p>
    <p className={`${styles.Underline}`}>{living_expenses_development || 0} </p>
    <p className={`${styles.Underline}`}>{other_development || 0 } </p>
    <p className={`${styles.Underline}`}>{fringes_taxes_development || 0 } </p>
    <p >{developmentTotal || 0 } </p>
    </Col>
    </Row> 
    </Col>
    </Row>
    </div>
    {/* Scenario */}
    <div>
    <Row>
    <Col xs={1}>
    <p>3000</p>
    </Col>
    <Col xs={10}>
    <h5>Scenario</h5>
    </Col>
    </Row>
    {/* Titles */}
    <Row className={ `${styles.Overview} pt-2`} >
    <Col md={1} >
    <p>ACCT</p>
    </Col>
    <Col md={5} >
    <p>Description</p>
    </Col>
    <Col md={1} >
    <p>Quantity</p>
    </Col>
    <Col md={1} >
    <p># Unit</p>
    </Col>
    <Col md={1} >
    <p>Unit</p>
    </Col>
    <Col md={1} >
    <p>Price</p>
    </Col>
    <Col md={2} >
    <p>Total</p>
    </Col>
    </Row>
    {/* Values */}
    <Row className={ `${styles.Overview} pt-2`} >
    <Col md={1} >
    <p className={`${styles.Underline}`}>3010</p>
    <p className={`${styles.Underline}`}>3020</p>
    <p className={`${styles.Underline}`}>3030</p>
    <p className={`${styles.Underline}`}>3040</p>
    <p className={`${styles.Underline}`}>3050</p>
    <p className={`${styles.Underline}`}>3060</p>
    <p className={`${styles.Underline}`}>3070</p>
    <p className={`${styles.Underline}`}>3080</p>
    <p className={`${styles.Underline}`}>3090</p>
    <p></p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>Writers</p>
    <p className={`${styles.Underline}`}>Consultants</p>
    <p className={`${styles.Underline}`}>Editors</p>
    <p className={`${styles.Underline}`}>Admin</p>
    <p className={`${styles.Underline}`}>Office Cost/Expenses</p>
    <p className={`${styles.Underline}`}>Travel Expenses</p>
    <p className={`${styles.Underline}`}>Living Expenses</p>
    <p className={`${styles.Underline}`}>Other</p>
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
    <p>Total</p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{writers_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{consultants_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{editors_quantity || 0}</p>
    <p className={`${styles.Underline}`}>{admin_scenario_quantity || 0}</p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{writers_units_number || 0}</p>
    <p className={`${styles.Underline}`}>{consultants_units_number || 0}</p>
    <p className={`${styles.Underline}`}>{editors_units_number || 0}</p>
    <p className={`${styles.Underline}`}>{admin_scenario_units_number || 0}</p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{writers_units_name || 0}</p>
    <p className={`${styles.Underline}`}>{consultants_units_name || 0}</p>
    <p className={`${styles.Underline}`}>{editors_units_name || 0}</p>
    <p className={`${styles.Underline}`}>{admin_scenario_units_name || 0}</p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>{writers_rate || 0}</p>
    <p className={`${styles.Underline}`}>{consultants_rate || 0}</p>
    <p className={`${styles.Underline}`}>{editors_rate || 0}</p>
    <p className={`${styles.Underline}`}>{admin_scenario_rate || 0}</p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={2} >
    <p className={`${styles.Underline}`}>{writersTotal || 0}</p>
    <p className={`${styles.Underline}`}>{consultantsTotal || 0}</p>
    <p className={`${styles.Underline}`}>{editorsTotal || 0}</p>
    <p className={`${styles.Underline}`}>{adminScenarioTotal || 0}</p>
    <p className={`${styles.Underline}`}>{office_expenses_scenario || 0}</p>
    <p className={`${styles.Underline}`}>{travel_expenses_scenario || 0}</p>
    <p className={`${styles.Underline}`}>{living_expenses_scenario || 0}</p>
    <p className={`${styles.Underline}`}>{other_scenario || 0}</p>
    <p className={`${styles.Underline}`}>{fringes_taxes_scenario || 0}</p>
    <p >{scenarioTotal}</p>
    </Col>
    </Row>
    </div>

    </div>
    {/* BELOW THE LINE */}
    <div>

    </div>
    </div>
    </div>
  )
}

export default Budget