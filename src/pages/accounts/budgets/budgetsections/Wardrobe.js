/* Component in the Budget component to edit Wardrobe */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Wardrobe = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataWardrobe, setPostDataWardrobe,
           costumedesignerTotal, setCostumedesignerTotal,
           assistcosdesignerTotal, setAssistcosdesignerTotal,
           headwardrobeTotal, setHeadwardrobeTotal,
           wardrobeassistTotal, setWardrobeassistTotal,
           truckcostumerTotal, setTruckcostumerTotal,
           otherwardrobeTotal, setOtherwardrobeTotal, setShow,
           wardrobelabourTotal, setWardrobelabourTotal,
           cosdesprepTotal, setCosdesprepTotal,
           cosdeswrapTotal, setCosdeswrapTotal,
           cosdesallTotal, setCosdesallTotal,
           ascosdesprepTotal, setAscosdesprepTotal,
           ascosdeswrapTotal, setAscosdeswrapTotal,
           ascosdesallTotal, setAscosdesallTotal,
           hewarprepTotal, setHewarprepTotal,
           hewarwrapTotal, setHewarwrapTotal,
           hewarallTotal, setHewarallTotal,
           warasprepTotal, setWarasprepTotal,
           waraswrapTotal, setWaraswrapTotal,
           warasallTotal, setWarasallTotal,
           trucosprepTotal, setTrucosprepTotal,
           trucoswrapTotal, setTrucoswrapTotal,
           trucosallTotal, setTrucosallTotal,
           shopperTotal, setShopperTotal,
           shopprepTotal, setShopprepTotal,
           shopallTotal, setShopallTotal,
           othwarprepTotal, setOthwarprepTotal,
           othwarwrapTotal, setOthwarwrapTotal,
           othwarallTotal, setOthwarallTotal,
           warcoorTotal, setWarcoorTotal,
           warcoprepTotal, setWarcoprepTotal,
           warcowrapTotal, setWarcowrapTotal,
           warcoallTotal, setWarcoallTotal,
           wartrainTotal, setWartrainTotal,
           wartraprepTotal, setWartraprepTotal,
           wartrawrapTotal, setWartrawrapTotal,
           wartraallTotal, setWartraallTotal,
           wardayTotal, setWardayTotal,
    } = props;
    
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

    // handleChange 
    const handleChange = (event) => {
        setPostDataWardrobe({
        ...postDataWardrobe,
        [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
        });
    };

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataWardrobe({
        ...postDataWardrobe,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions

    // costume designer
    // function to calculate costume designer shoot on change
    useEffect(() => {
        const addCosdes = () => {
        setCostumedesignerTotal((parseFloat(costume_designer_quantity || 0) * 
        parseFloat(costume_designer_units_number || 0) * 
        parseFloat(costume_designer_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCosdes();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [costume_designer_quantity, costume_designer_units_number,
    costume_designer_rate]);

    // function to calculate costume designer prep on change
    useEffect(() => {
        const addCosdesprep = () => {
        setCosdesprepTotal((parseFloat(cos_des_qty_prep || 0) * 
        parseFloat(cos_des_uno_prep || 0) * 
        parseFloat(cos_des_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCosdesprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cos_des_qty_prep, cos_des_uno_prep, cos_des_rt_prep]);

    // function to calculate costume designer wrap on change
    useEffect(() => {
        const addCosdeswrap = () => {
        setCosdeswrapTotal((parseFloat(cos_des_qty_wrap || 0) * 
        parseFloat(cos_des_uno_wrap || 0) * 
        parseFloat(cos_des_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addCosdeswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [cos_des_qty_wrap, cos_des_uno_wrap, cos_des_rt_wrap]);

    // function to calculate costume designer all on change
    useEffect(() => {
        const addCosdesall = () => {
        setCosdesallTotal(parseFloat(costumedesignerTotal || 0) +
        parseFloat(cosdesprepTotal || 0) +
        parseFloat(cosdeswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addCosdesall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [costumedesignerTotal, cosdesprepTotal, cosdeswrapTotal]);
    
    // function to calculate assistant costume designer shoot on change
    useEffect(() => {
        const addAsscos = () => {
        setAssistcosdesignerTotal((parseFloat(assist_costume_designer_quantity || 0) * 
        parseFloat(assist_costume_designer_units_number || 0) * 
        parseFloat(assist_costume_designer_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAsscos();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [assist_costume_designer_quantity, assist_costume_designer_units_number,
    assist_costume_designer_rate]);

    // function to calculate assistant costume designer prep on change
    useEffect(() => {
        const addAsscosprep = () => {
        setAscosdesprepTotal((parseFloat(as_cos_des_qty_prep || 0) * 
        parseFloat(as_cos_des_uno_prep || 0) * 
        parseFloat(as_cos_des_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAsscosprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [as_cos_des_qty_prep, as_cos_des_uno_prep, as_cos_des_rt_prep]);

    // function to calculate assistant costume designer wrap on change
    useEffect(() => {
        const addAsscoswrap = () => {
        setAscosdeswrapTotal((parseFloat(as_cos_des_qty_wrap || 0) * 
        parseFloat(as_cos_des_uno_wrap || 0) * 
        parseFloat(as_cos_des_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addAsscoswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [as_cos_des_qty_wrap, as_cos_des_uno_wrap, as_cos_des_rt_wrap]);

    // function to calculate assistant costume designer all on change
    useEffect(() => {
        const addAsscosall = () => {
        setAscosdesallTotal(parseFloat(assistcosdesignerTotal || 0) +
        parseFloat(ascosdesprepTotal || 0) +
        parseFloat(ascosdeswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addAsscosall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [assistcosdesignerTotal, ascosdesprepTotal, ascosdeswrapTotal]);

    // head wardrobe/supervisor
    // function to calculate head wardrobe shoot on change
    useEffect(() => {
        const addHeawar = () => {
        setHeadwardrobeTotal((parseFloat(head_wardrobe_quantity || 0) * 
        parseFloat(head_wardrobe_units_number || 0) * 
        parseFloat(head_wardrobe_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addHeawar();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [head_wardrobe_quantity, head_wardrobe_units_number,
    head_wardrobe_rate]);

    // function to calculate head wardrobe prep on change
    useEffect(() => {
        const addHeawarprep = () => {
        setHewarprepTotal((parseFloat(he_war_qty_prep || 0) * 
        parseFloat(he_war_uno_prep || 0) * 
        parseFloat(he_war_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addHeawarprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [he_war_qty_prep, he_war_uno_prep, he_war_rt_prep]);

    // function to calculate head wardrobe wrap on change
    useEffect(() => {
        const addHeawarwrap = () => {
        setHewarwrapTotal((parseFloat(he_war_qty_wrap || 0) * 
        parseFloat(he_war_uno_wrap || 0) * 
        parseFloat(he_war_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addHeawarwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [he_war_qty_wrap, he_war_uno_wrap, he_war_rt_wrap]);

    // function to calculate head wardrobe all on change
    useEffect(() => {
        const addHeawarall = () => {
        setHewarallTotal(parseFloat(headwardrobeTotal || 0) +
        parseFloat(hewarprepTotal || 0) +
        parseFloat(hewarwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addHeawarall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [headwardrobeTotal, hewarprepTotal, hewarwrapTotal]);

    // wardrobe assistant/set costumer
    // function to calculate wardrobe assistant shoot on change
    useEffect(() => {
        const addWarass = () => {
        setWardrobeassistTotal((parseFloat(wardrobe_assist_quantity || 0) * 
        parseFloat(wardrobe_assist_units_number || 0) * 
        parseFloat(wardrobe_assist_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWarass();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [wardrobe_assist_quantity, wardrobe_assist_units_number,
    wardrobe_assist_rate]);

    // function to calculate wardrobe assistant prep on change
    useEffect(() => {
        const addWarassprep = () => {
        setWarasprepTotal((parseFloat(war_as_qty_prep || 0) * 
        parseFloat(war_as_uno_prep || 0) * 
        parseFloat(war_as_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWarassprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [war_as_qty_prep, war_as_uno_prep, war_as_rt_prep]);

    // function to calculate wardrobe assistant wrap on change
    useEffect(() => {
        const addWarasswrap = () => {
        setWaraswrapTotal((parseFloat(war_as_qty_wrap || 0) * 
        parseFloat(war_as_uno_wrap || 0) * 
        parseFloat(war_as_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWarasswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [war_as_qty_wrap, war_as_uno_wrap, war_as_rt_wrap]);

    // function to calculate wardrobe assistant all on change
    useEffect(() => {
        const addWarassall = () => {
        setWarasallTotal(parseFloat(wardrobeassistTotal || 0) +
        parseFloat(warasprepTotal || 0) +
        parseFloat(waraswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addWarassall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [wardrobeassistTotal, warasprepTotal, waraswrapTotal]);

    // truck costumer
    // function to calculate truck costumer shoot on change
    useEffect(() => {
        const addTrucus = () => {
        setTruckcostumerTotal((parseFloat(truck_costumer_quantity || 0) * 
        parseFloat(truck_costumer_units_number || 0) * 
        parseFloat(truck_costumer_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTrucus();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [truck_costumer_quantity, truck_costumer_units_number,
    truck_costumer_rate]);

    // function to calculate truck costumer prep on change
    useEffect(() => {
        const addTrucusprep = () => {
        setTrucosprepTotal((parseFloat(tru_cos_qty_prep || 0) * 
        parseFloat(tru_cos_uno_prep || 0) * 
        parseFloat(tru_cos_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTrucusprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tru_cos_qty_prep, tru_cos_uno_prep, tru_cos_rt_prep]);

    // function to calculate truck costumer wrap on change
    useEffect(() => {
        const addTrucuswrap = () => {
        setTrucoswrapTotal((parseFloat(tru_cos_qty_wrap || 0) * 
        parseFloat(tru_cos_uno_wrap || 0) * 
        parseFloat(tru_cos_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addTrucuswrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [tru_cos_qty_wrap, tru_cos_uno_wrap, tru_cos_rt_wrap]);

    // function to calculate truck costumer all on change
    useEffect(() => {
        const addTrucusall = () => {
        setTrucosallTotal(parseFloat(truckcostumerTotal || 0) +
        parseFloat(trucosprepTotal || 0) +
        parseFloat(trucoswrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addTrucusall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [truckcostumerTotal, trucosprepTotal, trucoswrapTotal]);

    // shopper
    // function to calculate shopper shoot on change
    useEffect(() => {
        const addShop = () => {
        setShopperTotal((parseFloat(shopper_qty || 0) * 
        parseFloat(shopper_uno || 0) * 
        parseFloat(shopper_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addShop();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [shopper_qty, shopper_uno, shopper_rt]);

    // function to calculate shopper prep on change
    useEffect(() => {
        const addShopprep = () => {
        setShopprepTotal((parseFloat(shopper_qty_prep || 0) * 
        parseFloat(shopper_uno_prep || 0) * 
        parseFloat(shopper_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addShopprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [shopper_qty_prep, shopper_uno_prep, shopper_rt_prep]);

    // function to calculate shopper all on change
    useEffect(() => {
        const addShopall = () => {
        setShopallTotal(parseFloat(shopperTotal || 0) +
        parseFloat(shopprepTotal || 0))
        }
        const timer = setTimeout(() => {
            addShopall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [shopperTotal, shopprepTotal]);

    // other wardrobe labour/PA
    // function to calculate other wardrobe labour shoot on change
    useEffect(() => {
        const addOthwar = () => {
        setOtherwardrobeTotal((parseFloat(other_wardrobe_labour_quantity || 0) * 
        parseFloat(other_wardrobe_labour_units_number || 0) * 
        parseFloat(other_wardrobe_labour_rate || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthwar();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [other_wardrobe_labour_quantity, other_wardrobe_labour_units_number,
    other_wardrobe_labour_rate]);

    // function to calculate other wardrobe labour prep on change
    useEffect(() => {
        const addOthwarprep = () => {
        setOthwarprepTotal((parseFloat(ot_war_qty_prep || 0) * 
        parseFloat(ot_war_uno_prep || 0) * 
        parseFloat(ot_war_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthwarprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ot_war_qty_prep, ot_war_uno_prep, ot_war_rt_prep]);

    // function to calculate other wardrobe labour wrap on change
    useEffect(() => {
        const addOthwarwrap = () => {
        setOthwarwrapTotal((parseFloat(ot_war_qty_wrap || 0) * 
        parseFloat(ot_war_uno_wrap || 0) * 
        parseFloat(ot_war_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthwarwrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [ot_war_qty_wrap, ot_war_uno_wrap, ot_war_rt_wrap]);

    // function to calculate other wardrobe labour all on change
    useEffect(() => {
        const addOthwarall = () => {
        setOthwarallTotal(parseFloat(otherwardrobeTotal || 0) +
        parseFloat(othwarprepTotal || 0) +
        parseFloat(othwarwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthwarall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [otherwardrobeTotal, othwarprepTotal, othwarwrapTotal]);

    // Wardrobe Coordinator
    // function to calculate Wardrobe Coordinator shoot on change
    useEffect(() => {
        const addWarcoor = () => {
        setWarcoorTotal((parseFloat(war_coor_qty || 0) * 
        parseFloat(war_coor_uno || 0) * 
        parseFloat(war_coor_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWarcoor();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [war_coor_qty, war_coor_uno, war_coor_rt]);

    // function to calculate Wardrobe Coordinator prep on change
    useEffect(() => {
        const addWarcoprep = () => {
        setWarcoprepTotal((parseFloat(war_coor_qty_prep || 0) * 
        parseFloat(war_coor_uno_prep || 0) * 
        parseFloat(war_coor_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWarcoprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [war_coor_qty_prep, war_coor_uno_prep, war_coor_rt_prep]);

    // function to calculate Wardrobe Coordinator wrap on change
    useEffect(() => {
        const addWarcowrap = () => {
        setWarcowrapTotal((parseFloat(war_coor_qty_wrap || 0) * 
        parseFloat(war_coor_uno_wrap || 0) * 
        parseFloat(war_coor_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWarcowrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [war_coor_qty_wrap, war_coor_uno_wrap, war_coor_rt_wrap]);

    // function to calculate Wardrobe Coordinator all on change
    useEffect(() => {
        const addWarcoall = () => {
        setWarcoallTotal(parseFloat(warcoorTotal || 0) +
        parseFloat(warcoprepTotal || 0) +
        parseFloat(warcowrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addWarcoall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [warcoorTotal, warcoprepTotal, warcowrapTotal]);

    // Wardrobe Trainee
    // function to calculate Wardrobe Trainee shoot on change
    useEffect(() => {
        const addWartrain = () => {
        setWartrainTotal((parseFloat(train_qty || 0) * 
        parseFloat(train_uno || 0) * 
        parseFloat(train_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWartrain();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [train_qty, train_uno, train_rt]);

    // function to calculate Wardrobe Trainee prep on change
    useEffect(() => {
        const addWartraprep = () => {
        setWartraprepTotal((parseFloat(train_qty_prep || 0) * 
        parseFloat(train_uno_prep || 0) * 
        parseFloat(train_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWartraprep();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [train_qty_prep, train_uno_prep, train_rt_prep]);

    // function to calculate Wardrobe Trainee wrap on change
    useEffect(() => {
        const addWartrawrap = () => {
        setWartrawrapTotal((parseFloat(train_qty_wrap || 0) * 
        parseFloat(train_uno_wrap || 0) * 
        parseFloat(train_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addWartrawrap();
        }, 2000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [train_qty_wrap, train_uno_wrap, train_rt_wrap]);

    // function to calculate Wardrobe Trainee all on change
    useEffect(() => {
        const addWartraall = () => {
        setWartraallTotal(parseFloat(wartrainTotal || 0) +
        parseFloat(wartraprepTotal || 0) +
        parseFloat(wartrawrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addWartraall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [wartrainTotal, wartraprepTotal, wartrawrapTotal]);

    // function to calculate Wardrobe Dailies on change
  useEffect(() => {
    const addWarday = () => {
      setWardayTotal((parseFloat(day_war_qty || 0) * 
      parseFloat(day_war_uno || 0) * 
      parseFloat(day_war_rt || 0)).toFixed())
    }
    const timer = setTimeout(() => {
        addWarday();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [day_war_qty, day_war_uno, day_war_rt]);

    // function to add all Wardrobe Labour on change
    useEffect(() => {
        const addWarlab = () => {
        setWardrobelabourTotal(
        parseFloat(cosdesallTotal || 0) +
        parseFloat(ascosdesallTotal || 0) +
        parseFloat(hewarallTotal || 0) +
        parseFloat(warasallTotal || 0) +
        parseFloat(trucosallTotal || 0) +
        parseFloat(shopallTotal || 0) +
        parseFloat(othwarallTotal || 0) + 
        parseFloat(warcoallTotal || 0) +
        parseFloat(wartraallTotal || 0) +
        parseFloat(wardayTotal || 0) +
        parseFloat(tailors || 0) +
        parseFloat(textile_ar || 0) +
        parseFloat(days6th7th_war || 0) +
        parseFloat(overtime_war || 0) +
        parseFloat(holidays_war || 0) +
        parseFloat(box_rent_war || 0) +
        parseFloat(other_solo_war || 0) +
        parseFloat(fringes_taxes_wardrobe || 0)
        )
        }
        const timer = setTimeout(() => {
            addWarlab();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
        }, [cosdesallTotal, ascosdesallTotal, hewarallTotal, warasallTotal, 
            trucosallTotal, othwarallTotal, shopallTotal, tailors,
            warcoallTotal, wartraallTotal, wardayTotal,
            textile_ar, days6th7th_war, overtime_war, holidays_war,
            box_rent_war, other_solo_war, fringes_taxes_wardrobe,]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    WARDROBE LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2">
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>Wardrobe Labour</p>
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
    {/* Costume Designer */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Costume Designer</p>
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
    <Form.Group controlId="cos_des_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cos_des_qty_prep"
        value={cos_des_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cos_des_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cos_des_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cos_des_uno_prep"
        value={cos_des_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cos_des_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cos_des_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cos_des_una_prep"
        value={cos_des_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cos_des_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cos_des_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cos_des_rt_prep"
        value={cos_des_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cos_des_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="cosdesprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cosdesprepTotal"
        value={cosdesprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cosdesprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="costume_designer_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="costume_designer_quantity"
        value={costume_designer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.costume_designer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="costume_designer_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="costume_designer_units_number"
        value={costume_designer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.costume_designer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="costume_designer_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="costume_designer_units_name"
        value={costume_designer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.costume_designer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="costume_designer_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="costume_designer_rate"
        value={costume_designer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.costume_designer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="costumedesignerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="costumedesignerTotal"
        value={costumedesignerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.costumedesignerTotal?.map((message, idx) => (
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
    <Form.Group controlId="cos_des_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cos_des_qty_wrap"
        value={cos_des_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cos_des_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cos_des_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cos_des_uno_wrap"
        value={cos_des_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cos_des_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cos_des_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cos_des_una_wrap"
        value={cos_des_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.cos_des_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="cos_des_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cos_des_rt_wrap"
        value={cos_des_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.cos_des_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="cosdeswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cosdeswrapTotal"
        value={cosdeswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cosdeswrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="cosdesallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="cosdesallTotal"
        value={cosdesallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.cosdesallTotal?.map((message, idx) => (
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
    {/* Assistant Costume Designer */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Assistant Costume Designer</p>
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
    <Form.Group controlId="as_cos_des_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_cos_des_qty_prep"
        value={as_cos_des_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_cos_des_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_cos_des_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_cos_des_uno_prep"
        value={as_cos_des_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_cos_des_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_cos_des_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_cos_des_una_prep"
        value={as_cos_des_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.as_cos_des_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_cos_des_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_cos_des_rt_prep"
        value={as_cos_des_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_cos_des_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="ascosdesprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ascosdesprepTotal"
        value={ascosdesprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ascosdesprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="assist_costume_designer_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_costume_designer_quantity"
        value={assist_costume_designer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_costume_designer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_costume_designer_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_costume_designer_units_number"
        value={assist_costume_designer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_costume_designer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_costume_designer_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_costume_designer_units_name"
        value={assist_costume_designer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.assist_costume_designer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="assist_costume_designer_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assist_costume_designer_rate"
        value={assist_costume_designer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.assist_costume_designer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="assistcosdesignerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="assistcosdesignerTotal"
        value={assistcosdesignerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.assistcosdesignerTotal?.map((message, idx) => (
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
    <Form.Group controlId="as_cos_des_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_cos_des_qty_wrap"
        value={as_cos_des_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_cos_des_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_cos_des_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_cos_des_uno_wrap"
        value={as_cos_des_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_cos_des_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_cos_des_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_cos_des_una_wrap"
        value={as_cos_des_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.as_cos_des_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="as_cos_des_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="as_cos_des_rt_wrap"
        value={as_cos_des_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.as_cos_des_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="ascosdeswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ascosdeswrapTotal"
        value={ascosdeswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ascosdeswrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="ascosdesallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ascosdesallTotal"
        value={ascosdesallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.ascosdesallTotal?.map((message, idx) => (
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
    {/* Wardrobe Supervisor */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Wardrobe Supervisor</p>
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
    <Form.Group controlId="he_war_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_war_qty_prep"
        value={he_war_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_war_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_war_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_war_uno_prep"
        value={he_war_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_war_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_war_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_war_una_prep"
        value={he_war_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.he_war_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_war_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_war_rt_prep"
        value={he_war_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_war_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="hewarprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hewarprepTotal"
        value={hewarprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hewarprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="head_wardrobe_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wardrobe_quantity"
        value={head_wardrobe_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wardrobe_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wardrobe_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wardrobe_units_number"
        value={head_wardrobe_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wardrobe_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wardrobe_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wardrobe_units_name"
        value={head_wardrobe_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.head_wardrobe_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="head_wardrobe_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="head_wardrobe_rate"
        value={head_wardrobe_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.head_wardrobe_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headwardrobeTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headwardrobeTotal"
        value={headwardrobeTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headwardrobeTotal?.map((message, idx) => (
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
    <Form.Group controlId="he_war_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_war_qty_wrap"
        value={he_war_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_war_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_war_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_war_uno_wrap"
        value={he_war_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_war_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_war_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_war_una_wrap"
        value={he_war_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.he_war_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="he_war_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="he_war_rt_wrap"
        value={he_war_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.he_war_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="hewarwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hewarwrapTotal"
        value={hewarwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hewarwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="hewarallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hewarallTotal"
        value={hewarallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hewarallTotal?.map((message, idx) => (
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
    {/* Set Costumer */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Set Costumer</p>
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
    <Form.Group controlId="ot_war_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_war_qty_prep"
        value={ot_war_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_war_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_war_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_war_uno_prep"
        value={ot_war_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_war_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_war_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_war_una_prep"
        value={ot_war_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ot_war_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_war_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_war_rt_prep"
        value={ot_war_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_war_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othwarprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othwarprepTotal"
        value={othwarprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othwarprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="other_wardrobe_labour_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wardrobe_labour_quantity"
        value={other_wardrobe_labour_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wardrobe_labour_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wardrobe_labour_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wardrobe_labour_units_number"
        value={other_wardrobe_labour_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wardrobe_labour_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wardrobe_labour_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wardrobe_labour_units_name"
        value={other_wardrobe_labour_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_wardrobe_labour_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_wardrobe_labour_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_wardrobe_labour_rate"
        value={other_wardrobe_labour_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_wardrobe_labour_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="otherwardrobeTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="otherwardrobeTotal"
        value={otherwardrobeTotal}
        readOnly
            />
    </Form.Group>
    {errors?.otherwardrobeTotal?.map((message, idx) => (
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
    <Form.Group controlId="ot_war_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_war_qty_wrap"
        value={ot_war_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_war_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_war_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_war_uno_wrap"
        value={ot_war_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_war_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_war_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_war_una_wrap"
        value={ot_war_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.ot_war_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="ot_war_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="ot_war_rt_wrap"
        value={ot_war_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.ot_war_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othwarwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othwarwrapTotal"
        value={othwarwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othwarwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="othwarallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othwarallTotal"
        value={othwarallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othwarallTotal?.map((message, idx) => (
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
    {/* Truck Costumer */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Truck Costumer</p>
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
    <Form.Group controlId="tru_cos_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tru_cos_qty_prep"
        value={tru_cos_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tru_cos_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tru_cos_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tru_cos_uno_prep"
        value={tru_cos_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tru_cos_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tru_cos_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tru_cos_una_prep"
        value={tru_cos_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tru_cos_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tru_cos_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tru_cos_rt_prep"
        value={tru_cos_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tru_cos_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="trucosprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="trucosprepTotal"
        value={trucosprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.trucosprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="truck_costumer_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="truck_costumer_quantity"
        value={truck_costumer_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.truck_costumer_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="truck_costumer_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="truck_costumer_units_number"
        value={truck_costumer_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.truck_costumer_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="truck_costumer_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="truck_costumer_units_name"
        value={truck_costumer_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.truck_costumer_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="truck_costumer_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="truck_costumer_rate"
        value={truck_costumer_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.truck_costumer_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="truckcostumerTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="truckcostumerTotal"
        value={truckcostumerTotal}
        readOnly
            />
    </Form.Group>
    {errors?.truckcostumerTotal?.map((message, idx) => (
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
    <Form.Group controlId="tru_cos_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tru_cos_qty_wrap"
        value={tru_cos_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tru_cos_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tru_cos_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tru_cos_uno_wrap"
        value={tru_cos_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tru_cos_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tru_cos_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tru_cos_una_wrap"
        value={tru_cos_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.tru_cos_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="tru_cos_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tru_cos_rt_wrap"
        value={tru_cos_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tru_cos_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="trucoswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="trucoswrapTotal"
        value={trucoswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.trucoswrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="trucosallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="trucosallTotal"
        value={trucosallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.trucosallTotal?.map((message, idx) => (
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
    {/* Shopper */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Shopper</p>
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
    <Form.Group controlId="shopper_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopper_qty_prep"
        value={shopper_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.shopper_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="shopper_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopper_uno_prep"
        value={shopper_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.shopper_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="shopper_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopper_una_prep"
        value={shopper_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.shopper_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="shopper_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopper_rt_prep"
        value={shopper_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.shopper_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="shopprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopprepTotal"
        value={shopprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.shopprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="shopper_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopper_qty"
        value={shopper_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.shopper_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="shopper_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopper_uno"
        value={shopper_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.shopper_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="shopper_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopper_una"
        value={shopper_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.shopper_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="shopper_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopper_rt"
        value={shopper_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.shopper_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="shopperTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopperTotal"
        value={shopperTotal}
        readOnly
            />
    </Form.Group>
    {errors?.shopperTotal?.map((message, idx) => (
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
    <Form.Group controlId="shopallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="shopallTotal"
        value={shopallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.shopallTotal?.map((message, idx) => (
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
    {/* Wardrobe Assistant/Costume PA */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Wardrobe Assistant/Costume PA</p>
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
    <Form.Group controlId="war_as_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_as_qty_prep"
        value={war_as_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_as_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_as_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_as_uno_prep"
        value={war_as_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_as_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_as_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_as_una_prep"
        value={war_as_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.war_as_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_as_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_as_rt_prep"
        value={war_as_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_as_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="warasprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="warasprepTotal"
        value={warasprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.warasprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="wardrobe_assist_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobe_assist_quantity"
        value={wardrobe_assist_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.wardrobe_assist_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="wardrobe_assist_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobe_assist_units_number"
        value={wardrobe_assist_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.wardrobe_assist_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="wardrobe_assist_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobe_assist_units_name"
        value={wardrobe_assist_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.wardrobe_assist_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="wardrobe_assist_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobe_assist_rate"
        value={wardrobe_assist_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.wardrobe_assist_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="wardrobeassistTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobeassistTotal"
        value={wardrobeassistTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wardrobeassistTotal?.map((message, idx) => (
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
    <Form.Group controlId="war_as_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_as_qty_wrap"
        value={war_as_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_as_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_as_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_as_uno_wrap"
        value={war_as_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_as_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_as_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_as_una_wrap"
        value={war_as_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.war_as_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_as_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_as_rt_wrap"
        value={war_as_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_as_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="waraswrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="waraswrapTotal"
        value={waraswrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.waraswrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="warasallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="warasallTotal"
        value={warasallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.warasallTotal?.map((message, idx) => (
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
    {/* Wardrobe Coordinator */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Wardrobe Coordinator</p>
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
    <Form.Group controlId="war_coor_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_qty_prep"
        value={war_coor_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_coor_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_coor_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_uno_prep"
        value={war_coor_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_coor_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_coor_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_una_prep"
        value={war_coor_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.war_coor_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_coor_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_rt_prep"
        value={war_coor_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_coor_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="warcoprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="warcoprepTotal"
        value={warcoprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.warcoprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="war_coor_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_qty"
        value={war_coor_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_coor_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_coor_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_uno"
        value={war_coor_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_coor_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_coor_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_una"
        value={war_coor_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.war_coor_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_coor_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_rt"
        value={war_coor_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_coor_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="warcoorTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="warcoorTotal"
        value={warcoorTotal}
        readOnly
            />
    </Form.Group>
    {errors?.warcoorTotal?.map((message, idx) => (
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
    <Form.Group controlId="war_coor_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_qty_wrap"
        value={war_coor_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_coor_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_coor_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_uno_wrap"
        value={war_coor_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_coor_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_coor_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_una_wrap"
        value={war_coor_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.war_coor_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="war_coor_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="war_coor_rt_wrap"
        value={war_coor_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.war_coor_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="warcowrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="warcowrapTotal"
        value={warcowrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.warcowrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="warcoallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="warcoallTotal"
        value={warcoallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.warcoallTotal?.map((message, idx) => (
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
    {/* Wardrobe Trainee */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.90</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Wardrobe Trainee</p>
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
    <Form.Group controlId="train_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_qty_prep"
        value={train_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.train_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="train_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_uno_prep"
        value={train_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.train_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="train_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_una_prep"
        value={train_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.train_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="train_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_rt_prep"
        value={train_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.train_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="wartraprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wartraprepTotal"
        value={wartraprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wartraprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="train_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_qty"
        value={train_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.train_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="train_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_uno"
        value={train_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.train_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="train_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_una"
        value={train_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.train_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="train_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_rt"
        value={train_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.train_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="wartrainTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wartrainTotal"
        value={wartrainTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wartrainTotal?.map((message, idx) => (
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
    <Form.Group controlId="train_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_qty_wrap"
        value={train_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.train_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="train_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_uno_wrap"
        value={train_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.train_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="train_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_una_wrap"
        value={train_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.train_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="train_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="train_rt_wrap"
        value={train_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.train_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="wartrawrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wartrawrapTotal"
        value={wartrawrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wartrawrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="wartraallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wartraallTotal"
        value={wartraallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wartraallTotal?.map((message, idx) => (
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
    {/* Wardrobe Dailies */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.91</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.BoldBlack}`}>Wardrobe Dailies</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="day_war_qty" 
        className={`${styles.Width100} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="day_war_qty"
        value={day_war_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.day_war_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="day_war_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="day_war_uno"
        value={day_war_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.day_war_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="day_war_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="day_war_una"
        value={day_war_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.day_war_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="day_war_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="day_war_rt"
        value={day_war_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.day_war_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="wardayTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardayTotal"
        value={wardayTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wardayTotal?.map((message, idx) => (
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
    {/* Tailors, Cutters, Sewers, Drapers */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.92</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.BoldBlack}`}>Tailors, Cutters, Sewers, Drapers</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="tailors" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="tailors"
        value={tailors}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.tailors?.map((message, idx) => (
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
    {/* Textile Artist, Dyer, Breakdown Artist */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1}></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>14.93</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.BoldBlack}`}>Textile Artist, Dyer, Breakdown Artist</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="textile_ar" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="textile_ar"
        value={textile_ar}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.textile_ar?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>14.94</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_war" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_war"
        value={days6th7th_unit_war}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_war?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_war" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_war"
        value={days6th7th_war}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_war?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>14.95</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_war" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_war"
        value={overtime_unit_war}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_war?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_war" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_war"
        value={overtime_war}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_war?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>14.96</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_war" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_war"
        value={holidays_unit_war}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_war?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_war" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_war"
        value={holidays_war}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_war?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>14.97</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_war" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_war"
        value={box_rent_unit_war}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_war?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_war" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_war"
        value={box_rent_war}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_war?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>14.98</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_solo_war" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_solo_war"
        value={other_solo_war}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_solo_war?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>14.99</p>
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
    <Form.Group controlId="fringes_taxes_wardrobe" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_wardrobe"
        value={fringes_taxes_wardrobe}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_wardrobe?.map((message, idx) => (
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
    {/* Wardrobe Total */}
    <Row className="mt-3 pb-2">
    <Col md={1}></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>WARDROBE TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="wardrobelabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="wardrobelabourTotal"
        value={wardrobelabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.wardrobelabourTotal?.map((message, idx) => (
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

export default Wardrobe