/* Component in the Budget Component to display 
   the Budget Cover page  */
import React from 'react';
import styles from "../../../styles/Account.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Budgetcover = (props) => {
    const {setShowCover, budget} = props;
    const {dated,prelimfin,
      title, series, prodco, writer, format, location,
      research, prep, shoot, wrap, post, length_total,
      preparedby, approvedby, approvedbyco,
    } = budget;

  return (
    <div className='px-5 mx-md-5 mb-5'>
    <Row className={ `${styles.OverviewBlue} mx-0 mt-3 py-3 text-center`}>
    <Col xs={12} >
    <h5 className={`${styles.BoldBlack } pl-5`}>
        BUDGET COVER PAGE
        <span style={{ textTransform: 'none'}} 
        className={`float-right ${styles.Close } pr-3`} 
        onClick={() => setShowCover(false) } >Close</span>
    </h5>
    </Col>
    </Row>
    <div className={`${styles.TopSheet}`}>
    {/* DETAILS LENGTH */}
    <div className={ `my-0 py-0`}>
    <Row className='px-5'>
    {/* details */}
    <Col xs={12} md={6} className={ `${styles.RightBorder} my-0 py-0`}>
    {/* Title */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Title</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{title || ""}</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* writer */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Writer</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{writer || ""}</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* series */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Series</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{series || ""}</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* prodco */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Prodco</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{prodco || ""}</p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* format */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Format</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{format || ""}</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* location */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Location</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{location || ""}</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Dated */}
    <Row>
    <Col xs={4}>
    <p className={`${styles.Underline6}`}>Dated</p>
    </Col>
    <Col xs={2}>   
    </Col>
    <Col xs={6}>
    <p className={`${styles.Underline}`}>{dated || "-"}</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </Col>
    <Col xs={12} md={6} className='pl-5' >
    {/* development */}
    <Row className='mt-3 mt-md-0'>
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Development</p>
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{research || 0}</p>  
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Prep */}
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Prep</p> 
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{prep || 0}</p>   
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* shoot */}
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Shoot</p> 
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{shoot || 0}</p>
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Wrap</p> 
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{wrap || 0}</p>  
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Post</p>
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{post || 0}</p>  
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row >
    <Col xs={7}>
    <p className={`${styles.Underline6}`}>Length Total</p>
    </Col>
    <Col xs={2}>
    <p className={`${styles.Underline}`}>{length_total}</p>   
    </Col>
    <Col xs={3}>
    <p className={`${styles.Underline}`}>Weeks</p>
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>     
    </Col>
    </Row>
    </div>
    {/* prepared by */}
    <div className={ `mt-4 px-5`}>
    <Row>
    <Col md={6} className={ `${styles.RightBorder} my-0 py-0`} >
    <Row>
    <Col md={6} >
    <p className={`${styles.Underline6}`}>
    BUDGET PREPARED BY
    </p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>
    {preparedby}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row>
    <Col md={6} >
    <p className={`${styles.Underline6}`}>
    PRELIMINARY OR FINAL
    </p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>
    {prelimfin}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </Col>
    <Col md={6} className='pl-md-5'>
    <Row>
    <Col md={7} >
    <p className={`${styles.Underline6}`}>
    BUDGET APPROVED BY
    </p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>
    {approvedby}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    <Row>
    <Col md={7} >
    <p className={`${styles.Underline6}`}>
    APPROVING COMPANY
    </p>
    </Col>
    <Col md={5} >
    <p className={`${styles.Underline}`}>
    {approvedbyco}
    </p>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    </Col>
    </Row>
    </div>
    </div>
    </div>
  )
}

export default Budgetcover