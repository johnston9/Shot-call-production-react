/* Component in the Budget component to edit TV */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const TV = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataTV, setPostDataTV,
           techsuperTotal, setTechsuperTotal, 
           techdirectTotal, setTechdirectTotal,
           floormanTotal, setFloormanTotal,
           lightdirectTotal, setLightdirectTotal,
           boardmanTotal, setBoardmanTotal,
           audioTotal, setAudioTotal,
           vtroperatorTotal, setVtroperatorTotal,
           stagehandsTotal, setStagehandsTotal,
           othertvTotal, setOthertvTotal, setShow,
           tvspecificlabourTotal, setTvspecificlabourTotal,
           tecsupprepTotal, setTecsupprepTotal,
           tecsupwrapTotal, setTecsupwrapTotal,
           tecsupallTotal, setTecsupallTotal,
           tecdirprepTotal, setTecdirprepTotal,
           tecdirwrapTotal, setTecdirwrapTotal,
           tecdirallTotal, setTecdirallTotal,
           flomanprepTotal, setFlomanprepTotal,
           flomanwrapTotal, setFlomanwrapTotal,
           flomanallTotal, setFlomanallTotal,
           ligdirprepTotal, setLigdirprepTotal,
           ligdirwrapTotal, setLigdirwrapTotal,
           ligdirallTotal, setLigdirallTotal,
           boamanprepTotal, setBoamanprepTotal,
           boamanwrapTotal, setBoamanwrapTotal,
           boamanallTotal, setBoamanallTotal,
           audprepTotal, setAudprepTotal,
           audwrapTotal, setAudwrapTotal,
           audallTotal, setAudallTotal,
           vtropprepTotal, setVtropprepTotal,
           vtropwrapTotal, setVtropwrapTotal,
           vtropallTotal, setVtropallTotal,
           stagehprepTotal, setStagehprepTotal,
           stagehwrapTotal, setStagehwrapTotal,
           stagehallTotal, setStagehallTotal,
           othtvprepTotal, setOthtvprepTotal,
           othtvwrapTotal, setOthtvwrapTotal,
           othtvallTotal, setOthtvallTotal,
        } = props;

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

    // handleChange 
    const handleChange = (event) => {
        setPostDataTV({
        ...postDataTV,
        [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
        });
    }; 
  
    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataTV({
        ...postDataTV,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions

    // Technical Supervisor
    // function to calculate Technical Supervisor shoot on change
    useEffect(() => {
        const addTecsup = () => {
        setTechsuperTotal((parseFloat(tech_super_qty || 0) * 
        parseFloat(tech_super_uno || 0) * 
        parseFloat(tech_super_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTecsup();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tech_super_qty, tech_super_uno, tech_super_rt]);

    // function to calculate Technical Supervisor prep on change
    useEffect(() => {
        const addTecsupprep = () => {
        setTecsupprepTotal((parseFloat(tec_sup_qty_prep || 0) * 
        parseFloat(tec_sup_uno_prep || 0) * 
        parseFloat(tec_sup_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTecsupprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tec_sup_qty_prep, tec_sup_uno_prep, tec_sup_rt_prep]);

    // function to calculate Technical Supervisor wrap on change
    useEffect(() => {
        const addTecsupwrap = () => {
        setTecsupwrapTotal((parseFloat(tec_sup_qty_wrap || 0) * 
        parseFloat(tec_sup_uno_wrap || 0) * 
        parseFloat(tec_sup_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTecsupwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tec_sup_qty_wrap, tec_sup_uno_wrap, tec_sup_rt_wrap]);

    // function to calculate Technical Supervisor all on change
    useEffect(() => {
        const addTecsupall = () => {
        setTecsupallTotal(parseFloat(techsuperTotal || 0) +
        parseFloat(tecsupprepTotal || 0) +
        parseFloat(tecsupwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addTecsupall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [techsuperTotal, tecsupprepTotal, tecsupwrapTotal]);
    
    // Technical Director
    // function to calculate Technical Director shoot on change
    useEffect(() => {
        const addTecdir = () => {
        setTechdirectTotal((parseFloat(tech_direct_qty || 0) * 
        parseFloat(tech_direct_uno || 0) * 
        parseFloat(tech_direct_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTecdir();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tech_direct_qty, tech_direct_uno, tech_direct_rt]);

    // function to calculate Technical Director prep on change
    useEffect(() => {
        const addTecdirprep = () => {
        setTecdirprepTotal((parseFloat(tec_dir_qty_prep || 0) * 
        parseFloat(tec_dir_uno_prep || 0) * 
        parseFloat(tec_dir_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTecdirprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tec_dir_qty_prep, tec_dir_uno_prep, tec_dir_rt_prep]);

    // function to calculate Technical Director wrap on change
    useEffect(() => {
        const addTecdirwrap = () => {
        setTecdirwrapTotal((parseFloat(tec_dir_qty_wrap || 0) * 
        parseFloat(tec_dir_uno_wrap || 0) * 
        parseFloat(tec_dir_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTecdirwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tec_dir_qty_wrap, tec_dir_uno_wrap, tec_dir_rt_wrap]);

    // function to calculate Technical Director all on change
    useEffect(() => {
        const addTecdirall = () => {
        setTecdirallTotal(parseFloat(techdirectTotal || 0) +
        parseFloat(tecdirprepTotal || 0) +
        parseFloat(tecdirwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addTecdirall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [techdirectTotal, tecdirprepTotal, tecdirwrapTotal]);

    // Floor Manager
    // function to calculate Floor Manager shoot on change
    useEffect(() => {
        const addFloman = () => {
        setFloormanTotal((parseFloat(floor_man_qty || 0) * 
        parseFloat(floor_man_uno || 0) * 
        parseFloat(floor_man_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addFloman();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [floor_man_qty, floor_man_uno, floor_man_rt]);

    // function to calculate Floor Manager prep on change
    useEffect(() => {
        const addFlomanprep = () => {
        setFlomanprepTotal((parseFloat(flo_man_qty_prep || 0) * 
        parseFloat(flo_man_uno_prep || 0) * 
        parseFloat(flo_man_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addFlomanprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [flo_man_qty_prep, flo_man_uno_prep, flo_man_rt_prep]);

    // function to calculate Floor Manager wrap on change
    useEffect(() => {
        const addFlomanwrap = () => {
        setFlomanwrapTotal((parseFloat(flo_man_qty_wrap || 0) * 
        parseFloat(flo_man_uno_wrap || 0) * 
        parseFloat(flo_man_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addFlomanwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [flo_man_qty_wrap, flo_man_uno_wrap, flo_man_rt_wrap]);

    // function to calculate Floor Manager all on change
    useEffect(() => {
        const addFlomanall = () => {
        setFlomanallTotal(parseFloat(floormanTotal || 0) +
        parseFloat(flomanprepTotal || 0) +
        parseFloat(flomanwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addFlomanall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [floormanTotal, flomanprepTotal, flomanwrapTotal]);

    // Lighting Director
    // function to calculate Lighting Director shoot on change
    useEffect(() => {
        const addLigdir = () => {
        setLightdirectTotal((parseFloat(light_direct_qty || 0) * 
        parseFloat(light_direct_uno || 0) * 
        parseFloat(light_direct_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addLigdir();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [light_direct_qty, light_direct_uno, light_direct_rt]);

    // function to calculate Lighting Director prep on change
    useEffect(() => {
        const addLigdirprep = () => {
        setLigdirprepTotal((parseFloat(lig_dir_qty_prep || 0) * 
        parseFloat(lig_dir_uno_prep || 0) * 
        parseFloat(lig_dir_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addLigdirprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [lig_dir_qty_prep, lig_dir_uno_prep, lig_dir_rt_prep]);

    // function to calculate Lighting Director wrap on change
    useEffect(() => {
        const addLigdirwrap = () => {
        setLigdirwrapTotal((parseFloat(lig_dir_qty_wrap || 0) * 
        parseFloat(lig_dir_uno_wrap || 0) * 
        parseFloat(lig_dir_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addLigdirwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [lig_dir_qty_wrap, lig_dir_uno_wrap, lig_dir_rt_wrap]);

    // function to calculate Lighting Director all on change
    useEffect(() => {
        const addLigdirall = () => {
        setLigdirallTotal(parseFloat(lightdirectTotal || 0) +
        parseFloat(ligdirprepTotal || 0) +
        parseFloat(ligdirwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addLigdirall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [lightdirectTotal, ligdirprepTotal, ligdirwrapTotal]);

    // Boardman
    // function to calculate Boardman shoot on change
    useEffect(() => {
        const addBoardm = () => {
        setBoardmanTotal((parseFloat(boardman_qty || 0) * 
        parseFloat(boardman_uno || 0) * 
        parseFloat(boardman_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addBoardm();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [boardman_qty, boardman_uno, boardman_rt]);

    // function to calculate Boardman prep on change
    useEffect(() => {
        const addBoardmprep = () => {
        setBoamanprepTotal((parseFloat(boardm_qty_prep || 0) * 
        parseFloat(boardm_uno_prep || 0) * 
        parseFloat(boardm_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addBoardmprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [boardm_qty_prep, boardm_uno_prep, boardm_rt_prep]);

    // function to calculate Boardman wrap on change
    useEffect(() => {
        const addBoardmwrap = () => {
        setBoamanwrapTotal((parseFloat(boardm_qty_wrap || 0) * 
        parseFloat(boardm_uno_wrap || 0) * 
        parseFloat(boardm_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addBoardmwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [boardm_qty_wrap, boardm_uno_wrap, boardm_rt_wrap]);

    // function to calculate Boardman all on change
    useEffect(() => {
        const addBoardmall = () => {
        setBoamanallTotal(parseFloat(boardmanTotal || 0) +
        parseFloat(boamanprepTotal || 0) +
        parseFloat(boamanwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addBoardmall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [boardmanTotal, boamanprepTotal, boamanwrapTotal]);

    // Audio
    // function to calculate Audio shoot on change
    useEffect(() => {
        const addAudio = () => {
        setAudioTotal((parseFloat(audio_qty || 0) * 
        parseFloat(audio_uno || 0) * 
        parseFloat(audio_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAudio();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [audio_qty, audio_uno, audio_rt]);

    // function to calculate Audio prep on change
    useEffect(() => {
        const addAudioprep = () => {
        setAudprepTotal((parseFloat(audio_qty_prep || 0) * 
        parseFloat(audio_uno_prep || 0) * 
        parseFloat(audio_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAudioprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [audio_qty_prep, audio_uno_prep, audio_rt_prep]);

    // function to calculate Audio wrap on change
    useEffect(() => {
        const addAudiowrap = () => {
        setAudwrapTotal((parseFloat(audio_qty_wrap || 0) * 
        parseFloat(audio_uno_wrap || 0) * 
        parseFloat(audio_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAudiowrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [audio_qty_wrap, audio_uno_wrap, audio_rt_wrap]);

    // function to calculate Audio all on change
    useEffect(() => {
        const addAudioall = () => {
        setAudallTotal(parseFloat(audioTotal || 0) +
        parseFloat(audprepTotal || 0) +
        parseFloat(audwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addAudioall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [audioTotal, audprepTotal, audwrapTotal]);

    // VRT Operator
    // function to calculate VRT Operator shoot on change
    useEffect(() => {
        const addVtrope = () => {
        setVtroperatorTotal((parseFloat(vtr_operator_qty || 0) * 
        parseFloat(vtr_operator_uno || 0) * 
        parseFloat(vtr_operator_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addVtrope();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [vtr_operator_qty, vtr_operator_uno, vtr_operator_rt]);

    // function to calculate VRT Operator prep on change
    useEffect(() => {
        const addVtropprep = () => {
        setVtropprepTotal((parseFloat(vtr_op_qty_prep || 0) * 
        parseFloat(vtr_op_uno_prep || 0) * 
        parseFloat(vtr_op_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addVtropprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [vtr_op_qty_prep, vtr_op_uno_prep, vtr_op_rt_prep]);

    // function to calculate VRT Operator wrap on change
    useEffect(() => {
        const addVtropwrap = () => {
        setVtropwrapTotal((parseFloat(vtr_op_qty_wrap || 0) * 
        parseFloat(vtr_op_uno_wrap || 0) * 
        parseFloat(vtr_op_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addVtropwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [vtr_op_qty_wrap, vtr_op_uno_wrap, vtr_op_rt_wrap]);

    // function to calculate VRT Operator all on change
    useEffect(() => {
        const addVtropall = () => {
        setVtropallTotal(parseFloat(vtroperatorTotal || 0) +
        parseFloat(vtropprepTotal || 0) +
        parseFloat(vtropwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addVtropall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [vtroperatorTotal, vtropprepTotal, vtropwrapTotal]);

    // Stagehands
    // function to calculate Stagehands shoot on change
    useEffect(() => {
        const addStageh = () => {
        setStagehandsTotal((parseFloat(stagehands_qty || 0) * 
        parseFloat(stagehands_uno || 0) * 
        parseFloat(stagehands_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addStageh();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [stagehands_qty, stagehands_uno, stagehands_rt]);

    // function to calculate Stagehands prep on change
    useEffect(() => {
        const addStagehprep = () => {
        setStagehprepTotal((parseFloat(stageh_qty_prep || 0) * 
        parseFloat(stageh_uno_prep || 0) * 
        parseFloat(stageh_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addStagehprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [stageh_qty_prep, stageh_uno_prep, stageh_rt_prep]);

    // function to calculate Stagehands wrap on change
    useEffect(() => {
        const addStagehwrap = () => {
        setStagehwrapTotal((parseFloat(stageh_qty_wrap || 0) * 
        parseFloat(stageh_uno_wrap || 0) * 
        parseFloat(stageh_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addStagehwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [stageh_qty_wrap, stageh_uno_wrap, stageh_rt_wrap]);

    // function to calculate Stagehands all on change
    useEffect(() => {
        const addStagehall = () => {
        setStagehallTotal(parseFloat(stagehandsTotal || 0) +
        parseFloat(stagehprepTotal || 0) +
        parseFloat(stagehwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addStagehall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [stagehandsTotal, stagehprepTotal, stagehwrapTotal]);

    // Other TV Labour
    // function to calculate Other TV Labour shoot on change
    useEffect(() => {
        const addOthetv = () => {
        setOthertvTotal((parseFloat(other_tv_qty || 0) * 
        parseFloat(other_tv_uno || 0) * 
        parseFloat(other_tv_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
        addOthetv();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [other_tv_qty, other_tv_uno, other_tv_rt]);

    // function to calculate Other TV Labour prep on change
    useEffect(() => {
        const addOthetvprep = () => {
        setOthtvprepTotal((parseFloat(oth_tv_qty_prep || 0) * 
        parseFloat(oth_tv_uno_prep || 0) * 
        parseFloat(oth_tv_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
          addOthetvprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_tv_qty_prep, oth_tv_uno_prep, oth_tv_rt_prep]);

    // function to calculate Other TV Labour wrap on change
    useEffect(() => {
        const addOthetvwrap = () => {
        setOthtvwrapTotal((parseFloat(oth_tv_qty_wrap || 0) * 
        parseFloat(oth_tv_uno_wrap || 0) * 
        parseFloat(oth_tv_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthetvwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_tv_qty_wrap, oth_tv_uno_wrap, oth_tv_rt_wrap]);

    // function to calculate Other TV Labour all on change
    useEffect(() => {
        const addOthetvall = () => {
        setOthtvallTotal(parseFloat(othertvTotal || 0) +
        parseFloat(othtvprepTotal || 0) +
        parseFloat(othtvwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthetvall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [othertvTotal, othtvprepTotal, othtvwrapTotal]);

    // function to add all TV Specific Labour on change
    useEffect(() => {
        const AddTVLab = () => {
        setTvspecificlabourTotal(
        parseFloat(tecsupallTotal || 0) +
        parseFloat(tecdirallTotal || 0) +
        parseFloat(flomanallTotal || 0) +
        parseFloat(ligdirallTotal || 0) +
        parseFloat(boamanallTotal || 0) +
        parseFloat(audallTotal || 0) +
        parseFloat(vtropallTotal || 0) +
        parseFloat(stagehallTotal || 0) +
        parseFloat(othtvallTotal || 0) +
        parseFloat(days6th7th_tv || 0) +
        parseFloat(overtime_tv || 0) +
        parseFloat(holidays_tv || 0) +
        parseFloat(box_rent_tv || 0) +
        parseFloat(other_solo_tv || 0) +
        parseFloat(fringes_taxes_tv || 0)
        )
        }
        const timer = setTimeout(() => {
            AddTVLab();
        }, 1000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
        }, [tecsupallTotal, tecdirallTotal, flomanallTotal,
            ligdirallTotal, boamanallTotal, audallTotal,
            vtropallTotal, stagehallTotal, othtvallTotal,
            days6th7th_tv, overtime_tv, holidays_tv,
            other_solo_tv, box_rent_tv, fringes_taxes_tv,]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    TV SPECIFIC LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2">
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>TV SPECIFIC LABOUR </p>
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
    {/* Technical Supervisor */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Technical Supervisor</p>
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
    <Form.Group controlId="tec_sup_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_sup_qty_prep"
        value={tec_sup_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_sup_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_sup_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_sup_uno_prep"
        value={tec_sup_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_sup_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_sup_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_sup_una_prep"
        value={tec_sup_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tec_sup_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_sup_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_sup_rt_prep"
        value={tec_sup_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_sup_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tecsupprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tecsupprepTotal"
        value={tecsupprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tecsupprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="tech_super_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_super_qty"
        value={tech_super_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_super_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_super_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_super_uno"
        value={tech_super_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_super_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_super_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_super_una"
        value={tech_super_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tech_super_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_super_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_super_rt"
        value={tech_super_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_super_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="techsuperTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="techsuperTotal"
        value={techsuperTotal}
        readOnly
            />
    </Form.Group>
    {errors?.techsuperTotal?.map((message, idx) => (
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
    <Form.Group controlId="tec_sup_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_sup_qty_wrap"
        value={tec_sup_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_sup_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_sup_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_sup_uno_wrap"
        value={tec_sup_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_sup_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_sup_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_sup_una_wrap"
        value={tec_sup_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tec_sup_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_sup_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_sup_rt_wrap"
        value={tec_sup_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_sup_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tecsupwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tecsupwrapTotal"
        value={tecsupwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tecsupwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="tecsupallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tecsupallTotal"
        value={tecsupallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tecsupallTotal?.map((message, idx) => (
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
    {/* Technical Director */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Technical Director</p>
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
    <Form.Group controlId="tec_dir_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_dir_qty_prep"
        value={tec_dir_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_dir_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_dir_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_dir_uno_prep"
        value={tec_dir_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_dir_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_dir_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_dir_una_prep"
        value={tec_dir_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tec_dir_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_dir_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_dir_rt_prep"
        value={tec_dir_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_dir_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tecdirprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tecdirprepTotal"
        value={tecdirprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tecdirprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="tech_direct_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_direct_qty"
        value={tech_direct_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_direct_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_direct_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_direct_uno"
        value={tech_direct_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_direct_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_direct_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_direct_una"
        value={tech_direct_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tech_direct_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tech_direct_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tech_direct_rt"
        value={tech_direct_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tech_direct_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="techdirectTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="techdirectTotal"
        value={techdirectTotal}
        readOnly
            />
    </Form.Group>
    {errors?.techdirectTotal?.map((message, idx) => (
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
    <Form.Group controlId="tec_dir_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_dir_qty_wrap"
        value={tec_dir_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_dir_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_dir_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_dir_uno_wrap"
        value={tec_dir_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_dir_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_dir_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_dir_una_wrap"
        value={tec_dir_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tec_dir_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tec_dir_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tec_dir_rt_wrap"
        value={tec_dir_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tec_dir_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="tecdirwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tecdirwrapTotal"
        value={tecdirwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tecdirwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="tecdirallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tecdirallTotal"
        value={tecdirallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tecdirallTotal?.map((message, idx) => (
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
    {/* Floor Manager */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Floor Manager</p>
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
    <Form.Group controlId="flo_man_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flo_man_qty_prep"
        value={flo_man_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.flo_man_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="flo_man_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flo_man_uno_prep"
        value={flo_man_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.flo_man_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="flo_man_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flo_man_una_prep"
        value={flo_man_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.flo_man_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="flo_man_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flo_man_rt_prep"
        value={flo_man_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.flo_man_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="flomanprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flomanprepTotal"
        value={flomanprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.flomanprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="floor_man_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="floor_man_qty"
        value={floor_man_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.floor_man_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="floor_man_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="floor_man_uno"
        value={floor_man_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.floor_man_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="floor_man_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="floor_man_una"
        value={floor_man_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.floor_man_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="floor_man_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="floor_man_rt"
        value={floor_man_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.floor_man_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="floormanTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="floormanTotal"
        value={floormanTotal}
        readOnly
            />
    </Form.Group>
    {errors?.floormanTotal?.map((message, idx) => (
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
    <Form.Group controlId="flo_man_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flo_man_qty_wrap"
        value={flo_man_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.flo_man_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="flo_man_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flo_man_uno_wrap"
        value={flo_man_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.flo_man_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="flo_man_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flo_man_una_wrap"
        value={flo_man_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.flo_man_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="flo_man_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flo_man_rt_wrap"
        value={flo_man_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.flo_man_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="flomanwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flomanwrapTotal"
        value={flomanwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.flomanwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="flomanallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="flomanallTotal"
        value={flomanallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.flomanallTotal?.map((message, idx) => (
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
    {/* Lighting Director */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Lighting Director</p>
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
    <Form.Group controlId="lig_dir_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lig_dir_qty_prep"
        value={lig_dir_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lig_dir_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="lig_dir_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lig_dir_uno_prep"
        value={lig_dir_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lig_dir_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="lig_dir_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lig_dir_una_prep"
        value={lig_dir_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.lig_dir_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="lig_dir_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lig_dir_rt_prep"
        value={lig_dir_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lig_dir_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="ligdirprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ligdirprepTotal"
        value={ligdirprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ligdirprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="light_direct_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="light_direct_qty"
        value={light_direct_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.light_direct_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="light_direct_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="light_direct_uno"
        value={light_direct_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.light_direct_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="light_direct_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="light_direct_una"
        value={light_direct_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.light_direct_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="light_direct_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="light_direct_rt"
        value={light_direct_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.light_direct_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="lightdirectTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lightdirectTotal"
        value={lightdirectTotal}
        readOnly
            />
    </Form.Group>
    {errors?.lightdirectTotal?.map((message, idx) => (
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
    <Form.Group controlId="lig_dir_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lig_dir_qty_wrap"
        value={lig_dir_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lig_dir_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="lig_dir_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lig_dir_uno_wrap"
        value={lig_dir_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lig_dir_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="lig_dir_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lig_dir_una_wrap"
        value={lig_dir_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.lig_dir_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="lig_dir_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="lig_dir_rt_wrap"
        value={lig_dir_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.lig_dir_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="ligdirwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ligdirwrapTotal"
        value={ligdirwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ligdirwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="ligdirallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ligdirallTotal"
        value={ligdirallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ligdirallTotal?.map((message, idx) => (
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
    {/* Boardman */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Boardman</p>
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
    <Form.Group controlId="boardm_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardm_qty_prep"
        value={boardm_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardm_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardm_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardm_uno_prep"
        value={boardm_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardm_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardm_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardm_una_prep"
        value={boardm_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.boardm_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardm_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardm_rt_prep"
        value={boardm_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardm_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="boamanprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boamanprepTotal"
        value={boamanprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.boamanprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="boardman_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardman_qty"
        value={boardman_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardman_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardman_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardman_uno"
        value={boardman_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardman_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardman_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardman_una"
        value={boardman_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.boardman_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardman_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardman_rt"
        value={boardman_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardman_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="boardmanTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardmanTotal"
        value={boardmanTotal}
        readOnly
            />
    </Form.Group>
    {errors?.boardmanTotal?.map((message, idx) => (
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
    <Form.Group controlId="boardm_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardm_qty_wrap"
        value={boardm_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardm_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardm_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardm_uno_wrap"
        value={boardm_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardm_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardm_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardm_una_wrap"
        value={boardm_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.boardm_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="boardm_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boardm_rt_wrap"
        value={boardm_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.boardm_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="boamanwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boamanwrapTotal"
        value={boamanwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.boamanwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="boamanallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="boamanallTotal"
        value={boamanallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.boamanallTotal?.map((message, idx) => (
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
    {/* Audio */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Audio</p>
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
    <Form.Group controlId="audio_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_qty_prep"
        value={audio_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_uno_prep"
        value={audio_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_una_prep"
        value={audio_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.audio_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_rt_prep"
        value={audio_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="audprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audprepTotal"
        value={audprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.audprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="audio_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_qty"
        value={audio_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_uno"
        value={audio_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_una"
        value={audio_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.audio_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_rt"
        value={audio_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="audioTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audioTotal"
        value={audioTotal}
        readOnly
            />
    </Form.Group>
    {errors?.audioTotal?.map((message, idx) => (
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
    <Form.Group controlId="audio_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_qty_wrap"
        value={audio_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_uno_wrap"
        value={audio_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_una_wrap"
        value={audio_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.audio_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="audio_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audio_rt_wrap"
        value={audio_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.audio_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="audwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audwrapTotal"
        value={audwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.audwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="audallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="audallTotal"
        value={audallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.audallTotal?.map((message, idx) => (
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
    {/* VRT Operator */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>VRT Operator</p>
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
    <Form.Group controlId="vtr_op_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_op_qty_prep"
        value={vtr_op_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_op_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_op_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_op_uno_prep"
        value={vtr_op_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_op_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_op_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_op_una_prep"
        value={vtr_op_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.vtr_op_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_op_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_op_rt_prep"
        value={vtr_op_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_op_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="vtropprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtropprepTotal"
        value={vtropprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.vtropprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="vtr_operator_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_operator_qty"
        value={vtr_operator_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_operator_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_operator_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_operator_uno"
        value={vtr_operator_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_operator_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_operator_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_operator_una"
        value={vtr_operator_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.vtr_operator_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_operator_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_operator_rt"
        value={vtr_operator_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_operator_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="vtroperatorTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtroperatorTotal"
        value={vtroperatorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.vtroperatorTotal?.map((message, idx) => (
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
    <Form.Group controlId="vtr_op_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_op_qty_wrap"
        value={vtr_op_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_op_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_op_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_op_uno_wrap"
        value={vtr_op_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_op_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_op_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_op_una_wrap"
        value={vtr_op_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.vtr_op_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="vtr_op_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtr_op_rt_wrap"
        value={vtr_op_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.vtr_op_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="vtropwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtropwrapTotal"
        value={vtropwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.vtropwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="vtropallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="vtropallTotal"
        value={vtropallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.vtropallTotal?.map((message, idx) => (
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
    {/* Stagehands */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Stagehands</p>
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
    <Form.Group controlId="stageh_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stageh_qty_prep"
        value={stageh_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stageh_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stageh_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stageh_uno_prep"
        value={stageh_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stageh_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stageh_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stageh_una_prep"
        value={stageh_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.stageh_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stageh_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stageh_rt_prep"
        value={stageh_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stageh_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stagehprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehprepTotal"
        value={stagehprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stagehprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="stagehands_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehands_qty"
        value={stagehands_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stagehands_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stagehands_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehands_uno"
        value={stagehands_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stagehands_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stagehands_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehands_una"
        value={stagehands_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.stagehands_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stagehands_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehands_rt"
        value={stagehands_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stagehands_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stagehandsTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehandsTotal"
        value={stagehandsTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stagehandsTotal?.map((message, idx) => (
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
    <Form.Group controlId="stageh_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stageh_qty_wrap"
        value={stageh_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stageh_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stageh_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stageh_uno_wrap"
        value={stageh_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stageh_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stageh_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stageh_una_wrap"
        value={stageh_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.stageh_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="stageh_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stageh_rt_wrap"
        value={stageh_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.stageh_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="stagehwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehwrapTotal"
        value={stagehwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stagehwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="stagehallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="stagehallTotal"
        value={stagehallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.stagehallTotal?.map((message, idx) => (
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
    {/* Other TV Labour */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Add'l TV Specific Labour</p>
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
    <Form.Group controlId="oth_tv_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_tv_qty_prep"
        value={oth_tv_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_tv_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_tv_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_tv_uno_prep"
        value={oth_tv_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_tv_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_tv_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_tv_una_prep"
        value={oth_tv_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.oth_tv_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_tv_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_tv_rt_prep"
        value={oth_tv_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_tv_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othtvprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othtvprepTotal"
        value={othtvprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othtvprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="other_tv_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_tv_qty"
        value={other_tv_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_tv_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_tv_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_tv_uno"
        value={other_tv_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_tv_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_tv_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_tv_una"
        value={other_tv_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_tv_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_tv_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_tv_rt"
        value={other_tv_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_tv_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othertvTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othertvTotal"
        value={othertvTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othertvTotal?.map((message, idx) => (
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
    <Form.Group controlId="oth_tv_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_tv_qty_wrap"
        value={oth_tv_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_tv_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_tv_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_tv_uno_wrap"
        value={oth_tv_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_tv_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_tv_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_tv_una_wrap"
        value={oth_tv_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.oth_tv_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_tv_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_tv_rt_wrap"
        value={oth_tv_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_tv_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othtvwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othtvwrapTotal"
        value={othtvwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othtvwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="othtvallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othtvallTotal"
        value={othtvallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othtvallTotal?.map((message, idx) => (
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
    {/* 6th/7th Days */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.91</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_tv" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_tv"
        value={days6th7th_unit_tv}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_tv?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_tv" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_tv"
        value={days6th7th_tv}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_tv?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>21.92</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_tv" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_tv"
        value={overtime_unit_tv}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_tv?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_tv" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_tv"
        value={overtime_tv}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_tv?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>21.93</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_tv" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_tv"
        value={holidays_unit_tv}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_tv?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_tv" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_tv"
        value={holidays_tv}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_tv?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>21.94</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_tv" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_tv"
        value={box_rent_unit_tv}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_tv?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_tv" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_tv"
        value={box_rent_tv}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_tv?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>21.95</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_solo_tv" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_solo_tv"
        value={other_solo_tv}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_solo_tv?.map((message, idx) => (
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
    {/* Fringes & Taxes */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>21.96</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.Underline}`}>Fringes & Taxes</p>
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
    <Form.Group controlId="fringes_taxes_tv" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_tv"
        value={fringes_taxes_tv}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_tv?.map((message, idx) => (
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
    {/* TV Total */}
    <Row className="mt-3 pb-2">
    <Col md={1}></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>TV SPECIFIC LABOUR TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="tvspecificlabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tvspecificlabourTotal"
        value={tvspecificlabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.tvspecificlabourTotal?.map((message, idx) => (
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

export default TV