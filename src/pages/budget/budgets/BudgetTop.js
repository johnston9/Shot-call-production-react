/* Component in the Budget Component to display 
   the budget Top page  */
   import React from 'react';
   import styles from "../../../styles/Account.module.css";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
//    import { Link, useHistory } from 'react-router-dom';
//    import btnStyles from "../../styles/Button.module.css";
//    import Button from "react-bootstrap/Button";

const BudgetTop = (props) => {
const {setShowTop, budget1, budget2, budget3} = props;

const {above_the_line_total, below_the_lineB_total,
     below_the_lineB_costs_total, b_labour_and_costs_total,
     post_productionC_total, belowB_andC_total, grand_total,
     above_belowABC_total, otherD_total, above_belowABCandD_total,
     dated, prelimfin, preparedby, approvedby, approvedbyco,
     title, series, prodco, format, location,
     research, prep, shoot, wrap, post, length_total,
     rights_total, development_total, scenario_total,
     producers_dirs_total, stars_music_total, cast_total,
     productionstaff_total, designlabour_total, constructionlabour_total,
     dressinglabour_total, propertylabour_total,
   } = budget1;

const { wranglerlabour_total, fxlabour_total, wardrobelabour_total, 
     makeuplabour_total, cameralabour_total, electriclabour_total, 
     griplabour_total, soundlabour_total,
} = budget2;

const {proOff_total, studio_total, site_total, unit_total, traliv_total,
transport_total, constructionmat_total, artSup_total, dressing_total,
props_total, fx_total, animals_total, wardrobe_total, makeup_total,
camera_total, electric_total, grip_total, sound_total, secondU_total,
stockLab_total, postStaffFac_total, editing_total, postSound_total,
postLab_total, postTitles_total, postVersion_total, postVfx_total,
pub_total, insur_total, genEx_total, indirCo_total,
contingency, completion_bond, transportlabour_total, tvspecificlabour_total,
} = budget3;

  return (
    <div className='mx-5 px-5 mb-5'>
    <Row className={ `${styles.OverviewBlue} mx-0 mt-3 py-3 text-center`}>
    <Col xs={12} >
    <h5 className={`${styles.BoldBlack } pl-5`}>
        BUDGET TOPSHEET
        <span style={{ textTransform: 'none'}} 
        className={`float-right ${styles.Close } pr-3`} 
        onClick={() => setShowTop(false) } >Close</span>
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
    {/* ABOVE THE LINE */}
    <div className='px-3 mt-5'>
    {/* Title */}
    <Row className={ `${styles.OverviewBlue} mx-0 mb-2 mt-4 py-1 text-center`}>
    <Col xs={12}>
    <h5 className={ `${styles.BoldBlack}`}>ABOVE THE LINE - "A" </h5>
    </Col>
    </Row>
    {/* Sections */}
    <Row>
    <Col md={6} className={ `${styles.RightBorder} my-0 py-0`}>
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
    {/* PRE-PRODUCTION AND DEVELOPMENT */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>02.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PRE-PRODUCTION AND DEVELOPMENT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{development_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* SCENARIO */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}> 03.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SCENARIO</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{scenario_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    </Col>
    <Col md={6}>
    {/* PRODUCERS AND DIRECTORS */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>04.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PRODUCERS AND DIRECTORS</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{producers_dirs_total}</p>
   </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* STARS / MUSIC */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>05.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>STARS / MUSIC</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stars_music_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
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
    </div>
    {/* BELOW THE LINE "B" PRODUCTION LABOUR -----------------*/}
    <div className='px-3'>
     {/* Title */}
    <Row className={ `${styles.OverviewBlue} mx-1 mt-3 mb-2 py-1 text-center`}>
    <Col xs={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION LABOUR </h5>
    </Col>
    </Row>
    {/* Sections */}
    <Row>
    <Col md={6} className={ `${styles.RightBorder} my-0 py-0`}>
    {/* CAST */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>06.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>CAST</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cast_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* PRODUCTION STAFF */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>07.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PRODUCTION STAFF</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{productionstaff_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* DESIGN LABOUR */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>08.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>DESIGN LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{designlabour_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* CONSTRUCTION LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>09.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>CONSTRUCTION LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{constructionlabour_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* SET DRESSING LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>10.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SET DRESSING LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dressinglabour_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* PROPERTY LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>11.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PROPERTY LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{propertylabour_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* WRANGLING LABOUR */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>12.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>WRANGLING LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wranglerlabour_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* FX LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>13.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>FX LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fxlabour_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
     </Col>
     <Col md={6}>
     {/* WARDROBE LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>14.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>WARDROBE LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobelabour_total}</p>
   </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* MAKEUP LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>15.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>MAKEUP LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeuplabour_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* CAMERA LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>16.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>CAMERA LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{cameralabour_total}</p>
   </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* ELECTRICAL LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>17.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>ELECTRICAL LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{electriclabour_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* GRIP LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>18.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>GRIP LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{griplabour_total}</p>
   </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* PRODUCTION SOUND LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>19.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PRODUCTION SOUND LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{soundlabour_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* TRANSPORTATION LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>21.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TRANSPORTATION LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transportlabour_total}</p>
   </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* TV SPECIFIC LABOUR */}
    <Row className='px-3'>
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>21.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TV SPECIFIC LABOUR</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{tvspecificlabour_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
     </Col>
     </Row>   
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION LABOUR</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{below_the_lineB_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* BELOW THE LINE "B" PRODUCTION COSTS ----------------- */}
    <div className='px-3'>
     {/* Title */}
    <Row className={ `${styles.OverviewBlue} mx-1 mt-3 mb-2 py-1 text-center`}>
    <Col xs={12}>
    <h5 className={ `${styles.BoldBlack}`}>BELOW THE LINE - "B" PRODUCTION - COSTS </h5>
    </Col>
    </Row>
    {/* Sections */}
    <Row>
    <Col md={6} className={ `${styles.RightBorder} my-0 py-0`}>
     {/* PRODUCTION OFFICE */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>22.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PRODUCTION OFFICE</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{proOff_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* STUDIO */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>23.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>STUDIO</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{studio_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* SITE */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>24.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SITE</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{site_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* UNIT */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>25.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>UNIT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{unit_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* TRAVEL & LIVING */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>26.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TRAVEL & LIVING</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{traliv_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* TRANSPORTATION */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>27.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TRANSPORTATION</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{transport_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* CONSTRUCTION MATERIAL */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>28.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>CONSTRUCTION MATERIAL</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{constructionmat_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* ART SUPPLIES */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>29.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>ART SUPPLIES</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{artSup_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* SET DRESSING */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>30.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SET DRESSING</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{dressing_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* PROPS */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>31.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PROPS</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{props_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    </Col>
    <Col md={6} >
     {/* FX */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>32.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>FX</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{fx_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* ANIMALS */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>33.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>ANIMALS</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{animals_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* WARDROBE SUPPLIES */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>34.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>WARDROBE SUPPLIES</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{wardrobe_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* MAKEUP SUPPLIES */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>35.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>MAKEUP SUPPLIES</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{makeup_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* CAMERA EQUIPMENT */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>36.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>CAMERA EQUIPMENT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{camera_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* ELECTRICAL EQUIPMENT */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>37.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>ELECTRICAL EQUIPMENT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{electric_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* GRIP EQUIPMENT */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>38.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>GRIP EQUIPMENT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{grip_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* SOUND EQUIPMENT */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>39.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SOUND EQUIPMENT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{sound_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* SECOND UNIT */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>40.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>SECOND UNIT</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{secondU_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    {/* STOCK & LAB */}
    <Row className='px-3' >
    <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <p className={`${styles.Underline}`}>41.00</p>
    </Col>
    <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
    <p className={ `${styles.BoldBlack} pb-0 mb-0`}>STOCK & LAB</p>
    </Col>
    <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.Underline}`}>{stockLab_total}</p>
    </div>
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-1 mt-1`}/>
    </Col>
    </Row>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION COSTS */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" PRODUCTION COSTS</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{below_the_lineB_costs_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - BELOW THE LINE "B" PRODUCTION LABOUR & COSTS */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "B" LABOUR & COSTS</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{b_labour_and_costs_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* "C" POST PRODUCTION ----------------------------------- */}
    <div className='px-3'>
    {/* Title */}
    <Row className={ `${styles.OverviewBlue} mx-1 mt-3 mb-2 py-1 text-center`}>
    <Col xs={12}>
    <h5 className={ `${styles.BoldBlack}`}>"C" POST PRODUCTION</h5>
    </Col>
    </Row>
    {/* Sections */}
     <Row>
     <Col md={6} className={ `${styles.RightBorder} my-0 py-0`}>
     {/* POST PRODUCTION STAFF/FACILITIES */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>42.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>POST PRODUCTION STAFF/FACILITIES</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{postStaffFac_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     {/* EDITING */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>43.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>EDITING</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{editing_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     {/* POST SOUND */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>44.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>POST SOUND</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{postSound_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     {/* VISUAL EFFECTS */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>45.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>VISUAL EFFECTS</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{postVfx_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     </Col>
     <Col md={6} >
     {/* POST PRODUCTION LAB/VIDEO COPIES */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>46.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>POST PRODUCTION LAB/VIDEO COPIES</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{postLab_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     {/* TITLES/OPTICALS/STOCK FOOTAGE */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>47.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>TITLES/OPTICALS/STOCK FOOTAGE</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{postTitles_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     {/* VERSIONING/CLOSED-CAPTIONING/COPIES */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>48.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>VERSIONING/CLOSED-CAPTIONING/COPIES</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{postVersion_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     </Col>
     </Row>
    {/* TOTAL - POST PRODUCTION "C" */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - POST PRODUCTION "C"</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{post_productionC_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - BELOW "B" and "C" */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - BELOW "B" and "C"</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{belowB_andC_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - ABOVE/BELOW "A" "B" and "C" */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - ABOVE/BELOW "A" "B" and "C"</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{above_belowABC_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* "D" OTHER --------------------------------------------- */}
    <div className='px-3'>
    {/* Title */}
    <Row className={ `${styles.OverviewBlue} mx-1 mt-3 mb-2 py-1 text-center`}>
    <Col xs={12}>
    <h5 className={ `${styles.BoldBlack}`}>"D" OTHER</h5>
    </Col>
    </Row>
    {/* Sections */}
     <Row>
     <Col md={6} className={ `${styles.RightBorder} my-0 py-0`}>
     {/* PUBLICITY */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>49.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>PUBLICITY</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{pub_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     {/* INSURANCE */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>50.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>INSURANCE</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{insur_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     </Col>
     <Col md={6} >
     {/* GENERAL EXPENSES */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>51.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>GENERAL EXPENSES</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{genEx_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     {/* INDIRECT COSTS */}
     <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}>51.00</p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>INDIRECT COSTS</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{indirCo_total}</p>
     </div>
     </Col>
     </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     </Col>
     </Row>
    {/* TOTAL - OTHER "D" */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - OTHER "D"</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{otherD_total || 0}</p>
    </div>
    </Col>
    </Row>
    {/* TOTAL - A, B, C and D */}
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - "A", "B", "C" and "D"</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{above_belowABCandD_total || 0}</p>
    </div>
    </Col>
    </Row>
    </div>
    {/* CONTINGENCY/BOND ------------------------------------------- */}
    <div className='px-3 mt-3'>
     {/* Sections */}
     <Row>
     <Col md={6} className={ `${styles.RightBorder} my-0 py-0`}>
     {/* Contingency */}
    <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}></p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>Contingency</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{contingency || 0}</p>
     </div>
     </Col>
    </Row>
     {/* hr */}
     <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     </Col>
     <Col md={6} >
     {/* Completion Bond */}
    <Row className='px-3' >
     <Col md={1} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <p className={`${styles.Underline}`}></p>
     </Col>
     <Col md={9} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`} >
     <p className={ `${styles.BoldBlack} pb-0 mb-0`}>Completion Bond</p>
     </Col>
     <Col md={2} className={`p-0 m-0 ${styles.BorderRightLeftBottom}`}>
     <div className={`${styles.Box7} 
          d-flex align-items-center justify-content-center`}>
     <p className={`${styles.Underline}`}>{completion_bond || 0}</p>
     </div>
     </Col>
    </Row>
    {/* hr */}
    <Row>
     <Col >
     <hr className={`${styles.Break3} mb-1 mt-1`}/>
     </Col>
     </Row>
     </Col>
     </Row>
    </div>
    {/* TOTAL - GRAND */}
    <div className='px-3 mt-3 mb-3'>
    <Row className='mt-3' >
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    <p></p>
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={9} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - GRAND</p>
    </Col>
    <Col md={2} >
    <div className={`${styles.Box7} 
         d-flex align-items-center justify-content-center`}>
    <p className={`${styles.BoldBlack} mb-0`}>{grand_total || 0}</p>
    </div>
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
    </div>
  )
}
export default BudgetTop