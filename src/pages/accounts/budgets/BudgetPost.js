/* Component in the Budget Component to display the budget Post  data */
import React from 'react';
import styles from "../../../styles/Account.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import btnStyles from "../../../styles/Button.module.css";
// import Button from "react-bootstrap/Button";

const BudgetPost = (props) => {

    const {
        budget, post_productionC_total, 
        belowB_andC_total, above_belowABC_total,} = props;
    
    const { // Post Production Staff/Facilities
      post_supervisor_qty, post_supervisor_uno, 
      post_supervisor_una, post_supervisor_rt, 
      post_coordinator_qty, post_coordinator_uno,
      post_coordinator_una, post_coordinator_rt,
      post_assistants_qty, post_assistants_uno,
      post_assistants_una, post_assistants_rt,
      post_accountants_qty, post_accountants_uno,
      post_accountants_una, post_accountants_rt,
      post_accountants_ass_qty, post_accountants_ass_uno,
      post_accountants_ass_una, post_accountants_ass_rt,
      post_office_rent, post_office_equ, post_office_sup, post_consultant, 
      post_it_network, post_phone_net, post_computers_soft, post_store,
      post_ship, post_craft, fringes_taxes_post, post_other,
      postSuper_total,postCoordin_total, postAssist_total, 
      postAccount_total, postAccountAss_total, postStaffFac_total,
      // Editing
      editor_qty, editor_uno, editor_una, editor_rt,
      editor_vfx_qty, editor_vfx_uno, editor_vfx_una, editor_vfx_rt,
      editor_ass_qty, editor_ass_uno, editor_ass_una, editor_ass_rt,
      colorist_grader_qty, colorist_grader_uno, colorist_grader_una, colorist_grader_rt,
      graphics_qty, graphics_uno, graphics_una, graphics_rt,
      edit_rooms, edit_equip, edit_equip_nonlin, online,
      vfx_ed_system, post_edit_pur, lossdam_edit, fringes_taxes_post_edit,
      other_post_edit, editor_total, editorVfx_total, editorAss_total,
      grader_total, graphics_total, editing_total,
      // Post Sound
      sound_designer_qty, sound_designer_uno, sound_designer_una, sound_designer_rt,
      editor_sound_qty, editor_sound_uno, editor_sound_una, editor_sound_rt,
      editor_music_qty, editor_music_uno, editor_music_una, editor_music_rt,
      ed_sound_ass_qty, ed_sound_ass_uno, ed_sound_ass_una, ed_sound_ass_rt,
      adr_super_qty, adr_super_uno, adr_super_una, adr_super_rt,
      foley_labour_qty, foley_labour_uno, foley_labour_una, foley_labour_rt,
      sound_edit_rooms, sound_edit_equ, music_edit_equ,
      post_sound_edit_pur, adr, foley, pre_mix, mix, printmaster, transfers_deliverables,
      lossdam_sound, fringes_taxes_post_sound, other_post_sound,
      desSound_total, editorSound_total, editorMusic_total, 
      soundEdAss_total, adrSup_total, folLab_total, postSound_total,
      // VFX
      vfx_producer, vfx_supervisor, vfx_coordinator, vfx_post_other_lab,
      vfx_storyboard, vfx_pre_vis_team, vfx_post_vis_team, cyberscanning,
      vfx_rentals, vfx_purchases, vfx_vendor_1, vfx_vendor_2, vfx_vendor_3,
      vfx_vendor_4, vfx_vendor_5, vfx_vendor_6, vfx_vendor_7, vfx_vendor_8,
      vfx_vendor_9, vfx_vendor_10, vfx_vendors_x, vfx_traliv, vfx_expenses,
      miniatures_build, miniatures_shoot, motion_capture, lossdam_vfx,
      box_ren_vfx, fringes_taxes_vfx, other_post_vfx, postVfx_total,
      // Post Lab/Video Copies
      stock, neg_cutting, color_cor, interpos_neg, prints,
      transfers, other_media_delivery, distribution_copies, 
      storage_post, postLab_total,
      // Post Titles/Opticals/Stock Footage
      titles, opticals, stock_footage, con_script_ccsl, postTitles_total,
      // Versioning,
      dubs, subtitles, closed_caption, versioning, trailers,
      ads, transfers_ver, prints_ver, dig_copies_ver, 
      other_copies_ver, postVersion_total,   
      } = budget;

  return (
        <div className='px-3'>
        <Row >
        <Col md={1} ></Col>
        <Col md={10} className={ `${styles.OverviewBlue} mt-5 mb-3 py-2
        d-flex align-items-center justify-content-center`}>
        <h4 className={ `${styles.BoldBlack}`}>"C" POST PRODUCTION</h4>
        </Col>
        </Row>
        {/* POST PRODUCTION STAFF/FACILITIES ---------------------- */}
        <div className='mt-4'>
        <Row>
        <Col md={1}></Col>
        <Col xs={1}>
        <p className={`${styles.Underline}`}>42.00</p>
        </Col>
        <Col xs={8}>
        <p className={ `${styles.BoldBlack}`}>POST PRODUCTION STAFF/FACILITIES</p>
        </Col>
        </Row>
        {/* TITLES */}
        <Row className={ `mb-2 py-0`} >
        <Col md={1} ></Col>
        <Col className={ `${styles.Overview} py-1`} md={1} >
        <p className="mb-0">ACCT</p>
        </Col>
        <Col className={ `${styles.Overview} py-1`} md={3} >
        <p className="mb-0">Description</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p className="mb-0">#</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p># Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Price</p>
        </Col>
        <Col md={2} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Total</p>
        </Col>
        <Col md={1}></Col>
        </Row>
        {/* Post Production Supervisor */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.10</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Post Production Supervisor</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_supervisor_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_supervisor_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_supervisor_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_supervisor_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{postSuper_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Production Coordinator */}
        <Row  >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.20</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Post Production Coordinator</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_coordinator_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5}
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_coordinator_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_coordinator_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_coordinator_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{postCoordin_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Production Assistants */}
        <Row  >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.30</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Post Production Assistants</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_assistants_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_assistants_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_assistants_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_assistants_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{postAssist_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Production Accountants */}
        <Row  >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.40</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Post Production Accountants</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_accountants_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_accountants_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_accountants_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_accountants_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{postAccount_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Production Accounting Assistants */}
        <Row  >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.50</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Post Production Accounting Assistants</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_accountants_ass_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_accountants_ass_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_accountants_ass_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_accountants_ass_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{postAccountAss_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Production Consultant */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.60</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Post Production Consultant</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_consultant || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Production Office Rental */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.70</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Post Production Office Rental</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_office_rent || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Office Equipment */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.80</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Post Office Equipment</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_office_equ || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Office Supplies */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.90</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Post Office Supplies</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_office_sup || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post IT, Network Equipment & Support*/}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.91</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Post IT, Network Equipment & Support</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_it_network || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Phone & Internet */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.92</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Post Phone & Internet</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_phone_net || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Computers & Software */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.93</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Post Computers & Software</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_computers_soft || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Storage */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.94</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Post Storage</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_store || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Shipping */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.95</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Post Shipping</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_ship || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Post Catering & Craft Services */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.96</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Post Catering & Craft Services</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_craft || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Other - incl. 6th/7th Days, Overtime and Holidays */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.97</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Other - incl. 6th/7th Days, Overtime and Holidays</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_other || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Fringes & Taxes */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>42.98</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Fringes & Taxes</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{fringes_taxes_post || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* POST PRODUCTION STAFF/FACILITIES Total */}
        <Row className='mt-3 mb-1' >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}></p>
        <p></p>
        </Col>
        <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
        <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL POST PRODUCTION STAFF/FACILITIES </p>
        </Col>
        <Col md={1} >
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline} mb-0`}>{postStaffFac_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        </div>
        {/* EDITING ----------------------------------------------- */}
        <div className='mt-4'>
        <Row>
        <Col md={1}></Col>
        <Col xs={1}>
        <p className={`${styles.Underline}`}>43.00</p>
        </Col>
        <Col xs={8}>
        <p className={ `${styles.BoldBlack}`}>EDITING</p>
        </Col>
        </Row>
        {/* TITLES */}
        <Row className={ `mb-2 py-0`} >
        <Col md={1} ></Col>
        <Col className={ `${styles.Overview} py-1`} md={1} >
        <p className="mb-0">ACCT</p>
        </Col>
        <Col className={ `${styles.Overview} py-1`} md={3} >
        <p className="mb-0">Description</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p className="mb-0">#</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p># Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Price</p>
        </Col>
        <Col md={2} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Total</p>
        </Col>
        <Col md={1}></Col>
        </Row>
        {/* Film/Video Editors */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.10</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Film/Video Editors</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Editors */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.20</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>VFX Editors</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_vfx_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_vfx_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_vfx_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_vfx_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editorVfx_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Assistant Editors */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.30</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Assistant Editors</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_ass_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_ass_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_ass_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_ass_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editorAss_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Colorist/Grader */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.40</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Colorist/Grader</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{colorist_grader_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{colorist_grader_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{colorist_grader_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{colorist_grader_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{grader_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Graphics */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.50</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Graphics</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{graphics_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{graphics_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{graphics_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{graphics_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{graphics_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Editing Rooms */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.60</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Editing Rooms</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{edit_rooms || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Editing Equipment */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.70</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Editing Equipment</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{edit_equip || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Editing Equipment Offline */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.80</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Editing Equipment Offline</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{edit_equip_nonlin || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Editing Equipment Online */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.90</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Editing Equipment Online</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{online || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Editing System */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.91</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Editing System</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_ed_system || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Editing Purchases */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.92</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Editing Purchases</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_edit_pur || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Loss/Damage Editing */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.93</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Loss/Damage Editing</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{lossdam_edit || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Other */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.94</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Other - incl. 6th/7th Days, Overtime and Holidays</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{other_post_edit || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Fringes & Taxes */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>43.95</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Fringes & Taxes</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{fringes_taxes_post_edit || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* EDITING Total */}
        <Row className='mt-3 mb-1' >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}></p>
        <p></p>
        </Col>
        <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
        <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL EDITING</p>
        </Col>
        <Col md={1} >
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline} mb-0`}>{editing_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        </div>
        {/* POST SOUND -------------------------------------------- */}
        <div className='mt-4'>
        <Row>
        <Col md={1}></Col>
        <Col xs={1}>
        <p className={`${styles.Underline}`}>44.00</p>
        </Col>
        <Col xs={8}>
        <p className={ `${styles.BoldBlack}`}>POST SOUND</p>
        </Col>
        </Row>
        {/* TITLES */}
        <Row className={ `mb-2 py-0`} >
        <Col md={1} ></Col>
        <Col className={ `${styles.Overview} py-1`} md={1} >
        <p className="mb-0">ACCT</p>
        </Col>
        <Col className={ `${styles.Overview} py-1`} md={3} >
        <p className="mb-0">Description</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p className="mb-0">#</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p># Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Price</p>
        </Col>
        <Col md={2} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Total</p>
        </Col>
        <Col md={1}></Col>
        </Row>
        {/* Sound Designer */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.10</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Sound Designer</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{sound_designer_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{sound_designer_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{sound_designer_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{sound_designer_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{desSound_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Sound Editor */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.20</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Sound Editor</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_sound_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_sound_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_sound_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_sound_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editorSound_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Music Editor */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.30</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Music Editor</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_music_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_music_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_music_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editor_music_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{editorMusic_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Assistant Sound Editors */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.40</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Assistant Sound Editors</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{ed_sound_ass_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{ed_sound_ass_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{ed_sound_ass_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{ed_sound_ass_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{soundEdAss_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* ADR Supervisor */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.50</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>ADR Supervisor</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{adr_super_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{adr_super_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{adr_super_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{adr_super_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{adrSup_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Foley Labour */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.60</p>
        </Col>
        <Col md={3} >
        <p className={`${styles.Underline}`}>Foley Labour</p>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{foley_labour_qty || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{foley_labour_uno || 0}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{foley_labour_una}</p>
        </div>
        </Col>
        <Col md={1} >
        <div className={`${styles.Box5} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{foley_labour_rt || 0}</p>
        </div>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{folLab_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Sound Editing Rooms */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.70</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Sound Editing Rooms</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{sound_edit_rooms || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Sound Editing Equipment */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.80</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Sound Editing Equipment</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{sound_edit_equ || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Music Editing Equipment */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.90</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Music Editing Equipment</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{music_edit_equ || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Sound Editing Purchases */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.91</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Sound Editing Purchases</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{post_sound_edit_pur || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* ADR */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.92</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>ADR</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{adr || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Foley */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.93</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Foley</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{foley || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Pre-mix */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.94</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Pre-mix</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{pre_mix || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Mix */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.95</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Mix</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{mix || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Printmaster */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.96</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Printmaster</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{printmaster || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Transfers/Deliverables */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.97</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Transfers/Deliverables</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{transfers_deliverables || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Loss/Damage */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.98</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Loss/Damage</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{lossdam_sound || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Other */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.99</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Other - incl. 6th/7th Days, Overtime and Holidays</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{other_post_sound || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Fringes & Taxes */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>44.991</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Fringes & Taxes</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{fringes_taxes_post_sound || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* POST SOUND Total */}
        <Row className='mt-3 mb-1' >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}></p>
        <p></p>
        </Col>
        <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
        <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL POST SOUND</p>
        </Col>
        <Col md={1} >
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline} mb-0`}>{postSound_total || 0}</p>
        </div>
        </Col>
        </Row>  
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        </div>
        {/* VISUAL EFFECTS ---------------------------------------- */}
        <div className='mt-4'>
        <Row>
        <Col md={1}></Col>
        <Col xs={1}>
        <p className={`${styles.Underline}`}>45.00</p>
        </Col>
        <Col xs={8}>
        <p className={ `${styles.BoldBlack}`}>VISUAL EFFECTS</p>
        </Col>
        </Row>
        {/* TITLES */}
        <Row className={ `mb-2 py-0`} >
        <Col md={1} ></Col>
        <Col className={ `${styles.Overview} py-1`} md={1} >
        <p className="mb-0">ACCT</p>
        </Col>
        <Col className={ `${styles.Overview} py-1`} md={3} >
        <p className="mb-0">Description</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p className="mb-0">#</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p># Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Price</p>
        </Col>
        <Col md={2} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Total</p>
        </Col>
        <Col md={1}></Col>
        </Row>
        {/* VFX Producer */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.10</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Producer</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_producer || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Supervisor */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.20</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Supervisor</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_supervisor || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Coordinator */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.30</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Coordinator</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_coordinator || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Storyboard */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.40</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Storyboard</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_storyboard || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Pre Vis Team */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.50</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Pre Vis Team</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_pre_vis_team || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Post Vis Team */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.60</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Post Vis Team</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_post_vis_team || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Other Labour */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.70</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Other Labour</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_post_other_lab || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Miniatures Build */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.80</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Miniatures Build</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{miniatures_build || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Miniatures Shoot */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.90</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Miniatures Shoot</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{miniatures_shoot || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Motion Capture */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.91</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Motion Capture</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{motion_capture || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Cyberscanning */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.92</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Cyberscanning</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{cyberscanning || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Rentals */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.93</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Rentals</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_rentals || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Purchases */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.94</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Purchases</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_purchases || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Vendor #1 */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.95</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Vendor #1</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendor_1 || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Vendor #2 */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.96</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Vendor #2</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendor_2 || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Vendor #3 */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.97</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Vendor #3</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendor_3 || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Vendor #4 */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.98</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Vendor #4</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendor_4 || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Vendor #5 */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.99</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Vendor #5</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendor_5 || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Vendor #6 */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.991</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Vendor #6</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendor_6 || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Vendor #7 */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.992</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Vendor #7</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendor_7 || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Vendor #8 */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.993</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Vendor #8</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendor_8 || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Vendor #9 */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.994</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Vendor #9</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendor_9 || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Vendor #10 */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.995</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Vendor #10</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendor_10 || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Other VFX Vendors Total */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.996</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Other VFX Vendors Total </p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_vendors_x || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Expenses */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.997</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Expense </p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_expenses || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VFX Travel & Living */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.998</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>VFX Travel & Living </p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{vfx_traliv || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Box Rentals */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.999</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Box Rentals</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{box_ren_vfx || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Loss/Damage */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.9991</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Loss/Damage</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{lossdam_vfx || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Other */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.9992</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Other</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{other_post_vfx || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Fringes & Taxes */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>45.9993</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Fringes & Taxes</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{fringes_taxes_vfx || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VISUAL EFFECTS Total */}
        <Row className='mt-3 mb-1' >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}></p>
        <p></p>
        </Col>
        <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
        <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL VISUAL EFFECTS</p>
        </Col>
        <Col md={1} >
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline} mb-0`}>{postVfx_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        </div>
        {/* POST LAB/VIDEO COPIES --------------------------------- */}
        <div className='mt-4'>
        <Row>
        <Col md={1}></Col>
        <Col xs={1}>
        <p className={`${styles.Underline}`}>46.00</p>
        </Col>
        <Col xs={8}>
        <p className={ `${styles.BoldBlack}`}>POST PRODUCTION LAB/VIDEO COPIES</p>
        </Col>
        </Row>
        {/* TITLES */}
        <Row className={ `mb-2 py-0`} >
        <Col md={1} ></Col>
        <Col className={ `${styles.Overview} py-1`} md={1} >
        <p className="mb-0">ACCT</p>
        </Col>
        <Col className={ `${styles.Overview} py-1`} md={3} >
        <p className="mb-0">Description</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p className="mb-0">#</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p># Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Price</p>
        </Col>
        <Col md={2} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Total</p>
        </Col>
        <Col md={1}></Col>
        </Row>
        {/* Stock */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>46.10</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Stock</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{stock || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Neg Cutting */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>46.20</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Neg Cutting</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{neg_cutting || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Colour Correct */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>46.30</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Colour Correct</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{color_cor || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Interpositive/Internegative */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>46.40</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Interpositive/Internegative</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{interpos_neg || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Prints */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>46.50</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Prints</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{prints || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Transfers */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>46.60</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Transfers</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{transfers || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Distribution Copies */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>46.70</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Distribution Copies</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{distribution_copies || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* All Media Types Copies */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>46.80</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>All Media Types Copies</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{other_media_delivery || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Storage */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>46.90</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Storage</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{storage_post || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* POST PRODUCTION LAB/VIDEO COPIES Total */}
        <Row className='mt-3 mb-1' >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}></p>
        <p></p>
        </Col>
        <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
        <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL POST PRODUCTION LAB/VIDEO COPIES</p>
        </Col>
        <Col md={1} >
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline} mb-0`}>{postLab_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        </div>
        {/* TITLES/OPTICALS/STOCK FOOTAGE ------------------------- */}
        <div className='mt-4'>
        <Row>
        <Col md={1}></Col>
        <Col xs={1}>
        <p className={`${styles.Underline}`}>47.00</p>
        </Col>
        <Col xs={8}>
        <p className={ `${styles.BoldBlack}`}>TITLES/OPTICALS/STOCK FOOTAGE</p>
        </Col>
        </Row>
        {/* TITLES */}
        <Row className={ `mb-2 py-0`} >
        <Col md={1} ></Col>
        <Col className={ `${styles.Overview} py-1`} md={1} >
        <p className="mb-0">ACCT</p>
        </Col>
        <Col className={ `${styles.Overview} py-1`} md={3} >
        <p className="mb-0">Description</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p className="mb-0">#</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p># Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Price</p>
        </Col>
        <Col md={2} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Total</p>
        </Col>
        <Col md={1}></Col>
        </Row>
        {/* Titles */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>47.10</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Titles</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{titles || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Opticals */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>47.20</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Opticals</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{opticals || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Stock Footage */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>47.30</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Stock Footage</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{stock_footage || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Continuity Script CCSL */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>47.40</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Continuity Script CCSL</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{con_script_ccsl || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* TITLES/OPTICALS/STOCK FOOTAGE Total */}
        <Row className='mt-3 mb-1' >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}></p>
        <p></p>
        </Col>
        <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
        <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL TITLES/OPTICALS/STOCK FOOTAGE </p>
        </Col>
        <Col md={1} >
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline} mb-0`}>{postTitles_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        </div>
        {/* VERSIONING/CLOSED-CAPTIONING/COPIES ------------------- */}
        <div className='mt-4'>
        <Row>
        <Col md={1}></Col>
        <Col xs={1}>
        <p className={`${styles.Underline}`}>48.00</p>
        </Col>
        <Col xs={8}>
        <p className={ `${styles.BoldBlack}`}>VERSIONING/CLOSED-CAPTIONING/COPIES</p>
        </Col>
        </Row>
        {/* TITLES */}
        <Row className={ `mb-2 py-0`} >
        <Col md={1} ></Col>
        <Col className={ `${styles.Overview} py-1`} md={1} >
        <p className="mb-0">ACCT</p>
        </Col>
        <Col className={ `${styles.Overview} py-1`} md={3} >
        <p className="mb-0">Description</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p className="mb-0">#</p>
        </Col>
        <Col className={`${styles.Overview} text-center py-1`} md={1} >
        <p># Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Unit</p>
        </Col>
        <Col md={1} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Price</p>
        </Col>
        <Col md={2} className={`${styles.Overview} text-center py-1`} >
        <p className="mb-0">Total</p>
        </Col>
        <Col md={1}></Col>
        </Row>
        {/* Dubs */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>48.10</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Dubs</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{dubs || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Subtitles */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>48.20</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Subtitles</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{subtitles || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Closed-Captioning */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>48.30</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Closed-Captioning</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{closed_caption || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Versioning */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>48.40</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Versioning</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{versioning || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Trailers */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>48.50</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Trailers</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{trailers || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Ads */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>48.60</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Ads</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{ads || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Versioning Transfers */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>48.70</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Versioning Transfers</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{transfers_ver || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Versioning Prints */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>48.80</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Versioning Prints</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{prints_ver || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Versioning Digital Copies */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>48.90</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Versioning Digital Copies</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{dig_copies_ver || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* Versioning Other Media Copies */}
        <Row>
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}>48.90</p>
        </Col>
        <Col md={7} >
        <p className={`${styles.Underline}`}>Versioning Other Media Copies</p>
        </Col>
        <Col md={2}>
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline}`}>{other_copies_ver || 0} </p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        {/* VERSIONING/CLOSED-CAPTIONING/COPIES Total */}
        <Row className='mt-3 mb-1' >
        <Col md={1}></Col>
        <Col md={1} >
        <p className={`${styles.Underline}`}></p>
        <p></p>
        </Col>
        <Col className={ `${styles.Overview} my-0 pt-1`} md={6} >
        <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL VERSIONING/CLOSED-CAPTIONING/COPIES</p>
        </Col>
        <Col md={1} >
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        py-0 d-flex align-items-center justify-content-center`}>
        <p className={`${styles.Underline} mb-0`}>{postVersion_total || 0}</p>
        </div>
        </Col>
        </Row>
        {/* hr */}
        <Row>
        <Col md={1}></Col>
        <Col md={10} >
        <hr className={`${styles.Break1} mt-0 mb-0`}/>
        </Col>
        </Row>
        </div>
        {/* TOTAL - POST PRODUCTION "C" */}
        <div className="mt-5 pl-3">
        <Row  >
        <Col md={1} ></Col>
        <Col className={ `${styles.Overview} my-0 pt-1`} md={8} >
        <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - POST PRODUCTION "C" </p>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.BoldBlack} `}>{post_productionC_total || 0}</p>
        </div>
        </Col>
        </Row>
        </div>
        {/* TOTAL - BELOW "B" and "C" */}
        <div className="mt-3 pl-3">
        <Row >
        <Col md={1} ></Col>
        <Col className={ `${styles.Overview} my-0 pt-1`} md={8} >
        <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - BELOW THE LINE "B" and "C" </p>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.BoldBlack}`}>{belowB_andC_total || 0}</p>
        </div>
        </Col>
        </Row>
        </div>
        {/* TOTAL - ABOVE/BELOW "A" "B" and "C" */}
        <div className="mt-3 pl-3">
        <Row >
        <Col md={1} ></Col>
        <Col className={ `${styles.Overview} my-0 pt-1`} md={8} >
        <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL - ABOVE/BELOW THE LINE "A" "B" and "C" </p>
        </Col>
        <Col md={2} >
        <div className={`${styles.Box3} 
        d-flex align-items-center justify-content-center`}>
        <p className={`${styles.BoldBlack}`}>{above_belowABC_total || 0}</p>
        </div>
        </Col>
        </Row>
        </div>
        </div>
  )
}

export default BudgetPost