/* Component in the Budget page to edit the Budget */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Account.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../../api/axiosDefaults";
import { useHistory, useParams } from 'react-router-dom';
import Rights from "./budgetsections/Rights";
import Info from "./budgetsections/Info";
import Development from "./budgetsections/Development";
import Scenario from "./budgetsections/Scenario";
import ProducersDirectors from "./budgetsections/ProducersDirectors";
import StarsMusic from "./budgetsections/StarsMusic";
import Cast from "./budgetsections/Cast";
import ProductionStaff from "./budgetsections/ProductionStaff";
import DesignLabour from "./budgetsections/DesignLabour";
import SetDressingLabour from "./budgetsections/SetDressingLabour";
import Construction from "./budgetsections/Construction";
import PropertyLabour from "./budgetsections/PropertyLabour";
import Wrangling from "./budgetsections/Wrangling";
import SpecialEffects from "./budgetsections/SpecialEffects";
import Wardrobe from "./budgetsections/Wardrobe";
import Makeup from "./budgetsections/Makeup";
import Camera from "./budgetsections/Camera";
import Electric from "./budgetsections/Electric";
import Grip from "./budgetsections/Grip";
import Sound from "./budgetsections/Sound";
import Transport from "./budgetsections/Transport";
import TV from "./budgetsections/TV";
import ProductionOffice from "./budgetsectionscosts/ProductionOffice";
import Studio from "./budgetsectionscosts/Studio";
import Site from "./budgetsectionscosts/Site";
import Unit from "./budgetsectionscosts/Unit";
import TravelLiving from "./budgetsectionscosts/TravelLiving";
import Transportation from "./budgetsectionscosts/Transportation";
import ConstructionMat from "./budgetsectionscosts/ConstructionMat";
import ArtSupplies from "./budgetsectionscosts/ArtSupplies";
import Dressing from "./budgetsectionscosts/Dressing";
import Props from "./budgetsectionscosts/Props";
import Fx from "./budgetsectionscosts/Fx";
import Animals from "./budgetsectionscosts/Animals";
import WardrobeSup from "./budgetsectionscosts/WardrobeSup";
import MakeupSup from "./budgetsectionscosts/MakeupSup";
import CameraEqu from "./budgetsectionscosts/CameraEqu";
import ElectricEqu from "./budgetsectionscosts/ElectricEqu";
import GripEqu from "./budgetsectionscosts/GripEqu";
import SoundEqu from "./budgetsectionscosts/SoundEqu";
import SecondU from "./budgetsectionscosts/SecondU";
import StockLab from "./budgetsectionscosts/StockLab";
import StaffFacilities from "./budgetsectionspost/StaffFacilities";
import Editing from "./budgetsectionspost/Editing";
import Postsound from "./budgetsectionspost/Postsound";
import PostLabVideo from "./budgetsectionspost/PostLabVideo";
import Titles from "./budgetsectionspost/Titles";
import Versioning from "./budgetsectionspost/Versioning";
import PostVisualEffects from "./budgetsectionspost/PostVisualEffects";
import Publicity from "./budgetsectionsother/Publicity";
import Insurance from "./budgetsectionsother/Insurance";
import GeneralEx from "./budgetsectionsother/GeneralEx";
import IndirectCosts from "./budgetsectionsother/IndirectCosts";
import InfoBudEdit from "./InfoBudEdit";
import Globals from "./Globals";

function BudgetEdit() {
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { id } = useParams();
  const [showInformation, setShowInformation] = useState(false);
  const [showGlobals, setShowGlobals] = useState(false);

  const [showInfo, setShowInfo] = useState(false);
  const [showRights, setShowRights] = useState(false);
  const [showDevelopment, setShowDevelopment] = useState(false);
  const [showScenario, setShowScenario] = useState(false);
  const [showProDirs, setShowProDirs] = useState(false);
  const [showStarsMus, setShowStarsMus] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const [showProStaff, setShowProStaff] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [showCon, setShowCon] = useState(false);
  const [showDress, setShowDress] = useState(false);
  const [showProps, setShowProps] = useState(false);
  const [showWrang, setShowWrang] = useState(false);
  const [showFx, setShowFx] = useState(false);
  const [showWardrobe, setShowWardrobe] = useState(false);
  const [showMake, setShowMake] = useState(false);
  const [showCam, setShowCam] = useState(false);
  const [showElec, setShowElec] = useState(false);
  const [showGrip, setShowGrip] = useState(false);
  const [showSound, setShowSound] = useState(false);
  const [showTport, setShowTport] = useState(false);
  const [showTV, setShowTV] = useState(false);
  const [showProOff, setShowProOff] = useState(false);
  const [showStudio, setShowStudio] = useState(false);
  const [showSite, setShowSite] = useState(false);
  const [showUnit, setShowUnit] = useState(false);
  const [showTraLiv, setShowTraLiv] = useState(false);
  const [showTransport, setShowTransport] = useState(false);
  const [showConMat, setShowConMat] = useState(false);
  const [showArtSup, setShowArtSup] = useState(false);
  const [showDressing, setShowDressing] = useState(false);
  const [showProp, setShowProp] = useState(false);
  const [showSpecFx, setShowSpecFx] = useState(false);
  const [showAnim, setShowAnim] = useState(false);
  const [showWardSup, setShowWardSup] = useState(false);
  const [showMakeSup, setShowMakeSup] = useState(false);
  const [showCamEqu, setShowCamEqu] = useState(false);
  const [showElecEqu, setShowElecEqu] = useState(false);
  const [showGripEqu, setShowGripEqu] = useState(false);
  const [showSoundEqu, setShowSoundEqu] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showLab, setShowLab] = useState(false);
  const [showStaFac, setShowStaFac] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showPoSoun, setShowPoSoun] = useState(false);
  const [showPoLab, setShowPoLab] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showVers, setShowVers] = useState(false);
  const [showVfxPo, setShowVfxPo] = useState(false);
  const [showPub, setShowPub] = useState(false);
  const [showInsur, setShowInsur] = useState(false);
  const [showGenex, setShowGenex] = useState(false);
  const [showIndir, setShowIndir] = useState(false);
  
  // budget id
  const [budgetId1, setBudgetId1] = useState("");
  const [budgetId2, setBudgetId2] = useState("");
  const [budgetId3, setBudgetId3] = useState("");

  // Budget Numbers ------------------------------- 
  // eslint-disable-next-line
  const [budgetNumber1, setBudgetNumber1] = useState("");
  // eslint-disable-next-line
  const [budgetNumber2, setBudgetNumber2] = useState("");
  // eslint-disable-next-line
  const [budgetNumber3, setBudgetNumber3] = useState("");

  // INFO / LENGTH-------------------------------
  // Info postData 
  const [postDataDetails, setPostDataDetails] = useState({
    // details
    title: "",
    series: "",
    prodco: "",
    format: "",
    location: "",
    dated: "",
    writer: "",
    prelimfin: "",
    preparedby: "",
    approvedby: "",
    approvedbyco: "",
  });

  // Info postData values 
  const { 
    title, series, prodco, format, location, dated,
    prelimfin, preparedby, approvedby, approvedbyco,
    writer} = postDataDetails;

  // Length postData
  const [postDataLength, setPostDataLength] = useState({
    research: 0,
    prep: 0,
    shoot: 0,
    wrap: 0,
    post: 0,});

  // Length postData values
  const { research, prep, shoot, wrap, post,} = postDataLength; 
  
  // Length Total postData 
  const [postDataLengthTotal, setPostDataLengthTotal] = useState(0);

  // Info handleChange
  const handleChange_details = (event) => {
    setPostDataDetails({
    ...postDataDetails,
    [event.target.name]: event.target.value,
    });
  };

  // prepared by input boxes to display on the Edit page on top
  const prepare = (
    <div>
    <Row>
    <Col md={6} >
    {/* prelimfin */}
    <Row >
    <Col md={6}>
    <p className={`${styles.Underline}`}>Preliminary or Final</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="prelimfin" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prelimfin"
        value={prelimfin}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.prelimfin?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* preparedby */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Budget Prepared By</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="preparedby" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="preparedby"
        value={preparedby}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.preparedby?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </Col>
    {/* Approved COLUMN */}
    <Col md={6} >
    {/* Approved By */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Approved By - Name</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="approvedby" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="approvedby"
        value={approvedby}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.approvedby?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Approved By */}
    <Row>
    <Col md={6}>
    <p className={`${styles.Underline}`}>Approved By - Company</p>
    </Col>
    <Col md={6}>
    <Form.Group controlId="approvedbyco" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="approvedbyco"
        value={approvedbyco}
        onChange={handleChange_details}
            />
    </Form.Group>
    {errors?.approvedbyco?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* date */}
    <Row>
    <Col md={6}>
      <p className={`${styles.Underline}`}>Budget Date</p>
      </Col>
      <Col md={6}>
      <Form.Group controlId="dated" 
          className={`${styles.Width95} text-center mb-1`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="dated"
          value={dated}
          onChange={handleChange_details}
              />
      </Form.Group>
      {errors?.dated?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
      </Col>
    </Row>
    </Col>
    </Row>
    </div>
  )

  // RIGHTS ----------------------------------------------------
  
  // Rights postData
  const [postDataRights, setPostDataRights] = useState({
    story_rights: 0,
    miscellaneous: 0,
  });

  // Rights postData values
  const {story_rights, miscellaneous} = postDataRights;

  // Rights Total postData 
  const [postDataRightsTotal, setPostDataRightsTotal] = useState(0);

  // PRE-PRODUCTION AND DEVELOPMENT --------------------------------------------
  
  // Development postData
  const [postDataDevelopment, setPostDataDevelopment] = useState({
    research_development: 0,
    prelim_budget: 0,
    consultant_expenses: 0,
    office_expenses: 0,
    staff: 0,
    travel_expenses_development: 0,
    living_expenses_development: 0,
    other_development: 0,
    fringes_taxes_development: 0,
  });

  // Development postData values
  const {research_development, prelim_budget, consultant_expenses,
    office_expenses, staff, travel_expenses_development,
    living_expenses_development, other_development,
    fringes_taxes_development,} = postDataDevelopment

  // Development Total postData 
  const [developmentTotal, setDevelopmentTotal] = useState(0)

  // SCENARIO --------------------------------------------
  
  // Scenario postData
  const [postDataScenario, setPostDataScenario] = useState({
    writers_units_number: 0,
    writers_units_name: "",
    writers_quantity: 0,
    writers_rate: 0,
    consultants_units_number: 0,
    consultants_units_name: "",
    consultants_quantity: 0,
    consultants_rate: 0,
    editors_scenario_units_number: 0,
    editors_scenario_units_name: "",
    editors_scenario_quantity: 0,
    editors_scenario_rate: 0,
    admin_scenario_units_number: 0,
    admin_scenario_units_name: "",
    admin_scenario_quantity: 0,
    admin_scenario_rate: 0,
    office_expenses_scenario: 0,
    travel_expenses_scenario: 0,
    living_expenses_scenario: 0,
    other_scenario: 0,
    fringes_taxes_scenario: 0,
  });

  // Scenario postData values
  const {writers_units_number, writers_units_name,
    writers_quantity, writers_rate,
    consultants_units_number, consultants_units_name,
    consultants_quantity, consultants_rate,
    editors_scenario_units_number, editors_scenario_units_name,
    editors_scenario_quantity, editors_scenario_rate,
    admin_scenario_units_number, admin_scenario_units_name,
    admin_scenario_quantity, admin_scenario_rate,
    office_expenses_scenario, travel_expenses_scenario,
    living_expenses_scenario, other_scenario, 
    fringes_taxes_scenario } = postDataScenario;

  // Writers Total postData
  const [writersTotal, setWritersTotal] = useState(0);
  // Consultants Total postData 
  const [consultantsTotal, setConsultantsTotal] = useState(0);
  // Editors Total postData
  const [editorsscenarioTotal, setEditorsscenarioTotal] = useState(0);
  // Admin Total postData 
  const [adminScenarioTotal, setAdminScenarioTotal] = useState(0);

  // Scenario Total postData 
  const [scenarioTotal, setScenarioTotal] = useState(0);

  // PRODUCERS DIRECTORS --------------------------------------------
  
  // producers postData
  const [postDataProducersDirs, setPostDataProducersDirs] = useState({
    executive_producers_rate: 0,
    producers_rate: 0,
    line_producers_rate: 0,
    co_producers_rate: 0,
    associate_producers_rate: 0,
    directors_rate: 0,
    unit2_directors_rate: 0,
    executive_producers_quantity: 0,
    producers_quantity: 0,
    line_producers_quantity: 0,
    co_producers_quantity: 0,
    associate_producers_quantity: 0,
    directors_quantity: 0,
    unit2_directors_quantity: 0,
    travel_expenses_producers_dirs: 0,
    living_expenses_producers_dirs: 0,
    other_producers_dirs: 0,
    fringes_taxes_producers_dirs: 0,
  });

  // producers directors postData values
  const {executive_producers_rate,
    producers_rate,
    line_producers_rate,
    co_producers_rate,
    associate_producers_rate,
    directors_rate,
    unit2_directors_rate,
    executive_producers_quantity,
    producers_quantity,
    line_producers_quantity,
    co_producers_quantity,
    associate_producers_quantity,
    directors_quantity,
    unit2_directors_quantity,
    travel_expenses_producers_dirs,
    living_expenses_producers_dirs,
    other_producers_dirs,
    fringes_taxes_producers_dirs,
    } = postDataProducersDirs;

  // TOTALS
  // Exec Producers Total postData
  const [execProducersTotal, setExecProducersTotal] = useState(0);
  // Producers Total postData
  const [producersTotal, setProducersTotal] = useState(0);
  // Line Producers Total postData
  const [lineProducersTotal, setLineProducersTotal] = useState(0);
  // Co Producers Total postData
  const [coProducersTotal, setCoProducersTotal] = useState(0);
  // Associate Producers Total postData
  const [assocProducersTotal, setAssocProducersTotal] = useState(0);
  // Directors Total postData
  const [directorsTotal, setDirectorsTotal] = useState(0);
  // 2nd Unit Directors Total postData
  const [unit2DirectorsTotal, setUnit2DirectorsTotal] = useState(0);

  // ProducersDirs Total postData 
  const [producersDirsTotal, setProducersDirsTotal] = useState(0);

  // STARS / MUSIC ------------------------------------------
  // Stars postData
  const [postDataStarsMusic, setPostDataStarsMusic] = useState({
    stars: 0,
    stars_rights_payments: 0,
    travel_expenses_stars: 0,
    living_expenses_stars: 0,
    other_stars: 0,
    fringes_taxes_stars: 0,
    music: 0,
    music_supervisor: 0,
    travel_expenses_music: 0,
    living_expenses_music: 0,
    music_rights_addl_songs: 0,
    other_music: 0,
    fringes_taxes_music: 0,
    });

  // postDataStarsMusic postData values
  const {
    stars, stars_rights_payments, travel_expenses_stars,
    living_expenses_stars, other_stars, fringes_taxes_stars,
    music, music_supervisor, travel_expenses_music, living_expenses_music,
    music_rights_addl_songs, other_music, fringes_taxes_music,
  } = postDataStarsMusic; 

  // StarsMusic Total postData 
  const [starsMusicTotal, setStarsMusicTotal] = useState(0)

  // BELOW THE LINE - "B" PRODUCTION

  // CAST ----  ----------------------------------------
  
  // Cast postData
  const [postDataCast, setPostDataCast] = useState({
    prin_2_qty: 0,
    prin_2_uno: 0,
    prin_2_una: "",
    prin_2_rt: 0,
    prin_3_qty: 0,
    prin_3_uno: 0,
    prin_3_una: "",
    prin_3_rt: 0,
    actors_2_qty: 0,
    actors_2_uno: 0,
    actors_2_una: "",
    actors_2_rt: 0,
    actors_3_qty: 0,
    actors_3_uno: 0,
    actors_3_una: "",
    actors_3_rt: 0,
    actors_4_qty: 0,
    actors_4_uno: 0,
    actors_4_una: "",
    actors_4_rt: 0,
    actors_5_qty: 0,
    actors_5_uno: 0,
    actors_5_una: "",
    actors_5_rt: 0,
    actors_6_qty: 0,
    actors_6_uno: 0,
    actors_6_una: "",
    actors_6_rt: 0,
    actors_7_qty: 0,
    actors_7_uno: 0,
    actors_7_una: "",
    actors_7_rt: 0,
    actors_week_qty: 0,
    actors_week_uno: 0,
    actors_week_una: "",
    actors_week_rt: 0,
    actors_day_qty: 0,
    actors_day_uno: 0,
    actors_day_una: "",
    actors_day_rt: 0,
    // old
    holidays_cast: 0, 
    overtime_cast: 0, 
    days6th7th_cast: 0, 
    rehersals_cast: 0,
    holidays_unit_cast: "", 
    overtime_unit_cast: "", 
    days6th7th_unit_cast: "", 
    rehersals_unit_cast: "",
    principals_quantity: 0,
    principals_units_number: 0,
    principals_units_name: "",
    principals_rate: 0,
    actors_quantity: 0,
    actors_units_number: 0,
    actors_units_name: "",
    actors_rate: 0,
    stuntcoordinators_quantity: 0,
    stuntcoordinators_units_number: 0,
    stuntcoordinators_units_name: "",
    stuntcoordinators_rate: 0,
    stuntperformers_quantity: 0,
    stuntperformers_units_number: 0,
    stuntperformers_units_name: "",
    stuntperformers_rate: 0,
    otherperformers_quantity: 0,
    otherperformers_units_number: 0,
    otherperformers_units_name: "",
    otherperformers_rate: 0,
    extras_quantity: 0,
    extras_units_number: 0,
    extras_units_name: "",
    extras_rate: 0,
    casting_director: 0,
    extras_casting: 0,
    other_cast: 0,
    fringes_taxes_cast: 0,
    rights_payments_cast: 0,
  });

  // Cast postData values _unit
  const {
    prin_2_qty, prin_2_uno, prin_2_una, prin_2_rt,
    prin_3_qty, prin_3_uno, prin_3_una, prin_3_rt,
    actors_2_qty, actors_2_uno, actors_2_una, actors_2_rt,
    actors_3_qty, actors_3_uno, actors_3_una, actors_3_rt, 
    actors_4_qty, actors_4_uno, actors_4_una, actors_4_rt,
    actors_5_qty, actors_5_uno, actors_5_una, actors_5_rt,
    actors_6_qty, actors_6_uno, actors_6_una, actors_6_rt,
    actors_7_qty, actors_7_uno, actors_7_una, actors_7_rt,
    actors_week_qty, actors_week_uno, actors_week_una, actors_week_rt,
    actors_day_qty, actors_day_uno, actors_day_una, actors_day_rt,
    //old
    rehersals_cast, rehersals_unit_cast,
    overtime_cast, overtime_unit_cast,
    days6th7th_cast, days6th7th_unit_cast,
    holidays_cast, holidays_unit_cast,
    principals_quantity, principals_units_number,
    principals_units_name, principals_rate,
    actors_quantity, actors_units_number, 
    actors_units_name, actors_rate,
    stuntcoordinators_quantity, stuntcoordinators_units_number,
    stuntcoordinators_units_name, stuntcoordinators_rate,
    stuntperformers_quantity, stuntperformers_units_number,
    stuntperformers_units_name, stuntperformers_rate,
    otherperformers_quantity, otherperformers_units_number,
    otherperformers_units_name, otherperformers_rate,
    extras_quantity, extras_units_number,
    extras_units_name, extras_rate,
    casting_director, extras_casting,
    other_cast, fringes_taxes_cast, rights_payments_cast,
  } = postDataCast;

  // Principals 1 Total postData
  const [principalsTotal, setPrincipalsTotal] = useState(0);
  // Principals 2 Total postData
  const [princ2Total, setPrinc2Total] = useState(0);
  // Principals 3 Total postData
  const [princ3Total, setPrinc3Total] = useState(0);

  // Actors Total postData 
  const [actorsTotal, setActorsTotal] = useState(0);
  // Actor 2 Total postData 
  const [actor2Total, setActor2Total] = useState(0);
  // Actors 3 Total postData 
  const [actor3Total, setActor3Total] = useState(0);
  // Actors 4 Total postData 
  const [actor4Total, setActor4Total] = useState(0);
  // Actors 5 Total postData 
  const [actor5Total, setActor5Total] = useState(0);
  // Actors 6 Total postData 
  const [actor6Total, setActor6Total] = useState(0);
  // Actors 7 Total postData 
  const [actor7Total, setActor7Total] = useState(0);
  // Actors week Total postData 
  const [actorweekTotal, setActorweekTotal] = useState(0);
  // Actors day Total postData 
  const [actordayTotal, setActordayTotal] = useState(0);

  // Stunt Coor Total postData
  const [stuntcoordinatorsTotal, setStuntcoordinatorsTotal] = useState(0);
  // Stunts Total postData
  const [stuntperformersTotal, setStuntperformersTotal] = useState(0);
  // Other per Total postData
  const [otherperformersTotal, setOtherperformersTotal] = useState(0);
  // Extras Total postData
  const [extrasTotal, setExtrasTotal] = useState(0);

  // Cast Total postData 
  const [castTotal, setCastTotal] = useState(0);

  // PRODUCTION STAFF ------------------------------------------

  // Production postData
  const [postDataProduction, setPostDataProduction] = useState({
    // new
    holidays_pro_sta: 0, 
    overtime_pro_sta: 0, 
    days6th7th_pro_sta: 0, 
    other_pro_sta: 0,
    box_rent_pro_sta: 0,
    holidays_unit_pro_sta: "", 
    overtime_unit_pro_sta: "", 
    days6th7th_unit_pro_sta: "", 
    box_rent_unit_pro_sta: "",
    fringes_taxes_production: 0,
    production_manager_quantity: 0,
    production_manager_units_number: 0,
    production_manager_units_name: "",
    production_manager_rate: 0,
    production_manager_qty_prep: 0,
    production_manager_uno_prep: 0,
    production_manager_una_prep: "",
    production_manager_rt_prep: 0,
    production_manager_qty_wrap: 0,
    production_manager_uno_wrap: 0,
    production_manager_una_wrap: "",
    production_manager_rt_wrap: 0,
    production_supervisor_quantity: 0,
    production_supervisor_units_number: 0,
    production_supervisor_units_name: "",
    production_supervisor_rate: 0,
    production_supervisor_qty_prep: 0,
    production_supervisor_uno_prep: 0,
    production_supervisor_una_prep: "",
    production_supervisor_rt_prep: 0,
    production_supervisor_qty_wrap: 0,
    production_supervisor_uno_wrap: 0,
    production_supervisor_una_wrap: "",
    production_supervisor_rt_wrap: 0,
    production_coordinator_quantity: 0,
    production_coordinator_units_number: 0,
    production_coordinator_units_name: "",
    production_coordinator_rate: 0,
    production_coordinator_qty_prep: 0,
    production_coordinator_uno_prep: 0,
    production_coordinator_una_prep: "",
    production_coordinator_rt_prep: 0,
    production_coordinator_qty_wrap: 0,
    production_coordinator_uno_wrap: 0,
    production_coordinator_una_wrap: "",
    production_coordinator_rt_wrap: 0,
    unit_manager_quantity: 0,
    unit_manager_units_number: 0,
    unit_manager_units_name: "",
    unit_manager_rate: 0,
    unit_manager_qty_prep: 0,
    unit_manager_uno_prep: 0,
    unit_manager_una_prep: "",
    unit_manager_rt_prep: 0,
    unit_manager_qty_wrap: 0,
    unit_manager_uno_wrap: 0,
    unit_manager_una_wrap: "",
    unit_manager_rt_wrap: 0,
    location_manager_quantity: 0,
    location_manager_units_number: 0,
    location_manager_units_name: "",
    location_manager_rate: 0,
    location_manager_qty_prep: 0,
    location_manager_uno_prep: 0,
    location_manager_una_prep: "",
    location_manager_rt_prep: 0,
    location_manager_qty_wrap: 0,
    location_manager_uno_wrap: 0,
    location_manager_una_wrap: "",
    location_manager_rt_wrap: 0,
    location_manager_assistant_quantity: 0,
    location_manager_assistant_units_number: 0,
    location_manager_assistant_units_name: "",
    location_manager_assistant_rate: 0,
    location_manager_ass_qty_prep: 0,
    location_manager_ass_uno_prep: 0,
    location_manager_ass_una_prep: "",
    location_manager_ass_rt_prep: 0,
    location_manager_ass_qty_wrap: 0,
    location_manager_ass_uno_wrap: 0,
    location_manager_ass_una_wrap: "",
    location_manager_ass_rt_wrap: 0,
    production_assistants_quantity: 0,
    production_assistants_units_number: 0,
    production_assistants_units_name: "",
    production_assistants_rate: 0,
    production_ass_qty_prep: 0,
    production_ass_uno_prep: 0,
    production_ass_una_prep: "",
    production_ass_rt_prep: 0,
    production_ass_qty_wrap: 0,
    production_ass_uno_wrap: 0,
    production_ass_una_wrap: "",
    production_ass_rt_wrap: 0,
    production_secretary_quantity: 0,
    production_secretary_units_number: 0,
    production_secretary_units_name: "",
    production_secretary_rate: 0,
    production_sec_qty_prep: 0,
    production_sec_uno_prep: 0,
    production_sec_una_prep: "",
    production_sec_rt_prep: 0,
    production_sec_qty_wrap: 0,
    production_sec_uno_wrap: 0,
    production_sec_una_wrap: "",
    production_sec_rt_wrap: 0,
    production_accountant_quantity: 0,
    production_accountant_units_number: 0,
    production_accountant_units_name: "",
    production_accountant_rate: 0,
    production_acc_qty_prep: 0,
    production_acc_uno_prep: 0,
    production_acc_una_prep: "",
    production_acc_rt_prep: 0,
    production_acc_qty_wrap: 0,
    production_acc_uno_wrap: 0,
    production_acc_una_wrap: "",
    production_acc_rt_wrap: 0,
    production_accountant_assistant_quantity: 0,
    production_accountant_assistant_units_number: 0,
    production_accountant_assistant_units_name: "",
    production_accountant_assistant_rate: 0,
    production_acc_ass_qty_prep: 0,
    production_acc_ass_uno_prep: 0,
    production_acc_ass_una_prep: "",
    production_acc_ass_rt_prep: 0,
    production_acc_ass_qty_wrap: 0,
    production_acc_ass_uno_wrap: 0,
    production_acc_ass_una_wrap: "", 
    production_acc_ass_rt_wrap: 0,
    scriptsupervisor_continuity_quantity: 0,
    scriptsupervisor_continuity_units_number: 0,
    scriptsupervisor_continuity_units_name: "",
    scriptsupervisor_continuity_rate: 0,
    scriptsupervisor_con_qty_prep: 0,
    scriptsupervisor_con_uno_prep: 0,
    scriptsupervisor_con_una_prep: "",
    scriptsupervisor_con_rt_prep: 0,
    scriptsupervisor_con_qty_wrap: 0,
    scriptsupervisor_con_uno_wrap: 0,
    scriptsupervisor_con_una_wrap: "",
    scriptsupervisor_con_rt_wrap: 0,
    payroll_quantity: 0,
    payroll_units_number: 0,
    payroll_units_name: "",
    payroll_rate: 0,
    payroll_qty_prep: 0,
    payroll_uno_prep: 0,
    payroll_una_prep: "",
    payroll_rt_prep: 0,
    payroll_qty_wrap: 0,
    payroll_uno_wrap: 0,
    payroll_una_wrap: "",
    payroll_rt_wrap: 0,
    other_production_quantity: 0,
    other_production_units_number: 0,
    other_production_units_name: "",
    other_production_rate: 0,
    other_pro_qty_prep: 0,
    other_pro_uno_prep: 0,
    other_pro_una_prep: "",
    other_pro_rt_prep: 0,
    other_pro_qty_wrap: 0,
    other_pro_uno_wrap: 0,
    other_pro_una_wrap: "",
    other_pro_rt_wrap: 0,
    directors_assistant_quantity: 0,
    directors_assistant_units_number: 0,
    directors_assistant_units_name: "",
    directors_assistant_rate: 0,
    directors_ass_qty_prep: 0,
    directors_ass_uno_prep: 0,
    directors_ass_una_prep: "",
    directors_ass_rt_prep: 0,
    directors_ass_qty_wrap: 0,
    directors_ass_uno_wrap: 0,
    directors_ass_una_wrap: "",
    directors_ass_rt_wrap: 0,
    assistant_director_1st_quantity: 0,
    assistant_director_1st_units_number: 0,
    assistant_director_1st_units_name: "",
    assistant_director_1st_rate: 0,
    ass_director_1st_qty_prep: 0,
    ass_director_1st_uno_prep: 0,
    ass_director_1st_una_prep: "",
    ass_director_1st_rt_prep: 0,
    ass_director_1st_qty_wrap: 0,
    ass_director_1st_uno_wrap: 0,
    ass_director_1st_una_wrap: "",
    ass_director_1st_rt_wrap: 0,
    assistant_director_2nd_quantity: 0,
    assistant_director_2nd_units_number: 0,
    assistant_director_2nd_units_name: "",
    assistant_director_2nd_rate: 0,
    ass_director_2nd_qty_prep: 0,
    ass_director_2nd_uno_prep: 0,
    ass_director_2nd_una_prep: "",
    ass_director_2nd_rt_prep: 0,
    ass_director_2nd_qty_wrap: 0,
    ass_director_2nd_uno_wrap: 0,
    ass_director_2nd_una_wrap: "",
    ass_director_2nd_rt_wrap: 0,
    assistant_director_3rd_quantity: 0,
    assistant_director_3rd_units_number: 0,
    assistant_director_3rd_units_name: "",
    assistant_director_3rd_rate: 0,
    ass_director_3rd_qty_prep: 0,
    ass_director_3rd_uno_prep: 0,
    ass_director_3rd_una_prep: "",
    ass_director_3rd_rt_prep: 0,
    ass_director_3rd_qty_wrap: 0,
    ass_director_3rd_uno_wrap: 0,
    ass_director_3rd_una_wrap: "",
    ass_director_3rd_rt_wrap: 0,
    craft_services_quantity: 0,
    craft_services_units_number: 0,
    craft_services_units_name: "",
    craft_services_rate: 0,
    craft_services_qty_prep: 0,
    craft_services_uno_prep: 0,
    craft_services_una_prep: "",
    craft_services_rt_prep: 0,
    craft_services_qty_wrap: 0,
    craft_services_uno_wrap: 0,
    craft_services_una_wrap: "",
    craft_services_rt_wrap: 0,
  });

  // Production postData values
  const {
    // new
    holidays_pro_sta, overtime_pro_sta, 
    days6th7th_pro_sta, other_pro_sta,
    box_rent_pro_sta,
    holidays_unit_pro_sta, overtime_unit_pro_sta, 
    days6th7th_unit_pro_sta,
    box_rent_unit_pro_sta,
    production_manager_qty_prep,
    production_manager_uno_prep,
    production_manager_una_prep,
    production_manager_rt_prep,
    production_manager_qty_wrap,
    production_manager_uno_wrap,
    production_manager_una_wrap,
    production_manager_rt_wrap,
    production_supervisor_qty_prep,
    production_supervisor_uno_prep,
    production_supervisor_una_prep,
    production_supervisor_rt_prep,
    production_supervisor_qty_wrap,
    production_supervisor_uno_wrap,
    production_supervisor_una_wrap,
    production_supervisor_rt_wrap,
    production_coordinator_qty_prep,
    production_coordinator_uno_prep,
    production_coordinator_una_prep,
    production_coordinator_rt_prep,
    production_coordinator_qty_wrap,
    production_coordinator_uno_wrap,
    production_coordinator_una_wrap,
    production_coordinator_rt_wrap,
    unit_manager_qty_prep,
    unit_manager_uno_prep,
    unit_manager_una_prep,
    unit_manager_rt_prep,
    unit_manager_qty_wrap,
    unit_manager_uno_wrap,
    unit_manager_una_wrap,
    unit_manager_rt_wrap,
    location_manager_qty_prep,
    location_manager_uno_prep,
    location_manager_una_prep,
    location_manager_rt_prep,
    location_manager_qty_wrap,
    location_manager_uno_wrap,
    location_manager_una_wrap,
    location_manager_rt_wrap,
    location_manager_ass_qty_prep,
    location_manager_ass_uno_prep,
    location_manager_ass_una_prep,
    location_manager_ass_rt_prep,
    location_manager_ass_qty_wrap,
    location_manager_ass_uno_wrap,
    location_manager_ass_una_wrap,
    location_manager_ass_rt_wrap,
    production_ass_qty_prep,
    production_ass_uno_prep,
    production_ass_una_prep,
    production_ass_rt_prep,
    production_ass_qty_wrap,
    production_ass_uno_wrap,
    production_ass_una_wrap,
    production_ass_rt_wrap,
    production_sec_qty_prep,
    production_sec_uno_prep,
    production_sec_una_prep,
    production_sec_rt_prep,
    production_sec_qty_wrap,
    production_sec_uno_wrap,
    production_sec_una_wrap,
    production_sec_rt_wrap,
    production_acc_qty_prep,
    production_acc_uno_prep,
    production_acc_una_prep,
    production_acc_rt_prep,
    production_acc_qty_wrap,
    production_acc_uno_wrap,
    production_acc_una_wrap,
    production_acc_rt_wrap,
    production_acc_ass_qty_prep,
    production_acc_ass_uno_prep,
    production_acc_ass_una_prep,
    production_acc_ass_rt_prep,
    production_acc_ass_qty_wrap,
    production_acc_ass_uno_wrap,
    production_acc_ass_una_wrap,
    production_acc_ass_rt_wrap,
    scriptsupervisor_con_qty_prep,
    scriptsupervisor_con_uno_prep,
    scriptsupervisor_con_una_prep,
    scriptsupervisor_con_rt_prep,
    scriptsupervisor_con_qty_wrap,
    scriptsupervisor_con_uno_wrap,
    scriptsupervisor_con_una_wrap,
    scriptsupervisor_con_rt_wrap,
    payroll_qty_prep,
    payroll_uno_prep,
    payroll_una_prep,
    payroll_rt_prep,
    payroll_qty_wrap,
    payroll_uno_wrap,
    payroll_una_wrap,
    payroll_rt_wrap,
    other_pro_qty_prep,
    other_pro_uno_prep,
    other_pro_una_prep,
    other_pro_rt_prep,
    other_pro_qty_wrap,
    other_pro_uno_wrap,
    other_pro_una_wrap,
    other_pro_rt_wrap,
    directors_ass_qty_prep,
    directors_ass_uno_prep,
    directors_ass_una_prep,
    directors_ass_rt_prep,
    directors_ass_qty_wrap,
    directors_ass_uno_wrap,
    directors_ass_una_wrap,
    directors_ass_rt_wrap,
    ass_director_1st_qty_prep,
    ass_director_1st_uno_prep,
    ass_director_1st_una_prep,
    ass_director_1st_rt_prep,
    ass_director_1st_qty_wrap,
    ass_director_1st_uno_wrap,
    ass_director_1st_una_wrap,
    ass_director_1st_rt_wrap,
    ass_director_2nd_qty_prep,
    ass_director_2nd_uno_prep,
    ass_director_2nd_una_prep,
    ass_director_2nd_rt_prep,
    ass_director_2nd_qty_wrap,
    ass_director_2nd_uno_wrap,
    ass_director_2nd_una_wrap,
    ass_director_2nd_rt_wrap,
    ass_director_3rd_qty_prep,
    ass_director_3rd_uno_prep,
    ass_director_3rd_una_prep,
    ass_director_3rd_rt_prep,
    ass_director_3rd_qty_wrap,
    ass_director_3rd_uno_wrap,
    ass_director_3rd_una_wrap,
    ass_director_3rd_rt_wrap,
    craft_services_qty_prep,
    craft_services_uno_prep,
    craft_services_una_prep,
    craft_services_rt_prep,
    craft_services_qty_wrap,
    craft_services_uno_wrap,
    craft_services_una_wrap,
    craft_services_rt_wrap,
    // old
    fringes_taxes_production,
    production_manager_quantity,
    production_manager_units_number,
    production_manager_units_name,
    production_manager_rate,
    production_supervisor_quantity,
    production_supervisor_units_number,
    production_supervisor_units_name,
    production_supervisor_rate,
    production_coordinator_quantity,
    production_coordinator_units_number,
    production_coordinator_units_name,
    production_coordinator_rate,
    unit_manager_quantity,
    unit_manager_units_number,
    unit_manager_units_name,
    unit_manager_rate,
    location_manager_quantity,
    location_manager_units_number,
    location_manager_units_name,
    location_manager_rate,
    location_manager_assistant_quantity,
    location_manager_assistant_units_number,
    location_manager_assistant_units_name,
    location_manager_assistant_rate,
    production_assistants_quantity,
    production_assistants_units_number,
    production_assistants_units_name,
    production_assistants_rate,
    production_secretary_quantity,
    production_secretary_units_number,
    production_secretary_units_name,
    production_secretary_rate,
    production_accountant_quantity,
    production_accountant_units_number,
    production_accountant_units_name,
    production_accountant_rate,
    production_accountant_assistant_quantity,
    production_accountant_assistant_units_number,
    production_accountant_assistant_units_name,
    production_accountant_assistant_rate,
    scriptsupervisor_continuity_quantity,
    scriptsupervisor_continuity_units_number,
    scriptsupervisor_continuity_units_name,
    scriptsupervisor_continuity_rate,
    payroll_quantity,
    payroll_units_number,
    payroll_units_name,
    payroll_rate,
    other_production_quantity,
    other_production_units_number,
    other_production_units_name,
    other_production_rate,
    directors_assistant_quantity,
    directors_assistant_units_number,
    directors_assistant_units_name,
    directors_assistant_rate,
    assistant_director_1st_quantity,
    assistant_director_1st_units_number,
    assistant_director_1st_units_name,
    assistant_director_1st_rate,
    assistant_director_2nd_quantity,
    assistant_director_2nd_units_number,
    assistant_director_2nd_units_name,
    assistant_director_2nd_rate,
    assistant_director_3rd_quantity,
    assistant_director_3rd_units_number,
    assistant_director_3rd_units_name,
    assistant_director_3rd_rate,
    craft_services_quantity,
    craft_services_units_number,
    craft_services_units_name,
    craft_services_rate,
  } = postDataProduction;

  // Totals

  // production manager
  // production manager shoot Total postData
  const [productionmanagerTotal, setProductionmanagerTotal] = useState(0);
  // production manager prep Total postData
  const [productionmanagerprepTotal, setProductionmanagerprepTotal] = useState(0);
  // production manager wrap Total postData
  const [productionmanagerwrapTotal, setProductionmanagerwrapTotal] = useState(0);
  // production manager all Total postData
  const [productionmanagerallTotal, setProductionmanagerallTotal] = useState(0);

  // production supervisor
  // production supervisor shoot Total postData
  const [productionsupervisorTotal, setProductionsupervisorTotal] = useState(0);
  // production supervisor prep Total postData
  const [productionsupervisorprepTotal, setProductionsupervisorprepTotal] = useState(0);
  // production supervisor wrap Total postData
  const [productionsupervisorwrapTotal, setProductionsupervisorwrapTotal] = useState(0);
  // production supervisor all Total postData
  const [productionsupervisorallTotal, setProductionsupervisorallTotal] = useState(0);

  // production coordinator
  // production coordinator shoot Total postData
  const [productioncoordinatorTotal, setProductioncoordinatorTotal] = useState(0);
  // production coordinator prep Total postData
  const [productioncoordinatorprepTotal, setProductioncoordinatorprepTotal] = useState(0);
  // production coordinator wrap Total postData
  const [productioncoordinatorwrapTotal, setProductioncoordinatorwrapTotal] = useState(0);
  // production coordinator all Total postData
  const [productioncoordinatorallTotal, setProductioncoordinatorallTotal] = useState(0);

  // unit manager
  // unit manager shoot Total postData
  const [unitmanagerTotal, setUnitmanagerTotal] = useState(0);
  // unit manager prep Total postData
  const [unitmanagerprepTotal, setUnitmanagerprepTotal] = useState(0);
  // unit manager wrap Total postData
  const [unitmanagerwrapTotal, setUnitmanagerwrapTotal] = useState(0);
  // unit manager all Total postData
  const [unitmanagerallTotal, setUnitmanagerallTotal] = useState(0);

  // location manager
  // location manager shoot Total postData
  const [locationmanagerTotal, setLocationmanagerTotal] = useState(0);
  // location manager wrap Total postData
  const [locationmanagerwrapTotal, setLocationmanagerwrapTotal] = useState(0);
  // location manager prep Total postData
  const [locationmanagerprepTotal, setLocationmanagerprepTotal] = useState(0);
  // location manager all Total postData
  const [locationmanagerallTotal, setLocationmanagerallTotal] = useState(0);

  // location manager assistant
  // location manager assistant shoot Total postData
  const [locationmanagerassistantTotal, setLocationmanagerassistantTotal] = useState(0);
  // location manager assistant prep Total postData
  const [locmanassprepTotal, setLocmanassprepTotal] = useState(0);
  // location manager assistant wrap Total postData
  const [locmanasswrapTotal, setLocmanasswrapTotal] = useState(0);
  // location manager assistant all Total postData
  const [locmanassallTotal, setLocmanassallTotal] = useState(0);

  // production assistants
  // production assistants shoot Total postData
  const [productionassistantsTotal, setProductionassistantsTotal] = useState(0);
  // production assistants prep Total postData
  const [proassprepTotal, setProassprepTotal] = useState(0);
  // production assistants wrap Total postData
  const [proasswrapTotal, setProasswrapTotal] = useState(0);
  // production assistants all Total postData
  const [proassallTotal, setProassallTotal] = useState(0);

  // production secretary   
  // production secretary shoot Total postData
  const [productionsecretaryTotal, setProductionsecretaryTotal] = useState(0);
  // production secretary prep Total postData
  const [prosecprepTotal, setProsecprepTotal] = useState(0);
  // production secretary wrap Total postData
  const [prosecwrapTotal, setProsecwrapTotal] = useState(0);
  // production secretary all Total postData
  const [prosecallTotal, setProsecallTotal] = useState(0);

  // production accountant accass
  // production accountant shoot Total postData
  const [productionaccountantTotal, setProductionaccountantTotal] = useState(0);
  // production accountant prep Total postData
  const [proaccprepTotal, setProaccprepTotal] = useState(0);
  // production accountant wrap Total postData
  const [proaccwrapTotal, setProaccwrapTotal] = useState(0);
  // production accountant all Total postData
  const [proaccallTotal, setProaccallTotal] = useState(0);

  // production accountant assistant
  // production accountant assistant shoot Total postData
  const [productionaccountantassistantTotal, setProductionaccountantassistantTotal] = useState(0);
  // production accountant assistant prep Total postData
  const [proaccassprepTotal, setProaccassprepTotal] = useState(0);
  // production accountant assistant wrap Total postData
  const [proaccasswrapTotal, setProaccasswrapTotal] = useState(0);
  // production accountant assistant all Total postData
  const [proaccassallTotal, setProaccassallTotal] = useState(0);

  // scriptsupervisor continuity con
  // scriptsupervisor continuity shoot Total postData
  const [scriptsupervisorcontinuityTotal, setScriptsupervisorcontinuityTotal] = useState(0);
  // scriptsupervisor continuity prep Total postData
  const [scriptsupconprepTotal, setScriptsupconprepTotal] = useState(0);
  // scriptsupervisor continuity wrap Total postData
  const [scriptsupconwrapTotal, setScriptsupconwrapTotal] = useState(0);
  // scriptsupervisor continuity all Total postData
  const [scriptsupconallTotal, setScriptsupconallTotal] = useState(0);

  // payroll Total
  // payroll shoot Total postData
  const [payrollTotal, setPayrollTotal] = useState(0);
  // payroll prep Total postData
  const [payrollprepTotal, setPayrollprepTotal] = useState(0);
  // payroll wrap Total postData
  const [payrollwrapTotal, setPayrollwrapTotal] = useState(0);
  // payroll all Total postData
  const [payrollallTotal, setPayrollallTotal] = useState(0);

  // other production
  // other production shoot Total postData
  const [otherproductionTotal, setOtherproductionTotal] = useState(0);
  // other production prep Total postData
  const [otherproprepTotal, setOtherproprepTotal] = useState(0);
  // other production wrap Total postData
  const [otherprowrapTotal, setOtherprowrapTotal] = useState(0);
  // other production all Total postData
  const [otherproallTotal, setOtherproallTotal] = useState(0);

  // directors assistant
  // directors assistant shoot Total postData
  const [directorsassistantTotal, setDirectorsassistantTotal] = useState(0);
  // directors assistant prep Total postData
  const [directorsassprepTotal, setDirectorsassprepTotal] = useState(0);
  // directors assistant wrap Total postData
  const [directorsasswrapTotal, setDirectorsasswrapTotal] = useState(0);
  // directors assistant all Total postData
  const [directorsassallTotal, setDirectorsassallTotal] = useState(0);

  // assistant director 1st
  // assistant director 1st shoot Total postData
  const [assistantdirector1stTotal, setAssistantdirector1stTotal] = useState(0);
  // assistant director 1st prep Total postData
  const [assdirector1stprepTotal, setAssdirector1stprepTotal] = useState(0);
  // assistant director 1st wrap Total postData
  const [assdirector1stwrapTotal, setAssdirector1stwrapTotal] = useState(0);
  // assistant director 1st all Total postData
  const [assdirector1stallTotal, setAssdirector1stallTotal] = useState(0);

  // assistant director 2nd
  // assistant director 2nd shoot Total postData
  const [assistantdirector2ndTotal, setAssistantdirector2ndTotal] = useState(0);
  // assistant director 2nd prep Total postData
  const [assdirector2ndprepTotal, setAssdirector2ndprepTotal] = useState(0);
  // assistant director 2nd wrap Total postData
  const [assdirector2ndwrapTotal, setAssdirector2ndwrapTotal] = useState(0);
  // assistant director 2nd all Total postData
  const [assdirector2ndallTotal, setAssdirector2ndallTotal] = useState(0);

  // assistant director 3rd
  // assistant director 3rd shoot Total postData
  const [assistantdirector3rdTotal, setAssistantdirector3rdTotal] = useState(0);
  // assistant director 3rd prep Total postData
  const [assdirector3rdprepTotal, setAssdirector3rdprepTotal] = useState(0);
  // assistant director 3rd wrap Total postData
  const [assdirector3rdwrapTotal, setAssdirector3rdwrapTotal] = useState(0);
  // assistant director 3rd all Total postData
  const [assdirector3rdallTotal, setAssdirector3rdallTotal] = useState(0);

  // craft services Total
  // craft services shoot Total postData
  const [craftservicesTotal, setCraftservicesTotal] = useState(0);
  // craft services prep Total postData
  const [craftservicesprepTotal, setCraftservicesprepTotal] = useState(0);
  // craft services wrap Total postData
  const [craftserviceswrapTotal, setCraftserviceswrapTotal] = useState(0);
  // craft services all Total postData
  const [craftservicesallTotal, setCraftservicesallTotal] = useState(0);

  // Production Total postData 
  const [productionstaffTotal, setProductionstaffTotal] = useState(0);

  // DESIGN LABOUR ------------------------------------------

  // Design Labour postData
  const [postDataDesign, setPostDataDesign] = useState({
    fringes_taxes_design: 0,
    production_designer_quantity: 0,
    production_designer_units_number: 0,
    production_designer_units_name: "",
    production_designer_rate: 0,
    pro_designer_qty_prep: 0,
    pro_designer_uno_prep: 0,
    pro_designer_una_prep: "",
    pro_designer_rt_prep: 0,
    pro_designer_qty_wrap: 0,
    pro_designer_uno_wrap: 0,
    pro_designer_una_wrap: "",
    pro_designer_rt_wrap: 0,
    art_director_quantity: 0,
    art_director_units_number: 0,
    art_director_units_name: "",
    art_director_rate: 0,
    art_director_qty_prep: 0,
    art_director_uno_prep: 0,
    art_director_una_prep: "",
    art_director_rt_prep: 0,
    art_director_qty_wrap: 0,
    art_director_uno_wrap: 0,
    art_director_una_wrap: "",
    art_director_rt_wrap: 0,
    art_assistants_quantity: 0,
    art_assistants_units_number: 0,
    art_assistants_units_name: "",
    art_assistants_rate: 0,
    art_ass_qty_prep: 0,
    art_ass_uno_prep: 0,
    art_ass_una_prep: "",
    art_ass_rt_prep: 0,
    art_ass_qty_wrap: 0,
    art_ass_uno_wrap: 0,
    art_ass_una_wrap: "",
    art_ass_rt_wrap: 0,
    production_assistants_trainees_quantity: 0,
    production_assistants_trainees_units_number: 0,
    production_assistants_trainees_units_name: "",
    production_assistants_trainees_rate: 0,
    pro_ass_trainees_qty_prep: 0,
    pro_ass_trainees_uno_prep: 0,
    pro_ass_trainees_una_prep: "",
    pro_ass_trainees_rt_prep: 0,
    pro_ass_trainees_qty_wrap: 0,
    pro_ass_trainees_uno_wrap: 0,
    pro_ass_trainees_una_wrap: "",
    pro_ass_trainees_rt_wrap: 0,
    graphic_artists_quantity: 0,
    graphic_artists_units_number: 0,
    graphic_artists_units_name: "",
    graphic_artists_rate_: 0,
    graphic_art_qty_prep: 0,
    graphic_art_uno_prep: 0,
    graphic_art_una_prep: "",
    graphic_art_rt_prep: 0,
    sketch_artists: 0,
    sketch_artists_unit: "",
    storyboard_artists: 0,
    storyboard_artists_unit: "",
    holidays_design: 0,
    holidays_unit_design: "",
    overtime_design: 0,
    overtime_unit_design: "",
    days6th7th_design: 0,
    days6th7th_unit_design: "",
    box_rent_unit_design: "",
    box_rent_design: 0,
    other_design: 0,
    // new new
    supervart_qty: 0,
    supervart_uno: 0,
    supervart_una: "",
    supervart_rt: 0,
    supervart_qty_prep: 0,
    supervart_uno_prep: 0,
    supervart_una_prep: "",
    supervart_rt_prep: 0, 
    standby_art_qty: 0,
    standby_art_uno: 0,
    standby_art_una: "",
    standby_art_rt: 0,
    standby_art_qty_prep: 0,
    standby_art_uno_prep: 0,
    standby_art_una_prep: "",
    standby_art_rt_prep: 0,
    set_design_qty: 0,
    set_design_uno: 0,
    set_design_una: "",
    set_design_rt: 0,
    set_design_qty_prep: 0,
    set_design_uno_prep: 0,
    set_design_una_prep: "",
    set_design_rt_prep: 0,
    junior_draught_qty: 0,
    junior_draught_uno: 0,
    junior_draught_una: "",
    junior_draught_rt: 0,
    junior_draught_qty_prep: 0,
    junior_draught_uno_prep: 0,
    junior_draught_una_prep: "",
    junior_draught_rt_prep: 0,
    art_dep_coor_qty: 0,
    art_dep_coor_uno: 0,
    art_dep_coor_una: "",
    art_dep_coor_rt: 0,
    art_dep_coor_qty_prep: 0,
    art_dep_coor_uno_prep: 0,
    art_dep_coor_una_prep: "",
    art_dep_coor_rt_prep: 0,
    art_dep_coor_qty_wrap: 0,
    art_dep_coor_uno_wrap: 0,
    art_dep_coor_una_wrap: "",
    art_dep_coor_rt_wrap: 0,
  });

  // Design Labour values
  const {
    production_designer_quantity, production_designer_units_number,
    production_designer_units_name, production_designer_rate,
    pro_designer_qty_prep, pro_designer_uno_prep,
    pro_designer_una_prep, pro_designer_rt_prep,
    pro_designer_qty_wrap, pro_designer_uno_wrap,
    pro_designer_una_wrap, pro_designer_rt_wrap,
    supervart_qty, supervart_uno,
    supervart_una, supervart_rt,
    supervart_qty_prep, supervart_uno_prep,
    supervart_una_prep, supervart_rt_prep,
    art_director_quantity, art_director_units_number,
    art_director_units_name, art_director_rate,
    art_director_qty_prep, art_director_uno_prep,
    art_director_una_prep, art_director_rt_prep,
    art_director_qty_wrap, art_director_uno_wrap,
    art_director_una_wrap, art_director_rt_wrap,
    standby_art_qty, standby_art_uno,
    standby_art_una, standby_art_rt,
    standby_art_qty_prep, standby_art_uno_prep,
    standby_art_una_prep, standby_art_rt_prep,
    art_assistants_quantity, art_assistants_units_number,
    art_assistants_units_name, art_assistants_rate,
    art_ass_qty_prep, art_ass_uno_prep,
    art_ass_una_prep, art_ass_rt_prep,
    art_ass_qty_wrap, art_ass_uno_wrap,
    art_ass_una_wrap, art_ass_rt_wrap,
    set_design_qty, set_design_uno,
    set_design_una, set_design_rt,
    set_design_qty_prep, set_design_uno_prep,
    set_design_una_prep, set_design_rt_prep,
    junior_draught_qty, junior_draught_uno,
    junior_draught_una, junior_draught_rt,
    junior_draught_qty_prep, junior_draught_uno_prep,
    junior_draught_una_prep, junior_draught_rt_prep,
    graphic_artists_quantity, graphic_artists_units_number,
    graphic_artists_units_name, graphic_artists_rate,
    graphic_art_qty_prep, graphic_art_uno_prep,
    graphic_art_una_prep, graphic_art_rt_prep,
    art_dep_coor_qty, art_dep_coor_uno,
    art_dep_coor_una, art_dep_coor_rt,
    art_dep_coor_qty_prep, art_dep_coor_uno_prep,
    art_dep_coor_una_prep, art_dep_coor_rt_prep,
    art_dep_coor_qty_wrap, art_dep_coor_uno_wrap,
    art_dep_coor_una_wrap, art_dep_coor_rt_wrap,
    production_assistants_trainees_quantity, production_assistants_trainees_units_number,
    production_assistants_trainees_units_name, production_assistants_trainees_rate,
    pro_ass_trainees_qty_prep, pro_ass_trainees_uno_prep,
    pro_ass_trainees_una_prep, pro_ass_trainees_rt_prep,
    pro_ass_trainees_qty_wrap, pro_ass_trainees_uno_wrap,
    pro_ass_trainees_una_wrap, pro_ass_trainees_rt_wrap,
    sketch_artists, sketch_artists_unit,
    storyboard_artists, storyboard_artists_unit,
    holidays_design, holidays_unit_design,
    overtime_design, overtime_unit_design,
    days6th7th_design, days6th7th_unit_design,
    box_rent_unit_design, box_rent_design,
    other_design, fringes_taxes_design,
    } = postDataDesign;

  // production designer
  // production designer shoot Total postData
  const [productiondesignerTotal, setProductiondesignerTotal] = useState(0);
  // production designer prep Total postData
  const [prodesprepTotal, setProdesprepTotal] = useState(0);
  // production designer wrap Total postData
  const [prodeswrapTotal, setProdeswrapTotal] = useState(0);
  // production designer all Total postData
  const [prodesallTotal, setProdesallTotal] = useState(0);

  // art director shoot Total postData
  const [artdirectorTotal, setArtdirectorTotal] = useState(0);
  // art director prep Total postData
  const [artdirprepTotal, setArtdirprepTotal] = useState(0);
  // art director wrap Total postData
  const [artdirwrapTotal, setArtdirwrapTotal] = useState(0);
  // art director all Total postData
  const [artdirallTotal, setArtdirallTotal] = useState(0);

  // art assistants shoot Total postData
  const [artassistantsTotal, setArtassistantsTotal] = useState(0);
  // art assistants prep Total postData
  const [artassprepTotal, setArtassprepTotal] = useState(0);
  // art assistants wrap Total postData
  const [artasswrapTotal, setArtasswrapTotal] = useState(0);
  // art assistants all Total postData
  const [artassallTotal, setArtassallTotal] = useState(0);

  // production assistants / trainees shoot Total postData
  const [productionassistantstraineesTotal, setProductionassistantstraineesTotal] = useState(0);
  // production assistants / trainees prep Total postData
  const [proasstrainprepTotal, setProasstrainprepTotal] = useState(0);
  // production assistants / trainees wrap Total postData
  const [proasstrainwrapTotal, setProasstrainwrapTotal] = useState(0);
  // production assistants / trainees all Total postData
  const [proasstrainallTotal, setProasstrainallTotal] = useState(0);

  // graphic artists shoot Total postData
  const [graphicartistsTotal, setGraphicartistsTotal] = useState(0);
  // graphic artists prep Total postData
  const [graphicartprepTotal, setGraphicartprepTotal] = useState(0);
  // graphic artists all Total postData
  const [graphicartallTotal, setGraphicartallTotal] = useState(0);

  // new
  // supervising art director
  // supervising art director shoot Total postData
  const [supartdirTotal, setSupartdirTotal] = useState(0);
  // supervising art director prep Total postData
  const [supartdirprepTotal, setSupartdirprepTotal] = useState(0);
  // supervising art director all Total postData
  const [supartdirallTotal, setSupartdirpallTotal] = useState(0);

  // Set Designer/Draughtsperson
  // Set Designer/Draughtsperson shoot Total postData
  const [setdesTotal, setSetdesTotal] = useState(0);
  // Set Designer/Draughtsperson prep Total postData
  const [setdesprepTotal, setSetdesprepTotal] = useState(0);
  // Set Designer/Draughtsperson all Total postData
  const [setdesallTotal, setSetdesallTotal] = useState(0);

  // Junior Draughtsperson
  // Junior Draughtsperson shoot Total postData
  const [jundraughtTotal, setJundraughtTotal] = useState(0);
  // Junior Draughtsperson shoot Total postData
  const [jundraprepTotal, setJundraprepTotal] = useState(0);
  // Junior Draughtsperson shoot Total postData
  const [jundraallTotal, setJundraallTotal] = useState(0);

  // standby art
  // standby art shoot Total postData
  const [standbyartTotal, setStandbyartTotal] = useState(0);
  // standby art prep Total postData
  const [stbyartprepTotal, setStbyartprepTotal] = useState(0);
  // standby art all Total postData
  const [stbyartallTotal, setStbyartallTotal] = useState(0);

  // art dep coordinator
  // art dep coordinator shoot Total postData
  const [artcoorTotal, setArtcoorTotal] = useState(0);
  // art dep coordinator prep Total postData
  const [artcoorprepTotal, setArtcoorprepTotal] = useState(0);
  // art dep coordinator wrap Total postData
  const [artcoorwrapTotal, setArtcoorwrapTotal] = useState(0);
  // art dep coordinator all Total postData
  const [artcoorallTotal, setArtcoorallTotal] = useState(0);

  // Design Labour Total postData 
  const [designlabourTotal, setDesignlabourTotal] = useState(0);

  // CONSTRUCTION LABOUR ----------------------------------

  // Construction Labour postData
  const [postDataConstruction, setPostDataConstruction] = useState({
    // new
    days6th7th_unit_con: "",
    days6th7th_con: 0,
    overtime_unit_con: "",
    overtime_con: 0,
    holidays_unit_con: "", 
    holidays_con: 0,
    box_rent_unit_con: "",
    box_rent_con: 0,
    con_coor_qty_prep: 0,
    con_coor_uno_prep: 0,
    con_coor_una_prep: "",
    con_coor_rt_prep: 0,
    con_coor_qty_wrap: 0,
    con_coor_uno_wrap: 0,
    con_coor_una_wrap: "",
    con_coor_rt_wrap: 0,
    headcar_qty_prep: 0,
    headcar_uno_prep: 0,
    headcar_una_prep: "",
    headcar_rt_prep: 0,
    headcar_qty_wrap: 0,
    headcar_uno_wrap: 0,
    headcar_una_wrap: "",
    headcar_rt_wrap: 0,
    carpen_qty_prep: 0,
    carpen_uno_prep: 0,
    carpen_una_prep: "",
    carpen_rt_prep: 0,
    carpen_qty_wrap: 0,
    carpen_uno_wrap: 0,
    carpen_una_wrap: "",
    carpen_rt_wrap: 0,
    scenic_qty_prep: 0,
    scenic_uno_prep: 0,
    scenic_una_prep: "",
    scenic_rt_prep: 0,
    scenic_qty_wrap: 0,
    scenic_uno_wrap: 0,
    scenic_una_wrap: "",
    scenic_rt_wrap: 0,
    headpain_qty_prep: 0,
    headpain_uno_prep: 0,
    headpain_una_prep: "",
    headpain_rt_prep: 0,
    headpain_qty_wrap: 0,
    headpain_uno_wrap: 0,
    headpain_una_wrap: "",
    headpain_rt_wrap: 0,
    pain_qty_prep: 0,
    pain_uno_prep: 0,
    pain_una_prep: "",
    pain_rt_prep: 0,
    pain_qty_wrap: 0,
    pain_uno_wrap: 0,
    pain_una_wrap: "",
    pain_rt_wrap: 0,
    labo_qty_prep: 0,
    labo_uno_prep: 0,
    labo_una_prep: "",
    labo_rt_prep: 0,
    labo_qty_wrap: 0,
    labo_uno_wrap: 0,
    labo_una_wrap: "",
    labo_rt_wrap: 0,
    // old
    other_construction: 0,
    fringes_taxes_construction: 0,
    constructioncoordinator_quantity: 0,
    constructioncoordinator_units_number: 0,
    constructioncoordinator_units_name: "",
    constructioncoordinator_rate: 0,
    headcarpenter_quantity: 0,
    headcarpenter_units_number: 0,
    headcarpenter_units_name: "",
    headcarpenter_rate: 0,
    carpenters_quantity: 0,
    carpenters_units_number: 0,
    carpenters_units_name: "",
    carpenters_rate: 0,
    scenicpainters_quantity: 0,
    scenicpainters_units_number: 0,
    scenicpainters_units_name: "",
    scenicpainters_rate: 0,
    headpainter_quantity: 0,
    headpainter_units_number: 0,
    headpainter_units_name: "",
    headpainter_rate: 0,
    painters_quantity: 0,
    painters_units_number: 0,
    painters_units_name: "",
    painters_rate: 0,
    labourers_quantity: 0,
    labourers_units_number: 0,
    labourers_units_name: "",
    labourers_rate: 0,
  });

  // Construction Labour values
  const {days6th7th_unit_con, days6th7th_con, overtime_unit_con, overtime_con,
    holidays_unit_con, holidays_con, box_rent_unit_con, box_rent_con,
    con_coor_qty_prep, con_coor_uno_prep, con_coor_una_prep, con_coor_rt_prep,
    con_coor_qty_wrap, con_coor_uno_wrap, con_coor_una_wrap, con_coor_rt_wrap,
    headcar_qty_prep, headcar_uno_prep, headcar_una_prep, headcar_rt_prep,
    headcar_qty_wrap, headcar_uno_wrap, headcar_una_wrap, headcar_rt_wrap,
    carpen_qty_prep, carpen_uno_prep, carpen_una_prep, carpen_rt_prep,
    carpen_qty_wrap, carpen_uno_wrap, carpen_una_wrap, carpen_rt_wrap,
    scenic_qty_prep, scenic_uno_prep, scenic_una_prep, scenic_rt_prep,
    scenic_qty_wrap, scenic_uno_wrap, scenic_una_wrap, scenic_rt_wrap,
    headpain_qty_prep, headpain_uno_prep, headpain_una_prep, headpain_rt_prep,
    headpain_qty_wrap, headpain_uno_wrap, headpain_una_wrap, headpain_rt_wrap,
    pain_qty_prep, pain_uno_prep, pain_una_prep, pain_rt_prep,
    pain_qty_wrap, pain_uno_wrap, pain_una_wrap, pain_rt_wrap,
    labo_qty_prep, labo_uno_prep, labo_una_prep, labo_rt_prep,
    labo_qty_wrap, labo_uno_wrap, labo_una_wrap, labo_rt_wrap,
    //old
    fringes_taxes_construction,
    constructioncoordinator_quantity, constructioncoordinator_units_number,
    constructioncoordinator_units_name, constructioncoordinator_rate,
    headcarpenter_quantity, headcarpenter_units_number,
    headcarpenter_units_name, headcarpenter_rate,
    carpenters_quantity, carpenters_units_number,
    carpenters_units_name, carpenters_rate,
    scenicpainters_quantity, scenicpainters_units_number,
    scenicpainters_units_name, scenicpainters_rate,
    headpainter_quantity, headpainter_units_number,
    headpainter_units_name, headpainter_rate,
    painters_quantity, painters_units_number, 
    painters_units_name, painters_rate,
    labourers_quantity, labourers_units_number, 
    labourers_units_name, labourers_rate, other_construction,
  } = postDataConstruction;

  // Totals
  
  // construction coordinator
  // construction coordinator shoot Total postData
  const [constructioncoordinatorTotal, setConstructioncoordinatorTotal] = useState(0);
  // construction coordinator prep Total postData
  const [concoorprepTotal, setConoorprepTotal] = useState(0);
  // construction coordinator wrap Total postData
  const [concoorwrapTotal, setConoorwrapTotal] = useState(0);
  // construction coordinator all Total postData
  const [concoorallTotal, setConoorallTotal] = useState(0);

  // head carpenter
  // head carpenter shoot Total postData
  const [headcarpenterTotal, setHeadcarpenterTotal] = useState(0);
  // head carpenter prep Total postData
  const [headcarprepTotal, setHeadcarprepTotal] = useState(0);
  // head carpenter wrap Total postData
  const [headcarwrapTotal, setHeadcarwrapTotal] = useState(0);
  // head carpenter all Total postData
  const [headcarallTotal, setHeadcarallTotal] = useState(0);

  // carpenters
  // carpenters shoot Total postData
  const [carpentersTotal, setCarpentersTotal] = useState(0);
  // carpenters prep Total postData
  const [carpenprepTotal, setCarpenprepTotal] = useState(0);
  // carpenters wrap Total postData
  const [carpenwrapTotal, setCarpenwrapTotal] = useState(0);
  // carpenters all Total postData
  const [carpenallTotal, setCarpenallTotal] = useState(0);

  // scenic painters
  // scenic painters shoot Total postData
  const [scenicpaintersTotal, setScenicpaintersTotal] = useState(0);
  // scenic painters prep Total postData
  const [scenicprepTotal, setScenicprepTotal] = useState(0);
  // scenic painters wrap Total postData
  const [scenicwrapTotal, setScenicwrapTotal] = useState(0);
  // scenic painters all Total postData
  const [scenicallTotal, setScenicallTotal] = useState(0);

  // head painter
  // head painter shoot Total postData
  const [headpainterTotal, setHeadpainterTotal] = useState(0);
  // head painter prep Total postData
  const [headpainprepTotal, setHeadpainprepTotal] = useState(0);
  // head painter wrap Total postData
  const [headpainwrapTotal, setHeadpainwrapTotal] = useState(0);
  // head painter all Total postData
  const [headpainallTotal, setHeadpainallTotal] = useState(0);

  // painters
  // painters shoot Total postData
  const [paintersTotal, setPaintersTotal] = useState(0);
  // painters prep Total postData
  const [paintprepTotal, setPaintprepTotal] = useState(0);
  // painters wrap Total postData
  const [paintwrapTotal, setPaintwrapTotal] = useState(0);
  // painters all Total postData
  const [paintallTotal, setPaintallTotal] = useState(0);

  // labourers
  // labourers shoot Total postData
  const [labourersTotal, setLabourersTotal] = useState(0);
  // labourers prep Total postData
  const [laboprepTotal, setLaboprepTotal] = useState(0);
  // labourers wrap Total postData
  const [labowrapTotal, setLabowrapTotal] = useState(0);
  // labourers all Total postData
  const [laboallTotal, setLaboallTotal] = useState(0);

  // construction Labour Total postData 
  const [constructionlabourTotal, setConstructionlabourTotal] = useState(0);
  
  // SET DRESSING LABOUR ----------------------------------

  // Set Dressing Labour postData 
  const [postDataSetDressing, setPostDataSetDressing] = useState({
    days6th7th_unit_dres: "",
    days6th7th_dres: 0,
    overtime_unit_dres: "",
    overtime_dres: 0,
    holidays_unit_dres: "", 
    holidays_dres: 0,
    box_rent_unit_dres: "",
    box_rent_dres: 0,
    set_dec_qty_prep: 0,
    set_dec_uno_prep: 0,
    set_dec_una_prep: "",
    set_dec_rt_prep: 0,
    set_dec_qty_wrap: 0,
    set_dec_uno_wrap: 0,
    set_dec_una_wrap: "",
    set_dec_rt_wrap: 0,
    ass_set_d_qty_prep: 0,
    ass_set_d_uno_prep: 0,
    ass_set_d_una_prep: "",
    ass_set_d_rt_prep: 0,
    ass_set_d_qty_wrap: 0,
    ass_set_d_uno_wrap: 0,
    ass_set_d_una_wrap: "",
    ass_set_d_rt_wrap: 0,
    lead_man_qty_prep: 0,
    lead_man_uno_prep: 0,
    lead_man_una_prep: "",
    lead_man_rt_prep: 0,
    lead_man_qty_wrap: 0,
    lead_man_uno_wrap: 0,
    lead_man_una_wrap: "",
    lead_man_rt_wrap: 0,
    set_dres_qty_prep: 0,
    set_dres_uno_prep: 0,
    set_dres_una_prep: "",
    set_dres_rt_prep: 0,
    set_dres_qty_wrap: 0,
    set_dres_uno_wrap: 0,
    set_dres_una_wrap: "",
    set_dres_rt_wrap: 0,
    swing_g_qty_prep: 0,
    swing_g_uno_prep: 0,
    swing_g_una_prep: "",
    swing_g_rt_prep: 0,
    swing_g_qty_wrap: 0,
    swing_g_uno_wrap: 0,
    swing_g_una_wrap: "",
    swing_g_rt_wrap: 0,
    set_d_buy_qty_prep: 0,
    set_d_buy_uno_prep: 0,
    set_d_buy_una_prep: "",
    set_d_buy_rt_prep: 0,
    set_d_buy_qty_wrap: 0,
    set_d_buy_uno_wrap: 0,
    set_d_buy_una_wrap: "",
    set_d_buy_rt_wrap: 0,
    // old
    fringes_taxes_dressing: 0,
    set_decorator_quantity: 0,
    set_decorator_units_number: 0,
    set_decorator_units_name: "",
    set_decorator_rate: 0,
    assist_set_decorator_quantity: 0,
    assist_set_decorator_units_number: 0,
    assist_set_decorator_units_name: "",
    assist_set_decorator_rate: 0,
    lead_man_quantity: 0,
    lead_man_units_number: 0,
    lead_man_units_name: "",
    lead_man_rate: 0,
    set_dressers_quantity: 0,
    set_dressers_units_number: 0,
    set_dressers_units_name: "",
    set_dressers_rate: 0,
    swing_gang_quantity: 0,
    swing_gang_units_number: 0,
    swing_gang_units_name: "",
    swing_gang_rate: 0,
    set_dressing_buyer_quantity: 0,
    set_dressing_buyer_units_number: 0,
    set_dressing_buyer_units_name: "",
    set_dressing_buyer_rate: 0,
    other_set_dressing: 0,
  });

  // Set Dressing Labour values
  const {days6th7th_unit_dres, days6th7th_dres, overtime_unit_dres, overtime_dres,
    holidays_unit_dres, holidays_dres, box_rent_unit_dres, box_rent_dres,
    set_dec_qty_prep, set_dec_uno_prep, set_dec_una_prep, set_dec_rt_prep,
    set_dec_qty_wrap, set_dec_uno_wrap, set_dec_una_wrap, set_dec_rt_wrap,
    ass_set_d_qty_prep, ass_set_d_uno_prep, ass_set_d_una_prep, ass_set_d_rt_prep,
    ass_set_d_qty_wrap, ass_set_d_uno_wrap, ass_set_d_una_wrap, ass_set_d_rt_wrap,
    lead_man_qty_prep, lead_man_uno_prep, lead_man_una_prep, lead_man_rt_prep,
    lead_man_qty_wrap, lead_man_uno_wrap, lead_man_una_wrap, lead_man_rt_wrap,
    set_dres_qty_prep, set_dres_uno_prep, set_dres_una_prep, set_dres_rt_prep,
    set_dres_qty_wrap, set_dres_uno_wrap, set_dres_una_wrap, set_dres_rt_wrap,
    swing_g_qty_prep, swing_g_uno_prep, swing_g_una_prep, swing_g_rt_prep,
    swing_g_qty_wrap, swing_g_uno_wrap, swing_g_una_wrap, swing_g_rt_wrap,
    set_d_buy_qty_prep, set_d_buy_uno_prep, set_d_buy_una_prep, set_d_buy_rt_prep,
    set_d_buy_qty_wrap, set_d_buy_uno_wrap, set_d_buy_una_wrap, set_d_buy_rt_wrap,
    // old
    fringes_taxes_dressing,
    set_decorator_quantity, set_decorator_units_number,
    set_decorator_units_name, set_decorator_rate,
    assist_set_decorator_quantity, assist_set_decorator_units_number,
    assist_set_decorator_units_name, assist_set_decorator_rate,
    lead_man_quantity, lead_man_units_number,
    lead_man_units_name, lead_man_rate,
    set_dressers_quantity, set_dressers_units_number,
    set_dressers_units_name, set_dressers_rate,
    swing_gang_quantity, swing_gang_units_number,
    swing_gang_units_name, swing_gang_rate,
    set_dressing_buyer_quantity, set_dressing_buyer_units_number,
    set_dressing_buyer_units_name, set_dressing_buyer_rate, other_set_dressing,
  } = postDataSetDressing;

  // Totals
  // set decorator
  // set decorator shoot Total postData
  const [decoratorsetTotal, setDecoratorsetTotal] = useState(0);
  // set decorator prep Total postData
  const [decsetprepTotal, setDecsetprepTotal] = useState(0);
  // set decorator wrap Total postData
  const [decsetwrapTotal, setDecsetwrapTotal] = useState(0);
  // set decorator all Total postData
  const [decsetallTotal, setDecsetallTotal] = useState(0);

  // set decorator
  // assist set decorator shoot Total postData
  const [assistdecoratorsetTotal, setAssistdecoratorsetTotal] = useState(0);
  // assist set decorator prep Total postData
  const [assdsetprepTotal, setAssdsetprepTotal] = useState(0);
  // assist set decorator wrap Total postData
  const [assdsetwrapTotal, setAssdsetwrapTotal] = useState(0);
  // assist set decorator all Total postData
  const [assdsetallTotal, setAssdsetallTotal] = useState(0);

  // lead man
  // lead man shoot Total postData
  const [leadmanTotal, setLeadmanTotal] = useState(0);
  // lead man prep Total postData
  const [leadmanprepTotal, setLeadmanprepTotal] = useState(0);
  // lead man wrap Total postData
  const [leadmanwrapTotal, setLeadmanwrapTotal] = useState(0);
  // lead man all Total postData
  const [leadmanallTotal, setLeadmanallTotal] = useState(0);

  // dressers
  // dressers shoot Total postData
  const [dressersTotal, setDressersTotal] = useState(0);
  // dressers prep Total postData
  const [dressprepTotal, setDressprepTotal] = useState(0);
  // dressers wrap Total postData
  const [dresswrapTotal, setDresswrapTotal] = useState(0);
  // dressers all Total postData
  const [dressallTotal, setDressallTotal] = useState(0);

   // swing gang
  // swing gang shoot Total postData
  const [swinggangTotal, setSwinggangTotal] = useState(0);
  // swing gang prep Total postData
  const [swinggprepTotal, setSwinggprepTotal] = useState(0);
  // swing gang wrap Total postData
  const [swinggwrapTotal, setSwinggwrapTotal] = useState(0);
  // swing gang all Total postData
  const [swinggallTotal, setSwinggallTotal] = useState(0);

  // set dressing
  // set dressing buyer shoot Total postData
  const [dressingbuyerTotal, setDressingbuyerTotal] = useState(0);
  // set dressing buyer prep Total postData
  const [dressbuyprepTotal, setDressbuyprepTotal] = useState(0);
  // set dressing buyer wrap Total postData
  const [dressbuywrapTotal, setDressbuywrapTotal] = useState(0);
  // set dressing buyer all Total postData
  const [dressbuyallTotal, setDressbuyallTotal] = useState(0);

  // Set Dressing Labour Total postData 
  const [dressinglabourTotal, setDressinglabourTotal] = useState(0);

  // PROPERTY LABOUR ----------------------------------

  // Property Labour postData 
  const [postDataProperty, setPostDataProperty] = useState({
    days6th7th_unit_prop: "",
    days6th7th_prop: 0,
    overtime_unit_prop: "",
    overtime_prop: 0,
    holidays_unit_prop: "", 
    holidays_prop: 0,
    box_rent_unit_prop: "",
    box_rent_prop: 0,
    pro_mas_qty_prep: 0,
    pro_mas_uno_prep: 0,
    pro_mas_una_prep: "",
    pro_mas_rt_prep: 0,
    pro_mas_qty_wrap: 0,
    pro_mas_uno_wrap: 0,
    pro_mas_una_wrap: "",
    pro_mas_rt_wrap: 0,
    as_pro_ma_qty_prep: 0,
    as_pro_ma_uno_prep: 0,
    as_pro_ma_una_prep: "",
    as_pro_ma_rt_prep: 0,
    as_pro_ma_qty_wrap: 0,
    as_pro_ma_uno_wrap: 0,
    as_pro_ma_una_wrap: "",
    as_pro_ma_rt_wrap: 0,
    on_set_prop_qty_prep: 0,
    on_set_prop_uno_prep: 0,
    on_set_prop_una_prep: "",
    on_set_prop_rt_prep: 0,
    on_set_prop_qty_wrap: 0,
    on_set_prop_uno_wrap: 0,
    on_set_prop_una_wrap: "",
    on_set_prop_rt_wrap: 0,
    prop_buy_qty_prep: 0,
    prop_buy_uno_prep: 0,
    prop_buy_una_prep: "",
    prop_buy_rt_prep: 0,
    prop_buy_qty_wrap: 0,
    prop_buy_uno_wrap: 0,
    prop_buy_una_wrap: "",
    prop_buy_rt_wrap: 0,
    armor_qty_prep: 0,
    armor_uno_prep: 0,
    armor_una_prep: "",
    armor_rt_prep: 0,
    armor_qty_wrap: 0,
    armor_uno_wrap: 0,
    armor_una_wrap: "",
    armor_rt_wrap: 0,
    // old _prep wrap
    fringes_taxes_property: 0,
    property_master_quantity: 0,
    property_master_units_number: 0,
    property_master_units_name: "",
    property_master_rate: 0,
    assist_property_master_quantity: 0,
    assist_property_master_units_number: 0,
    assist_property_master_units_name: "",
    assist_property_master_rate: 0,
    on_set_props_person_quantity: 0,
    on_set_props_person_units_number: 0,
    on_set_props_person_units_name: "",
    on_set_props_person_rate: 0,
    property_buyer_quantity: 0,
    property_buyer_units_number: 0,
    property_buyer_units_name: "",
    property_buyer_rate: 0,
    armorer_quantity: 0,
    armorer_units_number: 0,
    armorer_units_name: "",
    armorer_rate: 0,
    other_property: 0,
  });

  // Property Labour postData values
  const {days6th7th_unit_prop, days6th7th_prop, 
    overtime_unit_prop, overtime_prop,
    holidays_unit_prop, holidays_prop, box_rent_unit_prop, box_rent_prop,
    pro_mas_qty_prep, pro_mas_uno_prep, pro_mas_una_prep, pro_mas_rt_prep,
    pro_mas_qty_wrap, pro_mas_uno_wrap, pro_mas_una_wrap, pro_mas_rt_wrap,
    as_pro_ma_qty_prep, as_pro_ma_uno_prep, as_pro_ma_una_prep, as_pro_ma_rt_prep,
    as_pro_ma_qty_wrap, as_pro_ma_uno_wrap, as_pro_ma_una_wrap, as_pro_ma_rt_wrap,
    on_set_prop_qty_prep, on_set_prop_uno_prep, 
    on_set_prop_una_prep, on_set_prop_rt_prep,
    on_set_prop_qty_wrap, on_set_prop_uno_wrap, 
    on_set_prop_una_wrap, on_set_prop_rt_wrap, 
    prop_buy_qty_prep, prop_buy_uno_prep, prop_buy_una_prep, prop_buy_rt_prep,
    prop_buy_qty_wrap, prop_buy_uno_wrap, prop_buy_una_wrap, prop_buy_rt_wrap,
    armor_qty_prep, armor_uno_prep, armor_una_prep, armor_rt_prep,
    armor_qty_wrap, armor_uno_wrap, armor_una_wrap, armor_rt_wrap,
    // old
    fringes_taxes_property,
    property_master_quantity, property_master_units_number,
    property_master_units_name, property_master_rate,
    assist_property_master_quantity, assist_property_master_units_number,
    assist_property_master_units_name, assist_property_master_rate,
    on_set_props_person_quantity, on_set_props_person_units_number,
    on_set_props_person_units_name, on_set_props_person_rate,
    property_buyer_quantity, property_buyer_units_number,
    property_buyer_units_name, property_buyer_rate,
    armorer_quantity, armorer_units_number,
    armorer_units_name, armorer_rate,
    other_property,} = postDataProperty;
  
  // Totals

  // property master
  // property master shoot Total postData
  const [propertymasterTotal, setPropertymasterTotal] = useState(0);
  // property master prep Total postData
  const [propmasprepTotal, setPropmasprepTotal] = useState(0);
  // property master wrap Total postData
  const [propmaswrapTotal, setPropmaswrapTotal] = useState(0);
  // property master all Total postData
  const [propmasallTotal, setPropmasallTotal] = useState(0);

  // assist property master
  // assist property master shoot Total postData
  const [assistpropertymasterTotal, setAssistpropertymasterTotal] = useState(0);
  // assist property master prep Total postData
  const [aspropmaprepTotal, setAspropmaprepTotal] = useState(0);
  // assist property master wrap Total postData
  const [aspropmawrapTotal, setAspropmawrapTotal] = useState(0);
  // assist property master all Total postData
  const [aspropmaallTotal, setAspropmaallTotal] = useState(0);

  // on set props person
  // on set props person shoot Total postData
  const [onsetpropspersonTotal, setOnsetpropspersonTotal] = useState(0);
  // on set props person prep Total postData
  const [onsetpropprepTotal, setOnsetpropprepTotal] = useState(0);
  // on set props person wrap Total postData
  const [onsetpropwrapTotal, setOnsetpropwrapTotal] = useState(0);
  // on set props person all Total postData
  const [onsetpropallTotal, setOnsetpropallTotal] = useState(0);

  // property buyer
  // property buyer shoot Total postData
  const [propertybuyerTotal, setPropertybuyerTotal] = useState(0);
  // property buyer prep Total postData
  const [propbuyprepTotal, setPropbuyprepTotal] = useState(0);
  // property buyer wrap Total postData
  const [propbuywrapTotal, setPropbuywrapTotal] = useState(0);
  // property buyer all Total postData
  const [propbuyallTotal, setPropbuyallTotal] = useState(0);

  // armorer
  // armorer shoot Total postData
  const [armorerTotal, setArmorerTotal] = useState(0);
  // armorer prep Total postData
  const [armorprepTotal, setArmorprepTotal] = useState(0);
  // armorer wrap Total postData
  const [armorwrapTotal, setArmorwrapTotal] = useState(0);
  // armorer all Total postData
  const [armorallTotal, setArmorallTotal] = useState(0);

  // Property Labour Total postData 
  const [propertylabourTotal, setPropertylabourTotal] = useState(0);

  // WRANGLING LABOUR ----------------------------------

  // Wrangling Labour postData 
  const [postDataWrangling, setPostDataWrangling] = useState({
    days6th7th_unit_wran: "",
    days6th7th_wran: 0,
    overtime_unit_wran: "",
    overtime_wran: 0,
    holidays_unit_wran: "", 
    holidays_wran: 0,
    box_rent_unit_wran: "",
    box_rent_wran: 0,
    other_solo_wran: 0,
    he_wran_qty_prep: 0,
    he_wran_uno_prep: 0,
    he_wran_una_prep: "",
    he_wran_rt_prep: 0,
    he_wran_qty_wrap: 0,
    he_wran_uno_wrap: 0,
    he_wran_una_wrap: "",
    he_wran_rt_wrap: 0,
    oth_wran_qty_prep: 0,
    oth_wran_uno_prep: 0,
    oth_wran_una_prep: "",
    oth_wran_rt_prep: 0,
    oth_wran_qty_wrap: 0,
    oth_wran_uno_wrap: 0,
    oth_wran_una_wrap: "",
    oth_wran_rt_wrap: 0,
    fringes_taxes_wrangling: 0,
    head_wrangler_quantity: 0,
    head_wrangler_units_number: 0,
    head_wrangler_units_name: "",
    head_wrangler_rate: 0,
    other_wrangling_labour_quantity: 0,
    other_wrangling_labour_units_number: 0,
    other_wrangling_labour_units_name: "",
    other_wrangling_labour_rate: 0,
  });

  // Wrangling Labour values
  const {days6th7th_unit_wran, days6th7th_wran,
    overtime_unit_wran, overtime_wran, holidays_unit_wran, 
    holidays_wran, box_rent_unit_wran, box_rent_wran, other_solo_wran,
    he_wran_qty_prep, he_wran_uno_prep, he_wran_una_prep, he_wran_rt_prep,
    he_wran_qty_wrap, he_wran_uno_wrap, he_wran_una_wrap, he_wran_rt_wrap,
    oth_wran_qty_prep, oth_wran_uno_prep, oth_wran_una_prep, oth_wran_rt_prep,
    oth_wran_qty_wrap, oth_wran_uno_wrap, oth_wran_una_wrap, oth_wran_rt_wrap,
    fringes_taxes_wrangling,
    head_wrangler_quantity, head_wrangler_units_number,
    head_wrangler_units_name, head_wrangler_rate,
    other_wrangling_labour_quantity, other_wrangling_labour_units_number,
    other_wrangling_labour_units_name, other_wrangling_labour_rate,
  } = postDataWrangling;

  // Totals

  // head wrangler
  // head wrangler shoot Total postData
  const [headwranglerTotal, setHeadwranglerTotal] = useState(0);
  // head wrangler prep Total postData
  const [hewranprepTotal, setHewranprepTotal] = useState(0);
  // head wrangler wrap Total postData
  const [hewranwrapTotal, setHewranwrapTotal] = useState(0);
  // head wrangler all Total postData
  const [hewranallTotal, setHewranallTotal] = useState(0);

  // other wrangling labour
  // other wrangling labour shoot Total postData
  const [otherwranglinglabourTotal, setOtherwranglinglabourTotal] = useState(0);
  // other wrangling labour prep Total postData
  const [othwranlabprepTotal, setOtwranlabprepTotal] = useState(0);
  // other wrangling labour wrap Total postData
  const [othwranlabwrapTotal, setOtwranlabwrapTotal] = useState(0);
  // other wrangling labour all Total postData
  const [othwranlaballTotal, setOtwranlaballTotal] = useState(0);

  // Wrangling Labour Total postData 
  const [wranglerlabourTotal, setWranglerlabourTotal] = useState(0);

  // SPECIAL EFFECTS LABOUR ----------------------------------

  // Special Effects Labour postData
  const [postDataSpecialEffects, setPostDataSpecialEffects] = useState({
    days6th7th_unit_fx: "",
    days6th7th_fx: 0,
    overtime_unit_fx: "",
    overtime_fx: 0,
    holidays_unit_fx: "", 
    holidays_fx: 0,
    box_rent_unit_fx: "",
    box_rent_fx: 0,
    other_solo_fx: 0,
    fx_sup_qty_prep: 0,
    fx_sup_uno_prep: 0,
    fx_sup_una_prep: "",
    fx_sup_rt_prep: 0,
    fx_sup_qty_wrap: 0,
    fx_sup_uno_wrap: 0,
    fx_sup_una_wrap: "",
    fx_sup_rt_wrap: 0,
    ass_fx_qty_prep: 0,
    ass_fx_uno_prep: 0,
    ass_fx_una_prep: "",
    ass_fx_rt_prep: 0,
    ass_fx_qty_wrap: 0,
    ass_fx_uno_wrap: 0,
    ass_fx_una_wrap: "",
    ass_fx_rt_wrap: 0,
    ot_fx_l_qty_prep: 0,
    ot_fx_l_uno_prep: 0,
    ot_fx_l_una_prep: "",
    ot_fx_l_rt_prep: 0,
    ot_fx_l_qty_wrap: 0,
    ot_fx_l_uno_wrap: 0,
    ot_fx_l_una_wrap: "",
    ot_fx_l_rt_wrap: 0,
    // old
    fringes_taxes_fx: 0,
    fx_supervisor_quantity: 0,
    fx_supervisor_units_number: 0,
    fx_supervisor_units_name: "",
    fx_supervisor_rate: 0,
    assist_fx_quantity: 0,
    assist_fx_units_number: 0,
    assist_fx_units_name: "",
    assist_fx_rate: 0,
    other_fx_labour_quantity: 0,
    other_fx_labour_units_number: 0,
    other_fx_labour_units_name: "",
    other_fx_labour_rate: 0,
  });

  // Special Effects Labour values
  const {days6th7th_unit_fx, days6th7th_fx, overtime_unit_fx, overtime_fx,
    holidays_unit_fx,  holidays_fx, box_rent_unit_fx, box_rent_fx, other_solo_fx,
    fx_sup_qty_prep, fx_sup_uno_prep, fx_sup_una_prep, fx_sup_rt_prep,
    fx_sup_qty_wrap, fx_sup_uno_wrap, fx_sup_una_wrap, fx_sup_rt_wrap,
    ass_fx_qty_prep, ass_fx_uno_prep, ass_fx_una_prep, ass_fx_rt_prep,
    ass_fx_qty_wrap, ass_fx_uno_wrap, ass_fx_una_wrap, ass_fx_rt_wrap,
    ot_fx_l_qty_prep, ot_fx_l_uno_prep, ot_fx_l_una_prep, ot_fx_l_rt_prep,
    ot_fx_l_qty_wrap, ot_fx_l_uno_wrap, ot_fx_l_una_wrap, ot_fx_l_rt_wrap,
    // old
    fringes_taxes_fx,
    fx_supervisor_quantity, fx_supervisor_units_number,
    fx_supervisor_units_name, fx_supervisor_rate,
    assist_fx_quantity, assist_fx_units_number,
    assist_fx_units_name, assist_fx_rate,
    other_fx_labour_quantity, other_fx_labour_units_number,
    other_fx_labour_units_name, other_fx_labour_rate,
  } = postDataSpecialEffects;

  // Totals
  // fx supervisor
  // fx supervisor shoot Total postData 
  const [fxsupervisorTotal, setFxsupervisorTotal] = useState(0);
  // fx supervisor prep Total postData 
  const [fxsupprepTotal, setFxsupprepTotal] = useState(0);
  // fx supervisor wrap Total postData 
  const [fxsupwrapTotal, setFxsupwrapTotal] = useState(0);
  // fx supervisor all Total postData 
  const [fxsupallTotal, setFxsupallTotal] = useState(0);

  // assistant fx
  // assistant fx shoot Total postData
  const [assistfxTotal, setAssistfxTotal] = useState(0);
  // assistant fx prep Total postData
  const [assfxprepTotal, setAssfxprepTotal] = useState(0);
  // assistant fx wrap Total postData
  const [assfxwrapTotal, setAssfxwrapTotal] = useState(0);
  // assistant fx all Total postData
  const [assfxallTotal, setAssfxallTotal] = useState(0);

  // other fx
  // other fx shoot labour Total postData
  const [otherfxlabourTotal, setOtherfxlabourTotal] = useState(0);
  // other fx prep labour Total postData
  const [othfxlabprepTotal, setOthfxlabprepTotal] = useState(0);
  // other fx wrap labour Total postData
  const [othfxlabwrapTotal, setOthfxlabwrapTotal] = useState(0);
  // other fx all labour Total postData
  const [othfxlaballTotal, setOthfxlaballTotal] = useState(0);

  // FX Labour Total postData 
  const [fxlabourTotal, setFxlabourTotal] = useState(0);

  // WARDROBE LABOUR ----------------------------------

  // Wardrobe Labour postData
  const [postDataWardrobe, setPostDataWardrobe] = useState({
    days6th7th_unit_war: "",
    days6th7th_war: 0,
    overtime_unit_war: "",
    overtime_war: 0,
    holidays_unit_war: "", 
    holidays_war: 0,
    box_rent_unit_war: "",
    box_rent_war: 0,
    other_solo_war: 0,
    cos_des_qty_prep: 0,
    cos_des_uno_prep: 0,
    cos_des_una_prep: "",
    cos_des_rt_prep: 0,
    cos_des_qty_wrap: 0,
    cos_des_uno_wrap: 0,
    cos_des_una_wrap: "",
    cos_des_rt_wrap: 0,
    as_cos_des_qty_prep: 0,
    as_cos_des_uno_prep: 0,
    as_cos_des_una_prep: "",
    as_cos_des_rt_prep: 0,
    as_cos_des_qty_wrap: 0,
    as_cos_des_uno_wrap: 0,
    as_cos_des_una_wrap: "",
    as_cos_des_rt_wrap: 0,
    he_war_qty_prep: 0,
    he_war_uno_prep: 0,
    he_war_una_prep: "",
    he_war_rt_prep: 0,
    he_war_qty_wrap: 0,
    he_war_uno_wrap: 0,
    he_war_una_wrap: "",
    he_war_rt_wrap: 0,
    ot_war_qty_prep: 0,
    ot_war_uno_prep: 0,
    ot_war_una_prep: "",
    ot_war_rt_prep: 0,
    ot_war_qty_wrap: 0,
    ot_war_uno_wrap: 0,
    ot_war_una_wrap: "",
    ot_war_rt_wrap: 0,
    tru_cos_qty_prep: 0,
    tru_cos_uno_prep: 0,
    tru_cos_una_prep: "",
    tru_cos_rt_prep: 0,
    tru_cos_qty_wrap: 0,
    tru_cos_uno_wrap: 0,
    tru_cos_una_wrap: "",
    tru_cos_rt_wrap: 0,
    shopper_qty: 0,
    shopper_uno: 0,
    shopper_una: "",
    shopper_rt: 0,
    shopper_qty_prep: 0,
    shopper_uno_prep: 0,
    shopper_una_prep: "",
    shopper_rt_prep: 0,
    war_as_qty_prep: 0,
    war_as_uno_prep: 0,
    war_as_una_prep: "",
    war_as_rt_prep: 0,
    war_as_qty_wrap: 0,
    war_as_uno_wrap: 0,
    war_as_una_wrap: "",
    war_as_rt_wrap: 0,
    tailors: 0,
    textile_ar: 0,
    // new new
    train_qty_prep: 0,
    train_uno_prep: 0,
    train_una_prep: "",
    train_rt_prep: 0,
    train_qty: 0,
    train_uno: 0,
    train_una: "",
    train_rt: 0,
    train_qty_wrap: 0,
    train_uno_wrap: 0,
    train_una_wrap: "",
    train_rt_wrap: 0,
    day_war_qty: 0,
    day_war_uno: 0,
    day_war_una: "",
    day_war_rt: 0,
    war_coor_qty: 0,
    war_coor_uno: 0,
    war_coor_una: "",
    war_coor_rt: 0,
    war_coor_qty_prep: 0,
    war_coor_uno_prep: 0,
    war_coor_una_prep: "",
    war_coor_rt_prep: 0,
    war_coor_qty_wrap: 0,
    war_coor_uno_wrap: 0,
    war_coor_una_wrap: "",
    war_coor_rt_wrap: 0,
    // old _prep _wrap
    fringes_taxes_wardrobe: 0,
    costume_designer_quantity: 0,
    costume_designer_units_number: 0,
    costume_designer_units_name: "",
    costume_designer_rate: 0,
    assist_costume_designer_quantity: 0,
    assist_costume_designer_units_number: 0,
    assist_costume_designer_units_name: "",
    assist_costume_designer_rate: 0,
    head_wardrobe_quantity: 0,
    head_wardrobe_units_number: 0,
    head_wardrobe_units_name: "",
    head_wardrobe_rate: 0,
    wardrobe_assist_quantity: 0,
    wardrobe_assist_units_number: 0,
    wardrobe_assist_units_name: "",
    wardrobe_assist_rate: 0,
    truck_costumer_quantity: 0,
    truck_costumer_units_number: 0,
    truck_costumer_units_name: "",
    truck_costumer_rate: 0,
    other_wardrobe_labour_quantity: 0,
    other_wardrobe_labour_units_number: 0,
    other_wardrobe_labour_units_name: "",
    other_wardrobe_labour_rate: 0,
  });

  // Wardrobe Labour postData values
  const {train_qty_prep, train_uno_prep, train_una_prep, train_rt_prep, 
    train_qty, train_uno, train_una, train_rt,
    train_qty_wrap, train_uno_wrap, train_una_wrap, train_rt_wrap, 
    day_war_qty, day_war_uno, day_war_una, day_war_rt,
    war_coor_qty, war_coor_uno, war_coor_una, war_coor_rt,
    war_coor_qty_prep, war_coor_uno_prep, war_coor_una_prep, war_coor_rt_prep,
    war_coor_qty_wrap, war_coor_uno_wrap, war_coor_una_wrap, war_coor_rt_wrap,
    days6th7th_unit_war, days6th7th_war, overtime_unit_war, overtime_war,
    holidays_unit_war, holidays_war, box_rent_unit_war, box_rent_war, other_solo_war,
    cos_des_qty_prep, cos_des_uno_prep, cos_des_una_prep, cos_des_rt_prep,
    cos_des_qty_wrap, cos_des_uno_wrap, cos_des_una_wrap, cos_des_rt_wrap,
    as_cos_des_qty_prep, as_cos_des_uno_prep, as_cos_des_una_prep, as_cos_des_rt_prep,
    as_cos_des_qty_wrap, as_cos_des_uno_wrap, as_cos_des_una_wrap, as_cos_des_rt_wrap,
    he_war_qty_prep, he_war_uno_prep, he_war_una_prep, he_war_rt_prep,
    he_war_qty_wrap, he_war_uno_wrap, he_war_una_wrap, he_war_rt_wrap,
    war_as_qty_prep, war_as_uno_prep, war_as_una_prep, war_as_rt_prep, 
    war_as_qty_wrap, war_as_uno_wrap, war_as_una_wrap, war_as_rt_wrap,
    tru_cos_qty_prep, tru_cos_uno_prep, tru_cos_una_prep, tru_cos_rt_prep,
    tru_cos_qty_wrap, tru_cos_uno_wrap, tru_cos_una_wrap, tru_cos_rt_wrap,
    ot_war_qty_prep, ot_war_uno_prep, ot_war_una_prep, ot_war_rt_prep,
    ot_war_qty_wrap, ot_war_uno_wrap, ot_war_una_wrap, ot_war_rt_wrap,
    shopper_qty, shopper_uno, shopper_una, shopper_rt,
    shopper_qty_prep, shopper_uno_prep, shopper_una_prep, shopper_rt_prep,
    tailors, textile_ar,
    // old
    costume_designer_quantity, costume_designer_units_number,
    costume_designer_units_name, costume_designer_rate,
    assist_costume_designer_quantity, assist_costume_designer_units_number,
    assist_costume_designer_units_name, assist_costume_designer_rate,
    head_wardrobe_quantity, head_wardrobe_units_number,
    head_wardrobe_units_name, head_wardrobe_rate,
    wardrobe_assist_quantity, wardrobe_assist_units_number,
    wardrobe_assist_units_name, wardrobe_assist_rate,
    truck_costumer_quantity, truck_costumer_units_number,
    truck_costumer_units_name, truck_costumer_rate,
    other_wardrobe_labour_quantity, other_wardrobe_labour_units_number,
    other_wardrobe_labour_units_name, other_wardrobe_labour_rate,
    fringes_taxes_wardrobe, } = postDataWardrobe;

  // Totals

  // costume designer
  // costume designer Total shoot postData 
  const [costumedesignerTotal, setCostumedesignerTotal] = useState(0);
  // costume designer prep Total postData 
  const [cosdesprepTotal, setCosdesprepTotal] = useState(0);
  // costume designer wrap Total postData 
  const [cosdeswrapTotal, setCosdeswrapTotal] = useState(0);
  // costume designer all Total postData 
  const [cosdesallTotal, setCosdesallTotal] = useState(0);

  // assistant costume designer shoot Total postData 
  const [assistcosdesignerTotal, setAssistcosdesignerTotal] = useState(0);
  // assistant costume designer prep Total postData 
  const [ascosdesprepTotal, setAscosdesprepTotal] = useState(0);
  // assistant costume designer wrap Total postData 
  const [ascosdeswrapTotal, setAscosdeswrapTotal] = useState(0);
  // assistant costume designer all Total postData 
  const [ascosdesallTotal, setAscosdesallTotal] = useState(0);

  // wardrobe supervisor - using headwardrobe as variable
  // wardrobe supervisor shoot Total postData 
  const [headwardrobeTotal, setHeadwardrobeTotal] = useState(0);
  // wardrobe supervisor prep Total postData 
  const [hewarprepTotal, setHewarprepTotal] = useState(0);
  // wardrobe supervisor wrap Total postData 
  const [hewarwrapTotal, setHewarwrapTotal] = useState(0);
  // wardrobe supervisor all Total postData 
  const [hewarallTotal, setHewarallTotal] = useState(0);

  // Set Costumer - using otherwardrobe as variable
  // Set Costumer shoot Total postData 
  const [otherwardrobeTotal, setOtherwardrobeTotal] = useState(0);
  // Set Costumer prep Total postData 
  const [othwarprepTotal, setOthwarprepTotal] = useState(0);
  // Set Costumer wrap Total postData 
  const [othwarwrapTotal, setOthwarwrapTotal] = useState(0);
  // Set Costumer all Total postData 
  const [othwarallTotal, setOthwarallTotal] = useState(0);

  // truck costumer
  // truck costumer shoot Total postData 
  const [truckcostumerTotal, setTruckcostumerTotal] = useState(0);
  // truck costumer prep Total postData 
  const [trucosprepTotal, setTrucosprepTotal] = useState(0);
  // truck costumer wrap Total postData 
  const [trucoswrapTotal, setTrucoswrapTotal] = useState(0);
  // truck costumer all Total postData 
  const [trucosallTotal, setTrucosallTotal] = useState(0);

  // shopper
  // shopper shoot Total postData 
  const [shopperTotal, setShopperTotal] = useState(0);
  // shopper prep Total postData 
  const [shopprepTotal, setShopprepTotal] = useState(0);
  // shopper all Total postData 
  const [shopallTotal, setShopallTotal] = useState(0);

  // Wardrobe Assistant/Costume PA
  // wardrobe assist shoot Total postData 
  const [wardrobeassistTotal, setWardrobeassistTotal] = useState(0);
  // wardrobe assist prep Total postData 
  const [warasprepTotal, setWarasprepTotal] = useState(0);
  // wardrobe assist wrap Total postData 
  const [waraswrapTotal, setWaraswrapTotal] = useState(0);
  // wardrobe assist all Total postData 
  const [warasallTotal, setWarasallTotal] = useState(0);

  // Wardrobe Coordinator
  // wardrobe Coordinator shoot Total postData 
  const [warcoorTotal, setWarcoorTotal] = useState(0);
  // wardrobe Coordinator prep Total postData 
  const [warcoprepTotal, setWarcoprepTotal] = useState(0);
  // wardrobe Coordinator wrap Total postData 
  const [warcowrapTotal, setWarcowrapTotal] = useState(0);
  // wardrobe Coordinator all Total postData 
  const [warcoallTotal, setWarcoallTotal] = useState(0);

  // Wardrobe Trainee
  // wardrobe Trainee shoot Total postData 
  const [wartrainTotal, setWartrainTotal] = useState(0);
  // wardrobe Trainee prep Total postData 
  const [wartraprepTotal, setWartraprepTotal] = useState(0);
  // wardrobe Trainee wrap Total postData 
  const [wartrawrapTotal, setWartrawrapTotal] = useState(0);
  // wardrobe Trainee prep Total postData 
  const [wartraallTotal, setWartraallTotal] = useState(0);

  // Wardrobe Dailies
  // wardrobe Dailies shoot Total postData 
  const [wardayTotal, setWardayTotal] = useState(0);

  // Wardrobe Labour Total postData 
  const [wardrobelabourTotal, setWardrobelabourTotal] = useState(0);

  // MAKEUP LABOUR ----------------------------------

  // Makeup Labour postData
  const [postDataMakeup, setPostDataMakeup] = useState({
    days6th7th_unit_mak: "",
    days6th7th_mak: 0,
    overtime_unit_mak: "",
    overtime_mak: 0,
    holidays_unit_mak: "", 
    holidays_mak: 0,
    box_rent_unit_mak: "",
    box_rent_mak: 0,
    other_solo_mak: 0,
    mak_head_qty_prep: 0,
    mak_head_uno_prep: 0,
    mak_head_una_prep: "",
    mak_head_rt_prep: 0,
    mak_head_qty_wrap: 0,
    mak_head_uno_wrap: 0,
    mak_head_una_wrap: "",
    mak_head_rt_wrap: 0,
    key_mak_qty_prep: 0,
    key_mak_uno_prep: 0,
    key_mak_una_prep: "",
    key_mak_rt_prep: 0,
    key_mak_qty_wrap: 0,
    key_mak_uno_wrap: 0,
    key_mak_una_wrap: "",
    key_mak_rt_wrap: 0,
    mak_art_qty_prep: 0,
    mak_art_uno_prep: 0,
    mak_art_una_prep: "",
    mak_art_rt_prep: 0,
    mak_art_qty_wrap: 0,
    mak_art_uno_wrap: 0,
    mak_art_una_wrap: "",
    mak_art_rt_wrap: 0,
    key_hair_qty_prep: 0,
    key_hair_uno_prep: 0,
    key_hair_una_prep: "",
    key_hair_rt_prep: 0,
    key_hair_qty_wrap: 0,
    key_hair_uno_wrap: 0,
    key_hair_una_wrap: "",
    key_hair_rt_wrap: 0,
    hair_qty_prep: 0,
    hair_uno_prep: 0,
    hair_una_prep: "",
    hair_rt_prep: 0,
    hair_qty_wrap: 0,
    hair_uno_wrap: 0,
    hair_una_wrap: "",
    hair_rt_wrap: 0,
    oth_mak_qty_prep: 0,
    oth_mak_uno_prep: 0,
    oth_mak_una_prep: "",
    oth_mak_rt_prep: 0,
    oth_mak_qty_wrap: 0,
    oth_mak_uno_wrap: 0,
    oth_mak_una_wrap: "",
    oth_mak_rt_wrap: 0,
    sfx_mak_qty_prep: 0,
    sfx_mak_uno_prep: 0,
    sfx_mak_una_prep: "",
    sfx_mak_rt_prep: 0,
    sfx_mak_qty_wrap: 0,
    sfx_mak_uno_wrap: 0,
    sfx_mak_una_wrap: "",
    sfx_mak_rt_wrap: 0,
    mak_train_qty: 0,
    mak_train_uno: 0,
    mak_train_una: "",
    mak_train_rt: 0,
    mak_train_qty_prep: 0,
    mak_train_uno_prep: 0,
    mak_train_una_prep: "",
    mak_train_rt_prep: 0,
    mak_train_qty_wrap: 0,
    mak_train_uno_wrap: 0,
    mak_train_una_wrap: "",
    mak_train_rt_wrap: 0,
    fringes_taxes_makeup: 0,
    makeup_dept_head_quantity: 0,
    makeup_dept_head_units_number: 0,
    makeup_dept_head_units_name: "",
    makeup_dept_head_rate: 0,
    key_makeup_quantity: 0,
    key_makeup_units_number: 0,
    key_makeup_units_name: "",
    key_makeup_rate: 0,
    makeup_artist_quantity: 0,
    makeup_artist_units_number: 0,
    makeup_artist_units_name: "",
    makeup_artist_rate: 0,
    key_hairstylist_quantity: 0,
    key_hairstylist_units_number: 0,
    key_hairstylist_units_name: "",
    key_hairstylist_rate: 0,
    hairdresser_quantity: 0,
    hairdresser_units_number: 0,
    hairdresser_units_name: "",
    hairdresser_rate: 0,
    hair_makeup_dailies_quantity: 0,
    hair_makeup_dailies_units_number: 0,
    hair_makeup_dailies_units_name: "",
    hair_makeup_dailies_rate: 0,
    other_makeup_labour_quantity: 0,
    other_makeup_labour_units_number: 0,
    other_makeup_labour_units_name: "",
    other_makeup_labour_rate: 0,
    sfx_makeup_quantity: 0,
    sfx_makeup_units_number: 0,
    sfx_makeup_units_name: "",
    sfx_makeup_rate: 0,
  });

  const {days6th7th_unit_mak, days6th7th_mak, overtime_unit_mak, overtime_mak,
    holidays_unit_mak, holidays_mak, box_rent_unit_mak, box_rent_mak, other_solo_mak,
    mak_head_qty_prep, mak_head_uno_prep, mak_head_una_prep, mak_head_rt_prep,
    mak_head_qty_wrap, mak_head_uno_wrap, mak_head_una_wrap, mak_head_rt_wrap,
    key_mak_qty_prep, key_mak_uno_prep, key_mak_una_prep, key_mak_rt_prep,
    key_mak_qty_wrap, key_mak_uno_wrap, key_mak_una_wrap, key_mak_rt_wrap,
    mak_art_qty_prep, mak_art_uno_prep, mak_art_una_prep, mak_art_rt_prep, 
    mak_art_qty_wrap, mak_art_uno_wrap, mak_art_una_wrap, mak_art_rt_wrap,
    key_hair_qty_prep, key_hair_uno_prep, key_hair_una_prep, key_hair_rt_prep,
    key_hair_qty_wrap, key_hair_uno_wrap, key_hair_una_wrap, key_hair_rt_wrap,
    hair_qty_prep, hair_uno_prep, hair_una_prep, hair_rt_prep,
    hair_qty_wrap, hair_uno_wrap, hair_una_wrap, hair_rt_wrap,
    oth_mak_qty_prep, oth_mak_uno_prep, oth_mak_una_prep, oth_mak_rt_prep,
    oth_mak_qty_wrap, oth_mak_uno_wrap, oth_mak_una_wrap, oth_mak_rt_wrap,
    sfx_mak_qty_prep, sfx_mak_uno_prep, sfx_mak_una_prep, sfx_mak_rt_prep,
    sfx_mak_qty_wrap, sfx_mak_uno_wrap, sfx_mak_una_wrap, sfx_mak_rt_wrap,
    mak_train_qty, mak_train_uno, mak_train_una, mak_train_rt,
    mak_train_qty_prep, mak_train_uno_prep, mak_train_una_prep, mak_train_rt_prep,
    mak_train_qty_wrap, mak_train_uno_wrap, mak_train_una_wrap, mak_train_rt_wrap,
    // old
    makeup_dept_head_quantity,
    makeup_dept_head_units_number,
    makeup_dept_head_units_name,
    makeup_dept_head_rate,
    key_makeup_quantity,
    key_makeup_units_number,
    key_makeup_units_name,
    key_makeup_rate,
    makeup_artist_quantity,
    makeup_artist_units_number,
    makeup_artist_units_name,
    makeup_artist_rate,
    key_hairstylist_quantity,
    key_hairstylist_units_number,
    key_hairstylist_units_name,
    key_hairstylist_rate,
    hairdresser_quantity,
    hairdresser_units_number,
    hairdresser_units_name,
    hairdresser_rate,
    hair_makeup_dailies_quantity,
    hair_makeup_dailies_units_number,
    hair_makeup_dailies_units_name,
    hair_makeup_dailies_rate,
    other_makeup_labour_quantity,
    other_makeup_labour_units_number,
    other_makeup_labour_units_name,
    other_makeup_labour_rate,
    sfx_makeup_quantity,
    sfx_makeup_units_number,
    sfx_makeup_units_name,
    sfx_makeup_rate, fringes_taxes_makeup,} = postDataMakeup;
  
  // Totals

  // head makeup
  // head makeup shoot Total postData 
  const [headmakeupTotal, setHeadmakeupTotal] = useState(0);
  // head makeup prep Total postData 
  const [headmakprepTotal, setHeadmakprepTotal] = useState(0);
  // head makeup wrap Total postData 
  const [headmakwrapTotal, setHeadmakwrapTotal] = useState(0);
  // head makeup all Total postData 
  const [headmakallTotal, setHeadmakallTotal] = useState(0);

  // key makeup
  // key makeup shoot Total postData 
  const [keymakeupTotal, setKeymakeupTotal] = useState(0);
  // key makeup prep Total postData 
  const [keymakprepTotal, setKeymakprepTotal] = useState(0);
  // key makeup wrap Total postData 
  const [keymakwrapTotal, setKeymakwrapTotal] = useState(0);
  // key makeup prep Total postData 
  const [keymakallTotal, setKeymakallTotal] = useState(0);
  
  // makeup artist
  // makeup artist shoot Total postData 
  const [makeupartistTotal, setMakeupartistTotal] = useState(0);
  // makeup artist prep Total postData 
  const [makartprepTotal, setMakartprepTotal] = useState(0);
  // makeup artist wrap Total postData 
  const [makartwrapTotal, setMakartwrapTotal] = useState(0);
  // makeup artist all Total postData 
  const [makartallTotal, setMakartallTotal] = useState(0);

  // key hairstylist
  // key hairstylist shoot Total postData 
  const [keyhairstylistTotal, setKeyhairstylistTotal] = useState(0);
  // key hairstylist prep Total postData 
  const [keyhairprepTotal, setKeyhairprepTotal] = useState(0);
  // key hairstylist wrap Total postData 
  const [keyhairwrapTotal, setKeyhairwrapTotal] = useState(0);
  // key hairstylist all Total postData 
  const [keyhairallTotal, setKeyhairallTotal] = useState(0);

  // hairdresser
  // hairdresser shoot Total postData 
  const [hairdresserTotal, setHairdresserTotal] = useState(0);
  // hairdresser prep Total postData 
  const [hairprepTotal, setHairprepTotal] = useState(0);
  // hairdresser wrap Total postData 
  const [hairwrapTotal, setHairwrapTotal] = useState(0);
  // hairdresser all Total postData 
  const [hairallTotal, setHairallTotal] = useState(0);

  // hair makeup dailies
  // hair makeup dailies shoot Total postData 
  const [hairmakeupdailiesTotal, setHairmakeupdailiesTotal] = useState(0);

  // other makeup labour
  // other makeup labour shoot Total postData 
  const [othermakeuplabourTotal, setOthermakeuplabourTotal] = useState(0);
  // other makeup labour prep Total postData 
  const [othmakprepTotal, setOthmakprepTotal] = useState(0);
  // other makeup labour wrap Total postData 
  const [othmakwrapTotal, setOthmakwrapTotal] = useState(0);
  // other makeup labour all Total postData 
  const [othmakallTotal, setOthmakallTotal] = useState(0);

  // sfx makeup labour
  // sfx makeup labour shoot Total postData 
  const [sfxmakeupTotal, setSfxmakeupTotal] = useState(0);
  // sfx makeup labour prep Total postData 
  const [sfxmakprepTotal, setSfxmakprepTotal] = useState(0);
  // sfx makeup labour wrap Total postData 
  const [sfxmakwrapTotal, setSfxmakwrapTotal] = useState(0);
  // sfx makeup labour all Total postData 
  const [sfxmakallTotal, setSfxmakallTotal] = useState(0);

  // makeup trainee labour
  // makeup trainee labour shoot Total postData 
  const [maktrainTotal, setMakktrainTotal] = useState(0);
  // makeup trainee labour prep Total postData 
  const [maktraprepTotal, setMakktraprepTotal] = useState(0);
  // makeup trainee labour wrap Total postData 
  const [maktrawrapTotal, setMakktrawrapTotal] = useState(0);
  // makeup trainee labour all Total postData 
  const [maktraallTotal, setMakktraallTotal] = useState(0);

  // Makeup Labour Total postData 
  const [makeuplabourTotal, setMakeuplabourTotal] = useState(0);

  // CAMERA LABOUR ----------------------------------

  // Camera Labour postData
  const [postDataCamera, setPostDataCamera] = useState({
    days6th7th_unit_cam: "",
    days6th7th_cam: 0,
    overtime_unit_cam: "",
    overtime_cam: 0,
    holidays_unit_cam: "", 
    holidays_cam: 0,
    box_rent_unit_cam: "",
    box_rent_cam: 0,
    other_solo_cam: 0,
    dop_qty_prep: 0,
    dop_uno_prep: 0,
    dop_una_prep: "",
    dop_rt_prep: 0,
    dop_qty_wrap: 0,
    dop_uno_wrap: 0,
    dop_una_wrap: "",
    dop_rt_wrap: 0,
    cam_op_qty_prep: 0,
    cam_op_uno_prep: 0,
    cam_op_una_prep: "",
    cam_op_rt_prep: 0,
    cam_op_qty_wrap: 0,
    cam_op_uno_wrap: 0,
    cam_op_una_wrap: "",
    cam_op_rt_wrap: 0,
    cam_ac1_qty_prep: 0,
    cam_ac1_uno_prep: 0,
    cam_ac1_una_prep: "",
    cam_ac1_rt_prep: 0,
    cam_ac1_qty_wrap: 0,
    cam_ac1_uno_wrap: 0,
    cam_ac1_una_wrap: "",
    cam_ac1_rt_wrap: 0,
    cam_ac2_qty_prep: 0,
    cam_ac2_uno_prep: 0,
    cam_ac2_una_prep: "",
    cam_ac2_rt_prep: 0,
    cam_ac2_qty_wrap: 0,
    cam_ac2_uno_wrap: 0,
    cam_ac2_una_wrap: "",
    cam_ac2_rt_wrap: 0,
    dit_qty_prep: 0,
    dit_uno_prep: 0,
    dit_una_prep: "",
    dit_rt_prep: 0,
    dit_qty_wrap: 0,
    dit_uno_wrap: 0,
    dit_una_wrap: "",
    dit_rt_wrap: 0,
    stead_qty_prep: 0,
    stead_uno_prep: 0,
    stead_una_prep: "",
    stead_rt_prep: 0,
    stead_qty_wrap: 0,
    stead_uno_wrap: 0,
    stead_una_wrap: "",
    stead_rt_wrap: 0,
    cam_pa_qty_prep: 0,
    cam_pa_uno_prep: 0,
    cam_pa_una_prep: "",
    cam_pa_rt_prep: 0,
    cam_pa_qty_wrap: 0,
    cam_pa_uno_wrap: 0,
    cam_pa_una_wrap: "",
    cam_pa_rt_wrap: 0,
    dro_pil_qty_prep: 0,
    dro_pil_uno_prep: 0,
    dro_pil_una_prep: "",
    dro_pil_rt_prep: 0,
    dro_pil_qty_wrap: 0,
    dro_pil_uno_wrap: 0,
    dro_pil_una_wrap: "",
    dro_pil_rt_wrap: 0,
    ot_cam_qty_prep: 0,
    ot_cam_uno_prep: 0,
    ot_cam_una_prep: "",
    ot_cam_rt_prep: 0,
    ot_cam_qty_wrap: 0,
    ot_cam_uno_wrap: 0,
    ot_cam_una_wrap: "",
    ot_cam_rt_wrap: 0,
    fringes_taxes_camera: 0,
    dop_qty: 0,
    dop_uno: 0,
    dop_una: "",
    dop_rt: 0,
    camera_op_qty: 0,
    camera_op_uno: 0,
    camera_op_una: "",
    camera_op_rt: 0,
    cam_ac1_qty: 0,
    cam_ac1_uno: 0,
    cam_ac1_una: "",
    cam_ac1_rt: 0,
    cam_ac2_qty: 0,
    cam_ac2_uno: 0,
    cam_ac2_una: "",
    cam_ac2_rt: 0,
    dit_qty: 0,
    dit_uno: 0,
    dit_una: "",
    dit_rt: 0,
    steadicam_qty: 0,
    steadicam_uno: 0,
    steadicam_una: "",
    steadicam_rt: 0,
    cam_pa_qty: 0,
    cam_pa_uno: 0,
    cam_pa_una: "",
    cam_pa_rt: 0,
    drone_pilot_qty: 0,
    drone_pilot_uno: 0,
    drone_pilot_una: "",
    drone_pilot_rt: 0,
    other_cam_qty: 0,
    other_cam_uno: 0,
    other_cam_una: "",
    other_cam_rt: 0,
    stills_qty: 0,
    stills_uno: 0,
    stills_una: "",
    stills_rt: 0,
  });

  // Camera Labour postData values
  const {days6th7th_unit_cam, days6th7th_cam,
    overtime_unit_cam, overtime_cam, holidays_unit_cam, 
    holidays_cam, box_rent_unit_cam, box_rent_cam, other_solo_cam,
    dop_qty_prep, dop_uno_prep, dop_una_prep, dop_rt_prep,
    dop_qty_wrap, dop_uno_wrap, dop_una_wrap, dop_rt_wrap,
    cam_op_qty_prep, cam_op_uno_prep, cam_op_una_prep, cam_op_rt_prep,
    cam_op_qty_wrap, cam_op_uno_wrap, cam_op_una_wrap, cam_op_rt_wrap,
    cam_ac1_qty_prep, cam_ac1_uno_prep, cam_ac1_una_prep, cam_ac1_rt_prep,
    cam_ac1_qty_wrap, cam_ac1_uno_wrap, cam_ac1_una_wrap, cam_ac1_rt_wrap,
    cam_ac2_qty_prep, cam_ac2_uno_prep, cam_ac2_una_prep, cam_ac2_rt_prep,
    cam_ac2_qty_wrap, cam_ac2_uno_wrap, cam_ac2_una_wrap, cam_ac2_rt_wrap,
    dit_qty_prep, dit_uno_prep, dit_una_prep, dit_rt_prep, 
    dit_qty_wrap, dit_uno_wrap, dit_una_wrap, dit_rt_wrap,
    stead_qty_prep, stead_uno_prep, stead_una_prep, stead_rt_prep,
    stead_qty_wrap, stead_uno_wrap, stead_una_wrap, stead_rt_wrap,
    cam_pa_qty_prep, cam_pa_uno_prep, cam_pa_una_prep, cam_pa_rt_prep,
    cam_pa_qty_wrap, cam_pa_uno_wrap, cam_pa_una_wrap, cam_pa_rt_wrap,
    dro_pil_qty_prep, dro_pil_uno_prep, dro_pil_una_prep, dro_pil_rt_prep,
    dro_pil_qty_wrap, dro_pil_uno_wrap, dro_pil_una_wrap, dro_pil_rt_wrap,
    ot_cam_qty_prep, ot_cam_uno_prep, ot_cam_una_prep, ot_cam_rt_prep,
    ot_cam_qty_wrap, ot_cam_uno_wrap, ot_cam_una_wrap, ot_cam_rt_wrap,
    // old
    dop_qty, dop_uno, dop_una, dop_rt,
    camera_op_qty, camera_op_uno, camera_op_una, camera_op_rt,
    cam_ac1_qty, cam_ac1_uno, cam_ac1_una, cam_ac1_rt,
    cam_ac2_qty, cam_ac2_uno, cam_ac2_una, cam_ac2_rt,
    dit_qty, dit_uno, dit_una, dit_rt,
    steadicam_qty, steadicam_uno, steadicam_una, steadicam_rt,
    cam_pa_qty, cam_pa_uno, cam_pa_una, cam_pa_rt, 
    drone_pilot_qty, drone_pilot_uno, drone_pilot_una, drone_pilot_rt,
    other_cam_qty, other_cam_uno, other_cam_una, other_cam_rt,
    stills_qty, stills_uno, stills_una, stills_rt,
    fringes_taxes_camera,} = postDataCamera;

  // Totals

  // dop
  // dop shoot Total postData 
  const [dopTotal, setDopTotal] = useState(0);
  // dop prep Total postData 
  const [dopprepTotal, setDopprepTotal] = useState(0);
  // dop wrap Total postData 
  const [dopwrapTotal, setDopwrapTotal] = useState(0);
  // dop all Total postData 
  const [dopallTotal, setDopallTotal] = useState(0);

  // Camera Operator
  // Camera Operator shoot Total postData 
  const [cameraopTotal, setCameraopTotal] = useState(0);
  // Camera Operator prep Total postData 
  const [camopprepTotal, setCamopprepTotal] = useState(0);
  // Camera Operator wrap Total postData 
  const [camopwrapTotal, setCamopwrapTotal] = useState(0);
  // Camera Operator all Total postData 
  const [camopallTotal, setCamopallTotal] = useState(0);

  // 1st Assistant Camera
  // 1st Assistant Camera shoot Total postData 
  const [camac1Total, setCamac1Total] = useState(0);
  // 1st Assistant Camera prep Total postData 
  const [camac1prepTotal, setCamac1prepTotal] = useState(0);
  // 1st Assistant Camera wrap Total postData 
  const [camac1wrapTotal, setCamac1wrapTotal] = useState(0);
  // 1st Assistant Camera all Total postData 
  const [camac1allTotal, setCamac1allTotal] = useState(0);

  // 2nd Assistant Camera
  // 2nd Assistant Camera shoot Total postData 
  const [camac2Total, setCamac2Total] = useState(0);
  // 2nd Assistant Camera prep Total postData 
  const [camac2prepTotal, setCamac2prepTotal] = useState(0);
  // 2nd Assistant Camera wrap Total postData 
  const [camac2wrapTotal, setCamac2wrapTotal] = useState(0);
  // 2nd Assistant Camera all Total postData 
  const [camac2allTotal, setCamac2allTotal] = useState(0);

  // DIT Total
  // DIT shoot Total postData 
  const [ditTotal, setDitTotal] = useState(0);
  // DIT prep Total postData 
  const [ditprepTotal, setDitprepTotal] = useState(0);
  // DIT wrap Total postData 
  const [ditwrapTotal, setDitwrapTotal] = useState(0);
  // DIT prep Total postData 
  const [ditallTotal, setDitallTotal] = useState(0);

  // Steadicam
  // Steadicam shoot Total postData 
  const [steadicamTotal, setSteadicamTotal] = useState(0);
  // Steadicam prep Total postData 
  const [stecamprepTotal, setStecamprepTotal] = useState(0);
  // Steadicam wrap Total postData 
  const [stecamwrapTotal, setStecamwrapTotal] = useState(0);
  // Steadicam all Total postData 
  const [stecamallTotal, setStecamallTotal] = useState(0);

  // Camera PA
  // Camera PA shoot Total postData 
  const [campaTotal, setCampaTotal] = useState(0);
  // Camera PA prep Total postData 
  const [campaprepTotal, setCampaprepTotal] = useState(0);
  // Camera PA wrap Total postData 
  const [campawrapTotal, setCampawrapTotal] = useState(0);
  // Camera PA all Total postData 
  const [campaallTotal, setCampaallTotal] = useState(0);

  // Drone Pilot
  // Drone Pilot shoot Total postData 
  const [dronepilotTotal, setDronepilotTotal] = useState(0);
  // Drone Pilot prep Total postData 
  const [dronpiprepTotal, setDronpiprepTotal] = useState(0);
  // Drone Pilot wrap Total postData 
  const [dronpiwrapTotal, setDronpiwrapTotal] = useState(0);
  // Drone Pilot all Total postData 
  const [dronpiallTotal, setDronpiallTotal] = useState(0);

  // other cam
  // other cam shoot Total postData 
  const [othercamTotal, setOthercamTotal] = useState(0);
  // other cam prep Total postData 
  const [othcamprepTotal, setOthcamprepTotal] = useState(0);
  // other cam wrap Total postData 
  const [othcamwrapTotal, setOthcamwrapTotal] = useState(0);
  // other cam all Total postData 
  const [othcamallTotal, setOthcamallTotal] = useState(0);

  // Stills
  // Stills shoot Total postData 
  const [stillsTotal, setStillsTotal] = useState(0);

  // Camera Labour Total postData 
  const [cameralabourTotal, setCameralabourTotal] = useState(0);

  // ELECTRICAL LABOUR ----------------------------------

  // Electrical Labour postData
  const [postDataElectric, setPostDataElectric] = useState({
    days6th7th_unit_ele: "",
    days6th7th_ele: 0,
    overtime_unit_ele: "",
    overtime_ele: 0,
    holidays_unit_ele: "", 
    holidays_ele: 0,
    box_rent_unit_ele: "",
    box_rent_ele: 0,
    other_solo_ele: 0,
    gaf_qty_prep: 0,
    gaf_uno_prep: 0,
    gaf_una_prep: "",
    gaf_rt_prep: 0,
    gaf_qty_wrap: 0,
    gaf_uno_wrap: 0,
    gaf_una_wrap: "",
    gaf_rt_wrap: 0,
    b_boy_qty_prep: 0,
    b_boy_uno_prep: 0,
    b_boy_una_prep: "",
    b_boy_rt_prep: 0,
    b_boy_qty_wrap: 0,
    b_boy_uno_wrap: 0,
    b_boy_una_wrap: "",
    b_boy_rt_wrap: 0,
    elec_qty_prep: 0,
    elec_uno_prep: 0,
    elec_una_prep: "",
    elec_rt_prep: 0,
    elec_qty_wrap: 0,
    elec_uno_wrap: 0,
    elec_una_wrap: "",
    elec_rt_wrap: 0,
    gen_op_qty_prep: 0,
    gen_op_uno_prep: 0,
    gen_op_una_prep: "",
    gen_op_rt_prep: 0,
    gen_op_qty_wrap: 0,
    gen_op_uno_wrap: 0,
    gen_op_una_wrap: "",
    gen_op_rt_wrap: 0,
    ot_el_qty_prep: 0,
    ot_el_uno_prep: 0,
    ot_el_una_prep: "",
    ot_el_rt_prep: 0,
    ot_el_qty_wrap: 0,
    ot_el_uno_wrap: 0,
    ot_el_una_wrap: "",
    ot_el_rt_wrap: 0,
    d_elec_qty_prep: 0,
    d_elec_uno_prep: 0,
    d_elec_una_prep: "",
    d_elec_rt_prep: 0,
    d_elec_qty_wrap: 0,
    d_elec_uno_wrap: 0,
    d_elec_una_wrap: "",
    d_elec_rt_wrap: 0,
    fringes_taxes_electric: 0,
    gaffer_qty: 0,
    gaffer_uno: 0,
    gaffer_una: "",
    gaffer_rt: 0,
    best_boy_qty: 0,
    best_boy_uno: 0,
    best_boy_una: "",
    best_boy_rt: 0,
    electrician_qty: 0,
    electrician_uno: 0,
    electrician_una: "",
    electrician_rt: 0,
    dailies_elec_qty: 0,
    dailies_elec_uno: 0,
    dailies_elec_una: "",
    dailies_elec_rt: 0,
    generator_op_qty: 0,
    generator_op_uno: 0,
    generator_op_una: "",
    generator_op_rt: 0,
    other_elec_qty: 0,
    other_elec_uno: 0,
    other_elec_una: "",
    other_elec_rt: 0,
  });

  // values
  const {days6th7th_unit_ele,days6th7th_ele,
    overtime_unit_ele, overtime_ele, holidays_unit_ele, 
    holidays_ele, box_rent_unit_ele, box_rent_ele, other_solo_ele,
    gaf_qty_prep, gaf_uno_prep, gaf_una_prep, gaf_rt_prep, 
    gaf_qty_wrap, gaf_uno_wrap, gaf_una_wrap, gaf_rt_wrap,
    b_boy_qty_prep, b_boy_uno_prep, b_boy_una_prep, b_boy_rt_prep,
    b_boy_qty_wrap, b_boy_uno_wrap, b_boy_una_wrap, b_boy_rt_wrap,
    elec_qty_prep, elec_uno_prep, elec_una_prep, elec_rt_prep,
    elec_qty_wrap, elec_uno_wrap, elec_una_wrap, elec_rt_wrap,
    d_elec_qty_prep, d_elec_uno_prep, d_elec_una_prep, d_elec_rt_prep,
    d_elec_qty_wrap, d_elec_uno_wrap, d_elec_una_wrap, d_elec_rt_wrap,
    gen_op_qty_prep, gen_op_uno_prep, gen_op_una_prep, gen_op_rt_prep,
    gen_op_qty_wrap, gen_op_uno_wrap, gen_op_una_wrap, gen_op_rt_wrap,
    ot_el_qty_prep, ot_el_uno_prep, ot_el_una_prep, ot_el_rt_prep,
    ot_el_qty_wrap, ot_el_uno_wrap, ot_el_una_wrap, ot_el_rt_wrap,
    // old
    gaffer_qty, gaffer_uno, gaffer_una, gaffer_rt,
    best_boy_qty, best_boy_uno, best_boy_una, best_boy_rt,
    electrician_qty, electrician_uno, electrician_una, electrician_rt,
    dailies_elec_qty, dailies_elec_uno, dailies_elec_una, dailies_elec_rt,
    generator_op_qty, generator_op_uno, generator_op_una, generator_op_rt,
    other_elec_qty, other_elec_uno, other_elec_una, other_elec_rt,
    fringes_taxes_electric,} = postDataElectric;

  // Totals

  // gaffer
  // gaffer shoot Total postData 
  const [gafferTotal, setGafferTotal] = useState(0);
  // gaffer prep Total postData 
  const [gafprepTotal, setGafprepTotal] = useState(0);
  // gaffer wrap Total postData 
  const [gafwrapTotal, setGafwrapTotal] = useState(0);
  // gaffer all Total postData 
  const [gafallTotal, setGafallTotal] = useState(0);

  // best boy
  // best boy shoot Total postData 
  const [bestboyTotal, setBestboyTotal] = useState(0);
  // best boy prep Total postData 
  const [bboyprepTotal, setBboyprepTotal] = useState(0);
  // best boy wrap Total postData 
  const [bboywrapTotal, setBboywrapTotal] = useState(0);
  // best boy all Total postData 
  const [bboyallTotal, setBboyallTotal] = useState(0);

  // electrician
  // electrician shoot Total postData 
  const [electricianTotal, setElectricianTotal] = useState(0);
  // electrician prep Total postData 
  const [elecprepTotal, setElecprepTotal] = useState(0);
  // electrician wrap Total postData 
  const [elecwrapTotal, setElecwrapTotal] = useState(0);
  // electrician all Total postData 
  const [elecallTotal, setElecallTotal] = useState(0);

  // dailies electric
  // dailies electric shoot Total postData 
  const [dailieselecTotal, setDailieselecTotal] = useState(0);
  // dailies electric prep Total postData 
  const [daelecprepTotal, setDaelecprepTotal] = useState(0);
  // dailies electric wrap Total postData 
  const [daelecwrapTotal, setDaelecwrapTotal] = useState(0);
  // dailies electric all Total postData 
  const [daelecallTotal, setDaelecallTotal] = useState(0);

  // generator operator
  // generator operator shoot Total postData 
  const [generatoropTotal, setGeneratoropTotal] = useState(0);
  // generator operator prep Total postData 
  const [genopprepTotal, setGenopprepTotal] = useState(0);
  // generator operator wrap Total postData 
  const [genopwrapTotal, setGenopwrapTotal] = useState(0);
  // generator operator all Total postData 
  const [genopallTotal, setGenopallTotal] = useState(0);

  // other electric
  // other electric shoot Total postData 
  const [otherelectricTotal, setOtherelectricTotal] = useState(0);
  // other electric prep Total postData 
  const [otelecprepTotal, setOtelecprepTotal] = useState(0);
  // other electric wrap Total postData 
  const [otelecwrapTotal, setOtelecwrapTotal] = useState(0);
  // other electric all Total postData 
  const [otelecallTotal, setOtelecallTotal] = useState(0);

  // Electric Labour Total postData 
  const [electriclabourTotal, setElectriclabourTotal] = useState(0);

  // GRIP LABOUR ----------------------------------

  // Grip Labour postData
  const [postDataGrip, setPostDataGrip] = useState({
    days6th7th_unit_grip: "",
    days6th7th_grip: 0,
    overtime_unit_grip: "",
    overtime_grip: 0,
    holidays_unit_grip: "", 
    holidays_grip: 0,
    box_rent_unit_grip: "",
    box_rent_grip: 0,
    other_solo_grip: 0,
    k_grip_qty_prep: 0,
    k_grip_uno_prep: 0,
    k_grip_una_prep: "",
    k_grip_rt_prep: 0,
    k_grip_qty_wrap: 0,
    k_grip_uno_wrap: 0,
    k_grip_una_wrap: "",
    k_grip_rt_wrap: 0,
    bb_grip_qty_prep: 0,
    bb_grip_uno_prep: 0,
    bb_grip_una_prep: "",
    bb_grip_rt_prep: 0,
    bb_grip_qty_wrap: 0,
    bb_grip_uno_wrap: 0,
    bb_grip_una_wrap: "",
    bb_grip_rt_wrap: 0,
    grips_qty_prep: 0,
    grips_uno_prep: 0,
    grips_una_prep: "",
    grips_rt_prep: 0,
    grips_qty_wrap: 0,
    grips_uno_wrap: 0,
    grips_una_wrap: "",
    grips_rt_wrap: 0,
    dol_grip_qty_prep: 0,
    dol_grip_uno_prep: 0,
    dol_grip_una_prep: "",
    dol_grip_rt_prep: 0,
    dol_grip_qty_wrap: 0,
    dol_grip_uno_wrap: 0,
    dol_grip_una_wrap: "",
    dol_grip_rt_wrap: 0,
    sw_grips_qty_prep: 0,
    sw_grips_uno_prep: 0,
    sw_grips_una_prep: "",
    sw_grips_rt_prep: 0,
    sw_grips_qty_wrap: 0,
    sw_grips_uno_wrap: 0,
    sw_grips_una_wrap: "",
    sw_grips_rt_wrap: 0,
    oth_grip_qty_prep: 0,
    oth_grip_uno_prep: 0,
    oth_grip_una_prep: "",
    oth_grip_rt_prep: 0,
    oth_grip_qty_wrap: 0,
    oth_grip_uno_wrap: 0,
    oth_grip_una_wrap: "",
    oth_grip_rt_wrap: 0,
    fringes_taxes_grip: 0,
    key_grip_qty: 0,
    key_grip_uno: 0,
    key_grip_una: "",
    key_grip_rt: 0,
    best_boy_grip_qty: 0,
    best_boy_grip_uno: 0,
    best_boy_grip_una: "",
    best_boy_grip_rt: 0,
    grips_qty: 0,
    grips_uno: 0,
    grips_una: "",
    grips_rt: 0,
    dolly_crane_grip_qty: 0,
    dolly_crane_grip_uno: 0,
    dolly_crane_grip_una: "",
    dolly_crane_grip_rt: 0,
    swing_grips_qty: 0,
    swing_grips_uno: 0,
    swing_grips_una: "",
    swing_grips_rt: 0,
    other_grip_labour_qty: 0,
    other_grip_labour_uno: 0,
    other_grip_labour_una: "",
    other_grip_labour_rt: 0,
    dailies_grip_qty: 0,
    dailies_grip_uno: 0,
    dailies_grip_una: "",
    dailies_grip_rt: 0,
  });

  const {days6th7th_unit_grip, days6th7th_grip, overtime_unit_grip,
    overtime_grip, holidays_unit_grip, 
    holidays_grip, box_rent_unit_grip, box_rent_grip, other_solo_grip,
    k_grip_qty_prep, k_grip_uno_prep, k_grip_una_prep, k_grip_rt_prep,
    k_grip_qty_wrap, k_grip_uno_wrap, k_grip_una_wrap, k_grip_rt_wrap, 
    bb_grip_qty_prep, bb_grip_uno_prep, bb_grip_una_prep, bb_grip_rt_prep,
    bb_grip_qty_wrap, bb_grip_uno_wrap, bb_grip_una_wrap, bb_grip_rt_wrap,
    grips_qty_prep, grips_uno_prep, grips_una_prep, grips_rt_prep,
    grips_qty_wrap, grips_uno_wrap, grips_una_wrap, grips_rt_wrap,
    dol_grip_qty_prep, dol_grip_uno_prep, dol_grip_una_prep, dol_grip_rt_prep,
    dol_grip_qty_wrap, dol_grip_uno_wrap, dol_grip_una_wrap, dol_grip_rt_wrap,
    sw_grips_qty_prep, sw_grips_uno_prep, sw_grips_una_prep, sw_grips_rt_prep,
    sw_grips_qty_wrap, sw_grips_uno_wrap, sw_grips_una_wrap, sw_grips_rt_wrap,
    oth_grip_qty_prep, oth_grip_uno_prep, oth_grip_una_prep, oth_grip_rt_prep,
    oth_grip_qty_wrap, oth_grip_uno_wrap, oth_grip_una_wrap, oth_grip_rt_wrap,
    // old
    key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
    best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_una, best_boy_grip_rt,
    grips_qty, grips_uno, grips_una, grips_rt,
    dailies_grip_qty, dailies_grip_uno, dailies_grip_una, dailies_grip_rt, 
    dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_una, dolly_crane_grip_rt,
    swing_grips_qty, swing_grips_uno, swing_grips_una, swing_grips_rt,
    other_grip_labour_qty, other_grip_labour_uno, other_grip_labour_una, other_grip_labour_rt,
    fringes_taxes_grip,} = postDataGrip;

  // Totals

  // key grip
  // key grip shoot Total postData 
  const [keygripTotal, setKeygripTotal] = useState(0);
  // key grip prep Total postData 
  const [kgripprepTotal, setKgripprepTotal] = useState(0);
  // key grip wrap Total postData 
  const [kgripwrapTotal, setKgripwrapTotal] = useState(0);
  // key grip all Total postData 
  const [kgripallTotal, setKgripallTotal] = useState(0);

  // best boy grip
  // best boy grip shoot Total postData 
  const [bestboygripTotal, setBestboygripTotal] = useState(0);
  // best boy grip prep Total postData 
  const [bbgripprepTotal, setBbgripprepTotal] = useState(0);
  // best boy grip wrap Total postData 
  const [bbgripwrapTotal, setBbgripwrapTotal] = useState(0);
  // best boy grip all Total postData 
  const [bbgripallTotal, setBbgripallTotal] = useState(0);

  // grips
  // grips shoot Total postData 
  const [gripsTotal, setGripsTotal] = useState(0);
  // grips prep Total postData 
  const [gripsprepTotal, setGripsprepTotal] = useState(0);
  // grips wrap Total postData 
  const [gripswrapTotal, setGripswrapTotal] = useState(0);
  // grips all Total postData 
  const [gripsallTotal, setGripsallTotal] = useState(0);

  // dolly crane grip
  // dolly crane grip shoot Total postData 
  const [dollycranegripTotal, setDollycranegripTotal] = useState(0);
  // dolly crane grip prep Total postData 
  const [dolgripprepTotal, setDolgripprepTotal] = useState(0);
  // dolly crane grip wrap Total postData 
  const [dolgripwrapTotal, setDolgripwrapTotal] = useState(0);
  // dolly crane grip all Total postData 
  const [dolgripallTotal, setDolgripallTotal] = useState(0);

  // swing grips
  // swing grips shoot Total postData 
  const [swinggripsTotal, setSwinggripsTotal] = useState(0);
  // swing grips prep Total postData 
  const [swigripsprepTotal, setSwigripsprepTotal] = useState(0);
  // swing grips wrap Total postData 
  const [swigripswrapTotal, setSwigripswrapTotal] = useState(0);
  // swing grips all Total postData 
  const [swigripsallTotal, setSwigripsallTotal] = useState(0);

  // other grip labour 
  // other grip labour shoot Total postData 
  const [othergriplabourTotal, setOthergriplabourTotal] = useState(0);
  // other grip labour prep Total postData 
  const [othgripprepTotal, setOthgripprepTotal] = useState(0);
  // other grip labour wrap Total postData 
  const [othgripwrapTotal, setOthgripwrapTotal] = useState(0);
  // other grip labour all Total postData 
  const [othgripallTotal, setOthgripallTotal] = useState(0);

  // dailies grip Total postData 
  const [dailiesgripTotal, setDailiesgripTotal] = useState(0);

  // Grip Labour Total postData 
  const [griplabourTotal, setGriplabourTotal] = useState(0);

  // PRODUCTION SOUND LABOUR ----------------------------------

  // Production Sound Labour postData
  const [postDataSoundPro, setPostDataSoundPro] = useState({
    days6th7th_unit_sound: "",
    days6th7th_sound: 0,
    overtime_unit_sound: "",
    overtime_sound: 0,
    holidays_unit_sound: "", 
    holidays_sound: 0,
    box_rent_unit_sound: "",
    box_rent_sound: 0,
    other_solo_sound: 0,
    so_mix_qty_prep: 0,
    so_mix_uno_prep: 0,
    so_mix_una_prep: "",
    so_mix_rt_prep: 0,
    so_mix_qty_wrap: 0,
    so_mix_uno_wrap: 0,
    so_mix_una_wrap: "",
    so_mix_rt_wrap: 0,
    boom_op_qty_prep: 0,
    boom_op_uno_prep: 0,
    boom_op_una_prep: "",
    boom_op_rt_prep: 0,
    boom_op_qty_wrap: 0,
    boom_op_uno_wrap: 0,
    boom_op_una_wrap: "",
    boom_op_rt_wrap: 0,
    cab_wran_qty_prep: 0,
    cab_wran_uno_prep: 0,
    cab_wran_una_prep: "",
    cab_wran_rt_prep: 0,
    cab_wran_qty_wrap: 0,
    cab_wran_uno_wrap: 0,
    cab_wran_una_wrap: "",
    cab_wran_rt_wrap: 0,
    ot_sound_qty_prep: 0,
    ot_sound_uno_prep: 0,
    ot_sound_una_prep: "",
    ot_sound_rt_prep: 0,
    ot_sound_qty_wrap: 0,
    ot_sound_uno_wrap: 0,
    ot_sound_una_wrap: "",
    ot_sound_rt_wrap: 0,
    fringes_taxes_sound: 0,
    sound_mixer_qty: 0,
    sound_mixer_uno: 0,
    sound_mixer_una: "",
    sound_mixer_rt: 0,
    boom_operator_qty: 0,
    boom_operator_uno: 0,
    boom_operator_una: "",
    boom_operator_rt: 0,
    cable_wrangler_qty: 0,
    cable_wrangler_uno: 0,
    cable_wrangler_una: "",
    cable_wrangler_rt: 0,
    other_sound_labour_qty: 0,
    other_sound_labour_uno: 0,
    other_sound_labour_una: "",
    other_sound_labour_rt: 0,
  });

  const {days6th7th_unit_sound, days6th7th_sound, 
    overtime_unit_sound, overtime_sound, holidays_unit_sound, holidays_sound,
    box_rent_unit_sound, box_rent_sound, other_solo_sound,
    so_mix_qty_prep, so_mix_uno_prep, so_mix_una_prep, so_mix_rt_prep,
    so_mix_qty_wrap, so_mix_uno_wrap, so_mix_una_wrap, so_mix_rt_wrap,
    boom_op_qty_prep, boom_op_uno_prep, boom_op_una_prep, boom_op_rt_prep,
    boom_op_qty_wrap, boom_op_uno_wrap, boom_op_una_wrap, boom_op_rt_wrap,
    cab_wran_qty_prep, cab_wran_uno_prep, cab_wran_una_prep, cab_wran_rt_prep,
    cab_wran_qty_wrap, cab_wran_uno_wrap, cab_wran_una_wrap, cab_wran_rt_wrap,
    ot_sound_qty_prep, ot_sound_uno_prep, ot_sound_una_prep, ot_sound_rt_prep,
    ot_sound_qty_wrap, ot_sound_uno_wrap, ot_sound_una_wrap, ot_sound_rt_wrap,
    sound_mixer_qty, sound_mixer_uno,
    sound_mixer_una, sound_mixer_rt,
    boom_operator_qty, boom_operator_uno,
    boom_operator_una, boom_operator_rt,
    cable_wrangler_qty, cable_wrangler_uno,
    cable_wrangler_una, cable_wrangler_rt,
    other_sound_labour_qty, other_sound_labour_uno,
    other_sound_labour_una, other_sound_labour_rt,
    fringes_taxes_sound,} = postDataSoundPro;

  // Totals
  // sound mixer
  // sound mixer shoot Total postData 
  const [soundmixerTotal, setSoundmixerTotal] = useState(0);
  // sound mixer prep Total postData 
  const [somixprepTotal, setSomixprepTotal] = useState(0);
  // sound mixer wrap Total postData 
  const [somixwrapTotal, setSomixwrapTotal] = useState(0);
  // sound mixer all Total postData 
  const [somixallTotal, setSomixallTotal] = useState(0);

  // boom operator
  // boom operator shoot Total postData 
  const [boomoperatorTotal, setBoomoperatorTotal] = useState(0);
  // boom operator prep Total postData 
  const [boomopprepTotal, setBoomopprepTotal] = useState(0);
  // boom operator wrap Total postData 
  const [boomopwrapTotal, setBoomopwrapTotal] = useState(0);
  // boom operator all Total postData 
  const [boomopallTotal, setBoomopallTotal] = useState(0);

  // cable wrangler
  // cable wrangler shoot Total postData 
  const [cablewranglerTotal, setCablewranglerTotal] = useState(0);
  // cable wrangler prep Total postData 
  const [cawranprepTotal, setCawranprepTotal] = useState(0);
  // cable wrangler wrap Total postData 
  const [cawranwrapTotal, setCawranwrapTotal] = useState(0);
  // cable wrangler all Total postData 
  const [cawranallTotal, setCawranallTotal] = useState(0);

  // other sound labour
  // other sound labour shoot Total postData 
  const [othersoundlabourTotal, setOthersoundlabourTotal] = useState(0);
  // other sound labour prep Total postData 
  const [otsoundprepTotal, setOtsoundprepTotal] = useState(0);
  // other sound labour wrap Total postData 
  const [otsoundwrapTotal, setOtsoundwrapTotal] = useState(0);
  // other sound labour all Total postData 
  const [otsoundallTotal, setOtsoundallTotal] = useState(0);

  // Sound Labour Total postData 
  const [soundlabourTotal, setSoundlabourTotal] = useState(0);

  // TRANSPORTATION LABOUR ----------------------------------

  // Transport Labour postData
  const [postDataTransport, setPostDataTransport] = useState({
    days6th7th_unit_tran: "",
    days6th7th_tran: 0,
    overtime_unit_tran: "",
    overtime_tran: 0,
    holidays_unit_tran: "", 
    holidays_tran: 0,
    box_rent_unit_tran: "",
    box_rent_tran: 0,
    other_solo_tran: 0,
    tp_coor_qty_prep: 0,
    tp_coor_uno_prep: 0,
    tp_coor_una_prep: "",
    tp_coor_rt_prep: 0,
    tp_coor_qty_wrap: 0,
    tp_coor_uno_wrap: 0,
    tp_coor_una_wrap: "",
    tp_coor_rt_wrap: 0,
    tp_cap_qty_prep: 0,
    tp_cap_uno_prep: 0,
    tp_cap_una_prep: "",
    tp_cap_rt_prep: 0,
    tp_cap_qty_wrap: 0,
    tp_cap_uno_wrap: 0,
    tp_cap_una_wrap: "",
    tp_cap_rt_wrap: 0,
    tp_man_qty_prep: 0,
    tp_man_uno_prep: 0,
    tp_man_una_prep: "",
    tp_man_rt_prep: 0,
    tp_man_qty_wrap: 0,
    tp_man_uno_wrap: 0,
    tp_man_una_wrap: "",
    tp_man_rt_wrap: 0,
    head_dr_qty_prep: 0,
    head_dr_uno_prep: 0,
    head_dr_una_prep: "",
    head_dr_rt_prep: 0,
    head_dr_qty_wrap: 0,
    head_dr_uno_wrap: 0,
    head_dr_una_wrap: "",
    head_dr_rt_wrap: 0,
    drive_qty_prep: 0,
    drive_uno_prep: 0,
    drive_una_prep: "",
    drive_rt_prep: 0,
    drive_qty_wrap: 0,
    drive_uno_wrap: 0,
    drive_una_wrap: "",
    drive_rt_wrap: 0,
    fringes_taxes_transport: 0,
    tp_coordinator_qty: 0,
    tp_coordinator_uno: 0,
    tp_coordinator_una: "",
    tp_coordinator_rt: 0,
    tp_captain_qty: 0,
    tp_captain_uno: 0,
    tp_captain_una: "",
    tp_captain_rt: 0,
    tp_manager_qty: 0,
    tp_manager_uno: 0,
    tp_manager_una: "",
    tp_manager_rt: 0,
    head_driver_qty: 0,
    head_driver_uno: 0,
    head_driver_una: "",
    head_driver_rt: 0,
    drivers_qty: 0,
    drivers_uno: 0,
    drivers_una: "",
    drivers_rt: 0,
  });

  const {days6th7th_unit_tran, days6th7th_tran,
    overtime_unit_tran, overtime_tran, holidays_unit_tran, holidays_tran,
    box_rent_unit_tran, box_rent_tran, other_solo_tran,
    tp_coor_qty_prep, tp_coor_uno_prep, tp_coor_una_prep, tp_coor_rt_prep,
    tp_coor_qty_wrap, tp_coor_uno_wrap, tp_coor_una_wrap, tp_coor_rt_wrap,
    tp_cap_qty_prep, tp_cap_uno_prep, tp_cap_una_prep, tp_cap_rt_prep,
    tp_cap_qty_wrap, tp_cap_uno_wrap, tp_cap_una_wrap, tp_cap_rt_wrap,
    tp_man_qty_prep, tp_man_uno_prep, tp_man_una_prep, tp_man_rt_prep,
    tp_man_qty_wrap, tp_man_uno_wrap, tp_man_una_wrap, tp_man_rt_wrap,
    head_dr_qty_prep, head_dr_uno_prep, head_dr_una_prep, head_dr_rt_prep,
    head_dr_qty_wrap, head_dr_uno_wrap, head_dr_una_wrap, head_dr_rt_wrap,
    drive_qty_prep, drive_uno_prep, drive_una_prep, drive_rt_prep,
    drive_qty_wrap, drive_uno_wrap, drive_una_wrap, drive_rt_wrap,
    tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_una, tp_coordinator_rt,
    tp_captain_qty,tp_captain_uno, tp_captain_una, tp_captain_rt,
    tp_manager_qty, tp_manager_uno, tp_manager_una, tp_manager_rt,
    head_driver_qty, head_driver_uno, head_driver_una, head_driver_rt,
    drivers_qty, drivers_uno, drivers_una, drivers_rt,
    fringes_taxes_transport,} = postDataTransport;

  // Totals

  // tp coordinator
  // tp coordinator shoot Total postData 
  const [tpcoordinatorTotal, setTpcoordinatorTotal] = useState(0);
  // tp coordinator prep Total postData 
  const [tpcoorprepTotal, setTpcoorprepTotal] = useState(0);
  // tp coordinator wrap Total postData 
  const [tpcoorwrapTotal, setTpcoorwrapTotal] = useState(0);
  // tp coordinator all Total postData 
  const [tpcoorallTotal, setTpcoorallTotal] = useState(0);

  // tp captain
  // tp captain shoot Total postData 
  const [tpcaptainTotal, setTpcaptainTotal] = useState(0);
  // tp captain prep Total postData 
  const [tpcapprepTotal, setTpcapprepTotal] = useState(0);
  // tp captain wrap Total postData 
  const [tpcapwrapTotal, setTpcapwrapTotal] = useState(0);
  // tp captain all Total postData 
  const [tpcapallTotal, setTpcapallTotal] = useState(0);

  // tp manager
  // tp manager shoot Total postData 
  const [tpmanagerTotal, setTpmanagerTotal] = useState(0);
  // tp manager prep Total postData 
  const [tpmanprepTotal, setTpmanprepTotal] = useState(0);
  // tp manager wrap Total postData 
  const [tpmanwrapTotal, setTpmanwrapTotal] = useState(0);
  // tp manager all Total postData 
  const [tpmanallTotal, setTpmanallTotal] = useState(0);

  // head driver
  // head driver shoot Total postData 
  const [headdriverTotal, setHeaddriverTotal] = useState(0);
  // head driver prep Total postData 
  const [headdriprepTotal, setHeaddriprepTotal] = useState(0);
  // head driver wrap Total postData 
  const [headdriwrapTotal, setHeaddriwrapTotal] = useState(0);
  // head driver all Total postData 
  const [headdriallTotal, setHeaddriallTotal] = useState(0);

  // drivers
  // drivers shoot Total postData 
  const [driversTotal, setDriversTotal] = useState(0);
  // drivers prep Total postData 
  const [driverprepTotal, setDriverprepTotal] = useState(0);
  // drivers wrap Total postData 
  const [driverwrapTotal, setDriverwrapTotal] = useState(0);
  // drivers all Total postData 
  const [driverallTotal, setDriverallTotal] = useState(0);

  // Transport Labour Total postData 
  const [transportlabourTotal, setTransportlabourTotal] = useState(0);

  // TV SPECIFIC LABOUR ----------------------------------

  // TV Labour postData
  const [postDataTV, setPostDataTV] = useState({
    days6th7th_unit_tv: "",
    days6th7th_tv: 0,
    overtime_unit_tv: "",
    overtime_tv: 0,
    holidays_unit_tv: "", 
    holidays_tv: 0,
    box_rent_unit_tv: "",
    box_rent_tv: 0,
    other_solo_tv: 0,
    tec_sup_qty_prep: 0,
    tec_sup_uno_prep: 0,
    tec_sup_una_prep: "",
    tec_sup_rt_prep: 0,
    tec_sup_qty_wrap: 0,
    tec_sup_uno_wrap: 0,
    tec_sup_una_wrap: "",
    tec_sup_rt_wrap: 0,
    tec_dir_qty_prep: 0,
    tec_dir_uno_prep: 0,
    tec_dir_una_prep: "",
    tec_dir_rt_prep: 0,
    tec_dir_qty_wrap: 0,
    tec_dir_uno_wrap: 0,
    tec_dir_una_wrap: "",
    tec_dir_rt_wrap: 0,
    flo_man_qty_prep: 0,
    flo_man_uno_prep: 0,
    flo_man_una_prep: "",
    flo_man_rt_prep: 0,
    flo_man_qty_wrap: 0,
    flo_man_uno_wrap: 0,
    flo_man_una_wrap: "",
    flo_man_rt_wrap: 0,
    lig_dir_qty_prep: 0,
    lig_dir_uno_prep: 0,
    lig_dir_una_prep: "",
    lig_dir_rt_prep: 0,
    lig_dir_qty_wrap: 0,
    lig_dir_uno_wrap: 0,
    lig_dir_una_wrap: "",
    lig_dir_rt_wrap: 0,
    boardm_qty_prep: 0,
    boardm_uno_prep: 0,
    boardm_una_prep: "",
    boardm_rt_prep: 0,
    boardm_qty_wrap: 0,
    boardm_uno_wrap: 0,
    boardm_una_wrap: "",
    boardm_rt_wrap: 0,
    audio_qty_prep: 0,
    audio_uno_prep: 0,
    audio_una_prep: "",
    audio_rt_prep: 0,
    audio_qty_wrap: 0,
    audio_uno_wrap: 0,
    audio_una_wrap: "",
    audio_rt_wrap: 0,
    vtr_op_qty_prep: 0,
    vtr_op_uno_prep: 0,
    vtr_op_una_prep: "",
    vtr_op_rt_prep: 0,
    vtr_op_qty_wrap: 0,
    vtr_op_uno_wrap: 0,
    vtr_op_una_wrap: "",
    vtr_op_rt_wrap: 0,
    stageh_qty_prep: 0,
    stageh_uno_prep: 0,
    stageh_una_prep: "",
    stageh_rt_prep: 0,
    stageh_qty_wrap: 0,
    stageh_uno_wrap: 0,
    stageh_una_wrap: "",
    stageh_rt_wrap: 0,
    oth_tv_qty_prep: 0,
    oth_tv_uno_prep: 0,
    oth_tv_una_prep: "",
    oth_tv_rt_prep: 0,
    oth_tv_qty_wrap: 0,
    oth_tv_uno_wrap: 0,
    oth_tv_una_wrap: "",
    oth_tv_rt_wrap: 0,
    fringes_taxes_tv: 0,
    tech_super_qty: 0,
    tech_super_uno: 0,
    tech_super_una: "",
    tech_super_rt: 0,
    tech_direct_qty: 0,
    tech_direct_uno: 0,
    tech_direct_una: "",
    tech_direct_rt: 0,
    floor_man_qty: 0,
    floor_man_uno: 0,
    floor_man_una: "",
    floor_man_rt: 0,
    light_direct_qty: 0,
    light_direct_uno: 0,
    light_direct_una: "",
    light_direct_rt: 0,
    boardman_qty: 0,
    boardman_uno: 0,
    boardman_una: "",
    boardman_rt: 0,
    audio_qty: 0,
    audio_uno: 0,
    audio_una: "",
    audio_rt: 0,
    vtr_operator_qty: 0,
    vtr_operator_uno: 0,
    vtr_operator_una: "",
    vtr_operator_rt: 0,
    stagehands_qty: 0,
    stagehands_uno: 0,
    stagehands_una: "",
    stagehands_rt: 0,
    other_tv_qty: 0,
    other_tv_uno: 0,
    other_tv_una: "",
    other_tv_rt: 0,
  });

  const {days6th7th_unit_tv, days6th7th_tv, 
    overtime_unit_tv, overtime_tv, holidays_unit_tv, 
    holidays_tv, box_rent_unit_tv, box_rent_tv, other_solo_tv,
    tec_sup_qty_prep, tec_sup_uno_prep, tec_sup_una_prep, tec_sup_rt_prep,
    tec_sup_qty_wrap, tec_sup_uno_wrap, tec_sup_una_wrap, tec_sup_rt_wrap,
    tec_dir_qty_prep, tec_dir_uno_prep, tec_dir_una_prep, tec_dir_rt_prep,
    tec_dir_qty_wrap, tec_dir_uno_wrap, tec_dir_una_wrap, tec_dir_rt_wrap,
    flo_man_qty_prep, flo_man_uno_prep, flo_man_una_prep, flo_man_rt_prep,
    flo_man_qty_wrap, flo_man_uno_wrap, flo_man_una_wrap, flo_man_rt_wrap,
    lig_dir_qty_prep, lig_dir_uno_prep, lig_dir_una_prep, lig_dir_rt_prep,
    lig_dir_qty_wrap, lig_dir_uno_wrap, lig_dir_una_wrap, lig_dir_rt_wrap,
    boardm_qty_prep, boardm_uno_prep, boardm_una_prep, boardm_rt_prep,
    boardm_qty_wrap, boardm_uno_wrap, boardm_una_wrap, boardm_rt_wrap,
    audio_qty_prep, audio_uno_prep, audio_una_prep, audio_rt_prep,
    audio_qty_wrap, audio_uno_wrap, audio_una_wrap, audio_rt_wrap,
    vtr_op_qty_prep, vtr_op_uno_prep, vtr_op_una_prep, vtr_op_rt_prep,
    vtr_op_qty_wrap, vtr_op_uno_wrap, vtr_op_una_wrap, vtr_op_rt_wrap,
    stageh_qty_prep, stageh_uno_prep, stageh_una_prep, stageh_rt_prep,
    stageh_qty_wrap, stageh_uno_wrap, stageh_una_wrap, stageh_rt_wrap,
    oth_tv_qty_prep, oth_tv_uno_prep, oth_tv_una_prep, oth_tv_rt_prep,
    oth_tv_qty_wrap, oth_tv_uno_wrap, oth_tv_una_wrap, oth_tv_rt_wrap,
    // old
    tech_super_qty, tech_super_uno, tech_super_una, tech_super_rt,
    tech_direct_qty, tech_direct_uno, tech_direct_una, tech_direct_rt,
    floor_man_qty, floor_man_uno, floor_man_una, floor_man_rt, 
    light_direct_qty, light_direct_uno, light_direct_una, light_direct_rt,
    boardman_qty, boardman_uno, boardman_una, boardman_rt,
    audio_qty, audio_uno, audio_una, audio_rt,
    vtr_operator_qty, vtr_operator_uno, vtr_operator_una, vtr_operator_rt,
    stagehands_qty, stagehands_uno, stagehands_una, stagehands_rt,
    other_tv_qty, other_tv_uno, other_tv_una, other_tv_rt,
    fringes_taxes_tv,} = postDataTV;

  // Totals

  // Technical Supervisor
  // Technical Supervisor shoot Total postData 
  const [techsuperTotal, setTechsuperTotal] = useState(0);
  // Technical Supervisor prep Total postData 
  const [tecsupprepTotal, setTecsupprepTotal] = useState(0);
  // Technical Supervisor wrap Total postData 
  const [tecsupwrapTotal, setTecsupwrapTotal] = useState(0);
  // Technical Supervisor all Total postData 
  const [tecsupallTotal, setTecsupallTotal] = useState(0);

  // Technical Director
  // Technical Director shoot Total postData 
  const [techdirectTotal, setTechdirectTotal] = useState(0);
  // Technical Director prep Total postData 
  const [tecdirprepTotal, setTecdirprepTotal] = useState(0);
  // Technical Director wrap Total postData 
  const [tecdirwrapTotal, setTecdirwrapTotal] = useState(0);
  // Technical Director all Total postData 
  const [tecdirallTotal, setTecdirallTotal] = useState(0);

  // Floor Manager
  // Floor Manager shoot Total postData 
  const [floormanTotal, setFloormanTotal] = useState(0);
  // Floor Manager prep Total postData 
  const [flomanprepTotal, setFlomanprepTotal] = useState(0);
  // Floor Manager wrap Total postData 
  const [flomanwrapTotal, setFlomanwrapTotal] = useState(0);
  // Floor Manager all Total postData 
  const [flomanallTotal, setFlomanallTotal] = useState(0);

  // Lighting Director
  // Lighting Director shoot Total postData 
  const [lightdirectTotal, setLightdirectTotal] = useState(0);
  // Lighting Director prep Total postData 
  const [ligdirprepTotal, setLigdirprepTotal] = useState(0);
  // Lighting Director wrap Total postData 
  const [ligdirwrapTotal, setLigdirwrapTotal] = useState(0);
  // Lighting Director all Total postData 
  const [ligdirallTotal, setLigdirallTotal] = useState(0);

  // Boardman
  // Boardman Total shoot postData 
  const [boardmanTotal, setBoardmanTotal] = useState(0);
  // Boardman Total prep postData 
  const [boamanprepTotal, setBoamanprepTotal] = useState(0);
  // Boardman Total wrap postData 
  const [boamanwrapTotal, setBoamanwrapTotal] = useState(0);
  // Boardman Total all postData 
  const [boamanallTotal, setBoamanallTotal] = useState(0);

  // Audio
  // Audio shoot Total postData 
  const [audioTotal, setAudioTotal] = useState(0);
  // Audio prep Total postData 
  const [audprepTotal, setAudprepTotal] = useState(0);
  // Audio wrap Total postData 
  const [audwrapTotal, setAudwrapTotal] = useState(0);
  // Audio all Total postData 
  const [audallTotal, setAudallTotal] = useState(0);

  // VRT Operator
  // VRT Operator shoot Total postData 
  const [vtroperatorTotal, setVtroperatorTotal] = useState(0);
  // VRT Operator prep Total postData 
  const [vtropprepTotal, setVtropprepTotal] = useState(0);
  // VRT Operator wrap Total postData 
  const [vtropwrapTotal, setVtropwrapTotal] = useState(0);
  // VRT Operator all Total postData 
  const [vtropallTotal, setVtropallTotal] = useState(0);

  // Stagehands
  // Stagehands shoot Total postData 
  const [stagehandsTotal, setStagehandsTotal] = useState(0);
  // Stagehands prep Total postData 
  const [stagehprepTotal, setStagehprepTotal] = useState(0);
  // Stagehands wrap Total postData 
  const [stagehwrapTotal, setStagehwrapTotal] = useState(0);
  // Stagehands all Total postData 
  const [stagehallTotal, setStagehallTotal] = useState(0);

  // Other TV Labour
  // Other TV Labour shoot Total postData 
  const [othertvTotal, setOthertvTotal] = useState(0);
  // Other TV Labour prep Total postData 
  const [othtvprepTotal, setOthtvprepTotal] = useState(0);
  // Other TV Labour wrap Total postData 
  const [othtvwrapTotal, setOthtvwrapTotal] = useState(0);
  // Other TV Labour all Total postData 
  const [othtvallTotal, setOthtvallTotal] = useState(0);

  // TV Specific Labour Total postData 
  const [tvspecificlabourTotal, setTvspecificlabourTotal] = useState(0);

  // end below B Labour

  // BELOW PRODUCTION B COSTS -------------------------------

  // PRODUCTION OFFICE EXPENSES ------------------------------

  // Production office postData
  const [postDataProOff, setPostDataProOff] = useState({
    office_rentals: 0,
    office_equipment: 0,
    office_supplies: 0,
    phones_net: 0,
    courier_postage: 0,
    office_other: 0,
  });

  const {office_rentals, office_equipment, office_supplies,
    phones_net, courier_postage, office_other,
  } = postDataProOff;

  // Production office Total postData 
  const [proOffTotal, setProOffTotal] = useState(0);

  // STUDIO/BACKLOT EXPENSES ------------------------------

  // Studio postData
  const [postDataStudio, setPostDataStudio] = useState({
    studio_rentals: 0,
    power: 0,
    carpentry_rentals: 0,
    studio_fx_equipment: 0,
    studio_security: 0,
    studio_other: 0,
  });

  const {studio_rentals, power, carpentry_rentals,
    studio_fx_equipment, studio_security, studio_other,
  } = postDataStudio;

  // Studio Total postData 
  const [studioTotal, setStudioTotal] = useState(0);

  // SITE EXPENSES ------------------------------

  // site postData
  const [postDataSite, setPostDataSite] = useState({
    surveying_scouting: 0,
    site_rentals: 0,
    site_power: 0,
    site_access: 0,
    site_insurance: 0,
    repairs_construction: 0,
    site_security: 0,
    site_other: 0,
    police_control: 0,
  });

  const {surveying_scouting, site_rentals, site_power, site_access,
    site_insurance, repairs_construction, site_security, site_other,
    police_control,} = postDataSite;

  // Site Total postData 
  const [siteTotal, setSiteTotal] = useState(0);

  // UNIT EXPENSES ------------------------------

  // unit postData
  const [postDataUnit, setPostDataUnit] = useState({
    catering: 0,
    craft_expenses: 0,
    meal_penalty: 0,
    green_room: 0,
    first_aid: 0,
    outfitting: 0,
    medical_insurance: 0,
    unit_other: 0,
  });

  const {catering, craft_expenses, meal_penalty,
    green_room, first_aid, outfitting,
    medical_insurance, unit_other,} = postDataUnit;

  const [unitTotal, setUnitTotal] = useState(0);

  // Travel and Living EXPENSES ------------------------------

  // travel and Living postData
  const [postDataTraLiv, setPostDataTraLiv] = useState({
    fares: 0,
    accomatation_hotels: 0,
    per_diems: 0,
    taxis_limos: 0,
    shipping: 0,
    other_trav_liv: 0,
    customs_brokerage: 0,
  });

  const {fares, accomatation_hotels, per_diems, taxis_limos,
    shipping, other_trav_liv, customs_brokerage} = postDataTraLiv;

  const [tralivTotal, setTralivTotal] = useState(0);

  // TRANSPORTATION ------------------------------

  // Transport postData
  const [postDataTransportation, setPostDataTransportation] = useState({
    production_cars: 0,
    trucks_vans: 0,
    buses: 0,
    motorhomes: 0,
    talent_cars: 0,
    support_vehicles: 0,
    boats_planes: 0,
    fuel: 0,
    repairs: 0,
    taxis: 0,
    parking: 0,
    licenses_permits: 0,
    brokerage_insurance: 0,
    other_transport: 0,
  });

  const {production_cars, trucks_vans, buses, motorhomes,
    talent_cars, support_vehicles, boats_planes, fuel, repairs, taxis,
    parking, licenses_permits, brokerage_insurance, other_transport,
  } = postDataTransportation

  const [transportTotal, setTransportTotal] = useState(0);

  // CONSTRUCTION MATERIAL ------------------------------

  // Construction Material postData
  const [postDataConstructionMat, setPostDataConstructionMat] = useState({
    rentals_carpentry: 0,
    carpentry_purchases: 0,
    painting_rentals: 0,
    painting_purchases: 0,
    backdrops_murals: 0,
    scaffolding: 0,
    warehouse_rental: 0,
    construction_other: 0,
  });

  const {rentals_carpentry, carpentry_purchases, painting_rentals,
    painting_purchases, backdrops_murals, construction_other,
    scaffolding, warehouse_rental,
  } = postDataConstructionMat;

  const [constructionMatTotal, setConstructionMatTotal] = useState(0);

  // ART SUPPLIES ------------------------------

  // Art Supplies postData
  const [postDataArtSup, setPostDataArtSup] = useState({
    drawing_supplies: 0,
    drawing_equipment: 0,
    tech: 0,
    stock_prints_processing: 0,
    blueprinting: 0,
    other_art: 0,
  });

  const {drawing_supplies, drawing_equipment, tech,
    stock_prints_processing, blueprinting, other_art,} = postDataArtSup;

  const [artSupTotal, setArtSupTotal] = useState(0);

  // SET DRESSING ------------------------------

  // Set Dressing postData
  const [postDataDress, setPostDataDress] = useState({
    dress_rentals: 0,
    dress_purchases: 0,
    dress_manufacture: 0,
    dress_repairs_replacements: 0,
    other_dressing: 0,
  });

  const {dress_rentals, dress_purchases, dress_manufacture,
    dress_repairs_replacements, other_dressing,} = postDataDress;

  const [dressingTotal, setDressingTotal] = useState(0);

  // PROPS ------------------------------

  // Props postData
  const [postDataProps, setPostDataProps] = useState({
    props_rentals: 0,
    props_purchases: 0,
    graphics_signs: 0,
    props_repairs_replac: 0,
    picture_vehicle_rentals: 0,
    picture_vehicle_purchases: 0,
    picture_vehicle_mods: 0,
    picture_vehicle_ins: 0,
    other_props: 0,
  });

  const{props_rentals, props_purchases, graphics_signs,
    props_repairs_replac, picture_vehicle_rentals, picture_vehicle_purchases,
    picture_vehicle_mods, picture_vehicle_ins, other_props,
  } = postDataProps;

  const [propsTotal, setPropsTotal] = useState(0);

  // SPECIAL EFFECTS ------------------------------

  // Special effects postData
  const [postDataSpecEf, setPostDataSpecEf] = useState({
    fx_rentals: 0,
    fx_purchases: 0,
    stunts_purchases_rentals: 0,
    armaments_permits_fees: 0,
    other_fx: 0,
  });

  const {fx_rentals, fx_purchases, stunts_purchases_rentals,
    armaments_permits_fees, other_fx,} = postDataSpecEf;

  const [fxTotal, setFxTotal] = useState(0);

  // ANIMALS ------------------------------

  // Animals postData
  const [postDataAnimals, setPostDataAnimals] = useState({
    animals_rentals: 0,
    animals_purchases: 0,
    food_stabling: 0,
    transport: 0,
    vet: 0,
    customs_broker: 0,
    other_animals: 0,
  });

  const {animals_rentals, animals_purchases, food_stabling,
    transport, vet, customs_broker, other_animals,} = postDataAnimals;

  const [animalsTotal, setAnimalsTotal] = useState(0);

  // WARDROBE SUPPLIES ------------------------------

  // Wardrobe postData
  const [postDataWardrobeSup, setPostDataWardrobeSup] = useState({
    wardrobe_rentals: 0,
    wardrobe_purchases: 0,
    ward_manufact: 0,
    ward_ship_brok: 0,
    ward_repairs_clean: 0,
    other_ward: 0,
  });

  const {wardrobe_rentals, wardrobe_purchases, ward_manufact,
    ward_ship_brok, ward_repairs_clean, other_ward,
  } = postDataWardrobeSup;

  const [wardrobeTotal, setWardrobeTotal] = useState(0);

  // MAKEUP SUPPLIES ------------------------------

  // Makeup postData
  const [postDataMakeupSup, setPostDataMakeupSup] = useState({
    makeup_rentals: 0,
    makeup_purchases: 0,
    hair_rentals: 0,
    hair_purchases: 0,
    wigs: 0,
    makeup_fx: 0,
    makeup_ship_brok: 0,
    other_makeup: 0,
  });

  const {makeup_rentals, makeup_purchases, hair_rentals,
    hair_purchases, wigs, makeup_fx, makeup_ship_brok, other_makeup,
  } = postDataMakeupSup;

  const [makeupTotal, setMakeupTotal] = useState(0);

  // CAMERA EQUIPMENT ------------------------------

  // Camera postData
  const [postDataCameraEqu, setPostDataCameraEqu] = useState({
    basic_package_rent_cam: 0,
    daily_rentals_cam: 0,
    specialty_rent_cam: 0,
    camera_purchases: 0,
    steadicam: 0,
    video_teleprompter: 0,
    camera_ship_brok: 0,
    loss_damage_cam: 0,
    other_camera: 0,
  });

  const  {basic_package_rent_cam, daily_rentals_cam, 
    specialty_rent_cam, camera_purchases, steadicam,
    video_teleprompter, camera_ship_brok, loss_damage_cam, other_camera,
  } = postDataCameraEqu;

  const [cameraTotal, setCameraTotal] = useState(0);

  // ELECTRICAL EQUIPMENT ------------------------------

  // Electric postData
  const [postDataElectricEqu, setPostDataElectricEqu] = useState({
    basic_package_rent_elec: 0,
    daily_rentals_elec: 0,
    specialty_rent_elec: 0,
    electric_purchases: 0,
    generators: 0,
    loss_damage_elec: 0,
    other_electric: 0,
  });

  const {basic_package_rent_elec, daily_rentals_elec,
    specialty_rent_elec, electric_purchases,
    generators, loss_damage_elec, other_electric,
  } = postDataElectricEqu;

  const [electricTotal, setElectricTotal] = useState(0);

  // GRIP EQUIPMENT ------------------------------

  // Grip Equipment postData
  const [postDataGripEqu, setPostDataGripEqu] = useState({
    basic_package_rent_grip: 0,
    daily_rentals_grip: 0,
    specialty_rent_grip: 0,
    crane_rentals: 0,
    scaffolding_grip: 0,
    grip_purchases: 0,
    loss_damage_grip: 0,
    other_grip: 0,
  });

  const {basic_package_rent_grip, daily_rentals_grip,
    specialty_rent_grip, crane_rentals, scaffolding_grip,
    grip_purchases, loss_damage_grip, other_grip,
  } = postDataGripEqu;

  const [gripTotal, setGripTotal] = useState(0);

  // SOUND EQUIPMENT ------------------------------
  
  // Sound Equipment postData
  const [postDataSoundEqu, setPostDataSoundEqu] = useState({
    basic_package_rent_sound: 0,
    daily_rentals_sound: 0,
    wireless_mics: 0,
    sound_purchases: 0,
    walkie_talkies: 0,
    other_sound: 0,
  });

  const {basic_package_rent_sound, daily_rentals_sound,
    wireless_mics, sound_purchases, walkie_talkies, other_sound,
  } = postDataSoundEqu;

  const [soundTotal, setSoundTotal] = useState(0);

  // SECOND UNIT ------------------------------
  
  // Second Unit postData
  const [postDataSecondU, setPostDataSecondU] = useState({
    crew_2U: 0,
    equipment_2U: 0,
    mat_sup_2U: 0,
    travliv_2U: 0,
    transport_2U: 0,
    aerial_unit: 0,
    marine_unit: 0,
    fringes_taxes_2U: 0,
    other_2U: 0,
  });

  const {crew_2U, equipment_2U, travliv_2U, transport_2U,
    mat_sup_2U, aerial_unit, marine_unit, fringes_taxes_2U, other_2U,
  } = postDataSecondU;

  const [secondUTotal, setSecondUTotal] = useState(0);

  // PRODUCTION STOCK & LABORATORY ------------------------------
  
  // Production Stock and Lab postData
  const [postDataStockLab, setPostDataStockLab] = useState({
    film_stock: 0,
    video_stock: 0,
    digital_stock: 0,
    transfer_stock: 0,
    hard_drives: 0,
    dalies: 0,
    telecine: 0,
    audio_stock: 0,
    magnetic_transfer: 0,
    stills: 0,
    loss_dam_lab: 0,
    other_lab: 0,
  });

  const {film_stock, video_stock, digital_stock, transfer_stock,
    hard_drives, dalies, telecine, audio_stock, magnetic_transfer,
    stills, loss_dam_lab, other_lab,
  } = postDataStockLab;

  const [stockLabTotal, setStockLabTotal] = useState(0);

  // end below B Costs

  // "C" - POST PRODUCTION ----------------------------------------------

  // POST PRODUCTION STAFF/FACILITIES ------------------------------
  
  // Post Staff/Facilities postData
  const [postDataPostStaffFac, setPostDataPostStaffFac] = useState({
    post_supervisor_qty: 0,
    post_supervisor_uno: 0,
    post_supervisor_una: "",
    post_supervisor_rt: 0,
    post_coordinator_qty: 0,
    post_coordinator_uno: 0,
    post_coordinator_una: "",
    post_coordinator_rt: 0,
    post_assistants_qty: 0,
    post_assistants_uno: 0,
    post_assistants_una: "",
    post_assistants_rt: 0,
    post_accountants_qty: 0,
    post_accountants_uno: 0,
    post_accountants_una: "",
    post_accountants_rt: 0,
    post_accountants_ass_qty: 0,
    post_accountants_ass_uno: 0,
    post_accountants_ass_una: "",
    post_accountants_ass_rt: 0,
    post_consultant: 0,
    post_office_rent: 0,
    post_office_equ: 0,
    post_office_sup: 0,
    post_it_network: 0,
    post_phone_net: 0,
    post_computers_soft: 0,
    post_store: 0,
    post_ship: 0,
    post_craft: 0,
    fringes_taxes_post: 0,
    post_other: 0,
  });

  const {post_supervisor_qty, post_supervisor_uno, 
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
  } = postDataPostStaffFac;

  // Totals
  // Post Production Supervisor Total postData
  const [postSuperTotal, setPostSuperTotal] = useState(0);

  // Post Production Coordinator Total postData
  const [postCoordinTotal, setPostCoordinTotal] = useState(0);

  // Post Production Assistants Total postData
  const [postAssistTotal, setPostAssistTotal] = useState(0);

  // Post Production Accountants Total postData
  const [postAccountTotal, setPostAccountTotal] = useState(0);

  // Post Production Accountants Assistants Total postData
  const [postAccountAssTotal, setPostAccountAssTotal] = useState(0);

  // POST PRODUCTION STAFF/FACILITIES Total postData
  const [postStaffFacTotal, setPostStaffFacTotal] = useState(0);

  // EDITING -------------------------------------------------------

  // data Editing
  const [postDataEdit, setPostDataEdit] = useState({
    editor_qty: 0,
    editor_uno: 0,
    editor_una: "",
    editor_rt: 0,
    editor_vfx_qty: 0,
    editor_vfx_uno: 0,
    editor_vfx_una: "",
    editor_vfx_rt: 0,
    editor_ass_qty: 0,
    editor_ass_uno: 0,
    editor_ass_una: "",
    editor_ass_rt: 0,
    colorist_grader_qty: 0,
    colorist_grader_uno: 0,
    colorist_grader_una: "",
    colorist_grader_rt: 0,
    graphics_qty: 0,
    graphics_uno: 0,
    graphics_una: "",
    graphics_rt: 0,
    edit_rooms: 0,
    edit_equip: 0,
    edit_equip_nonlin: 0,
    online: 0,
    vfx_ed_system: 0,
    post_edit_pur: 0,
    lossdam_edit: 0,
    fringes_taxes_post_edit: 0,
    other_post_edit: 0,
  });

  const {editor_qty, editor_uno, editor_una, editor_rt,
    editor_vfx_qty, editor_vfx_uno, editor_vfx_una, editor_vfx_rt,
    editor_ass_qty, editor_ass_uno, editor_ass_una, editor_ass_rt,
    colorist_grader_qty, colorist_grader_uno, colorist_grader_una, colorist_grader_rt,
    graphics_qty, graphics_uno, graphics_una, graphics_rt,
    edit_rooms, edit_equip, edit_equip_nonlin, online,
    vfx_ed_system, post_edit_pur, lossdam_edit, fringes_taxes_post_edit,
    other_post_edit,} = postDataEdit;

  // Totals
  // Editor Total postData
  const [editorTotal, setEditorTotal] = useState(0);

  // VFX Editor Total postData
  const [editorVfxTotal, setEditorVfxTotal] = useState(0);

  // Assistant Editor Total postData
  const [editorAssTotal, setEditorAssTotal] = useState(0);

  // Colorist/Grader Total postData
  const [graderTotal, setGraderTotal] = useState(0);

  // Graphics Total postData
  const [graphicsTotal, setGraphicsTotal] = useState(0);

  // EDITING Total postData
  const [editingTotal, setEditingTotal] = useState(0);

  // POST SOUND -----------------------------

  // Post Sound data
  const [postDataPostSound, setPostDataPostSound] = useState({
    sound_designer_qty: 0,
    sound_designer_uno: 0,
    sound_designer_una: "",
    sound_designer_rt: 0,
    editor_sound_qty: 0,
    editor_sound_uno: 0,
    editor_sound_una: "",
    editor_sound_rt: 0,
    editor_music_qty: 0,
    editor_music_uno: 0,
    editor_music_una: "",
    editor_music_rt: 0,
    ed_sound_ass_qty: 0,
    ed_sound_ass_uno: 0,
    ed_sound_ass_una: "",
    ed_sound_ass_rt: 0,
    adr_super_qty: 0,
    adr_super_uno: 0,
    adr_super_una: "",
    adr_super_rt: 0,
    foley_labour_qty: 0,
    foley_labour_uno: 0,
    foley_labour_una: "",
    foley_labour_rt: 0,
    sound_edit_rooms: 0,
    sound_edit_equ: 0,
    music_edit_equ: 0,
    post_sound_edit_pur: 0,
    adr: 0,
    foley: 0,
    pre_mix: 0,
    mix: 0,
    printmaster: 0,
    transfers_deliverables: 0,
    lossdam_sound: 0,
    fringes_taxes_post_sound: 0,
    other_post_sound: 0,
  });

  const {sound_designer_qty, sound_designer_uno, sound_designer_una, sound_designer_rt,
    editor_sound_qty, editor_sound_uno, editor_sound_una, editor_sound_rt,
    editor_music_qty, editor_music_uno, editor_music_una, editor_music_rt,
    ed_sound_ass_qty, ed_sound_ass_uno, ed_sound_ass_una, ed_sound_ass_rt,
    adr_super_qty, adr_super_uno, adr_super_una, adr_super_rt,
    foley_labour_qty, foley_labour_uno, foley_labour_una, foley_labour_rt,
    sound_edit_rooms, sound_edit_equ, music_edit_equ,
    post_sound_edit_pur, adr, foley, pre_mix, mix, printmaster, transfers_deliverables,
    lossdam_sound, fringes_taxes_post_sound, other_post_sound,
  } = postDataPostSound;

  // Totals
  // Sound Designer Total postData
  const [desSoundTotal, setDesSoundTotal] = useState(0);

  // Sound Editor Total postData
  const [editorSoundTotal, setEditorSoundTotal] = useState(0);

  // Music Editor Total postData
  const [editorMusicTotal, setEditorMusicTotal] = useState(0);

  // Assistant Editor Total postData
  const [soundEdAssTotal, setSoundEdAssTotal] = useState(0);

  // ADR Supervisor Total postData
  const [adrSupTotal, setAdrSupTotal] = useState(0);

  // Foley Labour Total postData
  const [folLabTotal, setFolLabTotal] = useState(0);

  // POST SOUND Total postData
  const [postSoundTotal, setPostSoundTotal] = useState(0);

  // POST VISUAL EFFECTS -------------------------------------------------------

  // Post Visual Effects
  const [postDataPostVFX, setPostDataPostVFX] = useState({
    vfx_producer: 0,
    vfx_supervisor: 0,
    vfx_coordinator: 0,
    vfx_post_other_lab: 0,
    vfx_storyboard: 0,
    vfx_pre_vis_team: 0,
    vfx_post_vis_team: 0,
    cyberscanning: 0,
    vfx_rentals: 0,
    vfx_purchases: 0,
    vfx_vendor_1: 0,
    vfx_vendor_2: 0,
    vfx_vendor_3: 0,
    vfx_vendor_4: 0,
    vfx_vendor_5: 0,
    vfx_vendor_6: 0,
    vfx_vendor_7: 0,
    vfx_vendor_8: 0,
    vfx_vendor_9: 0,
    vfx_vendor_10: 0,
    vfx_vendors_x: 0,
    miniatures_build: 0,
    miniatures_shoot: 0,
    motion_capture: 0,
    vfx_expenses: 0,
    vfx_traliv: 0,
    box_ren_vfx: 0,
    lossdam_vfx: 0,
    fringes_taxes_vfx: 0,
    other_post_vfx: 0,
  });

  const {vfx_producer, vfx_supervisor, vfx_coordinator, vfx_post_other_lab,
    vfx_storyboard, vfx_pre_vis_team, vfx_post_vis_team, cyberscanning,
    vfx_rentals, vfx_purchases, vfx_vendor_1, vfx_vendor_2, vfx_vendor_3,
    vfx_vendor_4, vfx_vendor_5, vfx_vendor_6, vfx_vendor_7, vfx_vendor_8,
    vfx_vendor_9, vfx_vendor_10, vfx_vendors_x, vfx_traliv, vfx_expenses,
    miniatures_build, miniatures_shoot, motion_capture, lossdam_vfx,
    box_ren_vfx, fringes_taxes_vfx, other_post_vfx,
  } = postDataPostVFX;
  // postVfx_total

  // POST VISUAL EFFECTS Total postData
  const [postVfxTotal, setPostVfxTotal] = useState(0);

  // POST LAB & VIDEO COPIES ----------------------------

  // Post Lab/Video Copies
  const [postDataPostLab, setPostDataPostLab] = useState({
    stock: 0,
    neg_cutting: 0,
    color_cor: 0,
    interpos_neg: 0,
    prints: 0,
    transfers: 0,
    other_media_delivery: 0,
    distribution_copies: 0,
    storage_post: 0,
  });

  const {stock, neg_cutting, color_cor, interpos_neg, prints,
    transfers, other_media_delivery, distribution_copies, storage_post,
  } = postDataPostLab;

  // POST LAB/VIDEO COPIES Total postData
  const [postLabTotal, setPostLabTotal] = useState(0);

  // POST TITLES/OPTICALS/STOCK FOOTAGE -----------------

  // Post Titles/Opticals/Stock Footage
  const [postDataPostTitles, setPostDataPostTitles] = useState({
    titles: 0,
    opticals: 0,
    stock_footage: 0,
    con_script_ccsl: 0,
  });

  const {titles, opticals, stock_footage, con_script_ccsl,
  } = postDataPostTitles;

  // POST TITLES Total postData
  const [postTitlesTotal, setPostTitlesTotal] = useState(0);

  // POST VERSIONING/CLOSED-CAPTIONING/COPIES -------------

  // Post Versioning
  const [postDataPostVersion, setPostDataPostVersion] = useState({
    dubs: 0,
    subtitles: 0,
    closed_caption: 0,
    versioning: 0,
    trailers: 0,
    ads: 0,
    transfers_ver: 0,
    prints_ver: 0,
    dig_copies_ver: 0,
    other_copies_ver: 0,
  });

  const {dubs, subtitles, closed_caption, versioning, trailers,
    ads, transfers_ver, prints_ver, dig_copies_ver, other_copies_ver,
  } = postDataPostVersion;

  // POST VERSIONING/CLOSED-CAPTIONING/COPIES Total postData
  const [postVersionTotal, setPostVersionTotal] = useState(0);

  // "D" - OTHER -------------------------------------------------

  // PUBLICITY ----------------------------------------------
  
  //  postData Publicity
  const [postDataPublicity, setPostDataPublicity] = useState({
    tests_theater_ren: 0,
    tests_other: 0,
    unit_publicist: 0,
    pub_press_ex: 0,
    photography: 0,
    epk: 0,
    promotion: 0,
    pr: 0,
    firnges_pub: 0,
    other_pub: 0,
    previews: 0,
    website: 0,
  });

  const {tests_theater_ren, tests_other, unit_publicist,
    pub_press_ex, photography, epk, promotion, pr, firnges_pub,
    other_pub, previews, website,
  } = postDataPublicity;

  // PUBLICITY Total postData
  const [pubTotal, setPubTotal] = useState(0);

  // INSURANCE ----------------------------------------------
  
  //  postData Insurance
  const [postDataInsurance, setPostDataInsurance] = useState({
    pro_package: 0,
    gen_lia: 0,
    eando: 0,
    umbrella: 0,
    union_insurance: 0,
    other_in: 0,
  });

  const {pro_package, gen_lia, eando, umbrella, 
    union_insurance, other_in,
  } = postDataInsurance;

   // INSURANCE Total postData
   const [insurTotal, setInsurTotal] = useState(0);

  // GENERAL EXPENSES ----------------------------------------
  
  //  postData General Expenses
  const [postDataGeneralEx, setPostDataGeneralEx] = useState({
    legal: 0,
    medical: 0,
    licences: 0,
    payroll: 0,
    bank_charges: 0,
    audit: 0,
  });

  const {legal, medical, licences, payroll, bank_charges, audit,
  } = postDataGeneralEx;

  // GENERAL EXPENSES Total postData
  const [genExTotal, setGenExTotal] = useState(0);

  // INDIRECT COSTS ------------------------------------------
  
  //  postData Indirect Costs
  const [postDataIndirectCo, setPostDataIndirectCo] = useState({
    corporate_overhead: 0,
    interim_financing: 0,
    fiscal_sponsor_fee: 0,
  });

  const {corporate_overhead, interim_financing, fiscal_sponsor_fee,
  } = postDataIndirectCo;

  // INDIRECT COSTS Total postData
  const [indirCoTotal, setIndirCoTotal] = useState(0);

  // CONTINGENCY/BOND ETC --------------------------------------------------
  
  //  postData Contingency/Bond
  const [postDataContingency, setPostDataContingency] = useState({
    contingency: 0,
    completion_bond: 0,
  });

  const {contingency, completion_bond,
  } = postDataContingency;

  // handleChange - replace(/\D/g,'') - works but no decimal
  const handleChangeCon = (event) => {
    setPostDataContingency({
    ...postDataContingency,
    [event.target.name]: parseFloat(event.target.value.replace(/\D/g,'') || 0 ),
    });
  }; 

  const contin = (
    <div className={`${styles.WhiteBack} mt-2`}>
    {/* Contingency */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Contingency</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="contingency" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="contingency"
        value={contingency}
        onChange={handleChangeCon}
            />
    </Form.Group>
    {errors?.contingency?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    {/* Completion Bond */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Completion Bond</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="completion_bond" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="completion_bond"
        value={completion_bond}
        onChange={handleChangeCon}
            />
    </Form.Group>
    {errors?.completion_bond?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col >
    <hr className={`${styles.Break3} mb-0 mt-0`}/>
    </Col>
    </Row>
    </div>
  );

  // TOTALS ABOVE / BELOW / GRAND --------------------------------

  // Above the line total --------------------------

  // Above the line Total postData 
  const [aboveTheLineTotal, setAboveTheLineTotal] = useState(0);
  // function to add all Above the line totals on change

  useEffect(() => {
    const addAboveTheLine = () => {
      setAboveTheLineTotal(
        parseFloat(postDataRightsTotal || 0) +
        parseFloat(developmentTotal || 0) +
        parseFloat(scenarioTotal || 0) +
        parseFloat(producersDirsTotal || 0) +
        parseFloat(starsMusicTotal || 0))
      }
    const timer = setTimeout(() => {
      addAboveTheLine();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [postDataRightsTotal, developmentTotal, scenarioTotal,
    producersDirsTotal, starsMusicTotal]);

  // Above the line input box
  // eslint-disable-next-line
  const abovethelinetotal = (
    <div className="my-2 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL ABOVE THE LINE</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="aboveTheLineTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="aboveTheLineTotal"
          value={aboveTheLineTotal}
          readOnly
              />
      </Form.Group>
      {errors?.aboveTheLineTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // Below the line B Labour total -------------------------------

  // Below the line B Total postData 
  const [belowTheLineBTotal, setBelowTheLineBTotal] = useState(0);

  // function to add all Below the line totals on change
  useEffect(() => {
    const addbelowB = () => {
      setBelowTheLineBTotal(
        parseFloat(castTotal || 0) +
        parseFloat(productionstaffTotal || 0) +
        parseFloat(designlabourTotal || 0) +
        parseFloat(constructionlabourTotal || 0) +
        parseFloat(dressinglabourTotal || 0) +
        parseFloat(propertylabourTotal || 0) +
        parseFloat(wranglerlabourTotal || 0) +
        parseFloat(fxlabourTotal || 0) +
        parseFloat(wardrobelabourTotal || 0) +
        parseFloat(makeuplabourTotal || 0) +
        parseFloat(cameralabourTotal || 0) +
        parseFloat(electriclabourTotal || 0) +
        parseFloat(griplabourTotal || 0) +
        parseFloat(soundlabourTotal || 0) +
        parseFloat(transportlabourTotal || 0) +
        parseFloat(tvspecificlabourTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addbelowB();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [castTotal, productionstaffTotal, designlabourTotal, constructionlabourTotal,
    dressinglabourTotal, propertylabourTotal, wranglerlabourTotal, fxlabourTotal,
    wardrobelabourTotal, makeuplabourTotal, cameralabourTotal, electriclabourTotal,
    griplabourTotal, soundlabourTotal, transportlabourTotal, tvspecificlabourTotal,
  ]);

  // Below the line input box
  // eslint-disable-next-line
  const belowthelineBtotal = (
    <div className="my-2 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL BELOW THE LINE - "B" PRODUCTION</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="belowTheLineBTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="belowTheLineBTotal"
          value={belowTheLineBTotal}
          readOnly
              />
      </Form.Group>
      {errors?.belowTheLineBTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // Below the line B Costs total -------------------------------

  // Below the line B Total Costs postData 
  const [belowTheLineBCostsTotal, setBelowTheLineBCostsTotal] = useState(0);

  // function to add all Below the line Costs totals on change
  useEffect(() => {
    const addbelowBcosts = () => {
      setBelowTheLineBCostsTotal(
        parseFloat(proOffTotal || 0) +
        parseFloat(studioTotal || 0) +
        parseFloat(siteTotal || 0) +
        parseFloat(unitTotal || 0) +
        parseFloat(tralivTotal || 0) +
        parseFloat(transportTotal || 0) +
        parseFloat(constructionMatTotal || 0) +
        parseFloat(artSupTotal || 0) +
        parseFloat(dressingTotal || 0) +
        parseFloat(propsTotal || 0) +
        parseFloat(fxTotal || 0) +
        parseFloat(animalsTotal || 0) +
        parseFloat(wardrobeTotal || 0) +
        parseFloat(makeupTotal || 0) +
        parseFloat(cameraTotal || 0) +
        parseFloat(electricTotal || 0) +
        parseFloat(gripTotal || 0) +
        parseFloat(soundTotal || 0) +
        parseFloat(secondUTotal || 0) +
        parseFloat(stockLabTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addbelowBcosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [ proOffTotal, studioTotal, siteTotal, unitTotal, tralivTotal,
    transportTotal, constructionMatTotal, artSupTotal, dressingTotal,
    propsTotal, fxTotal, animalsTotal, wardrobeTotal, makeupTotal,
    cameraTotal, electricTotal, gripTotal, soundTotal,
    secondUTotal, stockLabTotal,]);

  // Below the line input box
  // eslint-disable-next-line
  const belowthelineBcoststotal = (
    <div className="my-0 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL BELOW THE LINE - "B" PRODUCTION COSTS</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="belowTheLineBCostsTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="belowTheLineBCostsTotal"
          value={belowTheLineBCostsTotal}
          readOnly
              />
      </Form.Group>
      {errors?.belowTheLineBCostsTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // PRODUCTION B LABOUR AND COSTS ---------------------------

  // B labour and costs Total postData 
  const [bLabourandCostsTotal, setBLabourandCostsTotal] = useState(0);

  // function to add both B labour and costs on change
  useEffect(() => {
    const addBlabcos = () => {
      setBLabourandCostsTotal(
        parseFloat(belowTheLineBTotal || 0) +
        parseFloat(belowTheLineBCostsTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addBlabcos();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [belowTheLineBTotal, belowTheLineBCostsTotal]);

  // below labour and costs input box
  const blabourncoststotal = (
    <div className="mt-3 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>B LABOUR AND COSTS TOTAL</p>
    </Col>
    <Col md={2} className="mb-1">
    <Form.Group controlId="bLabourandCostsTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input1}
          name="bLabourandCostsTotal"
          value={bLabourandCostsTotal}
          readOnly
              />
      </Form.Group>
      {errors?.bLabourandCostsTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // POST PRODUCTION "C" ------------------------------------

  // Post Production "C" postData 
  const [postProductionCTotal, setPostProductionCTotal] = useState(0);

  // function to add all Post Production "C" totals on change
  useEffect(() => {
    const addPostProC = () => {
      setPostProductionCTotal(
        parseFloat(postStaffFacTotal || 0) +
        parseFloat(editingTotal || 0) +
        parseFloat(postSoundTotal || 0) +
        parseFloat(postLabTotal || 0) +
        parseFloat(postTitlesTotal || 0) +
        parseFloat(postVersionTotal || 0) +
        parseFloat(postVfxTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addPostProC();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [postStaffFacTotal, editingTotal, postSoundTotal, postLabTotal,
      postTitlesTotal, postVersionTotal, postVfxTotal]);

  // Post Production input box
  // eslint-disable-next-line
  const postproductionCtotal = (
    <div className="my-0 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL "C "POST PRODUCTION COSTS</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="postProductionCTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="postProductionCTotal"
          value={postProductionCTotal}
          readOnly
              />
      </Form.Group>
      {errors?.postProductionCTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // BELOW B & C TOTAL ---------------------------

  // C & B Total postData 
  const [belowBandCTotal, setBelowBandCTotal] = useState(0);

  // function to add both B and C Below on change
  useEffect(() => {
    const addBelowBandC = () => {
      setBelowBandCTotal(
        parseFloat(bLabourandCostsTotal || 0) +
        parseFloat(postProductionCTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addBelowBandC();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [bLabourandCostsTotal, postProductionCTotal]);

  // below B and C input box --- belowbandcTotal abovebelowabcTotal
  // eslint-disable-next-line
  const belowbandcTotal = (
    <div className="mt-3 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>BELOW THE LINE "B" AND "C" TOTAL</p>
    </Col>
    <Col md={2} className="mb-1" >
    <Form.Group controlId="belowBandCTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input1}
          name="belowBandCTotal"
          value={belowBandCTotal}
          readOnly
              />
      </Form.Group>
      {errors?.belowBandCTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // ABOVE AND BELOW A, B C TOTAL ---------------------------

  // A, B & C Total postData 
  const [aboveBelowABCTotal, setAboveBelowABCTotal] = useState(0);

  // function to add above A and below B and C on change
  useEffect(() => {
    const addBelowAboveABC = () => {
      setAboveBelowABCTotal(
        parseFloat(aboveTheLineTotal || 0) +
        parseFloat(belowBandCTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addBelowAboveABC();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [aboveTheLineTotal, belowBandCTotal]);

  // A B and C input box
  // eslint-disable-next-line
  const abovebelowabcTotal = (
    <div className="mt-3 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>ABOVE AND BELOW THE LINE "A", "B" AND "C" TOTAL</p>
    </Col>
    <Col md={2} className="mb-1">
    <Form.Group controlId="aboveBelowABCTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input1}
          name="aboveBelowABCTotal"
          value={aboveBelowABCTotal}
          readOnly
              />
      </Form.Group>
      {errors?.aboveBelowABCTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // OTHER "D" ------------------------------------

  // Other "D" postData 
  const [otherDTotal, setOtherDTotal] = useState(0);

  // function to add all Other "D" totals on change
  useEffect(() => {
    const addOtherd = () => {
      setOtherDTotal(
        parseFloat(pubTotal || 0) +
        parseFloat(insurTotal || 0) +
        parseFloat(genExTotal || 0) +
        parseFloat(indirCoTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addOtherd();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [pubTotal, insurTotal, genExTotal, indirCoTotal]);

  // Other input box
  // eslint-disable-next-line
  const otherdtotal = (
    <div className="my-0 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-2`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL "D" OTHER COSTS</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherDTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input}
          name="otherDTotal"
          value={otherDTotal}
          readOnly
              />
      </Form.Group>
      {errors?.otherDTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // A, B, C & D TOTAL ---------------------------

  // A, B, C & D Total postData 
  const [aboveBelowABCandDTotal, setAboveBelowABCandDTotal] = useState(0);

  // function to add A B C and D on change
  useEffect(() => {
    const addBelowAboveABCandD = () => {
      setAboveBelowABCandDTotal(
        parseFloat(aboveBelowABCTotal || 0) +
        parseFloat(otherDTotal || 0)
        )
      }
    const timer = setTimeout(() => {
      addBelowAboveABCandD();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [aboveBelowABCTotal, otherDTotal,]);

  // A B C and D input box
  // eslint-disable-next-line
  const abovebelowabcanddTotal = (
    <div className="mt-3 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}> "A", "B", "C" & "D" TOTAL</p>
    </Col>
    <Col md={2} className="mb-1" >
    <Form.Group controlId="aboveBelowABCandDTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input1}
          name="aboveBelowABCandDTotal"
          value={aboveBelowABCandDTotal}
          readOnly
              />
      </Form.Group>
      {errors?.aboveBelowABCandDTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // GRAND TOTAL ---------------------------

  // Grand Total postData 
  const [grandTotal, setGrandTotal] = useState(0);

  // function to add all totals on change
  useEffect(() => {
    const addGrand = () => {
      setGrandTotal(
        parseFloat(aboveBelowABCandDTotal || 0) +
        parseFloat(contingency || 0) +
        parseFloat(completion_bond || 0)
        )
      }
    const timer = setTimeout(() => {
      addGrand();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [aboveBelowABCandDTotal, contingency, completion_bond,]);

  // Grand input box
  const grandtotal = (
    <div className="mt-4 pl-3">
    <Row>
    <Col className={ `${styles.Overview}  my-0 py-0`} md={10} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>GRAND TOTAL</p>
    </Col>
    <Col md={2} className="mb-1">
    <Form.Group controlId="grandTotal" 
          className={`${styles.Width95} text-center pt-1 mb-0`} >
          <Form.Control 
          type="text"
          className={styles.Input1}
          name="grandTotal"
          value={grandTotal}
          readOnly
              />
      </Form.Group>
      {errors?.grandTotal?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
          {message}
          </Alert>
      ))}
    </Col>
    </Row>
    </div>
  );

  // end totals------------------------

  const buttons = (
    <div className="text-center mt-3">    
    <hr className={`${styles.Break} mx-5 px-5 mb-5 mb-2`}/>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-3`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-5 pl-3`} type="submit">
        Create
      </Button>
    </div>
  );

  // USE EFFECT EDIT 1
  // Fetch budget1 for edit pre-filled values
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/budgets1/?project=${id}`);
        // console.log(data.results[0])
        setBudgetId1(data.results[0].id);
        // budget number
        const {budget_number} = data.results[0];
        setBudgetNumber1(budget_number);
        // details budget_number
        const { title, series, prodco, format, location, dated, writer,
          prelimfin, preparedby, approvedby, approvedbyco} = data.results[0];
        setPostDataDetails({ title, series, prodco, format, location, dated,
          writer, prelimfin, preparedby, approvedby, approvedbyco });
        // length
        const {research, prep, shoot, wrap, post, length_total} = data.results[0];
        setPostDataLength({research, prep, shoot, wrap, post});
        setPostDataLengthTotal(length_total);
        // rights
        const {story_rights, miscellaneous, rights_total} = data.results[0];
        setPostDataRights({story_rights, miscellaneous});
        setPostDataRightsTotal(rights_total);
        // development
        const {research_development, prelim_budget, consultant_expenses,
          office_expenses, staff, travel_expenses_development,
          living_expenses_development, other_development,
          fringes_taxes_development, development_total} = data.results[0];
          setPostDataDevelopment({research_development, prelim_budget, consultant_expenses,
          office_expenses, staff, travel_expenses_development,
          living_expenses_development, other_development,
          fringes_taxes_development});
          setDevelopmentTotal(development_total);
        // scenario
        const {writers_units_number, writers_units_name, writers_quantity, writers_rate,
          consultants_units_number, consultants_units_name, consultants_quantity, consultants_rate,
          editors_scenario_units_number, editors_scenario_units_name,
          editors_scenario_quantity, editors_scenario_rate,
          admin_scenario_units_number, admin_scenario_units_name,
          admin_scenario_quantity, admin_scenario_rate,
          office_expenses_scenario, travel_expenses_scenario,
          living_expenses_scenario, other_scenario,
          fringes_taxes_scenario, scenario_total} = data.results[0];
          setPostDataScenario({writers_units_number, writers_units_name, writers_quantity, writers_rate,
          consultants_units_number, consultants_units_name, consultants_quantity, consultants_rate,
          editors_scenario_units_number, editors_scenario_units_name,
          editors_scenario_quantity, editors_scenario_rate,
          admin_scenario_units_number, admin_scenario_units_name,
          admin_scenario_quantity, admin_scenario_rate,
          office_expenses_scenario, travel_expenses_scenario,
          living_expenses_scenario, other_scenario, fringes_taxes_scenario
          });
          setScenarioTotal(scenario_total);
        // producers-directors
        const {executive_producers_rate, producers_rate,
          line_producers_rate, co_producers_rate,
          associate_producers_rate, directors_rate,
          unit2_directors_rate, executive_producers_quantity,
          producers_quantity, line_producers_quantity,
          co_producers_quantity, associate_producers_quantity,
          directors_quantity, unit2_directors_quantity,
          travel_expenses_producers_dirs, living_expenses_producers_dirs,
          other_producers_dirs, fringes_taxes_producers_dirs,
          producers_dirs_total} = data.results[0];
          setPostDataProducersDirs({
          executive_producers_rate, producers_rate,
          line_producers_rate, co_producers_rate,
          associate_producers_rate, directors_rate,
          unit2_directors_rate, executive_producers_quantity,
          producers_quantity, line_producers_quantity,
          co_producers_quantity, associate_producers_quantity,
          directors_quantity, unit2_directors_quantity,
          travel_expenses_producers_dirs, living_expenses_producers_dirs,
          other_producers_dirs, fringes_taxes_producers_dirs,
        });
        setProducersDirsTotal(producers_dirs_total);
        // stars music
        const {stars, stars_rights_payments, travel_expenses_stars,
          living_expenses_stars, other_stars, fringes_taxes_stars,
          music, music_supervisor, travel_expenses_music, living_expenses_music,
          music_rights_addl_songs, other_music, 
          fringes_taxes_music, stars_music_total} = data.results[0];
        setPostDataStarsMusic({stars, stars_rights_payments, travel_expenses_stars,
          living_expenses_stars, other_stars, fringes_taxes_stars,
          music, music_supervisor, travel_expenses_music, living_expenses_music,
          music_rights_addl_songs, other_music, 
          fringes_taxes_music});
          setStarsMusicTotal(stars_music_total);
        // cast
        const {prin_2_qty, prin_2_uno, prin_2_una, prin_2_rt,
          prin_3_qty, prin_3_uno, prin_3_una, prin_3_rt,
          actors_2_qty, actors_2_uno, actors_2_una, actors_2_rt,
          actors_3_qty, actors_3_uno, actors_3_una, actors_3_rt, 
          actors_4_qty, actors_4_uno, actors_4_una, actors_4_rt,
          actors_5_qty, actors_5_uno, actors_5_una, actors_5_rt,
          actors_6_qty, actors_6_uno, actors_6_una, actors_6_rt,
          actors_7_qty, actors_7_uno, actors_7_una, actors_7_rt,
          actors_week_qty, actors_week_uno, actors_week_una, actors_week_rt,
          actors_day_qty, actors_day_uno, actors_day_una, actors_day_rt,
          holidays_cast, overtime_cast, 
          days6th7th_cast, rehersals_cast,
          holidays_unit_cast, overtime_unit_cast, 
          days6th7th_unit_cast, rehersals_unit_cast,
          principals_quantity, principals_units_number,
          principals_units_name, principals_rate,
          actors_quantity, actors_units_number, 
          actors_units_name, actors_rate,
          stuntcoordinators_quantity, stuntcoordinators_units_number,
          stuntcoordinators_units_name, stuntcoordinators_rate,
          stuntperformers_quantity, stuntperformers_units_number,
          stuntperformers_units_name, stuntperformers_rate,
          otherperformers_quantity, otherperformers_units_number,
          otherperformers_units_name, otherperformers_rate,
          extras_quantity, extras_units_number,
          extras_units_name, extras_rate,
          casting_director, extras_casting, cast_total,
          other_cast, fringes_taxes_cast, rights_payments_cast,} = data.results[0];
          setPostDataCast({prin_2_qty, prin_2_uno, prin_2_una, prin_2_rt,
            prin_3_qty, prin_3_uno, prin_3_una, prin_3_rt,
            actors_2_qty, actors_2_uno, actors_2_una, actors_2_rt,
            actors_3_qty, actors_3_uno, actors_3_una, actors_3_rt, 
            actors_4_qty, actors_4_uno, actors_4_una, actors_4_rt,
            actors_5_qty, actors_5_uno, actors_5_una, actors_5_rt,
            actors_6_qty, actors_6_uno, actors_6_una, actors_6_rt,
            actors_7_qty, actors_7_uno, actors_7_una, actors_7_rt,
            actors_week_qty, actors_week_uno, actors_week_una, actors_week_rt,
            actors_day_qty, actors_day_uno, actors_day_una, actors_day_rt,
          holidays_cast, overtime_cast, 
          days6th7th_cast, rehersals_cast,
          holidays_unit_cast, overtime_unit_cast, 
          days6th7th_unit_cast, rehersals_unit_cast,
          principals_quantity, principals_units_number,
          principals_units_name, principals_rate,
          actors_quantity, actors_units_number, 
          actors_units_name, actors_rate,
          stuntcoordinators_quantity, stuntcoordinators_units_number,
          stuntcoordinators_units_name, stuntcoordinators_rate,
          stuntperformers_quantity, stuntperformers_units_number,
          stuntperformers_units_name, stuntperformers_rate,
          otherperformers_quantity, otherperformers_units_number,
          otherperformers_units_name, otherperformers_rate,
          extras_quantity, extras_units_number,
          extras_units_name, extras_rate,
          casting_director, extras_casting,
          other_cast, fringes_taxes_cast, rights_payments_cast,});
          setCastTotal(cast_total);
        // production
        const {holidays_pro_sta, overtime_pro_sta, 
          days6th7th_pro_sta, other_pro_sta,
          box_rent_pro_sta, holidays_unit_pro_sta, 
          overtime_unit_pro_sta, days6th7th_unit_pro_sta, 
          box_rent_unit_pro_sta,
          production_manager_qty_prep,
          production_manager_uno_prep,
          production_manager_una_prep,
          production_manager_rt_prep,
          production_manager_qty_wrap,
          production_manager_uno_wrap,
          production_manager_una_wrap,
          production_manager_rt_wrap,
          production_supervisor_qty_prep,
          production_supervisor_uno_prep,
          production_supervisor_una_prep,
          production_supervisor_rt_prep,
          production_supervisor_qty_wrap,
          production_supervisor_uno_wrap,
          production_supervisor_una_wrap,
          production_supervisor_rt_wrap,
          production_coordinator_qty_prep,
          production_coordinator_uno_prep,
          production_coordinator_una_prep,
          production_coordinator_rt_prep,
          production_coordinator_qty_wrap,
          production_coordinator_uno_wrap,
          production_coordinator_una_wrap,
          production_coordinator_rt_wrap,
          unit_manager_qty_prep,
          unit_manager_uno_prep,
          unit_manager_una_prep,
          unit_manager_rt_prep,
          unit_manager_qty_wrap,
          unit_manager_uno_wrap,
          unit_manager_una_wrap,
          unit_manager_rt_wrap,
          location_manager_qty_prep,
          location_manager_uno_prep,
          location_manager_una_prep,
          location_manager_rt_prep,
          location_manager_qty_wrap,
          location_manager_uno_wrap,
          location_manager_una_wrap,
          location_manager_rt_wrap,
          location_manager_ass_qty_prep,
          location_manager_ass_uno_prep,
          location_manager_ass_una_prep,
          location_manager_ass_rt_prep,
          location_manager_ass_qty_wrap,
          location_manager_ass_uno_wrap,
          location_manager_ass_una_wrap,
          location_manager_ass_rt_wrap,
          production_ass_qty_prep,
          production_ass_uno_prep,
          production_ass_una_prep,
          production_ass_rt_prep,
          production_ass_qty_wrap,
          production_ass_uno_wrap,
          production_ass_una_wrap,
          production_ass_rt_wrap,
          production_sec_qty_prep,
          production_sec_uno_prep,
          production_sec_una_prep,
          production_sec_rt_prep,
          production_sec_qty_wrap,
          production_sec_uno_wrap,
          production_sec_una_wrap,
          production_sec_rt_wrap,
          production_acc_qty_prep,
          production_acc_uno_prep,
          production_acc_una_prep,
          production_acc_rt_prep,
          production_acc_qty_wrap,
          production_acc_uno_wrap,
          production_acc_una_wrap,
          production_acc_rt_wrap,
          production_acc_ass_qty_prep,
          production_acc_ass_uno_prep,
          production_acc_ass_una_prep,
          production_acc_ass_rt_prep,
          production_acc_ass_qty_wrap,
          production_acc_ass_uno_wrap,
          production_acc_ass_una_wrap,
          production_acc_ass_rt_wrap,
          scriptsupervisor_con_qty_prep,
          scriptsupervisor_con_uno_prep,
          scriptsupervisor_con_una_prep,
          scriptsupervisor_con_rt_prep,
          scriptsupervisor_con_qty_wrap,
          scriptsupervisor_con_uno_wrap,
          scriptsupervisor_con_una_wrap,
          scriptsupervisor_con_rt_wrap,
          payroll_qty_prep,
          payroll_uno_prep,
          payroll_una_prep,
          payroll_rt_prep,
          payroll_qty_wrap,
          payroll_uno_wrap,
          payroll_una_wrap,
          payroll_rt_wrap,
          other_pro_qty_prep,
          other_pro_uno_prep,
          other_pro_una_prep,
          other_pro_rt_prep,
          other_pro_qty_wrap,
          other_pro_uno_wrap,
          other_pro_una_wrap,
          other_pro_rt_wrap,
          directors_ass_qty_prep,
          directors_ass_uno_prep,
          directors_ass_una_prep,
          directors_ass_rt_prep,
          directors_ass_qty_wrap,
          directors_ass_uno_wrap,
          directors_ass_una_wrap,
          directors_ass_rt_wrap,
          ass_director_1st_qty_prep,
          ass_director_1st_uno_prep,
          ass_director_1st_una_prep,
          ass_director_1st_rt_prep,
          ass_director_1st_qty_wrap,
          ass_director_1st_uno_wrap,
          ass_director_1st_una_wrap,
          ass_director_1st_rt_wrap,
          ass_director_2nd_qty_prep,
          ass_director_2nd_uno_prep,
          ass_director_2nd_una_prep,
          ass_director_2nd_rt_prep,
          ass_director_2nd_qty_wrap,
          ass_director_2nd_uno_wrap,
          ass_director_2nd_una_wrap,
          ass_director_2nd_rt_wrap,
          ass_director_3rd_qty_prep,
          ass_director_3rd_uno_prep,
          ass_director_3rd_una_prep,
          ass_director_3rd_rt_prep,
          ass_director_3rd_qty_wrap,
          ass_director_3rd_uno_wrap,
          ass_director_3rd_una_wrap,
          ass_director_3rd_rt_wrap,
          craft_services_qty_prep,
          craft_services_uno_prep,
          craft_services_una_prep,
          craft_services_rt_prep,
          craft_services_qty_wrap,
          craft_services_uno_wrap,
          craft_services_una_wrap,
          craft_services_rt_wrap,
          // old
          fringes_taxes_production,
          production_manager_quantity,
          production_manager_units_number,
          production_manager_units_name,
          production_manager_rate,
          production_supervisor_quantity,
          production_supervisor_units_number,
          production_supervisor_units_name,
          production_supervisor_rate,
          production_coordinator_quantity,
          production_coordinator_units_number,
          production_coordinator_units_name,
          production_coordinator_rate,
          unit_manager_quantity,
          unit_manager_units_number,
          unit_manager_units_name,
          unit_manager_rate,
          location_manager_quantity,
          location_manager_units_number,
          location_manager_units_name,
          location_manager_rate,
          location_manager_assistant_quantity,
          location_manager_assistant_units_number,
          location_manager_assistant_units_name,
          location_manager_assistant_rate,
          production_assistants_quantity,
          production_assistants_units_number,
          production_assistants_units_name,
          production_assistants_rate,
          production_secretary_quantity,
          production_secretary_units_number,
          production_secretary_units_name,
          production_secretary_rate,
          production_accountant_quantity,
          production_accountant_units_number,
          production_accountant_units_name,
          production_accountant_rate,
          production_accountant_assistant_quantity,
          production_accountant_assistant_units_number,
          production_accountant_assistant_units_name,
          production_accountant_assistant_rate,
          scriptsupervisor_continuity_quantity,
          scriptsupervisor_continuity_units_number,
          scriptsupervisor_continuity_units_name,
          scriptsupervisor_continuity_rate,
          payroll_quantity,
          payroll_units_number,
          payroll_units_name,
          payroll_rate,
          other_production_quantity,
          other_production_units_number,
          other_production_units_name,
          other_production_rate,
          directors_assistant_quantity,
          directors_assistant_units_number,
          directors_assistant_units_name,
          directors_assistant_rate,
          assistant_director_1st_quantity,
          assistant_director_1st_units_number,
          assistant_director_1st_units_name,
          assistant_director_1st_rate,
          assistant_director_2nd_quantity,
          assistant_director_2nd_units_number,
          assistant_director_2nd_units_name,
          assistant_director_2nd_rate,
          assistant_director_3rd_quantity,
          assistant_director_3rd_units_number,
          assistant_director_3rd_units_name,
          assistant_director_3rd_rate,
          craft_services_quantity,
          craft_services_units_number,
          craft_services_units_name,
          craft_services_rate,
          productionstaff_total} = data.results[0];
          setPostDataProduction({holidays_pro_sta, overtime_pro_sta, 
            days6th7th_pro_sta, other_pro_sta,
            box_rent_pro_sta, holidays_unit_pro_sta, 
            overtime_unit_pro_sta, days6th7th_unit_pro_sta, 
            box_rent_unit_pro_sta,
            production_manager_qty_prep,
            production_manager_uno_prep,
            production_manager_una_prep,
            production_manager_rt_prep,
            production_manager_qty_wrap,
            production_manager_uno_wrap,
            production_manager_una_wrap,
            production_manager_rt_wrap,
            production_supervisor_qty_prep,
            production_supervisor_uno_prep,
            production_supervisor_una_prep,
            production_supervisor_rt_prep,
            production_supervisor_qty_wrap,
            production_supervisor_uno_wrap,
            production_supervisor_una_wrap,
            production_supervisor_rt_wrap,
            production_coordinator_qty_prep,
            production_coordinator_uno_prep,
            production_coordinator_una_prep,
            production_coordinator_rt_prep,
            production_coordinator_qty_wrap,
            production_coordinator_uno_wrap,
            production_coordinator_una_wrap,
            production_coordinator_rt_wrap,
            unit_manager_qty_prep,
            unit_manager_uno_prep,
            unit_manager_una_prep,
            unit_manager_rt_prep,
            unit_manager_qty_wrap,
            unit_manager_uno_wrap,
            unit_manager_una_wrap,
            unit_manager_rt_wrap,
            location_manager_qty_prep,
            location_manager_uno_prep,
            location_manager_una_prep,
            location_manager_rt_prep,
            location_manager_qty_wrap,
            location_manager_uno_wrap,
            location_manager_una_wrap,
            location_manager_rt_wrap,
            location_manager_ass_qty_prep,
            location_manager_ass_uno_prep,
            location_manager_ass_una_prep,
            location_manager_ass_rt_prep,
            location_manager_ass_qty_wrap,
            location_manager_ass_uno_wrap,
            location_manager_ass_una_wrap,
            location_manager_ass_rt_wrap,
            production_ass_qty_prep,
            production_ass_uno_prep,
            production_ass_una_prep,
            production_ass_rt_prep,
            production_ass_qty_wrap,
            production_ass_uno_wrap,
            production_ass_una_wrap,
            production_ass_rt_wrap,
            production_sec_qty_prep,
            production_sec_uno_prep,
            production_sec_una_prep,
            production_sec_rt_prep,
            production_sec_qty_wrap,
            production_sec_uno_wrap,
            production_sec_una_wrap,
            production_sec_rt_wrap,
            production_acc_qty_prep,
            production_acc_uno_prep,
            production_acc_una_prep,
            production_acc_rt_prep,
            production_acc_qty_wrap,
            production_acc_uno_wrap,
            production_acc_una_wrap,
            production_acc_rt_wrap,
            production_acc_ass_qty_prep,
            production_acc_ass_uno_prep,
            production_acc_ass_una_prep,
            production_acc_ass_rt_prep,
            production_acc_ass_qty_wrap,
            production_acc_ass_uno_wrap,
            production_acc_ass_una_wrap,
            production_acc_ass_rt_wrap,
            scriptsupervisor_con_qty_prep,
            scriptsupervisor_con_uno_prep,
            scriptsupervisor_con_una_prep,
            scriptsupervisor_con_rt_prep,
            scriptsupervisor_con_qty_wrap,
            scriptsupervisor_con_uno_wrap,
            scriptsupervisor_con_una_wrap,
            scriptsupervisor_con_rt_wrap,
            payroll_qty_prep,
            payroll_uno_prep,
            payroll_una_prep,
            payroll_rt_prep,
            payroll_qty_wrap,
            payroll_uno_wrap,
            payroll_una_wrap,
            payroll_rt_wrap,
            other_pro_qty_prep,
            other_pro_uno_prep,
            other_pro_una_prep,
            other_pro_rt_prep,
            other_pro_qty_wrap,
            other_pro_uno_wrap,
            other_pro_una_wrap,
            other_pro_rt_wrap,
            directors_ass_qty_prep,
            directors_ass_uno_prep,
            directors_ass_una_prep,
            directors_ass_rt_prep,
            directors_ass_qty_wrap,
            directors_ass_uno_wrap,
            directors_ass_una_wrap,
            directors_ass_rt_wrap,
            ass_director_1st_qty_prep,
            ass_director_1st_uno_prep,
            ass_director_1st_una_prep,
            ass_director_1st_rt_prep,
            ass_director_1st_qty_wrap,
            ass_director_1st_uno_wrap,
            ass_director_1st_una_wrap,
            ass_director_1st_rt_wrap,
            ass_director_2nd_qty_prep,
            ass_director_2nd_uno_prep,
            ass_director_2nd_una_prep,
            ass_director_2nd_rt_prep,
            ass_director_2nd_qty_wrap,
            ass_director_2nd_uno_wrap,
            ass_director_2nd_una_wrap,
            ass_director_2nd_rt_wrap,
            ass_director_3rd_qty_prep,
            ass_director_3rd_uno_prep,
            ass_director_3rd_una_prep,
            ass_director_3rd_rt_prep,
            ass_director_3rd_qty_wrap,
            ass_director_3rd_uno_wrap,
            ass_director_3rd_una_wrap,
            ass_director_3rd_rt_wrap,
            craft_services_qty_prep,
            craft_services_uno_prep,
            craft_services_una_prep,
            craft_services_rt_prep,
            craft_services_qty_wrap,
            craft_services_uno_wrap,
            craft_services_una_wrap,
            craft_services_rt_wrap,
            // old
            fringes_taxes_production, production_manager_units_name,
            production_manager_quantity, production_manager_units_number,
            production_manager_rate, production_supervisor_quantity,
            production_supervisor_units_number, production_supervisor_units_name,
            production_supervisor_rate, production_coordinator_quantity,
            production_coordinator_units_number, production_coordinator_units_name,
            production_coordinator_rate, unit_manager_quantity,
            unit_manager_units_number, unit_manager_units_name,
            unit_manager_rate, location_manager_quantity,
            location_manager_units_number, location_manager_units_name,
            location_manager_rate, location_manager_assistant_quantity,
            location_manager_assistant_units_number, location_manager_assistant_units_name,
            location_manager_assistant_rate, production_assistants_quantity,
            production_assistants_units_number, production_assistants_units_name,
            production_assistants_rate, production_secretary_quantity,
            production_secretary_units_number, production_secretary_units_name,
            production_secretary_rate, production_accountant_quantity,
            production_accountant_units_number, production_accountant_units_name,
            production_accountant_rate, production_accountant_assistant_quantity,
            production_accountant_assistant_units_number, production_accountant_assistant_units_name,
            production_accountant_assistant_rate, scriptsupervisor_continuity_quantity,
            scriptsupervisor_continuity_units_number, scriptsupervisor_continuity_units_name,
            scriptsupervisor_continuity_rate, payroll_quantity, payroll_units_number,
            payroll_units_name, payroll_rate, other_production_quantity,
            other_production_units_number, other_production_units_name,
            other_production_rate, directors_assistant_quantity,
            directors_assistant_units_number, directors_assistant_units_name,
            directors_assistant_rate, assistant_director_1st_quantity,
            assistant_director_1st_units_number, assistant_director_1st_units_name,
            assistant_director_1st_rate, assistant_director_2nd_quantity,
            assistant_director_2nd_units_number, assistant_director_2nd_units_name,
            assistant_director_2nd_rate, assistant_director_3rd_quantity,
            assistant_director_3rd_units_number, assistant_director_3rd_units_name, assistant_director_3rd_rate,
            craft_services_quantity, craft_services_units_number,
            craft_services_units_name, craft_services_rate});
          setProductionstaffTotal(productionstaff_total);
        // design
        const {production_designer_quantity, production_designer_units_number,
          production_designer_units_name, production_designer_rate,
          pro_designer_qty_prep, pro_designer_uno_prep,
          pro_designer_una_prep, pro_designer_rt_prep,
          pro_designer_qty_wrap, pro_designer_uno_wrap,
          pro_designer_una_wrap, pro_designer_rt_wrap,
          supervart_qty, supervart_uno,
          supervart_una, supervart_rt,
          supervart_qty_prep, supervart_uno_prep,
          supervart_una_prep, supervart_rt_prep,
          art_director_quantity, art_director_units_number,
          art_director_units_name, art_director_rate,
          art_director_qty_prep, art_director_uno_prep,
          art_director_una_prep, art_director_rt_prep,
          art_director_qty_wrap, art_director_uno_wrap,
          art_director_una_wrap, art_director_rt_wrap,
          standby_art_qty, standby_art_uno,
          standby_art_una, standby_art_rt,
          standby_art_qty_prep, standby_art_uno_prep,
          standby_art_una_prep, standby_art_rt_prep,
          art_assistants_quantity, art_assistants_units_number,
          art_assistants_units_name, art_assistants_rate,
          art_ass_qty_prep, art_ass_uno_prep,
          art_ass_una_prep, art_ass_rt_prep,
          art_ass_qty_wrap, art_ass_uno_wrap,
          art_ass_una_wrap, art_ass_rt_wrap,
          set_design_qty, set_design_uno,
          set_design_una, set_design_rt,
          set_design_qty_prep, set_design_uno_prep,
          set_design_una_prep, set_design_rt_prep,
          junior_draught_qty, junior_draught_uno,
          junior_draught_una, junior_draught_rt,
          junior_draught_qty_prep, junior_draught_uno_prep,
          junior_draught_una_prep, junior_draught_rt_prep,
          graphic_artists_quantity, graphic_artists_units_number,
          graphic_artists_units_name, graphic_artists_rate,
          graphic_art_qty_prep, graphic_art_uno_prep,
          graphic_art_una_prep, graphic_art_rt_prep,
          art_dep_coor_qty, art_dep_coor_uno,
          art_dep_coor_una, art_dep_coor_rt,
          art_dep_coor_qty_prep, art_dep_coor_uno_prep,
          art_dep_coor_una_prep, art_dep_coor_rt_prep,
          art_dep_coor_qty_wrap, art_dep_coor_uno_wrap,
          art_dep_coor_una_wrap, art_dep_coor_rt_wrap,
          production_assistants_trainees_quantity, production_assistants_trainees_units_number,
          production_assistants_trainees_units_name, production_assistants_trainees_rate,
          pro_ass_trainees_qty_prep, pro_ass_trainees_uno_prep,
          pro_ass_trainees_una_prep, pro_ass_trainees_rt_prep,
          pro_ass_trainees_qty_wrap, pro_ass_trainees_uno_wrap,
          pro_ass_trainees_una_wrap, pro_ass_trainees_rt_wrap,
          sketch_artists, sketch_artists_unit,
          storyboard_artists, storyboard_artists_unit,
          holidays_design, holidays_unit_design,
          overtime_design, overtime_unit_design,
          days6th7th_design, days6th7th_unit_design,
          box_rent_unit_design, box_rent_design,
          other_design, fringes_taxes_design,
          designlabour_total} = data.results[0];
        setPostDataDesign({production_designer_quantity, production_designer_units_number,
          production_designer_units_name, production_designer_rate,
          pro_designer_qty_prep, pro_designer_uno_prep,
          pro_designer_una_prep, pro_designer_rt_prep,
          pro_designer_qty_wrap, pro_designer_uno_wrap,
          pro_designer_una_wrap, pro_designer_rt_wrap,
          supervart_qty, supervart_uno,
          supervart_una, supervart_rt,
          supervart_qty_prep, supervart_uno_prep,
          supervart_una_prep, supervart_rt_prep,
          art_director_quantity, art_director_units_number,
          art_director_units_name, art_director_rate,
          art_director_qty_prep, art_director_uno_prep,
          art_director_una_prep, art_director_rt_prep,
          art_director_qty_wrap, art_director_uno_wrap,
          art_director_una_wrap, art_director_rt_wrap,
          standby_art_qty, standby_art_uno,
          standby_art_una, standby_art_rt,
          standby_art_qty_prep, standby_art_uno_prep,
          standby_art_una_prep, standby_art_rt_prep,
          art_assistants_quantity, art_assistants_units_number,
          art_assistants_units_name, art_assistants_rate,
          art_ass_qty_prep, art_ass_uno_prep,
          art_ass_una_prep, art_ass_rt_prep,
          art_ass_qty_wrap, art_ass_uno_wrap,
          art_ass_una_wrap, art_ass_rt_wrap,
          set_design_qty, set_design_uno,
          set_design_una, set_design_rt,
          set_design_qty_prep, set_design_uno_prep,
          set_design_una_prep, set_design_rt_prep,
          junior_draught_qty, junior_draught_uno,
          junior_draught_una, junior_draught_rt,
          junior_draught_qty_prep, junior_draught_uno_prep,
          junior_draught_una_prep, junior_draught_rt_prep,
          graphic_artists_quantity, graphic_artists_units_number,
          graphic_artists_units_name, graphic_artists_rate,
          graphic_art_qty_prep, graphic_art_uno_prep,
          graphic_art_una_prep, graphic_art_rt_prep,
          art_dep_coor_qty, art_dep_coor_uno,
          art_dep_coor_una, art_dep_coor_rt,
          art_dep_coor_qty_prep, art_dep_coor_uno_prep,
          art_dep_coor_una_prep, art_dep_coor_rt_prep,
          art_dep_coor_qty_wrap, art_dep_coor_uno_wrap,
          art_dep_coor_una_wrap, art_dep_coor_rt_wrap,
          production_assistants_trainees_quantity, production_assistants_trainees_units_number,
          production_assistants_trainees_units_name, production_assistants_trainees_rate,
          pro_ass_trainees_qty_prep, pro_ass_trainees_uno_prep,
          pro_ass_trainees_una_prep, pro_ass_trainees_rt_prep,
          pro_ass_trainees_qty_wrap, pro_ass_trainees_uno_wrap,
          pro_ass_trainees_una_wrap, pro_ass_trainees_rt_wrap,
          sketch_artists, sketch_artists_unit,
          storyboard_artists, storyboard_artists_unit,
          holidays_design, holidays_unit_design,
          overtime_design, overtime_unit_design,
          days6th7th_design, days6th7th_unit_design,
          box_rent_unit_design, box_rent_design,
          other_design, fringes_taxes_design,});
        setDesignlabourTotal(designlabour_total);
        // construction
        const {fringes_taxes_construction,
          days6th7th_unit_con, days6th7th_con, overtime_unit_con, overtime_con,
          holidays_unit_con, holidays_con, box_rent_unit_con, box_rent_con,
          con_coor_qty_prep, con_coor_uno_prep, con_coor_una_prep, con_coor_rt_prep,
          con_coor_qty_wrap, con_coor_uno_wrap, con_coor_una_wrap, con_coor_rt_wrap,
          headcar_qty_prep, headcar_uno_prep, headcar_una_prep, headcar_rt_prep,
          headcar_qty_wrap, headcar_uno_wrap, headcar_una_wrap, headcar_rt_wrap,
          carpen_qty_prep, carpen_uno_prep, carpen_una_prep, carpen_rt_prep,
          carpen_qty_wrap, carpen_uno_wrap, carpen_una_wrap, carpen_rt_wrap,
          scenic_qty_prep, scenic_uno_prep, scenic_una_prep, scenic_rt_prep,
          scenic_qty_wrap, scenic_uno_wrap, scenic_una_wrap, scenic_rt_wrap,
          headpain_qty_prep, headpain_uno_prep, headpain_una_prep, headpain_rt_prep,
          headpain_qty_wrap, headpain_uno_wrap, headpain_una_wrap, headpain_rt_wrap,
          pain_qty_prep, pain_uno_prep, pain_una_prep, pain_rt_prep,
          pain_qty_wrap, pain_uno_wrap, pain_una_wrap, pain_rt_wrap,
          labo_qty_prep, labo_uno_prep, labo_una_prep, labo_rt_prep,
          labo_qty_wrap, labo_uno_wrap, labo_una_wrap, labo_rt_wrap,
          constructioncoordinator_quantity, constructioncoordinator_units_number,
          constructioncoordinator_units_name, constructioncoordinator_rate,
          headcarpenter_quantity, headcarpenter_units_number,
          headcarpenter_units_name, headcarpenter_rate,
          carpenters_quantity, carpenters_units_number,
          carpenters_units_name, carpenters_rate,
          scenicpainters_quantity, scenicpainters_units_number,
          scenicpainters_units_name, scenicpainters_rate,
          headpainter_quantity, headpainter_units_number,
          headpainter_units_name, headpainter_rate,
          painters_quantity, painters_units_number, 
          painters_units_name, painters_rate,
          labourers_quantity, labourers_units_number, 
          labourers_units_name, labourers_rate, other_construction,
          constructionlabour_total} = data.results[0];
        setPostDataConstruction({fringes_taxes_construction,
          days6th7th_unit_con, days6th7th_con, overtime_unit_con, overtime_con,
          holidays_unit_con, holidays_con, box_rent_unit_con, box_rent_con,
          con_coor_qty_prep, con_coor_uno_prep, con_coor_una_prep, con_coor_rt_prep,
          con_coor_qty_wrap, con_coor_uno_wrap, con_coor_una_wrap, con_coor_rt_wrap,
          headcar_qty_prep, headcar_uno_prep, headcar_una_prep, headcar_rt_prep,
          headcar_qty_wrap, headcar_uno_wrap, headcar_una_wrap, headcar_rt_wrap,
          carpen_qty_prep, carpen_uno_prep, carpen_una_prep, carpen_rt_prep,
          carpen_qty_wrap, carpen_uno_wrap, carpen_una_wrap, carpen_rt_wrap,
          scenic_qty_prep, scenic_uno_prep, scenic_una_prep, scenic_rt_prep,
          scenic_qty_wrap, scenic_uno_wrap, scenic_una_wrap, scenic_rt_wrap,
          headpain_qty_prep, headpain_uno_prep, headpain_una_prep, headpain_rt_prep,
          headpain_qty_wrap, headpain_uno_wrap, headpain_una_wrap, headpain_rt_wrap,
          pain_qty_prep, pain_uno_prep, pain_una_prep, pain_rt_prep,
          pain_qty_wrap, pain_uno_wrap, pain_una_wrap, pain_rt_wrap,
          labo_qty_prep, labo_uno_prep, labo_una_prep, labo_rt_prep,
          labo_qty_wrap, labo_uno_wrap, labo_una_wrap, labo_rt_wrap,
          constructioncoordinator_quantity, constructioncoordinator_units_number,
          constructioncoordinator_units_name, constructioncoordinator_rate,
          headcarpenter_quantity, headcarpenter_units_number,
          headcarpenter_units_name, headcarpenter_rate,
          carpenters_quantity, carpenters_units_number,
          carpenters_units_name, carpenters_rate,
          scenicpainters_quantity, scenicpainters_units_number,
          scenicpainters_units_name, scenicpainters_rate,
          headpainter_quantity, headpainter_units_number,
          headpainter_units_name, headpainter_rate,
          painters_quantity, painters_units_number, 
          painters_units_name, painters_rate,
          labourers_quantity, labourers_units_number, 
          labourers_units_name, labourers_rate, other_construction,}) ;
        setConstructionlabourTotal(constructionlabour_total);
        // dressing
        const {fringes_taxes_dressing,
          days6th7th_unit_dres, days6th7th_dres, overtime_unit_dres, overtime_dres,
          holidays_unit_dres, holidays_dres, box_rent_unit_dres, box_rent_dres,
          set_dec_qty_prep, set_dec_uno_prep, set_dec_una_prep, set_dec_rt_prep,
          set_dec_qty_wrap, set_dec_uno_wrap, set_dec_una_wrap, set_dec_rt_wrap,
          ass_set_d_qty_prep, ass_set_d_uno_prep, ass_set_d_una_prep, ass_set_d_rt_prep,
          ass_set_d_qty_wrap, ass_set_d_uno_wrap, ass_set_d_una_wrap, ass_set_d_rt_wrap,
          lead_man_qty_prep, lead_man_uno_prep, lead_man_una_prep, lead_man_rt_prep,
          lead_man_qty_wrap, lead_man_uno_wrap, lead_man_una_wrap, lead_man_rt_wrap,
          set_dres_qty_prep, set_dres_uno_prep, set_dres_una_prep, set_dres_rt_prep,
          set_dres_qty_wrap, set_dres_uno_wrap, set_dres_una_wrap, set_dres_rt_wrap,
          swing_g_qty_prep, swing_g_uno_prep, swing_g_una_prep, swing_g_rt_prep,
          swing_g_qty_wrap, swing_g_uno_wrap, swing_g_una_wrap, swing_g_rt_wrap,
          set_d_buy_qty_prep, set_d_buy_uno_prep, set_d_buy_una_prep, set_d_buy_rt_prep,
          set_d_buy_qty_wrap, set_d_buy_uno_wrap, set_d_buy_una_wrap, set_d_buy_rt_wrap,
          set_decorator_quantity, set_decorator_units_number,
          set_decorator_units_name, set_decorator_rate,
          assist_set_decorator_quantity, assist_set_decorator_units_number,
          assist_set_decorator_units_name, assist_set_decorator_rate,
          lead_man_quantity, lead_man_units_number,
          lead_man_units_name, lead_man_rate,
          set_dressers_quantity, set_dressers_units_number,
          set_dressers_units_name, set_dressers_rate,
          swing_gang_quantity, swing_gang_units_number,
          swing_gang_units_name, swing_gang_rate,
          set_dressing_buyer_quantity, set_dressing_buyer_units_number,
          set_dressing_buyer_units_name, set_dressing_buyer_rate, 
          other_set_dressing, dressinglabour_total} = data.results[0];
        setPostDataSetDressing({fringes_taxes_dressing,
            days6th7th_unit_dres, days6th7th_dres, overtime_unit_dres, overtime_dres,
            holidays_unit_dres, holidays_dres, box_rent_unit_dres, box_rent_dres,
            set_dec_qty_prep, set_dec_uno_prep, set_dec_una_prep, set_dec_rt_prep,
            set_dec_qty_wrap, set_dec_uno_wrap, set_dec_una_wrap, set_dec_rt_wrap,
            ass_set_d_qty_prep, ass_set_d_uno_prep, ass_set_d_una_prep, ass_set_d_rt_prep,
            ass_set_d_qty_wrap, ass_set_d_uno_wrap, ass_set_d_una_wrap, ass_set_d_rt_wrap,
            lead_man_qty_prep, lead_man_uno_prep, lead_man_una_prep, lead_man_rt_prep,
            lead_man_qty_wrap, lead_man_uno_wrap, lead_man_una_wrap, lead_man_rt_wrap,
            set_dres_qty_prep, set_dres_uno_prep, set_dres_una_prep, set_dres_rt_prep,
            set_dres_qty_wrap, set_dres_uno_wrap, set_dres_una_wrap, set_dres_rt_wrap,
            swing_g_qty_prep, swing_g_uno_prep, swing_g_una_prep, swing_g_rt_prep,
            swing_g_qty_wrap, swing_g_uno_wrap, swing_g_una_wrap, swing_g_rt_wrap,
            set_d_buy_qty_prep, set_d_buy_uno_prep, set_d_buy_una_prep, set_d_buy_rt_prep,
            set_d_buy_qty_wrap, set_d_buy_uno_wrap, set_d_buy_una_wrap, set_d_buy_rt_wrap,
            set_decorator_quantity, set_decorator_units_number,
            set_decorator_units_name, set_decorator_rate,
            assist_set_decorator_quantity, assist_set_decorator_units_number,
            assist_set_decorator_units_name, assist_set_decorator_rate,
            lead_man_quantity, lead_man_units_number,
            lead_man_units_name, lead_man_rate,
            set_dressers_quantity, set_dressers_units_number,
            set_dressers_units_name, set_dressers_rate,
            swing_gang_quantity, swing_gang_units_number,
            swing_gang_units_name, swing_gang_rate,
            set_dressing_buyer_quantity, set_dressing_buyer_units_number,
            set_dressing_buyer_units_name, set_dressing_buyer_rate, 
            other_set_dressing,});
        setDressinglabourTotal(dressinglabour_total);
        // property
        const {days6th7th_unit_prop, days6th7th_prop, 
          overtime_unit_prop, overtime_prop,
          holidays_unit_prop, holidays_prop, box_rent_unit_prop, box_rent_prop,
          pro_mas_qty_prep, pro_mas_uno_prep, pro_mas_una_prep, pro_mas_rt_prep,
          pro_mas_qty_wrap, pro_mas_uno_wrap, pro_mas_una_wrap, pro_mas_rt_wrap,
          as_pro_ma_qty_prep, as_pro_ma_uno_prep, as_pro_ma_una_prep, as_pro_ma_rt_prep,
          as_pro_ma_qty_wrap, as_pro_ma_uno_wrap, as_pro_ma_una_wrap, as_pro_ma_rt_wrap,
          on_set_prop_qty_prep, on_set_prop_uno_prep, 
          on_set_prop_una_prep, on_set_prop_rt_prep,
          on_set_prop_qty_wrap, on_set_prop_uno_wrap, 
          on_set_prop_una_wrap, on_set_prop_rt_wrap, 
          prop_buy_qty_prep, prop_buy_uno_prep, prop_buy_una_prep, prop_buy_rt_prep,
          prop_buy_qty_wrap, prop_buy_uno_wrap, prop_buy_una_wrap, prop_buy_rt_wrap,
          armor_qty_prep, armor_uno_prep, armor_una_prep, armor_rt_prep,
          armor_qty_wrap, armor_uno_wrap, armor_una_wrap, armor_rt_wrap,
          fringes_taxes_property,
          property_master_quantity, property_master_units_number,
          property_master_units_name, property_master_rate,
          assist_property_master_quantity, assist_property_master_units_number,
          assist_property_master_units_name, assist_property_master_rate,
          on_set_props_person_quantity, on_set_props_person_units_number,
          on_set_props_person_units_name, on_set_props_person_rate,
          property_buyer_quantity, property_buyer_units_number,
          property_buyer_units_name, property_buyer_rate,
          armorer_quantity, armorer_units_number,
          armorer_units_name, armorer_rate,
          other_property, propertylabour_total} = data.results[0];
        setPostDataProperty({days6th7th_unit_prop, days6th7th_prop, 
          overtime_unit_prop, overtime_prop,
          holidays_unit_prop, holidays_prop, box_rent_unit_prop, box_rent_prop,
          pro_mas_qty_prep, pro_mas_uno_prep, pro_mas_una_prep, pro_mas_rt_prep,
          pro_mas_qty_wrap, pro_mas_uno_wrap, pro_mas_una_wrap, pro_mas_rt_wrap,
          as_pro_ma_qty_prep, as_pro_ma_uno_prep, as_pro_ma_una_prep, as_pro_ma_rt_prep,
          as_pro_ma_qty_wrap, as_pro_ma_uno_wrap, as_pro_ma_una_wrap, as_pro_ma_rt_wrap,
          on_set_prop_qty_prep, on_set_prop_uno_prep, 
          on_set_prop_una_prep, on_set_prop_rt_prep,
          on_set_prop_qty_wrap, on_set_prop_uno_wrap, 
          on_set_prop_una_wrap, on_set_prop_rt_wrap, 
          prop_buy_qty_prep, prop_buy_uno_prep, prop_buy_una_prep, prop_buy_rt_prep,
          prop_buy_qty_wrap, prop_buy_uno_wrap, prop_buy_una_wrap, prop_buy_rt_wrap,
          armor_qty_prep, armor_uno_prep, armor_una_prep, armor_rt_prep,
          armor_qty_wrap, armor_uno_wrap, armor_una_wrap, armor_rt_wrap,
          fringes_taxes_property,
          property_master_quantity, property_master_units_number,
          property_master_units_name, property_master_rate,
          assist_property_master_quantity, assist_property_master_units_number,
          assist_property_master_units_name, assist_property_master_rate,
          on_set_props_person_quantity, on_set_props_person_units_number,
          on_set_props_person_units_name, on_set_props_person_rate,
          property_buyer_quantity, property_buyer_units_number,
          property_buyer_units_name, property_buyer_rate,
          armorer_quantity, armorer_units_number,
          armorer_units_name, armorer_rate,
          other_property});
        setPropertylabourTotal(propertylabour_total);

            } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  // USE EFFECT EDIT 2
  // Fetch budget2 for edit pre-filled values
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/budgets2/?project=${id}`);
        // console.log(data.results[0]);
        setBudgetId2(data.results[0].id);
        // budget number
        const {budget_number} = data.results[0];
        setBudgetNumber2(budget_number);
        // wrangling
        const {days6th7th_unit_wran, days6th7th_wran,
          overtime_unit_wran, overtime_wran, holidays_unit_wran, 
          holidays_wran, box_rent_unit_wran, box_rent_wran, other_solo_wran,
          he_wran_qty_prep, he_wran_uno_prep, he_wran_una_prep, he_wran_rt_prep,
          he_wran_qty_wrap, he_wran_uno_wrap, he_wran_una_wrap, he_wran_rt_wrap,
          oth_wran_qty_prep, oth_wran_uno_prep, oth_wran_una_prep, oth_wran_rt_prep,
          oth_wran_qty_wrap, oth_wran_uno_wrap, oth_wran_una_wrap, oth_wran_rt_wrap,
          fringes_taxes_wrangling,
          head_wrangler_quantity, head_wrangler_units_number,
          head_wrangler_units_name, head_wrangler_rate,
          other_wrangling_labour_quantity, other_wrangling_labour_units_number,
          other_wrangling_labour_units_name, other_wrangling_labour_rate,
          wranglerlabour_total,} = data.results[0];
        setPostDataWrangling({days6th7th_unit_wran, days6th7th_wran,
          overtime_unit_wran, overtime_wran, holidays_unit_wran, 
          holidays_wran, box_rent_unit_wran, box_rent_wran, other_solo_wran,
          he_wran_qty_prep, he_wran_uno_prep, he_wran_una_prep, he_wran_rt_prep,
          he_wran_qty_wrap, he_wran_uno_wrap, he_wran_una_wrap, he_wran_rt_wrap,
          oth_wran_qty_prep, oth_wran_uno_prep, oth_wran_una_prep, oth_wran_rt_prep,
          oth_wran_qty_wrap, oth_wran_uno_wrap, oth_wran_una_wrap, oth_wran_rt_wrap,
          fringes_taxes_wrangling,
          head_wrangler_quantity, head_wrangler_units_number,
          head_wrangler_units_name, head_wrangler_rate,
          other_wrangling_labour_quantity, other_wrangling_labour_units_number,
          other_wrangling_labour_units_name, other_wrangling_labour_rate,});
        setWranglerlabourTotal(wranglerlabour_total);
        // fx
        const {days6th7th_unit_fx, days6th7th_fx, overtime_unit_fx, overtime_fx,
          holidays_unit_fx,  holidays_fx, box_rent_unit_fx, box_rent_fx, other_solo_fx,
          fx_sup_qty_prep, fx_sup_uno_prep, fx_sup_una_prep, fx_sup_rt_prep,
          fx_sup_qty_wrap, fx_sup_uno_wrap, fx_sup_una_wrap, fx_sup_rt_wrap,
          ass_fx_qty_prep, ass_fx_uno_prep, ass_fx_una_prep, ass_fx_rt_prep,
          ass_fx_qty_wrap, ass_fx_uno_wrap, ass_fx_una_wrap, ass_fx_rt_wrap,
          ot_fx_l_qty_prep, ot_fx_l_uno_prep, ot_fx_l_una_prep, ot_fx_l_rt_prep,
          ot_fx_l_qty_wrap, ot_fx_l_uno_wrap, ot_fx_l_una_wrap, ot_fx_l_rt_wrap,
          fringes_taxes_fx,
          fx_supervisor_quantity, fx_supervisor_units_number,
          fx_supervisor_units_name, fx_supervisor_rate,
          assist_fx_quantity, assist_fx_units_number,
          assist_fx_units_name, assist_fx_rate,
          other_fx_labour_quantity, other_fx_labour_units_number,
          other_fx_labour_units_name, other_fx_labour_rate,
          fxlabour_total} = data.results[0];
        setPostDataSpecialEffects({fringes_taxes_fx,
          days6th7th_unit_fx, days6th7th_fx, overtime_unit_fx, overtime_fx,
          holidays_unit_fx,  holidays_fx, box_rent_unit_fx, box_rent_fx, other_solo_fx,
          fx_sup_qty_prep, fx_sup_uno_prep, fx_sup_una_prep, fx_sup_rt_prep,
          fx_sup_qty_wrap, fx_sup_uno_wrap, fx_sup_una_wrap, fx_sup_rt_wrap,
          ass_fx_qty_prep, ass_fx_uno_prep, ass_fx_una_prep, ass_fx_rt_prep,
          ass_fx_qty_wrap, ass_fx_uno_wrap, ass_fx_una_wrap, ass_fx_rt_wrap,
          ot_fx_l_qty_prep, ot_fx_l_uno_prep, ot_fx_l_una_prep, ot_fx_l_rt_prep,
          ot_fx_l_qty_wrap, ot_fx_l_uno_wrap, ot_fx_l_una_wrap, ot_fx_l_rt_wrap,
            fx_supervisor_quantity, fx_supervisor_units_number,
            fx_supervisor_units_name, fx_supervisor_rate,
            assist_fx_quantity, assist_fx_units_number,
            assist_fx_units_name, assist_fx_rate,
            other_fx_labour_quantity, other_fx_labour_units_number,
            other_fx_labour_units_name, other_fx_labour_rate,});
        setFxlabourTotal(fxlabour_total);
        // wardrobe
        const {train_qty_prep, train_uno_prep, train_una_prep, train_rt_prep, 
          train_qty, train_uno, train_una, train_rt,
          train_qty_wrap, train_uno_wrap, train_una_wrap, train_rt_wrap, 
          day_war_qty, day_war_uno, day_war_una, day_war_rt,
          war_coor_qty, war_coor_uno, war_coor_una, war_coor_rt,
          war_coor_qty_prep, war_coor_uno_prep, war_coor_una_prep, war_coor_rt_prep,
          war_coor_qty_wrap, war_coor_uno_wrap, war_coor_una_wrap, war_coor_rt_wrap,
          days6th7th_unit_war, days6th7th_war, overtime_unit_war, overtime_war,
          holidays_unit_war, holidays_war, box_rent_unit_war, box_rent_war, other_solo_war,
          cos_des_qty_prep, cos_des_uno_prep, cos_des_una_prep, cos_des_rt_prep,
          cos_des_qty_wrap, cos_des_uno_wrap, cos_des_una_wrap, cos_des_rt_wrap,
          as_cos_des_qty_prep, as_cos_des_uno_prep, as_cos_des_una_prep, as_cos_des_rt_prep,
          as_cos_des_qty_wrap, as_cos_des_uno_wrap, as_cos_des_una_wrap, as_cos_des_rt_wrap,
          he_war_qty_prep, he_war_uno_prep, he_war_una_prep, he_war_rt_prep,
          he_war_qty_wrap, he_war_uno_wrap, he_war_una_wrap, he_war_rt_wrap,
          war_as_qty_prep, war_as_uno_prep, war_as_una_prep, war_as_rt_prep, 
          war_as_qty_wrap, war_as_uno_wrap, war_as_una_wrap, war_as_rt_wrap,
          tru_cos_qty_prep, tru_cos_uno_prep, tru_cos_una_prep, tru_cos_rt_prep,
          tru_cos_qty_wrap, tru_cos_uno_wrap, tru_cos_una_wrap, tru_cos_rt_wrap,
          ot_war_qty_prep, ot_war_uno_prep, ot_war_una_prep, ot_war_rt_prep,
          ot_war_qty_wrap, ot_war_uno_wrap, ot_war_una_wrap, ot_war_rt_wrap,
          shopper_qty, shopper_uno, shopper_una, shopper_rt,
          shopper_qty_prep, shopper_uno_prep, shopper_una_prep, shopper_rt_prep,
          tailors, textile_ar, cos_coor,
          fringes_taxes_wardrobe,
          costume_designer_quantity, costume_designer_units_number,
          costume_designer_units_name, costume_designer_rate,
          assist_costume_designer_quantity, assist_costume_designer_units_number,
          assist_costume_designer_units_name, assist_costume_designer_rate,
          head_wardrobe_quantity, head_wardrobe_units_number,
          head_wardrobe_units_name, head_wardrobe_rate,
          wardrobe_assist_quantity, wardrobe_assist_units_number,
          wardrobe_assist_units_name, wardrobe_assist_rate,
          truck_costumer_quantity, truck_costumer_units_number,
          truck_costumer_units_name, truck_costumer_rate,
          other_wardrobe_labour_quantity, other_wardrobe_labour_units_number,
          other_wardrobe_labour_units_name, other_wardrobe_labour_rate,
          wardrobelabour_total} = data.results[0];
        setPostDataWardrobe({train_qty_prep, train_uno_prep, train_una_prep, 
          train_rt_prep, train_qty, train_uno, train_una, train_rt,
          train_qty_wrap, train_uno_wrap, train_una_wrap, train_rt_wrap, 
          day_war_qty, day_war_uno, day_war_una, day_war_rt,
          war_coor_qty, war_coor_uno, war_coor_una, war_coor_rt,
          war_coor_qty_prep, war_coor_uno_prep, war_coor_una_prep, war_coor_rt_prep,
          war_coor_qty_wrap, war_coor_uno_wrap, war_coor_una_wrap, war_coor_rt_wrap,
          days6th7th_unit_war, days6th7th_war, overtime_unit_war, overtime_war,
          holidays_unit_war, holidays_war, box_rent_unit_war, box_rent_war, other_solo_war,
          cos_des_qty_prep, cos_des_uno_prep, cos_des_una_prep, cos_des_rt_prep,
          cos_des_qty_wrap, cos_des_uno_wrap, cos_des_una_wrap, cos_des_rt_wrap,
          as_cos_des_qty_prep, as_cos_des_uno_prep, as_cos_des_una_prep, as_cos_des_rt_prep,
          as_cos_des_qty_wrap, as_cos_des_uno_wrap, as_cos_des_una_wrap, as_cos_des_rt_wrap,
          he_war_qty_prep, he_war_uno_prep, he_war_una_prep, he_war_rt_prep,
          he_war_qty_wrap, he_war_uno_wrap, he_war_una_wrap, he_war_rt_wrap,
          war_as_qty_prep, war_as_uno_prep, war_as_una_prep, war_as_rt_prep, 
          war_as_qty_wrap, war_as_uno_wrap, war_as_una_wrap, war_as_rt_wrap,
          tru_cos_qty_prep, tru_cos_uno_prep, tru_cos_una_prep, tru_cos_rt_prep,
          tru_cos_qty_wrap, tru_cos_uno_wrap, tru_cos_una_wrap, tru_cos_rt_wrap,
          ot_war_qty_prep, ot_war_uno_prep, ot_war_una_prep, ot_war_rt_prep,
          ot_war_qty_wrap, ot_war_uno_wrap, ot_war_una_wrap, ot_war_rt_wrap,
          shopper_qty, shopper_uno, shopper_una, shopper_rt,
          shopper_qty_prep, shopper_uno_prep, shopper_una_prep, shopper_rt_prep,
          tailors, textile_ar, cos_coor,
          fringes_taxes_wardrobe,
          costume_designer_quantity, costume_designer_units_number,
          costume_designer_units_name, costume_designer_rate,
          assist_costume_designer_quantity, assist_costume_designer_units_number,
          assist_costume_designer_units_name, assist_costume_designer_rate,
          head_wardrobe_quantity, head_wardrobe_units_number,
          head_wardrobe_units_name, head_wardrobe_rate,
          wardrobe_assist_quantity, wardrobe_assist_units_number,
          wardrobe_assist_units_name, wardrobe_assist_rate,
          truck_costumer_quantity, truck_costumer_units_number,
          truck_costumer_units_name, truck_costumer_rate,
          other_wardrobe_labour_quantity, other_wardrobe_labour_units_number,
          other_wardrobe_labour_units_name, other_wardrobe_labour_rate,});
        setWardrobelabourTotal(wardrobelabour_total);
        // makeup
        const {days6th7th_unit_mak, days6th7th_mak, overtime_unit_mak, overtime_mak,
          holidays_unit_mak, holidays_mak, box_rent_unit_mak, box_rent_mak, other_solo_mak,
          mak_head_qty_prep, mak_head_uno_prep, mak_head_una_prep, mak_head_rt_prep,
          mak_head_qty_wrap, mak_head_uno_wrap, mak_head_una_wrap, mak_head_rt_wrap,
          key_mak_qty_prep, key_mak_uno_prep, key_mak_una_prep, key_mak_rt_prep,
          key_mak_qty_wrap, key_mak_uno_wrap, key_mak_una_wrap, key_mak_rt_wrap,
          mak_art_qty_prep, mak_art_uno_prep, mak_art_una_prep, mak_art_rt_prep, 
          mak_art_qty_wrap, mak_art_uno_wrap, mak_art_una_wrap, mak_art_rt_wrap,
          key_hair_qty_prep, key_hair_uno_prep, key_hair_una_prep, key_hair_rt_prep,
          key_hair_qty_wrap, key_hair_uno_wrap, key_hair_una_wrap, key_hair_rt_wrap,
          hair_qty_prep, hair_uno_prep, hair_una_prep, hair_rt_prep,
          hair_qty_wrap, hair_uno_wrap, hair_una_wrap, hair_rt_wrap,
          oth_mak_qty_prep, oth_mak_uno_prep, oth_mak_una_prep, oth_mak_rt_prep,
          oth_mak_qty_wrap, oth_mak_uno_wrap, oth_mak_una_wrap, oth_mak_rt_wrap,
          sfx_mak_qty_prep, sfx_mak_uno_prep, sfx_mak_una_prep, sfx_mak_rt_prep,
          sfx_mak_qty_wrap, sfx_mak_uno_wrap, sfx_mak_una_wrap, sfx_mak_rt_wrap,
          mak_train_qty, mak_train_uno, mak_train_una, mak_train_rt,
          mak_train_qty_prep, mak_train_uno_prep, mak_train_una_prep, mak_train_rt_prep,
          mak_train_qty_wrap, mak_train_uno_wrap, mak_train_una_wrap, mak_train_rt_wrap,
          fringes_taxes_makeup,
          makeup_dept_head_quantity, makeup_dept_head_units_number,
          makeup_dept_head_units_name, makeup_dept_head_rate,
          key_makeup_quantity, key_makeup_units_number,
          key_makeup_units_name, key_makeup_rate,
          makeup_artist_quantity, makeup_artist_units_number,
          makeup_artist_units_name, makeup_artist_rate,
          key_hairstylist_quantity, key_hairstylist_units_number,
          key_hairstylist_units_name, key_hairstylist_rate,
          hairdresser_quantity, hairdresser_units_number,
          hairdresser_units_name, hairdresser_rate,
          hair_makeup_dailies_quantity, hair_makeup_dailies_units_number,
          hair_makeup_dailies_units_name, hair_makeup_dailies_rate,
          other_makeup_labour_quantity, other_makeup_labour_units_number,
          other_makeup_labour_units_name, other_makeup_labour_rate,
          sfx_makeup_quantity, sfx_makeup_units_number,
          sfx_makeup_units_name, sfx_makeup_rate,
          makeuplabour_total} = data.results[0];
        setPostDataMakeup({fringes_taxes_makeup,
          days6th7th_unit_mak, days6th7th_mak, overtime_unit_mak, overtime_mak,
          holidays_unit_mak, holidays_mak, box_rent_unit_mak, box_rent_mak, other_solo_mak,
          mak_head_qty_prep, mak_head_uno_prep, mak_head_una_prep, mak_head_rt_prep,
          mak_head_qty_wrap, mak_head_uno_wrap, mak_head_una_wrap, mak_head_rt_wrap,
          key_mak_qty_prep, key_mak_uno_prep, key_mak_una_prep, key_mak_rt_prep,
          key_mak_qty_wrap, key_mak_uno_wrap, key_mak_una_wrap, key_mak_rt_wrap,
          mak_art_qty_prep, mak_art_uno_prep, mak_art_una_prep, mak_art_rt_prep, 
          mak_art_qty_wrap, mak_art_uno_wrap, mak_art_una_wrap, mak_art_rt_wrap,
          key_hair_qty_prep, key_hair_uno_prep, key_hair_una_prep, key_hair_rt_prep,
          key_hair_qty_wrap, key_hair_uno_wrap, key_hair_una_wrap, key_hair_rt_wrap,
          hair_qty_prep, hair_uno_prep, hair_una_prep, hair_rt_prep,
          hair_qty_wrap, hair_uno_wrap, hair_una_wrap, hair_rt_wrap,
          oth_mak_qty_prep, oth_mak_uno_prep, oth_mak_una_prep, oth_mak_rt_prep,
          oth_mak_qty_wrap, oth_mak_uno_wrap, oth_mak_una_wrap, oth_mak_rt_wrap,
          sfx_mak_qty_prep, sfx_mak_uno_prep, sfx_mak_una_prep, sfx_mak_rt_prep,
          sfx_mak_qty_wrap, sfx_mak_uno_wrap, sfx_mak_una_wrap, sfx_mak_rt_wrap,
          mak_train_qty, mak_train_uno, mak_train_una, mak_train_rt,
          mak_train_qty_prep, mak_train_uno_prep, mak_train_una_prep, mak_train_rt_prep,
          mak_train_qty_wrap, mak_train_uno_wrap, mak_train_una_wrap, mak_train_rt_wrap,
            makeup_dept_head_quantity, makeup_dept_head_units_number,
            makeup_dept_head_units_name, makeup_dept_head_rate,
            key_makeup_quantity, key_makeup_units_number,
            key_makeup_units_name, key_makeup_rate,
            makeup_artist_quantity, makeup_artist_units_number,
            makeup_artist_units_name, makeup_artist_rate,
            key_hairstylist_quantity, key_hairstylist_units_number,
            key_hairstylist_units_name, key_hairstylist_rate,
            hairdresser_quantity, hairdresser_units_number,
            hairdresser_units_name, hairdresser_rate,
            hair_makeup_dailies_quantity, hair_makeup_dailies_units_number,
            hair_makeup_dailies_units_name, hair_makeup_dailies_rate,
            other_makeup_labour_quantity, other_makeup_labour_units_number,
            other_makeup_labour_units_name, other_makeup_labour_rate,
            sfx_makeup_quantity, sfx_makeup_units_number,
            sfx_makeup_units_name, sfx_makeup_rate,});
        setMakeuplabourTotal(makeuplabour_total);
        // camera
        const {days6th7th_unit_cam, days6th7th_cam,
          overtime_unit_cam, overtime_cam, holidays_unit_cam, 
          holidays_cam, box_rent_unit_cam, box_rent_cam, other_solo_cam,
          dop_qty_prep, dop_uno_prep, dop_una_prep, dop_rt_prep,
          dop_qty_wrap, dop_uno_wrap, dop_una_wrap, dop_rt_wrap,
          cam_op_qty_prep, cam_op_uno_prep, cam_op_una_prep, cam_op_rt_prep,
          cam_op_qty_wrap, cam_op_uno_wrap, cam_op_una_wrap, cam_op_rt_wrap,
          cam_ac1_qty_prep, cam_ac1_uno_prep, cam_ac1_una_prep, cam_ac1_rt_prep,
          cam_ac1_qty_wrap, cam_ac1_uno_wrap, cam_ac1_una_wrap, cam_ac1_rt_wrap,
          cam_ac2_qty_prep, cam_ac2_uno_prep, cam_ac2_una_prep, cam_ac2_rt_prep,
          cam_ac2_qty_wrap, cam_ac2_uno_wrap, cam_ac2_una_wrap, cam_ac2_rt_wrap,
          dit_qty_prep, dit_uno_prep, dit_una_prep, dit_rt_prep, 
          dit_qty_wrap, dit_uno_wrap, dit_una_wrap, dit_rt_wrap,
          stead_qty_prep, stead_uno_prep, stead_una_prep, stead_rt_prep,
          stead_qty_wrap, stead_uno_wrap, stead_una_wrap, stead_rt_wrap,
          cam_pa_qty_prep, cam_pa_uno_prep, cam_pa_una_prep, cam_pa_rt_prep,
          cam_pa_qty_wrap, cam_pa_uno_wrap, cam_pa_una_wrap, cam_pa_rt_wrap,
          dro_pil_qty_prep, dro_pil_uno_prep, dro_pil_una_prep, dro_pil_rt_prep,
          dro_pil_qty_wrap, dro_pil_uno_wrap, dro_pil_una_wrap, dro_pil_rt_wrap,
          ot_cam_qty_prep, ot_cam_uno_prep, ot_cam_una_prep, ot_cam_rt_prep,
          ot_cam_qty_wrap, ot_cam_uno_wrap, ot_cam_una_wrap, ot_cam_rt_wrap,
          fringes_taxes_camera, dop_qty, dop_uno, dop_una, dop_rt,
          camera_op_qty, camera_op_uno, camera_op_una, camera_op_rt,
          cam_ac1_qty, cam_ac1_uno, cam_ac1_una, cam_ac1_rt,
          cam_ac2_qty, cam_ac2_uno, cam_ac2_una, cam_ac2_rt,
          dit_qty, dit_uno, dit_una, dit_rt,
          steadicam_qty, steadicam_uno, steadicam_una, steadicam_rt,
          cam_pa_qty, cam_pa_uno, cam_pa_una, cam_pa_rt, 
          drone_pilot_qty, drone_pilot_uno, drone_pilot_una, drone_pilot_rt,
          other_cam_qty, other_cam_uno, cameralabour_total,
          stills_qty, stills_uno, stills_una, stills_rt,
          other_cam_una, other_cam_rt,} = data.results[0];
        setPostDataCamera({days6th7th_unit_cam, days6th7th_cam,
          overtime_unit_cam, overtime_cam, holidays_unit_cam, 
          holidays_cam, box_rent_unit_cam, box_rent_cam, other_solo_cam,
          dop_qty_prep, dop_uno_prep, dop_una_prep, dop_rt_prep,
          dop_qty_wrap, dop_uno_wrap, dop_una_wrap, dop_rt_wrap,
          cam_op_qty_prep, cam_op_uno_prep, cam_op_una_prep, cam_op_rt_prep,
          cam_op_qty_wrap, cam_op_uno_wrap, cam_op_una_wrap, cam_op_rt_wrap,
          cam_ac1_qty_prep, cam_ac1_uno_prep, cam_ac1_una_prep, cam_ac1_rt_prep,
          cam_ac1_qty_wrap, cam_ac1_uno_wrap, cam_ac1_una_wrap, cam_ac1_rt_wrap,
          cam_ac2_qty_prep, cam_ac2_uno_prep, cam_ac2_una_prep, cam_ac2_rt_prep,
          cam_ac2_qty_wrap, cam_ac2_uno_wrap, cam_ac2_una_wrap, cam_ac2_rt_wrap,
          dit_qty_prep, dit_uno_prep, dit_una_prep, dit_rt_prep, 
          dit_qty_wrap, dit_uno_wrap, dit_una_wrap, dit_rt_wrap,
          stead_qty_prep, stead_uno_prep, stead_una_prep, stead_rt_prep,
          stead_qty_wrap, stead_uno_wrap, stead_una_wrap, stead_rt_wrap,
          cam_pa_qty_prep, cam_pa_uno_prep, cam_pa_una_prep, cam_pa_rt_prep,
          cam_pa_qty_wrap, cam_pa_uno_wrap, cam_pa_una_wrap, cam_pa_rt_wrap,
          dro_pil_qty_prep, dro_pil_uno_prep, dro_pil_una_prep, dro_pil_rt_prep,
          dro_pil_qty_wrap, dro_pil_uno_wrap, dro_pil_una_wrap, dro_pil_rt_wrap,
          ot_cam_qty_prep, ot_cam_uno_prep, ot_cam_una_prep, ot_cam_rt_prep,
          ot_cam_qty_wrap, ot_cam_uno_wrap, ot_cam_una_wrap, ot_cam_rt_wrap,
          fringes_taxes_camera, dop_qty, dop_uno, dop_una, dop_rt,
          camera_op_qty, camera_op_uno, camera_op_una, camera_op_rt,
          cam_ac1_qty, cam_ac1_uno, cam_ac1_una, cam_ac1_rt,
          cam_ac2_qty, cam_ac2_uno, cam_ac2_una, cam_ac2_rt,
          dit_qty, dit_uno, dit_una, dit_rt,
          steadicam_qty, steadicam_uno, steadicam_una, steadicam_rt,
          cam_pa_qty, cam_pa_uno, cam_pa_una, cam_pa_rt, 
          drone_pilot_qty, drone_pilot_uno, drone_pilot_una, drone_pilot_rt,
          stills_qty, stills_uno, stills_una, stills_rt,
          other_cam_qty, other_cam_uno, other_cam_una, other_cam_rt,});
        setCameralabourTotal(cameralabour_total);
        // electric
        const {days6th7th_unit_ele,days6th7th_ele,
          overtime_unit_ele, overtime_ele, holidays_unit_ele, 
          holidays_ele, box_rent_unit_ele, box_rent_ele, other_solo_ele,
          gaf_qty_prep, gaf_uno_prep, gaf_una_prep, gaf_rt_prep, 
          gaf_qty_wrap, gaf_uno_wrap, gaf_una_wrap, gaf_rt_wrap,
          b_boy_qty_prep, b_boy_uno_prep, b_boy_una_prep, b_boy_rt_prep,
          b_boy_qty_wrap, b_boy_uno_wrap, b_boy_una_wrap, b_boy_rt_wrap,
          elec_qty_prep, elec_uno_prep, elec_una_prep, elec_rt_prep,
          elec_qty_wrap, elec_uno_wrap, elec_una_wrap, elec_rt_wrap,
          d_elec_qty_prep, d_elec_uno_prep, d_elec_una_prep, d_elec_rt_prep,
          d_elec_qty_wrap, d_elec_uno_wrap, d_elec_una_wrap, d_elec_rt_wrap,
          gen_op_qty_prep, gen_op_uno_prep, gen_op_una_prep, gen_op_rt_prep,
          gen_op_qty_wrap, gen_op_uno_wrap, gen_op_una_wrap, gen_op_rt_wrap,
          ot_el_qty_prep, ot_el_uno_prep, ot_el_una_prep, ot_el_rt_prep,
          ot_el_qty_wrap, ot_el_uno_wrap, ot_el_una_wrap, ot_el_rt_wrap,
          fringes_taxes_electric,
          gaffer_qty, gaffer_uno, gaffer_una, gaffer_rt,
          best_boy_qty, best_boy_uno, best_boy_una, best_boy_rt,
          electrician_qty, electrician_uno, electrician_una, electrician_rt,
          dailies_elec_qty, dailies_elec_uno, dailies_elec_una, dailies_elec_rt,
          generator_op_qty, generator_op_uno, generator_op_una, generator_op_rt,
          other_elec_qty, other_elec_uno, other_elec_una, other_elec_rt,
          electriclabour_total,} = data.results[0];
        setPostDataElectric({fringes_taxes_electric,
          days6th7th_unit_ele,days6th7th_ele,
          overtime_unit_ele, overtime_ele, holidays_unit_ele, 
          holidays_ele, box_rent_unit_ele, box_rent_ele, other_solo_ele,
          gaf_qty_prep, gaf_uno_prep, gaf_una_prep, gaf_rt_prep, 
          gaf_qty_wrap, gaf_uno_wrap, gaf_una_wrap, gaf_rt_wrap,
          b_boy_qty_prep, b_boy_uno_prep, b_boy_una_prep, b_boy_rt_prep,
          b_boy_qty_wrap, b_boy_uno_wrap, b_boy_una_wrap, b_boy_rt_wrap,
          elec_qty_prep, elec_uno_prep, elec_una_prep, elec_rt_prep,
          elec_qty_wrap, elec_uno_wrap, elec_una_wrap, elec_rt_wrap,
          d_elec_qty_prep, d_elec_uno_prep, d_elec_una_prep, d_elec_rt_prep,
          d_elec_qty_wrap, d_elec_uno_wrap, d_elec_una_wrap, d_elec_rt_wrap,
          gen_op_qty_prep, gen_op_uno_prep, gen_op_una_prep, gen_op_rt_prep,
          gen_op_qty_wrap, gen_op_uno_wrap, gen_op_una_wrap, gen_op_rt_wrap,
          ot_el_qty_prep, ot_el_uno_prep, ot_el_una_prep, ot_el_rt_prep,
          ot_el_qty_wrap, ot_el_uno_wrap, ot_el_una_wrap, ot_el_rt_wrap,
          gaffer_qty, gaffer_uno, gaffer_una, gaffer_rt,
          best_boy_qty, best_boy_uno, best_boy_una, best_boy_rt,
          electrician_qty, electrician_uno, electrician_una, electrician_rt,
          dailies_elec_qty, dailies_elec_uno, dailies_elec_una, dailies_elec_rt,
          generator_op_qty, generator_op_uno, generator_op_una, generator_op_rt,
          other_elec_qty, other_elec_uno, other_elec_una, other_elec_rt,})
        setElectriclabourTotal(electriclabour_total);
        const {fringes_taxes_grip,
          days6th7th_unit_grip, days6th7th_grip, overtime_unit_grip,
          overtime_grip, holidays_unit_grip, 
          holidays_grip, box_rent_unit_grip, box_rent_grip, other_solo_grip,
          k_grip_qty_prep, k_grip_uno_prep, k_grip_una_prep, k_grip_rt_prep,
          k_grip_qty_wrap, k_grip_uno_wrap, k_grip_una_wrap, k_grip_rt_wrap, 
          bb_grip_qty_prep, bb_grip_uno_prep, bb_grip_una_prep, bb_grip_rt_prep,
          bb_grip_qty_wrap, bb_grip_uno_wrap, bb_grip_una_wrap, bb_grip_rt_wrap,
          grips_qty_prep, grips_uno_prep, grips_una_prep, grips_rt_prep,
          grips_qty_wrap, grips_uno_wrap, grips_una_wrap, grips_rt_wrap,
          dol_grip_qty_prep, dol_grip_uno_prep, dol_grip_una_prep, dol_grip_rt_prep,
          dol_grip_qty_wrap, dol_grip_uno_wrap, dol_grip_una_wrap, dol_grip_rt_wrap,
          sw_grips_qty_prep, sw_grips_uno_prep, sw_grips_una_prep, sw_grips_rt_prep,
          sw_grips_qty_wrap, sw_grips_uno_wrap, sw_grips_una_wrap, sw_grips_rt_wrap,
          oth_grip_qty_prep, oth_grip_uno_prep, oth_grip_una_prep, oth_grip_rt_prep,
          oth_grip_qty_wrap, oth_grip_uno_wrap, oth_grip_una_wrap, oth_grip_rt_wrap,
          key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
          best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_una, best_boy_grip_rt,
          grips_qty, grips_uno, grips_una, grips_rt,
          dailies_grip_qty, dailies_grip_uno, dailies_grip_una, dailies_grip_rt, 
          dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_una, dolly_crane_grip_rt,
          swing_grips_qty, swing_grips_uno, swing_grips_una, swing_grips_rt,
          other_grip_labour_qty, other_grip_labour_uno, griplabour_total,
          other_grip_labour_una, other_grip_labour_rt,} = data.results[0];
        setPostDataGrip({fringes_taxes_grip,
          days6th7th_unit_grip, days6th7th_grip, overtime_unit_grip,
          overtime_grip, holidays_unit_grip, 
          holidays_grip, box_rent_unit_grip, box_rent_grip, other_solo_grip,
          k_grip_qty_prep, k_grip_uno_prep, k_grip_una_prep, k_grip_rt_prep,
          k_grip_qty_wrap, k_grip_uno_wrap, k_grip_una_wrap, k_grip_rt_wrap, 
          bb_grip_qty_prep, bb_grip_uno_prep, bb_grip_una_prep, bb_grip_rt_prep,
          bb_grip_qty_wrap, bb_grip_uno_wrap, bb_grip_una_wrap, bb_grip_rt_wrap,
          grips_qty_prep, grips_uno_prep, grips_una_prep, grips_rt_prep,
          grips_qty_wrap, grips_uno_wrap, grips_una_wrap, grips_rt_wrap,
          dol_grip_qty_prep, dol_grip_uno_prep, dol_grip_una_prep, dol_grip_rt_prep,
          dol_grip_qty_wrap, dol_grip_uno_wrap, dol_grip_una_wrap, dol_grip_rt_wrap,
          sw_grips_qty_prep, sw_grips_uno_prep, sw_grips_una_prep, sw_grips_rt_prep,
          sw_grips_qty_wrap, sw_grips_uno_wrap, sw_grips_una_wrap, sw_grips_rt_wrap,
          oth_grip_qty_prep, oth_grip_uno_prep, oth_grip_una_prep, oth_grip_rt_prep,
          oth_grip_qty_wrap, oth_grip_uno_wrap, oth_grip_una_wrap, oth_grip_rt_wrap,
          key_grip_qty, key_grip_uno, key_grip_una, key_grip_rt,
          best_boy_grip_qty, best_boy_grip_uno, best_boy_grip_una, best_boy_grip_rt,
          grips_qty, grips_uno, grips_una, grips_rt,
          dailies_grip_qty, dailies_grip_uno, dailies_grip_una, dailies_grip_rt, 
          dolly_crane_grip_qty, dolly_crane_grip_uno, dolly_crane_grip_una, dolly_crane_grip_rt,
          swing_grips_qty, swing_grips_uno, swing_grips_una, swing_grips_rt,
          other_grip_labour_qty, other_grip_labour_uno, 
          other_grip_labour_una, other_grip_labour_rt,});
        setGriplabourTotal(griplabour_total);
        const {fringes_taxes_sound,
          days6th7th_unit_sound, days6th7th_sound, 
          overtime_unit_sound, overtime_sound, holidays_unit_sound, holidays_sound,
          box_rent_unit_sound, box_rent_sound, other_solo_sound,
          so_mix_qty_prep, so_mix_uno_prep, so_mix_una_prep, so_mix_rt_prep,
          so_mix_qty_wrap, so_mix_uno_wrap, so_mix_una_wrap, so_mix_rt_wrap,
          boom_op_qty_prep, boom_op_uno_prep, boom_op_una_prep, boom_op_rt_prep,
          boom_op_qty_wrap, boom_op_uno_wrap, boom_op_una_wrap, boom_op_rt_wrap,
          cab_wran_qty_prep, cab_wran_uno_prep, cab_wran_una_prep, cab_wran_rt_prep,
          cab_wran_qty_wrap, cab_wran_uno_wrap, cab_wran_una_wrap, cab_wran_rt_wrap,
          ot_sound_qty_prep, ot_sound_uno_prep, ot_sound_una_prep, ot_sound_rt_prep,
          ot_sound_qty_wrap, ot_sound_uno_wrap, ot_sound_una_wrap, ot_sound_rt_wrap,
          sound_mixer_qty, sound_mixer_uno,
          sound_mixer_una, sound_mixer_rt,
          boom_operator_qty, boom_operator_uno,
          boom_operator_una, boom_operator_rt,
          cable_wrangler_qty, cable_wrangler_uno,
          cable_wrangler_una, cable_wrangler_rt,
          other_sound_labour_qty, other_sound_labour_uno, soundlabour_total,
          other_sound_labour_una, other_sound_labour_rt,} = data.results[0];
        setPostDataSoundPro({fringes_taxes_sound,
          days6th7th_unit_sound, days6th7th_sound, 
          overtime_unit_sound, overtime_sound, holidays_unit_sound, holidays_sound,
          box_rent_unit_sound, box_rent_sound, other_solo_sound,
          so_mix_qty_prep, so_mix_uno_prep, so_mix_una_prep, so_mix_rt_prep,
          so_mix_qty_wrap, so_mix_uno_wrap, so_mix_una_wrap, so_mix_rt_wrap,
          boom_op_qty_prep, boom_op_uno_prep, boom_op_una_prep, boom_op_rt_prep,
          boom_op_qty_wrap, boom_op_uno_wrap, boom_op_una_wrap, boom_op_rt_wrap,
          cab_wran_qty_prep, cab_wran_uno_prep, cab_wran_una_prep, cab_wran_rt_prep,
          cab_wran_qty_wrap, cab_wran_uno_wrap, cab_wran_una_wrap, cab_wran_rt_wrap,
          ot_sound_qty_prep, ot_sound_uno_prep, ot_sound_una_prep, ot_sound_rt_prep,
          ot_sound_qty_wrap, ot_sound_uno_wrap, ot_sound_una_wrap, ot_sound_rt_wrap,
          sound_mixer_qty, sound_mixer_uno,
          sound_mixer_una, sound_mixer_rt,
          boom_operator_qty, boom_operator_uno,
          boom_operator_una, boom_operator_rt,
          cable_wrangler_qty, cable_wrangler_uno,
          cable_wrangler_una, cable_wrangler_rt,
          other_sound_labour_qty, other_sound_labour_uno,
          other_sound_labour_una, other_sound_labour_rt,});
        setSoundlabourTotal(soundlabour_total);
            } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  // USE EFFECT EDIT 3
  // Fetch budget3 for edit pre-filled values
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/budgets3/?project=${id}`);
        // console.log(data.results[0]);
        setBudgetId3(data.results[0].id);
        // budget number
        const {budget_number} = data.results[0];
        setBudgetNumber3(budget_number);
        const {fringes_taxes_transport, days6th7th_unit_tran, days6th7th_tran,
          overtime_unit_tran, overtime_tran, holidays_unit_tran, holidays_tran,
          box_rent_unit_tran, box_rent_tran, other_solo_tran,
          tp_coor_qty_prep, tp_coor_uno_prep, tp_coor_una_prep, tp_coor_rt_prep,
          tp_coor_qty_wrap, tp_coor_uno_wrap, tp_coor_una_wrap, tp_coor_rt_wrap,
          tp_cap_qty_prep, tp_cap_uno_prep, tp_cap_una_prep, tp_cap_rt_prep,
          tp_cap_qty_wrap, tp_cap_uno_wrap, tp_cap_una_wrap, tp_cap_rt_wrap,
          tp_man_qty_prep, tp_man_uno_prep, tp_man_una_prep, tp_man_rt_prep,
          tp_man_qty_wrap, tp_man_uno_wrap, tp_man_una_wrap, tp_man_rt_wrap,
          head_dr_qty_prep, head_dr_uno_prep, head_dr_una_prep, head_dr_rt_prep,
          head_dr_qty_wrap, head_dr_uno_wrap, head_dr_una_wrap, head_dr_rt_wrap,
          drive_qty_prep, drive_uno_prep, drive_una_prep, drive_rt_prep,
          drive_qty_wrap, drive_uno_wrap, drive_una_wrap, drive_rt_wrap,
          tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_una, tp_coordinator_rt,
          tp_captain_qty,tp_captain_uno, tp_captain_una, tp_captain_rt,
          tp_manager_qty, tp_manager_uno, tp_manager_una, tp_manager_rt,
          head_driver_qty, head_driver_uno, head_driver_una, head_driver_rt,
          drivers_qty, drivers_uno, drivers_una, drivers_rt,
          transportlabour_total,} = data.results[0];
        setPostDataTransport({fringes_taxes_transport,
          days6th7th_unit_tran, days6th7th_tran,
          overtime_unit_tran, overtime_tran, holidays_unit_tran, holidays_tran,
          box_rent_unit_tran, box_rent_tran, other_solo_tran,
          tp_coor_qty_prep, tp_coor_uno_prep, tp_coor_una_prep, tp_coor_rt_prep,
          tp_coor_qty_wrap, tp_coor_uno_wrap, tp_coor_una_wrap, tp_coor_rt_wrap,
          tp_cap_qty_prep, tp_cap_uno_prep, tp_cap_una_prep, tp_cap_rt_prep,
          tp_cap_qty_wrap, tp_cap_uno_wrap, tp_cap_una_wrap, tp_cap_rt_wrap,
          tp_man_qty_prep, tp_man_uno_prep, tp_man_una_prep, tp_man_rt_prep,
          tp_man_qty_wrap, tp_man_uno_wrap, tp_man_una_wrap, tp_man_rt_wrap,
          head_dr_qty_prep, head_dr_uno_prep, head_dr_una_prep, head_dr_rt_prep,
          head_dr_qty_wrap, head_dr_uno_wrap, head_dr_una_wrap, head_dr_rt_wrap,
          drive_qty_prep, drive_uno_prep, drive_una_prep, drive_rt_prep,
          drive_qty_wrap, drive_uno_wrap, drive_una_wrap, drive_rt_wrap,
          tp_coordinator_qty, tp_coordinator_uno, tp_coordinator_una, tp_coordinator_rt,
          tp_captain_qty,tp_captain_uno, tp_captain_una, tp_captain_rt,
          tp_manager_qty, tp_manager_uno, tp_manager_una, tp_manager_rt,
          head_driver_qty, head_driver_uno, head_driver_una, head_driver_rt,
          drivers_qty, drivers_uno, drivers_una, drivers_rt,});
        setTransportlabourTotal(transportlabour_total);
        const {fringes_taxes_tv, days6th7th_unit_tv, days6th7th_tv, 
          overtime_unit_tv, overtime_tv, holidays_unit_tv, 
          holidays_tv, box_rent_unit_tv, box_rent_tv, other_solo_tv,
          tec_sup_qty_prep, tec_sup_uno_prep, tec_sup_una_prep, tec_sup_rt_prep,
          tec_sup_qty_wrap, tec_sup_uno_wrap, tec_sup_una_wrap, tec_sup_rt_wrap,
          tec_dir_qty_prep, tec_dir_uno_prep, tec_dir_una_prep, tec_dir_rt_prep,
          tec_dir_qty_wrap, tec_dir_uno_wrap, tec_dir_una_wrap, tec_dir_rt_wrap,
          flo_man_qty_prep, flo_man_uno_prep, flo_man_una_prep, flo_man_rt_prep,
          flo_man_qty_wrap, flo_man_uno_wrap, flo_man_una_wrap, flo_man_rt_wrap,
          lig_dir_qty_prep, lig_dir_uno_prep, lig_dir_una_prep, lig_dir_rt_prep,
          lig_dir_qty_wrap, lig_dir_uno_wrap, lig_dir_una_wrap, lig_dir_rt_wrap,
          boardm_qty_prep, boardm_uno_prep, boardm_una_prep, boardm_rt_prep,
          boardm_qty_wrap, boardm_uno_wrap, boardm_una_wrap, boardm_rt_wrap,
          audio_qty_prep, audio_uno_prep, audio_una_prep, audio_rt_prep,
          audio_qty_wrap, audio_uno_wrap, audio_una_wrap, audio_rt_wrap,
          vtr_op_qty_prep, vtr_op_uno_prep, vtr_op_una_prep, vtr_op_rt_prep,
          vtr_op_qty_wrap, vtr_op_uno_wrap, vtr_op_una_wrap, vtr_op_rt_wrap,
          stageh_qty_prep, stageh_uno_prep, stageh_una_prep, stageh_rt_prep,
          stageh_qty_wrap, stageh_uno_wrap, stageh_una_wrap, stageh_rt_wrap,
          oth_tv_qty_prep, oth_tv_uno_prep, oth_tv_una_prep, oth_tv_rt_prep,
          oth_tv_qty_wrap, oth_tv_uno_wrap, oth_tv_una_wrap, oth_tv_rt_wrap,
          tech_super_qty, tech_super_uno, tech_super_una, tech_super_rt,
          tech_direct_qty, tech_direct_uno, tech_direct_una, tech_direct_rt,
          floor_man_qty, floor_man_uno, floor_man_una, floor_man_rt, 
          light_direct_qty, light_direct_uno, light_direct_una, light_direct_rt,
          boardman_qty, boardman_uno, boardman_una, boardman_rt,
          audio_qty, audio_uno, audio_una, audio_rt,
          vtr_operator_qty, vtr_operator_uno, vtr_operator_una, vtr_operator_rt,
          stagehands_qty, stagehands_uno, stagehands_una, stagehands_rt,
          other_tv_qty, other_tv_uno, other_tv_una, other_tv_rt,
          tvspecificlabour_total,} = data.results[0];
        setPostDataTV({fringes_taxes_tv, days6th7th_unit_tv, days6th7th_tv, 
          overtime_unit_tv, overtime_tv, holidays_unit_tv, 
          holidays_tv, box_rent_unit_tv, box_rent_tv, other_solo_tv,
          tec_sup_qty_prep, tec_sup_uno_prep, tec_sup_una_prep, tec_sup_rt_prep,
          tec_sup_qty_wrap, tec_sup_uno_wrap, tec_sup_una_wrap, tec_sup_rt_wrap,
          tec_dir_qty_prep, tec_dir_uno_prep, tec_dir_una_prep, tec_dir_rt_prep,
          tec_dir_qty_wrap, tec_dir_uno_wrap, tec_dir_una_wrap, tec_dir_rt_wrap,
          flo_man_qty_prep, flo_man_uno_prep, flo_man_una_prep, flo_man_rt_prep,
          flo_man_qty_wrap, flo_man_uno_wrap, flo_man_una_wrap, flo_man_rt_wrap,
          lig_dir_qty_prep, lig_dir_uno_prep, lig_dir_una_prep, lig_dir_rt_prep,
          lig_dir_qty_wrap, lig_dir_uno_wrap, lig_dir_una_wrap, lig_dir_rt_wrap,
          boardm_qty_prep, boardm_uno_prep, boardm_una_prep, boardm_rt_prep,
          boardm_qty_wrap, boardm_uno_wrap, boardm_una_wrap, boardm_rt_wrap,
          audio_qty_prep, audio_uno_prep, audio_una_prep, audio_rt_prep,
          audio_qty_wrap, audio_uno_wrap, audio_una_wrap, audio_rt_wrap,
          vtr_op_qty_prep, vtr_op_uno_prep, vtr_op_una_prep, vtr_op_rt_prep,
          vtr_op_qty_wrap, vtr_op_uno_wrap, vtr_op_una_wrap, vtr_op_rt_wrap,
          stageh_qty_prep, stageh_uno_prep, stageh_una_prep, stageh_rt_prep,
          stageh_qty_wrap, stageh_uno_wrap, stageh_una_wrap, stageh_rt_wrap,
          oth_tv_qty_prep, oth_tv_uno_prep, oth_tv_una_prep, oth_tv_rt_prep,
          oth_tv_qty_wrap, oth_tv_uno_wrap, oth_tv_una_wrap, oth_tv_rt_wrap,
          tech_super_qty, tech_super_uno, tech_super_una, tech_super_rt,
          tech_direct_qty, tech_direct_uno, tech_direct_una, tech_direct_rt,
          floor_man_qty, floor_man_uno, floor_man_una, floor_man_rt, 
          light_direct_qty, light_direct_uno, light_direct_una, light_direct_rt,
          boardman_qty, boardman_uno, boardman_una, boardman_rt,
          audio_qty, audio_uno, audio_una, audio_rt,
          vtr_operator_qty, vtr_operator_uno, vtr_operator_una, vtr_operator_rt,
          stagehands_qty, stagehands_uno, stagehands_una, stagehands_rt,
          other_tv_qty, other_tv_uno, other_tv_una, other_tv_rt,});
        setTvspecificlabourTotal(tvspecificlabour_total);
        const {office_rentals, office_equipment, office_supplies,
          phones_net, courier_postage, office_other, 
        proOff_total} = data.results[0];
        setPostDataProOff({office_rentals, office_equipment, office_supplies,
          phones_net, courier_postage, office_other,});
        setProOffTotal(proOff_total);
        const {studio_rentals, power, carpentry_rentals, studio_total,
          studio_fx_equipment, studio_security, studio_other,} = data.results[0];
        setPostDataStudio({studio_rentals, power, carpentry_rentals,
          studio_fx_equipment, studio_security, studio_other,});
        setStudioTotal(studio_total);
        const {surveying_scouting, site_rentals, site_power, site_access,
          site_insurance, repairs_construction, site_security, site_other,
          police_control, site_total,} = data.results[0];
        setPostDataSite({surveying_scouting, site_rentals, site_power, site_access,
          site_insurance, repairs_construction, site_security, site_other,
          police_control,});
        setSiteTotal(site_total);
        const {catering, craft_expenses, meal_penalty,
          green_room, first_aid, outfitting,
          medical_insurance, unit_other, unit_total,} = data.results[0];
        setPostDataUnit({catering, craft_expenses, meal_penalty,
          green_room, first_aid, outfitting,
          medical_insurance, unit_other,});
        setUnitTotal(unit_total);
        const {fares, accomatation_hotels, per_diems, taxis_limos,
          shipping, other_trav_liv, customs_brokerage, traliv_total,} = data.results[0];
        setPostDataTraLiv({fares, accomatation_hotels, per_diems, taxis_limos,
          shipping, other_trav_liv, customs_brokerage,});
        setTralivTotal(traliv_total);
        const {production_cars, trucks_vans, buses, motorhomes, transport_total,
          talent_cars, support_vehicles, boats_planes, fuel, repairs, taxis,
          parking, licenses_permits, brokerage_insurance, other_transport,} = data.results[0];
        setPostDataTransportation({production_cars, trucks_vans, buses, motorhomes,
          talent_cars, support_vehicles, boats_planes, fuel, repairs, taxis,
          parking, licenses_permits, brokerage_insurance, other_transport,});
        setTransportTotal(transport_total);
        const {rentals_carpentry, carpentry_purchases, painting_rentals,
          painting_purchases, backdrops_murals, construction_other,
          scaffolding, warehouse_rental, constructionmat_total} = data.results[0];
        setPostDataConstructionMat({rentals_carpentry, carpentry_purchases, painting_rentals,
          painting_purchases, backdrops_murals, construction_other,
          scaffolding, warehouse_rental,});
        setConstructionMatTotal(constructionmat_total);
        const {drawing_supplies, drawing_equipment, tech, artSup_total,
          stock_prints_processing, blueprinting, other_art,} = data.results[0];
        setPostDataArtSup({drawing_supplies, drawing_equipment, tech,
          stock_prints_processing, blueprinting, other_art,});
        setArtSupTotal(artSup_total);
        const {dress_rentals, dress_purchases, dress_manufacture, dressing_total,
          dress_repairs_replacements, other_dressing,} = data.results[0];
        setPostDataDress({dress_rentals, dress_purchases, dress_manufacture,
          dress_repairs_replacements, other_dressing,});
        setDressingTotal(dressing_total);
        const {props_rentals, props_purchases, graphics_signs, props_total,
          props_repairs_replac, picture_vehicle_rentals, picture_vehicle_purchases,
          picture_vehicle_mods, picture_vehicle_ins, other_props,} = data.results[0];
        setPostDataProps({props_rentals, props_purchases, graphics_signs,
          props_repairs_replac, picture_vehicle_rentals, picture_vehicle_purchases,
          picture_vehicle_mods, picture_vehicle_ins, other_props,});
        setPropsTotal(props_total);
        const {fx_rentals, fx_purchases, stunts_purchases_rentals,
          armaments_permits_fees, other_fx, fx_total,} = data.results[0];
        setPostDataSpecEf({fx_rentals, fx_purchases, stunts_purchases_rentals,
          armaments_permits_fees, other_fx,});
        setFxTotal(fx_total);
        const {animals_rentals, animals_purchases, food_stabling,
          transport, vet, customs_broker, other_animals, animals_total,} = data.results[0];
        setPostDataAnimals({animals_rentals, animals_purchases, food_stabling,
          transport, vet, customs_broker, other_animals,});
        setAnimalsTotal(animals_total);
        const {wardrobe_rentals, wardrobe_purchases, ward_manufact,
          ward_ship_brok, ward_repairs_clean, other_ward, wardrobe_total} = data.results[0];
        setPostDataWardrobeSup({wardrobe_rentals, wardrobe_purchases, ward_manufact,
          ward_ship_brok, ward_repairs_clean, other_ward,});
        setWardrobeTotal(wardrobe_total);
        const {makeup_rentals, makeup_purchases, hair_rentals, makeup_total,
          hair_purchases, wigs, makeup_fx, makeup_ship_brok, other_makeup,} = data.results[0];
        setPostDataMakeupSup({makeup_rentals, makeup_purchases, hair_rentals,
          hair_purchases, wigs, makeup_fx, makeup_ship_brok, other_makeup,});
        setMakeupTotal(makeup_total);
        const {basic_package_rent_cam, daily_rentals_cam, other_camera,
          specialty_rent_cam, camera_purchases, steadicam, camera_total,
          video_teleprompter, camera_ship_brok, loss_damage_cam,} = data.results[0];
        setPostDataCameraEqu({basic_package_rent_cam, daily_rentals_cam, other_camera,
          specialty_rent_cam, camera_purchases, steadicam,
          video_teleprompter, camera_ship_brok, loss_damage_cam,});
        setCameraTotal(camera_total);
        const {basic_package_rent_elec, daily_rentals_elec,
          specialty_rent_elec, electric_purchases, electric_total,
          generators, loss_damage_elec, other_electric,} = data.results[0];
        setPostDataElectricEqu({basic_package_rent_elec, daily_rentals_elec,
          specialty_rent_elec, electric_purchases,
          generators, loss_damage_elec, other_electric,});
        setElectricTotal(electric_total);
        const {basic_package_rent_grip, daily_rentals_grip, grip_total,
          specialty_rent_grip, crane_rentals, scaffolding_grip,
          grip_purchases, loss_damage_grip, other_grip,} = data.results[0];
        setPostDataGripEqu({basic_package_rent_grip, daily_rentals_grip,
          specialty_rent_grip, crane_rentals, scaffolding_grip,
          grip_purchases, loss_damage_grip, other_grip,});
        setGripTotal(grip_total);
        const {basic_package_rent_sound, daily_rentals_sound, sound_total,
          wireless_mics, sound_purchases, walkie_talkies, other_sound,} = data.results[0];
        setPostDataSoundEqu({basic_package_rent_sound, daily_rentals_sound,
          wireless_mics, sound_purchases, walkie_talkies, other_sound,});
        setSoundTotal(sound_total);
        const {crew_2U, equipment_2U, travliv_2U, transport_2U, secondU_total,
          mat_sup_2U, aerial_unit, marine_unit, fringes_taxes_2U, other_2U,} = data.results[0];
        setPostDataSecondU({crew_2U, equipment_2U, travliv_2U, transport_2U,
          mat_sup_2U, aerial_unit, marine_unit, fringes_taxes_2U, other_2U,});
        setSecondUTotal(secondU_total);
        const {film_stock, video_stock, digital_stock, transfer_stock,
          hard_drives, dalies, telecine, audio_stock, magnetic_transfer,
          stills, loss_dam_lab, other_lab, stockLab_total,} = data.results[0];
        setPostDataStockLab({film_stock, video_stock, digital_stock, transfer_stock,
          hard_drives, dalies, telecine, audio_stock, magnetic_transfer,
          stills, loss_dam_lab, other_lab,});
        setStockLabTotal(stockLab_total);
        const {post_supervisor_qty, post_supervisor_uno, 
          post_supervisor_una, post_supervisor_rt, 
          post_coordinator_qty, post_coordinator_uno,
          post_coordinator_una, post_coordinator_rt,
          post_assistants_qty, post_assistants_uno,
          post_assistants_una, post_assistants_rt,
          post_accountants_qty, post_accountants_uno, post_consultant,
          post_accountants_una, post_accountants_rt, postStaffFac_total,
          post_accountants_ass_qty, post_accountants_ass_uno,
          post_accountants_ass_una, post_accountants_ass_rt,
          post_office_rent, post_office_equ, post_office_sup, 
          post_it_network, post_phone_net, post_computers_soft, post_store,
          post_ship, post_craft, fringes_taxes_post, post_other,} = data.results[0];
        setPostDataPostStaffFac({post_supervisor_qty, post_supervisor_uno, 
          post_supervisor_una, post_supervisor_rt, 
          post_coordinator_qty, post_coordinator_uno,
          post_coordinator_una, post_coordinator_rt,
          post_assistants_qty, post_assistants_uno,
          post_assistants_una, post_assistants_rt,
          post_accountants_qty, post_accountants_uno,
          post_accountants_una, post_accountants_rt, post_consultant,
          post_accountants_ass_qty, post_accountants_ass_uno,
          post_accountants_ass_una, post_accountants_ass_rt,
          post_office_rent, post_office_equ, post_office_sup, 
          post_it_network, post_phone_net, post_computers_soft, post_store,
          post_ship, post_craft, fringes_taxes_post, post_other,});
        setPostStaffFacTotal(postStaffFac_total);  
        const {editor_qty, editor_uno, editor_una, editor_rt,
          editor_vfx_qty, editor_vfx_uno, editor_vfx_una, editor_vfx_rt,
          editor_ass_qty, editor_ass_uno, editor_ass_una, editor_ass_rt,
          colorist_grader_qty, colorist_grader_uno, colorist_grader_una, colorist_grader_rt,
          graphics_qty, graphics_uno, graphics_una, graphics_rt,
          edit_rooms, edit_equip, edit_equip_nonlin, online,
          vfx_ed_system, post_edit_pur, lossdam_edit, fringes_taxes_post_edit,
          other_post_edit, editing_total,} = data.results[0];
        setPostDataEdit({editor_qty, editor_uno, editor_una, editor_rt,
          editor_vfx_qty, editor_vfx_uno, editor_vfx_una, editor_vfx_rt,
          editor_ass_qty, editor_ass_uno, editor_ass_una, editor_ass_rt,
          colorist_grader_qty, colorist_grader_uno, colorist_grader_una, colorist_grader_rt,
          graphics_qty, graphics_uno, graphics_una, graphics_rt,
          edit_rooms, edit_equip, edit_equip_nonlin, online,
          vfx_ed_system, post_edit_pur, lossdam_edit, fringes_taxes_post_edit,
        other_post_edit,});
        setEditingTotal(editing_total);
        const {sound_designer_qty, sound_designer_uno, sound_designer_una, sound_designer_rt,
          editor_sound_qty, editor_sound_uno, editor_sound_una, editor_sound_rt,
          editor_music_qty, editor_music_uno, editor_music_una, editor_music_rt,
          ed_sound_ass_qty, ed_sound_ass_uno, ed_sound_ass_una, ed_sound_ass_rt,
          adr_super_qty, adr_super_uno, adr_super_una, adr_super_rt,
          foley_labour_qty, foley_labour_uno, foley_labour_una, foley_labour_rt,
          sound_edit_rooms, sound_edit_equ, music_edit_equ, postSound_total,
          post_sound_edit_pur, adr, foley, pre_mix, mix, printmaster, transfers_deliverables,
          lossdam_sound, fringes_taxes_post_sound, other_post_sound,} = data.results[0];
        setPostDataPostSound({sound_designer_qty, sound_designer_uno, sound_designer_una, sound_designer_rt,
          editor_sound_qty, editor_sound_uno, editor_sound_una, editor_sound_rt,
          editor_music_qty, editor_music_uno, editor_music_una, editor_music_rt,
          ed_sound_ass_qty, ed_sound_ass_uno, ed_sound_ass_una, ed_sound_ass_rt,
          adr_super_qty, adr_super_uno, adr_super_una, adr_super_rt,
          foley_labour_qty, foley_labour_uno, foley_labour_una, foley_labour_rt,
          sound_edit_rooms, sound_edit_equ, music_edit_equ,
          post_sound_edit_pur, adr, foley, pre_mix, mix, printmaster, transfers_deliverables,
        lossdam_sound, fringes_taxes_post_sound, other_post_sound,});  
        setPostSoundTotal(postSound_total);      
        const {stock, neg_cutting, color_cor, interpos_neg, prints,
          transfers, other_media_delivery, distribution_copies, 
        storage_post, postLab_total,} = data.results[0];
        setPostDataPostLab({stock, neg_cutting, color_cor, interpos_neg, prints,
          transfers, other_media_delivery, distribution_copies, 
        storage_post,});
        setPostLabTotal(postLab_total);
        const {titles, opticals, stock_footage, con_script_ccsl,
          postTitles_total,} = data.results[0];
        setPostDataPostTitles({titles, opticals, stock_footage, con_script_ccsl,});
        setPostTitlesTotal(postTitles_total);
        const {dubs, subtitles, closed_caption, versioning, trailers,
          ads, transfers_ver, prints_ver, dig_copies_ver, 
          other_copies_ver, postVersion_total,} = data.results[0];
        setPostDataPostVersion({dubs, subtitles, closed_caption, versioning, trailers,
          ads, transfers_ver, prints_ver, dig_copies_ver, 
          other_copies_ver,});
        setPostVersionTotal(postVersion_total);
        const {vfx_producer, vfx_supervisor, vfx_coordinator, vfx_post_other_lab,
          vfx_storyboard, vfx_pre_vis_team, vfx_post_vis_team, cyberscanning,
          vfx_rentals, vfx_purchases, vfx_vendor_1, vfx_vendor_2, vfx_vendor_3,
          vfx_vendor_4, vfx_vendor_5, vfx_vendor_6, vfx_vendor_7, vfx_vendor_8,
          vfx_vendor_9, vfx_vendor_10, vfx_vendors_x, vfx_traliv, vfx_expenses,
          miniatures_build, miniatures_shoot, motion_capture, lossdam_vfx,
          box_ren_vfx, fringes_taxes_vfx, other_post_vfx, postVfx_total,} = data.results[0];
        setPostDataPostVFX({vfx_producer, vfx_supervisor, vfx_coordinator, vfx_post_other_lab,
          vfx_storyboard, vfx_pre_vis_team, vfx_post_vis_team, cyberscanning,
          vfx_rentals, vfx_purchases, vfx_vendor_1, vfx_vendor_2, vfx_vendor_3,
          vfx_vendor_4, vfx_vendor_5, vfx_vendor_6, vfx_vendor_7, vfx_vendor_8,
          vfx_vendor_9, vfx_vendor_10, vfx_vendors_x, vfx_traliv, vfx_expenses,
          miniatures_build, miniatures_shoot, motion_capture, lossdam_vfx,
          box_ren_vfx, fringes_taxes_vfx, other_post_vfx,});
        setPostVfxTotal(postVfx_total);
        const {tests_theater_ren, tests_other, pub_total,
          unit_publicist, pub_press_ex, photography, epk,
          promotion, pr, firnges_pub, other_pub, previews, website,} = data.results[0];
        setPostDataPublicity({tests_theater_ren, tests_other,
          unit_publicist, pub_press_ex, photography, epk,
          promotion, pr, firnges_pub, other_pub, previews, website,});
        setPubTotal(pub_total);
        const {pro_package, gen_lia, eando, umbrella, 
        union_insurance, other_in, insur_total,} = data.results[0];
        setPostDataInsurance({pro_package, gen_lia, eando, umbrella, 
        union_insurance, other_in,});
        setInsurTotal(insur_total);
        const {legal, medical, licences, payroll, bank_charges, audit,
        genEx_total,} = data.results[0];
        setPostDataGeneralEx({legal, medical, licences, payroll, bank_charges, audit,
        });
        setGenExTotal(genEx_total);
        const {corporate_overhead, interim_financing, fiscal_sponsor_fee,
        indirCo_total,} = data.results[0];
        setPostDataIndirectCo({corporate_overhead, interim_financing, fiscal_sponsor_fee,});
        setIndirCoTotal(indirCo_total);
        const {contingency, completion_bond,} = data.results[0];
        setPostDataContingency({contingency, completion_bond,});

            } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  // Submit1
  const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append("project", id );
  // totals
  formData.append("above_the_line_total", aboveTheLineTotal);
  formData.append("below_the_lineB_total", belowTheLineBTotal);
  formData.append("below_the_lineB_costs_total", belowTheLineBCostsTotal);
  formData.append("b_labour_and_costs_total", bLabourandCostsTotal);
  formData.append("post_productionC_total", postProductionCTotal);
  formData.append("belowB_andC_total", belowBandCTotal);
  formData.append("above_belowABC_total", aboveBelowABCTotal);
  formData.append("otherD_total", otherDTotal);
  formData.append("above_belowABCandD_total", aboveBelowABCandDTotal);
  formData.append("grand_total", grandTotal);
  // prepared by
  formData.append("dated", dated);
  formData.append("prelimfin", prelimfin);
  formData.append("preparedby", preparedby);
  formData.append("approvedby", approvedby);
  formData.append("approvedbyco", approvedbyco);
  // details
  formData.append("title", title);
  formData.append("series", series);
  formData.append("prodco", prodco);
  formData.append("writer", writer);
  formData.append("format", format);
  formData.append("location", location);
  // length
  formData.append("research", research);
  formData.append("prep", prep);
  formData.append("shoot", shoot);
  formData.append("wrap", wrap);
  formData.append("post", post);
  formData.append("length_total", postDataLengthTotal);
  // ABOVE THE LINE
  // rights miscellaneous
  formData.append("story_rights", story_rights);
  formData.append("miscellaneous", miscellaneous);
  formData.append("rights_total ", postDataRightsTotal); 
  // development
  formData.append("research_development", research_development);
  formData.append("prelim_budget", prelim_budget);
  formData.append("consultant_expenses", consultant_expenses);
  formData.append("office_expenses", office_expenses);
  formData.append("staff", staff);
  formData.append("travel_expenses_development", travel_expenses_development);
  formData.append("living_expenses_development", living_expenses_development);
  formData.append("other_development", other_development);
  formData.append("fringes_taxes_development", fringes_taxes_development);
  formData.append("development_total ", developmentTotal);
  // scenario
  formData.append("writers_quantity", writers_quantity);
  formData.append("writers_units_number", writers_units_number);
  formData.append("writers_units_name", writers_units_name);
  formData.append("writers_rate", writers_rate);
  formData.append("writers_total", writersTotal);
  formData.append("consultants_quantity", consultants_quantity);
  formData.append("consultants_units_number", consultants_units_number);
  formData.append("consultants_units_name", consultants_units_name);
  formData.append("consultants_rate", consultants_rate);
  formData.append("consultants_total", consultantsTotal);
  formData.append("editors_scenario_quantity", editors_scenario_quantity);
  formData.append("editors_scenario_units_number ", editors_scenario_units_number);
  formData.append("editors_scenario_units_name", editors_scenario_units_name);
  formData.append("editors_scenario_rate", editors_scenario_rate);
  formData.append("editors_scenario_total", editorsscenarioTotal);
  formData.append("admin_scenario_quantity", admin_scenario_quantity);
  formData.append("admin_scenario_units_number ", admin_scenario_units_number);
  formData.append("admin_scenario_units_name", admin_scenario_units_name);
  formData.append("admin_scenario_rate", admin_scenario_rate);
  formData.append("admin_scenario_total", adminScenarioTotal);
  formData.append("office_expenses_scenario ", office_expenses_scenario);
  formData.append("travel_expenses_scenario", travel_expenses_scenario);
  formData.append("living_expenses_scenario", living_expenses_scenario);
  formData.append("other_scenario", other_scenario);
  formData.append("fringes_taxes_scenario", fringes_taxes_scenario);
  formData.append("scenario_total", scenarioTotal);
  // producers-directors
  formData.append("executive_producers_quantity", executive_producers_quantity);
  formData.append("producers_quantity", producers_quantity);
  formData.append("line_producers_quantity", line_producers_quantity);
  formData.append("co_producers_quantity", co_producers_quantity);
  formData.append("associate_producers_quantity", associate_producers_quantity);
  formData.append("directors_quantity", directors_quantity);
  formData.append("unit2_directors_quantity", unit2_directors_quantity);
  formData.append("executive_producers_rate", executive_producers_rate);
  formData.append("producers_rate", producers_rate);
  formData.append("line_producers_rate", line_producers_rate);
  formData.append("co_producers_rate", co_producers_rate);
  formData.append("associate_producers_rate", associate_producers_rate);
  formData.append("directors_rate", directors_rate);
  formData.append("unit2_directors_rate", unit2_directors_rate);
  formData.append("executive_producers_total", execProducersTotal);
  formData.append("producers_total", producersTotal);
  formData.append("line_producers_total", lineProducersTotal);
  formData.append("co_producers_total", coProducersTotal);
  formData.append("associate_producers_total", assocProducersTotal);
  formData.append("directors_total", directorsTotal);
  formData.append("unit2_directors_total", unit2DirectorsTotal);
  formData.append("travel_expenses_producers_dirs", travel_expenses_producers_dirs);
  formData.append("living_expenses_producers_dirs", living_expenses_producers_dirs);
  formData.append("other_producers_dirs", other_producers_dirs);
  formData.append("fringes_taxes_producers_dirs", fringes_taxes_producers_dirs);
  formData.append("producers_dirs_total", producersDirsTotal);
  // Stars Music
  formData.append("stars", stars);
  formData.append("stars_rights_payments", stars_rights_payments);
  formData.append("travel_expenses_stars", travel_expenses_stars);
  formData.append("living_expenses_stars", living_expenses_stars);
  formData.append("other_stars", other_stars);
  formData.append("fringes_taxes_stars", fringes_taxes_stars);
  formData.append("music", music);
  formData.append("music_supervisor", music_supervisor);
  formData.append("travel_expenses_music", travel_expenses_music);
  formData.append("living_expenses_music", living_expenses_music);
  formData.append("music_rights_addl_songs", music_rights_addl_songs);
  formData.append("other_music", other_music);
  formData.append("fringes_taxes_music", fringes_taxes_music);
  formData.append("stars_music_total", starsMusicTotal);
  // Cast
  formData.append("principals_quantity", principals_quantity);
  formData.append("principals_units_number", principals_units_number);
  formData.append("principals_units_name", principals_units_name);
  formData.append("principals_rate", principals_rate);
  formData.append("actors_quantity", actors_quantity);
  formData.append("actors_units_number", actors_units_number);
  formData.append("actors_units_name", actors_units_name);
  formData.append("actors_rate", actors_rate);
  formData.append("stuntcoordinators_quantity", stuntcoordinators_quantity);
  formData.append("stuntcoordinators_units_number", stuntcoordinators_units_number);
  formData.append("stuntcoordinators_units_name", stuntcoordinators_units_name);
  formData.append("stuntcoordinators_rate", stuntcoordinators_rate);
  formData.append("stuntperformers_quantity", stuntperformers_quantity);
  formData.append("stuntperformers_units_number", stuntperformers_units_number);
  formData.append("stuntperformers_units_name", stuntperformers_units_name);
  formData.append("stuntperformers_rate", stuntperformers_rate);
  formData.append("otherperformers_quantity", otherperformers_quantity);
  formData.append("otherperformers_units_number", otherperformers_units_number);
  formData.append("otherperformers_units_name", otherperformers_units_name);
  formData.append("otherperformers_rate", otherperformers_rate);
  formData.append("extras_quantity", extras_quantity);
  formData.append("extras_units_number", extras_units_number);
  formData.append("extras_units_name", extras_units_name);
  formData.append("extras_rate", extras_rate);
  formData.append("principals_total", principalsTotal);
  formData.append("actors_total", actorsTotal);
  formData.append("stuntcoordinators_total", stuntcoordinatorsTotal);
  formData.append("stuntperformers_total", stuntperformersTotal);
  formData.append("otherperformers_total", otherperformersTotal);
  formData.append("extras_total", extrasTotal);
  formData.append("casting_director", casting_director);
  formData.append("extras_casting", extras_casting);
  formData.append("other_cast", other_cast);
  formData.append("fringes_taxes_cast", fringes_taxes_cast);
  formData.append("rights_payments_cast", rights_payments_cast);
  formData.append("cast_total", castTotal);
  // New Cast
  formData.append("holidays_cast", holidays_cast);
  formData.append("overtime_cast", overtime_cast);
  formData.append("days6th7th_cast", days6th7th_cast);
  formData.append("rehersals_cast", rehersals_cast);
  formData.append("holidays_unit_cast", holidays_unit_cast);
  formData.append("overtime_unit_cast", overtime_unit_cast);
  formData.append("days6th7th_unit_cast", days6th7th_unit_cast);
  formData.append("rehersals_unit_cast", rehersals_unit_cast);
  formData.append("prin_2_qty", prin_2_qty);
  formData.append("prin_2_uno", prin_2_uno);
  formData.append("prin_2_una", prin_2_una);
  formData.append("prin_2_rt", prin_2_rt);
  formData.append("prin_3_qty", prin_3_qty);
  formData.append("prin_3_uno", prin_3_uno);
  formData.append("prin_3_una", prin_3_una);
  formData.append("prin_3_rt", prin_3_rt);
  formData.append("actors_2_qty", actors_2_qty);
  formData.append("actors_2_uno", actors_2_uno);
  formData.append("actors_2_una", actors_2_una);
  formData.append("actors_2_rt", actors_2_rt);
  formData.append("actors_3_qty", actors_3_qty);
  formData.append("actors_3_uno", actors_3_uno);
  formData.append("actors_3_una", actors_3_una);
  formData.append("actors_3_rt", actors_3_rt);
  formData.append("actors_4_qty", actors_4_qty);
  formData.append("actors_4_uno", actors_4_uno);
  formData.append("actors_4_una", actors_4_una);
  formData.append("actors_4_rt", actors_4_rt);
  formData.append("actors_5_qty", actors_5_qty);
  formData.append("actors_5_uno", actors_5_uno);
  formData.append("actors_5_una", actors_5_una);
  formData.append("actors_5_rt", actors_5_rt);
  formData.append("actors_6_qty", actors_6_qty);
  formData.append("actors_6_uno", actors_6_uno);
  formData.append("actors_6_una", actors_6_una);
  formData.append("actors_6_rt", actors_6_rt);
  formData.append("actors_7_qty", actors_7_qty);
  formData.append("actors_7_uno", actors_7_uno);
  formData.append("actors_7_una", actors_7_una);
  formData.append("actors_7_rt", actors_7_rt);
  formData.append("actors_week_qty", actors_week_qty);
  formData.append("actors_week_uno", actors_week_uno);
  formData.append("actors_week_una", actors_week_una);
  formData.append("actors_week_rt", actors_week_rt);
  formData.append("actors_day_qty", actors_day_qty);
  formData.append("actors_day_uno", actors_day_uno);
  formData.append("actors_day_una", actors_day_una);
  formData.append("actors_day_rt", actors_day_rt);
  formData.append("princ2_total", princ2Total);
  formData.append("princ3_total", princ3Total);
  formData.append("actor2_total", actor2Total);
  formData.append("actor3_total", actor3Total);
  formData.append("actor4_total", actor4Total);
  formData.append("actor5_total", actor5Total);
  formData.append("actor6_total", actor6Total);
  formData.append("actor7_total", actor7Total);
  formData.append("actorweek_total", actorweekTotal);
  formData.append("actorday_total", actordayTotal);
  // production staff
  formData.append("fringes_taxes_production", fringes_taxes_production);
  formData.append("production_manager_quantity", production_manager_quantity);
  formData.append("production_manager_units_number", production_manager_units_number);
  formData.append("production_manager_units_name", production_manager_units_name);
  formData.append("production_manager_rate", production_manager_rate);
  formData.append("production_supervisor_quantity", production_supervisor_quantity);
  formData.append("production_supervisor_units_number", production_supervisor_units_number);
  formData.append("production_supervisor_units_name", production_supervisor_units_name);
  formData.append("production_supervisor_rate", production_supervisor_rate);
  formData.append("production_coordinator_quantity", production_coordinator_quantity);
  formData.append("production_coordinator_units_number", production_coordinator_units_number);
  formData.append("production_coordinator_units_name", production_coordinator_units_name);
  formData.append("production_coordinator_rate", production_coordinator_rate);
  formData.append("unit_manager_quantity", unit_manager_quantity);
  formData.append("unit_manager_units_number", unit_manager_units_number);
  formData.append("unit_manager_units_name", unit_manager_units_name);
  formData.append("unit_manager_rate", unit_manager_rate);
  formData.append("location_manager_quantity", location_manager_quantity);
  formData.append("location_manager_units_number", location_manager_units_number);
  formData.append("location_manager_units_name", location_manager_units_name);
  formData.append("location_manager_rate", location_manager_rate);
  formData.append("location_manager_assistant_quantity", location_manager_assistant_quantity);
  formData.append("location_manager_assistant_units_number", location_manager_assistant_units_number);
  formData.append("location_manager_assistant_units_name", location_manager_assistant_units_name);
  formData.append("location_manager_assistant_rate", location_manager_assistant_rate);
  formData.append("production_assistants_quantity", production_assistants_quantity);
  formData.append("production_assistants_units_number", production_assistants_units_number);
  formData.append("production_assistants_units_name", production_assistants_units_name);
  formData.append("production_assistants_rate", production_assistants_rate);
  formData.append("production_secretary_quantity", production_secretary_quantity);
  formData.append("production_secretary_units_number", production_secretary_units_number);
  formData.append("production_secretary_units_name", production_secretary_units_name);
  formData.append("production_secretary_rate", production_secretary_rate);
  formData.append("production_accountant_quantity", production_accountant_quantity);
  formData.append("production_accountant_units_number", production_accountant_units_number);
  formData.append("production_accountant_units_name", production_accountant_units_name);
  formData.append("production_accountant_rate", production_accountant_rate);
  formData.append("production_accountant_assistant_quantity", production_accountant_assistant_quantity);
  formData.append("production_accountant_assistant_units_number", production_accountant_assistant_units_number);
  formData.append("production_accountant_assistant_units_name", production_accountant_assistant_units_name);
  formData.append("production_accountant_assistant_rate", production_accountant_assistant_rate);
  formData.append("scriptsupervisor_continuity_quantity", scriptsupervisor_continuity_quantity);
  formData.append("scriptsupervisor_continuity_units_number", scriptsupervisor_continuity_units_number);
  formData.append("scriptsupervisor_continuity_units_name", scriptsupervisor_continuity_units_name);
  formData.append("scriptsupervisor_continuity_rate", scriptsupervisor_continuity_rate);
  formData.append("payroll_quantity", payroll_quantity);
  formData.append("payroll_units_number", payroll_units_number);
  formData.append("payroll_units_name", payroll_units_name);
  formData.append("payroll_rate", payroll_rate);
  formData.append("other_production_quantity", other_production_quantity);
  formData.append("other_production_units_number", other_production_units_number);
  formData.append("other_production_units_name", other_production_units_name);
  formData.append("other_production_rate", other_production_rate);
  formData.append("directors_assistant_quantity", directors_assistant_quantity);
  formData.append("directors_assistant_units_number", directors_assistant_units_number);
  formData.append("directors_assistant_units_name", directors_assistant_units_name);
  formData.append("directors_assistant_rate", directors_assistant_rate);
  formData.append("assistant_director_1st_quantity", assistant_director_1st_quantity);
  formData.append("assistant_director_1st_units_number", assistant_director_1st_units_number);
  formData.append("assistant_director_1st_units_name", assistant_director_1st_units_name);
  formData.append("assistant_director_1st_rate", assistant_director_1st_rate);
  formData.append("assistant_director_2nd_quantity", assistant_director_2nd_quantity);
  formData.append("assistant_director_2nd_units_number", assistant_director_2nd_units_number);
  formData.append("assistant_director_2nd_units_name", assistant_director_2nd_units_name);
  formData.append("assistant_director_2nd_rate", assistant_director_2nd_rate);
  formData.append("assistant_director_3rd_quantity", assistant_director_3rd_quantity);
  formData.append("assistant_director_3rd_units_number", assistant_director_3rd_units_number);
  formData.append("assistant_director_3rd_units_name", assistant_director_3rd_units_name);
  formData.append("assistant_director_3rd_rate", assistant_director_3rd_rate);
  formData.append("craft_services_quantity", craft_services_quantity);
  formData.append("craft_services_units_number", craft_services_units_number);
  formData.append("craft_services_units_name", craft_services_units_name);
  formData.append("craft_services_rate", craft_services_rate);
  formData.append("productionmanager_total", productionmanagerTotal);
  formData.append("productionsupervisor_total", productionsupervisorTotal);
  formData.append("productioncoordinator_total", productioncoordinatorTotal);
  formData.append("unitmanager_total", unitmanagerTotal);
  formData.append("locationmanager_total", locationmanagerTotal);
  formData.append("locationmanagerassistant_total", locationmanagerassistantTotal);
  formData.append("productionassistants_total", productionassistantsTotal);
  formData.append("productionsecretary_total", productionsecretaryTotal);
  formData.append("productionaccountant_total", productionaccountantTotal);
  formData.append("productionaccountantassistant_total", productionaccountantassistantTotal);
  formData.append("scriptsupervisorcontinuity_total", scriptsupervisorcontinuityTotal);
  formData.append("payroll_total", payrollTotal);
  formData.append("otherproduction_total", otherproductionTotal);
  formData.append("directorsassistant_total", directorsassistantTotal);
  formData.append("assistantdirector1st_total", assistantdirector1stTotal);
  formData.append("assistantdirector2nd_total", assistantdirector2ndTotal);
  formData.append("assistantdirector3rd_total", assistantdirector3rdTotal);
  formData.append("craftservices_total", craftservicesTotal);
  formData.append("productionstaff_total", productionstaffTotal);
  // New Production Staff
  formData.append("holidays_pro_sta", holidays_pro_sta);
  formData.append("overtime_pro_sta", overtime_pro_sta);
  formData.append("days6th7th_pro_sta", days6th7th_pro_sta);
  formData.append("other_pro_sta", other_pro_sta);
  formData.append("box_rent_pro_sta", box_rent_pro_sta);
  formData.append("holidays_unit_pro_sta", holidays_unit_pro_sta);
  formData.append("overtime_unit_pro_sta", overtime_unit_pro_sta);
  formData.append("days6th7th_unit_pro_sta", days6th7th_unit_pro_sta);
  formData.append("box_rent_unit_pro_sta", box_rent_unit_pro_sta);
  formData.append("production_manager_qty_prep", production_manager_qty_prep);
  formData.append("production_manager_uno_prep", production_manager_uno_prep);
  formData.append("production_manager_una_prep", production_manager_una_prep);
  formData.append("production_manager_rt_prep", production_manager_rt_prep);
  formData.append("production_manager_qty_wrap", production_manager_qty_wrap);
  formData.append("production_manager_uno_wrap", production_manager_uno_wrap);
  formData.append("production_manager_una_wrap", production_manager_una_wrap);
  formData.append("production_manager_rt_wrap", production_manager_rt_wrap);
  formData.append("production_supervisor_qty_prep", production_supervisor_qty_prep);
  formData.append("production_supervisor_uno_prep", production_supervisor_uno_prep);
  formData.append("production_supervisor_una_prep", production_supervisor_una_prep);
  formData.append("production_supervisor_rt_prep", production_supervisor_rt_prep);
  formData.append("production_supervisor_qty_wrap", production_supervisor_qty_wrap);
  formData.append("production_supervisor_uno_wrap", production_supervisor_uno_wrap);
  formData.append("production_supervisor_una_wrap", production_supervisor_una_wrap);
  formData.append("production_supervisor_rt_wrap", production_supervisor_rt_wrap);
  formData.append("production_coordinator_qty_prep", production_coordinator_qty_prep);
  formData.append("production_coordinator_uno_prep", production_coordinator_uno_prep);
  formData.append("production_coordinator_una_prep", production_coordinator_una_prep);
  formData.append("production_coordinator_rt_prep", production_coordinator_rt_prep);
  formData.append("production_coordinator_qty_wrap", production_coordinator_qty_wrap);
  formData.append("production_coordinator_uno_wrap", production_coordinator_uno_wrap);
  formData.append("production_coordinator_una_wrap", production_coordinator_una_wrap);
  formData.append("production_coordinator_rt_wrap", production_coordinator_rt_wrap);
  formData.append("unit_manager_qty_prep", unit_manager_qty_prep);
  formData.append("unit_manager_uno_prep", unit_manager_uno_prep);
  formData.append("unit_manager_una_prep", unit_manager_una_prep);
  formData.append("unit_manager_rt_prep", unit_manager_rt_prep);
  formData.append("unit_manager_qty_wrap", unit_manager_qty_wrap);
  formData.append("unit_manager_uno_wrap", unit_manager_uno_wrap);
  formData.append("unit_manager_una_wrap", unit_manager_una_wrap);
  formData.append("unit_manager_rt_wrap", unit_manager_rt_wrap);
  formData.append("location_manager_qty_prep", location_manager_qty_prep);
  formData.append("location_manager_uno_prep", location_manager_uno_prep);
  formData.append("location_manager_una_prep", location_manager_una_prep);
  formData.append("location_manager_rt_prep", location_manager_rt_prep);
  formData.append("location_manager_qty_wrap", location_manager_qty_wrap);
  formData.append("location_manager_uno_wrap", location_manager_uno_wrap);
  formData.append("location_manager_una_wrap", location_manager_una_wrap);
  formData.append("location_manager_rt_wrap", location_manager_rt_wrap);
  formData.append("location_manager_ass_qty_prep", location_manager_ass_qty_prep);
  formData.append("location_manager_ass_uno_prep", location_manager_ass_uno_prep);
  formData.append("location_manager_ass_una_prep", location_manager_ass_una_prep);
  formData.append("location_manager_ass_rt_prep", location_manager_ass_rt_prep);
  formData.append("location_manager_ass_qty_wrap", location_manager_ass_qty_wrap);
  formData.append("location_manager_ass_uno_wrap", location_manager_ass_uno_wrap);
  formData.append("location_manager_ass_una_wrap", location_manager_ass_una_wrap);
  formData.append("location_manager_ass_rt_wrap", location_manager_ass_rt_wrap);
  formData.append("production_ass_qty_prep", production_ass_qty_prep);
  formData.append("production_ass_uno_prep", production_ass_uno_prep);
  formData.append("production_ass_una_prep", production_ass_una_prep);
  formData.append("production_ass_rt_prep", production_ass_rt_prep);
  formData.append("production_ass_qty_wrap", production_ass_qty_wrap);
  formData.append("production_ass_uno_wrap", production_ass_uno_wrap);
  formData.append("production_ass_una_wrap", production_ass_una_wrap);
  formData.append("production_ass_rt_wrap", production_ass_rt_wrap);
  formData.append("production_sec_qty_prep", production_sec_qty_prep);
  formData.append("production_sec_uno_prep", production_sec_uno_prep);
  formData.append("production_sec_una_prep", production_sec_una_prep);
  formData.append("production_sec_rt_prep", production_sec_rt_prep);
  formData.append("production_sec_qty_wrap", production_sec_qty_wrap);
  formData.append("production_sec_uno_wrap", production_sec_uno_wrap);
  formData.append("production_sec_una_wrap", production_sec_una_wrap);
  formData.append("production_sec_rt_wrap", production_sec_rt_wrap);
  formData.append("production_acc_qty_prep", production_acc_qty_prep);
  formData.append("production_acc_uno_prep", production_acc_uno_prep);
  formData.append("production_acc_una_prep", production_acc_una_prep);
  formData.append("production_acc_rt_prep", production_acc_rt_prep);
  formData.append("production_acc_qty_wrap", production_acc_qty_wrap);
  formData.append("production_acc_uno_wrap", production_acc_uno_wrap);
  formData.append("production_acc_una_wrap", production_acc_una_wrap);
  formData.append("production_acc_rt_wrap", production_acc_rt_wrap);
  formData.append("production_acc_ass_qty_prep", production_acc_ass_qty_prep);
  formData.append("production_acc_ass_uno_prep", production_acc_ass_uno_prep);
  formData.append("production_acc_ass_una_prep", production_acc_ass_una_prep);
  formData.append("production_acc_ass_rt_prep", production_acc_ass_rt_prep);
  formData.append("production_acc_ass_qty_wrap", production_acc_ass_qty_wrap);
  formData.append("production_acc_ass_uno_wrap", production_acc_ass_uno_wrap);
  formData.append("production_acc_ass_una_wrap", production_acc_ass_una_wrap);
  formData.append("production_acc_ass_rt_wrap", production_acc_ass_rt_wrap);
  formData.append("scriptsupervisor_con_qty_prep", scriptsupervisor_con_qty_prep);
  formData.append("scriptsupervisor_con_uno_prep", scriptsupervisor_con_uno_prep);
  formData.append("scriptsupervisor_con_una_prep", scriptsupervisor_con_una_prep);
  formData.append("scriptsupervisor_con_rt_prep", scriptsupervisor_con_rt_prep);
  formData.append("scriptsupervisor_con_qty_wrap", scriptsupervisor_con_qty_wrap);
  formData.append("scriptsupervisor_con_uno_wrap", scriptsupervisor_con_uno_wrap);
  formData.append("scriptsupervisor_con_una_wrap", scriptsupervisor_con_una_wrap);
  formData.append("scriptsupervisor_con_rt_wrap", scriptsupervisor_con_rt_wrap);
  formData.append("payroll_qty_prep", payroll_qty_prep);
  formData.append("payroll_uno_prep", payroll_uno_prep);
  formData.append("payroll_una_prep", payroll_una_prep);
  formData.append("payroll_rt_prep", payroll_rt_prep);
  formData.append("payroll_qty_wrap", payroll_qty_wrap);
  formData.append("payroll_uno_wrap", payroll_uno_wrap);
  formData.append("payroll_una_wrap", payroll_una_wrap);
  formData.append("payroll_rt_wrap", payroll_rt_wrap);
  formData.append("other_pro_qty_prep", other_pro_qty_prep);
  formData.append("other_pro_uno_prep", other_pro_uno_prep);
  formData.append("other_pro_una_prep", other_pro_una_prep);
  formData.append("other_pro_rt_prep", other_pro_rt_prep);
  formData.append("other_pro_qty_wrap", other_pro_qty_wrap);
  formData.append("other_pro_uno_wrap", other_pro_uno_wrap);
  formData.append("other_pro_una_wrap", other_pro_una_wrap);
  formData.append("other_pro_rt_wrap", other_pro_rt_wrap);
  formData.append("directors_ass_qty_prep", directors_ass_qty_prep);
  formData.append("directors_ass_uno_prep", directors_ass_uno_prep);
  formData.append("directors_ass_una_prep", directors_ass_una_prep);
  formData.append("directors_ass_rt_prep", directors_ass_rt_prep);
  formData.append("directors_ass_qty_wrap", directors_ass_qty_wrap);
  formData.append("directors_ass_uno_wrap", directors_ass_uno_wrap);
  formData.append("directors_ass_una_wrap", directors_ass_una_wrap);
  formData.append("directors_ass_rt_wrap", directors_ass_rt_wrap);
  formData.append("ass_director_1st_qty_prep", ass_director_1st_qty_prep);
  formData.append("ass_director_1st_uno_prep", ass_director_1st_uno_prep);
  formData.append("ass_director_1st_una_prep", ass_director_1st_una_prep);
  formData.append("ass_director_1st_rt_prep", ass_director_1st_rt_prep);
  formData.append("ass_director_1st_qty_wrap", ass_director_1st_qty_wrap);
  formData.append("ass_director_1st_uno_wrap", ass_director_1st_uno_wrap);
  formData.append("ass_director_1st_una_wrap", ass_director_1st_una_wrap);
  formData.append("ass_director_1st_rt_wrap", ass_director_1st_rt_wrap);
  formData.append("ass_director_2nd_qty_prep", ass_director_2nd_qty_prep);
  formData.append("ass_director_2nd_uno_prep", ass_director_2nd_uno_prep);
  formData.append("ass_director_2nd_una_prep", ass_director_2nd_una_prep);
  formData.append("ass_director_2nd_rt_prep", ass_director_2nd_rt_prep);
  formData.append("ass_director_2nd_qty_wrap", ass_director_2nd_qty_wrap);
  formData.append("ass_director_2nd_uno_wrap", ass_director_2nd_uno_wrap);
  formData.append("ass_director_2nd_una_wrap", ass_director_2nd_una_wrap);
  formData.append("ass_director_2nd_rt_wrap", ass_director_2nd_rt_wrap);
  formData.append("ass_director_3rd_qty_prep", ass_director_3rd_qty_prep);
  formData.append("ass_director_3rd_uno_prep", ass_director_3rd_uno_prep);
  formData.append("ass_director_3rd_una_prep", ass_director_3rd_una_prep);
  formData.append("ass_director_3rd_rt_prep", ass_director_3rd_rt_prep);
  formData.append("ass_director_3rd_qty_wrap", ass_director_3rd_qty_wrap);
  formData.append("ass_director_3rd_uno_wrap", ass_director_3rd_uno_wrap);
  formData.append("ass_director_3rd_una_wrap", ass_director_3rd_una_wrap);
  formData.append("ass_director_3rd_rt_wrap", ass_director_3rd_rt_wrap);
  formData.append("craft_services_qty_prep", craft_services_qty_prep);
  formData.append("craft_services_uno_prep", craft_services_uno_prep);
  formData.append("craft_services_una_prep", craft_services_una_prep);
  formData.append("craft_services_rt_prep", craft_services_rt_prep);
  formData.append("craft_services_qty_wrap", craft_services_qty_wrap);
  formData.append("craft_services_uno_wrap", craft_services_uno_wrap);
  formData.append("craft_services_una_wrap", craft_services_una_wrap);
  formData.append("craft_services_rt_wrap", craft_services_rt_wrap);
  formData.append("productionmanagerprep_total", productionmanagerprepTotal);
  formData.append("productionmanagerwrap_total", productionmanagerwrapTotal);
  formData.append("productionmanagerall_total", productionmanagerallTotal);
  formData.append("productionsupervisorprep_total", productionsupervisorprepTotal);
  formData.append("productionsupervisorwrap_total", productionsupervisorwrapTotal);
  formData.append("productionsupervisorall_total", productionsupervisorallTotal);
  formData.append("productioncoordinatorprep_total", productioncoordinatorprepTotal);
  formData.append("productioncoordinatorwrap_total", productioncoordinatorwrapTotal);
  formData.append("productioncoordinatorall_total", productioncoordinatorallTotal);
  formData.append("unitmanagerprep_total", unitmanagerprepTotal);
  formData.append("unitmanagerwrap_total", unitmanagerwrapTotal);
  formData.append("unitmanagerall_total", unitmanagerallTotal);
  formData.append("locationmanagerwrap_total", locationmanagerwrapTotal);
  formData.append("locationmanagerprep_total", locationmanagerprepTotal);
  formData.append("locationmanagerall_total", locationmanagerallTotal);
  formData.append("locmanassprep_total", locmanassprepTotal);
  formData.append("locmanasswrap_total", locmanasswrapTotal);
  formData.append("locmanassall_total", locmanassallTotal);
  formData.append("proassprep_total", proassprepTotal);
  formData.append("proasswrap_total", proasswrapTotal);
  formData.append("proassall_total", proassallTotal);
  formData.append("prosecprep_total", prosecprepTotal);
  formData.append("prosecwrap_total", prosecwrapTotal);
  formData.append("prosecall_total", prosecallTotal);
  formData.append("proaccprep_total", proaccprepTotal);
  formData.append("proaccwrap_total", proaccwrapTotal);
  formData.append("proaccall_total", proaccallTotal);
  formData.append("proaccassprep_total", proaccassprepTotal);
  formData.append("proaccasswrap_total", proaccasswrapTotal);
  formData.append("proaccassall_total", proaccassallTotal);
  formData.append("scriptsupconprep_total", scriptsupconprepTotal);
  formData.append("scriptsupconwrap_total", scriptsupconwrapTotal);
  formData.append("scriptsupconall_total", scriptsupconallTotal);
  formData.append("payrollprep_total", payrollprepTotal);
  formData.append("payrollwrap_total", payrollwrapTotal);
  formData.append("payrollall_total", payrollallTotal);
  formData.append("otherproprep_total", otherproprepTotal);
  formData.append("otherprowrap_total", otherprowrapTotal);
  formData.append("otherproall_total", otherproallTotal);
  formData.append("directorsassprep_total", directorsassprepTotal);
  formData.append("directorsasswrap_total", directorsasswrapTotal);
  formData.append("directorsassall_total", directorsassallTotal);
  formData.append("assdirector1stprep_total", assdirector1stprepTotal);
  formData.append("assdirector1stwrap_total", assdirector1stwrapTotal);
  formData.append("assdirector1stall_total", assdirector1stallTotal);
  formData.append("assdirector2ndprep_total", assdirector2ndprepTotal);
  formData.append("assdirector2ndwrap_total", assdirector2ndwrapTotal);
  formData.append("assdirector2ndall_total", assdirector2ndallTotal);
  formData.append("assdirector3rdprep_total", assdirector3rdprepTotal);
  formData.append("assdirector3rdwrap_total", assdirector3rdwrapTotal);
  formData.append("assdirector3rdall_total", assdirector3rdallTotal);
  formData.append("craftservicesprep_total", craftservicesprepTotal);
  formData.append("craftserviceswrap_total", craftserviceswrapTotal);
  formData.append("craftservicesall_total", craftservicesallTotal);
  // design
  formData.append("fringes_taxes_design", fringes_taxes_design);
  formData.append("production_designer_quantity", production_designer_quantity);
  formData.append("production_designer_units_number", production_designer_units_number);
  formData.append("production_designer_units_name", production_designer_units_name);
  formData.append("production_designer_rate", production_designer_rate);
  formData.append("art_director_quantity", art_director_quantity);
  formData.append("art_director_units_number", art_director_units_number);
  formData.append("art_director_units_name", art_director_units_name);
  formData.append("art_director_rate", art_director_rate);
  formData.append("art_assistants_quantity", art_assistants_quantity);
  formData.append("art_assistants_units_number", art_assistants_units_number);
  formData.append("art_assistants_units_name", art_assistants_units_name);
  formData.append("art_assistants_rate", art_assistants_rate);
  formData.append("production_assistants_trainees_quantity", production_assistants_trainees_quantity);
  formData.append("production_assistants_trainees_units_number", production_assistants_trainees_units_number);
  formData.append("production_assistants_trainees_units_name", production_assistants_trainees_units_name);
  formData.append("production_assistants_trainees_rate", production_assistants_trainees_rate);
  formData.append("graphic_artists_quantity", graphic_artists_quantity);
  formData.append("graphic_artists_units_number", graphic_artists_units_number);
  formData.append("graphic_artists_units_name", graphic_artists_units_name);
  formData.append("graphic_artists_rate", graphic_artists_rate);
  formData.append("productiondesigner_total", productiondesignerTotal);
  formData.append("artdirector_total", artdirectorTotal);
  formData.append("artassistants_total", artassistantsTotal);
  formData.append("productionassistantstrainees_total", productionassistantstraineesTotal);
  formData.append("graphicartists_total", graphicartistsTotal);
  formData.append("other_design", other_design);
  formData.append("designlabour_total", designlabourTotal);
  // design
  formData.append("pro_designer_qty_prep", pro_designer_qty_prep);
  formData.append("pro_designer_uno_prep", pro_designer_uno_prep);
  formData.append("pro_designer_una_prep", pro_designer_una_prep);
  formData.append("pro_designer_rt_prep", pro_designer_rt_prep);
  formData.append("pro_designer_qty_wrap", pro_designer_qty_wrap);
  formData.append("pro_designer_uno_wrap", pro_designer_uno_wrap);
  formData.append("pro_designer_una_wrap", pro_designer_una_wrap);
  formData.append("pro_designer_rt_wrap", pro_designer_rt_wrap);
  formData.append("art_director_qty_prep", art_director_qty_prep);
  formData.append("art_director_uno_prep", art_director_uno_prep);
  formData.append("art_director_una_prep", art_director_una_prep);
  formData.append("art_director_rt_prep", art_director_rt_prep);
  formData.append("art_director_qty_wrap", art_director_qty_wrap);
  formData.append("art_director_uno_wrap", art_director_uno_wrap);
  formData.append("art_director_una_wrap", art_director_una_wrap);
  formData.append("art_director_rt_wrap", art_director_rt_wrap);
  formData.append("art_ass_qty_prep", art_ass_qty_prep);
  formData.append("art_ass_uno_prep", art_ass_uno_prep);
  formData.append("art_ass_una_prep", art_ass_una_prep);
  formData.append("art_ass_rt_prep", art_ass_rt_prep);
  formData.append("art_ass_qty_wrap", art_ass_qty_wrap);
  formData.append("art_ass_uno_wrap", art_ass_uno_wrap);
  formData.append("art_ass_una_wrap", art_ass_una_wrap);
  formData.append("art_ass_rt_wrap", art_ass_rt_wrap);
  formData.append("pro_ass_trainees_qty_prep", pro_ass_trainees_qty_prep);
  formData.append("pro_ass_trainees_uno_prep", pro_ass_trainees_uno_prep);
  formData.append("pro_ass_trainees_una_prep", pro_ass_trainees_una_prep);
  formData.append("pro_ass_trainees_rt_prep", pro_ass_trainees_rt_prep);
  formData.append("pro_ass_trainees_qty_wrap", pro_ass_trainees_qty_wrap);
  formData.append("pro_ass_trainees_uno_wrap", pro_ass_trainees_uno_wrap);
  formData.append("pro_ass_trainees_una_wrap", pro_ass_trainees_una_wrap);
  formData.append("pro_ass_trainees_rt_wrap", pro_ass_trainees_rt_wrap);
  formData.append("sketch_artists", sketch_artists);
  formData.append("sketch_artists_unit", sketch_artists_unit);
  formData.append("storyboard_artists", storyboard_artists);
  formData.append("storyboard_artists_unit", storyboard_artists_unit);
  formData.append("holidays_design", holidays_design);
  formData.append("holidays_unit_design", holidays_unit_design);
  formData.append("overtime_design", overtime_design);
  formData.append("overtime_unit_design", overtime_unit_design);
  formData.append("days6th7th_design", days6th7th_design);
  formData.append("days6th7th_unit_design", days6th7th_unit_design);
  formData.append("box_rent_design", box_rent_design);
  formData.append("box_rent_unit_design", box_rent_unit_design);
  formData.append("prodesprep_total", prodesprepTotal);
  formData.append("prodeswrap_total", prodeswrapTotal);
  formData.append("prodesall_total", prodesallTotal);
  formData.append("artdirprep_total", artdirprepTotal);
  formData.append("artdirwrap_total", artdirwrapTotal);
  formData.append("artdirall_total", artdirallTotal);
  formData.append("artassprep_total", artassprepTotal);
  formData.append("artasswrap_total", artasswrapTotal);
  formData.append("artassall_total", artassallTotal);
  formData.append("proasstrainprep_total", proasstrainprepTotal);
  formData.append("proasstrainwrap_total", proasstrainwrapTotal);
  formData.append("proasstrainall_total", proasstrainallTotal);
  formData.append("graphicartprep_total", graphicartprepTotal);
  formData.append("graphicartall_total", graphicartallTotal);
  formData.append("graphic_art_qty_prep", graphic_art_qty_prep);
  formData.append("graphic_art_uno_prep", graphic_art_uno_prep); 
  formData.append("graphic_art_una_prep", graphic_art_una_prep);
  formData.append("graphic_art_rt_prep", graphic_art_rt_prep);
  formData.append("supervart_qty", supervart_qty);
  formData.append("supervart_uno", supervart_uno);
  formData.append("supervart_una", supervart_una);
  formData.append("supervart_rt", supervart_rt);
  formData.append("supervart_qty_prep", supervart_qty_prep);
  formData.append("supervart_uno_prep", supervart_uno_prep);
  formData.append("supervart_una_prep", supervart_una_prep);
  formData.append("supervart_rt_prep", supervart_rt_prep);
  formData.append("set_design_qty", set_design_qty);
  formData.append("set_design_uno", set_design_uno);
  formData.append("set_design_una", set_design_una);
  formData.append("set_design_rt", set_design_rt);
  formData.append("set_design_qty_prep", set_design_qty_prep);
  formData.append("set_design_uno_prep", set_design_uno_prep);
  formData.append("set_design_una_prep", set_design_una_prep);
  formData.append("set_design_rt_prep", set_design_rt_prep);
  formData.append("junior_draught_qty", junior_draught_qty);
  formData.append("junior_draught_uno", junior_draught_uno);
  formData.append("junior_draught_una", junior_draught_una);
  formData.append("junior_draught_rt", junior_draught_rt);
  formData.append("junior_draught_qty_prep", junior_draught_qty_prep);
  formData.append("junior_draught_uno_prep", junior_draught_uno_prep);
  formData.append("junior_draught_una_prep", junior_draught_una_prep);
  formData.append("junior_draught_rt_prep", junior_draught_rt_prep); 
  formData.append("standby_art_qty", standby_art_qty);
  formData.append("standby_art_uno", standby_art_uno);
  formData.append("standby_art_una", standby_art_una);
  formData.append("standby_art_rt", standby_art_rt);
  formData.append("standby_art_qty_prep", standby_art_qty_prep);
  formData.append("standby_art_uno_prep", standby_art_uno_prep);
  formData.append("standby_art_una_prep", standby_art_una_prep);
  formData.append("standby_art_rt_prep", standby_art_rt_prep);
  formData.append("art_dep_coor_qty", art_dep_coor_qty);
  formData.append("art_dep_coor_uno", art_dep_coor_uno);
  formData.append("art_dep_coor_una", art_dep_coor_una);
  formData.append("art_dep_coor_rt", art_dep_coor_rt);
  formData.append("art_dep_coor_qty_prep", art_dep_coor_qty_prep);
  formData.append("art_dep_coor_uno_prep", art_dep_coor_uno_prep);
  formData.append("art_dep_coor_una_prep", art_dep_coor_una_prep);
  formData.append("art_dep_coor_rt_prep", art_dep_coor_rt_prep);
  formData.append("art_dep_coor_qty_wrap", art_dep_coor_qty_wrap);
  formData.append("art_dep_coor_uno_wrap", art_dep_coor_uno_wrap);
  formData.append("art_dep_coor_una_wrap", art_dep_coor_una_wrap);
  formData.append("art_dep_coor_rt_wrap", art_dep_coor_rt_wrap);
  formData.append("supartdir_total", supartdirTotal);
  formData.append("supartdirprep_total", supartdirprepTotal);
  formData.append("supartdirall_total", supartdirallTotal);
  formData.append("standbyart_total", standbyartTotal);
  formData.append("stbyartprep_total", stbyartprepTotal);
  formData.append("stbyartall_total", stbyartallTotal);
  formData.append("setdes_total", setdesTotal);
  formData.append("setdesprep_total", setdesprepTotal);
  formData.append("setdesall_total", setdesallTotal); 
  formData.append("jundraught_total", jundraughtTotal);
  formData.append("jundraprep_total", jundraprepTotal);
  formData.append("jundraall_total", jundraallTotal);
  formData.append("artcoor_total", artcoorTotal);
  formData.append("artcoorprep_total", artcoorprepTotal);
  formData.append("artcoorwrap_total", artcoorwrapTotal);
  formData.append("artcoorall_total", artcoorallTotal);
  // construction
  formData.append("fringes_taxes_construction", fringes_taxes_construction);
  formData.append("constructioncoordinator_quantity", constructioncoordinator_quantity);
  formData.append("constructioncoordinator_units_number", constructioncoordinator_units_number);
  formData.append("constructioncoordinator_units_name", constructioncoordinator_units_name);
  formData.append("constructioncoordinator_rate", constructioncoordinator_rate);
  formData.append("headcarpenter_quantity", headcarpenter_quantity);
  formData.append("headcarpenter_units_number", headcarpenter_units_number);
  formData.append("headcarpenter_units_name", headcarpenter_units_name);
  formData.append("headcarpenter_rate", headcarpenter_rate);
  formData.append("carpenters_quantity", carpenters_quantity);
  formData.append("carpenters_units_number", carpenters_units_number);
  formData.append("carpenters_units_name", carpenters_units_name);
  formData.append("carpenters_rate", carpenters_rate);
  formData.append("scenicpainters_quantity", scenicpainters_quantity);
  formData.append("scenicpainters_units_number", scenicpainters_units_number);
  formData.append("scenicpainters_units_name", scenicpainters_units_name);
  formData.append("scenicpainters_rate", scenicpainters_rate);
  formData.append("headpainter_quantity", headpainter_quantity);
  formData.append("headpainter_units_number", headpainter_units_number);
  formData.append("headpainter_units_name", headpainter_units_name);
  formData.append("headpainter_rate", headpainter_rate);
  formData.append("painters_quantity", painters_quantity);
  formData.append("painters_units_number", painters_units_number);
  formData.append("painters_units_name", painters_units_name);
  formData.append("painters_rate", painters_rate);
  formData.append("labourers_quantity", labourers_quantity);
  formData.append("labourers_units_number", labourers_units_number);
  formData.append("labourers_units_name", labourers_units_name);
  formData.append("labourers_rate", labourers_rate);
  formData.append("other_construction", other_construction);
  formData.append("constructioncoordinator_total", constructioncoordinatorTotal);
  formData.append("headcarpenter_total", headcarpenterTotal);
  formData.append("carpenters_total", carpentersTotal);
  formData.append("scenicpainters_total", scenicpaintersTotal);
  formData.append("headpainter_total", headpainterTotal);
  formData.append("painters_total", paintersTotal);
  formData.append("labourers_total", labourersTotal);
  formData.append("constructionlabour_total", constructionlabourTotal);
  // new con
  formData.append("days6th7th_unit_con", days6th7th_unit_con);
  formData.append("days6th7th_con", days6th7th_con);
  formData.append("overtime_unit_con", overtime_unit_con);
  formData.append("overtime_con", overtime_con);
  formData.append("holidays_unit_con", holidays_unit_con);
  formData.append("holidays_con", holidays_con);
  formData.append("box_rent_unit_con", box_rent_unit_con);
  formData.append("box_rent_con", box_rent_con);
  formData.append("con_coor_qty_prep", con_coor_qty_prep);
  formData.append("con_coor_uno_prep", con_coor_uno_prep);
  formData.append("con_coor_una_prep", con_coor_una_prep);
  formData.append("con_coor_rt_prep", con_coor_rt_prep);
  formData.append("con_coor_qty_wrap", con_coor_qty_wrap);
  formData.append("con_coor_uno_wrap", con_coor_uno_wrap);
  formData.append("con_coor_una_wrap", con_coor_una_wrap);
  formData.append("con_coor_rt_wrap", con_coor_rt_wrap);
  formData.append("headcar_qty_prep", headcar_qty_prep);
  formData.append("headcar_uno_prep", headcar_uno_prep);
  formData.append("headcar_una_prep", headcar_una_prep);
  formData.append("headcar_rt_prep", headcar_rt_prep);
  formData.append("headcar_qty_wrap", headcar_qty_wrap);
  formData.append("headcar_uno_wrap", headcar_uno_wrap);
  formData.append("headcar_una_wrap", headcar_una_wrap);
  formData.append("headcar_rt_wrap", headcar_rt_wrap);
  formData.append("carpen_qty_prep", carpen_qty_prep);
  formData.append("carpen_uno_prep", carpen_uno_prep);
  formData.append("carpen_una_prep", carpen_una_prep);
  formData.append("carpen_rt_prep", carpen_rt_prep);
  formData.append("carpen_qty_wrap", carpen_qty_wrap);
  formData.append("carpen_uno_wrap", carpen_uno_wrap);
  formData.append("carpen_una_wrap", carpen_una_wrap);
  formData.append("carpen_rt_wrap", carpen_rt_wrap);
  formData.append("scenic_qty_prep", scenic_qty_prep);
  formData.append("scenic_uno_prep", scenic_uno_prep);
  formData.append("scenic_una_prep", scenic_una_prep);
  formData.append("scenic_rt_prep", scenic_rt_prep);
  formData.append("scenic_qty_wrap", scenic_qty_wrap);
  formData.append("scenic_uno_wrap", scenic_uno_wrap);
  formData.append("scenic_una_wrap", scenic_una_wrap);
  formData.append("scenic_rt_wrap", scenic_rt_wrap);
  formData.append("headpain_qty_prep", headpain_qty_prep);
  formData.append("headpain_uno_prep", headpain_uno_prep);
  formData.append("headpain_una_prep", headpain_una_prep);
  formData.append("headpain_rt_prep", headpain_rt_prep);
  formData.append("headpain_qty_wrap", headpain_qty_wrap);
  formData.append("headpain_uno_wrap", headpain_uno_wrap);
  formData.append("headpain_una_wrap", headpain_una_wrap);
  formData.append("headpain_rt_wrap", headpain_rt_wrap);
  formData.append("pain_qty_prep", pain_qty_prep);
  formData.append("pain_uno_prep", pain_uno_prep);
  formData.append("pain_una_prep", pain_una_prep);
  formData.append("pain_rt_prep", pain_rt_prep);
  formData.append("pain_qty_wrap", pain_qty_wrap);
  formData.append("pain_uno_wrap", pain_uno_wrap);
  formData.append("pain_una_wrap", pain_una_wrap);
  formData.append("pain_rt_wrap", pain_rt_wrap);
  formData.append("labo_qty_prep", labo_qty_prep);
  formData.append("labo_uno_prep", labo_uno_prep);
  formData.append("labo_una_prep", labo_una_prep);
  formData.append("labo_rt_prep", labo_rt_prep);
  formData.append("labo_qty_wrap", labo_qty_wrap);
  formData.append("labo_uno_wrap", labo_uno_wrap);
  formData.append("labo_una_wrap", labo_una_wrap);
  formData.append("labo_rt_wrap", labo_rt_wrap);
  formData.append("concoorprep_total", concoorprepTotal);
  formData.append("concoorwrap_total", concoorwrapTotal);
  formData.append("concoorall_total", concoorallTotal);
  formData.append("headcarprep_total", headcarprepTotal);
  formData.append("headcarwrap_total", headcarwrapTotal);
  formData.append("headcarall_total", headcarallTotal);
  formData.append("carpenprep_total", carpenprepTotal);
  formData.append("carpenwrap_total", carpenwrapTotal);
  formData.append("carpenall_total", carpenallTotal);
  formData.append("scenicprep_total", scenicprepTotal);
  formData.append("scenicwrap_total", scenicwrapTotal);
  formData.append("scenicall_total", scenicallTotal);
  formData.append("headpainprep_total", headpainprepTotal);
  formData.append("headpainwrap_total", headpainwrapTotal);
  formData.append("headpainall_total", headpainallTotal);
  formData.append("paintprep_total", paintprepTotal);
  formData.append("paintwrap_total", paintwrapTotal);
  formData.append("paintall_total", paintallTotal);
  formData.append("laboprep_total", laboprepTotal);
  formData.append("labowrap_total", labowrapTotal);
  formData.append("laboall_total", laboallTotal);
  // dressing
  formData.append("fringes_taxes_dressing", fringes_taxes_dressing);
  formData.append("set_decorator_quantity", set_decorator_quantity);
  formData.append("set_decorator_units_number", set_decorator_units_number);
  formData.append("set_decorator_units_name", set_decorator_units_name);
  formData.append("set_decorator_rate", set_decorator_rate);
  formData.append("assist_set_decorator_quantity", assist_set_decorator_quantity);
  formData.append("assist_set_decorator_units_number", assist_set_decorator_units_number);
  formData.append("assist_set_decorator_units_name", assist_set_decorator_units_name);
  formData.append("assist_set_decorator_rate", assist_set_decorator_rate);
  formData.append("lead_man_quantity", lead_man_quantity);
  formData.append("lead_man_units_number", lead_man_units_number);
  formData.append("lead_man_units_name", lead_man_units_name);
  formData.append("lead_man_rate", lead_man_rate);
  formData.append("set_dressers_quantity", set_dressers_quantity);
  formData.append("set_dressers_units_number", set_dressers_units_number);
  formData.append("set_dressers_units_name", set_dressers_units_name);
  formData.append("set_dressers_rate", set_dressers_rate);
  formData.append("swing_gang_quantity", swing_gang_quantity);
  formData.append("swing_gang_units_number", swing_gang_units_number);
  formData.append("swing_gang_units_name", swing_gang_units_name);
  formData.append("swing_gang_rate", swing_gang_rate);
  formData.append("set_dressing_buyer_quantity", set_dressing_buyer_quantity);
  formData.append("set_dressing_buyer_units_number", set_dressing_buyer_units_number);
  formData.append("set_dressing_buyer_units_name", set_dressing_buyer_units_name);
  formData.append("set_dressing_buyer_rate", set_dressing_buyer_rate);
  formData.append("other_set_dressing", other_set_dressing);
  formData.append("decoratorset_total", decoratorsetTotal);
  formData.append("assistdecoratorset_total", assistdecoratorsetTotal);
  formData.append("leadman_total", leadmanTotal);
  formData.append("dressers_total", dressersTotal);
  formData.append("swinggang_total", swinggangTotal);
  formData.append("dressingbuyer_total", dressingbuyerTotal);
  formData.append("dressinglabour_total", dressinglabourTotal);
  // new dress
  formData.append("days6th7th_unit_dres", days6th7th_unit_dres);
  formData.append("days6th7th_dres", days6th7th_dres);
  formData.append("overtime_unit_dres", overtime_unit_dres);
  formData.append("overtime_dres", overtime_dres);
  formData.append("holidays_unit_dres", holidays_unit_dres);
  formData.append("holidays_dres", holidays_dres);
  formData.append("box_rent_unit_dres", box_rent_unit_dres);
  formData.append("box_rent_dres", box_rent_dres);
  formData.append("set_dec_qty_prep", set_dec_qty_prep);
  formData.append("set_dec_uno_prep", set_dec_uno_prep);
  formData.append("set_dec_una_prep", set_dec_una_prep);
  formData.append("set_dec_rt_prep", set_dec_rt_prep);
  formData.append("set_dec_qty_wrap", set_dec_qty_wrap);
  formData.append("set_dec_uno_wrap", set_dec_uno_wrap);
  formData.append("set_dec_una_wrap", set_dec_una_wrap);
  formData.append("set_dec_rt_wrap", set_dec_rt_wrap);
  formData.append("ass_set_d_qty_prep", ass_set_d_qty_prep);
  formData.append("ass_set_d_uno_prep", ass_set_d_uno_prep);
  formData.append("ass_set_d_una_prep", ass_set_d_una_prep);
  formData.append("ass_set_d_rt_prep", ass_set_d_rt_prep);
  formData.append("ass_set_d_qty_wrap", ass_set_d_qty_wrap);
  formData.append("ass_set_d_uno_wrap", ass_set_d_uno_wrap);
  formData.append("ass_set_d_una_wrap", ass_set_d_una_wrap);
  formData.append("ass_set_d_rt_wrap", ass_set_d_rt_wrap);
  formData.append("lead_man_qty_prep", lead_man_qty_prep);
  formData.append("lead_man_uno_prep", lead_man_uno_prep);
  formData.append("lead_man_una_prep", lead_man_una_prep);
  formData.append("lead_man_rt_prep", lead_man_rt_prep);
  formData.append("lead_man_qty_wrap", lead_man_qty_wrap);
  formData.append("lead_man_uno_wrap", lead_man_uno_wrap);
  formData.append("lead_man_una_wrap", lead_man_una_wrap);
  formData.append("lead_man_rt_wrap", lead_man_rt_wrap);
  formData.append("set_dres_qty_prep", set_dres_qty_prep);
  formData.append("set_dres_uno_prep", set_dres_uno_prep);
  formData.append("set_dres_una_prep", set_dres_una_prep);
  formData.append("set_dres_rt_prep", set_dres_rt_prep);
  formData.append("set_dres_qty_wrap", set_dres_qty_wrap);
  formData.append("set_dres_uno_wrap", set_dres_uno_wrap);
  formData.append("set_dres_una_wrap", set_dres_una_wrap);
  formData.append("set_dres_rt_wrap", set_dres_rt_wrap);
  formData.append("swing_g_qty_prep", swing_g_qty_prep);
  formData.append("swing_g_uno_prep", swing_g_uno_prep);
  formData.append("swing_g_una_prep", swing_g_una_prep);
  formData.append("swing_g_rt_prep", swing_g_rt_prep);
  formData.append("swing_g_qty_wrap", swing_g_qty_wrap);
  formData.append("swing_g_uno_wrap", swing_g_uno_wrap);
  formData.append("swing_g_una_wrap", swing_g_una_wrap);
  formData.append("swing_g_rt_wrap", swing_g_rt_wrap);
  formData.append("set_d_buy_qty_prep", set_d_buy_qty_prep);
  formData.append("set_d_buy_uno_prep", set_d_buy_uno_prep);
  formData.append("set_d_buy_una_prep", set_d_buy_una_prep);
  formData.append("set_d_buy_rt_prep", set_d_buy_rt_prep);
  formData.append("set_d_buy_qty_wrap", set_d_buy_qty_wrap);
  formData.append("set_d_buy_uno_wrap", set_d_buy_uno_wrap);
  formData.append("set_d_buy_una_wrap", set_d_buy_una_wrap);
  formData.append("set_d_buy_rt_wrap", set_d_buy_rt_wrap);
  formData.append("decsetprep_total", decsetprepTotal);
  formData.append("decsetwrap_total", decsetwrapTotal);
  formData.append("decsetall_total", decsetallTotal);
  formData.append("assdsetprep_total", assdsetprepTotal);
  formData.append("assdsetwrap_total", assdsetwrapTotal);
  formData.append("assdsetall_total", assdsetallTotal);
  formData.append("leadmanprep_total", leadmanprepTotal);
  formData.append("leadmanwrap_total", leadmanwrapTotal);
  formData.append("leadmanall_total", leadmanallTotal);
  formData.append("dressprep_total", dressprepTotal);
  formData.append("dresswrap_total", dresswrapTotal);
  formData.append("dressall_total", dressallTotal);
  formData.append("swinggprep_total", swinggprepTotal);
  formData.append("swinggwrap_total", swinggwrapTotal);
  formData.append("swinggall_total", swinggallTotal);
  formData.append("dressbuyprep_total", dressbuyprepTotal);
  formData.append("dressbuywrap_total", dressbuywrapTotal);
  formData.append("dressbuyall_total", dressbuyallTotal);
  // property
  formData.append("fringes_taxes_property", fringes_taxes_property);
  formData.append("property_master_quantity", property_master_quantity);
  formData.append("property_master_units_number", property_master_units_number);
  formData.append("property_master_units_name", property_master_units_name);
  formData.append("property_master_rate", property_master_rate);
  formData.append("assist_property_master_quantity", assist_property_master_quantity);
  formData.append("assist_property_master_units_number", assist_property_master_units_number);
  formData.append("assist_property_master_units_name", assist_property_master_units_name);
  formData.append("assist_property_master_rate", assist_property_master_rate);
  formData.append("on_set_props_person_quantity", on_set_props_person_quantity);
  formData.append("on_set_props_person_units_number", on_set_props_person_units_number);
  formData.append("on_set_props_person_units_name", on_set_props_person_units_name);
  formData.append("on_set_props_person_rate", on_set_props_person_rate);
  formData.append("property_buyer_quantity", property_buyer_quantity);
  formData.append("property_buyer_units_number", property_buyer_units_number);
  formData.append("property_buyer_units_name", property_buyer_units_name);
  formData.append("property_buyer_rate", property_buyer_rate);
  formData.append("armorer_quantity", armorer_quantity);
  formData.append("armorer_units_number", armorer_units_number);
  formData.append("armorer_units_name", armorer_units_name);
  formData.append("armorer_rate", armorer_rate);
  formData.append("other_property", other_property);
  formData.append("propertymaster_total", propertymasterTotal);
  formData.append("assistpropertymaster_total", assistpropertymasterTotal);
  formData.append("onsetpropsperson_total", onsetpropspersonTotal);
  formData.append("propertybuyer_total", propertybuyerTotal);
  formData.append("armorer_total", armorerTotal);
  formData.append("propertylabour_total", propertylabourTotal);
  // new prop
  formData.append("days6th7th_unit_prop", days6th7th_unit_prop);
  formData.append("days6th7th_prop", days6th7th_prop);
  formData.append("overtime_unit_prop", overtime_unit_prop);
  formData.append("overtime_prop", overtime_prop);
  formData.append("holidays_unit_prop", holidays_unit_prop);
  formData.append("holidays_prop", holidays_prop);
  formData.append("box_rent_unit_prop", box_rent_unit_prop);
  formData.append("box_rent_prop", box_rent_prop);
  formData.append("pro_mas_qty_prep", pro_mas_qty_prep);
  formData.append("pro_mas_uno_prep", pro_mas_uno_prep);
  formData.append("pro_mas_una_prep", pro_mas_una_prep);
  formData.append("pro_mas_rt_prep", pro_mas_rt_prep);
  formData.append("pro_mas_qty_wrap", pro_mas_qty_wrap);
  formData.append("pro_mas_uno_wrap", pro_mas_uno_wrap);
  formData.append("pro_mas_una_wrap", pro_mas_una_wrap);
  formData.append("pro_mas_rt_wrap", pro_mas_rt_wrap);
  formData.append("as_pro_ma_qty_prep", as_pro_ma_qty_prep);
  formData.append("as_pro_ma_uno_prep", as_pro_ma_uno_prep);
  formData.append("as_pro_ma_una_prep", as_pro_ma_una_prep);
  formData.append("as_pro_ma_rt_prep", as_pro_ma_rt_prep);
  formData.append("as_pro_ma_qty_wrap", as_pro_ma_qty_wrap);
  formData.append("as_pro_ma_uno_wrap", as_pro_ma_uno_wrap);
  formData.append("as_pro_ma_una_wrap", as_pro_ma_una_wrap);
  formData.append("as_pro_ma_rt_wrap", as_pro_ma_rt_wrap);
  formData.append("on_set_prop_qty_prep", on_set_prop_qty_prep);
  formData.append("on_set_prop_uno_prep", on_set_prop_uno_prep);
  formData.append("on_set_prop_una_prep", on_set_prop_una_prep);
  formData.append("on_set_prop_rt_prep", on_set_prop_rt_prep);
  formData.append("on_set_prop_qty_wrap", on_set_prop_qty_wrap);
  formData.append("on_set_prop_uno_wrap", on_set_prop_uno_wrap);
  formData.append("on_set_prop_una_wrap", on_set_prop_una_wrap);
  formData.append("on_set_prop_rt_wrap", on_set_prop_rt_wrap);
  formData.append("prop_buy_qty_prep", prop_buy_qty_prep);
  formData.append("prop_buy_uno_prep", prop_buy_uno_prep);
  formData.append("prop_buy_una_prep", prop_buy_una_prep);
  formData.append("prop_buy_rt_prep", prop_buy_rt_prep);
  formData.append("prop_buy_qty_wrap", prop_buy_qty_wrap);
  formData.append("prop_buy_uno_wrap", prop_buy_uno_wrap);
  formData.append("prop_buy_una_wrap", prop_buy_una_wrap);
  formData.append("prop_buy_rt_wrap", prop_buy_rt_wrap);
  formData.append("armor_qty_prep", armor_qty_prep);
  formData.append("armor_uno_prep", armor_uno_prep);
  formData.append("armor_una_prep", armor_una_prep);
  formData.append("armor_rt_prep", armor_rt_prep);
  formData.append("armor_qty_wrap", armor_qty_wrap);
  formData.append("armor_uno_wrap", armor_uno_wrap);
  formData.append("armor_una_wrap", armor_una_wrap);
  formData.append("armor_rt_wrap", armor_rt_wrap);
  formData.append("propmasprep_total", propmasprepTotal);
  formData.append("propmaswrap_total", propmaswrapTotal);
  formData.append("propmasall_total", propmasallTotal);
  formData.append("aspropmaprep_total", aspropmaprepTotal);
  formData.append("aspropmawrap_total", aspropmawrapTotal);
  formData.append("aspropmaall_total", aspropmaallTotal);
  formData.append("onsetpropprep_total", onsetpropprepTotal);
  formData.append("onsetpropwrap_total", onsetpropwrapTotal);
  formData.append("onsetpropall_total", onsetpropallTotal);
  formData.append("propbuyprep_total", propbuyprepTotal);
  formData.append("propbuywrap_total", propbuywrapTotal);
  formData.append("propbuyall_total", propbuyallTotal);
  formData.append("armorprep_total", armorprepTotal);
  formData.append("armorwrap_total", armorwrapTotal);
  formData.append("armorall_total", armorallTotal);

  try {
    await axiosReq.put(`/budgets1/${budgetId1}/`, formData);
    // console.log(`submit1 ${data}`);
    handleSubmit2(event);
  } catch (err) {
    console.log(err);
    if (err.response?.status !== 401) {
      setErrors(err.response?.data);
    }
  }
  };

  // Submit2
  const handleSubmit2 = async (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append("project", id );
  // wrangling 
  formData.append("fringes_taxes_wrangling", fringes_taxes_wrangling);
  formData.append("head_wrangler_quantity", head_wrangler_quantity);
  formData.append("head_wrangler_units_number", head_wrangler_units_number);
  formData.append("head_wrangler_units_name", head_wrangler_units_name);
  formData.append("head_wrangler_rate", head_wrangler_rate);
  formData.append("other_wrangling_labour_quantity", other_wrangling_labour_quantity);
  formData.append("other_wrangling_labour_units_number", other_wrangling_labour_units_number);
  formData.append("other_wrangling_labour_units_name", other_wrangling_labour_units_name);
  formData.append("other_wrangling_labour_rate", other_wrangling_labour_rate);
  formData.append("headwrangler_total", headwranglerTotal);
  formData.append("otherwranglinglabour_total", otherwranglinglabourTotal);
  formData.append("wranglerlabour_total", wranglerlabourTotal);
  formData.append("days6th7th_unit_wran", days6th7th_unit_wran);
  formData.append("days6th7th_wran", days6th7th_wran);
  formData.append("overtime_unit_wran", overtime_unit_wran);
  formData.append("overtime_wran", overtime_wran);
  formData.append("holidays_unit_wran", holidays_unit_wran);
  formData.append("holidays_wran", holidays_wran);
  formData.append("box_rent_unit_wran", box_rent_unit_wran);
  formData.append("box_rent_wran", box_rent_wran);
  formData.append("other_solo_wran", other_solo_wran);
  formData.append("he_wran_qty_prep", he_wran_qty_prep);
  formData.append("he_wran_uno_prep", he_wran_uno_prep);
  formData.append("he_wran_una_prep", he_wran_una_prep);
  formData.append("he_wran_rt_prep", he_wran_rt_prep);
  formData.append("he_wran_qty_wrap", he_wran_qty_wrap);
  formData.append("he_wran_uno_wrap", he_wran_uno_wrap);
  formData.append("he_wran_una_wrap", he_wran_una_wrap);
  formData.append("he_wran_rt_wrap", he_wran_rt_wrap);
  formData.append("oth_wran_qty_prep", oth_wran_qty_prep);
  formData.append("oth_wran_uno_prep", oth_wran_uno_prep);
  formData.append("oth_wran_una_prep", oth_wran_una_prep);
  formData.append("oth_wran_rt_prep", oth_wran_rt_prep);
  formData.append("oth_wran_qty_wrap", oth_wran_qty_wrap);
  formData.append("oth_wran_uno_wrap", oth_wran_uno_wrap);
  formData.append("oth_wran_una_wrap", oth_wran_una_wrap);
  formData.append("oth_wran_rt_wrap", oth_wran_rt_wrap);
  formData.append("hewranprep_total", hewranprepTotal);
  formData.append("hewranwrap_total", hewranwrapTotal);
  formData.append("hewranall_total", hewranallTotal);
  formData.append("othwranlabprep_total", othwranlabprepTotal);
  formData.append("othwranlabwrap_total", othwranlabwrapTotal);
  formData.append("othwranlaball_total", othwranlaballTotal);
  // fx
  formData.append("fringes_taxes_fx", fringes_taxes_fx);
  formData.append("fx_supervisor_quantity", fx_supervisor_quantity);
  formData.append("fx_supervisor_units_number", fx_supervisor_units_number);
  formData.append("fx_supervisor_units_name", fx_supervisor_units_name);
  formData.append("fx_supervisor_rate", fx_supervisor_rate);
  formData.append("assist_fx_quantity", assist_fx_quantity);
  formData.append("assist_fx_units_number", assist_fx_units_number);
  formData.append("assist_fx_units_name", assist_fx_units_name);
  formData.append("assist_fx_rate", assist_fx_rate);
  formData.append("other_fx_labour_quantity", other_fx_labour_quantity);
  formData.append("other_fx_labour_units_number", other_fx_labour_units_number);
  formData.append("other_fx_labour_units_name", other_fx_labour_units_name);
  formData.append("other_fx_labour_rate", other_fx_labour_rate);
  formData.append("fxsupervisor_total", fxsupervisorTotal);
  formData.append("assistfx_total", assistfxTotal);
  formData.append("otherfxlabour_total", otherfxlabourTotal);
  formData.append("fxlabour_total", fxlabourTotal);
  formData.append("days6th7th_unit_fx", days6th7th_unit_fx);
  formData.append("days6th7th_fx", days6th7th_fx);
  formData.append("overtime_unit_fx", overtime_unit_fx);
  formData.append("overtime_fx", overtime_fx);
  formData.append("holidays_unit_fx", holidays_unit_fx);
  formData.append("holidays_fx", holidays_fx);
  formData.append("box_rent_unit_fx", box_rent_unit_fx);
  formData.append("box_rent_fx", box_rent_fx);
  formData.append("other_solo_fx", other_solo_fx);
  formData.append("fx_sup_qty_prep", fx_sup_qty_prep);
  formData.append("fx_sup_uno_prep", fx_sup_uno_prep);
  formData.append("fx_sup_una_prep", fx_sup_una_prep);
  formData.append("fx_sup_rt_prep", fx_sup_rt_prep);
  formData.append("fx_sup_qty_wrap", fx_sup_qty_wrap);
  formData.append("fx_sup_uno_wrap", fx_sup_uno_wrap);
  formData.append("fx_sup_una_wrap", fx_sup_una_wrap);
  formData.append("fx_sup_rt_wrap", fx_sup_rt_wrap);
  formData.append("ass_fx_qty_prep", ass_fx_qty_prep);
  formData.append("ass_fx_uno_prep", ass_fx_uno_prep);
  formData.append("ass_fx_una_prep", ass_fx_una_prep);
  formData.append("ass_fx_rt_prep", ass_fx_rt_prep);
  formData.append("ass_fx_qty_wrap", ass_fx_qty_wrap);
  formData.append("ass_fx_uno_wrap", ass_fx_uno_wrap);
  formData.append("ass_fx_una_wrap", ass_fx_una_wrap);
  formData.append("ass_fx_rt_wrap", ass_fx_rt_wrap);
  formData.append("ot_fx_l_qty_prep", ot_fx_l_qty_prep);
  formData.append("ot_fx_l_uno_prep", ot_fx_l_uno_prep);
  formData.append("ot_fx_l_una_prep", ot_fx_l_una_prep);
  formData.append("ot_fx_l_rt_prep", ot_fx_l_rt_prep);
  formData.append("ot_fx_l_qty_wrap", ot_fx_l_qty_wrap);
  formData.append("ot_fx_l_uno_wrap", ot_fx_l_uno_wrap);
  formData.append("ot_fx_l_una_wrap", ot_fx_l_una_wrap);
  formData.append("ot_fx_l_rt_wrap", ot_fx_l_rt_wrap);
  formData.append("fxsupprep_total", fxsupprepTotal);
  formData.append("fxsupwrap_total", fxsupwrapTotal);
  formData.append("fxsupall_total", fxsupallTotal);
  formData.append("assfxprep_total", assfxprepTotal);
  formData.append("assfxwrap_total", assfxwrapTotal);
  formData.append("assfxall_total", assfxallTotal);
  formData.append("othfxlabprep_total", othfxlabprepTotal);
  formData.append("othfxlabwrap_total", othfxlabwrapTotal);
  formData.append("othfxlaball_total", othfxlaballTotal);
  // wardrobe
  formData.append("fringes_taxes_wardrobe", fringes_taxes_wardrobe);
  formData.append("costume_designer_quantity", costume_designer_quantity); 
  formData.append("costume_designer_units_number", costume_designer_units_number); 
  formData.append("costume_designer_units_name", costume_designer_units_name); 
  formData.append("costume_designer_rate", costume_designer_rate); 
  formData.append("assist_costume_designer_quantity", assist_costume_designer_quantity);
  formData.append("assist_costume_designer_units_number", assist_costume_designer_units_number); 
  formData.append("assist_costume_designer_units_name", assist_costume_designer_units_name); 
  formData.append("assist_costume_designer_rate", assist_costume_designer_rate); 
  formData.append("head_wardrobe_quantity", head_wardrobe_quantity); 
  formData.append("head_wardrobe_units_number", head_wardrobe_units_number); 
  formData.append("head_wardrobe_units_name", head_wardrobe_units_name); 
  formData.append("head_wardrobe_rate", head_wardrobe_rate); 
  formData.append("wardrobe_assist_quantity", wardrobe_assist_quantity); 
  formData.append("wardrobe_assist_units_number", wardrobe_assist_units_number); 
  formData.append("wardrobe_assist_units_name", wardrobe_assist_units_name); 
  formData.append("wardrobe_assist_rate", wardrobe_assist_rate); 
  formData.append("truck_costumer_quantity", truck_costumer_quantity); 
  formData.append("truck_costumer_units_number", truck_costumer_units_number); 
  formData.append("truck_costumer_units_name", truck_costumer_units_name); 
  formData.append("truck_costumer_rate", truck_costumer_rate); 
  formData.append("other_wardrobe_labour_quantity", other_wardrobe_labour_quantity); 
  formData.append("other_wardrobe_labour_units_number", other_wardrobe_labour_units_number); 
  formData.append("other_wardrobe_labour_units_name", other_wardrobe_labour_units_name); 
  formData.append("other_wardrobe_labour_rate", other_wardrobe_labour_rate); 
  formData.append("costumedesigner_total", costumedesignerTotal); 
  formData.append("assistcosdesigner_total", assistcosdesignerTotal); 
  formData.append("headwardrobe_total", headwardrobeTotal); 
  formData.append("wardrobeassist_total", wardrobeassistTotal); 
  formData.append("truckcostumer_total", truckcostumerTotal); 
  formData.append("otherwardrobe_total", otherwardrobeTotal); 
  formData.append("wardrobelabour_total", wardrobelabourTotal);
  formData.append("days6th7th_unit_war", days6th7th_unit_war);
  formData.append("days6th7th_war", days6th7th_war);
  formData.append("overtime_unit_war", overtime_unit_war);
  formData.append("overtime_war", overtime_war);
  formData.append("holidays_unit_war", holidays_unit_war);
  formData.append("holidays_war", holidays_war);
  formData.append("box_rent_unit_war", box_rent_unit_war);
  formData.append("box_rent_war", box_rent_war);
  formData.append("other_solo_war", other_solo_war);
  formData.append("cos_des_qty_prep", cos_des_qty_prep);
  formData.append("cos_des_uno_prep", cos_des_uno_prep);
  formData.append("cos_des_una_prep", cos_des_una_prep);
  formData.append("cos_des_rt_prep", cos_des_rt_prep);
  formData.append("cos_des_qty_wrap", cos_des_qty_wrap);
  formData.append("cos_des_uno_wrap", cos_des_uno_wrap);
  formData.append("cos_des_una_wrap", cos_des_una_wrap);
  formData.append("cos_des_rt_wrap", cos_des_rt_wrap);
  formData.append("as_cos_des_qty_prep", as_cos_des_qty_prep);
  formData.append("as_cos_des_uno_prep", as_cos_des_uno_prep);
  formData.append("as_cos_des_una_prep", as_cos_des_una_prep);
  formData.append("as_cos_des_rt_prep", as_cos_des_rt_prep);
  formData.append("as_cos_des_qty_wrap", as_cos_des_qty_wrap);
  formData.append("as_cos_des_uno_wrap", as_cos_des_uno_wrap);
  formData.append("as_cos_des_una_wrap", as_cos_des_una_wrap);
  formData.append("as_cos_des_rt_wrap", as_cos_des_rt_wrap);
  formData.append("he_war_qty_prep", he_war_qty_prep);
  formData.append("he_war_uno_prep", he_war_uno_prep);
  formData.append("he_war_una_prep", he_war_una_prep);
  formData.append("he_war_rt_prep", he_war_rt_prep);
  formData.append("he_war_qty_wrap", he_war_qty_wrap);
  formData.append("he_war_uno_wrap", he_war_uno_wrap);
  formData.append("he_war_una_wrap", he_war_una_wrap);
  formData.append("he_war_rt_wrap", he_war_rt_wrap);
  formData.append("war_as_qty_prep", war_as_qty_prep);
  formData.append("war_as_uno_prep", war_as_uno_prep);
  formData.append("war_as_una_prep", war_as_una_prep);
  formData.append("war_as_rt_prep", war_as_rt_prep);
  formData.append("war_as_qty_wrap", war_as_qty_wrap);
  formData.append("war_as_uno_wrap", war_as_uno_wrap);
  formData.append("war_as_una_wrap", war_as_una_wrap);
  formData.append("war_as_rt_wrap", war_as_rt_wrap);
  formData.append("tru_cos_qty_prep", tru_cos_qty_prep);
  formData.append("tru_cos_uno_prep", tru_cos_uno_prep);
  formData.append("tru_cos_una_prep", tru_cos_una_prep);
  formData.append("tru_cos_rt_prep", tru_cos_rt_prep);
  formData.append("tru_cos_qty_wrap", tru_cos_qty_wrap);
  formData.append("tru_cos_uno_wrap", tru_cos_uno_wrap);
  formData.append("tru_cos_una_wrap", tru_cos_una_wrap);
  formData.append("tru_cos_rt_wrap", tru_cos_rt_wrap);
  formData.append("ot_war_qty_prep", ot_war_qty_prep);
  formData.append("ot_war_uno_prep", ot_war_uno_prep);
  formData.append("ot_war_una_prep", ot_war_una_prep);
  formData.append("ot_war_rt_prep", ot_war_rt_prep);
  formData.append("ot_war_qty_wrap", ot_war_qty_wrap);
  formData.append("ot_war_uno_wrap", ot_war_uno_wrap);
  formData.append("ot_war_una_wrap", ot_war_una_wrap);
  formData.append("ot_war_rt_wrap", ot_war_rt_wrap);
  formData.append("shopper_qty", shopper_qty);
  formData.append("shopper_uno", shopper_uno);
  formData.append("shopper_una", shopper_una);
  formData.append("shopper_rt", shopper_rt);
  formData.append("shopper_qty_prep", shopper_qty_prep);
  formData.append("shopper_uno_prep", shopper_uno_prep);
  formData.append("shopper_una_prep", shopper_una_prep);
  formData.append("shopper_rt_prep", shopper_rt_prep);
  formData.append("tailors", tailors);
  formData.append("textile_ar", textile_ar);
  formData.append("cosdesprep_total", cosdesprepTotal);
  formData.append("cosdeswrap_total", cosdeswrapTotal);
  formData.append("cosdesall_total", cosdesallTotal);
  formData.append("ascosdesprep_total", ascosdesprepTotal);
  formData.append("ascosdeswrap_total", ascosdeswrapTotal);
  formData.append("ascosdesall_total", ascosdesallTotal);
  formData.append("hewarprep_total", hewarprepTotal);
  formData.append("hewarwrap_total", hewarwrapTotal);
  formData.append("hewarall_total", hewarallTotal);
  formData.append("warasprep_total", warasprepTotal);
  formData.append("waraswrap_total", waraswrapTotal);
  formData.append("warasall_total", warasallTotal);
  formData.append("trucosprep_total", trucosprepTotal);
  formData.append("trucoswrap_total", trucoswrapTotal);
  formData.append("trucosall_total", trucosallTotal);
  formData.append("shopper_total", shopperTotal);
  formData.append("shopprep_total", shopprepTotal);
  formData.append("shopall_total", shopallTotal);
  formData.append("othwarprep_total", othwarprepTotal);
  formData.append("othwarwrap_total", othwarwrapTotal);
  formData.append("othwarall_total", othwarallTotal);
  formData.append("war_coor_qty", war_coor_qty);
  formData.append("war_coor_uno", war_coor_uno);
  formData.append("war_coor_una", war_coor_una);
  formData.append("war_coor_rt", war_coor_rt);
  formData.append("war_coor_qty_prep", war_coor_qty_prep);
  formData.append("war_coor_uno_prep", war_coor_uno_prep);
  formData.append("war_coor_una_prep", war_coor_una_prep);
  formData.append("war_coor_rt_prep", war_coor_rt_prep);
  formData.append("war_coor_qty_wrap", war_coor_qty_wrap);
  formData.append("war_coor_uno_wrap", war_coor_uno_wrap);
  formData.append("war_coor_una_wrap", war_coor_una_wrap);
  formData.append("war_coor_rt_wrap", war_coor_rt_wrap);
  formData.append("train_qty_prep", train_qty_prep);
  formData.append("train_uno_prep", train_uno_prep);
  formData.append("train_una_prep", train_una_prep);
  formData.append("train_rt_prep", train_rt_prep);
  formData.append("train_qty", train_qty);
  formData.append("train_uno", train_uno);
  formData.append("train_una", train_una);
  formData.append("train_rt", train_rt);
  formData.append("train_qty_wrap", train_qty_wrap);
  formData.append("train_uno_wrap", train_uno_wrap);
  formData.append("train_una_wrap", train_una_wrap);
  formData.append("train_rt_wrap", train_rt_wrap);
  formData.append("day_war_qty", day_war_qty);
  formData.append("day_war_uno", day_war_uno);
  formData.append("day_war_una", day_war_una);
  formData.append("day_war_rt", day_war_rt);
  formData.append("warcoor_total", warcoorTotal);
  formData.append("warcoprep_total", warcoprepTotal);
  formData.append("warcowrap_total", warcowrapTotal);
  formData.append("warcoall_total", warcoallTotal);
  formData.append("wartrain_total", wartrainTotal);
  formData.append("wartraprep_total", wartraprepTotal);
  formData.append("wartrawrap_total", wartrawrapTotal);
  formData.append("wartraall_total", wartraallTotal);
  formData.append("warday_total", wardayTotal);
  // makeup
  formData.append("fringes_taxes_makeup", fringes_taxes_makeup);
  formData.append("makeup_dept_head_quantity", makeup_dept_head_quantity);
  formData.append("makeup_dept_head_units_number", makeup_dept_head_units_number);
  formData.append("makeup_dept_head_units_name", makeup_dept_head_units_name);
  formData.append("makeup_dept_head_rate", makeup_dept_head_rate);
  formData.append("key_makeup_quantity", key_makeup_quantity);
  formData.append("key_makeup_units_number", key_makeup_units_number);
  formData.append("key_makeup_units_name", key_makeup_units_name);
  formData.append("key_makeup_rate", key_makeup_rate);
  formData.append("makeup_artist_quantity", makeup_artist_quantity);
  formData.append("makeup_artist_units_number", makeup_artist_units_number);
  formData.append("makeup_artist_units_name", makeup_artist_units_name);
  formData.append("makeup_artist_rate", makeup_artist_rate);
  formData.append("key_hairstylist_quantity", key_hairstylist_quantity);
  formData.append("key_hairstylist_units_number", key_hairstylist_units_number);
  formData.append("key_hairstylist_units_name", key_hairstylist_units_name);
  formData.append("key_hairstylist_rate", key_hairstylist_rate);
  formData.append("hairdresser_quantity", hairdresser_quantity);
  formData.append("hairdresser_units_number", hairdresser_units_number);
  formData.append("hairdresser_units_name", hairdresser_units_name);
  formData.append("hairdresser_rate", hairdresser_rate);
  formData.append("hair_makeup_dailies_quantity", hair_makeup_dailies_quantity);
  formData.append("hair_makeup_dailies_units_number", hair_makeup_dailies_units_number);
  formData.append("hair_makeup_dailies_units_name", hair_makeup_dailies_units_name);
  formData.append("hair_makeup_dailies_rate", hair_makeup_dailies_rate);
  formData.append("other_makeup_labour_quantity", other_makeup_labour_quantity);
  formData.append("other_makeup_labour_units_number", other_makeup_labour_units_number);
  formData.append("other_makeup_labour_units_name", other_makeup_labour_units_name);
  formData.append("other_makeup_labour_rate", other_makeup_labour_rate);
  formData.append("sfx_makeup_quantity", sfx_makeup_quantity);
  formData.append("sfx_makeup_units_number", sfx_makeup_units_number);
  formData.append("sfx_makeup_units_name", sfx_makeup_units_name);
  formData.append("sfx_makeup_rate", sfx_makeup_rate);
  formData.append("headmakeup_total", headmakeupTotal);
  formData.append("keymakeup_total", keymakeupTotal);
  formData.append("makeupartist_total", makeupartistTotal);
  formData.append("keyhairstylist_total", keyhairstylistTotal);
  formData.append("hairdresser_total", hairdresserTotal);
  formData.append("hairmakeupdailies_total", hairmakeupdailiesTotal);
  formData.append("othermakeuplabour_total", othermakeuplabourTotal);
  formData.append("sfxmakeup_total", sfxmakeupTotal);
  formData.append("makeuplabour_total", makeuplabourTotal);
  formData.append("days6th7th_unit_mak", days6th7th_unit_mak);
  formData.append("days6th7th_mak", days6th7th_mak);
  formData.append("overtime_unit_mak", overtime_unit_mak);
  formData.append("overtime_mak", overtime_mak);
  formData.append("holidays_unit_mak", holidays_unit_mak);
  formData.append("holidays_mak", holidays_mak);
  formData.append("box_rent_unit_mak", box_rent_unit_mak);
  formData.append("box_rent_mak", box_rent_mak);
  formData.append("other_solo_mak", other_solo_mak);
  formData.append("mak_head_qty_prep", mak_head_qty_prep);
  formData.append("mak_head_uno_prep", mak_head_uno_prep);
  formData.append("mak_head_una_prep", mak_head_una_prep);
  formData.append("mak_head_rt_prep", mak_head_rt_prep);
  formData.append("mak_head_qty_wrap", mak_head_qty_wrap);
  formData.append("mak_head_uno_wrap", mak_head_uno_wrap);
  formData.append("mak_head_una_wrap", mak_head_una_wrap);
  formData.append("mak_head_rt_wrap", mak_head_rt_wrap);
  formData.append("key_mak_qty_prep", key_mak_qty_prep);
  formData.append("key_mak_uno_prep", key_mak_uno_prep);
  formData.append("key_mak_una_prep", key_mak_una_prep);
  formData.append("key_mak_rt_prep", key_mak_rt_prep);
  formData.append("key_mak_qty_wrap", key_mak_qty_wrap);
  formData.append("key_mak_uno_wrap", key_mak_uno_wrap);
  formData.append("key_mak_una_wrap", key_mak_una_wrap);
  formData.append("key_mak_rt_wrap", key_mak_rt_wrap);
  formData.append("mak_art_qty_prep", mak_art_qty_prep);
  formData.append("mak_art_uno_prep", mak_art_uno_prep);
  formData.append("mak_art_una_prep", mak_art_una_prep);
  formData.append("mak_art_rt_prep", mak_art_rt_prep);
  formData.append("mak_art_qty_wrap", mak_art_qty_wrap);
  formData.append("mak_art_uno_wrap", mak_art_uno_wrap);
  formData.append("mak_art_una_wrap", mak_art_una_wrap);
  formData.append("mak_art_rt_wrap", mak_art_rt_wrap);
  formData.append("key_hair_qty_prep", key_hair_qty_prep);
  formData.append("key_hair_uno_prep", key_hair_uno_prep);
  formData.append("key_hair_una_prep", key_hair_una_prep);
  formData.append("key_hair_rt_prep", key_hair_rt_prep);
  formData.append("key_hair_qty_wrap", key_hair_qty_wrap);
  formData.append("key_hair_uno_wrap", key_hair_uno_wrap);
  formData.append("key_hair_una_wrap", key_hair_una_wrap);
  formData.append("key_hair_rt_wrap", key_hair_rt_wrap);
  formData.append("hair_qty_prep", hair_qty_prep);
  formData.append("hair_uno_prep", hair_uno_prep);
  formData.append("hair_una_prep", hair_una_prep);
  formData.append("hair_rt_prep", hair_rt_prep);
  formData.append("hair_qty_wrap", hair_qty_wrap);
  formData.append("hair_uno_wrap", hair_uno_wrap);
  formData.append("hair_una_wrap", hair_una_wrap);
  formData.append("hair_rt_wrap", hair_rt_wrap);
  formData.append("oth_mak_qty_prep", oth_mak_qty_prep);
  formData.append("oth_mak_uno_prep", oth_mak_uno_prep);
  formData.append("oth_mak_una_prep", oth_mak_una_prep);
  formData.append("oth_mak_rt_prep", oth_mak_rt_prep);
  formData.append("oth_mak_qty_wrap", oth_mak_qty_wrap);
  formData.append("oth_mak_uno_wrap", oth_mak_uno_wrap);
  formData.append("oth_mak_una_wrap", oth_mak_una_wrap);
  formData.append("oth_mak_rt_wrap", oth_mak_rt_wrap);
  formData.append("sfx_mak_qty_prep", sfx_mak_qty_prep);
  formData.append("sfx_mak_uno_prep", sfx_mak_uno_prep);
  formData.append("sfx_mak_una_prep", sfx_mak_una_prep);
  formData.append("sfx_mak_rt_prep", sfx_mak_rt_prep);
  formData.append("sfx_mak_qty_wrap", sfx_mak_qty_wrap);
  formData.append("sfx_mak_uno_wrap", sfx_mak_uno_wrap);
  formData.append("sfx_mak_una_wrap", sfx_mak_una_wrap);
  formData.append("sfx_mak_rt_wrap", sfx_mak_rt_wrap);
  formData.append("mak_train_qty", mak_train_qty);
  formData.append("mak_train_uno", mak_train_uno);
  formData.append("mak_train_una", mak_train_una);
  formData.append("mak_train_rt", mak_train_rt);
  formData.append("mak_train_qty_prep", mak_train_qty_prep);
  formData.append("mak_train_uno_prep", mak_train_uno_prep);
  formData.append("mak_train_una_prep", mak_train_una_prep);
  formData.append("mak_train_rt_prep", mak_train_rt_prep);
  formData.append("mak_train_qty_wrap", mak_train_qty_wrap);
  formData.append("mak_train_uno_wrap", mak_train_uno_wrap);
  formData.append("mak_train_una_wrap", mak_train_una_wrap);
  formData.append("mak_train_rt_wrap", mak_train_rt_wrap);
  formData.append("headmakprep_total", headmakprepTotal);
  formData.append("headmakwrap_total", headmakwrapTotal);
  formData.append("headmakall_total", headmakallTotal);
  formData.append("keymakprep_total", keymakprepTotal);
  formData.append("keymakwrap_total", keymakwrapTotal);
  formData.append("keymakall_total", keymakallTotal);
  formData.append("makartprep_total", makartprepTotal);
  formData.append("makartwrap_total", makartwrapTotal);
  formData.append("makartall_total", makartallTotal);
  formData.append("keyhairprep_total", keyhairprepTotal);
  formData.append("keyhairwrap_total", keyhairwrapTotal);
  formData.append("keyhairall_total", keyhairallTotal);
  formData.append("hairprep_total", hairprepTotal);
  formData.append("hairwrap_total", hairwrapTotal);
  formData.append("hairall_total", hairallTotal);
  formData.append("othmakprep_total", othmakprepTotal);
  formData.append("othmakwrap_total", othmakwrapTotal);
  formData.append("othmakall_total", othmakallTotal);
  formData.append("sfxmakprep_total", sfxmakprepTotal);
  formData.append("sfxmakwrap_total", sfxmakwrapTotal);
  formData.append("sfxmakall_total", sfxmakallTotal);
  formData.append("maktrain_total", maktrainTotal);
  formData.append("maktraprep_total", maktraprepTotal);
  formData.append("maktrawrap_total", maktrawrapTotal);
  formData.append("maktraall_total", maktraallTotal);
  // camera
  formData.append("fringes_taxes_camera", fringes_taxes_camera);
  formData.append("dop_qty", dop_qty);
  formData.append("dop_uno", dop_uno);
  formData.append("dop_una", dop_una);
  formData.append("dop_rt", dop_rt);
  formData.append("camera_op_qty", camera_op_qty);
  formData.append("camera_op_uno", camera_op_uno);
  formData.append("camera_op_una", camera_op_una);
  formData.append("camera_op_rt", camera_op_rt);
  formData.append("cam_ac1_qty", cam_ac1_qty);
  formData.append("cam_ac1_uno", cam_ac1_uno);
  formData.append("cam_ac1_una", cam_ac1_una);
  formData.append("cam_ac1_rt", cam_ac1_rt);
  formData.append("cam_ac2_qty", cam_ac2_qty);
  formData.append("cam_ac2_uno", cam_ac2_uno);
  formData.append("cam_ac2_una", cam_ac2_una);
  formData.append("cam_ac2_rt", cam_ac2_rt);
  formData.append("dit_qty", dit_qty);
  formData.append("dit_uno", dit_uno);
  formData.append("dit_una", dit_una);
  formData.append("dit_rt", dit_rt);
  formData.append("steadicam_qty", steadicam_qty);
  formData.append("steadicam_uno", steadicam_uno);
  formData.append("steadicam_una", steadicam_una);
  formData.append("steadicam_rt", steadicam_rt);
  formData.append("cam_pa_qty", cam_pa_qty);
  formData.append("cam_pa_uno", cam_pa_uno);
  formData.append("cam_pa_una", cam_pa_una);
  formData.append("cam_pa_rt", cam_pa_rt);
  formData.append("drone_pilot_qty", drone_pilot_qty);
  formData.append("drone_pilot_uno", drone_pilot_uno);
  formData.append("drone_pilot_una", drone_pilot_una);
  formData.append("drone_pilot_rt", drone_pilot_rt);
  formData.append("other_cam_qty", other_cam_qty);
  formData.append("other_cam_uno", other_cam_uno);
  formData.append("other_cam_una", other_cam_una);
  formData.append("other_cam_rt", other_cam_rt);
  formData.append("stills_qty", stills_qty);
  formData.append("stills_uno", stills_uno);
  formData.append("stills_una", stills_una);
  formData.append("stills_rt", stills_rt);
  formData.append("stills_total", stillsTotal);
  formData.append("dop_total", dopTotal);
  formData.append("cameraop_total", cameraopTotal);
  formData.append("camac1_total", camac1Total);
  formData.append("camac2_total", camac2Total);
  formData.append("dit_total", ditTotal);
  formData.append("steadicam_total", steadicamTotal);
  formData.append("campa_total", campaTotal);
  formData.append("dronepilot_total", dronepilotTotal);
  formData.append("othercam_total", othercamTotal);
  formData.append("cameralabour_total", cameralabourTotal);
  formData.append("days6th7th_unit_cam", days6th7th_unit_cam);
  formData.append("days6th7th_cam", days6th7th_cam);
  formData.append("overtime_unit_cam", overtime_unit_cam);
  formData.append("overtime_cam", overtime_cam);
  formData.append("holidays_unit_cam", holidays_unit_cam);
  formData.append("holidays_cam", holidays_cam);
  formData.append("box_rent_unit_cam", box_rent_unit_cam);
  formData.append("box_rent_cam", box_rent_cam);
  formData.append("other_solo_cam", other_solo_cam);
  formData.append("dop_qty_prep", dop_qty_prep);
  formData.append("dop_uno_prep", dop_uno_prep);
  formData.append("dop_una_prep", dop_una_prep);
  formData.append("dop_rt_prep", dop_rt_prep);
  formData.append("dop_qty_wrap", dop_qty_wrap);
  formData.append("dop_uno_wrap", dop_uno_wrap);
  formData.append("dop_una_wrap", dop_una_wrap);
  formData.append("dop_rt_wrap", dop_rt_wrap);
  formData.append("cam_op_qty_prep", cam_op_qty_prep);
  formData.append("cam_op_uno_prep", cam_op_uno_prep);
  formData.append("cam_op_una_prep", cam_op_una_prep);
  formData.append("cam_op_rt_prep", cam_op_rt_prep);
  formData.append("cam_op_qty_wrap", cam_op_qty_wrap);
  formData.append("cam_op_uno_wrap", cam_op_uno_wrap);
  formData.append("cam_op_una_wrap", cam_op_una_wrap);
  formData.append("cam_op_rt_wrap", cam_op_rt_wrap);
  formData.append("cam_ac1_qty_prep", cam_ac1_qty_prep);
  formData.append("cam_ac1_uno_prep", cam_ac1_uno_prep);
  formData.append("cam_ac1_una_prep", cam_ac1_una_prep);
  formData.append("cam_ac1_rt_prep", cam_ac1_rt_prep);
  formData.append("cam_ac1_qty_wrap", cam_ac1_qty_wrap);
  formData.append("cam_ac1_uno_wrap", cam_ac1_uno_wrap);
  formData.append("cam_ac1_una_wrap", cam_ac1_una_wrap);
  formData.append("cam_ac1_rt_wrap", cam_ac1_rt_wrap);
  formData.append("cam_ac2_qty_prep", cam_ac2_qty_prep);
  formData.append("cam_ac2_uno_prep", cam_ac2_uno_prep);
  formData.append("cam_ac2_una_prep", cam_ac2_una_prep);
  formData.append("cam_ac2_rt_prep", cam_ac2_rt_prep);
  formData.append("cam_ac2_qty_wrap", cam_ac2_qty_wrap);
  formData.append("cam_ac2_uno_wrap", cam_ac2_uno_wrap);
  formData.append("cam_ac2_una_wrap", cam_ac2_una_wrap);
  formData.append("cam_ac2_rt_wrap", cam_ac2_rt_wrap);
  formData.append("dit_qty_prep", dit_qty_prep);
  formData.append("dit_uno_prep", dit_uno_prep);
  formData.append("dit_una_prep", dit_una_prep);
  formData.append("dit_rt_prep", dit_rt_prep);
  formData.append("dit_qty_wrap", dit_qty_wrap);
  formData.append("dit_uno_wrap", dit_uno_wrap);
  formData.append("dit_una_wrap", dit_una_wrap);
  formData.append("dit_rt_wrap", dit_rt_wrap);
  formData.append("stead_qty_prep", stead_qty_prep);
  formData.append("stead_uno_prep", stead_uno_prep);
  formData.append("stead_una_prep", stead_una_prep);
  formData.append("stead_rt_prep", stead_rt_prep);
  formData.append("stead_qty_wrap", stead_qty_wrap);
  formData.append("stead_uno_wrap", stead_uno_wrap);
  formData.append("stead_una_wrap", stead_una_wrap);
  formData.append("stead_rt_wrap", stead_rt_wrap);
  formData.append("cam_pa_qty_prep", cam_pa_qty_prep);
  formData.append("cam_pa_uno_prep", cam_pa_uno_prep);
  formData.append("cam_pa_una_prep", cam_pa_una_prep);
  formData.append("cam_pa_rt_prep", cam_pa_rt_prep);
  formData.append("cam_pa_qty_wrap", cam_pa_qty_wrap);
  formData.append("cam_pa_uno_wrap", cam_pa_uno_wrap);
  formData.append("cam_pa_una_wrap", cam_pa_una_wrap);
  formData.append("cam_pa_rt_wrap", cam_pa_rt_wrap);
  formData.append("dro_pil_qty_prep", dro_pil_qty_prep);
  formData.append("dro_pil_uno_prep", dro_pil_uno_prep);
  formData.append("dro_pil_una_prep", dro_pil_una_prep);
  formData.append("dro_pil_rt_prep", dro_pil_rt_prep);
  formData.append("dro_pil_qty_wrap", dro_pil_qty_wrap);
  formData.append("dro_pil_uno_wrap", dro_pil_uno_wrap);
  formData.append("dro_pil_una_wrap", dro_pil_una_wrap);
  formData.append("dro_pil_rt_wrap", dro_pil_rt_wrap);
  formData.append("ot_cam_qty_prep", ot_cam_qty_prep);
  formData.append("ot_cam_uno_prep", ot_cam_uno_prep);
  formData.append("ot_cam_una_prep", ot_cam_una_prep);
  formData.append("ot_cam_rt_prep", ot_cam_rt_prep);
  formData.append("ot_cam_qty_wrap", ot_cam_qty_wrap);
  formData.append("ot_cam_uno_wrap", ot_cam_uno_wrap);
  formData.append("ot_cam_una_wrap", ot_cam_una_wrap);
  formData.append("ot_cam_rt_wrap", ot_cam_rt_wrap);
  formData.append("dopprep_total", dopprepTotal);
  formData.append("dopwrap_total", dopwrapTotal);
  formData.append("dopall_total", dopallTotal);
  formData.append("camopprep_total", camopprepTotal);
  formData.append("camopwrap_total", camopwrapTotal);
  formData.append("camopall_total", camopallTotal);
  formData.append("camac1prep_total", camac1prepTotal);
  formData.append("camac1wrap_total", camac1wrapTotal);
  formData.append("camac1all_total", camac1allTotal);
  formData.append("camac2prep_total", camac2prepTotal);
  formData.append("camac2wrap_total", camac2wrapTotal);
  formData.append("camac2all_total", camac2allTotal);
  formData.append("ditprep_total", ditprepTotal);
  formData.append("ditwrap_total", ditwrapTotal);
  formData.append("ditall_total", ditallTotal);
  formData.append("stecamprep_total", stecamprepTotal);
  formData.append("stecamwrap_total", stecamwrapTotal);
  formData.append("stecamall_total", stecamallTotal);
  formData.append("campaprep_total", campaprepTotal);
  formData.append("campawrap_total", campawrapTotal);
  formData.append("campaall_total", campaallTotal);
  formData.append("dronpiprep_total", dronpiprepTotal);
  formData.append("dronpiwrap_total", dronpiwrapTotal);
  formData.append("dronpiall_total", dronpiallTotal);
  formData.append("othcamprepTotal", othcamprepTotal);
  formData.append("othcamwrap_total", othcamwrapTotal);
  formData.append("othcamall_total", othcamallTotal);
  // electric
  formData.append("fringes_taxes_electric", fringes_taxes_electric);
  formData.append("gaffer_qty", gaffer_qty);
  formData.append("gaffer_uno", gaffer_uno);
  formData.append("gaffer_una", gaffer_una);
  formData.append("gaffer_rt", gaffer_rt);
  formData.append("best_boy_qty", best_boy_qty);
  formData.append("best_boy_uno", best_boy_uno);
  formData.append("best_boy_una", best_boy_una);
  formData.append("best_boy_rt", best_boy_rt);
  formData.append("electrician_qty", electrician_qty);
  formData.append("electrician_uno", electrician_uno);
  formData.append("electrician_una", electrician_una);
  formData.append("electrician_rt", electrician_rt);
  formData.append("dailies_elec_qty", dailies_elec_qty);
  formData.append("dailies_elec_uno", dailies_elec_uno);
  formData.append("dailies_elec_una", dailies_elec_una);
  formData.append("dailies_elec_rt", dailies_elec_rt);
  formData.append("generator_op_qty", generator_op_qty);
  formData.append("generator_op_uno", generator_op_uno);
  formData.append("generator_op_una", generator_op_una);
  formData.append("generator_op_rt", generator_op_rt);
  formData.append("other_elec_qty", other_elec_qty);
  formData.append("other_elec_uno", other_elec_uno);
  formData.append("other_elec_una", other_elec_una);
  formData.append("other_elec_rt", other_elec_rt);
  formData.append("gaffer_total", gafferTotal);
  formData.append("bestboy_total", bestboyTotal);
  formData.append("electrician_total", electricianTotal);
  formData.append("dailieselec_total", dailieselecTotal);
  formData.append("generatorop_total", generatoropTotal);
  formData.append("otherelectric_total", otherelectricTotal);
  formData.append("electriclabour_total", electriclabourTotal);
  formData.append("days6th7th_unit_ele", days6th7th_unit_ele);
  formData.append("days6th7th_ele", days6th7th_ele);
  formData.append("overtime_unit_ele", overtime_unit_ele);
  formData.append("overtime_ele", overtime_ele);
  formData.append("holidays_unit_ele", holidays_unit_ele);
  formData.append("holidays_ele", holidays_ele);
  formData.append("box_rent_unit_ele", box_rent_unit_ele);
  formData.append("box_rent_ele", box_rent_ele);
  formData.append("other_solo_ele", other_solo_ele);
  formData.append("gaf_qty_prep", gaf_qty_prep);
  formData.append("gaf_uno_prep", gaf_uno_prep);
  formData.append("gaf_una_prep", gaf_una_prep);
  formData.append("gaf_rt_prep", gaf_rt_prep);
  formData.append("gaf_qty_wrap", gaf_qty_wrap);
  formData.append("gaf_uno_wrap", gaf_uno_wrap);
  formData.append("gaf_una_wrap", gaf_una_wrap);
  formData.append("gaf_rt_wrap", gaf_rt_wrap);
  formData.append("b_boy_qty_prep", b_boy_qty_prep);
  formData.append("b_boy_uno_prep", b_boy_uno_prep);
  formData.append("b_boy_una_prep", b_boy_una_prep);
  formData.append("b_boy_rt_prep", b_boy_rt_prep);
  formData.append("b_boy_qty_wrap", b_boy_qty_wrap);
  formData.append("b_boy_uno_wrap", b_boy_uno_wrap);
  formData.append("b_boy_una_wrap", b_boy_una_wrap);
  formData.append("b_boy_rt_wrap", b_boy_rt_wrap);
  formData.append("elec_qty_prep", elec_qty_prep);
  formData.append("elec_uno_prep", elec_uno_prep);
  formData.append("elec_una_prep", elec_una_prep);
  formData.append("elec_rt_prep", elec_rt_prep);
  formData.append("elec_qty_wrap", elec_qty_wrap);
  formData.append("elec_uno_wrap", elec_uno_wrap);
  formData.append("elec_una_wrap", elec_una_wrap);
  formData.append("elec_rt_wrap", elec_rt_wrap);
  formData.append("d_elec_qty_prep", d_elec_qty_prep);
  formData.append("d_elec_uno_prep", d_elec_uno_prep);
  formData.append("d_elec_una_prep", d_elec_una_prep);
  formData.append("d_elec_rt_prep", d_elec_rt_prep);
  formData.append("d_elec_qty_wrap", d_elec_qty_wrap);
  formData.append("d_elec_uno_wrap", d_elec_uno_wrap);
  formData.append("d_elec_una_wrap", d_elec_una_wrap);
  formData.append("d_elec_rt_wrap", d_elec_rt_wrap);
  formData.append("gen_op_qty_prep", gen_op_qty_prep);
  formData.append("gen_op_uno_prep", gen_op_uno_prep);
  formData.append("gen_op_una_prep", gen_op_una_prep);
  formData.append("gen_op_rt_prep", gen_op_rt_prep);
  formData.append("gen_op_qty_wrap", gen_op_qty_wrap);
  formData.append("gen_op_uno_wrap", gen_op_uno_wrap);
  formData.append("gen_op_una_wrap", gen_op_una_wrap);
  formData.append("gen_op_rt_wrap", gen_op_rt_wrap);
  formData.append("ot_el_qty_prep", ot_el_qty_prep);
  formData.append("ot_el_uno_prep", ot_el_uno_prep);
  formData.append("ot_el_una_prep", ot_el_una_prep);
  formData.append("ot_el_rt_prep", ot_el_rt_prep);
  formData.append("ot_el_qty_wrap", ot_el_qty_wrap);
  formData.append("ot_el_uno_wrap", ot_el_uno_wrap);
  formData.append("ot_el_una_wrap", ot_el_una_wrap);
  formData.append("ot_el_rt_wrap", ot_el_rt_wrap);
  formData.append("gafprep_total", gafprepTotal);
  formData.append("gafwrap_total", gafwrapTotal);
  formData.append("gafall_total", gafallTotal);
  formData.append("bboyprep_total", bboyprepTotal);
  formData.append("bboywrap_total", bboywrapTotal);
  formData.append("bboyall_total", bboyallTotal);
  formData.append("elecprep_total", elecprepTotal);
  formData.append("elecwrapTotal", elecwrapTotal);
  formData.append("elecall_total", elecallTotal);
  formData.append("daelecprep_total", daelecprepTotal);
  formData.append("daelecwrap_total", daelecwrapTotal);
  formData.append("daelecall_total", daelecallTotal);
  formData.append("genopprep_total", genopprepTotal);
  formData.append("genopwrap_total", genopwrapTotal);
  formData.append("genopall_total", genopallTotal);
  formData.append("otelecprep_total", otelecprepTotal);
  formData.append("otelecwrap_total", otelecwrapTotal);
  formData.append("otelecall_total", otelecallTotal);
  // grip 
  formData.append("fringes_taxes_grip", fringes_taxes_grip);
  formData.append("key_grip_qty", key_grip_qty);
  formData.append("key_grip_uno", key_grip_uno);
  formData.append("key_grip_una", key_grip_una);
  formData.append("key_grip_rt", key_grip_rt);
  formData.append("best_boy_grip_qty", best_boy_grip_qty);
  formData.append("best_boy_grip_uno", best_boy_grip_uno);
  formData.append("best_boy_grip_una", best_boy_grip_una);
  formData.append("best_boy_grip_rt", best_boy_grip_rt);
  formData.append("grips_qty", grips_qty);
  formData.append("grips_uno", grips_uno);
  formData.append("grips_una", grips_una);
  formData.append("grips_rt", grips_rt);
  formData.append("dailies_grip_qty", dailies_grip_qty);
  formData.append("dailies_grip_uno", dailies_grip_uno);
  formData.append("dailies_grip_una", dailies_grip_una);
  formData.append("dailies_grip_rt", dailies_grip_rt);
  formData.append("dolly_crane_grip_qty", dolly_crane_grip_qty);
  formData.append("dolly_crane_grip_uno", dolly_crane_grip_uno);
  formData.append("dolly_crane_grip_una", dolly_crane_grip_una);
  formData.append("dolly_crane_grip_rt", dolly_crane_grip_rt);
  formData.append("swing_grips_qty", swing_grips_qty);
  formData.append("swing_grips_uno", swing_grips_uno);
  formData.append("swing_grips_una", swing_grips_una);
  formData.append("swing_grips_rt", swing_grips_rt);
  formData.append("other_grip_labour_qty", other_grip_labour_qty);
  formData.append("other_grip_labour_uno", other_grip_labour_uno);
  formData.append("other_grip_labour_una", other_grip_labour_una);
  formData.append("other_grip_labour_rt", other_grip_labour_rt);
  formData.append("keygrip_total", keygripTotal);
  formData.append("bestboygrip_total", bestboygripTotal);
  formData.append("grips_total", gripsTotal);
  formData.append("dailiesgrip_total", dailiesgripTotal);
  formData.append("dollycranegrip_total", dollycranegripTotal);
  formData.append("swinggrips_total", swinggripsTotal);
  formData.append("othergriplabour_total", othergriplabourTotal);
  formData.append("griplabour_total", griplabourTotal);
  formData.append("days6th7th_unit_grip", days6th7th_unit_grip);
  formData.append("days6th7th_grip", days6th7th_grip);
  formData.append("overtime_unit_grip", overtime_unit_grip);
  formData.append("overtime_grip", overtime_grip);
  formData.append("holidays_unit_grip", holidays_unit_grip);
  formData.append("holidays_grip", holidays_grip);
  formData.append("box_rent_unit_grip", box_rent_unit_grip);
  formData.append("box_rent_grip", box_rent_grip);
  formData.append("other_solo_grip", other_solo_grip);
  formData.append("k_grip_qty_prep", k_grip_qty_prep);
  formData.append("k_grip_uno_prep", k_grip_uno_prep);
  formData.append("k_grip_una_prep", k_grip_una_prep);
  formData.append("k_grip_rt_prep", k_grip_rt_prep);
  formData.append("k_grip_qty_wrap", k_grip_qty_wrap);
  formData.append("k_grip_uno_wrap", k_grip_uno_wrap);
  formData.append("k_grip_una_wrap", k_grip_una_wrap);
  formData.append("k_grip_rt_wrap", k_grip_rt_wrap);
  formData.append("bb_grip_qty_prep", bb_grip_qty_prep);
  formData.append("bb_grip_uno_prep", bb_grip_uno_prep);
  formData.append("bb_grip_una_prep", bb_grip_una_prep);
  formData.append("bb_grip_rt_prep", bb_grip_rt_prep);
  formData.append("bb_grip_qty_wrap", bb_grip_qty_wrap);
  formData.append("bb_grip_uno_wrap", bb_grip_uno_wrap);
  formData.append("bb_grip_una_wrap", bb_grip_una_wrap);
  formData.append("bb_grip_rt_wrap", bb_grip_rt_wrap);
  formData.append("grips_qty_prep", grips_qty_prep);
  formData.append("grips_uno_prep", grips_uno_prep);
  formData.append("grips_una_prep", grips_una_prep);
  formData.append("grips_rt_prep", grips_rt_prep);
  formData.append("grips_qty_wrap", grips_qty_wrap);
  formData.append("grips_uno_wrap", grips_uno_wrap);
  formData.append("grips_una_wrap", grips_una_wrap);
  formData.append("grips_rt_wrap", grips_rt_wrap);
  formData.append("dol_grip_qty_prep", dol_grip_qty_prep);
  formData.append("dol_grip_uno_prep", dol_grip_uno_prep);
  formData.append("dol_grip_una_prep", dol_grip_una_prep);
  formData.append("dol_grip_rt_prep", dol_grip_rt_prep);
  formData.append("dol_grip_qty_wrap", dol_grip_qty_wrap);
  formData.append("dol_grip_uno_wrap", dol_grip_uno_wrap);
  formData.append("dol_grip_una_wrap", dol_grip_una_wrap);
  formData.append("dol_grip_rt_wrap", dol_grip_rt_wrap);
  formData.append("sw_grips_qty_prep", sw_grips_qty_prep);
  formData.append("sw_grips_uno_prep", sw_grips_uno_prep);
  formData.append("sw_grips_una_prep", sw_grips_una_prep);
  formData.append("sw_grips_rt_prep", sw_grips_rt_prep);
  formData.append("sw_grips_qty_wrap", sw_grips_qty_wrap);
  formData.append("sw_grips_uno_wrap", sw_grips_uno_wrap);
  formData.append("sw_grips_una_wrap", sw_grips_una_wrap);
  formData.append("sw_grips_rt_wrap", sw_grips_rt_wrap);
  formData.append("oth_grip_qty_prep", oth_grip_qty_prep);
  formData.append("oth_grip_uno_prep", oth_grip_uno_prep);
  formData.append("oth_grip_una_prep", oth_grip_una_prep);
  formData.append("oth_grip_rt_prep", oth_grip_rt_prep);
  formData.append("oth_grip_qty_wrap", oth_grip_qty_wrap);
  formData.append("oth_grip_uno_wrap", oth_grip_uno_wrap);
  formData.append("oth_grip_una_wrap", oth_grip_una_wrap);
  formData.append("oth_grip_rt_wrap", oth_grip_rt_wrap);
  formData.append("kgripprep_total", kgripprepTotal);
  formData.append("kgripwrap_total", kgripwrapTotal);
  formData.append("kgripall_total", kgripallTotal);
  formData.append("bbgripprep_total", bbgripprepTotal);
  formData.append("bbgripwrap_total", bbgripwrapTotal);
  formData.append("bbgripall_total", bbgripallTotal);
  formData.append("gripsprep_total", gripsprepTotal);
  formData.append("gripswrap_total", gripswrapTotal);
  formData.append("gripsall_total", gripsallTotal);
  formData.append("dolgripprep_total", dolgripprepTotal);
  formData.append("dolgripwrap_total", dolgripwrapTotal);
  formData.append("dolgripall_total", dolgripallTotal);
  formData.append("swigripsprep_total", swigripsprepTotal);
  formData.append("swigripswrap_total", swigripswrapTotal);
  formData.append("swigripsall_total", swigripsallTotal);
  formData.append("othgripprep_total", othgripprepTotal);
  formData.append("othgripwrap_total", othgripwrapTotal);
  formData.append("othgripall_total", othgripallTotal);
  // sound pro 
  formData.append("fringes_taxes_sound", fringes_taxes_sound);
  formData.append("sound_mixer_qty", sound_mixer_qty);
  formData.append("sound_mixer_uno", sound_mixer_uno);
  formData.append("sound_mixer_una", sound_mixer_una);
  formData.append("sound_mixer_rt", sound_mixer_rt);
  formData.append("boom_operator_qty", boom_operator_qty);
  formData.append("boom_operator_uno", boom_operator_uno);
  formData.append("boom_operator_una", boom_operator_una);
  formData.append("boom_operator_rt", boom_operator_rt);
  formData.append("cable_wrangler_qty", cable_wrangler_qty);
  formData.append("cable_wrangler_uno", cable_wrangler_uno);
  formData.append("cable_wrangler_una", cable_wrangler_una);
  formData.append("cable_wrangler_rt", cable_wrangler_rt);
  formData.append("other_sound_labour_qty", other_sound_labour_qty);
  formData.append("other_sound_labour_uno", other_sound_labour_uno);
  formData.append("other_sound_labour_una", other_sound_labour_una);
  formData.append("other_sound_labour_rt", other_sound_labour_rt);
  formData.append("soundmixer_total", soundmixerTotal);
  formData.append("boomoperator_total", boomoperatorTotal);
  formData.append("cablewrangler_total", cablewranglerTotal);
  formData.append("othersoundlabour_total", othersoundlabourTotal);
  formData.append("soundlabour_total", soundlabourTotal);
  formData.append("days6th7th_unit_sound", days6th7th_unit_sound);
  formData.append("days6th7th_sound", days6th7th_sound);
  formData.append("overtime_unit_sound", overtime_unit_sound);
  formData.append("overtime_sound", overtime_sound);
  formData.append("holidays_unit_sound", holidays_unit_sound);
  formData.append("holidays_sound", holidays_sound);
  formData.append("box_rent_unit_sound", box_rent_unit_sound);
  formData.append("box_rent_sound", box_rent_sound);
  formData.append("other_solo_sound", other_solo_sound);
  formData.append("so_mix_qty_prep", so_mix_qty_prep);
  formData.append("so_mix_uno_prep", so_mix_uno_prep);
  formData.append("so_mix_una_prep", so_mix_una_prep);
  formData.append("so_mix_rt_prep", so_mix_rt_prep);
  formData.append("so_mix_qty_wrap", so_mix_qty_wrap);
  formData.append("so_mix_uno_wrap", so_mix_uno_wrap);
  formData.append("so_mix_una_wrap", so_mix_una_wrap);
  formData.append("so_mix_rt_wrap", so_mix_rt_wrap);
  formData.append("boom_op_qty_prep", boom_op_qty_prep);
  formData.append("boom_op_uno_prep", boom_op_uno_prep);
  formData.append("boom_op_una_prep", boom_op_una_prep);
  formData.append("boom_op_rt_prep", boom_op_rt_prep);
  formData.append("boom_op_qty_wrap", boom_op_qty_wrap);
  formData.append("boom_op_uno_wrap", boom_op_uno_wrap);
  formData.append("boom_op_una_wrap", boom_op_una_wrap);
  formData.append("boom_op_rt_wrap", boom_op_rt_wrap);
  formData.append("cab_wran_qty_prep", cab_wran_qty_prep);
  formData.append("cab_wran_uno_prep", cab_wran_uno_prep);
  formData.append("cab_wran_una_prep", cab_wran_una_prep);
  formData.append("cab_wran_rt_prep", cab_wran_rt_prep);
  formData.append("cab_wran_qty_wrap", cab_wran_qty_wrap);
  formData.append("cab_wran_uno_wrap", cab_wran_uno_wrap);
  formData.append("cab_wran_una_wrap", cab_wran_una_wrap);
  formData.append("cab_wran_rt_wrap", cab_wran_rt_wrap);
  formData.append("ot_sound_qty_prep", ot_sound_qty_prep);
  formData.append("ot_sound_uno_prep", ot_sound_uno_prep);
  formData.append("ot_sound_una_prep", ot_sound_una_prep);
  formData.append("ot_sound_rt_prep", ot_sound_rt_prep);
  formData.append("ot_sound_qty_wrap", ot_sound_qty_wrap);
  formData.append("ot_sound_uno_wrap", ot_sound_uno_wrap);
  formData.append("ot_sound_una_wrap", ot_sound_una_wrap);
  formData.append("ot_sound_rt_wrap", ot_sound_rt_wrap);
  formData.append("somixprep_total", somixprepTotal);
  formData.append("somixwrap_total", somixwrapTotal);
  formData.append("somixall_total", somixallTotal);
  formData.append("boomopprep_total", boomopprepTotal);
  formData.append("boomopwrap_total", boomopwrapTotal);
  formData.append("boomopall_total", boomopallTotal);
  formData.append("cawranprep_total", cawranprepTotal);
  formData.append("cawranwrap_total", cawranwrapTotal);
  formData.append("cawranall_total", cawranallTotal);
  formData.append("otsoundprep_total", otsoundprepTotal);
  formData.append("otsoundwrap_total", otsoundwrapTotal);
  formData.append("otsoundall_total", otsoundallTotal);

  try {
    axiosReq.put(`/budgets2/${budgetId2}/`, formData);
    handleSubmit3(event); 
  } catch (err) {
    console.log(err);
    if (err.response?.status !== 401) { 
      setErrors(err.response?.data);
    }
  }
  };

  // Submit3
  const handleSubmit3 = async (event) => {
  event.preventDefault();
  const formData = new FormData();
  // transport 
  formData.append("fringes_taxes_transport", fringes_taxes_transport);
  formData.append("tp_coordinator_qty", tp_coordinator_qty);
  formData.append("tp_coordinator_uno", tp_coordinator_uno);
  formData.append("tp_coordinator_una", tp_coordinator_una);
  formData.append("tp_coordinator_rt", tp_coordinator_rt);
  formData.append("tp_captain_qty", tp_captain_qty);
  formData.append("tp_captain_uno", tp_captain_uno);
  formData.append("tp_captain_una", tp_captain_una);
  formData.append("tp_captain_rt", tp_captain_rt);
  formData.append("tp_manager_qty", tp_manager_qty);
  formData.append("tp_manager_uno", tp_manager_uno);
  formData.append("tp_manager_una", tp_manager_una);
  formData.append("tp_manager_rt", tp_manager_rt);
  formData.append("head_driver_qty", head_driver_qty);
  formData.append("head_driver_uno", head_driver_uno);
  formData.append("head_driver_una", head_driver_una);
  formData.append("head_driver_rt", head_driver_rt);
  formData.append("drivers_qty", drivers_qty);
  formData.append("drivers_uno", drivers_uno);
  formData.append("drivers_una", drivers_una);
  formData.append("drivers_rt", drivers_rt);
  formData.append("tpcoordinator_total", tpcoordinatorTotal);
  formData.append("tpcaptain_total", tpcaptainTotal);
  formData.append("tpmanager_total", tpmanagerTotal);
  formData.append("headdriver_total", headdriverTotal);
  formData.append("drivers_total", driversTotal);
  formData.append("transportlabour_total", transportlabourTotal);
  formData.append("days6th7th_unit_tran", days6th7th_unit_tran);
  formData.append("days6th7th_tran", days6th7th_tran);
  formData.append("overtime_unit_tran", overtime_unit_tran);
  formData.append("overtime_tran", overtime_tran);
  formData.append("holidays_unit_tran", holidays_unit_tran);
  formData.append("holidays_tran", holidays_tran);
  formData.append("box_rent_unit_tran", box_rent_unit_tran);
  formData.append("box_rent_tran", box_rent_tran);
  formData.append("other_solo_tran", other_solo_tran);
  formData.append("tp_coor_qty_prep", tp_coor_qty_prep);
  formData.append("tp_coor_uno_prep", tp_coor_uno_prep);
  formData.append("tp_coor_una_prep", tp_coor_una_prep);
  formData.append("tp_coor_rt_prep", tp_coor_rt_prep);
  formData.append("tp_coor_qty_wrap", tp_coor_qty_wrap);
  formData.append("tp_coor_uno_wrap", tp_coor_uno_wrap);
  formData.append("tp_coor_una_wrap", tp_coor_una_wrap);
  formData.append("tp_coor_rt_wrap", tp_coor_rt_wrap);
  formData.append("tp_cap_qty_prep", tp_cap_qty_prep);
  formData.append("tp_cap_uno_prep", tp_cap_uno_prep);
  formData.append("tp_cap_una_prep", tp_cap_una_prep);
  formData.append("tp_cap_rt_prep", tp_cap_rt_prep);
  formData.append("tp_cap_qty_wrap", tp_cap_qty_wrap);
  formData.append("tp_cap_uno_wrap", tp_cap_uno_wrap);
  formData.append("tp_cap_una_wrap", tp_cap_una_wrap);
  formData.append("tp_cap_rt_wrap", tp_cap_rt_wrap);
  formData.append("tp_man_qty_prep", tp_man_qty_prep);
  formData.append("tp_man_uno_prep", tp_man_uno_prep);
  formData.append("tp_man_una_prep", tp_man_una_prep);
  formData.append("tp_man_rt_prep", tp_man_rt_prep);
  formData.append("tp_man_qty_wrap", tp_man_qty_wrap);
  formData.append("tp_man_uno_wrap", tp_man_uno_wrap);
  formData.append("tp_man_una_wrap", tp_man_una_wrap);
  formData.append("tp_man_rt_wrap", tp_man_rt_wrap);
  formData.append("head_dr_qty_prep", head_dr_qty_prep);
  formData.append("head_dr_uno_prep", head_dr_uno_prep);
  formData.append("head_dr_una_prep", head_dr_una_prep);
  formData.append("head_dr_rt_prep", head_dr_rt_prep);
  formData.append("head_dr_qty_wrap", head_dr_qty_wrap);
  formData.append("head_dr_uno_wrap", head_dr_uno_wrap);
  formData.append("head_dr_una_wrap", head_dr_una_wrap);
  formData.append("head_dr_rt_wrap", head_dr_rt_wrap);
  formData.append("drive_qty_prep", drive_qty_prep);
  formData.append("drive_uno_prep", drive_uno_prep);
  formData.append("drive_una_prep", drive_una_prep);
  formData.append("drive_rt_prep", drive_rt_prep);
  formData.append("drive_qty_wrap", drive_qty_wrap);
  formData.append("drive_uno_wrap", drive_uno_wrap);
  formData.append("drive_una_wrap", drive_una_wrap);
  formData.append("drive_rt_wrap", drive_rt_wrap);
  formData.append("tpcoorprep_total", tpcoorprepTotal);
  formData.append("tpcoorwrap_total", tpcoorwrapTotal);
  formData.append("tpcoorall_total", tpcoorallTotal);
  formData.append("tpcapprep_total", tpcapprepTotal);
  formData.append("tpcapwrap_total", tpcapwrapTotal);
  formData.append("tpcapall_total", tpcapallTotal);
  formData.append("tpmanprep_total", tpmanprepTotal);
  formData.append("tpmanwrap_total", tpmanwrapTotal);
  formData.append("tpmanall_total", tpmanallTotal);
  formData.append("headdriprep_total", headdriprepTotal);
  formData.append("headdriwrap_total", headdriwrapTotal);
  formData.append("headdriall_total", headdriallTotal);
  formData.append("driverprep_total", driverprepTotal);
  formData.append("driverwrap_total", driverwrapTotal);
  formData.append("driverall_total", driverallTotal);
  // TV
  formData.append("fringes_taxes_tv", fringes_taxes_tv);
  formData.append("tech_super_qty", tech_super_qty);
  formData.append("tech_super_uno", tech_super_uno);
  formData.append("tech_super_una", tech_super_una);
  formData.append("tech_super_rt", tech_super_rt);
  formData.append("tech_direct_qty", tech_direct_qty);
  formData.append("tech_direct_uno", tech_direct_uno);
  formData.append("tech_direct_una", tech_direct_una);
  formData.append("tech_direct_rt", tech_direct_rt);
  formData.append("floor_man_qty", floor_man_qty);
  formData.append("floor_man_uno", floor_man_uno);
  formData.append("floor_man_una", floor_man_una);
  formData.append("floor_man_rt", floor_man_rt);
  formData.append("light_direct_qty", light_direct_qty);
  formData.append("light_direct_uno", light_direct_uno);
  formData.append("light_direct_una", light_direct_una);
  formData.append("light_direct_rt", light_direct_rt);
  formData.append("boardman_qty", boardman_qty);
  formData.append("boardman_uno", boardman_uno);
  formData.append("boardman_una", boardman_una);
  formData.append("boardman_rt", boardman_rt);
  formData.append("audio_qty", audio_qty);
  formData.append("audio_uno", audio_uno);
  formData.append("audio_una", audio_una);
  formData.append("audio_rt", audio_rt);
  formData.append("vtr_operator_qty", vtr_operator_qty);
  formData.append("vtr_operator_uno", vtr_operator_uno);
  formData.append("vtr_operator_una", vtr_operator_una);
  formData.append("vtr_operator_rt", vtr_operator_rt);
  formData.append("stagehands_qty", stagehands_qty);
  formData.append("stagehands_uno", stagehands_uno);
  formData.append("stagehands_una", stagehands_una);
  formData.append("stagehands_rt", stagehands_rt);
  formData.append("other_tv_qty", other_tv_qty);
  formData.append("other_tv_uno", other_tv_uno);
  formData.append("other_tv_una", other_tv_una);
  formData.append("other_tv_rt", other_tv_rt);
  formData.append("techsuper_total", techsuperTotal);
  formData.append("techdirect_total", techdirectTotal);
  formData.append("floorman_total", floormanTotal);
  formData.append("lightdirect_total", lightdirectTotal);
  formData.append("boardman_total", boardmanTotal);
  formData.append("audio_total", audioTotal);
  formData.append("vtroperator_total", vtroperatorTotal);
  formData.append("stagehands_total", stagehandsTotal);
  formData.append("othertv_total", othertvTotal);
  formData.append("tvspecificlabour_total", tvspecificlabourTotal);
  formData.append("days6th7th_unit_tv", days6th7th_unit_tv);
  formData.append("days6th7th_tv", days6th7th_tv);
  formData.append("overtime_unit_tv", overtime_unit_tv);
  formData.append("overtime_tv", overtime_tv);
  formData.append("holidays_unit_tv", holidays_unit_tv);
  formData.append("holidays_tv", holidays_tv);
  formData.append("box_rent_unit_tv", box_rent_unit_tv);
  formData.append("box_rent_tv", box_rent_tv);
  formData.append("other_solo_tv", other_solo_tv);
  formData.append("tec_sup_qty_prep", tec_sup_qty_prep);
  formData.append("tec_sup_uno_prep", tec_sup_uno_prep);
  formData.append("tec_sup_una_prep", tec_sup_una_prep);
  formData.append("tec_sup_rt_prep", tec_sup_rt_prep);
  formData.append("tec_sup_qty_wrap", tec_sup_qty_wrap);
  formData.append("tec_sup_uno_wrap", tec_sup_uno_wrap);
  formData.append("tec_sup_una_wrap", tec_sup_una_wrap);
  formData.append("tec_sup_rt_wrap", tec_sup_rt_wrap);
  formData.append("tec_dir_qty_prep", tec_dir_qty_prep);
  formData.append("tec_dir_uno_prep", tec_dir_uno_prep);
  formData.append("tec_dir_una_prep", tec_dir_una_prep);
  formData.append("tec_dir_rt_prep", tec_dir_rt_prep);
  formData.append("tec_dir_qty_wrap", tec_dir_qty_wrap);
  formData.append("tec_dir_uno_wrap", tec_dir_uno_wrap);
  formData.append("tec_dir_una_wrap", tec_dir_una_wrap);
  formData.append("tec_dir_rt_wrap", tec_dir_rt_wrap);
  formData.append("flo_man_qty_prep", flo_man_qty_prep);
  formData.append("flo_man_uno_prep", flo_man_uno_prep);
  formData.append("flo_man_una_prep", flo_man_una_prep);
  formData.append("flo_man_rt_prep", flo_man_rt_prep);
  formData.append("flo_man_qty_wrap", flo_man_qty_wrap);
  formData.append("flo_man_uno_wrap", flo_man_uno_wrap);
  formData.append("flo_man_una_wrap", flo_man_una_wrap);
  formData.append("flo_man_rt_wrap", flo_man_rt_wrap);
  formData.append("lig_dir_qty_prep", lig_dir_qty_prep);
  formData.append("lig_dir_uno_prep", lig_dir_uno_prep);
  formData.append("lig_dir_una_prep", lig_dir_una_prep);
  formData.append("lig_dir_rt_prep", lig_dir_rt_prep);
  formData.append("lig_dir_qty_wrap", lig_dir_qty_wrap);
  formData.append("lig_dir_uno_wrap", lig_dir_uno_wrap);
  formData.append("lig_dir_una_wrap", lig_dir_una_wrap);
  formData.append("lig_dir_rt_wrap", lig_dir_rt_wrap);
  formData.append("boardm_qty_prep", boardm_qty_prep);
  formData.append("boardm_uno_prep", boardm_uno_prep);
  formData.append("boardm_una_prep", boardm_una_prep);
  formData.append("boardm_rt_prep", boardm_rt_prep);
  formData.append("boardm_qty_wrap", boardm_qty_wrap);
  formData.append("boardm_uno_wrap", boardm_uno_wrap);
  formData.append("boardm_una_wrap", boardm_una_wrap);
  formData.append("boardm_rt_wrap", boardm_rt_wrap);
  formData.append("audio_qty_prep", audio_qty_prep);
  formData.append("audio_uno_prep", audio_uno_prep);
  formData.append("audio_una_prep", audio_una_prep);
  formData.append("audio_rt_prep", audio_rt_prep);
  formData.append("audio_qty_wrap", audio_qty_wrap);
  formData.append("audio_uno_wrap", audio_uno_wrap);
  formData.append("audio_una_wrap", audio_una_wrap);
  formData.append("audio_rt_wrap", audio_rt_wrap);
  formData.append("vtr_op_qty_prep", vtr_op_qty_prep);
  formData.append("vtr_op_uno_prep", vtr_op_uno_prep);
  formData.append("vtr_op_una_prep", vtr_op_una_prep);
  formData.append("vtr_op_rt_prep", vtr_op_rt_prep);
  formData.append("vtr_op_qty_wrap", vtr_op_qty_wrap);
  formData.append("vtr_op_uno_wrap", vtr_op_uno_wrap);
  formData.append("vtr_op_una_wrap", vtr_op_una_wrap);
  formData.append("vtr_op_rt_wrap", vtr_op_rt_wrap);
  formData.append("stageh_qty_prep", stageh_qty_prep);
  formData.append("stageh_uno_prep", stageh_uno_prep);
  formData.append("stageh_una_prep", stageh_una_prep);
  formData.append("stageh_rt_prep", stageh_rt_prep);
  formData.append("stageh_qty_wrap", stageh_qty_wrap);
  formData.append("stageh_uno_wrap", stageh_uno_wrap);
  formData.append("stageh_una_wrap", stageh_una_wrap);
  formData.append("stageh_rt_wrap", stageh_rt_wrap);
  formData.append("oth_tv_qty_prep", oth_tv_qty_prep);
  formData.append("oth_tv_uno_prep", oth_tv_uno_prep);
  formData.append("oth_tv_una_prep", oth_tv_una_prep);
  formData.append("oth_tv_rt_prep", oth_tv_rt_prep);
  formData.append("oth_tv_qty_wrap", oth_tv_qty_wrap);
  formData.append("oth_tv_uno_wrap", oth_tv_uno_wrap);
  formData.append("oth_tv_una_wrap", oth_tv_una_wrap);
  formData.append("oth_tv_rt_wrap", oth_tv_rt_wrap);
  formData.append("tecsupprep_total", tecsupprepTotal);
  formData.append("tecsupwrap_total", tecsupwrapTotal);
  formData.append("tecsupall_total", tecsupallTotal);
  formData.append("tecdirprep_total", tecdirprepTotal);
  formData.append("tecdirwrap_total", tecdirwrapTotal);
  formData.append("tecdirall_total", tecdirallTotal);
  formData.append("flomanprep_total", flomanprepTotal);
  formData.append("flomanwrap_total", flomanwrapTotal);
  formData.append("flomanall_total", flomanallTotal);
  formData.append("ligdirprep_total", ligdirprepTotal);
  formData.append("ligdirwrap_total", ligdirwrapTotal);
  formData.append("ligdirall_total", ligdirallTotal);
  formData.append("boamanprep_total", boamanprepTotal);
  formData.append("boamanwrap_total", boamanwrapTotal);
  formData.append("boamanall_total", boamanallTotal);
  formData.append("audprep_total", audprepTotal);
  formData.append("audwrap_total", audwrapTotal);
  formData.append("audall_total", audallTotal);
  formData.append("vtropprep_total", vtropprepTotal);
  formData.append("vtropwrap_total", vtropwrapTotal);
  formData.append("vtropall_total", vtropallTotal);
  formData.append("stagehprep_total", stagehprepTotal);
  formData.append("stagehwrap_total", stagehwrapTotal);
  formData.append("stagehall_total", stagehallTotal);
  formData.append("othtvprep_total", othtvprepTotal);
  formData.append("othtvwrap_total", othtvwrapTotal);
  formData.append("othtvall_total", othtvallTotal);
  // production office
  formData.append("office_rentals", office_rentals);
  formData.append("office_equipment", office_equipment);
  formData.append("office_supplies", office_supplies);
  formData.append("phones_net", phones_net);
  formData.append("courier_postage", courier_postage);
  formData.append("office_other", office_other);
  formData.append("proOff_total", proOffTotal);
  // studio
  formData.append("studio_rentals", studio_rentals);
  formData.append("power", power);
  formData.append("carpentry_rentals", carpentry_rentals);
  formData.append("studio_fx_equipment", studio_fx_equipment);
  formData.append("studio_security", studio_security);
  formData.append("studio_other", studio_other);
  formData.append("studio_total", studioTotal);
  // site
  formData.append("surveying_scouting", surveying_scouting);
  formData.append("site_rentals", site_rentals);
  formData.append("site_power", site_power);
  formData.append("site_access", site_access);
  formData.append("site_insurance", site_insurance);
  formData.append("repairs_construction", repairs_construction);
  formData.append("site_security", site_security);
  formData.append("site_other", site_other);
  formData.append("police_control", police_control);
  formData.append("site_total", siteTotal);
  // unit
  formData.append("catering", catering);
  formData.append("craft_expenses", craft_expenses);
  formData.append("meal_penalty", meal_penalty);
  formData.append("green_room", green_room);
  formData.append("first_aid", first_aid);
  formData.append("outfitting", outfitting);
  formData.append("medical_insurance", medical_insurance);
  formData.append("unit_other", unit_other);
  formData.append("unit_total", unitTotal);
  // travel & living
  formData.append("fares", fares);
  formData.append("accomatation_hotels", accomatation_hotels);
  formData.append("per_diems", per_diems);
  formData.append("taxis_limos", taxis_limos);
  formData.append("shipping", shipping);
  formData.append("customs_brokerage", customs_brokerage);
  formData.append("other_trav_liv", other_trav_liv);
  formData.append("traliv_total", tralivTotal);
  // Transport
  formData.append("production_cars", production_cars);
  formData.append("trucks_vans", trucks_vans);
  formData.append("buses", buses);
  formData.append("motorhomes", motorhomes);
  formData.append("talent_cars", talent_cars);
  formData.append("support_vehicles", support_vehicles);
  formData.append("boats_planes", boats_planes);
  formData.append("fuel", fuel);
  formData.append("repairs", repairs);
  formData.append("taxis", taxis);
  formData.append("parking", parking);
  formData.append("licenses_permits", licenses_permits);
  formData.append("brokerage_insurance", brokerage_insurance);
  formData.append("other_transport", other_transport);
  formData.append("transport_total", transportTotal);
  // Construction Material
  formData.append("rentals_carpentry", rentals_carpentry);
  formData.append("carpentry_purchases", carpentry_purchases);
  formData.append("painting_rentals", painting_rentals);
  formData.append("painting_purchases", painting_purchases);
  formData.append("backdrops_murals", backdrops_murals);
  formData.append("scaffolding", scaffolding);
  formData.append("warehouse_rental", warehouse_rental);
  formData.append("construction_other", construction_other);
  formData.append("constructionmat_total", constructionMatTotal);
  // Art supplies
  formData.append("drawing_supplies", drawing_supplies);
  formData.append("drawing_equipment", drawing_equipment);
  formData.append("tech", tech);
  formData.append("stock_prints_processing", stock_prints_processing);
  formData.append("blueprinting", blueprinting);
  formData.append("other_art", other_art);
  formData.append("artSup_total", artSupTotal);
  // Dressing
  formData.append("dress_rentals", dress_rentals);
  formData.append("dress_purchases", dress_purchases);
  formData.append("dress_manufacture", dress_manufacture);
  formData.append("dress_repairs_replacements", dress_repairs_replacements);
  formData.append("other_dressing", other_dressing);
  formData.append("dressing_total", dressingTotal);
  // Props
  formData.append("props_rentals", props_rentals);
  formData.append("props_purchases", props_purchases);
  formData.append("graphics_signs", graphics_signs);
  formData.append("props_repairs_replac", props_repairs_replac);
  formData.append("picture_vehicle_rentals", picture_vehicle_rentals);
  formData.append("picture_vehicle_purchases", picture_vehicle_purchases);
  formData.append("picture_vehicle_mods", picture_vehicle_mods);
  formData.append("picture_vehicle_ins", picture_vehicle_ins);
  formData.append("other_props", other_props);
  formData.append("props_total", propsTotal);
  // Fx
  formData.append("fx_rentals", fx_rentals);
  formData.append("fx_purchases", fx_purchases);
  formData.append("stunts_purchases_rentals", stunts_purchases_rentals);
  formData.append("armaments_permits_fees", armaments_permits_fees);
  formData.append("other_fx", other_fx);
  formData.append("fx_total", fxTotal);
  // Animals
  formData.append("animals_rentals", animals_rentals);
  formData.append("animals_purchases", animals_purchases);
  formData.append("food_stabling", food_stabling);
  formData.append("transport", transport);
  formData.append("vet", vet);
  formData.append("customs_broker", customs_broker);
  formData.append("other_animals", other_animals);
  formData.append("animals_total", animalsTotal);
  // Wardrobe sup
  formData.append("wardrobe_rentals", wardrobe_rentals);
  formData.append("wardrobe_purchases", wardrobe_purchases);
  formData.append("ward_manufact", ward_manufact);
  formData.append("ward_ship_brok", ward_ship_brok);
  formData.append("ward_repairs_clean", ward_repairs_clean);
  formData.append("other_ward", other_ward);
  formData.append("wardrobe_total", wardrobeTotal);
  // Makeup sup 
  formData.append("makeup_rentals", makeup_rentals);
  formData.append("makeup_purchases", makeup_purchases);
  formData.append("hair_rentals", hair_rentals);
  formData.append("hair_purchases", hair_purchases);
  formData.append("wigs", wigs);
  formData.append("makeup_fx", makeup_fx);
  formData.append("makeup_ship_brok", makeup_ship_brok);
  formData.append("other_makeup", other_makeup);
  formData.append("makeup_total", makeupTotal);
  // Camera Equ
  formData.append("basic_package_rent_cam", basic_package_rent_cam);
  formData.append("daily_rentals_cam", daily_rentals_cam);
  formData.append("specialty_rent_cam", specialty_rent_cam);
  formData.append("camera_purchases", camera_purchases);
  formData.append("steadicam", steadicam);
  formData.append("video_teleprompter", video_teleprompter);
  formData.append("camera_ship_brok", camera_ship_brok);
  formData.append("loss_damage_cam", loss_damage_cam);
  formData.append("other_camera", other_camera);
  formData.append("camera_total", cameraTotal);
  // Electric Equ
  formData.append("basic_package_rent_elec", basic_package_rent_elec);
  formData.append("daily_rentals_elec", daily_rentals_elec);
  formData.append("specialty_rent_elec", specialty_rent_elec);
  formData.append("electric_purchases", electric_purchases);
  formData.append("generators", generators);
  formData.append("loss_damage_elec", loss_damage_elec);
  formData.append("other_electric", other_electric);
  formData.append("electric_total", electricTotal);
  // Grip Equipment
  formData.append("basic_package_rent_grip", basic_package_rent_grip);
  formData.append("daily_rentals_grip", daily_rentals_grip);
  formData.append("specialty_rent_grip", specialty_rent_grip);
  formData.append("crane_rentals", crane_rentals);
  formData.append("scaffolding_grip", scaffolding_grip);
  formData.append("grip_purchases", grip_purchases);
  formData.append("loss_damage_grip", loss_damage_grip);
  formData.append("other_grip", other_grip);
  formData.append("grip_total", gripTotal);
  // Sound Equipment
  formData.append("basic_package_rent_sound", basic_package_rent_sound);
  formData.append("daily_rentals_sound", daily_rentals_sound);
  formData.append("wireless_mics", wireless_mics);
  formData.append("sound_purchases", sound_purchases);
  formData.append("walkie_talkies", walkie_talkies);
  formData.append("other_sound", other_sound);
  formData.append("sound_total", soundTotal);
  // Second Unit
  formData.append("crew_2U", crew_2U);
  formData.append("equipment_2U", equipment_2U);
  formData.append("mat_sup_2U", mat_sup_2U);
  formData.append("travliv_2U", travliv_2U);
  formData.append("transport_2U", transport_2U);
  formData.append("aerial_unit", aerial_unit);
  formData.append("marine_unit", marine_unit);
  formData.append("fringes_taxes_2U", fringes_taxes_2U);
  formData.append("other_2U", other_2U);
  formData.append("secondU_total", secondUTotal);
  // Stock and Lab
  formData.append("film_stock", film_stock);
  formData.append("video_stock", video_stock);
  formData.append("digital_stock", digital_stock);
  formData.append("transfer_stock", transfer_stock);
  formData.append("hard_drives", hard_drives);
  formData.append("dalies", dalies);
  formData.append("telecine", telecine);
  formData.append("audio_stock", audio_stock);
  formData.append("magnetic_transfer", magnetic_transfer);
  formData.append("stills", stills);
  formData.append("loss_dam_lab", loss_dam_lab);
  formData.append("other_lab", other_lab);
  formData.append("stockLab_total", stockLabTotal);
  // ALL POST
  // Post Staff/Facilities
  formData.append("post_supervisor_qty", post_supervisor_qty);
  formData.append("post_supervisor_uno", post_supervisor_uno);
  formData.append("post_supervisor_una", post_supervisor_una);
  formData.append("post_supervisor_rt", post_supervisor_rt);
  formData.append("post_coordinator_qty", post_coordinator_qty);
  formData.append("post_coordinator_uno", post_coordinator_uno);
  formData.append("post_coordinator_una", post_coordinator_una);
  formData.append("post_coordinator_rt", post_coordinator_rt);
  formData.append("post_assistants_qty", post_assistants_qty);
  formData.append("post_assistants_uno", post_assistants_uno);
  formData.append("post_assistants_una", post_assistants_una);
  formData.append("post_assistants_rt", post_assistants_rt);
  formData.append("post_accountants_qty", post_accountants_qty);
  formData.append("post_accountants_uno", post_accountants_uno);
  formData.append("post_accountants_una", post_accountants_una);
  formData.append("post_accountants_rt", post_accountants_rt);
  formData.append("post_accountants_ass_qty", post_accountants_ass_qty);
  formData.append("post_accountants_ass_uno", post_accountants_ass_uno);
  formData.append("post_accountants_ass_una", post_accountants_ass_una);
  formData.append("post_accountants_ass_rt", post_accountants_ass_rt);
  formData.append("post_consultant", post_consultant);
  formData.append("post_office_rent", post_office_rent);
  formData.append("post_office_equ", post_office_equ);
  formData.append("post_office_sup", post_office_sup);
  formData.append("post_it_network", post_it_network);
  formData.append("post_phone_net", post_phone_net);
  formData.append("post_computers_soft", post_computers_soft);
  formData.append("post_store", post_store);
  formData.append("post_ship", post_ship);
  formData.append("post_craft", post_craft);
  formData.append("fringes_taxes_post", fringes_taxes_post);
  formData.append("post_other", post_other);
  formData.append("postSuper_total", postSuperTotal);
  formData.append("postCoordin_total", postCoordinTotal);
  formData.append("postAssist_total", postAssistTotal);
  formData.append("postAccount_total", postAccountTotal);
  formData.append("postAccountAss_total", postAccountAssTotal);
  formData.append("postStaffFac_total", postStaffFacTotal);
  // Editing
  formData.append("editor_qty", editor_qty);
  formData.append("editor_uno", editor_uno);
  formData.append("editor_una", editor_una);
  formData.append("editor_rt", editor_rt);
  formData.append("editor_vfx_qty", editor_vfx_qty);
  formData.append("editor_vfx_uno", editor_vfx_uno);
  formData.append("editor_vfx_una", editor_vfx_una);
  formData.append("editor_vfx_rt", editor_vfx_rt);
  formData.append("editor_ass_qty", editor_ass_qty);
  formData.append("editor_ass_uno", editor_ass_uno);
  formData.append("editor_ass_una", editor_ass_una);
  formData.append("editor_ass_rt", editor_ass_rt);
  formData.append("colorist_grader_qty", colorist_grader_qty);
  formData.append("colorist_grader_uno", colorist_grader_uno);
  formData.append("colorist_grader_una", colorist_grader_una);
  formData.append("colorist_grader_rt", colorist_grader_rt);
  formData.append("graphics_qty", graphics_qty);
  formData.append("graphics_uno", graphics_uno);
  formData.append("graphics_una", graphics_una);
  formData.append("graphics_rt", graphics_rt);
  formData.append("edit_rooms", edit_rooms);
  formData.append("edit_equip", edit_equip);
  formData.append("edit_equip_nonlin", edit_equip_nonlin);
  formData.append("online", online);
  formData.append("vfx_ed_system", vfx_ed_system);
  formData.append("post_edit_pur", post_edit_pur);
  formData.append("lossdam_edit", lossdam_edit);
  formData.append("fringes_taxes_post_edit", fringes_taxes_post_edit);
  formData.append("other_post_edit", other_post_edit);
  formData.append("editor_total", editorTotal);
  formData.append("editorVfx_total", editorVfxTotal);
  formData.append("editorAss_total", editorAssTotal);
  formData.append("grader_total", graderTotal);
  formData.append("graphics_total", graphicsTotal);
  formData.append("editing_total", editingTotal);
  // Sound
  formData.append("sound_designer_qty", sound_designer_qty);
  formData.append("sound_designer_uno", sound_designer_uno);
  formData.append("sound_designer_una", sound_designer_una);
  formData.append("sound_designer_rt", sound_designer_rt);
  formData.append("editor_sound_qty", editor_sound_qty);
  formData.append("editor_sound_uno", editor_sound_uno);
  formData.append("editor_sound_una", editor_sound_una);
  formData.append("editor_sound_rt", editor_sound_rt);
  formData.append("editor_music_qty", editor_music_qty);
  formData.append("editor_music_uno", editor_music_uno);
  formData.append("editor_music_una", editor_music_una);
  formData.append("editor_music_rt", editor_music_rt);
  formData.append("ed_sound_ass_qty", ed_sound_ass_qty);
  formData.append("ed_sound_ass_uno", ed_sound_ass_uno);
  formData.append("ed_sound_ass_una", ed_sound_ass_una);
  formData.append("ed_sound_ass_rt", ed_sound_ass_rt);
  formData.append("adr_super_qty", adr_super_qty);
  formData.append("adr_super_uno", adr_super_uno);
  formData.append("adr_super_una", adr_super_una);
  formData.append("adr_super_rt", adr_super_rt);
  formData.append("foley_labour_qty", foley_labour_qty);
  formData.append("foley_labour_uno", foley_labour_uno);
  formData.append("foley_labour_una", foley_labour_una);
  formData.append("foley_labour_rt", foley_labour_rt);
  formData.append("sound_edit_rooms", sound_edit_rooms);
  formData.append("sound_edit_equ", sound_edit_equ);
  formData.append("music_edit_equ", music_edit_equ);
  formData.append("post_sound_edit_pur", post_sound_edit_pur);
  formData.append("adr", adr);
  formData.append("foley", foley);
  formData.append("pre_mix", pre_mix);
  formData.append("mix", mix);
  formData.append("printmaster", printmaster);
  formData.append("transfers_deliverables", transfers_deliverables);
  formData.append("lossdam_sound", lossdam_sound);
  formData.append("fringes_taxes_post_sound", fringes_taxes_post_sound);
  formData.append("other_post_sound", other_post_sound);
  formData.append("desSound_total", desSoundTotal);
  formData.append("editorSound_total", editorSoundTotal);
  formData.append("editorMusic_total", editorMusicTotal);
  formData.append("soundEdAss_total", soundEdAssTotal);
  formData.append("adrSup_total", adrSupTotal);
  formData.append("folLab_total", folLabTotal);
  formData.append("postSound_total", postSoundTotal);
  // Post Lab/Video Copies
  formData.append("stock", stock);
  formData.append("neg_cutting", neg_cutting);
  formData.append("color_cor", color_cor);
  formData.append("interpos_neg", interpos_neg);
  formData.append("prints", prints);
  formData.append("transfers", transfers);
  formData.append("other_media_delivery", other_media_delivery);
  formData.append("distribution_copies", distribution_copies);
  formData.append("storage_post", storage_post);
  formData.append("postLab_total", postLabTotal);
  // Post Titles
  formData.append("titles", titles);
  formData.append("opticals", opticals);
  formData.append("stock_footage", stock_footage);
  formData.append("con_script_ccsl", con_script_ccsl);
  formData.append("postTitles_total", postTitlesTotal);
  // Post Versioning
  formData.append("dubs", dubs);
  formData.append("subtitles", subtitles);
  formData.append("closed_caption", closed_caption);
  formData.append("versioning", versioning);
  formData.append("trailers", trailers);
  formData.append("ads", ads);
  formData.append("transfers_ver", transfers_ver);
  formData.append("prints_ver", prints_ver);
  formData.append("dig_copies_ver", dig_copies_ver);
  formData.append("other_copies_ver", other_copies_ver);
  formData.append("postVersion_total", postVersionTotal);
  // VFX
  formData.append("vfx_producer", vfx_producer);
  formData.append("vfx_supervisor", vfx_supervisor);
  formData.append("vfx_coordinator", vfx_coordinator);
  formData.append("vfx_storyboard", vfx_storyboard);
  formData.append("vfx_pre_vis_team", vfx_pre_vis_team);
  formData.append("vconst { data } = awaitfx_post_vis_team", vfx_post_vis_team);
  formData.append("vfx_post_other_lab", vfx_post_other_lab);
  formData.append("miniatures_build", miniatures_build);
  formData.append("miniatures_shoot", miniatures_shoot);
  formData.append("motion_capture", motion_capture);
  formData.append("cyberscanning", cyberscanning);
  formData.append("vfx_rentals", vfx_rentals);
  formData.append("vfx_purchases", vfx_purchases);
  formData.append("vfx_vendor_1", vfx_vendor_1);
  formData.append("vfx_vendor_2", vfx_vendor_2);
  formData.append("vfx_vendor_3", vfx_vendor_3);
  formData.append("vfx_vendor_4", vfx_vendor_4);
  formData.append("vfx_vendor_5", vfx_vendor_5);
  formData.append("vfx_vendor_6", vfx_vendor_6);
  formData.append("vfx_vendor_7", vfx_vendor_7);
  formData.append("vfx_vendor_8", vfx_vendor_8);
  formData.append("vfx_vendor_9", vfx_vendor_9);
  formData.append("vfx_vendor_10", vfx_vendor_10);
  formData.append("vfx_vendors_x", vfx_vendors_x);
  formData.append("vfx_expenses", vfx_expenses);
  formData.append("vfx_traliv", vfx_traliv);
  formData.append("box_ren_vfx", box_ren_vfx);
  formData.append("lossdam_vfx", lossdam_vfx);
  formData.append("fringes_taxes_vfx", fringes_taxes_vfx);
  formData.append("other_post_vfx", other_post_vfx);
  formData.append("postVfx_total", postVfxTotal);
  // ALL D OTHER
  // Publicity
  formData.append("tests_theater_ren", tests_theater_ren);
  formData.append("tests_other", tests_other);
  formData.append("unit_publicist", unit_publicist);
  formData.append("pub_press_ex", pub_press_ex);
  formData.append("photography", photography);
  formData.append("epk", epk);
  formData.append("promotion", promotion);
  formData.append("pr", pr);
  formData.append("firnges_pub", firnges_pub);
  formData.append("other_pub", other_pub);
  formData.append("previews", previews);
  formData.append("website", website);
  formData.append("pub_total", pubTotal);
  // Insurance
  formData.append("pro_package", pro_package);
  formData.append("gen_lia", gen_lia);
  formData.append("eando", eando);
  formData.append("umbrella", umbrella);
  formData.append("union_insurance", union_insurance);
  formData.append("other_in", other_in);
  formData.append("insur_total", insurTotal);
  // General Expenses
  formData.append("legal", legal);
  formData.append("medical", medical);
  formData.append("licences", licences);
  formData.append("payroll", payroll);
  formData.append("bank_charges", bank_charges);
  formData.append("audit", audit);
  formData.append("genEx_total", genExTotal);
  // Indirect Costs
  formData.append("corporate_overhead", corporate_overhead);
  formData.append("fiscal_sponsor_fee", fiscal_sponsor_fee);
  formData.append("interim_financing", interim_financing);
  formData.append("indirCo_total", indirCoTotal);
  // Contingency/Bond
  formData.append("contingency", contingency);
  formData.append("completion_bond", completion_bond);

  try {
    await axiosReq.put(`/budgets3/${budgetId3}/`, formData);
    history.goBack();
  } catch (err) {
    console.log(err);
    if (err.response?.status !== 401) {
      setErrors(err.response?.data);
    }
  }
  };

  return (
    <div className="mt-3 ">
    <Row >
    <Col className={`${styles.Back}`}>
    <Row className={ `${styles.OverviewBlue} mx-1 mb-1 py-3 text-center`}>
    <Col md={12}>
    <h5 className={ `${styles.BoldBlack}`}>EDIT BUDGET - Project ID: {id}</h5>
    </Col>
    </Row>
    <Row className="mt-1 ml-0" >
        <Col xs={12}>
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <Button
          className={`float-right py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
          onClick={() => setShowInformation(showInformation => !showInformation)} >Information
        </Button>
        </Col>
    </Row>
    {/* info */}
    {!showInformation ? (
      ""
          ) : (
            <InfoBudEdit  /> 
    ) } 
    {/* GLOBALS in Edit Page*/}
    <div>
    <Row className="mb-3">
    <Col md={{span: 10, offset: 1}}>
    {/* <div className={`text-center px-3 pt-1 ${styles.SubTitle2 }`}>
    <h5 className={`text-center `} >Globals</h5> 
    </div>  */}
    <div className={`px-3 pt-1 ${styles.SubTitle77 }`}>
    {/* INFO */}
    {/* <Row className="mt-1 ml-2 px-3" >
        <Col >
        <Button
          className={`float-right py-0 mt-1 ${btnStyles.Blue} ${btnStyles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} >Information
        </Button>
        </Col>
    </Row> */}
    {/* INFO COMPONENT */}
    {/* <div>
    {!showInfo ? (
      ""
          ) : (
            <InfoGlobals  /> 
    ) }  
    </div> */}
    {/* Prep Shoot Wrap Globals input boxes and set buttons*/}
    <div>
    <Row>
    {/* prep */}
    {/* <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
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
    </Col> */}
    {/* shoot */}
    {/* <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
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
    </Col> */}
    {/* wrap */}
    {/* <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
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
    </Col> */}
    </Row>
    </div>
    {/* Prep Shoot Wrap Globals set buttons*/}
    {/* <div>
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
    </div> */}
    </div>
    </Col>
    </Row>
    </div>
    {/* Globals button */}
    <Row className="mt-1 ml-0" >
        <Col className="text-center" xs={12}>
        <Button
          className={`py-1 px-5 mt-1 mb-3 ${btnStyles.Order} ${btnStyles.Button}`}
          onClick={() => setShowGlobals(showGlobals => !showGlobals)} >
            Globals
        </Button>
        </Col>
    </Row>
    {/* Globals Component */}
    {!showGlobals ? (
      ""
          ) : (
            <Globals
            setShow={setShowGlobals}
            postDataProduction={postDataProduction}
            setPostDataProduction={setPostDataProduction}
            postDataDesign={postDataDesign}
            setPostDataDesign={setPostDataDesign}
            postDataConstruction={postDataConstruction}
            setPostDataConstruction={setPostDataConstruction}
            postDataSetDressing={postDataSetDressing}
            setPostDataSetDressing={setPostDataSetDressing}
            postDataProperty={postDataProperty}
            setPostDataProperty={setPostDataProperty}
            postDataWrangling={postDataWrangling}
            setPostDataWrangling={setPostDataWrangling}
            postDataSpecialEffects={postDataSpecialEffects}
            setPostDataSpecialEffects={setPostDataSpecialEffects}
            postDataWardrobe={postDataWardrobe}
            setPostDataWardrobe={setPostDataWardrobe}
            postDataMakeup={postDataMakeup}
            setPostDataMakeup={setPostDataMakeup}
            postDataCamera={postDataCamera}
            setPostDataCamera={setPostDataCamera}
            postDataElectric={postDataElectric}
            setPostDataElectric={setPostDataElectric}
            postDataGrip={postDataGrip}
            setPostDataGrip={setPostDataGrip}
            postDataSoundPro={postDataSoundPro}
            setPostDataSoundPro={setPostDataSoundPro}
            postDataTransport={postDataTransport}
            setPostDataTransport={setPostDataTransport}
            postDataTV={postDataTV}
            setPostDataTV={setPostDataTV}
            /> 
    ) } 
    {/* MAIN FORM */}
    <Form className="mt-5 px-3" onSubmit={handleSubmit}>
    {/* <Row>
      <Col>
      <p>One</p>
      <p>{budgetId1} - {budgetNumber1} </p>
      <p>Two</p>
      <p>{budgetId2} - {budgetNumber2} </p>
      <p>Three</p>
      <p>{budgetId3} - {budgetNumber3} </p>
      </Col>
    </Row> */}
    {prepare}
    {/* above total */}
    <Row className={ `${styles.OverviewBlue} mx-1 mt-5 py-1`}>
    <Col md={10}>
    <p className={ `pb-0 mb-0 ml-5 ${styles.BoldBlack}`}>ABOVE THE LINE</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box} 
       d-flex align-items-center justify-content-center`}>
      <p className={` mb-0 ${styles.BoldBlack}`}>{aboveTheLineTotal || 0} </p>
    </div>
    </Col>
    </Row>
    {/* sections above click buttons */}
    <Row className={`${styles.ButtonLine} mx-1`}>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} > Info/Length
        </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{postDataLengthTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowRights(showRights => !showRights)} > Rights
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{postDataRightsTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
    onClick={() => setShowDevelopment(showDevelopment => !showDevelopment)} > Development
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{developmentTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowScenario(showScenario => !showScenario)} > Scenario
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{scenarioTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowProDirs(showProDirs => !showProDirs)} > Producers/Directors
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{producersDirsTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={4} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRight}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowStarsMus(showStarsMus => !showStarsMus)} > Stars/Music
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{starsMusicTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    </Row>  
    {/* below B labour + total */}
    <Row className={ `${styles.OverviewBlue} mx-1 mb-0 mt-2 py-1`}>
    <Col md={10}>
    <p className={ `mb-0 ml-5 ${styles.BoldBlack}`}>
      BELOW THE LINE "B" PRODUCTION - LABOUR</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box} 
       d-flex align-items-center justify-content-center`}>
      <p className={` mb-0 ${styles.BoldBlack}`}>{belowTheLineBTotal || 0} </p>
    </div>
    </Col>
    </Row>
    {/* sections below B labour click buttons */}
    <Row className={`${styles.ButtonLine} mx-1`}>
    {/* Cast */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowCast(showCast => !showCast)} >Cast
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{castTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Production Staff */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowProStaff(showProStaff => !showProStaff)} > Production Staff
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{productionstaffTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Design */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowDesign(showDesign => !showDesign)} > Design Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{designlabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Construction */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowCon(showCon => !showCon)} >Construction Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{constructionlabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Dressing */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowDress(showDress => !showDress)} >Set Dressing Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{dressinglabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* property */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowProps(showProps => !showProps)} >Property Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{propertylabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Wrangling */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowWrang(showWrang => !showWrang)} >Wrangling Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{wranglerlabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* FX */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowFx(showFx => !showFx)} >Special Effects Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{fxlabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* wardrobe */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowWardrobe(showWardrobe => !showWardrobe)} >Wardrobe Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{wardrobelabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Makeup */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowMake(showMake => !showMake)} >Makeup Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{makeuplabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Camera */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowCam(showCam => !showCam)} >Camera Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{cameralabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* electric */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowElec(showElec => !showElec)} >Electrical Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{electriclabourTotal ||0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* grip */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowGrip(showGrip => !showGrip)} >Grip Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{griplabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Sound */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowSound(showSound => !showSound)} >Production Sound
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{soundlabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Transportation */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowTport(showTport => !showTport)} >Transportation
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{transportlabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* TV */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowTV(showTV => !showTV)} >TV Specific Labour
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{tvspecificlabourTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    </Row> 
    {/* below B costs + total */}
    <Row className={ `${styles.OverviewBlue} mx-1 mb-0 mt-2 py-1`}>
    <Col md={10}>
    <p className={ `mb-0 ml-3 ${styles.BoldBlack}`}>
      BELOW THE LINE "B" PRODUCTION - COSTS</p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box} 
       d-flex align-items-center justify-content-center`}>
      <p className={` mb-0 ${styles.BoldBlack}`}>{belowTheLineBCostsTotal || 0} </p>
    </div>
    </Col>
    </Row>
    {/* sections below B costs click buttons */}
    <Row className={`${styles.ButtonLine} mx-1`}>
    {/* Production Office */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowProOff(showProOff => !showProOff)} >Production Office
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{proOffTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Studio/Backlot */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowStudio(showStudio => !showStudio)} >Studio/Backlot
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{studioTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Site Expenses */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowSite(showSite => !showSite)} >Site Expenses
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{siteTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Unit Expenses */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowUnit(showUnit => !showUnit)} >Unit Expenses
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{unitTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* travel and living */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowTraLiv(showTraLiv => !showTraLiv)} >Travel & Living
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{tralivTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Transportation */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowTransport(showTransport => !showTransport)} >Transportation
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{transportTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Construction Material */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowConMat(showConMat => !showConMat)} >Construction Material
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{constructionMatTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Art supplies */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowArtSup(showArtSup => !showArtSup)} >Art Supplies
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{artSupTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Set Dressing */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowDressing(showDressing => !showDressing)} >Set Dressing
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{dressingTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Props */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowProp(showProp => !showProp)} >Props
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{propsTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Fx */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowSpecFx(showSpecFx => !showSpecFx)} >Special Effects
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{fxTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Animals */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowAnim(showAnim => !showAnim)} >Animals
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{animalsTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Wardrobe */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowWardSup(showWardSup => !showWardSup)} >Wardrobe Supplies
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{wardrobeTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Makeup */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowMakeSup(showMakeSup => !showMakeSup)} >Makeup Supplies
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{makeupTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Camera Equipment */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowCamEqu(showCamEqu => !showCamEqu)} >Camera Equipment
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{cameraTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Electrical Equipment */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowElecEqu(showElecEqu => !showElecEqu)} >Electrical Equipment
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{electricTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Grip Equipment */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowGripEqu(showGripEqu => !showGripEqu)} >Grip Equipment
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{gripTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Sound Equipment */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowSoundEqu(showSoundEqu => !showSoundEqu)} >Sound Equipment
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{soundTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Second Unit */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowSecond(showSecond => !showSecond)} >Second Unit
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{secondUTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Stock & Lab */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
          onClick={() => setShowLab(showLab => !showLab)} >Stock & Lab
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{stockLabTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    </Row>
    {/* Post Production "C" & total*/}
    <Row className={ `${styles.OverviewBlue} mx-1 mb-0 mt-2 py-1`}>
    <Col md={10}>
    <p className={ `mb-0 ml-5 ${styles.BoldBlack}`}>
      "C" POST PRODUCTION </p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box} 
       d-flex align-items-center justify-content-center`}>
      <p className={` mb-0 ${styles.BoldBlack}`}>{postProductionCTotal || 0} </p>
    </div>
      </Col>
    </Row>
    {/* sections post production "C" click buttons */}
    <Row className={`${styles.ButtonLine} mx-1`}>
    {/* Post Production Staff/Facilities */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowStaFac(showStaFac => !showStaFac)} >
    Staff/Facilities
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{postStaffFacTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Editing */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowEdit(showEdit => !showEdit)} >
    Editing
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{editingTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Post Sound */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowPoSoun(showPoSoun => !showPoSoun)} >
    Post Sound
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{postSoundTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Post Visual Effects */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowVfxPo(showVfxPo => !showVfxPo)} >
    Visual Effects
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{postVfxTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Post Lab/Copies */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowPoLab(showPoLab => !showPoLab)} >
    Lab/Copies
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{postLabTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Post Titles/Opticals/Stock Footage */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowTitle(showTitle => !showTitle)} >
    Titles/Opticals
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{postTitlesTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    {/* Post Versioning */}
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowVers(showVers => !showVers)} >
    Versioning
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{postVersionTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    </Row>
    {/* Other "D" & total */}
    <Row className={ `${styles.OverviewBlue} mx-1 mb-0 mt-2 py-1`}>
    <Col md={10}>
    <p className={ `mb-0 ml-3 ${styles.BoldBlack}`}>
      "D" OTHER </p>
    </Col>
    <Col md={2}>
    <div className={`${styles.Box} 
       d-flex align-items-center justify-content-center`}>
      <p className={` mb-0 ${styles.BoldBlack}`}>{otherDTotal || 0} </p>
    </div>
    </Col>
    </Row>
    {/* sections other "D" click buttons */}
    <Row className={`${styles.ButtonLine} mx-1`}>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowPub(showPub => !showPub)} >
    Publicity
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{pubTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowInsur(showInsur => !showInsur)} >
    Insurance
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{insurTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowGenex(showGenex => !showGenex)} >
    General Exp
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{genExTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col>
    <Col md={3} className='px-0 mx-0'>
    <div className={`p-0 m-0 ${styles.BorderRightLeft}`}>
    <Row>
    <Col md={8}>
    <p className={`pl-2 py-0 mb-0 ${styles.Button}`}
      onClick={() => setShowIndir(showIndir => !showIndir)} >
    Indirect Costs
    </p>
    </Col>
    <Col md={4}>
    <p className="mb-0 float-right pr-5">{indirCoTotal || 0} </p>
    </Col>
    </Row>
    </div>
    </Col> 
    </Row>
    {blabourncoststotal}
    {/* below B and C total  */}
    {belowbandcTotal}
    {/* Above "A" / Below "B" and "C"  total */}
    {abovebelowabcTotal}
    {/* "A"  "B" and "C" and "D" total */}
    {abovebelowabcanddTotal}
    {contin}
    {grandtotal}
    <Row>
    <Col md={4} ></Col>
    <Col md={4} >
    <hr className={`${styles.Break} mx-5 px-5 mt-5 mb-2`}/>
    </Col>
    </Row>
    {/* info */}
    {!showInfo ? (
      ""
    ) : (
      <Info
      postDataDetails={postDataDetails}
      setPostDataDetails={setPostDataDetails}
      postDataLength={postDataLength}
      setPostDataLength={setPostDataLength}
      postDataLengthTotal={postDataLengthTotal}
      setPostDataLengthTotal={setPostDataLengthTotal}
      setShow={setShowInfo}  /> 
    ) } 
    {/* rights */}
    {!showRights ? (
      ""
    ) : (
      <Rights
      postDataRights={postDataRights}
      setPostDataRights={setPostDataRights}
      postDataRightsTotal={postDataRightsTotal}
      setPostDataRightsTotal={setPostDataRightsTotal}
      setShow={setShowRights}  /> 
    ) }
    {/* development */}
    {!showDevelopment ? (
      ""
    ) : (
      <Development
      postDataDevelopment={postDataDevelopment}
      setPostDataDevelopment={setPostDataDevelopment}
      developmentTotal={developmentTotal}
      setDevelopmentTotal={setDevelopmentTotal}
      setShow={setShowDevelopment}  /> 
    ) }
    {/* scenario */}
    {!showScenario ? (
      ""
    ) : (
      <Scenario
      postDataScenario={postDataScenario}
      setPostDataScenario={setPostDataScenario}
      writersTotal={writersTotal}
      setWritersTotal={setWritersTotal}
      consultantsTotal={consultantsTotal}
      setConsultantsTotal={setConsultantsTotal}
      editorsscenarioTotal={editorsscenarioTotal}
      setEditorsscenarioTotal={setEditorsscenarioTotal}
      adminScenarioTotal={adminScenarioTotal}
      setAdminScenarioTotal={setAdminScenarioTotal}
      scenarioTotal={scenarioTotal}
      setScenarioTotal={setScenarioTotal}
      setShow={setShowScenario}  /> 
    ) }
    {/* producersDirs */}
    {!showProDirs ? (
      ""
    ) : (
      <ProducersDirectors
      postDataProducersDirs={postDataProducersDirs}
      setPostDataProducersDirs={setPostDataProducersDirs}
      execProducersTotal={execProducersTotal}
      setExecProducersTotal={setExecProducersTotal}
      producersTotal={producersTotal}
      setProducersTotal={setProducersTotal}
      lineProducersTotal={lineProducersTotal}
      setLineProducersTotal={setLineProducersTotal}
      coProducersTotal={coProducersTotal}
      setCoProducersTotal={setCoProducersTotal}
      assocProducersTotal={assocProducersTotal}
      setAssocProducersTotal={setAssocProducersTotal}
      directorsTotal={directorsTotal}
      setDirectorsTotal={setDirectorsTotal}
      unit2DirectorsTotal={unit2DirectorsTotal}
      setUnit2DirectorsTotal={setUnit2DirectorsTotal}
      producersDirsTotal={producersDirsTotal}
      setProducersDirsTotal={setProducersDirsTotal}
      setShow={setShowProDirs}  /> 
    ) }
    {/* starsmusic */}
    {!showStarsMus ? (
      ""
    ) : (
      <StarsMusic
      postDataStarsMusic={postDataStarsMusic}
      setPostDataStarsMusic={setPostDataStarsMusic}
      starsMusicTotal={starsMusicTotal}
      setStarsMusicTotal={setStarsMusicTotal}
      setShow={setShowStarsMus}  /> 
    ) }
    {/* cast */}
    {!showCast ? (
      ""
    ) : (
      <Cast
      postDataCast={postDataCast}
      setPostDataCast={setPostDataCast}
      principalsTotal={principalsTotal}
      setPrincipalsTotal={setPrincipalsTotal}
      actorsTotal={actorsTotal}
      setActorsTotal={setActorsTotal}
      stuntcoordinatorsTotal={stuntcoordinatorsTotal}
      setStuntcoordinatorsTotal={setStuntcoordinatorsTotal}
      stuntperformersTotal={stuntperformersTotal}
      setStuntperformersTotal={setStuntperformersTotal}
      otherperformersTotal={otherperformersTotal}
      setOtherperformersTotal={setOtherperformersTotal}
      extrasTotal={extrasTotal}
      setExtrasTotal={setExtrasTotal}
      castTotal={castTotal}
      setCastTotal={setCastTotal}
      setShow={setShowCast}  
      princ2Total={princ2Total}
      setPrinc2Total={setPrinc2Total}
      princ3Total={princ3Total}
      setPrinc3Total={setPrinc3Total}
      actor2Total={actor2Total}
      setActor2Total={setActor2Total}
      actor3Total={actor3Total}
      setActor3Total={setActor3Total}
      actor4Total={actor4Total}
      setActor4Total={setActor4Total}
      actor5Total={actor5Total}
      setActor5Total={setActor5Total}
      actor6Total={actor6Total}
      setActor6Total={setActor6Total}
      actor7Total={actor7Total}
      setActor7Total={setActor7Total}
      actorweekTotal={actorweekTotal}
      setActorweekTotal={setActorweekTotal}
      actordayTotal={actordayTotal}
      setActordayTotal={setActordayTotal}
      /> 
    ) }
    {/* production staff */}
    {!showProStaff ? (
      ""
    ) : (
      <ProductionStaff
      postDataProduction={postDataProduction}
      setPostDataProduction={setPostDataProduction}
      productionmanagerTotal={productionmanagerTotal}
      setProductionmanagerTotal={setProductionmanagerTotal}
      productionsupervisorTotal={productionsupervisorTotal}
      setProductionsupervisorTotal={setProductionsupervisorTotal}
      productioncoordinatorTotal={productioncoordinatorTotal}
      setProductioncoordinatorTotal={setProductioncoordinatorTotal}
      unitmanagerTotal={unitmanagerTotal}
      setUnitmanagerTotal={setUnitmanagerTotal}
      locationmanagerTotal={locationmanagerTotal}
      setLocationmanagerTotal={setLocationmanagerTotal}
      locationmanagerassistantTotal={locationmanagerassistantTotal}
      setLocationmanagerassistantTotal={setLocationmanagerassistantTotal}
      productionassistantsTotal={productionassistantsTotal}
      setProductionassistantsTotal={setProductionassistantsTotal}
      productionsecretaryTotal={productionsecretaryTotal}
      setProductionsecretaryTotal={setProductionsecretaryTotal}
      productionaccountantTotal={productionaccountantTotal}
      setProductionaccountantTotal={setProductionaccountantTotal}
      productionaccountantassistantTotal={productionaccountantassistantTotal}
      setProductionaccountantassistantTotal={setProductionaccountantassistantTotal}
      scriptsupervisorcontinuityTotal={scriptsupervisorcontinuityTotal}
      setScriptsupervisorcontinuityTotal={setScriptsupervisorcontinuityTotal}
      payrollTotal={payrollTotal}
      setPayrollTotal={setPayrollTotal}
      otherproductionTotal={otherproductionTotal}
      setOtherproductionTotal={setOtherproductionTotal}
      directorsassistantTotal={directorsassistantTotal}
      setDirectorsassistantTotal={setDirectorsassistantTotal}
      assistantdirector1stTotal={assistantdirector1stTotal}
      setAssistantdirector1stTotal={setAssistantdirector1stTotal}
      assistantdirector2ndTotal={assistantdirector2ndTotal}
      setAssistantdirector2ndTotal={setAssistantdirector2ndTotal}
      assistantdirector3rdTotal={assistantdirector3rdTotal}
      setAssistantdirector3rdTotal={setAssistantdirector3rdTotal}
      craftservicesTotal={craftservicesTotal}
      setCraftservicesTotal={setCraftservicesTotal}
      productionstaffTotal={productionstaffTotal}
      setProductionstaffTotal={setProductionstaffTotal}
      setShow={setShowProStaff}  
      // New
      productionmanagerprepTotal={productionmanagerprepTotal}
      setProductionmanagerprepTotal={setProductionmanagerprepTotal}
      productionmanagerwrapTotal={productionmanagerwrapTotal}
      setProductionmanagerwrapTotal={setProductionmanagerwrapTotal}
      productionmanagerallTotal={productionmanagerallTotal}
      setProductionmanagerallTotal={setProductionmanagerallTotal}
      productionsupervisorprepTotal={productionsupervisorprepTotal}
      setProductionsupervisorprepTotal={setProductionsupervisorprepTotal}
      productionsupervisorwrapTotal={productionsupervisorwrapTotal}
      setProductionsupervisorwrapTotal={setProductionsupervisorwrapTotal}
      productionsupervisorallTotal={productionsupervisorallTotal}
      setProductionsupervisorallTotal={setProductionsupervisorallTotal}
      productioncoordinatorprepTotal={productioncoordinatorprepTotal}
      setProductioncoordinatorprepTotal={setProductioncoordinatorprepTotal}
      productioncoordinatorwrapTotal={productioncoordinatorwrapTotal}
      setProductioncoordinatorwrapTotal={setProductioncoordinatorwrapTotal}
      productioncoordinatorallTotal={productioncoordinatorallTotal}
      setProductioncoordinatorallTotal={setProductioncoordinatorallTotal}
      unitmanagerprepTotal={unitmanagerprepTotal}
      setUnitmanagerprepTotal={setUnitmanagerprepTotal}
      unitmanagerwrapTotal={unitmanagerwrapTotal}
      setUnitmanagerwrapTotal={setUnitmanagerwrapTotal}
      unitmanagerallTotal={unitmanagerallTotal}
      setUnitmanagerallTotal={setUnitmanagerallTotal}
      locationmanagerwrapTotal={locationmanagerwrapTotal}
      setLocationmanagerwrapTotal={setLocationmanagerwrapTotal}
      locationmanagerprepTotal={locationmanagerprepTotal}
      setLocationmanagerprepTotal={setLocationmanagerprepTotal}
      locationmanagerallTotal={locationmanagerallTotal}
      setLocationmanagerallTotal={setLocationmanagerallTotal}
      locmanassprepTotal={locmanassprepTotal}
      setLocmanassprepTotal={setLocmanassprepTotal}
      locmanasswrapTotal={locmanasswrapTotal}
      setLocmanasswrapTotal={setLocmanasswrapTotal}
      locmanassallTotal={locmanassallTotal}
      setLocmanassallTotal={setLocmanassallTotal}
      proassprepTotal={proassprepTotal}
      setProassprepTotal={setProassprepTotal}
      proasswrapTotal={proasswrapTotal}
      setProasswrapTotal={setProasswrapTotal}
      proassallTotal={proassallTotal}
      setProassallTotal={setProassallTotal}
      prosecprepTotal={prosecprepTotal}
      setProsecprepTotal={setProsecprepTotal}
      prosecwrapTotal={prosecwrapTotal}
      setProsecwrapTotal={setProsecwrapTotal}
      prosecallTotal={prosecallTotal}
      setProsecallTotal={setProsecallTotal}
      proaccprepTotal={proaccprepTotal}
      setProaccprepTotal={setProaccprepTotal}
      proaccwrapTotal={proaccwrapTotal}
      setProaccwrapTotal={setProaccwrapTotal}
      proaccallTotal={proaccallTotal}
      setProaccallTotal={setProaccallTotal}
      proaccassprepTotal={proaccassprepTotal}
      setProaccassprepTotal={setProaccassprepTotal}
      proaccasswrapTotal={proaccasswrapTotal}
      setProaccasswrapTotal={setProaccasswrapTotal}
      proaccassallTotal={proaccassallTotal}
      setProaccassallTotal={setProaccassallTotal}
      scriptsupconprepTotal={scriptsupconprepTotal}
      setScriptsupconprepTotal={setScriptsupconprepTotal}
      scriptsupconwrapTotal={scriptsupconwrapTotal}
      setScriptsupconwrapTotal={setScriptsupconwrapTotal}
      scriptsupconallTotal={scriptsupconallTotal}
      setScriptsupconallTotal={setScriptsupconallTotal}
      payrollprepTotal={payrollprepTotal}
      setPayrollprepTotal={setPayrollprepTotal}
      payrollwrapTotal={payrollwrapTotal}
      setPayrollwrapTotal={setPayrollwrapTotal}
      payrollallTotal={payrollallTotal}
      setPayrollallTotal={setPayrollallTotal}
      otherproprepTotal={otherproprepTotal}
      setOtherproprepTotal={setOtherproprepTotal}
      otherprowrapTotal={otherprowrapTotal}
      setOtherprowrapTotal={setOtherprowrapTotal}
      otherproallTotal={otherproallTotal}
      setOtherproallTotal={setOtherproallTotal}
      directorsassprepTotal={directorsassprepTotal}
      setDirectorsassprepTotal={setDirectorsassprepTotal}
      directorsasswrapTotal={directorsasswrapTotal}
      setDirectorsasswrapTotal={setDirectorsasswrapTotal}
      directorsassallTotal={directorsassallTotal}
      setDirectorsassallTotal={setDirectorsassallTotal}
      assdirector1stprepTotal={assdirector1stprepTotal}
      setAssdirector1stprepTotal={setAssdirector1stprepTotal}
      assdirector1stwrapTotal={assdirector1stwrapTotal}
      setAssdirector1stwrapTotal={setAssdirector1stwrapTotal}
      assdirector1stallTotal={assdirector1stallTotal}
      setAssdirector1stallTotal={setAssdirector1stallTotal}
      assdirector2ndprepTotal={assdirector2ndprepTotal}
      setAssdirector2ndprepTotal={setAssdirector2ndprepTotal}
      assdirector2ndwrapTotal={assdirector2ndwrapTotal}
      setAssdirector2ndwrapTotal={setAssdirector2ndwrapTotal}
      assdirector2ndallTotal={assdirector2ndallTotal}
      setAssdirector2ndallTotal={setAssdirector2ndallTotal}
      assdirector3rdprepTotal={assdirector3rdprepTotal}
      setAssdirector3rdprepTotal={setAssdirector3rdprepTotal}
      assdirector3rdwrapTotal={assdirector3rdwrapTotal}
      setAssdirector3rdwrapTotal={setAssdirector3rdwrapTotal}
      assdirector3rdallTotal={assdirector3rdallTotal}
      setAssdirector3rdallTotal={setAssdirector3rdallTotal}
      craftservicesprepTotal={craftservicesprepTotal}
      setCraftservicesprepTotal={setCraftservicesprepTotal}
      craftserviceswrapTotal={craftserviceswrapTotal}
      setCraftserviceswrapTotal={setCraftserviceswrapTotal}
      craftservicesallTotal={craftservicesallTotal}
      setCraftservicesallTotal={setCraftservicesallTotal}
      /> 
    ) }
    {/* design */}
    {!showDesign ? (
      ""
    ) : (
      <DesignLabour
      postDataDesign={postDataDesign}
      setPostDataDesign={setPostDataDesign}
      productiondesignerTotal={productiondesignerTotal}
      setProductiondesignerTotal={setProductiondesignerTotal}
      artdirectorTotal={artdirectorTotal}
      setArtdirectorTotal={setArtdirectorTotal}
      artassistantsTotal={artassistantsTotal}
      setArtassistantsTotal={setArtassistantsTotal}
      productionassistantstraineesTotal={productionassistantstraineesTotal}
      setProductionassistantstraineesTotal={setProductionassistantstraineesTotal}
      graphicartistsTotal={graphicartistsTotal}
      setGraphicartistsTotal={setGraphicartistsTotal}
      designlabourTotal={designlabourTotal}
      setDesignlabourTotal={setDesignlabourTotal}
      setShow={setShowDesign}  
      prodesprepTotal={prodesprepTotal}
      setProdesprepTotal={setProdesprepTotal}
      prodeswrapTotal={prodeswrapTotal}
      setProdeswrapTotal={setProdeswrapTotal}
      prodesallTotal={prodesallTotal}
      setProdesallTotal={setProdesallTotal}
      artdirprepTotal={artdirprepTotal}
      setArtdirprepTotal={setArtdirprepTotal}
      artdirwrapTotal={artdirwrapTotal}
      setArtdirwrapTotal={setArtdirwrapTotal}
      artdirallTotal={artdirallTotal}
      setArtdirallTotal={setArtdirallTotal}
      artassprepTotal={artassprepTotal}
      setArtassprepTotal={setArtassprepTotal}
      artasswrapTotal={artasswrapTotal}
      setArtasswrapTotal={setArtasswrapTotal}
      artassallTotal={artassallTotal}
      setArtassallTotal={setArtassallTotal}
      proasstrainprepTotal={proasstrainprepTotal}
      setProasstrainprepTotal={setProasstrainprepTotal}
      proasstrainwrapTotal={proasstrainwrapTotal}
      setProasstrainwrapTotal={setProasstrainwrapTotal}
      proasstrainallTotal={proasstrainallTotal}
      setProasstrainallTotal={setProasstrainallTotal}
      graphicartprepTotal={graphicartprepTotal}
      setGraphicartprepTotal={setGraphicartprepTotal}
      graphicartallTotal={graphicartallTotal}
      setGraphicartallTotal={setGraphicartallTotal}
      supartdirTotal={supartdirTotal}
      setSupartdirTotal={setSupartdirTotal}
      supartdirprepTotal={supartdirprepTotal}
      setSupartdirprepTotal={setSupartdirprepTotal}
      supartdirallTotal={supartdirallTotal}
      setSupartdirpallTotal={setSupartdirpallTotal}
      setdesTotal={setdesTotal}
      setSetdesTotal={setSetdesTotal}
      setdesprepTotal={setdesprepTotal}
      setSetdesprepTotal={setSetdesprepTotal}
      setdesallTotal={setdesallTotal}
      setSetdesallTotal={setSetdesallTotal}
      jundraughtTotal={jundraughtTotal}
      setJundraughtTotal={setJundraughtTotal}
      jundraprepTotal={jundraprepTotal}
      setJundraprepTotal={setJundraprepTotal}
      jundraallTotal={jundraallTotal}
      setJundraallTotal={setJundraallTotal}
      standbyartTotal={standbyartTotal}
      setStandbyartTotal={setStandbyartTotal}
      stbyartprepTotal={stbyartprepTotal}
      setStbyartprepTotal={setStbyartprepTotal}
      stbyartallTotal={stbyartallTotal}
      setStbyartallTotal={setStbyartallTotal}
      artcoorTotal={artcoorTotal}
      setArtcoorTotal={setArtcoorTotal}
      artcoorprepTotal={artcoorprepTotal}
      setArtcoorprepTotal={setArtcoorprepTotal}
      artcoorwrapTotal={artcoorwrapTotal}
      setArtcoorwrapTotal={setArtcoorwrapTotal}
      artcoorallTotal={artcoorallTotal}
      setArtcoorallTotal={setArtcoorallTotal}
      /> 
    ) }
    {/* construction */}
    {!showCon ? (
      ""
    ) : (
      <Construction
      postDataConstruction={postDataConstruction}
      setPostDataConstruction={setPostDataConstruction}
      constructioncoordinatorTotal={constructioncoordinatorTotal}
      setConstructioncoordinatorTotal={setConstructioncoordinatorTotal}
      headcarpenterTotal={headcarpenterTotal}
      setHeadcarpenterTotal={setHeadcarpenterTotal}
      carpentersTotal={carpentersTotal}
      setCarpentersTotal={setCarpentersTotal}
      scenicpaintersTotal={scenicpaintersTotal}
      setScenicpaintersTotal={setScenicpaintersTotal}
      headpainterTotal={headpainterTotal}
      setHeadpainterTotal={setHeadpainterTotal}
      paintersTotal={paintersTotal}
      setPaintersTotal={setPaintersTotal}
      labourersTotal={labourersTotal}
      setLabourersTotal={setLabourersTotal}
      constructionlabourTotal={constructionlabourTotal}
      setConstructionlabourTotal={setConstructionlabourTotal}
      setShow={setShowCon}  
      concoorprepTotal={concoorprepTotal}
      setConoorprepTotal={setConoorprepTotal}
      concoorwrapTotal={concoorwrapTotal}
      setConoorwrapTotal={setConoorwrapTotal}
      concoorallTotal={concoorallTotal}
      setConoorallTotal={setConoorallTotal}
      headcarprepTotal={headcarprepTotal}
      setHeadcarprepTotal={setHeadcarprepTotal}
      headcarwrapTotal={headcarwrapTotal}
      setHeadcarwrapTotal={setHeadcarwrapTotal}
      headcarallTotal={headcarallTotal}
      setHeadcarallTotal={setHeadcarallTotal}
      carpenprepTotal={carpenprepTotal}
      setCarpenprepTotal={setCarpenprepTotal}
      carpenwrapTotal={carpenwrapTotal}
      setCarpenwrapTotal={setCarpenwrapTotal}
      carpenallTotal={carpenallTotal}
      setCarpenallTotal={setCarpenallTotal}
      scenicprepTotal={scenicprepTotal}
      setScenicprepTotal={setScenicprepTotal}
      scenicwrapTotal={scenicwrapTotal}
      setScenicwrapTotal={setScenicwrapTotal}
      scenicallTotal={scenicallTotal}
      setScenicallTotal={setScenicallTotal}
      headpainprepTotal={headpainprepTotal}
      setHeadpainprepTotal={setHeadpainprepTotal}
      headpainwrapTotal={headpainwrapTotal}
      setHeadpainwrapTotal={setHeadpainwrapTotal}
      headpainallTotal={headpainallTotal}
      setHeadpainallTotal={setHeadpainallTotal}
      paintprepTotal={paintprepTotal}
      setPaintprepTotal={setPaintprepTotal}
      paintwrapTotal={paintwrapTotal}
      setPaintwrapTotal={setPaintwrapTotal}
      paintallTotal={paintallTotal}
      setPaintallTotal={setPaintallTotal}
      laboprepTotal={laboprepTotal}
      setLaboprepTotal={setLaboprepTotal}
      labowrapTotal={labowrapTotal}
      setLabowrapTotal={setLabowrapTotal}
      laboallTotal={laboallTotal}
      setLaboallTotal={setLaboallTotal}
      /> 
    ) }
    {/* set dressing */}
    {!showDress ? (
      ""
    ) : (
      <SetDressingLabour
      postDataSetDressing={postDataSetDressing}
      setPostDataSetDressing={setPostDataSetDressing}
      decoratorsetTotal={decoratorsetTotal}
      setDecoratorsetTotal={setDecoratorsetTotal}
      assistdecoratorsetTotal={assistdecoratorsetTotal}
      setAssistdecoratorsetTotal={setAssistdecoratorsetTotal}
      leadmanTotal={leadmanTotal}
      setLeadmanTotal={setLeadmanTotal}
      dressersTotal={dressersTotal}
      setDressersTotal={setDressersTotal}
      swinggangTotal={swinggangTotal}
      setSwinggangTotal={setSwinggangTotal}
      dressingbuyerTotal={dressingbuyerTotal}
      setDressingbuyerTotal={setDressingbuyerTotal}
      dressinglabourTotal={dressinglabourTotal}
      setDressinglabourTotal={setDressinglabourTotal}
      setShow={setShowDress}  
      decsetprepTotal={decsetprepTotal}
      setDecsetprepTotal={setDecsetprepTotal}
      decsetwrapTotal={decsetwrapTotal}
      setDecsetwrapTotal={setDecsetwrapTotal}
      decsetallTotal={decsetallTotal}
      setDecsetallTotal={setDecsetallTotal}
      assdsetprepTotal={assdsetprepTotal}
      setAssdsetprepTotal={setAssdsetprepTotal}
      assdsetwrapTotal={assdsetwrapTotal}
      setAssdsetwrapTotal={setAssdsetwrapTotal}
      assdsetallTotal={assdsetallTotal}
      setAssdsetallTotal={setAssdsetallTotal}
      leadmanprepTotal={leadmanprepTotal}
      setLeadmanprepTotal={setLeadmanprepTotal}
      leadmanwrapTotal={leadmanwrapTotal}
      setLeadmanwrapTotal={setLeadmanwrapTotal}
      leadmanallTotal={leadmanallTotal}
      setLeadmanallTotal={setLeadmanallTotal}
      dressprepTotal={dressprepTotal}
      setDressprepTotal={setDressprepTotal}
      dresswrapTotal={dresswrapTotal}
      setDresswrapTotal={setDresswrapTotal}
      dressallTotal={dressallTotal}
      setDressallTotal={setDressallTotal}
      swinggprepTotal={swinggprepTotal}
      setSwinggprepTotal={setSwinggprepTotal}
      swinggwrapTotal={swinggwrapTotal}
      setSwinggwrapTotal={setSwinggwrapTotal}
      swinggallTotal={swinggallTotal}
      setSwinggallTotal={setSwinggallTotal}
      dressbuyprepTotal={dressbuyprepTotal}
      setDressbuyprepTotal={setDressbuyprepTotal}
      dressbuywrapTotal={dressbuywrapTotal}
      setDressbuywrapTotal={setDressbuywrapTotal}
      dressbuyallTotal={dressbuyallTotal}
      setDressbuyallTotal={setDressbuyallTotal} /> 
    ) }
    {/* property */}
    {!showProps ? (
      ""
    ) : (
      <PropertyLabour
      postDataProperty={postDataProperty}
      setPostDataProperty={setPostDataProperty}
      propertymasterTotal={propertymasterTotal}
      setPropertymasterTotal={setPropertymasterTotal}
      assistpropertymasterTotal={assistpropertymasterTotal}
      setAssistpropertymasterTotal={setAssistpropertymasterTotal}
      onsetpropspersonTotal={onsetpropspersonTotal}
      setOnsetpropspersonTotal={setOnsetpropspersonTotal}
      propertybuyerTotal={propertybuyerTotal}
      setPropertybuyerTotal={setPropertybuyerTotal}
      armorerTotal={armorerTotal}
      setArmorerTotal={setArmorerTotal}
      propertylabourTotal={propertylabourTotal}
      setPropertylabourTotal={setPropertylabourTotal}
      setShow={setShowProps}
      propmasprepTotal={propmasprepTotal}
      setPropmasprepTotal={setPropmasprepTotal}
      propmaswrapTotal={propmaswrapTotal}
      setPropmaswrapTotal={setPropmaswrapTotal}
      propmasallTotal={propmasallTotal}
      setPropmasallTotal={setPropmasallTotal}
      aspropmaprepTotal={aspropmaprepTotal}
      setAspropmaprepTotal={setAspropmaprepTotal}
      aspropmawrapTotal={aspropmawrapTotal}
      setAspropmawrapTotal={setAspropmawrapTotal}
      aspropmaallTotal={aspropmaallTotal}
      setAspropmaallTotal={setAspropmaallTotal}
      onsetpropprepTotal={onsetpropprepTotal}
      setOnsetpropprepTotal={setOnsetpropprepTotal}
      onsetpropwrapTotal={onsetpropwrapTotal}
      setOnsetpropwrapTotal={setOnsetpropwrapTotal}
      onsetpropallTotal={onsetpropallTotal}
      setOnsetpropallTotal={setOnsetpropallTotal}
      propbuyprepTotal={propbuyprepTotal}
      setPropbuyprepTotal={setPropbuyprepTotal}
      propbuywrapTotal={propbuywrapTotal}
      setPropbuywrapTotal={setPropbuywrapTotal}
      propbuyallTotal={propbuyallTotal}
      setPropbuyallTotal={setPropbuyallTotal}
      armorprepTotal={armorprepTotal}
      setArmorprepTotal={setArmorprepTotal}
      armorwrapTotal={armorwrapTotal}
      setArmorwrapTotal={setArmorwrapTotal}
      armorallTotal={armorallTotal}
      setArmorallTotal={setArmorallTotal}
      /> 
    ) }
    {/* wrangling */}
    {!showWrang ? (
      ""
    ) : (
      <Wrangling
      postDataWrangling={postDataWrangling}
      setPostDataWrangling={setPostDataWrangling}
      headwranglerTotal={headwranglerTotal}
      setHeadwranglerTotal={setHeadwranglerTotal}
      otherwranglinglabourTotal={otherwranglinglabourTotal}
      setOtherwranglinglabourTotal={setOtherwranglinglabourTotal}
      wranglerlabourTotal={wranglerlabourTotal}
      setWranglerlabourTotal={setWranglerlabourTotal}
      setShow={setShowWrang}
      hewranprepTotal={hewranprepTotal}
      setHewranprepTotal={setHewranprepTotal}
      hewranwrapTotal={hewranwrapTotal}
      setHewranwrapTotal={setHewranwrapTotal}
      hewranallTotal={hewranallTotal}
      setHewranallTotal={setHewranallTotal}
      othwranlabprepTotal={othwranlabprepTotal}
      setOtwranlabprepTotal={setOtwranlabprepTotal}
      othwranlabwrapTotal={othwranlabwrapTotal}
      setOtwranlabwrapTotal={setOtwranlabwrapTotal}
      othwranlaballTotal={othwranlaballTotal}
      setOtwranlaballTotal={setOtwranlaballTotal}
      /> 
    ) }
    {/* fx */}
    {!showFx ? (
      ""
    ) : (
      <SpecialEffects
      postDataSpecialEffects={postDataSpecialEffects}
      setPostDataSpecialEffects={setPostDataSpecialEffects}
      fxsupervisorTotal={fxsupervisorTotal}
      setFxsupervisorTotal={setFxsupervisorTotal}
      assistfxTotal={assistfxTotal}
      setAssistfxTotal={setAssistfxTotal}
      otherfxlabourTotal={otherfxlabourTotal}
      setOtherfxlabourTotal={setOtherfxlabourTotal}
      fxlabourTotal={fxlabourTotal}
      setFxlabourTotal={setFxlabourTotal}
      setShow={setShowFx}  
      fxsupprepTotal={fxsupprepTotal}
      setFxsupprepTotal={setFxsupprepTotal}
      fxsupwrapTotal={fxsupwrapTotal}
      setFxsupwrapTotal={setFxsupwrapTotal}
      fxsupallTotal={fxsupallTotal}
      setFxsupallTotal={setFxsupallTotal}
      assfxprepTotal={assfxprepTotal}
      setAssfxprepTotal={setAssfxprepTotal}
      assfxwrapTotal={assfxwrapTotal}
      setAssfxwrapTotal={setAssfxwrapTotal}
      assfxallTotal={assfxallTotal}
      setAssfxallTotal={setAssfxallTotal}
      othfxlabprepTotal={othfxlabprepTotal}
      setOthfxlabprepTotal={setOthfxlabprepTotal}
      othfxlabwrapTotal={othfxlabwrapTotal}
      setOthfxlabwrapTotal={setOthfxlabwrapTotal}
      othfxlaballTotal={othfxlaballTotal}
      setOthfxlaballTotal={setOthfxlaballTotal}
      /> 
    ) }
    {/* wardrobe */}
    {!showWardrobe ? (
      ""
    ) : (
      <Wardrobe
      postDataWardrobe={postDataWardrobe}
      setPostDataWardrobe={setPostDataWardrobe}
      costumedesignerTotal={costumedesignerTotal}
      setCostumedesignerTotal={setCostumedesignerTotal}
      assistcosdesignerTotal={assistcosdesignerTotal}
      setAssistcosdesignerTotal={setAssistcosdesignerTotal}
      headwardrobeTotal={headwardrobeTotal}
      setHeadwardrobeTotal={setHeadwardrobeTotal}
      wardrobeassistTotal={wardrobeassistTotal}
      setWardrobeassistTotal={setWardrobeassistTotal}
      truckcostumerTotal={truckcostumerTotal}
      setTruckcostumerTotal={setTruckcostumerTotal}
      otherwardrobeTotal={otherwardrobeTotal}
      setOtherwardrobeTotal={setOtherwardrobeTotal}
      wardrobelabourTotal={wardrobelabourTotal}
      setWardrobelabourTotal={setWardrobelabourTotal}
      setShow={setShowWardrobe}  
      cosdesprepTotal={cosdesprepTotal}
      setCosdesprepTotal={setCosdesprepTotal}
      cosdeswrapTotal={cosdeswrapTotal}
      setCosdeswrapTotal={setCosdeswrapTotal}
      cosdesallTotal={cosdesallTotal}
      setCosdesallTotal={setCosdesallTotal}
      ascosdesprepTotal={ascosdesprepTotal}
      setAscosdesprepTotal={setAscosdesprepTotal}
      ascosdeswrapTotal={ascosdeswrapTotal}
      setAscosdeswrapTotal={setAscosdeswrapTotal}
      ascosdesallTotal={ascosdesallTotal}
      setAscosdesallTotal={setAscosdesallTotal}
      hewarprepTotal={hewarprepTotal}
      setHewarprepTotal={setHewarprepTotal}
      hewarwrapTotal={hewarwrapTotal}
      setHewarwrapTotal={setHewarwrapTotal}
      hewarallTotal={hewarallTotal}
      setHewarallTotal={setHewarallTotal}
      warasprepTotal={warasprepTotal}
      setWarasprepTotal={setWarasprepTotal}
      waraswrapTotal={waraswrapTotal}
      setWaraswrapTotal={setWaraswrapTotal}
      warasallTotal={warasallTotal}
      setWarasallTotal={setWarasallTotal}
      trucosprepTotal={trucosprepTotal}
      setTrucosprepTotal={setTrucosprepTotal}
      trucoswrapTotal={trucoswrapTotal}
      setTrucoswrapTotal={setTrucoswrapTotal}
      trucosallTotal={trucosallTotal}
      setTrucosallTotal={setTrucosallTotal}
      shopperTotal={shopperTotal}
      setShopperTotal={setShopperTotal}
      shopprepTotal={shopprepTotal}
      setShopprepTotal={setShopprepTotal}
      shopallTotal={shopallTotal}
      setShopallTotal={setShopallTotal}
      othwarprepTotal={othwarprepTotal}
      setOthwarprepTotal={setOthwarprepTotal}
      othwarwrapTotal={othwarwrapTotal}
      setOthwarwrapTotal={setOthwarwrapTotal}
      othwarallTotal={othwarallTotal}
      setOthwarallTotal={setOthwarallTotal}
      warcoorTotal={warcoorTotal}
      setWarcoorTotal={setWarcoorTotal}
      warcoprepTotal={warcoprepTotal}
      setWarcoprepTotal={setWarcoprepTotal}
      warcowrapTotal={warcowrapTotal}
      setWarcowrapTotal={setWarcowrapTotal}
      warcoallTotal={warcoallTotal}
      setWarcoallTotal={setWarcoallTotal}
      wartrainTotal={wartrainTotal}
      setWartrainTotal={setWartrainTotal}
      wartraprepTotal={wartraprepTotal}
      setWartraprepTotal={setWartraprepTotal}
      wartrawrapTotal={wartrawrapTotal}
      setWartrawrapTotal={setWartrawrapTotal}
      wartraallTotal={wartraallTotal}
      setWartraallTotal={setWartraallTotal}
      wardayTotal={wardayTotal}
      setWardayTotal={setWardayTotal}
      /> 
    ) }
    {/* makeup */}
    {!showMake ? (
      ""
    ) : (
      <Makeup 
      postDataMakeup={postDataMakeup}
      setPostDataMakeup={setPostDataMakeup}
      headmakeupTotal={headmakeupTotal}
      setHeadmakeupTotal={setHeadmakeupTotal}
      keymakeupTotal={keymakeupTotal}
      setKeymakeupTotal={setKeymakeupTotal}
      makeupartistTotal={makeupartistTotal}
      setMakeupartistTotal={setMakeupartistTotal}
      keyhairstylistTotal={keyhairstylistTotal}
      setKeyhairstylistTotal={setKeyhairstylistTotal}
      hairdresserTotal={hairdresserTotal}
      setHairdresserTotal={setHairdresserTotal}
      hairmakeupdailiesTotal={hairmakeupdailiesTotal}
      setHairmakeupdailiesTotal={setHairmakeupdailiesTotal}
      othermakeuplabourTotal={othermakeuplabourTotal}
      setOthermakeuplabourTotal={setOthermakeuplabourTotal}
      sfxmakeupTotal={sfxmakeupTotal}
      setSfxmakeupTotal={setSfxmakeupTotal}
      makeuplabourTotal={makeuplabourTotal}
      setMakeuplabourTotal={setMakeuplabourTotal}
      setShow={setShowMake} 
      headmakprepTotal={headmakprepTotal}
      setHeadmakprepTotal={setHeadmakprepTotal}
      headmakwrapTotal={headmakwrapTotal}
      setHeadmakwrapTotal={setHeadmakwrapTotal}
      headmakallTotal={headmakallTotal}
      setHeadmakallTotal={setHeadmakallTotal}
      keymakprepTotal={keymakprepTotal}
      setKeymakprepTotal={setKeymakprepTotal}
      keymakwrapTotal={keymakwrapTotal}
      setKeymakwrapTotal={setKeymakwrapTotal}
      keymakallTotal={keymakallTotal}
      setKeymakallTotal={setKeymakallTotal}
      makartprepTotal={makartprepTotal}
      setMakartprepTotal={setMakartprepTotal}
      makartwrapTotal={makartwrapTotal}
      setMakartwrapTotal={setMakartwrapTotal}
      makartallTotal={makartallTotal}
      setMakartallTotal={setMakartallTotal}
      keyhairprepTotal={keyhairprepTotal}
      setKeyhairprepTotal={setKeyhairprepTotal}
      keyhairwrapTotal={keyhairwrapTotal}
      setKeyhairwrapTotal={setKeyhairwrapTotal}
      keyhairallTotal={keyhairallTotal}
      setKeyhairallTotal={setKeyhairallTotal}
      hairprepTotal={hairprepTotal}
      setHairprepTotal={setHairprepTotal}
      hairwrapTotal={hairwrapTotal}
      setHairwrapTotal={setHairwrapTotal}
      hairallTotal={hairallTotal}
      setHairallTotal={setHairallTotal}
      othmakprepTotal={othmakprepTotal}
      setOthmakprepTotal={setOthmakprepTotal}
      othmakwrapTotal={othmakwrapTotal}
      setOthmakwrapTotal={setOthmakwrapTotal}
      othmakallTotal={othmakallTotal}
      setOthmakallTotal={setOthmakallTotal}
      sfxmakprepTotal={sfxmakprepTotal}
      setSfxmakprepTotal={setSfxmakprepTotal}
      sfxmakwrapTotal={sfxmakwrapTotal}
      setSfxmakwrapTotal={setSfxmakwrapTotal}
      sfxmakallTotal={sfxmakallTotal}
      setSfxmakallTotal={setSfxmakallTotal}
      maktrainTotal={maktrainTotal}
      setMakktrainTotal={setMakktrainTotal}
      maktraprepTotal={maktraprepTotal}
      setMakktraprepTotal={setMakktraprepTotal}
      maktrawrapTotal={maktrawrapTotal}
      setMakktrawrapTotal={setMakktrawrapTotal}
      maktraallTotal={maktraallTotal}
      setMakktraallTotal={setMakktraallTotal}
      /> 
    ) }
    {/* camera */}
    {!showCam ? (
      ""
    ) : (
      <Camera
      postDataCamera={postDataCamera}
      setPostDataCamera={setPostDataCamera}
      dopTotal={dopTotal}
      setDopTotal={setDopTotal}
      cameraopTotal={cameraopTotal}
      setCameraopTotal={setCameraopTotal}
      camac1Total={camac1Total}
      setCamac1Total={setCamac1Total}
      camac2Total={camac2Total}
      setCamac2Total={setCamac2Total}
      ditTotal={ditTotal}
      setDitTotal={setDitTotal}
      steadicamTotal={steadicamTotal}
      setSteadicamTotal={setSteadicamTotal}
      campaTotal={campaTotal}
      setCampaTotal={setCampaTotal}
      dronepilotTotal={dronepilotTotal}
      setDronepilotTotal={setDronepilotTotal}
      othercamTotal={othercamTotal}
      setOthercamTotal={setOthercamTotal}
      stillsTotal={stillsTotal}
      setStillsTotal={setStillsTotal}
      cameralabourTotal={cameralabourTotal}
      setCameralabourTotal={setCameralabourTotal}
      setShow={setShowCam}  
      dopprepTotal={dopprepTotal}
      setDopprepTotal={setDopprepTotal}
      dopwrapTotal={dopwrapTotal}
      setDopwrapTotal={setDopwrapTotal}
      dopallTotal={dopallTotal}
      setDopallTotal={setDopallTotal}
      camopprepTotal={camopprepTotal}
      setCamopprepTotal={setCamopprepTotal}
      camopwrapTotal={camopwrapTotal}
      setCamopwrapTotal={setCamopwrapTotal}
      camopallTotal={camopallTotal}
      setCamopallTotal={setCamopallTotal}
      camac1prepTotal={camac1prepTotal}
      setCamac1prepTotal={setCamac1prepTotal}
      camac1wrapTotal={camac1wrapTotal}
      setCamac1wrapTotal={setCamac1wrapTotal}
      camac1allTotal={camac1allTotal}
      setCamac1allTotal={setCamac1allTotal}
      camac2prepTotal={camac2prepTotal}
      setCamac2prepTotal={setCamac2prepTotal}
      camac2wrapTotal={camac2wrapTotal}
      setCamac2wrapTotal={setCamac2wrapTotal}
      camac2allTotal={camac2allTotal}
      setCamac2allTotal={setCamac2allTotal}
      ditprepTotal={ditprepTotal}
      setDitprepTotal={setDitprepTotal}
      ditwrapTotal={ditwrapTotal}
      setDitwrapTotal={setDitwrapTotal}
      ditallTotal={ditallTotal}
      setDitallTotal={setDitallTotal}
      stecamprepTotal={stecamprepTotal}
      setStecamprepTotal={setStecamprepTotal}
      stecamwrapTotal={stecamwrapTotal}
      setStecamwrapTotal={setStecamwrapTotal}
      stecamallTotal={stecamallTotal}
      setStecamallTotal={setStecamallTotal}
      campaprepTotal={campaprepTotal}
      setCampaprepTotal={setCampaprepTotal}
      campawrapTotal={campawrapTotal}
      setCampawrapTotal={setCampawrapTotal}
      campaallTotal={campaallTotal}
      setCampaallTotal={setCampaallTotal}
      dronpiprepTotal={dronpiprepTotal}
      setDronpiprepTotal={setDronpiprepTotal}
      dronpiwrapTotal={dronpiwrapTotal}
      setDronpiwrapTotal={setDronpiwrapTotal}
      dronpiallTotal={dronpiallTotal}
      setDronpiallTotal={setDronpiallTotal}
      othcamprepTotal={othcamprepTotal}
      setOthcamprepTotal={setOthcamprepTotal}
      othcamwrapTotal={othcamwrapTotal}
      setOthcamwrapTotal={setOthcamwrapTotal}
      othcamallTotal={othcamallTotal}
      setOthcamallTotal={setOthcamallTotal}
      /> 
    ) }
    {/* electric */}
    {!showElec ? (
      ""
    ) : (
      <Electric
      postDataElectric={postDataElectric}
      setPostDataElectric={setPostDataElectric}
      gafferTotal={gafferTotal}
      setGafferTotal={setGafferTotal}
      bestboyTotal={bestboyTotal}
      setBestboyTotal={setBestboyTotal}
      electricianTotal={electricianTotal}
      setElectricianTotal={setElectricianTotal}
      dailieselecTotal={dailieselecTotal}
      setDailieselecTotal={setDailieselecTotal}
      generatoropTotal={generatoropTotal}
      setGeneratoropTotal={setGeneratoropTotal}
      otherelectricTotal={otherelectricTotal}
      setOtherelectricTotal={setOtherelectricTotal}
      electriclabourTotal={electriclabourTotal}
      setElectriclabourTotal={setElectriclabourTotal}
      setShow={setShowElec}  
      gafprepTotal={gafprepTotal}
      setGafprepTotal={setGafprepTotal}
      gafwrapTotal={gafwrapTotal}
      setGafwrapTotal={setGafwrapTotal}
      gafallTotal={gafallTotal}
      setGafallTotal={setGafallTotal}
      bboyprepTotal={bboyprepTotal}
      setBboyprepTotal={setBboyprepTotal}
      bboywrapTotal={bboywrapTotal}
      setBboywrapTotal={setBboywrapTotal}
      bboyallTotal={bboyallTotal}
      setBboyallTotal={setBboyallTotal}
      elecprepTotal={elecprepTotal}
      setElecprepTotal={setElecprepTotal}
      elecwrapTotal={elecwrapTotal}
      setElecwrapTotal={setElecwrapTotal}
      elecallTotal={elecallTotal}
      setElecallTotal={setElecallTotal}
      daelecprepTotal={daelecprepTotal}
      setDaelecprepTotal={setDaelecprepTotal}
      daelecwrapTotal={daelecwrapTotal}
      setDaelecwrapTotal={setDaelecwrapTotal}
      daelecallTotal={daelecallTotal}
      setDaelecallTotal={setDaelecallTotal}
      genopprepTotal={genopprepTotal}
      setGenopprepTotal={setGenopprepTotal}
      genopwrapTotal={genopwrapTotal}
      setGenopwrapTotal={setGenopwrapTotal}
      genopallTotal={genopallTotal}
      setGenopallTotal={setGenopallTotal}
      otelecprepTotal={otelecprepTotal}
      setOtelecprepTotal={setOtelecprepTotal}
      otelecwrapTotal={otelecwrapTotal}
      setOtelecwrapTotal={setOtelecwrapTotal}
      otelecallTotal={otelecallTotal}
      setOtelecallTotal={setOtelecallTotal}
      /> 
    ) }
    {/* grip */}
    {!showGrip ? (
      ""
    ) : (
      <Grip 
      postDataGrip={postDataGrip}
      setPostDataGrip={setPostDataGrip}
      keygripTotal={keygripTotal}
      setKeygripTotal={setKeygripTotal}
      bestboygripTotal={bestboygripTotal}
      setBestboygripTotal={setBestboygripTotal}
      gripsTotal={gripsTotal}
      setGripsTotal={setGripsTotal}
      dailiesgripTotal={dailiesgripTotal}
      setDailiesgripTotal={setDailiesgripTotal}
      dollycranegripTotal={dollycranegripTotal}
      setDollycranegripTotal={setDollycranegripTotal}
      swinggripsTotal={swinggripsTotal}
      setSwinggripsTotal={setSwinggripsTotal}
      othergriplabourTotal={othergriplabourTotal}
      setOthergriplabourTotal={setOthergriplabourTotal}
      griplabourTotal={griplabourTotal}
      setGriplabourTotal={setGriplabourTotal}
      setShow={setShowGrip}  
      kgripprepTotal={kgripprepTotal}
      setKgripprepTotal={setKgripprepTotal}
      kgripwrapTotal={kgripwrapTotal}
      setKgripwrapTotal={setKgripwrapTotal}
      kgripallTotal={kgripallTotal}
      setKgripallTotal={setKgripallTotal}
      bbgripprepTotal={bbgripprepTotal}
      setBbgripprepTotal={setBbgripprepTotal}
      bbgripwrapTotal={bbgripwrapTotal}
      setBbgripwrapTotal={setBbgripwrapTotal}
      bbgripallTotal={bbgripallTotal}
      setBbgripallTotal={setBbgripallTotal}
      gripsprepTotal={gripsprepTotal}
      setGripsprepTotal={setGripsprepTotal}
      gripswrapTotal={gripswrapTotal}
      setGripswrapTotal={setGripswrapTotal}
      gripsallTotal={gripsallTotal}
      setGripsallTotal={setGripsallTotal}
      dolgripprepTotal={dolgripprepTotal}
      setDolgripprepTotal={setDolgripprepTotal}
      dolgripwrapTotal={dolgripwrapTotal}
      setDolgripwrapTotal={setDolgripwrapTotal}
      dolgripallTotal={dolgripallTotal}
      setDolgripallTotal={setDolgripallTotal}
      swigripsprepTotal={swigripsprepTotal}
      setSwigripsprepTotal={setSwigripsprepTotal}
      swigripswrapTotal={swigripswrapTotal}
      setSwigripswrapTotal={setSwigripswrapTotal}
      swigripsallTotal={swigripsallTotal}
      setSwigripsallTotal={setSwigripsallTotal}
      othgripprepTotal={othgripprepTotal}
      setOthgripprepTotal={setOthgripprepTotal}
      othgripwrapTotal={othgripwrapTotal}
      setOthgripwrapTotal={setOthgripwrapTotal}
      othgripallTotal={othgripallTotal}
      setOthgripallTotal={setOthgripallTotal}
    /> 
    ) }
    {/* sound */}
    {!showSound ? (
      ""
    ) : (
      <Sound 
      postDataSoundPro={postDataSoundPro}
      setPostDataSoundPro={setPostDataSoundPro}
      soundmixerTotal={soundmixerTotal}
      setSoundmixerTotal={setSoundmixerTotal}
      boomoperatorTotal={boomoperatorTotal}
      setBoomoperatorTotal={setBoomoperatorTotal}
      cablewranglerTotal={cablewranglerTotal}
      setCablewranglerTotal={setCablewranglerTotal}
      othersoundlabourTotal={othersoundlabourTotal}
      setOthersoundlabourTotal={setOthersoundlabourTotal}
      soundlabourTotal={soundlabourTotal}
      setSoundlabourTotal={setSoundlabourTotal}
      setShow={setShowSound}
      somixprepTotal={somixprepTotal}
      setSomixprepTotal={setSomixprepTotal}
      somixwrapTotal={somixwrapTotal}
      setSomixwrapTotal={setSomixwrapTotal}
      somixallTotal={somixallTotal}
      setSomixallTotal={setSomixallTotal}
      boomopprepTotal={boomopprepTotal}
      setBoomopprepTotal={setBoomopprepTotal}
      boomopwrapTotal={boomopwrapTotal}
      setBoomopwrapTotal={setBoomopwrapTotal}
      boomopallTotal={boomopallTotal}
      setBoomopallTotal={setBoomopallTotal}
      cawranprepTotal={cawranprepTotal}
      setCawranprepTotal={setCawranprepTotal}
      cawranwrapTotal={cawranwrapTotal}
      setCawranwrapTotal={setCawranwrapTotal}
      cawranallTotal={cawranallTotal}
      setCawranallTotal={setCawranallTotal}
      otsoundprepTotal={otsoundprepTotal}
      setOtsoundprepTotal={setOtsoundprepTotal}
      otsoundwrapTotal={otsoundwrapTotal}
      setOtsoundwrapTotal={setOtsoundwrapTotal}
      otsoundallTotal={otsoundallTotal}
      setOtsoundallTotal={setOtsoundallTotal}
      /> 
    ) }
    {/* transport */}
    {!showTport ? (
      ""
    ) : (
      <Transport
      postDataTransport={postDataTransport}
      setPostDataTransport={setPostDataTransport}
      tpcoordinatorTotal={tpcoordinatorTotal}
      setTpcoordinatorTotal={setTpcoordinatorTotal}
      tpcaptainTotal={tpcaptainTotal}
      setTpcaptainTotal={setTpcaptainTotal}
      tpmanagerTotal={tpmanagerTotal}
      setTpmanagerTotal={setTpmanagerTotal}
      headdriverTotal={headdriverTotal}
      setHeaddriverTotal={setHeaddriverTotal}
      driversTotal={driversTotal}
      setDriversTotal={setDriversTotal}
      transportlabourTotal={transportlabourTotal}
      setTransportlabourTotal={setTransportlabourTotal}
      setShow={setShowTport}
      tpcoorprepTotal={tpcoorprepTotal}
      setTpcoorprepTotal={setTpcoorprepTotal}
      tpcoorwrapTotal={tpcoorwrapTotal}
      setTpcoorwrapTotal={setTpcoorwrapTotal}
      tpcoorallTotal={tpcoorallTotal}
      setTpcoorallTotal={setTpcoorallTotal}
      tpcapprepTotal={tpcapprepTotal}
      setTpcapprepTotal={setTpcapprepTotal}
      tpcapwrapTotal={tpcapwrapTotal}
      setTpcapwrapTotal={setTpcapwrapTotal}
      tpcapallTotal={tpcapallTotal}
      setTpcapallTotal={setTpcapallTotal}
      tpmanprepTotal={tpmanprepTotal}
      setTpmanprepTotal={setTpmanprepTotal}
      tpmanwrapTotal={tpmanwrapTotal}
      setTpmanwrapTotal={setTpmanwrapTotal}
      tpmanallTotal={tpmanallTotal}
      setTpmanallTotal={setTpmanallTotal}
      headdriprepTotal={headdriprepTotal}
      setHeaddriprepTotal={setHeaddriprepTotal}
      headdriwrapTotal={headdriwrapTotal}
      setHeaddriwrapTotal={setHeaddriwrapTotal}
      headdriallTotal={headdriallTotal}
      setHeaddriallTotal={setHeaddriallTotal}
      driverprepTotal={driverprepTotal}
      setDriverprepTotal={setDriverprepTotal}
      driverwrapTotal={driverwrapTotal}
      setDriverwrapTotal={setDriverwrapTotal}
      driverallTotal={driverallTotal}
      setDriverallTotal={setDriverallTotal}
      /> 
    ) }
    {/* TV */}
    {!showTV ? (
      ""
    ) : (
      <TV
      postDataTV={postDataTV}
      setPostDataTV={setPostDataTV}
      techsuperTotal={techsuperTotal}
      setTechsuperTotal={setTechsuperTotal}
      techdirectTotal={techdirectTotal}
      setTechdirectTotal={setTechdirectTotal}
      floormanTotal={floormanTotal}
      setFloormanTotal={setFloormanTotal}
      lightdirectTotal={lightdirectTotal}
      setLightdirectTotal={setLightdirectTotal}
      boardmanTotal={boardmanTotal}
      setBoardmanTotal={setBoardmanTotal}
      audioTotal={audioTotal}
      setAudioTotal={setAudioTotal}
      vtroperatorTotal={vtroperatorTotal}
      setVtroperatorTotal={setVtroperatorTotal}
      stagehandsTotal={stagehandsTotal}
      setStagehandsTotal={setStagehandsTotal}
      othertvTotal={othertvTotal}
      setOthertvTotal={setOthertvTotal}
      tvspecificlabourTotal={tvspecificlabourTotal}
      setTvspecificlabourTotal={setTvspecificlabourTotal}
      setShow={setShowTV}
      tecsupprepTotal={tecsupprepTotal}
      setTecsupprepTotal={setTecsupprepTotal}
      tecsupwrapTotal={tecsupwrapTotal}
      setTecsupwrapTotal={setTecsupwrapTotal}
      tecsupallTotal={tecsupallTotal}
      setTecsupallTotal={setTecsupallTotal}
      tecdirprepTotal={tecdirprepTotal}
      setTecdirprepTotal={setTecdirprepTotal}
      tecdirwrapTotal={tecdirwrapTotal}
      setTecdirwrapTotal={setTecdirwrapTotal}
      tecdirallTotal={tecdirallTotal}
      setTecdirallTotal={setTecdirallTotal}
      flomanprepTotal={flomanprepTotal}
      setFlomanprepTotal={setFlomanprepTotal}
      flomanwrapTotal={flomanwrapTotal}
      setFlomanwrapTotal={setFlomanwrapTotal}
      flomanallTotal={flomanallTotal}
      setFlomanallTotal={setFlomanallTotal}
      ligdirprepTotal={ligdirprepTotal}
      setLigdirprepTotal={setLigdirprepTotal}
      ligdirwrapTotal={ligdirwrapTotal}
      setLigdirwrapTotal={setLigdirwrapTotal}
      ligdirallTotal={ligdirallTotal}
      setLigdirallTotal={setLigdirallTotal}
      boamanprepTotal={boamanprepTotal}
      setBoamanprepTotal={setBoamanprepTotal}
      boamanwrapTotal={boamanwrapTotal}
      setBoamanwrapTotal={setBoamanwrapTotal}
      boamanallTotal={boamanallTotal}
      setBoamanallTotal={setBoamanallTotal}
      audprepTotal={audprepTotal}
      setAudprepTotal={setAudprepTotal}
      audwrapTotal={audwrapTotal}
      setAudwrapTotal={setAudwrapTotal}
      audallTotal={audallTotal}
      setAudallTotal={setAudallTotal}
      vtropprepTotal={vtropprepTotal}
      setVtropprepTotal={setVtropprepTotal}
      vtropwrapTotal={vtropwrapTotal}
      setVtropwrapTotal={setVtropwrapTotal}
      vtropallTotal={vtropallTotal}
      setVtropallTotal={setVtropallTotal}
      stagehprepTotal={stagehprepTotal}
      setStagehprepTotal={setStagehprepTotal}
      stagehwrapTotal={stagehwrapTotal}
      setStagehwrapTotal={setStagehwrapTotal}
      stagehallTotal={stagehallTotal}
      setStagehallTotal={setStagehallTotal}
      othtvprepTotal={othtvprepTotal}
      setOthtvprepTotal={setOthtvprepTotal}
      othtvwrapTotal={othtvwrapTotal}
      setOthtvwrapTotal={setOthtvwrapTotal}
      othtvallTotal={othtvallTotal}
      setOthtvallTotal={setOthtvallTotal}  
      /> 
    ) }
    {/* below B costs components  */}
    {/* Production Office */}
    {!showProOff ? (
      ""
    ) : (
      <ProductionOffice
      postDataProOff={postDataProOff}
      setPostDataProOff={setPostDataProOff}
      proOffTotal={proOffTotal}
      setProOffTotal={setProOffTotal}
      setShow={setShowProOff}  /> 
    ) }
    {/* Studio */}
    {!showStudio ? (
      ""
    ) : (
      <Studio
      postDataStudio={postDataStudio}
      setPostDataStudio={setPostDataStudio}
      studioTotal={studioTotal}
      setStudioTotal={setStudioTotal}
      setShow={setShowStudio}  /> 
    ) }
    {/* Site */}
    {!showSite ? (
      ""
    ) : (
      <Site
      postDataSite={postDataSite}
      setPostDataSite={setPostDataSite}
      siteTotal={siteTotal}
      setSiteTotal={setSiteTotal}
      setShow={setShowSite}  /> 
    ) }
    {/* Unit */}
    {!showUnit ? (
      ""
    ) : (
      <Unit
      postDataUnit={postDataUnit}
      setPostDataUnit={setPostDataUnit}
      unitTotal={unitTotal}
      setUnitTotal={setUnitTotal}
      setShow={setShowUnit}  /> 
    ) }
    {/* travel and living */}
    {!showTraLiv ? (
      ""
    ) : (
      <TravelLiving
      postDataTraLiv={postDataTraLiv}
      setPostDataTraLiv={setPostDataTraLiv}
      tralivTotal={tralivTotal}
      setTralivTotal={setTralivTotal}
      setShow={setShowTraLiv}  /> 
    ) }
    {/* Transport */}
    {!showTransport ? (
      ""
    ) : (
      <Transportation
      postDataTransportation={postDataTransportation}
      setPostDataTransportation={setPostDataTransportation}
      transportTotal={transportTotal}
      setTransportTotal={setTransportTotal}
      setShow={setShowTransport}  /> 
    ) }
    {/* Construction Material */}
    {!showConMat ? (
      ""
    ) : (
      <ConstructionMat
      postDataConstructionMat={postDataConstructionMat}
      setPostDataConstructionMat={setPostDataConstructionMat}
      constructionMatTotal={constructionMatTotal}
      setConstructionMatTotal={setConstructionMatTotal}
      setShow={setShowConMat}  /> 
    ) }
    {/* Art supplies */}
    {!showArtSup ? (
      ""
    ) : (
      <ArtSupplies
      postDataArtSup={postDataArtSup}
      setPostDataArtSup={setPostDataArtSup}
      artSupTotal={artSupTotal}
      setArtSupTotal={setArtSupTotal}
      setShow={setShowArtSup}  /> 
    ) }
    {/* Set Dressing */}
    {!showDressing ? (
      ""
    ) : (
      <Dressing
      postDataDress={postDataDress}
      setPostDataDress={setPostDataDress}
      dressingTotal={dressingTotal}
      setDressingTotal={setDressingTotal}
      setShow={setShowDressing}  /> 
    ) }
    {/* Props */}
    {!showProp ? (
      ""
    ) : (
      <Props
      postDataProps={postDataProps}
      setPostDataProps={setPostDataProps}
      propsTotal={propsTotal}
      setPropsTotal={setPropsTotal}
      setShow={setShowProp}  /> 
    ) }
    {/* Fx */}
    {!showSpecFx ? (
      ""
    ) : (
      <Fx
      postDataSpecEf={postDataSpecEf}
      setPostDataSpecEf={setPostDataSpecEf}
      fxTotal={fxTotal}
      setFxTotal={setFxTotal}
      setShow={setShowSpecFx}  /> 
    ) }
    {/* Animals */}
    {!showAnim ? (
      ""
    ) : (
      <Animals
      postDataAnimals={postDataAnimals}
      setPostDataAnimals={setPostDataAnimals}
      animalsTotal={animalsTotal}
      setAnimalsTotal={setAnimalsTotal}
      setShow={setShowAnim}  /> 
    ) }
    {/* Wardrobe Sup */}
    {!showWardSup ? (
      ""
    ) : (
      <WardrobeSup
      postDataWardrobeSup={postDataWardrobeSup}
      setPostDataWardrobeSup={setPostDataWardrobeSup}
      wardrobeTotal={wardrobeTotal}
      setWardrobeTotal={setWardrobeTotal}
      setShow={setShowWardSup}  /> 
    ) }
    {/* Makeup Sup */}
    {!showMakeSup ? (
      ""
    ) : (
      <MakeupSup
      postDataMakeupSup={postDataMakeupSup}
      setPostDataMakeupSup={setPostDataMakeupSup}
      makeupTotal={makeupTotal}
      setMakeupTotal={setMakeupTotal}
      setShow={setShowMakeSup}  /> 
    ) }
    {/* Camera Equipment */}
    {!showCamEqu ? (
      ""
    ) : (
      <CameraEqu
      postDataCameraEqu={postDataCameraEqu}
      setPostDataCameraEqu={setPostDataCameraEqu}
      cameraTotal={cameraTotal}
      setCameraTotal={setCameraTotal}
      setShow={setShowCamEqu}  /> 
    ) }
    {/* Electric Equipment */}
    {!showElecEqu ? (
      ""
    ) : (
      <ElectricEqu
      postDataElectricEqu={postDataElectricEqu}
      setPostDataElectricEqu={setPostDataElectricEqu}
      electricTotal={electricTotal}
      setElectricTotal={setElectricTotal}
      setShow={setShowElecEqu}  /> 
    ) }
    {/* Grip Equipment */}
    {!showGripEqu ? (
      ""
    ) : (
      <GripEqu
      postDataGripEqu={postDataGripEqu}
      setPostDataGripEqu={setPostDataGripEqu}
      gripTotal={gripTotal}
      setGripTotal={setGripTotal}
      setShow={setShowGripEqu}  /> 
    ) }
    {/* Sound Equipment */}
    {!showSoundEqu ? (
      ""
    ) : (
      <SoundEqu
      postDataSoundEqu={postDataSoundEqu}
      setPostDataSoundEqu={setPostDataSoundEqu}
      soundTotal={soundTotal}
      setSoundTotal={setSoundTotal}
      setShow={setShowSoundEqu}  /> 
    ) }
    {/*  Second Unit */}
    {!showSecond ? (
      ""
    ) : (
      <SecondU
      postDataSecondU={postDataSecondU}
      setPostDataSecondU={setPostDataSecondU}
      secondUTotal={secondUTotal}
      setSecondUTotal={setSecondUTotal}
      setShow={setShowSecond}  /> 
    ) }
    {/*  Stock Lab */}
    {!showLab ? (
      ""
    ) : (
      <StockLab
      postDataStockLab={postDataStockLab}
      setPostDataStockLab={setPostDataStockLab}
      stockLabTotal={stockLabTotal}
      setStockLabTotal={setStockLabTotal}
      setShow={setShowLab}  /> 
    ) }
    {/* post production "C" components */}
    {/* Staff/Facilities */}
    {!showStaFac ? (
      ""
    ) : (
      <StaffFacilities
      postDataPostStaffFac={postDataPostStaffFac}
      setPostDataPostStaffFac={setPostDataPostStaffFac}
      postSuperTotal={postSuperTotal}
      setPostSuperTotal={setPostSuperTotal}
      postCoordinTotal={postCoordinTotal}
      setPostCoordinTotal={setPostCoordinTotal}
      postAssistTotal={postAssistTotal}
      setPostAssistTotal={setPostAssistTotal}
      postAccountTotal={postAccountTotal}
      setPostAccountTotal={setPostAccountTotal}
      postAccountAssTotal={postAccountAssTotal}
      setPostAccountAssTotal={setPostAccountAssTotal}
      postStaffFacTotal={postStaffFacTotal}
      setPostStaffFacTotal={setPostStaffFacTotal}
      setShow={setShowStaFac}  /> 
    ) }
    {/* Editing */}
    {!showEdit ? (
      ""
    ) : (
      <Editing
      postDataEdit={postDataEdit}
      setPostDataEdit={setPostDataEdit}
      editorTotal={editorTotal}
      setEditorTotal={setEditorTotal}
      editorVfxTotal={editorVfxTotal}
      setEditorVfxTotal={setEditorVfxTotal}
      editorAssTotal={editorAssTotal}
      setEditorAssTotal={setEditorAssTotal}
      graderTotal={graderTotal}
      setGraderTotal={setGraderTotal}
      graphicsTotal={graphicsTotal}
      setGraphicsTotal={setGraphicsTotal}
      editingTotal={editingTotal}
      setEditingTotal={setEditingTotal}
      setShow={setShowEdit}  /> 
    ) }
    {/* Post Sound */}
    {!showPoSoun ? (
      ""
    ) : (
      <Postsound
      postDataPostSound={postDataPostSound}
      setPostDataPostSound={setPostDataPostSound}
      desSoundTotal={desSoundTotal}
      setDesSoundTotal={setDesSoundTotal}
      editorSoundTotal={editorSoundTotal}
      setEditorSoundTotal={setEditorSoundTotal}
      editorMusicTotal={editorMusicTotal}
      setEditorMusicTotal={setEditorMusicTotal}
      soundEdAssTotal={soundEdAssTotal}
      setSoundEdAssTotal={setSoundEdAssTotal}
      adrSupTotal={adrSupTotal}
      setAdrSupTotal={setAdrSupTotal}
      folLabTotal={folLabTotal}
      setFolLabTotal={setFolLabTotal}
      postSoundTotal={postSoundTotal}
      setPostSoundTotal={setPostSoundTotal}
      setShow={setShowPoSoun}  /> 
    ) }
    {/* Post VFX */}
    {!showVfxPo ? (
      ""
    ) : (
      <PostVisualEffects
      postDataPostVFX={postDataPostVFX}
      setPostDataPostVFX={setPostDataPostVFX}
      postVfxTotal={postVfxTotal}
      setPostVfxTotal={setPostVfxTotal}
      setShow={setShowVfxPo}  /> 
    ) }
    {/* Post Lab/Video */}
    {!showPoLab ? (
      ""
    ) : (
      <PostLabVideo
      postDataPostLab={postDataPostLab}
      setPostDataPostLab={setPostDataPostLab}
      postLabTotal={postLabTotal}
      setPostLabTotal={setPostLabTotal}
      setShow={setShowPoLab}  /> 
    ) }
    {/* Post Titles/Opticals */}
    {!showTitle ? (
      ""
    ) : (
      <Titles
      postDataPostTitles={postDataPostTitles}
      setPostDataPostTitles={setPostDataPostTitles}
      postTitlesTotal={postTitlesTotal}
      setPostTitlesTotal={setPostTitlesTotal}
      setShow={setShowTitle}  /> 
    ) }
    {/* Post Versioning */}
    {!showVers ? (
      ""
    ) : (
      <Versioning
      postDataPostVersion={postDataPostVersion}
      setPostDataPostVersion={setPostDataPostVersion}
      postVersionTotal={postVersionTotal}
      setPostVersionTotal={setPostVersionTotal}
      setShow={setShowVers}   /> 
    ) }
    {/* Publicity */}
    {!showPub ? (
      ""
    ) : (
      <Publicity
      postDataPublicity={postDataPublicity}
      setPostDataPublicity={setPostDataPublicity}
      pubTotal={pubTotal}
      setPubTotal={setPubTotal}
      setShow={setShowPub}  /> 
    ) }
    {/* Insurance */}
    {!showInsur ? (
      ""
    ) : (
      <Insurance
      postDataInsurance={postDataInsurance}
      setPostDataInsurance={setPostDataInsurance}
      insurTotal={insurTotal}
      setInsurTotal={setInsurTotal}
      setShow={setShowInsur}  /> 
    ) }
    {/* General Expenses */}
    {!showGenex ? (
      ""
    ) : (
      <GeneralEx
      postDataGeneralEx={postDataGeneralEx}
      setPostDataGeneralEx={setPostDataGeneralEx}
      genExTotal={genExTotal}
      setGenExTotal={setGenExTotal}
      setShow={setShowGenex}  /> 
    ) }
    {/* Indirect Costs */}
    {!showIndir ? (
      ""
    ) : (
      <IndirectCosts
      postDataIndirectCo={postDataIndirectCo}
      setPostDataIndirectCo={setPostDataIndirectCo}
      indirCoTotal={indirCoTotal}
      setIndirCoTotal={setIndirCoTotal}
      setShow={setShowIndir}  /> 
    ) }
    {/* buttons */}
    <Row>
    <Col>
      <div className= {`mt-1`} >{buttons} </div>
    </Col>
    </Row>
    </Form>
    </Col>
    </Row>
    </div>
  );
}

export default BudgetEdit