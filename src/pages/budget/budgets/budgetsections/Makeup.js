/* Component in the Budget component to edit Makeup */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../../styles/Account.module.css";
import Alert from "react-bootstrap/Alert";

const Makeup = (props) => {
    // eslint-disable-next-line
    const [errors, setErrors] = useState({});

    const {postDataMakeup, setPostDataMakeup,
           headmakeupTotal, setHeadmakeupTotal,
           keymakeupTotal, setKeymakeupTotal,
           makeupartistTotal, setMakeupartistTotal,
           keyhairstylistTotal, setKeyhairstylistTotal,
           hairdresserTotal, setHairdresserTotal,
           hairmakeupdailiesTotal, setHairmakeupdailiesTotal,
           othermakeuplabourTotal, setOthermakeuplabourTotal,
           sfxmakeupTotal, setSfxmakeupTotal, setShow,
           makeuplabourTotal, setMakeuplabourTotal,
           headmakprepTotal, setHeadmakprepTotal,
           headmakwrapTotal, setHeadmakwrapTotal,
           headmakallTotal, setHeadmakallTotal,
           keymakprepTotal, setKeymakprepTotal,
           keymakwrapTotal, setKeymakwrapTotal,
           keymakallTotal, setKeymakallTotal,
           makartprepTotal, setMakartprepTotal,
           makartwrapTotal, setMakartwrapTotal,
           makartallTotal, setMakartallTotal,
           keyhairprepTotal, setKeyhairprepTotal,
           keyhairwrapTotal, setKeyhairwrapTotal,
           keyhairallTotal, setKeyhairallTotal,
           hairprepTotal, setHairprepTotal,
           hairwrapTotal, setHairwrapTotal,
           hairallTotal, setHairallTotal,
           othmakprepTotal, setOthmakprepTotal,
           othmakwrapTotal, setOthmakwrapTotal,
           othmakallTotal, setOthmakallTotal,
           sfxmakprepTotal, setSfxmakprepTotal,
           sfxmakwrapTotal, setSfxmakwrapTotal,
           sfxmakallTotal, setSfxmakallTotal,
           maktrainTotal, setMakktrainTotal,
           maktraprepTotal, setMakktraprepTotal,
           maktrawrapTotal, setMakktrawrapTotal,
           maktraallTotal, setMakktraallTotal,
    } = props;

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
    fringes_taxes_makeup,} = postDataMakeup;

    // handleChange 
    const handleChange = (event) => {
        setPostDataMakeup({
        ...postDataMakeup,
        [event.target.name]: event.target.value.replace(/[^0-9.]/g, ''),
        });
    };

    // handleChange Text 
    const handleChangeText = (event) => {
        setPostDataMakeup({
        ...postDataMakeup,
        [event.target.name]: event.target.value,
        });
    };

    // Calculate Functions
    // makeup dept head
    // function to calculate makeup dept head shoot on change
    useEffect(() => {
      const addMakhea = () => {
      setHeadmakeupTotal((parseFloat(makeup_dept_head_quantity || 0) * 
      parseFloat(makeup_dept_head_units_number || 0) * 
      parseFloat(makeup_dept_head_rate || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addMakhea();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
  }, [makeup_dept_head_quantity, makeup_dept_head_units_number,
    makeup_dept_head_rate]);

    // function to calculate makeup dept head prep on change
    useEffect(() => {
        const addMakheaprep = () => {
        setHeadmakprepTotal((parseFloat(mak_head_qty_prep || 0) * 
        parseFloat(mak_head_uno_prep || 0) * 
        parseFloat(mak_head_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addMakheaprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_head_qty_prep, mak_head_uno_prep, mak_head_rt_prep]);

    // function to calculate makeup dept head wrap on change
    useEffect(() => {
        const addMakheawrap = () => {
        setHeadmakwrapTotal((parseFloat(mak_head_qty_wrap || 0) * 
        parseFloat(mak_head_uno_wrap || 0) * 
        parseFloat(mak_head_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addMakheawrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_head_qty_wrap, mak_head_uno_wrap, mak_head_rt_wrap]);

    // function to calculate makeup dept head all on change
    useEffect(() => {
        const addMakheaall = () => {
        setHeadmakallTotal(parseFloat(headmakeupTotal || 0) +
        parseFloat(headmakprepTotal || 0) +
        parseFloat(headmakwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addMakheaall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [headmakeupTotal, headmakprepTotal, headmakwrapTotal]);

    // key makeup
    // function to calculate key makeup shoot on change
    useEffect(() => {
      const addKeymak = () => {
      setKeymakeupTotal((parseFloat(key_makeup_quantity || 0) * 
      parseFloat(key_makeup_units_number || 0) * 
      parseFloat(key_makeup_rate || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addKeymak();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
  }, [key_makeup_quantity, key_makeup_units_number,
    key_makeup_rate]);

    // function to calculate key makeup prep on change
    useEffect(() => {
        const addKeymakprep = () => {
        setKeymakprepTotal((parseFloat(key_mak_qty_prep || 0) * 
        parseFloat(key_mak_uno_prep || 0) * 
        parseFloat(key_mak_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addKeymakprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [key_mak_qty_prep, key_mak_uno_prep, key_mak_rt_prep]);

    // function to calculate key makeup wrap on change
    useEffect(() => {
        const addKeymakwrap = () => {
        setKeymakwrapTotal((parseFloat(key_mak_qty_wrap || 0) * 
        parseFloat(key_mak_uno_wrap || 0) * 
        parseFloat(key_mak_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addKeymakwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [key_mak_qty_wrap, key_mak_uno_wrap, key_mak_rt_wrap]);

    // function to calculate key makeup all on change
    useEffect(() => {
        const addKeymakall = () => {
        setKeymakallTotal(parseFloat(keymakeupTotal || 0) +
        parseFloat(keymakprepTotal || 0) +
        parseFloat(keymakwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addKeymakall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [keymakeupTotal, keymakprepTotal, keymakwrapTotal]);

    // makeup artist
    // function to calculate makeup artist shoot on change
    useEffect(() => {
      const addMakart = () => {
      setMakeupartistTotal((parseFloat(makeup_artist_quantity || 0) * 
      parseFloat(makeup_artist_units_number || 0) * 
      parseFloat(makeup_artist_rate || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addMakart();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
  }, [makeup_artist_quantity, makeup_artist_units_number,
    makeup_artist_rate]);

    // function to calculate makeup artist prep on change
    useEffect(() => {
        const addMakartprep = () => {
        setMakartprepTotal((parseFloat(mak_art_qty_prep || 0) * 
        parseFloat(mak_art_uno_prep || 0) * 
        parseFloat(mak_art_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addMakartprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_art_qty_prep, mak_art_uno_prep, mak_art_rt_prep]);

    // function to calculate makeup artist wrap on change
    useEffect(() => {
        const addMakartwrap = () => {
        setMakartwrapTotal((parseFloat(mak_art_qty_wrap || 0) * 
        parseFloat(mak_art_uno_wrap || 0) * 
        parseFloat(mak_art_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addMakartwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_art_qty_wrap, mak_art_uno_wrap, mak_art_rt_wrap]);

    // function to calculate makeup artist all on change
    useEffect(() => {
        const addMakartall = () => {
        setMakartallTotal(parseFloat(makeupartistTotal || 0) +
        parseFloat(makartprepTotal || 0) +
        parseFloat(makartwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addMakartall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [makeupartistTotal, makartprepTotal, makartwrapTotal]);

    // key hairstylist
    // function to calculate key hairstylist shoot on change
    useEffect(() => {
      const addKeyhai = () => {
      setKeyhairstylistTotal((parseFloat(key_hairstylist_quantity || 0) * 
      parseFloat(key_hairstylist_units_number || 0) * 
      parseFloat(key_hairstylist_rate || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addKeyhai();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
  }, [key_hairstylist_quantity, key_hairstylist_units_number,
    key_hairstylist_rate]);

    // function to calculate key hairstylist prep on change
    useEffect(() => {
        const addKeyhaiprep = () => {
        setKeyhairprepTotal((parseFloat(key_hair_qty_prep || 0) * 
        parseFloat(key_hair_uno_prep || 0) * 
        parseFloat(key_hair_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addKeyhaiprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [key_hair_qty_prep, key_hair_uno_prep, key_hair_rt_prep]);

    // function to calculate key hairstylist wrap on change
    useEffect(() => {
        const addKeyhaiwrap = () => {
        setKeyhairwrapTotal((parseFloat(key_hair_qty_wrap || 0) * 
        parseFloat(key_hair_uno_wrap || 0) * 
        parseFloat(key_hair_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addKeyhaiwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [key_hair_qty_wrap, key_hair_uno_wrap, key_hair_rt_wrap]);

    // function to calculate key hairstylist all on change
    useEffect(() => {
        const addKeyhaiall = () => {
        setKeyhairallTotal(parseFloat(keyhairstylistTotal || 0) +
        parseFloat(keyhairprepTotal || 0) +
        parseFloat(keyhairwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addKeyhaiall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [keyhairstylistTotal, keyhairprepTotal, keyhairwrapTotal]);

    // hairdresser
    // function to calculate hairdresser shoot on change
    useEffect(() => {
      const addHairdr = () => {
      setHairdresserTotal((parseFloat(hairdresser_quantity || 0) * 
      parseFloat(hairdresser_units_number || 0) * 
      parseFloat(hairdresser_rate || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addHairdr();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
  }, [hairdresser_quantity, hairdresser_units_number,
    hairdresser_rate]);

    // function to calculate hairdresser prep on change
    useEffect(() => {
        const addHairdrprep = () => {
        setHairprepTotal((parseFloat(hair_qty_prep || 0) * 
        parseFloat(hair_uno_prep || 0) * 
        parseFloat(hair_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addHairdrprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [hair_qty_prep, hair_uno_prep, hair_rt_prep]);

    // function to calculate hairdresser wrap on change
    useEffect(() => {
        const addHairdrwrap = () => {
        setHairwrapTotal((parseFloat(hair_qty_wrap || 0) * 
        parseFloat(hair_uno_wrap || 0) * 
        parseFloat(hair_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addHairdrwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [hair_qty_wrap, hair_uno_wrap, hair_rt_wrap]);

    // function to calculate hairdresser all on change
    useEffect(() => {
        const addHairdrall = () => {
        setHairallTotal(parseFloat(hairdresserTotal || 0) +
        parseFloat(hairprepTotal || 0) +
        parseFloat(hairwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addHairdrall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [hairdresserTotal, hairprepTotal, hairwrapTotal]);

    // hair makeup dailies
    // function to calculate hair makeup dailies on change
    useEffect(() => {
      const addDailie = () => {
      setHairmakeupdailiesTotal((parseFloat(hair_makeup_dailies_quantity || 0) * 
      parseFloat(hair_makeup_dailies_units_number || 0) * 
      parseFloat(hair_makeup_dailies_rate || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addDailie();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
  }, [hair_makeup_dailies_quantity, hair_makeup_dailies_units_number,
    hair_makeup_dailies_rate]);

    // hair/makeup assistants
    // function to calculate hair/makeup assistants shoot on change
    useEffect(() => {
      const addOthmak = () => {
      setOthermakeuplabourTotal((parseFloat(other_makeup_labour_quantity || 0) * 
      parseFloat(other_makeup_labour_units_number || 0) * 
      parseFloat(other_makeup_labour_rate || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addOthmak();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
  }, [other_makeup_labour_quantity, other_makeup_labour_units_number,
    other_makeup_labour_rate]);

    // function to calculate hair/makeup assistants prep on change
    useEffect(() => {
        const addOthmakprep = () => {
        setOthmakprepTotal((parseFloat(oth_mak_qty_prep || 0) * 
        parseFloat(oth_mak_uno_prep || 0) * 
        parseFloat(oth_mak_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthmakprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_mak_qty_prep, oth_mak_uno_prep, oth_mak_rt_prep]);

    // function to calculate hair/makeup assistants wrap on change
    useEffect(() => {
        const addOthmakwrap = () => {
        setOthmakwrapTotal((parseFloat(oth_mak_qty_wrap || 0) * 
        parseFloat(oth_mak_uno_wrap || 0) * 
        parseFloat(oth_mak_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addOthmakwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [oth_mak_qty_wrap, oth_mak_uno_wrap, oth_mak_rt_wrap]);

    // function to calculate hair/makeup assistants all on change
    useEffect(() => {
        const addOthmakall = () => {
        setOthmakallTotal(parseFloat(othermakeuplabourTotal || 0) +
        parseFloat(othmakprepTotal || 0) +
        parseFloat(othmakwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addOthmakall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [othermakeuplabourTotal, othmakprepTotal, othmakwrapTotal]);

    // sfx makeup
    // function to calculate sfx makeup shoot on change
    useEffect(() => {
      const addSfxmak = () => {
      setSfxmakeupTotal((parseFloat(sfx_makeup_quantity || 0) * 
      parseFloat(sfx_makeup_units_number || 0) * 
      parseFloat(sfx_makeup_rate || 0)).toFixed())
      }
      const timer = setTimeout(() => {
        addSfxmak();
      }, 2000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
  }, [sfx_makeup_quantity, sfx_makeup_units_number,
    sfx_makeup_rate]);

    // function to calculate sfx makeup prep on change
    useEffect(() => {
        const addSfxmakprep = () => {
        setSfxmakprepTotal((parseFloat(sfx_mak_qty_prep || 0) * 
        parseFloat(sfx_mak_uno_prep || 0) * 
        parseFloat(sfx_mak_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSfxmakprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [sfx_mak_qty_prep, sfx_mak_uno_prep, sfx_mak_rt_prep]);

    // function to calculate sfx makeup wrap on change
    useEffect(() => {
        const addSfxmakwrap = () => {
        setSfxmakwrapTotal((parseFloat(sfx_mak_qty_wrap || 0) * 
        parseFloat(sfx_mak_uno_wrap || 0) * 
        parseFloat(sfx_mak_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addSfxmakwrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [sfx_mak_qty_wrap, sfx_mak_uno_wrap, sfx_mak_rt_wrap]);

    // function to calculate sfx makeup all on change
    useEffect(() => {
        const addSfxmakall = () => {
        setSfxmakallTotal(parseFloat(sfxmakeupTotal || 0) +
        parseFloat(sfxmakprepTotal || 0) +
        parseFloat(sfxmakwrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addSfxmakall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [sfxmakeupTotal, sfxmakprepTotal, sfxmakwrapTotal]);

    // makeup trainee
    // function to calculate makeup trainee shoot on change
    useEffect(() => {
        const addMaktrain = () => {
        setMakktrainTotal((parseFloat(mak_train_qty || 0) * 
        parseFloat(mak_train_uno || 0) * 
        parseFloat(mak_train_rt || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addMaktrain();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_train_qty, mak_train_uno, mak_train_rt]);

    // function to calculate makeup trainee prep on change
    useEffect(() => {
        const addMaktraprep = () => {
        setMakktraprepTotal((parseFloat(mak_train_qty_prep || 0) * 
        parseFloat(mak_train_uno_prep || 0) * 
        parseFloat(mak_train_rt_prep || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addMaktraprep();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_train_qty_prep, mak_train_uno_prep, mak_train_rt_prep]);

    // function to calculate makeup trainee wrap on change
    useEffect(() => {
        const addMaktrawrap = () => {
        setMakktrawrapTotal((parseFloat(mak_train_qty_wrap || 0) * 
        parseFloat(mak_train_uno_wrap || 0) * 
        parseFloat(mak_train_rt_wrap || 0)).toFixed())
        }
        const timer = setTimeout(() => {
            addMaktrawrap();
        }, 2000);
  
        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [mak_train_qty_wrap, mak_train_uno_wrap, mak_train_rt_wrap]);

    // function to calculate makeup trainee all on change
    useEffect(() => {
        const addMaktraall = () => {
        setMakktraallTotal(parseFloat(maktrainTotal || 0) +
        parseFloat(maktraprepTotal || 0) +
        parseFloat(maktrawrapTotal || 0))
        }
        const timer = setTimeout(() => {
            addMaktraall();
        }, 1000);

        return () => {
        clearTimeout(timer);
        };
        // eslint-disable-next-line
    }, [maktrainTotal, maktraprepTotal, maktrawrapTotal]);

    // function to add all makeup Labour on change
    useEffect(() => {
      const addMaklab = () => {
      setMakeuplabourTotal(
      parseFloat(headmakallTotal || 0) +
      parseFloat(keymakallTotal || 0) +
      parseFloat(makartallTotal || 0) +
      parseFloat(keyhairallTotal || 0) +
      parseFloat(hairallTotal || 0) +
      parseFloat(hairmakeupdailiesTotal || 0) +
      parseFloat(othmakallTotal || 0) +
      parseFloat(sfxmakallTotal || 0) +
      parseFloat(maktraallTotal || 0) +
      parseFloat(days6th7th_mak || 0) +
      parseFloat(overtime_mak || 0) +
      parseFloat(holidays_mak || 0) +
      parseFloat(box_rent_mak || 0) +
      parseFloat(other_solo_mak || 0) +
      parseFloat(fringes_taxes_makeup || 0)
      )
      }
      const timer = setTimeout(() => {
        addMaklab();
      }, 1000);

      return () => {
      clearTimeout(timer);
      };
      // eslint-disable-next-line
      }, [headmakallTotal, keymakallTotal, makartallTotal,
        keyhairallTotal, hairallTotal, hairmakeupdailiesTotal,
        othmakallTotal, sfxmakallTotal, maktraallTotal,
        days6th7th_mak, overtime_mak, holidays_mak, box_rent_mak,
        other_solo_mak, fringes_taxes_makeup,]);

  return (
    <div className={`${styles.WhiteBack} mx-5 mt-3 mb-5`}>
    <Row className="mx-0" >
    <Col md={12}
        className={ `${styles.Overview} py-0 text-center`}>
            <span className={`${styles.Close } py-2 mb-0 float-right `} 
    onClick={() => setShow(false) } >Close</span>
    <p className="pl-5 py-2">
    HAIR & MAKEUP LABOUR SECTION
    </p>
    </Col>
    </Row>
    <div className="px-2">
    <Row className={`mt-3`}>
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.00</p>
    </Col>
    <Col md={9} >
    <p className={ `${styles.BoldBlack} mb-1`}>HAIR & MAKEUP LABOUR</p>
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
    {/* Makeup Dept Head */}
    <div className="mt-2"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.10</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Makeup Department Head</p>
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
    <Form.Group controlId="mak_head_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_head_qty_prep"
        value={mak_head_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_head_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_head_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_head_uno_prep"
        value={mak_head_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_head_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_head_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_head_una_prep"
        value={mak_head_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.mak_head_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_head_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_head_rt_prep"
        value={mak_head_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_head_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headmakprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headmakprepTotal"
        value={headmakprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headmakprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="makeup_dept_head_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_dept_head_quantity"
        value={makeup_dept_head_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_dept_head_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_dept_head_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_dept_head_units_number"
        value={makeup_dept_head_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_dept_head_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_dept_head_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_dept_head_units_name"
        value={makeup_dept_head_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.makeup_dept_head_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_dept_head_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_dept_head_rate"
        value={makeup_dept_head_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_dept_head_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headmakeupTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headmakeupTotal"
        value={headmakeupTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headmakeupTotal?.map((message, idx) => (
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
    <Form.Group controlId="mak_head_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_head_qty_wrap"
        value={mak_head_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_head_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_head_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_head_uno_wrap"
        value={mak_head_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_head_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_head_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_head_una_wrap"
        value={mak_head_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.mak_head_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_head_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_head_rt_wrap"
        value={mak_head_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_head_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="headmakwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headmakwrapTotal"
        value={headmakwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headmakwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="headmakallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="headmakallTotal"
        value={headmakallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.headmakallTotal?.map((message, idx) => (
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
    {/* Key Makeup */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.20</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Key Makeup</p>
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
    <Form.Group controlId="key_mak_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_mak_qty_prep"
        value={key_mak_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_mak_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_mak_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_mak_uno_prep"
        value={key_mak_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_mak_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_mak_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_mak_una_prep"
        value={key_mak_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.key_mak_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_mak_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_mak_rt_prep"
        value={key_mak_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_mak_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="keymakprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keymakprepTotal"
        value={keymakprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keymakprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="key_makeup_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_makeup_quantity"
        value={key_makeup_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_makeup_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_makeup_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_makeup_units_number"
        value={key_makeup_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_makeup_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_makeup_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_makeup_units_name"
        value={key_makeup_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.key_makeup_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_makeup_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_makeup_rate"
        value={key_makeup_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_makeup_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="keymakeupTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keymakeupTotal"
        value={keymakeupTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keymakeupTotal?.map((message, idx) => (
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
    <Form.Group controlId="key_mak_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_mak_qty_wrap"
        value={key_mak_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_mak_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_mak_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_mak_uno_wrap"
        value={key_mak_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_mak_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_mak_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_mak_una_wrap"
        value={key_mak_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.key_mak_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_mak_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_mak_rt_wrap"
        value={key_mak_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_mak_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="keymakwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keymakwrapTotal"
        value={keymakwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keymakwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="keymakallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keymakallTotal"
        value={keymakallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keymakallTotal?.map((message, idx) => (
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
    {/* Makeup Artist */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.30</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Makeup Artist</p>
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
    <Form.Group controlId="mak_art_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_art_qty_prep"
        value={mak_art_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_art_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_art_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_art_uno_prep"
        value={mak_art_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_art_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_art_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_art_una_prep"
        value={mak_art_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.mak_art_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_art_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_art_rt_prep"
        value={mak_art_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_art_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="makartprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makartprepTotal"
        value={makartprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.makartprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="makeup_artist_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_artist_quantity"
        value={makeup_artist_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_artist_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_artist_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_artist_units_number"
        value={makeup_artist_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_artist_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_artist_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_artist_units_name"
        value={makeup_artist_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.makeup_artist_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="makeup_artist_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeup_artist_rate"
        value={makeup_artist_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.makeup_artist_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="makeupartistTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeupartistTotal"
        value={makeupartistTotal}
        readOnly
            />
    </Form.Group>
    {errors?.makeupartistTotal?.map((message, idx) => (
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
    <Form.Group controlId="mak_art_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_art_qty_wrap"
        value={mak_art_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_art_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_art_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_art_uno_wrap"
        value={mak_art_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_art_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_art_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_art_una_wrap"
        value={mak_art_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.mak_art_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_art_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_art_rt_wrap"
        value={mak_art_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_art_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="makartwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makartwrapTotal"
        value={makartwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.makartwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="makartallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makartallTotal"
        value={makartallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.makartallTotal?.map((message, idx) => (
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
    {/* Key Hairstylist */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.40</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Key Hairstylist</p>
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
    <Form.Group controlId="key_hair_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hair_qty_prep"
        value={key_hair_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hair_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hair_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hair_uno_prep"
        value={key_hair_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hair_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hair_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hair_una_prep"
        value={key_hair_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.key_hair_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hair_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hair_rt_prep"
        value={key_hair_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hair_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="keyhairprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keyhairprepTotal"
        value={keyhairprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keyhairprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="key_hairstylist_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hairstylist_quantity"
        value={key_hairstylist_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hairstylist_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hairstylist_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hairstylist_units_number"
        value={key_hairstylist_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hairstylist_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hairstylist_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hairstylist_units_name"
        value={key_hairstylist_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.key_hairstylist_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hairstylist_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hairstylist_rate"
        value={key_hairstylist_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hairstylist_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="keyhairstylistTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keyhairstylistTotal"
        value={keyhairstylistTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keyhairstylistTotal?.map((message, idx) => (
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
    <Form.Group controlId="key_hair_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hair_qty_wrap"
        value={key_hair_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hair_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hair_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hair_uno_wrap"
        value={key_hair_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hair_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hair_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hair_una_wrap"
        value={key_hair_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.key_hair_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="key_hair_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="key_hair_rt_wrap"
        value={key_hair_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.key_hair_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="keyhairwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keyhairwrapTotal"
        value={keyhairwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keyhairwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="keyhairallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="keyhairallTotal"
        value={keyhairallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.keyhairallTotal?.map((message, idx) => (
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
    {/* Hairdresser */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.50</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Hairdresser</p>
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
    <Form.Group controlId="hair_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_qty_prep"
        value={hair_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_uno_prep"
        value={hair_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_una_prep"
        value={hair_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.hair_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_rt_prep"
        value={hair_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="hairprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairprepTotal"
        value={hairprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hairprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="hairdresser_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairdresser_quantity"
        value={hairdresser_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hairdresser_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hairdresser_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairdresser_units_number"
        value={hairdresser_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hairdresser_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hairdresser_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairdresser_units_name"
        value={hairdresser_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.hairdresser_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hairdresser_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairdresser_rate"
        value={hairdresser_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hairdresser_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="hairdresserTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairdresserTotal"
        value={hairdresserTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hairdresserTotal?.map((message, idx) => (
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
    <Form.Group controlId="hair_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_qty_wrap"
        value={hair_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_uno_wrap"
        value={hair_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_una_wrap"
        value={hair_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.hair_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_rt_wrap"
        value={hair_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="hairwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairwrapTotal"
        value={hairwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hairwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="hairallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairallTotal"
        value={hairallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hairallTotal?.map((message, idx) => (
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
    {/* Hair/Makeup Assistants */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.60</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Hair/Makeup Assistants</p>
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
    <Form.Group controlId="oth_mak_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_mak_qty_prep"
        value={oth_mak_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_mak_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_mak_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_mak_uno_prep"
        value={oth_mak_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_mak_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_mak_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_mak_una_prep"
        value={oth_mak_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.oth_mak_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_mak_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_mak_rt_prep"
        value={oth_mak_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_mak_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othmakprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othmakprepTotal"
        value={othmakprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othmakprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="other_makeup_labour_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_makeup_labour_quantity"
        value={other_makeup_labour_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_makeup_labour_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_makeup_labour_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_makeup_labour_units_number"
        value={other_makeup_labour_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_makeup_labour_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_makeup_labour_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_makeup_labour_units_name"
        value={other_makeup_labour_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.other_makeup_labour_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="other_makeup_labour_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_makeup_labour_rate"
        value={other_makeup_labour_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_makeup_labour_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othermakeuplabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othermakeuplabourTotal"
        value={othermakeuplabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othermakeuplabourTotal?.map((message, idx) => (
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
    <Form.Group controlId="oth_mak_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_mak_qty_wrap"
        value={oth_mak_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_mak_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_mak_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_mak_uno_wrap"
        value={oth_mak_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_mak_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_mak_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_mak_una_wrap"
        value={oth_mak_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.oth_mak_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="oth_mak_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="oth_mak_rt_wrap"
        value={oth_mak_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.oth_mak_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="othmakwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othmakwrapTotal"
        value={othmakwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othmakwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="othmakallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="othmakallTotal"
        value={othmakallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.othmakallTotal?.map((message, idx) => (
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
    {/* SFX Makeup Artist */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.70</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>SFX Makeup Artist</p>
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
    <Form.Group controlId="sfx_mak_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_mak_qty_prep"
        value={sfx_mak_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_mak_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_mak_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_mak_uno_prep"
        value={sfx_mak_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_mak_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_mak_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_mak_una_prep"
        value={sfx_mak_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.sfx_mak_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_mak_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_mak_rt_prep"
        value={sfx_mak_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_mak_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="sfxmakprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfxmakprepTotal"
        value={sfxmakprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.sfxmakprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="sfx_makeup_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_makeup_quantity"
        value={sfx_makeup_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_makeup_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_makeup_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_makeup_units_number"
        value={sfx_makeup_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_makeup_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_makeup_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_makeup_units_name"
        value={sfx_makeup_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.sfx_makeup_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_makeup_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_makeup_rate"
        value={sfx_makeup_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_makeup_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="sfxmakeupTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfxmakeupTotal"
        value={sfxmakeupTotal}
        readOnly
            />
    </Form.Group>
    {errors?.sfxmakeupTotal?.map((message, idx) => (
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
    <Form.Group controlId="sfx_mak_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_mak_qty_wrap"
        value={sfx_mak_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_mak_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_mak_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_mak_uno_wrap"
        value={sfx_mak_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_mak_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_mak_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_mak_una_wrap"
        value={sfx_mak_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.sfx_mak_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="sfx_mak_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfx_mak_rt_wrap"
        value={sfx_mak_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.sfx_mak_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="sfxmakwrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfxmakwrapTotal"
        value={sfxmakwrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.sfxmakwrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="sfxmakallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="sfxmakallTotal"
        value={sfxmakallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.sfxmakallTotal?.map((message, idx) => (
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
    {/* Hair/Makeup Trainee */}
    <div className="mt-1"> 
    <Row >
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.80</p>
    </Col>
    <Col md={9} >
    <p className={`${styles.BoldBlack}`}>Hair/Makeup Trainee</p>
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
    <Form.Group controlId="mak_train_qty_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_qty_prep"
        value={mak_train_qty_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_train_qty_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_train_uno_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_uno_prep"
        value={mak_train_uno_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_train_uno_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_train_una_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_una_prep"
        value={mak_train_una_prep}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.mak_train_una_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_train_rt_prep" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_rt_prep"
        value={mak_train_rt_prep}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_train_rt_prep?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="maktraprepTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="maktraprepTotal"
        value={maktraprepTotal}
        readOnly
            />
    </Form.Group>
    {errors?.maktraprepTotal?.map((message, idx) => (
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
    <Form.Group controlId="mak_train_qty" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_qty"
        value={mak_train_qty}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_train_qty?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_train_uno" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_uno"
        value={mak_train_uno}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_train_uno?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_train_una" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_una"
        value={mak_train_una}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.mak_train_una?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_train_rt" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_rt"
        value={mak_train_rt}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_train_rt?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="maktrainTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="maktrainTotal"
        value={maktrainTotal}
        readOnly
            />
    </Form.Group>
    {errors?.maktrainTotal?.map((message, idx) => (
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
    <Form.Group controlId="mak_train_qty_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_qty_wrap"
        value={mak_train_qty_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_train_qty_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_train_uno_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_uno_wrap"
        value={mak_train_uno_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_train_uno_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_train_una_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_una_wrap"
        value={mak_train_una_wrap}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.mak_train_una_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="mak_train_rt_wrap" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="mak_train_rt_wrap"
        value={mak_train_rt_wrap}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.mak_train_rt_wrap?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="maktrawrapTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="maktrawrapTotal"
        value={maktrawrapTotal}
        readOnly
            />
    </Form.Group>
    {errors?.maktrawrapTotal?.map((message, idx) => (
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
    <Form.Group controlId="maktraallTotal" 
        className={`${styles.Width95} text-center mb-1`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="maktraallTotal"
        value={maktraallTotal}
        readOnly
            />
    </Form.Group>
    {errors?.maktraallTotal?.map((message, idx) => (
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
    {/* Hair Makeup Dailies */}
    <Row className="py-1 d-flex align-items-center">
    <Col md={1} ></Col>
    <Col md={1} >
    <p className={`${styles.Underline}`}>15.90</p>
    </Col>
    <Col md={3} >
    <p className={`${styles.Underline}`}>Hair/Makeup Dailies</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_makeup_dailies_quantity" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_makeup_dailies_quantity"
        value={hair_makeup_dailies_quantity}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_makeup_dailies_quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_makeup_dailies_units_number" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_makeup_dailies_units_number"
        value={hair_makeup_dailies_units_number}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_makeup_dailies_units_number?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_makeup_dailies_units_name" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_makeup_dailies_units_name"
        value={hair_makeup_dailies_units_name}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.hair_makeup_dailies_units_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="hair_makeup_dailies_rate" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hair_makeup_dailies_rate"
        value={hair_makeup_dailies_rate}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.hair_makeup_dailies_rate?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={2} >
    <Form.Group controlId="hairmakeupdailiesTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="hairmakeupdailiesTotal"
        value={hairmakeupdailiesTotal}
        readOnly
            />
    </Form.Group>
    {errors?.hairmakeupdailiesTotal?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>15.91</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>6th/7th Days</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="days6th7th_unit_mak" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_unit_mak"
        value={days6th7th_unit_mak}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.days6th7th_unit_mak?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="days6th7th_mak" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="days6th7th_mak"
        value={days6th7th_mak}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.days6th7th_mak?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>15.92</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Overtime</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="overtime_unit_mak" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_unit_mak"
        value={overtime_unit_mak}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.overtime_unit_mak?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="overtime_mak" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="overtime_mak"
        value={overtime_mak}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.overtime_mak?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>15.93</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Holidays</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="holidays_unit_mak" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_unit_mak"
        value={holidays_unit_mak}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.holidays_unit_mak?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="holidays_mak" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="holidays_mak"
        value={holidays_mak}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.holidays_mak?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>15.94</p>
    </Col>
    <Col md={4} >
    <p className={`${styles.BoldBlack}`}>Box Rentals </p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    <Form.Group controlId="box_rent_unit_mak" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_unit_mak"
        value={box_rent_unit_mak}
        onChange={handleChangeText}
            />
    </Form.Group>
    {errors?.box_rent_unit_mak?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
    ))}
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="box_rent_mak" 
        className={`${styles.Width95} text-center my-0 py-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="box_rent_mak"
        value={box_rent_mak}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.box_rent_mak?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>15.95</p>
    </Col>
    <Col md={6} >
    <p className={`${styles.Underline}`}>Other</p>
    </Col>
    <Col className="px-1 mx-0" md={1} >
    </Col>
    <Col md={2} >
    <Form.Group controlId="other_solo_mak" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="other_solo_mak"
        value={other_solo_mak}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.other_solo_mak?.map((message, idx) => (
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
    <p className={`${styles.Underline}`}>15.96</p>
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
    <Form.Group controlId="fringes_taxes_makeup" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="fringes_taxes_makeup"
        value={fringes_taxes_makeup}
        onChange={handleChange}
            />
    </Form.Group>
    {errors?.fringes_taxes_makeup?.map((message, idx) => (
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
    {/* Makeup Total */}
    <Row className="mt-3 pb-2">
    <Col md={1}></Col>
    <Col md={1} >
    </Col>
    <Col className={ `${styles.Overview} my-0 py-0`} md={6} >
    <p className={ `${styles.Bold} pb-0 mb-0`}>MAKEUP TOTAL</p>
    </Col>
    <Col md={1} >
    <p></p>
    </Col>
    <Col md={2} >
    <Form.Group controlId="makeuplabourTotal" 
        className={`${styles.Width95} text-center mb-0`} >
        <Form.Control 
        type="text"
        className={styles.Input}
        name="makeuplabourTotal"
        value={makeuplabourTotal}
        readOnly
            />
    </Form.Group>
    {errors?.makeuplabourTotal?.map((message, idx) => (
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

export default Makeup