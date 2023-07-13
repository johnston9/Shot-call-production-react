/* Component in the Projects Component to display a Project's data */
import React from 'react';
import Card from "react-bootstrap/Card";
import styles from "../../styles/Account.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosRes } from '../../api/axiosDefaults';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { UniDropdown } from '../../components/UniDropDown';
import { Link, useHistory } from 'react-router-dom';

const Project = ({id, name, url, stripe_id, company, owner} ) => {
    const currentUser = useCurrentUser();
      const is_owner = currentUser?.username === owner;
      const history = useHistory();

      const handleEdit = () => {
        history.push(`/projects/edit/${id}`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosRes.delete(`/projects/${id}`);
          console.log("delete")
          history.goBack();
        } catch (err) {
        } 
      };
  return (
    <div>
    <Card className='mb-3' >
            <Card.Body className={`${styles.ProTop} py-2`} >
            <Row className="d-flex align-items-center">
                <Col xs={2}></Col>
                <Col className='text-center' xs={8} >
                <h5 style={{ fontWeight: '500', color: '#fff', textTransform: 'capitalize'}} 
                    className='ml-1 ml-md-3'> {name} </h5>         
                </Col>                    
                <Col xs={2} 
                className="d-flex align-items-center justify-content-center" >
                {is_owner && (
                    <UniDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
                ) } 
                </Col>
            </Row>
            </Card.Body>
                {/* end new */}
                <Card.Body className='py-0'  >
                    {company && <p style={{ fontStyle: 'italic' }}
                    className="mb-0 mt-2 pb-0 text-center">{company}</p>}
                    <hr className='my-2' />
                    <Card.Text>Project Id: {id}</Card.Text>
                    <Card.Text>Stripe Id: {stripe_id}</Card.Text>
                    <Card.Text>URL: {url} </Card.Text>
                    <Row className="mt-1" >
                    <Col >
                    <Link to={`/budgets/${id}`}>
                    <div className={`text-center`}>
                    <span className={ `${styles.BudgetLink} px-md-5 mx-1`}>Budget</span>
                    </div>
                    </Link>
                    </Col>
                    </Row>
                </Card.Body>
                <hr />
            </Card>
    </div>
  )
}

export default Project