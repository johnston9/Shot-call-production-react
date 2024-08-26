/* Component in the Budget component to edit Camera pattern="[0-9]*" */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Camera = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataCamera, setPostDataCamera,
           dopTotal, setDopTotal,
           cameraopTotal, setCameraopTotal,
           camac1Total, setCamac1Total,
           camac2Total, setCamac2Total,
           ditTotal, setDitTotal,
           steadicamTotal, setSteadicamTotal,
           campaTotal, setCampaTotal,
           dronepilotTotal, setDronepilotTotal,
           stillsTotal, setStillsTotal,
           othercamTotal, setOthercamTotal, setShow,
           cameralabourTotal, setCameralabourTotal,
           dopprepTotal, setDopprepTotal,
           dopwrapTotal, setDopwrapTotal,
           dopallTotal, setDopallTotal,
           camopprepTotal, setCamopprepTotal,
           camopwrapTotal, setCamopwrapTotal,
           camopallTotal, setCamopallTotal,
           camac1prepTotal, setCamac1prepTotal,
           camac1wrapTotal, setCamac1wrapTotal,
           camac1allTotal, setCamac1allTotal,
           camac2prepTotal, setCamac2prepTotal,
           camac2wrapTotal, setCamac2wrapTotal,
           camac2allTotal, setCamac2allTotal,
           ditprepTotal, setDitprepTotal,
           ditwrapTotal, setDitwrapTotal,
           ditallTotal, setDitallTotal,
           stecamprepTotal, setStecamprepTotal,
           stecamwrapTotal, setStecamwrapTotal,
           stecamallTotal, setStecamallTotal,
           campaprepTotal, setCampaprepTotal,
           campawrapTotal, setCampawrapTotal,
           campaallTotal, setCampaallTotal,
           dronpiprepTotal, setDronpiprepTotal,
           dronpiwrapTotal, setDronpiwrapTotal,
           dronpiallTotal, setDronpiallTotal,
           othcamprepTotal, setOthcamprepTotal,
           othcamwrapTotal, setOthcamwrapTotal,
           othcamallTotal, setOthcamallTotal,
    } = props;
      
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

    // handleChange 
    const handleChange = (event) => {
      setPostDataCamera({
      ...postDataCamera, 
      [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
      });
    }; 

    // handleChange Text 
    const handleChangeText = (event) => {
      setPostDataCamera({
      ...postDataCamera,
      [event.target.name]: event.target.value,
      });
    };

    // Calculate Functions

    // dop
    // function to calculate dop shoot on change
    useEffect(() => {
      const addDop = () => {
      setDopTotal((parseFloat(dop_qty || 0) * 
      parseFloat(dop_uno || 0) * 
      parseFloat(dop_rt || 0)).toFixed());
      };
      const timer = setTimeout(() => {
        addDop();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [dop_qty, dop_uno, dop_rt]);

    // function to calculate dop prep on change
    useEffect(() => {
        const addDopprep = () => {
        setDopprepTotal((parseFloat(dop_qty_prep || 0) * 
        parseFloat(dop_uno_prep || 0) * 
        parseFloat(dop_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addDopprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dop_qty_prep, dop_uno_prep, dop_rt_prep]);

    // function to calculate dop wrap on change
    useEffect(() => {
        const addDopwrap = () => {
        setDopwrapTotal((parseFloat(dop_qty_wrap || 0) * 
        parseFloat(dop_uno_wrap || 0) * 
        parseFloat(dop_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addDopwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dop_qty_wrap, dop_uno_wrap, dop_rt_wrap]);

    // function to calculate dop all on change
    useEffect(() => {
        const addDopall = () => {
        setDopallTotal(parseFloat(dopTotal || 0) +
        parseFloat(dopprepTotal || 0) +
        parseFloat(dopwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addDopall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dopTotal, dopprepTotal, dopwrapTotal]);

    // stills
    // function to calculate stills on change
    useEffect(() => {
        const addSti = () => {
        setStillsTotal((parseFloat(stills_qty || 0) * 
        parseFloat(stills_uno || 0) * 
        parseFloat(stills_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSti();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [stills_qty, stills_uno, stills_rt]);

    // Camera Operator
    // function to calculate Camera Operator shoot on change
    useEffect(() => {
      const addCamope = () => {
      setCameraopTotal((parseFloat(camera_op_qty || 0) * 
      parseFloat(camera_op_uno || 0) * 
      parseFloat(camera_op_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addCamope();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [camera_op_qty, camera_op_uno, camera_op_rt]);

    // function to calculate Camera Operator prep on change
    useEffect(() => {
        const addCamopprep = () => {
        setCamopprepTotal((parseFloat(cam_op_qty_prep || 0) * 
        parseFloat(cam_op_uno_prep || 0) * 
        parseFloat(cam_op_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCamopprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cam_op_qty_prep, cam_op_uno_prep, cam_op_rt_prep]);

    // function to calculate Camera Operator wrap on change
    useEffect(() => {
        const addCamopwrap = () => {
        setCamopwrapTotal((parseFloat(cam_op_qty_wrap || 0) * 
        parseFloat(cam_op_uno_wrap || 0) * 
        parseFloat(cam_op_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCamopwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cam_op_qty_wrap, cam_op_uno_wrap, cam_op_rt_wrap]);

    // function to calculate Camera Operator all on change
    useEffect(() => {
        const addCamopall = () => {
        setCamopallTotal(parseFloat(cameraopTotal || 0) +
        parseFloat(camopprepTotal || 0) +
        parseFloat(camopwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addCamopall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cameraopTotal, camopprepTotal, camopwrapTotal]);

    // 1st Assistant Camera
    // function to calculate 1st Assistant Camera shoot on change
    useEffect(() => {
      const addCamac1 = () => {
      setCamac1Total((parseFloat(cam_ac1_qty || 0) * 
      parseFloat(cam_ac1_uno || 0) * 
      parseFloat(cam_ac1_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addCamac1();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [cam_ac1_qty, cam_ac1_uno, cam_ac1_rt]);

    // function to calculate 1st Assistant Camera prep on change
    useEffect(() => {
        const addCamac1prep = () => {
        setCamac1prepTotal((parseFloat(cam_ac1_qty_prep || 0) * 
        parseFloat(cam_ac1_uno_prep || 0) * 
        parseFloat(cam_ac1_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCamac1prep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cam_ac1_qty_prep, cam_ac1_uno_prep, cam_ac1_rt_prep]);

    // function to calculate 1st Assistant Camera wrap on change
    useEffect(() => {
        const addCamac1wrap = () => {
        setCamac1wrapTotal((parseFloat(cam_ac1_qty_wrap || 0) * 
        parseFloat(cam_ac1_uno_wrap || 0) * 
        parseFloat(cam_ac1_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCamac1wrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cam_ac1_qty_wrap, cam_ac1_uno_wrap, cam_ac1_rt_wrap]);

    // function to calculate 1st Assistant Camera all on change
    useEffect(() => {
        const addCamac1all = () => {
        setCamac1allTotal(parseFloat(camac1Total || 0) +
        parseFloat(camac1prepTotal || 0) +
        parseFloat(camac1wrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addCamac1all();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [camac1Total, camac1prepTotal, camac1wrapTotal]);

    // 2nd Assistant Camera
    // function to calculate 2nd Assistant Camera shoot on change
    useEffect(() => {
      const addCamac2 = () => {
      setCamac2Total((parseFloat(cam_ac2_qty || 0) * 
      parseFloat(cam_ac2_uno || 0) * 
      parseFloat(cam_ac2_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addCamac2();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [cam_ac2_qty, cam_ac2_uno, cam_ac2_rt]);

    // function to calculate 2nd Assistant Camera prep on change
    useEffect(() => {
        const addCamac2prep = () => {
        setCamac2prepTotal((parseFloat(cam_ac2_qty_prep || 0) * 
        parseFloat(cam_ac2_uno_prep || 0) * 
        parseFloat(cam_ac2_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCamac2prep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cam_ac2_qty_prep, cam_ac2_uno_prep, cam_ac2_rt_prep]);

    // function to calculate 2nd Assistant Camera wrap on change
    useEffect(() => {
        const addCamac2wrap = () => {
        setCamac2wrapTotal((parseFloat(cam_ac2_qty_wrap || 0) * 
        parseFloat(cam_ac2_uno_wrap || 0) * 
        parseFloat(cam_ac2_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCamac2wrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cam_ac2_qty_wrap, cam_ac2_uno_wrap, cam_ac2_rt_wrap]);

    // function to calculate 2nd Assistant Camera all on change
    useEffect(() => {
        const addCamac2all = () => {
        setCamac2allTotal(parseFloat(camac2Total || 0) +
        parseFloat(camac2prepTotal || 0) +
        parseFloat(camac2wrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addCamac2all();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [camac2Total, camac2prepTotal, camac2wrapTotal]);

    // DIT
    // function to calculate DIT shoot on change
    useEffect(() => {
      const addDit = () => {
      setDitTotal((parseFloat(dit_qty || 0) * 
      parseFloat(dit_uno || 0) * 
      parseFloat(dit_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addDit();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [dit_qty, dit_uno, dit_rt]);

    // function to calculate DIT prep on change
    useEffect(() => {
        const addDitprep = () => {
        setDitprepTotal((parseFloat(dit_qty_prep || 0) * 
        parseFloat(dit_uno_prep || 0) * 
        parseFloat(dit_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addDitprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [dit_qty_prep, dit_uno_prep, dit_rt_prep]);

      // function to calculate DIT wrap on change
    useEffect(() => {
        const addDitwrap = () => {
        setDitwrapTotal((parseFloat(dit_qty_wrap || 0) * 
        parseFloat(dit_uno_wrap || 0) * 
        parseFloat(dit_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addDitwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [dit_qty_wrap, dit_uno_wrap, dit_rt_wrap]);

      // function to calculate DIT all on change
    useEffect(() => {
        const addDitall = () => {
        setDitallTotal(parseFloat(ditTotal || 0) +
        parseFloat(ditprepTotal || 0) +
        parseFloat(ditwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addDitall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ditTotal, ditprepTotal, ditwrapTotal]);

    // Steadicam
    // function to calculate Steadicam shoot on change
    useEffect(() => {
      const addSteady = () => {
      setSteadicamTotal((parseFloat(steadicam_qty || 0) * 
      parseFloat(steadicam_uno || 0) * 
      parseFloat(steadicam_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addSteady();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [steadicam_qty, steadicam_uno, steadicam_rt]);

    // function to calculate Steadicam prep on change
    useEffect(() => {
        const addSteadyprep = () => {
        setStecamprepTotal((parseFloat(stead_qty_prep || 0) * 
        parseFloat(stead_uno_prep || 0) * 
        parseFloat(stead_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSteadyprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [stead_qty_prep, stead_uno_prep, stead_rt_prep]);

    // function to calculate Steadicam wrap on change
    useEffect(() => {
        const addSteadywrap = () => {
        setStecamwrapTotal((parseFloat(stead_qty_wrap || 0) * 
        parseFloat(stead_uno_wrap || 0) * 
        parseFloat(stead_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSteadywrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [stead_qty_wrap, stead_uno_wrap, stead_rt_wrap]);

    // function to calculate Steadicam all on change
    useEffect(() => {
        const addSteadyall = () => {
        setStecamallTotal(parseFloat(steadicamTotal || 0) +
        parseFloat(stecamprepTotal || 0) +
        parseFloat(stecamwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addSteadyall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [steadicamTotal, stecamprepTotal, stecamwrapTotal]);

    // Camera PA
    // function to calculate Camera PA shoot on change
    useEffect(() => {
      const addCampa = () => {
      setCampaTotal((parseFloat(cam_pa_qty || 0) * 
      parseFloat(cam_pa_uno || 0) * 
      parseFloat(cam_pa_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addCampa();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [cam_pa_qty, cam_pa_uno, cam_pa_rt]);

    // function to calculate Camera PA prep on change
    useEffect(() => {
        const addCampaprep = () => {
        setCampaprepTotal((parseFloat(cam_pa_qty_prep || 0) * 
        parseFloat(cam_pa_uno_prep || 0) * 
        parseFloat(cam_pa_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCampaprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cam_pa_qty_prep, cam_pa_uno_prep, cam_pa_rt_prep]);

    // function to calculate Camera PA wrap on change
    useEffect(() => {
        const addCampawrap = () => {
        setCampawrapTotal((parseFloat(cam_pa_qty_wrap || 0) * 
        parseFloat(cam_pa_uno_wrap || 0) * 
        parseFloat(cam_pa_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCampawrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cam_pa_qty_wrap, cam_pa_uno_wrap, cam_pa_rt_wrap]);

    // function to calculate Camera PA all on change
    useEffect(() => {
        const addCampaall = () => {
        setCampaallTotal(parseFloat(campaTotal || 0) +
        parseFloat(campaprepTotal || 0) +
        parseFloat(campawrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addCampaall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [campaTotal, campaprepTotal, campawrapTotal]);

    // Drone Pilot 
    // function to calculate Drone Pilot shoot on change
    useEffect(() => {
      const addDropil = () => {
      setDronepilotTotal((parseFloat(drone_pilot_qty || 0) * 
      parseFloat(drone_pilot_uno || 0) * 
      parseFloat(drone_pilot_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addDropil();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [drone_pilot_qty, drone_pilot_uno, drone_pilot_rt]);

    // function to calculate Drone Pilot prep on change
    useEffect(() => {
        const addDropilprep = () => {
        setDronpiprepTotal((parseFloat(dro_pil_qty_prep || 0) * 
        parseFloat(dro_pil_uno_prep || 0) * 
        parseFloat(dro_pil_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addDropilprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dro_pil_qty_prep, dro_pil_uno_prep, dro_pil_rt_prep]);

    // function to calculate Drone Pilot wrap on change
    useEffect(() => {
        const addDropilwrap = () => {
        setDronpiwrapTotal((parseFloat(dro_pil_qty_wrap || 0) * 
        parseFloat(dro_pil_uno_wrap || 0) * 
        parseFloat(dro_pil_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addDropilwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dro_pil_qty_wrap, dro_pil_uno_wrap, dro_pil_rt_wrap]);

    // function to calculate Drone Pilot all on change
    useEffect(() => {
        const addDropilall = () => {
        setDronpiallTotal(parseFloat(dronepilotTotal || 0) +
        parseFloat(dronpiprepTotal || 0) +
        parseFloat(dronpiwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addDropilall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [dronepilotTotal, dronpiprepTotal, dronpiwrapTotal]);

    // Other Camera
    // function to calculate Other Camera shoot on change
    useEffect(() => {
      const addOthcam = () => {
      setOthercamTotal((parseFloat(other_cam_qty || 0) * 
      parseFloat(other_cam_uno || 0) * 
      parseFloat(other_cam_rt || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addOthcam();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
    }, [other_cam_qty, other_cam_uno, other_cam_rt]);

    // function to calculate Other Camera prep on change
    useEffect(() => {
        const addOthcamprep = () => {
        setOthcamprepTotal((parseFloat(ot_cam_qty_prep || 0) * 
        parseFloat(ot_cam_uno_prep || 0) * 
        parseFloat(ot_cam_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthcamprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ot_cam_qty_prep, ot_cam_uno_prep, ot_cam_rt_prep]);

    // function to calculate Other Camera wrap on change
    useEffect(() => {
        const addOthcamwrap = () => {
        setOthcamwrapTotal((parseFloat(ot_cam_qty_wrap || 0) * 
        parseFloat(ot_cam_uno_wrap || 0) * 
        parseFloat(ot_cam_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthcamwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ot_cam_qty_wrap, ot_cam_uno_wrap, ot_cam_rt_wrap]);

    // function to calculate Other Camera all on change
    useEffect(() => {
        const addOthcamall = () => {
        setOthcamallTotal(parseFloat(othercamTotal || 0) +
        parseFloat(othcamprepTotal || 0) +
        parseFloat(othcamwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthcamall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [othercamTotal, othcamprepTotal, othcamwrapTotal]);

    // function to add all Camera Labour on change
    useEffect(() => {
      const addCamlab = () => {
      setCameralabourTotal(
      parseFloat(dopallTotal || 0) +
      parseFloat(camopallTotal || 0) +
      parseFloat(camac1allTotal || 0) +
      parseFloat(camac2allTotal || 0) +
      parseFloat(ditallTotal || 0) +
      parseFloat(stecamallTotal || 0) +
      parseFloat(campaallTotal || 0) +
      parseFloat(stillsTotal || 0) +
      parseFloat(dronpiallTotal || 0) +
      parseFloat(days6th7th_cam || 0) +
      parseFloat(overtime_cam || 0) +
      parseFloat(holidays_cam || 0) +
      parseFloat(box_rent_cam || 0) +
      parseFloat(other_solo_cam || 0) +
      parseFloat(fringes_taxes_camera || 0)
      )
      }
      const timer = setTimeout(() => {
        addCamlab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
      }, [dopallTotal, camopallTotal, camac1allTotal,
        camac2allTotal, ditallTotal, stecamallTotal,
        campaallTotal, dronpiallTotal, stillsTotal,
        othcamallTotal, days6th7th_cam, overtime_cam,
        holidays_cam, box_rent_cam, other_solo_cam,
        fringes_taxes_camera,]);
    
  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    CAMERA LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2">
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>CAMERA LABOUR</p>
    </Col>
    </Row>
    {/* TITLES */}
    <Row className={`mb-2 py-0`} >
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
    {/* DOP */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Director of Photography</p>
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
    <Form.Group controlId="dop_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_qty_prep"
        value={dop_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dop_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_uno_prep"
        value={dop_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dop_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_una_prep"
        value={dop_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dop_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_rt_prep"
        value={dop_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dop_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dopprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dopprepTotal"
        value={dopprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dopprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1}></Col>
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
    <Form.Group controlId="dop_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        // type="number"
        className={styles.Input}
        name="dop_qty"
        value={dop_qty}
        onChange={handleChange}
          />
    </Form.Group>
    {errors?.dop_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_uno"
        value={dop_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dop_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_una"
        value={dop_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dop_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_rt"
        value={dop_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dop_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dopTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dopTotal"
        value={dopTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dopTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_qty_wrap"
        value={dop_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dop_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_uno_wrap"
        value={dop_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dop_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_una_wrap"
        value={dop_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dop_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dop_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dop_rt_wrap"
        value={dop_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dop_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dopwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dopwrapTotal"
        value={dopwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dopwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="dopallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dopallTotal"
        value={dopallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dopallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Camera Operator */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Camera Operator</p>
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
    <Form.Group controlId="cam_op_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_op_qty_prep"
        value={cam_op_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_op_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_op_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_op_uno_prep"
        value={cam_op_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_op_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_op_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_op_una_prep"
        value={cam_op_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_op_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_op_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_op_rt_prep"
        value={cam_op_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_op_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="camopprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camopprepTotal"
        value={camopprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.camopprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1}></Col>
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
    <Form.Group controlId="camera_op_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camera_op_qty"
        value={camera_op_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.camera_op_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="camera_op_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camera_op_uno"
        value={camera_op_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.camera_op_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="camera_op_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camera_op_una"
        value={camera_op_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.camera_op_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="camera_op_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camera_op_rt"
        value={camera_op_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.camera_op_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="cameraopTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cameraopTotal"
        value={cameraopTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cameraopTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_op_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_op_qty_wrap"
        value={cam_op_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_op_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_op_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_op_uno_wrap"
        value={cam_op_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_op_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_op_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_op_una_wrap"
        value={cam_op_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_op_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_op_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_op_rt_wrap"
        value={cam_op_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_op_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="camopwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camopwrapTotal"
        value={camopwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.camopwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="camopallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camopallTotal"
        value={camopallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.camopallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* 1st Assistant Camera */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>1st Assistant Camera </p>
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
    <Form.Group controlId="cam_ac1_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_qty_prep"
        value={cam_ac1_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_uno_prep"
        value={cam_ac1_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_una_prep"
        value={cam_ac1_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_ac1_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_rt_prep"
        value={cam_ac1_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="camac1prepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camac1prepTotal"
        value={camac1prepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.camac1prepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1}></Col>
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
    <Form.Group controlId="cam_ac1_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_qty"
        value={cam_ac1_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_uno"
        value={cam_ac1_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_una"
        value={cam_ac1_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_ac1_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_rt"
        value={cam_ac1_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="camac1Total" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camac1Total"
        value={camac1Total}
        readOnly
            />
    </Form.Group>
    {errors?.camac1Total?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_qty_wrap"
        value={cam_ac1_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_uno_wrap"
        value={cam_ac1_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_una_wrap"
        value={cam_ac1_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_ac1_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac1_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac1_rt_wrap"
        value={cam_ac1_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac1_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="camac1wrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camac1wrapTotal"
        value={camac1wrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.camac1wrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="camac1allTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camac1allTotal"
        value={camac1allTotal}
        readOnly
            />
    </Form.Group>
    {errors?.camac1allTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* 2nd Assistant Camera */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>2nd Assistant Camera </p>
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
    <Form.Group controlId="cam_ac2_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_qty_prep"
        value={cam_ac2_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_uno_prep"
        value={cam_ac2_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_una_prep"
        value={cam_ac2_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_ac2_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_rt_prep"
        value={cam_ac2_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="camac2prepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camac2prepTotal"
        value={camac2prepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.camac2prepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1}></Col>
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
    <Form.Group controlId="cam_ac2_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_qty"
        value={cam_ac2_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_uno"
        value={cam_ac2_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_una"
        value={cam_ac2_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_ac2_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_rt"
        value={cam_ac2_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="camac2Total" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camac2Total"
        value={camac2Total}
        readOnly
            />
    </Form.Group>
    {errors?.camac2Total?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_qty_wrap"
        value={cam_ac2_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_uno_wrap"
        value={cam_ac2_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_una_wrap"
        value={cam_ac2_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_ac2_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_ac2_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_ac2_rt_wrap"
        value={cam_ac2_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_ac2_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="camac2wrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camac2wrapTotal"
        value={camac2wrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.camac2wrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="camac2allTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="camac2allTotal"
        value={camac2allTotal}
        readOnly
            />
    </Form.Group>
    {errors?.camac2allTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* DIT */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>DIT</p>
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
    <Form.Group controlId="dit_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_qty_prep"
        value={dit_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_uno_prep"
        value={dit_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_una_prep"
        value={dit_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dit_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_rt_prep"
        value={dit_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="ditprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ditprepTotal"
        value={ditprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ditprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1}></Col>
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
    <Form.Group controlId="dit_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_qty"
        value={dit_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_uno"
        value={dit_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_una"
        value={dit_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dit_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_rt"
        value={dit_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="ditTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ditTotal"
        value={ditTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ditTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_qty_wrap"
        value={dit_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_uno_wrap"
        value={dit_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_una_wrap"
        value={dit_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dit_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dit_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dit_rt_wrap"
        value={dit_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dit_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="ditwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ditwrapTotal"
        value={ditwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ditwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="ditallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ditallTotal"
        value={ditallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ditallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Steadicam */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Steadicam</p>
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
    <Form.Group controlId="stead_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stead_qty_prep"
        value={stead_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stead_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stead_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stead_uno_prep"
        value={stead_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stead_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stead_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stead_una_prep"
        value={stead_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.stead_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stead_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stead_rt_prep"
        value={stead_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stead_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stecamprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stecamprepTotal"
        value={stecamprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stecamprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>  
    <Col md={1}></Col>
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
    <Form.Group controlId="steadicam_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicam_qty"
        value={steadicam_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.steadicam_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="steadicam_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicam_uno"
        value={steadicam_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.steadicam_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="steadicam_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicam_una"
        value={steadicam_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.steadicam_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="steadicam_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicam_rt"
        value={steadicam_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.steadicam_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="steadicamTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="steadicamTotal"
        value={steadicamTotal}
        readOnly
            />
    </Form.Group>
    {errors?.steadicamTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stead_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stead_qty_wrap"
        value={stead_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stead_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stead_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stead_uno_wrap"
        value={stead_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stead_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stead_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stead_una_wrap"
        value={stead_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.stead_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stead_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stead_rt_wrap"
        value={stead_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stead_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stecamwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stecamwrapTotal"
        value={stecamwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stecamwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="stecamallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stecamallTotal"
        value={stecamallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stecamallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Camera PA */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Camera PA</p>
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
    <Form.Group controlId="cam_pa_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_qty_prep"
        value={cam_pa_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_uno_prep"
        value={cam_pa_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_una_prep"
        value={cam_pa_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_pa_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_rt_prep"
        value={cam_pa_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="campaprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="campaprepTotal"
        value={campaprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.campaprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>  
    <Col md={1}></Col>
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
    <Form.Group controlId="cam_pa_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_qty"
        value={cam_pa_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_uno"
        value={cam_pa_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_una"
        value={cam_pa_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_pa_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_rt"
        value={cam_pa_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="campaTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="campaTotal"
        value={campaTotal}
        readOnly
            />
    </Form.Group>
    {errors?.campaTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_qty_wrap"
        value={cam_pa_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_uno_wrap"
        value={cam_pa_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_una_wrap"
        value={cam_pa_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cam_pa_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cam_pa_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cam_pa_rt_wrap"
        value={cam_pa_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cam_pa_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="campawrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="campawrapTotal"
        value={campawrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.campawrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="campaallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="campaallTotal"
        value={campaallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.campaallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Drone Pilot */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Drone Pilot</p>
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
    <Form.Group controlId="dro_pil_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dro_pil_qty_prep"
        value={dro_pil_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dro_pil_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dro_pil_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dro_pil_uno_prep"
        value={dro_pil_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dro_pil_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dro_pil_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dro_pil_una_prep"
        value={dro_pil_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dro_pil_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dro_pil_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dro_pil_rt_prep"
        value={dro_pil_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dro_pil_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dronpiprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dronpiprepTotal"
        value={dronpiprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dronpiprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>  
    <Col md={1}></Col>
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
    <Form.Group controlId="drone_pilot_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drone_pilot_qty"
        value={drone_pilot_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drone_pilot_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drone_pilot_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drone_pilot_uno"
        value={drone_pilot_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drone_pilot_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drone_pilot_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drone_pilot_una"
        value={drone_pilot_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.drone_pilot_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="drone_pilot_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="drone_pilot_rt"
        value={drone_pilot_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.drone_pilot_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dronepilotTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dronepilotTotal"
        value={dronepilotTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dronepilotTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dro_pil_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dro_pil_qty_wrap"
        value={dro_pil_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dro_pil_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dro_pil_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dro_pil_uno_wrap"
        value={dro_pil_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dro_pil_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dro_pil_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dro_pil_una_wrap"
        value={dro_pil_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.dro_pil_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="dro_pil_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dro_pil_rt_wrap"
        value={dro_pil_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.dro_pil_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="dronpiwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dronpiwrapTotal"
        value={dronpiwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dronpiwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="dronpiallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="dronpiallTotal"
        value={dronpiallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.dronpiallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Additional Camera Labour */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Additional Camera Labour</p>
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
    <Form.Group controlId="ot_cam_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_cam_qty_prep"
        value={ot_cam_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_cam_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_cam_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_cam_uno_prep"
        value={ot_cam_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_cam_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_cam_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_cam_una_prep"
        value={ot_cam_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ot_cam_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_cam_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_cam_rt_prep"
        value={ot_cam_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_cam_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othcamprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othcamprepTotal"
        value={othcamprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othcamprepTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>  
    <Col md={1}></Col>
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
    <Form.Group controlId="other_cam_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cam_qty"
        value={other_cam_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_cam_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_cam_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cam_uno"
        value={other_cam_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_cam_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_cam_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cam_una"
        value={other_cam_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_cam_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_cam_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_cam_rt"
        value={other_cam_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_cam_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othercamTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othercamTotal"
        value={othercamTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othercamTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Wrap */}
    <Row className="py-0 d-flex align-items-center mb-1">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline7}`}>Wrap</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_cam_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_cam_qty_wrap"
        value={ot_cam_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_cam_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_cam_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_cam_uno_wrap"
        value={ot_cam_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_cam_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_cam_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_cam_una_wrap"
        value={ot_cam_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ot_cam_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_cam_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_cam_rt_wrap"
        value={ot_cam_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_cam_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othcamwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othcamwrapTotal"
        value={othcamwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othcamwrapTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* Total */}
    <Row className="py-0 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}></p>
    </Col>
    <Col md={7} > 
    <p className={`${styles.Underline}`}>Total</p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="othcamallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othcamallTotal"
        value={othcamallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othcamallTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    </div>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-1 mb-0`}/>
    </Col>
    </Row>
    {/* Stills Photographer */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.91</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Stills Photographer</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stills_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stills_qty"
        value={stills_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stills_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stills_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stills_uno"
        value={stills_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stills_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stills_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stills_una"
        value={stills_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.stills_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stills_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stills_rt"
        value={stills_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stills_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stillsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stillsTotal"
        value={stillsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stillsTotal?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* 6th/7th Days */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.92</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_cam" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_cam"
        value={days6th7th_unit_cam}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_cam" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_cam"
        value={days6th7th_cam}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Overtime */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.93</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_cam" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_cam"
        value={overtime_unit_cam}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_cam" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_cam"
        value={overtime_cam}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Holidays */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.94</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_cam" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_cam"
        value={holidays_unit_cam}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_cam" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_cam"
        value={holidays_cam}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
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
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.95</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_cam" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_cam"
        value={box_rent_unit_cam}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_cam" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_cam"
        value={box_rent_cam}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
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
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.96</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_solo_cam" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_solo_cam"
        value={other_solo_cam}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_solo_cam?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Fringes and Taxes */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>16.97</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Fringes and Taxes</p>
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
    <Form.Group controlId="fringes_taxes_camera" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_camera"
        value={fringes_taxes_camera}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_camera?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    </Row>
    {/* hr */}
    <Row>
    <Col md={1}></Col>
    <Col md={10} >
    <hr className={`${styles.Break1} mt-0 mb-0`}/>
    </Col>
    </Row>
    {/* Camera Total */}
    <Row className="mt-3 pb-2">
    <Col md={1}></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>CAMERA TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="cameralabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cameralabourTotal"
        value={cameralabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cameralabourTotal?.map((message, idx) => (
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

export default Camera 