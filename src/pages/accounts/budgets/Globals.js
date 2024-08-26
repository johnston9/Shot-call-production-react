/* Globals component on the Budget Edit Page */
// eslint-disable-next-line
import React, {useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Account.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import InfoGlobals from "./InfoGlobals";

const Globals = (props) => {
  const {setShow, 
    postDataProduction, setPostDataProduction,
    postDataDesign, setPostDataDesign,
    postDataConstruction, setPostDataConstruction,
    postDataSetDressing, setPostDataSetDressing,
    postDataProperty, setPostDataProperty,
    postDataWrangling, setPostDataWrangling,
    postDataSpecialEffects, setPostDataSpecialEffects,
    postDataWardrobe, setPostDataWardrobe,
    postDataMakeup, setPostDataMakeup,
    postDataCamera, setPostDataCamera,
    postDataElectric, setPostDataElectric,
    postDataGrip, setPostDataGrip,
    postDataSoundPro, setPostDataSoundPro,
    postDataTransport, setPostDataTransport,
    postDataTV, setPostDataTV,
  } = props;

  const [showInfo, setShowInfo] = useState(false);
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  // GLOBALS
  const [globalData, setGlobalData] = useState({
    prep_global: "",
    shoot_global: "",
    wrap_global: "",
  })

  const {prep_global, shoot_global, wrap_global} = globalData;

  const setShoot = () => {
    /* Function to set all crew shoot weeks to shoot global  */
    setPostDataProduction({
      ...postDataProduction,
      production_manager_units_number: shoot_global,
      production_supervisor_units_number: shoot_global,
      production_coordinator_units_number: shoot_global,
      unit_manager_units_number: shoot_global,
      location_manager_units_number: shoot_global,
      location_manager_assistant_units_number: shoot_global,
      production_assistants_units_number: shoot_global,
      production_secretary_units_number: shoot_global,
      production_accountant_units_number: shoot_global,
      production_accountant_assistant_units_number: shoot_global,
      scriptsupervisor_continuity_units_number: shoot_global,
      payroll_units_number: shoot_global,
      other_production_units_number: shoot_global,
      directors_assistant_units_number: shoot_global,
      assistant_director_1st_units_number: shoot_global,
      assistant_director_2nd_units_number: shoot_global,
      assistant_director_3rd_units_number: shoot_global,
      craft_services_units_number: shoot_global,
    });
    setPostDataDesign({
      ...postDataDesign,
      production_designer_units_number: shoot_global,
      art_director_units_number: shoot_global,
      art_assistants_units_number: shoot_global,
      production_assistants_trainees_units_number: shoot_global,
      graphic_artists_units_number: shoot_global,
      supervart_uno: shoot_global,
      standby_art_uno: shoot_global,
      set_design_uno: shoot_global,
      junior_draught_uno: shoot_global,
      art_dep_coor_uno: shoot_global,
    });
    setPostDataConstruction({
      ...postDataConstruction,
      constructioncoordinator_units_number: shoot_global,
      headcarpenter_units_number: shoot_global,
      carpenters_units_number: shoot_global,
      scenicpainters_units_number: shoot_global,
      headpainter_units_number: shoot_global,
      painters_units_number: shoot_global,
      labourers_units_number: shoot_global,
    });
    setPostDataSetDressing({
      ...postDataSetDressing,
      set_decorator_units_number: shoot_global,
      assist_set_decorator_units_number: shoot_global,
      lead_man_units_number: shoot_global,
      set_dressers_units_number: shoot_global,
      swing_gang_units_number: shoot_global,
      set_dressing_buyer_units_number: shoot_global,
    });
    setPostDataProperty({
      ...postDataProperty,
      property_master_units_number: shoot_global,
      assist_property_master_units_number: shoot_global,
      on_set_props_person_units_number: shoot_global,
      property_buyer_units_number: shoot_global,
      armorer_units_number: shoot_global,
    });
    setPostDataWrangling({
      ...postDataWrangling,
      head_wrangler_units_number: shoot_global,
      other_wrangling_labour_units_number: shoot_global,
    });
    setPostDataSpecialEffects({
      ...postDataSpecialEffects,
      fx_supervisor_units_number: shoot_global,
      assist_fx_units_number: shoot_global,
      other_fx_labour_units_number: shoot_global,
    });
    setPostDataWardrobe({
      ...postDataWardrobe,
      costume_designer_units_number: shoot_global,
      assist_costume_designer_units_number: shoot_global,
      head_wardrobe_units_number: shoot_global,
      wardrobe_assist_units_number: shoot_global,
      truck_costumer_units_number: shoot_global,
      other_wardrobe_labour_units_number: shoot_global,
      train_uno: shoot_global,
      war_coor_uno: shoot_global,
      shopper_uno: shoot_global,
    });
    setPostDataMakeup({
      ...postDataMakeup,
      makeup_dept_head_units_number: shoot_global,
      key_makeup_units_number: shoot_global,
      makeup_artist_units_number: shoot_global,
      key_hairstylist_units_number: shoot_global,
      hairdresser_units_number: shoot_global,
      sfx_makeup_units_number: shoot_global,
      other_makeup_labour_units_number: shoot_global,
      mak_train_uno: shoot_global,
    });
    setPostDataCamera({
      ...postDataCamera,
      dop_uno: shoot_global,
      camera_op_uno: shoot_global,
      cam_ac1_uno: shoot_global,
      cam_ac2_uno: shoot_global,
      dit_uno: shoot_global,
      steadicam_uno: shoot_global,
      cam_pa_uno: shoot_global,
      drone_pilot_uno: shoot_global,
      other_cam_uno: shoot_global,
    });
    setPostDataElectric({
      ...postDataElectric,
      gaffer_uno: shoot_global,
      best_boy_uno: shoot_global,
      electrician_uno: shoot_global,
      generator_op_uno: shoot_global,
      other_elec_uno: shoot_global,
    });
    setPostDataGrip({
      ...postDataGrip,
      key_grip_uno: shoot_global,
      best_boy_grip_uno: shoot_global,
      grips_uno: shoot_global,
      dolly_crane_grip_uno: shoot_global,
      swing_grips_uno: shoot_global,
      other_grip_labour_uno: shoot_global,
    });
    setPostDataSoundPro({
      ...postDataSoundPro,
      sound_mixer_uno: shoot_global,
      boom_operator_uno: shoot_global,
      cable_wrangler_uno: shoot_global,
      other_sound_labour_uno: shoot_global,
    });
    setPostDataTransport({
      ...postDataTransport,
      tp_coordinator_uno: shoot_global,
      tp_captain_uno: shoot_global,
      tp_manager_uno: shoot_global,
      head_driver_uno: shoot_global,
      drivers_uno: shoot_global,
    });
    setPostDataTV({
      ...postDataTV,
      tech_super_uno: shoot_global,
      tech_direct_uno: shoot_global,
      floor_man_uno: shoot_global,
      light_direct_uno: shoot_global,
      boardman_uno: shoot_global,
      audio_uno: shoot_global,
      vtr_operator_uno: shoot_global,
      stagehands_uno: shoot_global,
      other_tv_uno: shoot_global,
    });    
  };

  const setPrep = () => {
    /* Function to set all crew prep weeks to prep global  */
    setPostDataProduction({
        ...postDataProduction,
        production_manager_uno_prep: prep_global,
        production_supervisor_uno_prep: prep_global,
        production_coordinator_uno_prep: prep_global,
        unit_manager_uno_prep: prep_global,
        location_manager_uno_prep: prep_global,
        location_manager_ass_uno_prep: prep_global,
        production_ass_uno_prep: prep_global,
        production_sec_uno_prep: prep_global,
        production_acc_uno_prep: prep_global,
        production_acc_ass_uno_prep: prep_global,
        scriptsupervisor_con_uno_prep: prep_global,
        payroll_uno_prep: prep_global,
        other_pro_uno_prep: prep_global,
        directors_ass_uno_prep: prep_global,
        ass_director_1st_uno_prep: prep_global,
        ass_director_2nd_uno_prep: prep_global,
        ass_director_3rd_uno_prep: prep_global,
        craft_services_uno_prep: prep_global,
    });
    setPostDataDesign({
      ...postDataDesign,
      pro_designer_uno_prep: prep_global,
      art_director_uno_prep: prep_global,
      art_ass_uno_prep: prep_global,
      pro_ass_trainees_uno_prep: prep_global,
      graphic_art_uno_prep: prep_global,
      supervart_uno_prep: prep_global,
      standby_art_uno_prep: prep_global,
      set_design_uno_prep: prep_global,
      junior_draught_uno_prep: prep_global,
      art_dep_coor_uno_prep: prep_global,
    });
    setPostDataConstruction({
        ...postDataConstruction,
        con_coor_uno_prep: prep_global,
        headcar_uno_prep: prep_global,
        carpen_uno_prep: prep_global,
        scenic_uno_prep: prep_global,
        headpain_uno_prep: prep_global,
        pain_uno_prep: prep_global,
        labo_uno_prep: prep_global,
    });
    setPostDataSetDressing({
        ...postDataSetDressing,
        set_dec_uno_prep: prep_global,
        ass_set_d_uno_prep: prep_global,
        lead_man_uno_prep: prep_global,
        set_dres_uno_prep: prep_global,
        swing_g_uno_prep: prep_global,
        set_d_buy_uno_prep: prep_global,
    });
    setPostDataProperty({
        ...postDataProperty,
        pro_mas_uno_prep: prep_global,
        as_pro_ma_uno_prep: prep_global,
        on_set_prop_uno_prep: prep_global,
        prop_buy_uno_prep: prep_global,
        armor_uno_prep: prep_global,
    });
    setPostDataWrangling({
        ...postDataWrangling,
        he_wran_uno_prep: prep_global,
        oth_wran_uno_prep: prep_global,
    });
    setPostDataSpecialEffects({
        ...postDataSpecialEffects,
        fx_sup_uno_prep: prep_global,
        ass_fx_uno_prep: prep_global,
        ot_fx_l_uno_prep: prep_global,
    });
    setPostDataWardrobe({
        ...postDataWardrobe,
        cos_des_uno_prep: prep_global,
        as_cos_des_uno_prep: prep_global,
        he_war_uno_prep: prep_global,
        ot_war_uno_prep: prep_global,
        tru_cos_uno_prep: prep_global,
        shopper_uno_prep: prep_global,
        war_as_uno_prep: prep_global,
        train_uno_prep: prep_global,
        war_coor_uno_prep: prep_global,
    });
    setPostDataMakeup({
        ...postDataMakeup,
        mak_head_uno_prep: prep_global,
        key_mak_uno_prep: prep_global,
        mak_art_uno_prep: prep_global,
        key_hair_uno_prep: prep_global,
        hair_uno_prep: prep_global,
        oth_mak_uno_prep: prep_global,
        sfx_mak_uno_prep: prep_global,
        mak_train_uno_prep: prep_global,
    });
    setPostDataCamera({
        ...postDataCamera,
        dop_uno_prep: prep_global,
        cam_op_uno_prep: prep_global,
        cam_ac1_uno_prep: prep_global,
        cam_ac2_uno_prep: prep_global,
        dit_uno_prep: prep_global,
        stead_uno_prep: prep_global,
        cam_pa_uno_prep: prep_global,
        dro_pil_uno_prep: prep_global,
        ot_cam_uno_prep: prep_global,
    });
    setPostDataElectric({
        ...postDataElectric,
        gaf_uno_prep: prep_global,
        b_boy_uno_prep: prep_global,
        elec_uno_prep: prep_global,
        gen_op_uno_prep: prep_global,
        ot_el_uno_prep: prep_global,
    });
    setPostDataGrip({
        ...postDataGrip,
        k_grip_uno_prep: prep_global,
        bb_grip_uno_prep: prep_global,
        grips_uno_prep: prep_global,
        dol_grip_uno_prep: prep_global,
        sw_grips_uno_prep: prep_global,
        oth_grip_uno_prep: prep_global,
    });
    setPostDataSoundPro({
        ...postDataSoundPro,
        so_mix_uno_prep: prep_global,
        boom_op_uno_prep: prep_global,
        cab_wran_uno_prep: prep_global,
        ot_sound_uno_prep: prep_global,
    });
    setPostDataTransport({
        ...postDataTransport,
        tp_coor_uno_prep: prep_global,
        tp_cap_uno_prep: prep_global,
        tp_man_uno_prep: prep_global,
        head_dr_uno_prep: prep_global,
        drive_uno_prep: prep_global,
    });
    setPostDataTV({
        ...postDataTV,
        tec_sup_uno_prep: prep_global,
        tec_dir_uno_prep: prep_global,
        flo_man_uno_prep: prep_global,
        lig_dir_uno_prep: prep_global,
        boardm_uno_prep: prep_global,
        audio_uno_prep: prep_global,
        vtr_op_uno_prep: prep_global,
        stageh_uno_prep: prep_global,
        oth_tv_uno_prep: prep_global,
    });
  };

  const setWrap = () => {
    /* Function to set all crew wrap weeks to wrap global */
    setPostDataProduction({
      ...postDataProduction,
      production_manager_uno_wrap: wrap_global,
      production_supervisor_uno_wrap: wrap_global,
      production_coordinator_uno_wrap: wrap_global,
      unit_manager_uno_wrap: wrap_global,
      location_manager_uno_wrap: wrap_global,
      location_manager_ass_uno_wrap: wrap_global,
      production_ass_uno_wrap: wrap_global,
      production_sec_uno_wrap: wrap_global,
      production_acc_uno_wrap: wrap_global,
      production_acc_ass_uno_wrap: wrap_global,
      scriptsupervisor_con_uno_wrap: wrap_global,
      payroll_uno_wrap: wrap_global,
      other_pro_uno_wrap: wrap_global,
      directors_ass_uno_wrap: wrap_global,
      ass_director_1st_uno_wrap: wrap_global,
      ass_director_2nd_uno_wrap: wrap_global,
      ass_director_3rd_uno_wrap: wrap_global,
      craft_services_uno_wrap: wrap_global,     
    });
    setPostDataDesign({
      ...postDataDesign,
      pro_designer_uno_wrap: wrap_global,
      art_director_uno_wrap: wrap_global,
      art_ass_uno_wrap: wrap_global,
      pro_ass_trainees_uno_wrap: wrap_global,
      art_dep_coor_uno_wrap: wrap_global,
    });
    setPostDataConstruction({
        ...postDataConstruction,
        con_coor_uno_wrap: wrap_global,
        headcar_uno_wrap: wrap_global,
        carpen_uno_wrap: wrap_global,
        scenic_uno_wrap: wrap_global,
        headpain_uno_wrap: wrap_global,
        pain_uno_wrap: wrap_global,
        labo_uno_wrap: wrap_global,
    });
    setPostDataSetDressing({
        ...postDataSetDressing,
        set_dec_uno_wrap: wrap_global,
        ass_set_d_uno_wrap: wrap_global,
        lead_man_uno_wrap: wrap_global,
        set_dres_uno_wrap: wrap_global,
        swing_g_uno_wrap: wrap_global,
        set_d_buy_uno_wrap: wrap_global,
    });
    setPostDataProperty({
        ...postDataProperty,
        pro_mas_uno_wrap: wrap_global,
        as_pro_ma_uno_wrap: wrap_global,
        on_set_prop_uno_wrap: wrap_global,
        prop_buy_uno_wrap: wrap_global,
        armor_uno_wrap: wrap_global,
    });
    setPostDataWrangling({
        ...postDataWrangling,
        he_wran_uno_wrap: wrap_global,
        oth_wran_uno_wrap: wrap_global,
    });
    setPostDataSpecialEffects({
        ...postDataSpecialEffects,
        fx_sup_uno_wrap: wrap_global,
        ass_fx_uno_wrap: wrap_global,
        ot_fx_l_uno_wrap: wrap_global,
    });
    setPostDataWardrobe({
        ...postDataWardrobe,
        cos_des_uno_wrap: wrap_global,
        as_cos_des_uno_wrap: wrap_global,
        he_war_uno_wrap: wrap_global,
        ot_war_uno_wrap: wrap_global,
        tru_cos_uno_wrap: wrap_global,
        war_as_uno_wrap: wrap_global,
        train_uno_wrap: wrap_global,
        war_coor_uno_wrap: wrap_global,
    });
    setPostDataMakeup({
        ...postDataMakeup,
        mak_head_uno_wrap: wrap_global,
        key_mak_uno_wrap: wrap_global,
        mak_art_uno_wrap: wrap_global,
        key_hair_uno_wrap: wrap_global,
        hair_uno_wrap: wrap_global,
        oth_mak_uno_wrap: wrap_global,
        sfx_mak_uno_wrap: wrap_global,
        mak_train_uno_wrap: wrap_global,
    });
    setPostDataCamera({
        ...postDataCamera,
        dop_uno_wrap: wrap_global,
        cam_op_uno_wrap: wrap_global,
        cam_ac1_uno_wrap: wrap_global,
        cam_ac2_uno_wrap: wrap_global,
        dit_uno_wrap: wrap_global,
        stead_uno_wrap: wrap_global,
        cam_pa_uno_wrap: wrap_global,
        dro_pil_uno_wrap: wrap_global,
        ot_cam_uno_wrap: wrap_global,
    });
    setPostDataElectric({
        ...postDataElectric,
        gaf_uno_wrap: wrap_global,
        b_boy_uno_wrap: wrap_global,
        elec_uno_wrap: wrap_global,
        gen_op_uno_wrap: wrap_global,
        ot_el_uno_wrap: wrap_global,
    });
    setPostDataGrip({
        ...postDataGrip,
        k_grip_uno_wrap: wrap_global,
        bb_grip_uno_wrap: wrap_global,
        grips_uno_wrap: wrap_global,
        dol_grip_uno_wrap: wrap_global,
        sw_grips_uno_wrap: wrap_global,
        oth_grip_uno_wrap: wrap_global,
    });
    setPostDataSoundPro({
        ...postDataSoundPro,
        so_mix_uno_wrap: wrap_global,
        boom_op_uno_wrap: wrap_global,
        cab_wran_uno_wrap: wrap_global,
        ot_sound_uno_wrap: wrap_global,
    });
    setPostDataTransport({
        ...postDataTransport,
        tp_coor_uno_wrap: wrap_global,
        tp_cap_uno_wrap: wrap_global,
        tp_man_uno_wrap: wrap_global,
        head_dr_uno_wrap: wrap_global,
        drive_uno_wrap: wrap_global,
    });
    setPostDataTV({
        ...postDataTV,
        tec_sup_uno_wrap: wrap_global,
        tec_dir_uno_wrap: wrap_global,
        flo_man_uno_wrap: wrap_global,
        lig_dir_uno_wrap: wrap_global,
        boardm_uno_wrap: wrap_global,
        audio_uno_wrap: wrap_global,
        vtr_op_uno_wrap: wrap_global,
        stageh_uno_wrap: wrap_global,
        oth_tv_uno_wrap: wrap_global,
    });
  };

  const handleChangeGlobals = (event) => {
    setGlobalData({
      ...globalData,
      [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
  };

  return (
        <div>
        <Row className="mb-3">
        <Col md={{span: 10, offset: 1}}>
        <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
        <h5 className={`text-center `} >Globals</h5> 
        </div> 
        <div className={`px-3 pt-1 ${styles.SubTitle77 }`}>
        {/* close/INFO buttons */}
        <Row className="mt-1 ml-2 px-3" >
            <Col >
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
              onClick={() => setShow(false)}
            >
              Close
            </Button>
            <Button
              className={`float-right py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
              onClick={() => setShowInfo(showInfo => !showInfo)} >Information
            </Button>
            </Col>
        </Row>
        {/* INFO COMPONENT */}
        <div>
        {!showInfo ? (
          ""
              ) : (
                <InfoGlobals  /> 
        ) }  
        </div>
        {/* Prep Shoot Wrap Globals input boxes and set buttons*/}
        <div>
        <Row>
        {/* prep */}
        <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="prep_global" 
        className={`${styles.Width95} text-center mb-0`}  >
            <Form.Label className={`${styles.Bold}`} >Prep Global</Form.Label>
            <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prep_global"
              value={prep_global}
              onChange={handleChangeGlobals}
                />
        </Form.Group>
        {errors?.prep_global?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
        {/* shoot */}
        <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="shoot_global" 
        className={`${styles.Width95} text-center mb-0`}>
            <Form.Label className={`${styles.Bold} text-center`}>Shoot Global</Form.Label>
            <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="shoot_global"
              value={shoot_global}
              onChange={handleChangeGlobals}
                />
        </Form.Group>
        {errors?.shoot_global?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
        {/* wrap */}
        <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="wrap_global" 
        className={`${styles.Width95} text-center mb-0`}>
            <Form.Label className={`${styles.Bold} text-center`}>Wrap Global</Form.Label>
            <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wrap_global"
              value={wrap_global}
              onChange={handleChangeGlobals}
                />
        </Form.Group>
        {errors?.wrap_global?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
        </Row>
        </div>
        {/* Prep Shoot Wrap Globals set buttons*/}
        <div>
        <Row>
        <Col xs={4} className="text-center" >
        <Button
            className={`py-0 my-2 px-5 ${btnStyles.Shed} ${btnStyles.Button}`}
            onClick={setPrep} >SET PREP
          </Button>
        </Col>
        <Col xs={4} className="text-center" >
        <Button
            className={`py-0 my-2 px-5 ${btnStyles.Shed} ${btnStyles.Button}`}
            onClick={setShoot} >SET SHOOT
        </Button>
        </Col>
        <Col xs={4} className="text-center" >
        <Button
          className={`py-0 my-2 px-5 ${btnStyles.Shed} ${btnStyles.Button}`}
          onClick={setWrap} >SET WRAP
        </Button>
        </Col>
        </Row>
        </div>
        </div>
        </Col>
      </Row>
        </div>
  )
}

export default Globals