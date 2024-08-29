/* Component in the Budget component to edit Production Staff */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const ProductionStaff = (props) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {postDataProduction, setPostDataProduction, setShow,
         productionmanagerTotal, setProductionmanagerTotal,
         productionsupervisorTotal, setProductionsupervisorTotal,
         productioncoordinatorTotal, setProductioncoordinatorTotal,
         unitmanagerTotal, setUnitmanagerTotal,
         locationmanagerTotal, setLocationmanagerTotal,
         locationmanagerassistantTotal, setLocationmanagerassistantTotal,
         productionassistantsTotal, setProductionassistantsTotal,
         productionsecretaryTotal, setProductionsecretaryTotal,
         productionaccountantTotal, setProductionaccountantTotal,
         productionaccountantassistantTotal, setProductionaccountantassistantTotal,
         scriptsupervisorcontinuityTotal, setScriptsupervisorcontinuityTotal,
         payrollTotal, setPayrollTotal,
         otherproductionTotal, setOtherproductionTotal,
         directorsassistantTotal, setDirectorsassistantTotal,
         assistantdirector1stTotal, setAssistantdirector1stTotal,
         assistantdirector2ndTotal, setAssistantdirector2ndTotal,
         assistantdirector3rdTotal, setAssistantdirector3rdTotal,
         craftservicesTotal, setCraftservicesTotal,
         productionstaffTotal, setProductionstaffTotal,
         // new
         productionmanagerprepTotal, setProductionmanagerprepTotal,
         productionmanagerwrapTotal, setProductionmanagerwrapTotal,
         productionmanagerallTotal, setProductionmanagerallTotal,
         productionsupervisorprepTotal, setProductionsupervisorprepTotal,
         productionsupervisorwrapTotal, setProductionsupervisorwrapTotal,
         productionsupervisorallTotal, setProductionsupervisorallTotal,
         productioncoordinatorprepTotal, setProductioncoordinatorprepTotal,
         productioncoordinatorwrapTotal, setProductioncoordinatorwrapTotal,
         productioncoordinatorallTotal, setProductioncoordinatorallTotal,
         unitmanagerprepTotal, setUnitmanagerprepTotal,
         unitmanagerwrapTotal, setUnitmanagerwrapTotal,
         unitmanagerallTotal, setUnitmanagerallTotal,
         locationmanagerwrapTotal, setLocationmanagerwrapTotal,
         locationmanagerprepTotal, setLocationmanagerprepTotal,
         locationmanagerallTotal, setLocationmanagerallTotal,
         locmanassprepTotal, setLocmanassprepTotal,
         locmanasswrapTotal, setLocmanasswrapTotal,
         locmanassallTotal, setLocmanassallTotal,
         proassprepTotal, setProassprepTotal,
         proasswrapTotal, setProasswrapTotal,
         proassallTotal, setProassallTotal,
         prosecprepTotal, setProsecprepTotal,
         prosecwrapTotal, setProsecwrapTotal,
         prosecallTotal, setProsecallTotal,
         proaccprepTotal, setProaccprepTotal,
         proaccwrapTotal, setProaccwrapTotal,
         proaccallTotal, setProaccallTotal,
         proaccassprepTotal, setProaccassprepTotal,
         proaccasswrapTotal, setProaccasswrapTotal,
         proaccassallTotal, setProaccassallTotal,
         scriptsupconprepTotal, setScriptsupconprepTotal,
         scriptsupconwrapTotal, setScriptsupconwrapTotal,
         scriptsupconallTotal, setScriptsupconallTotal,
         payrollprepTotal, setPayrollprepTotal,
         payrollwrapTotal, setPayrollwrapTotal,
         payrollallTotal, setPayrollallTotal,
         otherproprepTotal, setOtherproprepTotal,
         otherprowrapTotal, setOtherprowrapTotal,
         otherproallTotal, setOtherproallTotal,
         directorsassprepTotal, setDirectorsassprepTotal,
         directorsasswrapTotal, setDirectorsasswrapTotal,
         directorsassallTotal, setDirectorsassallTotal,
         assdirector1stprepTotal, setAssdirector1stprepTotal,
         assdirector1stwrapTotal, setAssdirector1stwrapTotal,
         assdirector1stallTotal, setAssdirector1stallTotal,
         assdirector2ndprepTotal, setAssdirector2ndprepTotal,
         assdirector2ndwrapTotal, setAssdirector2ndwrapTotal,
         assdirector2ndallTotal, setAssdirector2ndallTotal,
         assdirector3rdprepTotal, setAssdirector3rdprepTotal,
         assdirector3rdwrapTotal, setAssdirector3rdwrapTotal,
         assdirector3rdallTotal, setAssdirector3rdallTotal,
         craftservicesprepTotal, setCraftservicesprepTotal,
         craftserviceswrapTotal, setCraftserviceswrapTotal,
         craftservicesallTotal, setCraftservicesallTotal,
      

         
        } = props;
  
  // Production postData values
  const {
    // new
    holidays_pro_sta, 
    overtime_pro_sta, 
    days6th7th_pro_sta, 
    other_pro_sta,
    box_rent_pro_sta,
    holidays_unit_pro_sta, 
    overtime_unit_pro_sta, 
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

  // handleChange
  const handleChangePro = (event) => {
    setPostDataProduction({
    ...postDataProduction,
    [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
    });
  };

  // Production handleChange Text 
  const handleChangeProText = (event) => {
    setPostDataProduction({
      ...postDataProduction,
      [event.target.name]: event.target.value,
    });
  };

  // Calculate Functions

  // production manager
  // function to calculate production manager shoot on change
  useEffect(() => {
    const addproman = () => {
      setProductionmanagerTotal((parseFloat(production_manager_quantity || 0) * 
      parseFloat(production_manager_units_number || 0) * 
      parseFloat(production_manager_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addproman();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_manager_quantity, production_manager_units_number, 
    production_manager_rate]);
  
  // function to calculate production manager prep on change
  useEffect(() => {
    const addpromanprep = () => {
      setProductionmanagerprepTotal((parseFloat(production_manager_qty_prep || 0) * 
      parseFloat(production_manager_uno_prep || 0) * 
      parseFloat(production_manager_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addpromanprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_manager_qty_prep, production_manager_uno_prep,
  production_manager_rt_prep,]);

  // function to calculate production manager wrap on change
  useEffect(() => {
    const addpromanwrap = () => {
      setProductionmanagerwrapTotal((parseFloat(production_manager_qty_wrap || 0) * 
      parseFloat(production_manager_uno_wrap || 0) * 
      parseFloat(production_manager_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addpromanwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_manager_qty_wrap, production_manager_uno_wrap,
  production_manager_rt_wrap,]);

  // function to add all production manager on change 
  useEffect(() => {
    const addProMan = () => {
      setProductionmanagerallTotal(
      parseFloat(productionmanagerTotal || 0) +
      parseFloat(productionmanagerprepTotal || 0) +
      parseFloat(productionmanagerwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addProMan();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [productionmanagerTotal, productionmanagerprepTotal,
    productionmanagerwrapTotal,]);

  // production supervisor
  // function to calculate production supervisor shoot on change
  useEffect(() => {
    const addprosup = () => {
      setProductionsupervisorTotal((parseFloat(production_supervisor_quantity || 0) * 
      parseFloat(production_supervisor_units_number || 0) * 
      parseFloat(production_supervisor_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addprosup();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_supervisor_quantity, production_supervisor_units_number, 
  production_supervisor_rate]);

  // function to calculate production supervisor prep on change
  useEffect(() => {
    const addprosupprep = () => {
      setProductionsupervisorprepTotal((parseFloat(production_supervisor_qty_prep || 0) * 
      parseFloat(production_supervisor_uno_prep || 0) * 
      parseFloat(production_supervisor_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addprosupprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_supervisor_qty_prep, production_supervisor_uno_prep,
  production_supervisor_rt_prep]);

  // function to calculate production supervisor wrap on change
  useEffect(() => {
    const addprosupwrap = () => {
      setProductionsupervisorwrapTotal((parseFloat(production_supervisor_qty_wrap || 0) * 
      parseFloat(production_supervisor_uno_wrap || 0) * 
      parseFloat(production_supervisor_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addprosupwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_supervisor_qty_wrap, production_supervisor_uno_wrap,
  production_supervisor_rt_wrap]);

  // function to add all production supervisor on change 
  useEffect(() => {
    const addProSup = () => {
      setProductionsupervisorallTotal(
      parseFloat(productionsupervisorTotal || 0) +
      parseFloat(productionsupervisorprepTotal || 0) +
      parseFloat(productionsupervisorwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addProSup();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [productionsupervisorTotal, productionsupervisorprepTotal,
    productionsupervisorwrapTotal]);

  // production coordinator
  // function to calculate production coordinator shoot on change
  useEffect(() => {
    const addprocoor = () => {
      setProductioncoordinatorTotal((parseFloat(production_coordinator_quantity || 0) * 
      parseFloat(production_coordinator_units_number || 0) * 
      parseFloat(production_coordinator_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addprocoor();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_coordinator_quantity, production_coordinator_units_number, 
  production_coordinator_rate]);

  // function to calculate production coordinator prep on change
  useEffect(() => {
    const addprocoorprep = () => {
      setProductioncoordinatorprepTotal((parseFloat(production_coordinator_qty_prep || 0) * 
      parseFloat(production_coordinator_uno_prep || 0) * 
      parseFloat(production_coordinator_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addprocoorprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_coordinator_qty_prep, production_coordinator_uno_prep,
  production_coordinator_rt_prep]);

  // function to calculate production coordinator wrap on change
  useEffect(() => {
    const addprocoorwrap = () => {
      setProductioncoordinatorwrapTotal((parseFloat(production_coordinator_qty_wrap || 0) * 
      parseFloat(production_coordinator_uno_wrap || 0) * 
      parseFloat(production_coordinator_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addprocoorwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_coordinator_qty_wrap, production_coordinator_uno_wrap,
  production_coordinator_rt_wrap]);

  // function to add all production coordinator on change 
  useEffect(() => {
    const addProCoo = () => {
      setProductioncoordinatorallTotal(
      parseFloat(productioncoordinatorTotal || 0) +
      parseFloat(productioncoordinatorprepTotal || 0) +
      parseFloat(productioncoordinatorwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addProCoo();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [productioncoordinatorTotal, productioncoordinatorprepTotal,
    productioncoordinatorwrapTotal]);

  // unit manager
  // function to calculate unit manager shoot on change
  useEffect(() => {
    const addunitman = () => {
      setUnitmanagerTotal((parseFloat(unit_manager_quantity || 0) * 
      parseFloat(unit_manager_units_number || 0) * 
      parseFloat(unit_manager_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addunitman();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [unit_manager_quantity, unit_manager_units_number, 
  unit_manager_rate]);

  // function to calculate unit manager prep on change
  useEffect(() => {
    const addunitmanprep = () => {
      setUnitmanagerprepTotal((parseFloat(unit_manager_qty_prep || 0) * 
      parseFloat(unit_manager_uno_prep || 0) * 
      parseFloat(unit_manager_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addunitmanprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [unit_manager_qty_prep, unit_manager_uno_prep, unit_manager_rt_prep]);

  // function to calculate unit manager wrap on change
  useEffect(() => {
    const addunitmanwrap = () => {
      setUnitmanagerwrapTotal((parseFloat(unit_manager_qty_wrap || 0) * 
      parseFloat(unit_manager_uno_wrap || 0) * 
      parseFloat(unit_manager_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addunitmanwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [unit_manager_qty_wrap, unit_manager_uno_wrap, unit_manager_rt_wrap]);

  // function to add all unit manager on change 
  useEffect(() => {
    const addUniMan = () => {
      setUnitmanagerallTotal(
      parseFloat(unitmanagerTotal || 0) +
      parseFloat(unitmanagerprepTotal || 0) +
      parseFloat(unitmanagerwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addUniMan();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [unitmanagerTotal, unitmanagerprepTotal, unitmanagerwrapTotal]);
  
  // location manager
  // function to calculate location manager shoot on change
  useEffect(() => {
    const addlocman = () => {
      setLocationmanagerTotal((parseFloat(location_manager_quantity || 0) * 
      parseFloat(location_manager_units_number || 0) * 
      parseFloat(location_manager_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addlocman();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [location_manager_quantity, location_manager_units_number, 
  location_manager_rate]);

  // function to calculate location manager prep on change
  useEffect(() => {
    const addlocmanprep = () => {
      setLocationmanagerprepTotal((parseFloat(location_manager_qty_prep || 0) * 
      parseFloat(location_manager_uno_prep || 0) * 
      parseFloat(location_manager_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addlocmanprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [location_manager_qty_prep, location_manager_uno_prep, 
  location_manager_rt_prep]);

  // function to calculate location manager wrap on change
  useEffect(() => {
    const addlocmanwrap = () => {
      setLocationmanagerwrapTotal((parseFloat(location_manager_qty_wrap || 0) * 
      parseFloat(location_manager_uno_wrap || 0) * 
      parseFloat(location_manager_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addlocmanwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [location_manager_qty_wrap, location_manager_uno_wrap,
  location_manager_rt_wrap]);

  // function to add all location manager on change 
  useEffect(() => {
    const addLocMan = () => {
      setLocationmanagerallTotal(
      parseFloat(locationmanagerTotal || 0) +
      parseFloat(locationmanagerprepTotal || 0) +
      parseFloat(locationmanagerwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addLocMan();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [locationmanagerTotal, locationmanagerprepTotal,
    locationmanagerwrapTotal,]);
  
  // location manager assistant
  // function to calculate location manager assistant shoot on change
  useEffect(() => {
    const addlocmanass = () => {
      setLocationmanagerassistantTotal((parseFloat(location_manager_assistant_quantity || 0) * 
      parseFloat(location_manager_assistant_units_number || 0) * 
      parseFloat(location_manager_assistant_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addlocmanass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [location_manager_assistant_quantity, location_manager_assistant_units_number, 
  location_manager_assistant_rate]);

  // function to calculate location manager assistant prep on change
  useEffect(() => {
    const addlocmanassprep = () => {
      setLocmanassprepTotal((parseFloat(location_manager_ass_qty_prep || 0) * 
      parseFloat(location_manager_ass_uno_prep || 0) * 
      parseFloat(location_manager_ass_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addlocmanassprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [location_manager_ass_qty_prep, location_manager_ass_uno_prep,
  location_manager_ass_rt_prep]);

  // function to calculate location manager assistant wrap on change
  useEffect(() => {
    const addlocmanasswrap = () => {
      setLocmanasswrapTotal((parseFloat(location_manager_ass_qty_wrap || 0) * 
      parseFloat(location_manager_ass_uno_wrap || 0) * 
      parseFloat(location_manager_ass_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addlocmanasswrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [location_manager_ass_qty_wrap, location_manager_ass_uno_wrap,
  location_manager_ass_rt_wrap]);

  // function to add all location manager assistant on change 
  useEffect(() => {
    const addLocManAss = () => {
      setLocmanassallTotal(
      parseFloat(locationmanagerassistantTotal || 0) +
      parseFloat(locmanassprepTotal || 0) +
      parseFloat(locmanasswrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addLocManAss();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [locationmanagerassistantTotal, locmanassprepTotal,
    locmanasswrapTotal]);
  
  // production assistants 
  // function to calculate production assistants shoot on change
  useEffect(() => {
    const addproass = () => {
      setProductionassistantsTotal((parseFloat(production_assistants_quantity || 0) * 
      parseFloat(production_assistants_units_number || 0) * 
      parseFloat(production_assistants_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addproass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_assistants_quantity, production_assistants_units_number, 
  production_assistants_rate]);

  // function to calculate production assistants prep on change
  useEffect(() => {
    const addproassprep = () => {
      setProassprepTotal((parseFloat(production_ass_qty_prep || 0) * 
      parseFloat(production_ass_uno_prep || 0) * 
      parseFloat(production_ass_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addproassprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_ass_qty_prep, production_ass_uno_prep, production_ass_rt_prep]);

  // function to calculate production assistants wrap on change
  useEffect(() => {
    const addproasswrap = () => {
      setProasswrapTotal((parseFloat(production_ass_qty_wrap || 0) * 
      parseFloat(production_ass_uno_wrap || 0) * 
      parseFloat(production_ass_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addproasswrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_ass_qty_wrap, production_ass_uno_wrap,
  production_ass_rt_wrap]);

  // function to add all production assistants on change 
  useEffect(() => {
    const addProAss = () => {
      setProassallTotal(
      parseFloat(productionassistantsTotal || 0) +
      parseFloat(proassprepTotal || 0) +
      parseFloat(proasswrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addProAss();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [productionassistantsTotal, proassprepTotal,
    proasswrapTotal]);

  // production secretary
  // function to calculate production secretary shoot on change
  useEffect(() => {
    const addprosec = () => {
      setProductionsecretaryTotal((parseFloat(production_secretary_quantity || 0) * 
      parseFloat(production_secretary_units_number || 0) * 
      parseFloat(production_secretary_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addprosec();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_secretary_quantity, production_secretary_units_number, 
  production_secretary_rate]);

  // function to calculate production secretary prep on change
  useEffect(() => {
    const addprosecprep = () => {
      setProsecprepTotal((parseFloat(production_sec_qty_prep || 0) * 
      parseFloat(production_sec_uno_prep || 0) * 
      parseFloat(production_sec_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addprosecprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_sec_qty_prep, production_sec_uno_prep,
  production_sec_rt_prep]);

  // function to calculate production secretary wrap on change
  useEffect(() => {
    const addprosecwrap = () => {
      setProsecwrapTotal((parseFloat(production_sec_qty_wrap || 0) * 
      parseFloat(production_sec_uno_wrap || 0) * 
      parseFloat(production_sec_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addprosecwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_sec_qty_wrap, production_sec_uno_wrap,
  production_sec_rt_wrap]);

  // function to add all production secretary on change 
  useEffect(() => {
    const addProSec = () => {
      setProsecallTotal(
      parseFloat(productionsecretaryTotal || 0) +
      parseFloat(prosecprepTotal || 0) +
      parseFloat(prosecwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addProSec();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [productionsecretaryTotal, prosecprepTotal,
    prosecwrapTotal]);

  // production accountant
  // function to calculate production accountant shoot on change
  useEffect(() => {
    const addproacc = () => {
      setProductionaccountantTotal((parseFloat(production_accountant_quantity || 0) * 
      parseFloat(production_accountant_units_number || 0) * 
      parseFloat(production_accountant_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addproacc();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_accountant_quantity, production_accountant_units_number, 
  production_accountant_rate]);

  // function to calculate production accountant prep on change
  useEffect(() => {
    const addproaccprep = () => {
      setProaccprepTotal((parseFloat(production_acc_qty_prep || 0) * 
      parseFloat(production_acc_uno_prep || 0) * 
      parseFloat(production_acc_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addproaccprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_acc_qty_prep, production_acc_uno_prep,
  production_acc_rt_prep]);

  // function to calculate production accountant wrap on change
  useEffect(() => {
    const addproaccwrap = () => {
      setProaccwrapTotal((parseFloat(production_acc_qty_wrap || 0) * 
      parseFloat(production_acc_uno_wrap || 0) * 
      parseFloat(production_acc_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addproaccwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_acc_qty_wrap, production_acc_uno_wrap,
  production_acc_rt_wrap]);

  // function to add all production accountant on change 
  useEffect(() => {
    const addProAcc = () => {
      setProaccallTotal(
      parseFloat(productionaccountantTotal || 0) +
      parseFloat(proaccprepTotal || 0) +
      parseFloat(proaccwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addProAcc();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [productionaccountantTotal, proaccprepTotal,
    proaccwrapTotal]);
  
  // production accountant assistant
  // function to calculate production accountant assistant shoot on change
  useEffect(() => {
    const addaccass = () => {
      setProductionaccountantassistantTotal((parseFloat(production_accountant_assistant_quantity || 0) * 
      parseFloat(production_accountant_assistant_units_number || 0) * 
      parseFloat(production_accountant_assistant_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addaccass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_accountant_assistant_quantity, production_accountant_assistant_units_number, 
  production_accountant_assistant_rate]);

  // function to calculate production accountant assistant prep on change
  useEffect(() => {
    const addaccassprep = () => {
      setProaccassprepTotal((parseFloat(production_acc_ass_qty_prep || 0) * 
      parseFloat(production_acc_ass_uno_prep || 0) * 
      parseFloat(production_acc_ass_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addaccassprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_acc_ass_qty_prep, production_acc_ass_uno_prep,
  production_acc_ass_rt_prep]);

  // function to calculate production accountant assistant wrap on change
  useEffect(() => {
    const addaccasswrap = () => {
      setProaccasswrapTotal((parseFloat(production_acc_ass_qty_wrap || 0) * 
      parseFloat(production_acc_ass_uno_wrap || 0) * 
      parseFloat(production_acc_ass_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addaccasswrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [production_acc_ass_qty_wrap, production_acc_ass_uno_wrap,
  production_acc_ass_rt_wrap]);

  // function to add all production accountant assistant on change 
  useEffect(() => {
    const addProAccAss = () => {
      setProaccassallTotal(
      parseFloat(productionaccountantassistantTotal || 0) +
      parseFloat(proaccassprepTotal || 0) +
      parseFloat(proaccasswrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addProAccAss();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [productionaccountantassistantTotal, proaccassprepTotal,
    proaccasswrapTotal]);

  // scriptsupervisor continuity
  // function to calculate scriptsupervisor continuity shoot on change
  useEffect(() => {
    const addsupcon = () => {
      setScriptsupervisorcontinuityTotal((parseFloat(scriptsupervisor_continuity_quantity || 0) * 
      parseFloat(scriptsupervisor_continuity_units_number || 0) * 
      parseFloat(scriptsupervisor_continuity_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addsupcon();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [scriptsupervisor_continuity_quantity, scriptsupervisor_continuity_units_number, 
  scriptsupervisor_continuity_rate]);

  // function to calculate scriptsupervisor continuity prep on change
  useEffect(() => {
    const addsupconprep = () => {
      setScriptsupconprepTotal((parseFloat(scriptsupervisor_con_qty_prep || 0) * 
      parseFloat(scriptsupervisor_con_uno_prep || 0) * 
      parseFloat(scriptsupervisor_con_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addsupconprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [scriptsupervisor_con_qty_prep, scriptsupervisor_con_uno_prep,
  scriptsupervisor_con_rt_prep]);

  // function to calculate scriptsupervisor continuity wrap on change
  useEffect(() => {
    const addsupconwrap = () => {
      setScriptsupconwrapTotal((parseFloat(scriptsupervisor_con_qty_wrap || 0) * 
      parseFloat(scriptsupervisor_con_uno_wrap || 0) * 
      parseFloat(scriptsupervisor_con_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addsupconwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [scriptsupervisor_con_qty_wrap, scriptsupervisor_con_uno_wrap,
  scriptsupervisor_con_rt_wrap]);

  // function to add all scriptsupervisor continuity on change 
  useEffect(() => {
    const addScrCon = () => {
      setScriptsupconallTotal(
      parseFloat(scriptsupervisorcontinuityTotal || 0) +
      parseFloat(scriptsupconprepTotal || 0) +
      parseFloat(scriptsupconwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addScrCon();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [scriptsupervisorcontinuityTotal, scriptsupconprepTotal,
    scriptsupconwrapTotal]);
  
  // payroll
  // function to calculate payroll shoot on change
  useEffect(() => {
    const addpayrol = () => {
      setPayrollTotal((parseFloat(payroll_quantity || 0) * 
      parseFloat(payroll_units_number || 0) * 
      parseFloat(payroll_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addpayrol();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [payroll_quantity, payroll_units_number, 
  payroll_rate]);

  // function to calculate payroll prep on change
  useEffect(() => {
    const addpayrolprep = () => {
      setPayrollprepTotal((parseFloat(payroll_qty_prep || 0) * 
      parseFloat(payroll_uno_prep || 0) * 
      parseFloat(payroll_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addpayrolprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [payroll_qty_prep, payroll_uno_prep, payroll_rt_prep]);

  // function to calculate payroll wrap on change
  useEffect(() => {
    const addpayrolwrap = () => {
      setPayrollwrapTotal((parseFloat(payroll_qty_wrap || 0) * 
      parseFloat(payroll_uno_wrap || 0) * 
      parseFloat(payroll_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addpayrolwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [payroll_qty_wrap, payroll_uno_wrap, payroll_rt_wrap]);

  // function to add all payroll on change 
  useEffect(() => {
    const addPayRol = () => {
      setPayrollallTotal(
      parseFloat(payrollTotal || 0) +
      parseFloat(payrollprepTotal || 0) +
      parseFloat(payrollwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addPayRol();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [payrollTotal, payrollprepTotal, payrollwrapTotal]);

  // other production
  // function to calculate other production shoot on change
  useEffect(() => {
    const addothpro = () => {
      setOtherproductionTotal((parseFloat(other_production_quantity || 0) * 
      parseFloat(other_production_units_number || 0) * 
      parseFloat(other_production_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addothpro();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [other_production_quantity, other_production_units_number, 
  other_production_rate]);

  // function to calculate other production prep on change
  useEffect(() => {
    const addothproprep = () => {
      setOtherproprepTotal((parseFloat(other_pro_qty_prep || 0) * 
      parseFloat(other_pro_uno_prep || 0) * 
      parseFloat(other_pro_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addothproprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [other_pro_qty_prep, other_pro_uno_prep, other_pro_rt_prep]);

  // function to calculate other production wrap on change
  useEffect(() => {
    const addothprowrap = () => {
      setOtherprowrapTotal((parseFloat(other_pro_qty_wrap || 0) * 
      parseFloat(other_pro_uno_wrap || 0) * 
      parseFloat(other_pro_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addothprowrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [other_pro_qty_wrap, other_pro_uno_wrap, other_pro_rt_wrap]);

  // function to add all other production on change 
  useEffect(() => {
    const addOthPro = () => {
      setOtherproallTotal(
      parseFloat(otherproductionTotal || 0) +
      parseFloat(otherproprepTotal || 0) +
      parseFloat(otherprowrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addOthPro();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [otherproductionTotal, otherproprepTotal, otherprowrapTotal]);

  // directors assistant
  // function to calculate directors assistant shoot on change
  useEffect(() => {
    const adddirass = () => {
      setDirectorsassistantTotal((parseFloat(directors_assistant_quantity || 0) * 
      parseFloat(directors_assistant_units_number || 0) * 
      parseFloat(directors_assistant_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      adddirass();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [directors_assistant_quantity, directors_assistant_units_number, 
  directors_assistant_rate]);

  // function to calculate directors assistant prep on change
  useEffect(() => {
    const adddirassprep = () => {
      setDirectorsassprepTotal((parseFloat(directors_ass_qty_prep || 0) * 
      parseFloat(directors_ass_uno_prep || 0) * 
      parseFloat(directors_ass_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      adddirassprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [directors_ass_qty_prep, directors_ass_uno_prep, directors_ass_rt_prep]);

  // function to calculate directors assistant wrap on change
  useEffect(() => {
    const adddirasswrap = () => {
      setDirectorsasswrapTotal((parseFloat(directors_ass_qty_wrap || 0) * 
      parseFloat(directors_ass_uno_wrap || 0) * 
      parseFloat(directors_ass_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      adddirasswrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [directors_ass_qty_wrap, directors_ass_uno_wrap,
  directors_ass_rt_wrap]);

  // function to add all directors assistant on change 
  useEffect(() => {
    const addDirAss = () => {
      setDirectorsassallTotal(
      parseFloat(directorsassistantTotal || 0) +
      parseFloat(directorsassprepTotal || 0) +
      parseFloat(directorsasswrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addDirAss();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [directorsassistantTotal, directorsassprepTotal,
    directorsasswrapTotal]);

  // 1st assistant director
  // function to calculate 1st assistant director shoot on change
  useEffect(() => {
    const addasdir1 = () => {
      setAssistantdirector1stTotal((parseFloat(assistant_director_1st_quantity || 0) * 
      parseFloat(assistant_director_1st_units_number || 0) * 
      parseFloat(assistant_director_1st_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addasdir1();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [assistant_director_1st_quantity, assistant_director_1st_units_number, 
  assistant_director_1st_rate]);

  // function to calculate 1st assistant director prep on change
  useEffect(() => {
    const addasdir1prep = () => {
      setAssdirector1stprepTotal((parseFloat(ass_director_1st_qty_prep || 0) * 
      parseFloat(ass_director_1st_uno_prep || 0) * 
      parseFloat(ass_director_1st_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addasdir1prep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [ass_director_1st_qty_prep, ass_director_1st_uno_prep,
  ass_director_1st_rt_prep]);

  // function to calculate 1st assistant director wrap on change
  useEffect(() => {
    const addasdir1wrap = () => {
      setAssdirector1stwrapTotal((parseFloat(ass_director_1st_qty_wrap || 0) * 
      parseFloat(ass_director_1st_uno_wrap || 0) * 
      parseFloat(ass_director_1st_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addasdir1wrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [ass_director_1st_qty_wrap, ass_director_1st_uno_wrap,
  ass_director_1st_rt_wrap]);

  // function to add all 1st assistant director on change 
  useEffect(() => {
    const addDirAss1 = () => {
      setAssdirector1stallTotal(
      parseFloat(assistantdirector1stTotal || 0) +
      parseFloat(assdirector1stprepTotal || 0) +
      parseFloat(assdirector1stwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addDirAss1();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [assistantdirector1stTotal, assdirector1stprepTotal,
    assdirector1stwrapTotal]);

  // 2nd assistant director
  // function to calculate 2nd assistant director shoot on change
  useEffect(() => {
    const addasdir2 = () => {
      setAssistantdirector2ndTotal((parseFloat(assistant_director_2nd_quantity || 0) * 
      parseFloat(assistant_director_2nd_units_number || 0) * 
      parseFloat(assistant_director_2nd_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addasdir2();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [assistant_director_2nd_quantity, assistant_director_2nd_units_number, 
  assistant_director_2nd_rate]);

  // function to calculate 2nd assistant director prep on change
  useEffect(() => {
    const addasdir2prep = () => {
      setAssdirector2ndprepTotal((parseFloat(ass_director_2nd_qty_prep || 0) * 
      parseFloat(ass_director_2nd_uno_prep || 0) * 
      parseFloat(ass_director_2nd_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addasdir2prep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [ass_director_2nd_qty_prep, ass_director_2nd_uno_prep,
  ass_director_2nd_rt_prep]);

  // function to calculate 2nd assistant director wrap on change
  useEffect(() => {
    const addasdir2wrap = () => {
      setAssdirector2ndwrapTotal((parseFloat(ass_director_2nd_qty_wrap || 0) * 
      parseFloat(ass_director_2nd_uno_wrap || 0) * 
      parseFloat(ass_director_2nd_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addasdir2wrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [ass_director_2nd_qty_wrap, ass_director_2nd_uno_wrap,
  ass_director_2nd_rt_wrap]);

  // function to add all 2nd assistant director on change 
  useEffect(() => {
    const addDirAss2 = () => {
      setAssdirector2ndallTotal(
      parseFloat(assistantdirector2ndTotal || 0) +
      parseFloat(assdirector2ndprepTotal || 0) +
      parseFloat(assdirector2ndwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addDirAss2();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [assistantdirector2ndTotal, assdirector2ndprepTotal,
    assdirector2ndwrapTotal]);

  // 3rd assistant director 
  // function to calculate 3rd assistant director shoot on change
  useEffect(() => {
    const addasdir3 = () => {
      setAssistantdirector3rdTotal((parseFloat(assistant_director_3rd_quantity || 0) * 
      parseFloat(assistant_director_3rd_units_number || 0) * 
      parseFloat(assistant_director_3rd_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addasdir3();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [assistant_director_3rd_quantity, assistant_director_3rd_units_number, 
    assistant_director_3rd_rate]);

  // function to calculate 3rd assistant director prep on change
  useEffect(() => {
    const addasdir3prep = () => {
      setAssdirector3rdprepTotal((parseFloat(ass_director_3rd_qty_prep || 0) * 
      parseFloat(ass_director_3rd_uno_prep || 0) * 
      parseFloat(ass_director_3rd_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addasdir3prep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [ass_director_3rd_qty_prep, ass_director_3rd_uno_prep,
  ass_director_3rd_rt_prep]);

  // function to calculate 3rd assistant director wrap on change
  useEffect(() => {
    const addasdir3wrap = () => {
      setAssdirector3rdwrapTotal((parseFloat(ass_director_3rd_qty_wrap || 0) * 
      parseFloat(ass_director_3rd_uno_wrap || 0) * 
      parseFloat(ass_director_3rd_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addasdir3wrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [ass_director_3rd_qty_wrap, ass_director_3rd_uno_wrap,
  ass_director_3rd_rt_wrap]);

  // function to add all 3rd assistant director on change 
  useEffect(() => {
    const addDirAss3 = () => {
      setAssdirector3rdallTotal(
      parseFloat(assistantdirector3rdTotal || 0) +
      parseFloat(assdirector3rdprepTotal || 0) +
      parseFloat(assdirector3rdwrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addDirAss3();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [assistantdirector3rdTotal, assdirector3rdprepTotal,
    assdirector3rdwrapTotal]);

  // craft services
  // function to calculate craft services shoot on change
  useEffect(() => {
    const addcraser = () => {
      setCraftservicesTotal((parseFloat(craft_services_quantity || 0) * 
      parseFloat(craft_services_units_number || 0) * 
      parseFloat(craft_services_rate || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addcraser();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [craft_services_quantity, craft_services_units_number, 
  craft_services_rate]);

  // function to calculate craft services prep on change
  useEffect(() => {
    const addcraserprep = () => {
      setCraftservicesprepTotal((parseFloat(craft_services_qty_prep || 0) * 
      parseFloat(craft_services_uno_prep || 0) * 
      parseFloat(craft_services_rt_prep || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addcraserprep();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [craft_services_qty_prep, craft_services_uno_prep,
  craft_services_rt_prep]);

  // function to calculate craft services wrap on change
  useEffect(() => {
    const addcraserwrap = () => {
      setCraftserviceswrapTotal((parseFloat(craft_services_qty_wrap || 0) * 
      parseFloat(craft_services_uno_wrap || 0) * 
      parseFloat(craft_services_rt_wrap || 0)).toFixed())
    }
    const timer = setTimeout(() => {
      addcraserwrap();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [craft_services_qty_wrap, craft_services_uno_wrap,
  craft_services_rt_wrap]);

  // function to add all craft services on change 
  useEffect(() => {
    const addCraSer = () => {
      setCraftservicesallTotal(
      parseFloat(craftservicesTotal || 0) +
      parseFloat(craftservicesprepTotal || 0) +
      parseFloat(craftserviceswrapTotal || 0) 
      )
    }
    const timer = setTimeout(() => {
      addCraSer();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [craftservicesTotal, craftservicesprepTotal,
    craftserviceswrapTotal]);

  // function to add all production on change
  useEffect(() => {
    const addPro = () => {
      setProductionstaffTotal(
      parseFloat(productionmanagerallTotal || 0) +
      parseFloat(productionsupervisorallTotal || 0) +
      parseFloat(productioncoordinatorallTotal || 0) +
      parseFloat(unitmanagerallTotal || 0) +
      parseFloat(locationmanagerallTotal || 0) +
      parseFloat(locmanassallTotal || 0) +
      parseFloat(proassallTotal || 0) +
      parseFloat(prosecallTotal || 0) +
      parseFloat(proaccallTotal || 0) +
      parseFloat(proaccassallTotal || 0) +
      parseFloat(scriptsupconallTotal || 0) +
      parseFloat(payrollallTotal || 0) +
      parseFloat(otherproallTotal || 0) +
      parseFloat(directorsassallTotal || 0) +
      parseFloat(assdirector1stallTotal || 0) +
      parseFloat(assdirector2ndallTotal || 0) +
      parseFloat(assdirector3rdallTotal || 0) +
      parseFloat(craftservicesallTotal || 0) +
      parseFloat(fringes_taxes_production || 0) +
      parseFloat(holidays_pro_sta || 0) +
      parseFloat(overtime_pro_sta || 0) +
      parseFloat(days6th7th_pro_sta || 0) +
      parseFloat(box_rent_pro_sta || 0) +
      parseFloat(other_pro_sta || 0)
      )
    }
    const timer = setTimeout(() => {
      addPro();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [productionmanagerallTotal, productionsupervisorallTotal,
    productioncoordinatorallTotal, unitmanagerallTotal,
    locationmanagerallTotal, locmanassallTotal, proassallTotal,
    prosecallTotal, proaccallTotal, proaccassallTotal,
    scriptsupconallTotal, payrollallTotal, otherproallTotal,
    directorsassallTotal, assdirector1stallTotal, assdirector2ndallTotal,
    assdirector3rdallTotal, craftservicesallTotal,
    fringes_taxes_production, holidays_pro_sta, overtime_pro_sta,
    days6th7th_pro_sta, box_rent_pro_sta, other_pro_sta,
    ]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    PRODUCTION STAFF LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2" >
    <Row className={` mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.00</p>
    </Col>
    <Col md={7} >
    <p className={ `${styles.BoldBlack} mb-1`}>PRODUCTION STAFF LABOUR</p>
    </Col>
    <Col md={2}>
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
    {/* Production Manager */}
    <div className="mt-2" >
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.10</p>
    </Col>
    <Col md={5} > 
    <p className={`${styles.BoldBlack}`}>Production Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_qty_prep" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_qty_prep"
        value={production_manager_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_uno_prep"
        value={production_manager_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_una_prep"
        value={production_manager_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_manager_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_rt_prep"
        value={production_manager_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionmanagerprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionmanagerprepTotal"
        value={productionmanagerprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionmanagerprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_quantity"
        value={production_manager_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_units_number"
        value={production_manager_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_units_name"
        value={production_manager_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_manager_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_rate"
        value={production_manager_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionmanagerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionmanagerTotal"
        value={productionmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionmanagerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_qty_wrap" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_qty_wrap"
        value={production_manager_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_uno_wrap"
        value={production_manager_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_una_wrap"
        value={production_manager_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_manager_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_manager_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_manager_rt_wrap"
        value={production_manager_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_manager_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionmanagerwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionmanagerwrapTotal"
        value={productionmanagerwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionmanagerwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionmanagerallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionmanagerallTotal"
        value={productionmanagerallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionmanagerallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Production Supervisor */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.20</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Production Supervisor</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_qty_prep" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_qty_prep"
        value={production_supervisor_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_uno_prep"
        value={production_supervisor_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_una_prep"
        value={production_supervisor_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_supervisor_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_rt_prep"
        value={production_supervisor_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionsupervisorprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionsupervisorprepTotal"
        value={productionsupervisorprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionsupervisorprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_quantity"
        value={production_supervisor_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_units_number"
        value={production_supervisor_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_units_name"
        value={production_supervisor_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_supervisor_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_rate"
        value={production_supervisor_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionsupervisorTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionsupervisorTotal"
        value={productionsupervisorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionsupervisorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_qty_wrap" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_qty_wrap"
        value={production_supervisor_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_uno_wrap"
        value={production_supervisor_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_una_wrap"
        value={production_supervisor_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_supervisor_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_supervisor_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_supervisor_rt_wrap"
        value={production_supervisor_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_supervisor_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionsupervisorwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionsupervisorwrapTotal"
        value={productionsupervisorwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionsupervisorwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionsupervisorallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionsupervisorallTotal"
        value={productionsupervisorallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionsupervisorallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Production Coordinator */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.30</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Production Coordinator</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_qty_prep" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_qty_prep"
        value={production_coordinator_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_uno_prep"
        value={production_coordinator_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_una_prep"
        value={production_coordinator_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_coordinator_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_rt_prep"
        value={production_coordinator_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productioncoordinatorprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productioncoordinatorprepTotal"
        value={productioncoordinatorprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productioncoordinatorprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_quantity"
        value={production_coordinator_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_units_number"
        value={production_coordinator_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_units_name"
        value={production_coordinator_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_coordinator_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_rate"
        value={production_coordinator_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productioncoordinatorTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productioncoordinatorTotal"
        value={productioncoordinatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productioncoordinatorTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_qty_wrap" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_qty_wrap"
        value={production_coordinator_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_uno_wrap"
        value={production_coordinator_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_una_wrap"
        value={production_coordinator_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_coordinator_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_coordinator_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_coordinator_rt_wrap"
        value={production_coordinator_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_coordinator_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productioncoordinatorwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productioncoordinatorwrapTotal"
        value={productioncoordinatorwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productioncoordinatorwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="productioncoordinatorallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productioncoordinatorallTotal"
        value={productioncoordinatorallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productioncoordinatorallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Unit Manager */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.40</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Unit Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_qty_prep" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_qty_prep"
        value={unit_manager_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_uno_prep"
        value={unit_manager_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_una_prep"
        value={unit_manager_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.unit_manager_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_rt_prep"
        value={unit_manager_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="unitmanagerprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unitmanagerprepTotal"
        value={unitmanagerprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.unitmanagerprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_quantity"
        value={unit_manager_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_units_number"
        value={unit_manager_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_units_name"
        value={unit_manager_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.unit_manager_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_rate"
        value={unit_manager_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="unitmanagerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unitmanagerTotal"
        value={unitmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.unitmanagerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_qty_wrap" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_qty_wrap"
        value={unit_manager_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_uno_wrap"
        value={unit_manager_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_una_wrap"
        value={unit_manager_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.unit_manager_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="unit_manager_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unit_manager_rt_wrap"
        value={unit_manager_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.unit_manager_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="unitmanagerwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unitmanagerwrapTotal"
        value={unitmanagerwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.unitmanagerwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="unitmanagerallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="unitmanagerallTotal"
        value={unitmanagerallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.unitmanagerallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Location Manager*/}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.50</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Location Manager</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_qty_prep" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_qty_prep"
        value={location_manager_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_uno_prep"
        value={location_manager_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_una_prep"
        value={location_manager_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.location_manager_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_rt_prep"
        value={location_manager_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="locationmanagerprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locationmanagerprepTotal"
        value={locationmanagerprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locationmanagerprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_quantity"
        value={location_manager_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_units_number"
        value={location_manager_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_units_name"
        value={location_manager_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.location_manager_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_rate"
        value={location_manager_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="locationmanagerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locationmanagerTotal"
        value={locationmanagerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locationmanagerTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_qty_wrap" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_qty_wrap"
        value={location_manager_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_uno_wrap"
        value={location_manager_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_una_wrap"
        value={location_manager_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.location_manager_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_rt_wrap"
        value={location_manager_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="locationmanagerwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locationmanagerwrapTotal"
        value={locationmanagerwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locationmanagerwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="locationmanagerallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locationmanagerallTotal"
        value={locationmanagerallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locationmanagerallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Location Manager Assistant */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.60</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Location Manager Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_ass_qty_prep" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_ass_qty_prep"
        value={location_manager_ass_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_ass_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_ass_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_ass_uno_prep"
        value={location_manager_ass_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_ass_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_ass_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_ass_una_prep"
        value={location_manager_ass_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.location_manager_ass_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_ass_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_ass_rt_prep"
        value={location_manager_ass_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_ass_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="locmanassprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locmanassprepTotal"
        value={locmanassprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locmanassprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_quantity"
        value={location_manager_assistant_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_assistant_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_units_number"
        value={location_manager_assistant_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_assistant_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_units_name"
        value={location_manager_assistant_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.location_manager_assistant_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_assistant_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_assistant_rate"
        value={location_manager_assistant_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_assistant_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="locationmanagerassistantTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locationmanagerassistantTotal"
        value={locationmanagerassistantTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locationmanagerassistantTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_ass_qty_wrap" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_ass_qty_wrap"
        value={location_manager_ass_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_ass_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_ass_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_ass_uno_wrap"
        value={location_manager_ass_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_ass_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_ass_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_ass_una_wrap"
        value={location_manager_ass_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.location_manager_ass_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="location_manager_ass_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="location_manager_ass_rt_wrap"
        value={location_manager_ass_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.location_manager_ass_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="locmanasswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locmanasswrapTotal"
        value={locmanasswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locmanasswrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="locmanassallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="locmanassallTotal"
        value={locmanassallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.locmanassallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Production Assistants */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.70</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Production Assistants</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_ass_qty_prep" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_ass_qty_prep"
        value={production_ass_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_ass_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_ass_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_ass_uno_prep"
        value={production_ass_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_ass_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_ass_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_ass_una_prep"
        value={production_ass_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_ass_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_ass_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_ass_rt_prep"
        value={production_ass_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_ass_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="proassprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proassprepTotal"
        value={proassprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proassprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_quantity"
        value={production_assistants_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_assistants_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_units_number"
        value={production_assistants_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_assistants_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_units_name"
        value={production_assistants_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_assistants_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_assistants_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_assistants_rate"
        value={production_assistants_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_assistants_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionassistantsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionassistantsTotal"
        value={productionassistantsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionassistantsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_ass_qty_wrap" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_ass_qty_wrap"
        value={production_ass_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_ass_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_ass_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_ass_uno_wrap"
        value={production_ass_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_ass_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_ass_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_ass_una_wrap"
        value={production_ass_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_ass_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_ass_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_ass_rt_wrap"
        value={production_ass_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_ass_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="proasswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proasswrapTotal"
        value={proasswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proasswrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="proassallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proassallTotal"
        value={proassallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proassallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>   
    {/* Production Secretary */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.80</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Production Secretary</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_sec_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_sec_qty_prep"
        value={production_sec_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_sec_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_sec_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_sec_uno_prep"
        value={production_sec_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_sec_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_sec_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_sec_una_prep"
        value={production_sec_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_sec_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_sec_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_sec_rt_prep"
        value={production_sec_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_sec_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="prosecprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prosecprepTotal"
        value={prosecprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.prosecprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_quantity"
        value={production_secretary_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_secretary_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_units_number"
        value={production_secretary_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_secretary_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_units_name"
        value={production_secretary_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_secretary_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_secretary_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_secretary_rate"
        value={production_secretary_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_secretary_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionsecretaryTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionsecretaryTotal"
        value={productionsecretaryTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionsecretaryTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_sec_qty_wrap" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_sec_qty_wrap"
        value={production_sec_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_sec_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_sec_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_sec_uno_wrap"
        value={production_sec_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_sec_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_sec_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_sec_una_wrap"
        value={production_sec_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_sec_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_sec_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_sec_rt_wrap"
        value={production_sec_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_sec_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="prosecwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prosecwrapTotal"
        value={prosecwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.prosecwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="prosecallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="prosecallTotal"
        value={prosecallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.prosecallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Production Accountant*/}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.90</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Production Accountant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_qty_prep" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_qty_prep"
        value={production_acc_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_uno_prep"
        value={production_acc_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_una_prep"
        value={production_acc_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_acc_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_rt_prep"
        value={production_acc_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="proaccprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proaccprepTotal"
        value={proaccprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proaccprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_quantity" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_quantity"
        value={production_accountant_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_units_number"
        value={production_accountant_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_units_name"
        value={production_accountant_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_accountant_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_rate"
        value={production_accountant_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionaccountantTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionaccountantTotal"
        value={productionaccountantTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionaccountantTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_qty_wrap" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_qty_wrap"
        value={production_acc_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_uno_wrap"
        value={production_acc_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_una_wrap"
        value={production_acc_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_acc_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_rt_wrap"
        value={production_acc_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="proaccwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proaccwrapTotal"
        value={proaccwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proaccwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="proaccallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proaccallTotal"
        value={proaccallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proaccallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Production Accountant Assistant */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.91</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Production Accountant Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_ass_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_ass_qty_prep"
        value={production_acc_ass_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_ass_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_ass_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_ass_uno_prep"
        value={production_acc_ass_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_ass_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_ass_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_ass_una_prep"
        value={production_acc_ass_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_acc_ass_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_ass_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_ass_rt_prep"
        value={production_acc_ass_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_ass_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="proaccassprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proaccassprepTotal"
        value={proaccassprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proaccassprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_assistant_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_assistant_quantity"
        value={production_accountant_assistant_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_assistant_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_assistant_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_assistant_units_number"
        value={production_accountant_assistant_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_assistant_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_assistant_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_assistant_units_name"
        value={production_accountant_assistant_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_accountant_assistant_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_accountant_assistant_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_accountant_assistant_rate"
        value={production_accountant_assistant_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_accountant_assistant_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionaccountantassistantTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionaccountantassistantTotal"
        value={productionaccountantassistantTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionaccountantassistantTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_ass_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_ass_qty_wrap"
        value={production_acc_ass_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_ass_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_ass_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_ass_uno_wrap"
        value={production_acc_ass_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_ass_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_ass_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_ass_una_wrap"
        value={production_acc_ass_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.production_acc_ass_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="production_acc_ass_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="production_acc_ass_rt_wrap"
        value={production_acc_ass_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.production_acc_ass_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="proaccasswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proaccasswrapTotal"
        value={proaccasswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proaccasswrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="proaccassallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="proaccassallTotal"
        value={proaccassallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.proaccassallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Script Supervisor / Continuity */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.92</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Script Supervisor / Continuity</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_con_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_con_qty_prep"
        value={scriptsupervisor_con_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_con_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_con_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_con_uno_prep"
        value={scriptsupervisor_con_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_con_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_con_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_con_una_prep"
        value={scriptsupervisor_con_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.scriptsupervisor_con_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_con_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_con_rt_prep"
        value={scriptsupervisor_con_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_con_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="scriptsupconprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupconprepTotal"
        value={scriptsupconprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scriptsupconprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_continuity_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_continuity_quantity"
        value={scriptsupervisor_continuity_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_continuity_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_continuity_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_continuity_units_number"
        value={scriptsupervisor_continuity_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_continuity_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_continuity_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_continuity_units_name"
        value={scriptsupervisor_continuity_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.scriptsupervisor_continuity_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_continuity_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_continuity_rate"
        value={scriptsupervisor_continuity_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_continuity_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="scriptsupervisorcontinuityTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisorcontinuityTotal"
        value={scriptsupervisorcontinuityTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scriptsupervisorcontinuityTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_con_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_con_qty_wrap"
        value={scriptsupervisor_con_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_con_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_con_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_con_uno_wrap"
        value={scriptsupervisor_con_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_con_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_con_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_con_una_wrap"
        value={scriptsupervisor_con_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.scriptsupervisor_con_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="scriptsupervisor_con_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupervisor_con_rt_wrap"
        value={scriptsupervisor_con_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.scriptsupervisor_con_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="scriptsupconwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupconwrapTotal"
        value={scriptsupconwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scriptsupconwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="scriptsupconallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="scriptsupconallTotal"
        value={scriptsupconallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.scriptsupconallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Payroll */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.93</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Payroll</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_qty_prep"
        value={payroll_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_uno_prep"
        value={payroll_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_una_prep"
        value={payroll_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.payroll_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_rt_prep"
        value={payroll_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="payrollprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payrollprepTotal"
        value={payrollprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.payrollprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_quantity"
        value={payroll_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_units_number"
        value={payroll_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_units_name"
        value={payroll_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.payroll_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_rate"
        value={payroll_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="payrollTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payrollTotal"
        value={payrollTotal}
        readOnly
            />
    </Form.Group>
    {errors?.payrollTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_qty_wrap"
        value={payroll_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_uno_wrap"
        value={payroll_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_una_wrap"
        value={payroll_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.payroll_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="payroll_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payroll_rt_wrap"
        value={payroll_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.payroll_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="payrollwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payrollwrapTotal"
        value={payrollwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.payrollwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="payrollallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="payrollallTotal"
        value={payrollallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.payrollallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Other Production */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.94</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Other Production</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_pro_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_pro_qty_prep"
        value={other_pro_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_pro_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_pro_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_pro_uno_prep"
        value={other_pro_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_pro_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_pro_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_pro_una_prep"
        value={other_pro_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.other_pro_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_pro_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_pro_rt_prep"
        value={other_pro_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_pro_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherproprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherproprepTotal"
        value={otherproprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherproprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_production_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_production_quantity"
        value={other_production_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_production_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_production_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_production_units_number"
        value={other_production_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_production_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_production_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_production_units_name"
        value={other_production_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.other_production_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_production_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_production_rate"
        value={other_production_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_production_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherproductionTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherproductionTotal"
        value={otherproductionTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherproductionTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_pro_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_pro_qty_wrap"
        value={other_pro_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_pro_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_pro_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_pro_uno_wrap"
        value={other_pro_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_pro_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_pro_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_pro_una_wrap"
        value={other_pro_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.other_pro_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_pro_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_pro_rt_wrap"
        value={other_pro_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_pro_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherprowrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherprowrapTotal"
        value={otherprowrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherprowrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherproallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherproallTotal"
        value={otherproallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherproallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Directors Assistant */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.95</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Director's Assistant</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_ass_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_ass_qty_prep"
        value={directors_ass_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_ass_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_ass_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_ass_uno_prep"
        value={directors_ass_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_ass_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_ass_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_ass_una_prep"
        value={directors_ass_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.directors_ass_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_ass_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_ass_rt_prep"
        value={directors_ass_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_ass_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="directorsassprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directorsassprepTotal"
        value={directorsassprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.directorsassprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_assistant_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_assistant_quantity"
        value={directors_assistant_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_assistant_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_assistant_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_assistant_units_number"
        value={directors_assistant_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_assistant_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_assistant_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_assistant_units_name"
        value={directors_assistant_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.directors_assistant_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_assistant_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_assistant_rate"
        value={directors_assistant_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_assistant_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="directorsassistantTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directorsassistantTotal"
        value={directorsassistantTotal}
        readOnly
            />
    </Form.Group>
    {errors?.directorsassistantTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_ass_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_ass_qty_wrap"
        value={directors_ass_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_ass_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_ass_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_ass_uno_wrap"
        value={directors_ass_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_ass_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_ass_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_ass_una_wrap"
        value={directors_ass_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.directors_ass_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="directors_ass_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directors_ass_rt_wrap"
        value={directors_ass_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.directors_ass_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="directorsasswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directorsasswrapTotal"
        value={directorsasswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.directorsasswrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="directorsassallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="directorsassallTotal"
        value={directorsassallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.directorsassallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* 1st Assistant Director */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.96</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>1st Assistant Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_1st_qty_prep"
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_1st_qty_prep"
        value={ass_director_1st_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_1st_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_1st_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_1st_uno_prep"
        value={ass_director_1st_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_1st_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_1st_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_1st_una_prep"
        value={ass_director_1st_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.ass_director_1st_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_1st_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_1st_rt_prep"
        value={ass_director_1st_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_1st_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assdirector1stprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assdirector1stprepTotal"
        value={assdirector1stprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assdirector1stprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_1st_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_1st_quantity"
        value={assistant_director_1st_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_1st_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_1st_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_1st_units_number"
        value={assistant_director_1st_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_1st_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_1st_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_1st_units_name"
        value={assistant_director_1st_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.assistant_director_1st_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_1st_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_1st_rate"
        value={assistant_director_1st_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_1st_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistantdirector1stTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistantdirector1stTotal"
        value={assistantdirector1stTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistantdirector1stTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_1st_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_1st_qty_wrap"
        value={ass_director_1st_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_1st_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_1st_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_1st_uno_wrap"
        value={ass_director_1st_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_1st_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_1st_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_1st_una_wrap"
        value={ass_director_1st_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.ass_director_1st_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_1st_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_1st_rt_wrap"
        value={ass_director_1st_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_1st_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assdirector1stwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assdirector1stwrapTotal"
        value={assdirector1stwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assdirector1stwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline7}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="assdirector1stallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assdirector1stallTotal"
        value={assdirector1stallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assdirector1stallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* 2nd Assistant Director */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.97</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>2nd Assistant Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_2nd_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_2nd_qty_prep"
        value={ass_director_2nd_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_2nd_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_2nd_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_2nd_uno_prep"
        value={ass_director_2nd_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_2nd_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_2nd_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_2nd_una_prep"
        value={ass_director_2nd_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.ass_director_2nd_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_2nd_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_2nd_rt_prep"
        value={ass_director_2nd_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_2nd_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assdirector2ndprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assdirector2ndprepTotal"
        value={assdirector2ndprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assdirector2ndprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_2nd_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_2nd_quantity"
        value={assistant_director_2nd_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_2nd_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_2nd_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_2nd_units_number"
        value={assistant_director_2nd_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_2nd_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_2nd_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_2nd_units_name"
        value={assistant_director_2nd_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.assistant_director_2nd_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_2nd_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_2nd_rate"
        value={assistant_director_2nd_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_2nd_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistantdirector2ndTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistantdirector2ndTotal"
        value={assistantdirector2ndTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistantdirector2ndTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_2nd_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_2nd_qty_wrap"
        value={ass_director_2nd_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_2nd_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_2nd_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_2nd_uno_wrap"
        value={ass_director_2nd_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_2nd_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_2nd_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_2nd_una_wrap"
        value={ass_director_2nd_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.ass_director_2nd_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_2nd_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_2nd_rt_wrap"
        value={ass_director_2nd_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_2nd_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assdirector2ndwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assdirector2ndwrapTotal"
        value={assdirector2ndwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assdirector2ndwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="assdirector2ndallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assdirector2ndallTotal"
        value={assdirector2ndallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assdirector2ndallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* 3rd Assistant Director */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.98</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>3rd Assistant Director</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_3rd_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_3rd_qty_prep"
        value={ass_director_3rd_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_3rd_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_3rd_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_3rd_uno_prep"
        value={ass_director_3rd_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_3rd_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_3rd_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_3rd_una_prep"
        value={ass_director_3rd_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.ass_director_3rd_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_3rd_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_3rd_rt_prep"
        value={ass_director_3rd_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_3rd_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assdirector3rdprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assdirector3rdprepTotal"
        value={assdirector3rdprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assdirector3rdprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_3rd_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_3rd_quantity"
        value={assistant_director_3rd_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_3rd_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_3rd_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_3rd_units_number"
        value={assistant_director_3rd_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_3rd_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_3rd_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_3rd_units_name"
        value={assistant_director_3rd_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.assistant_director_3rd_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assistant_director_3rd_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistant_director_3rd_rate"
        value={assistant_director_3rd_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.assistant_director_3rd_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistantdirector3rdTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistantdirector3rdTotal"
        value={assistantdirector3rdTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistantdirector3rdTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_3rd_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_3rd_qty_wrap"
        value={ass_director_3rd_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_3rd_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_3rd_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_3rd_uno_wrap"
        value={ass_director_3rd_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_3rd_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_3rd_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_3rd_una_wrap"
        value={ass_director_3rd_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.ass_director_3rd_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ass_director_3rd_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ass_director_3rd_rt_wrap"
        value={ass_director_3rd_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.ass_director_3rd_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assdirector3rdwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assdirector3rdwrapTotal"
        value={assdirector3rdwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assdirector3rdwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="assdirector3rdallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assdirector3rdallTotal"
        value={assdirector3rdallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assdirector3rdallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Craft Services */}
    <div className="mt-1">
    <Row>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.99</p>
    </Col>
    <Col md={5} >
    <p className={`${styles.BoldBlack}`}>Craft Services</p>
    </Col>
    </Row>
    {/* Prep */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Prep</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_qty_prep"
        value={craft_services_qty_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_uno_prep"
        value={craft_services_uno_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_una_prep"
        value={craft_services_una_prep}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.craft_services_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_rt_prep"
        value={craft_services_rt_prep}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="craftservicesprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craftservicesprepTotal"
        value={craftservicesprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.craftservicesprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Shoot */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Shoot</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_quantity"
        value={craft_services_quantity}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_units_number"
        value={craft_services_units_number}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_units_name"
        value={craft_services_units_name}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.craft_services_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_rate"
        value={craft_services_rate}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="craftservicesTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craftservicesTotal"
        value={craftservicesTotal}
        readOnly
            />
    </Form.Group>
    {errors?.craftservicesTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row  className="py-0 d-flex align-items-center mb-1">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_qty_wrap"
        value={craft_services_qty_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_uno_wrap"
        value={craft_services_uno_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_una_wrap"
        value={craft_services_una_wrap}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.craft_services_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="craft_services_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craft_services_rt_wrap"
        value={craft_services_rt_wrap}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.craft_services_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="craftserviceswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craftserviceswrapTotal"
        value={craftserviceswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.craftserviceswrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row  className="py-0 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="craftservicesallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="craftservicesallTotal"
        value={craftservicesallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.craftservicesallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.991</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_pro_sta" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_pro_sta"
        value={days6th7th_unit_pro_sta}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_pro_sta?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_pro_sta" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_pro_sta"
        value={days6th7th_pro_sta}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.days6th7th_pro_sta?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.992</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_pro_sta" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_pro_sta"
        value={overtime_unit_pro_sta}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.overtime_unit_pro_sta?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_pro_sta" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_pro_sta"
        value={overtime_pro_sta}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.overtime_pro_sta?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.993</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_pro_sta" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_pro_sta"
        value={holidays_unit_pro_sta}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.holidays_unit_pro_sta?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_pro_sta" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_pro_sta"
        value={holidays_pro_sta}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.holidays_pro_sta?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row> 
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Box Rentals */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.994</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_pro_sta" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_pro_sta"
        value={box_rent_unit_pro_sta}
        onChange={handleChangeProText}
            />
    </Form.Group>
    {errors?.box_rent_unit_pro_sta?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_pro_sta" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_pro_sta"
        value={box_rent_pro_sta}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.box_rent_pro_sta?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Other */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.995</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Other</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_pro_sta" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_pro_sta"
        value={other_pro_sta}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.other_pro_sta?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>07.996</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Fringes and Taxes</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={1} className="text-center" >
    <p className={`${styles.Underline}`}>%</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="fringes_taxes_production" 
        className={`${styles.Width95} text-center py-0 my-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_production"
        value={fringes_taxes_production}
        onChange={handleChangePro}
            />
    </Form.Group>
    {errors?.fringes_taxes_production?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={{offset: 1, span:10}} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Production Staff Total */}
    <Row className="mt-3 mb-3 pb-2">
    <Col md={1} ></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TOTAL PRODUCTION STAFF</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="productionstaffTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="productionstaffTotal"
        value={productionstaffTotal}
        readOnly
            />
    </Form.Group>
    {errors?.productionstaffTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    </div>
  )
}

export default ProductionStaff