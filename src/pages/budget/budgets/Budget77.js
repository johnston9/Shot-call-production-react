<div>
{/* Title */}
{/* Sections */}
<Row>
<Col md={6} className={ `${styles.RightBorder} my-0 py-0`}>

</Col>
<Col md={6} >

</Col>
</Row>
{/* RIGHTS */}
<Row className='px-3' >
<Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
<p className={`${styles.Underline}`}>01.00</p>
</Col>
<Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
<p className={ `${styles.BoldBlack} pb-0 mb-0`}>RIGHTS</p>
</Col>
<Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
<div className={`${styles.Box7} 
        d-flex align-items-center justify-content-center`}>
<p className={`${styles.Underline}`}>{rights_total}</p>
</div>
</Col>
</Row>
{/* hr */}
<Row>
<Col >
<hr className={`${styles.Break3} mb-1 mt-1`}/>
</Col>
</Row>
{/* TOTAL - ABOVE THE LINE */}
<Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - ABOVE THE LINE "A"</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{above_the_line_total || 0}</p>
    </div>
    </Col>
</Row>
{/* "D" OTHER --------------------------------------------- */}
<div className='px-3'>
<Row className={ `${styles.OverviewBlue} mx-1 mt-3 mb-2 py-1 text-center`}>
<Col md={12}>
<h5 className={ `${styles.BoldBlack}`}>"D" OTHER</h5>
</Col>
</Row>
{/* TOTAL - OTHER "D" */}
<Row className='mt-3 mb-3' >
<Col md={1} >
<p className={`${styles.Underline}`}></p>
<p></p>
</Col>
<Col className={ `${styles.Overview} my-0 py-0`} md={9} >
<p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - OTHER "D" </p>
</Col>
<Col md={2} >
<p className={`${styles.Bold} mb-0`}>{otherD_total || 0}</p>
</Col>
</Row>
</div>
{/* TOTAL - A, B, C and D */}
<div className='px-3 mt-3'>
<Row className='mt-5' >
<Col md={1} >
<p className={`${styles.Underline}`}></p>
<p></p>
</Col>
<Col className={ `${styles.Overview} my-0 py-2`} md={8} >
<p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "A", "B", "C" and "D" </p>
</Col>
<Col md={1}></Col>
<Col md={2} >
<p className={`${styles.Bold} mb-0 my-2`}>{above_belowABCandD_total || 0}</p>
</Col>
</Row>
</div>
{/* CONTINGENCY/BOND ------------------------------------------- */}
<div className='px-3 mt-3'>
{/* Contingency */}
<Row>
<Col md={1} >
<p className={`${styles.Underline}`}></p>
</Col>
<Col md={9} >
<p className={`${styles.Underline}`}>Contingency</p>
</Col>
<Col md={2}>
<p className={`${styles.Underline}`}>{contingency || 0} </p>
</Col>
</Row>
{/* Completion Bond */}
<Row>
<Col md={1} >
<p className={`${styles.Underline}`}></p>
</Col>
<Col md={9} >
<p className={`${styles.Underline}`}>Completion Bond</p>
</Col>
<Col md={2}>
<p className={`${styles.Underline}`}>{completion_bond || 0} </p>
</Col>
</Row>
</div>
{/* TOTAL - GRAND */}
<div className='px-3 mt-3'>
<Row className='mt-3 mb-3' >
<Col md={1} >
<p className={`${styles.Underline}`}></p>
<p></p>
</Col>
<Col className={ `${styles.Overview} my-3 py-3`} md={8} >
<p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - GRAND </p>
</Col>
<Col md={1}></Col>
<Col md={2} className="pt-3" >
<p className={`${styles.Bold} mt-3 mb-0`}>{grand_total || 0}</p>
</Col>
</Row>
</div>

<h5
className={`mt-1 mb-2 pl-5 py-1 text-center ${styles.SubTitle }`}>
  End Topsheet
    <span style={{ textTransform: 'none'}} 
    className={`float-right ${styles.Close } pr-3`} 
    onClick={() => setShowTop(false) } >Close</span>
</h5>
</div>