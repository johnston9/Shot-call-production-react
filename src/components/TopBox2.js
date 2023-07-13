/* Second Component used on the top of all pages to 
   display that page's title and other information
   Used to compare different style Topbox components */
import React from "react";
import door from "../assets/door.png";
import appStyles from "../App.module.css";
import styles from "../styles/TopBox2.module.css";
import { Col, Row, Image } from "react-bootstrap";

function TopBox2(props) {
    const {title, scene, title2, title3, title4, work} = props; 
    return (
        <div className={styles.RegBox}>
        <Row className={`${appStyles.playfair}`}>
        {/* <Col xs={{ span: 1, offset: 1 }} lg={{ span: 1, offset: 3 }}
            md={{ span: 1, offset: 2 }}
            className={`text-center ${styles.Longboxl}`}>    
        <p>S</p> 
        <p>H</p>
        <p>O</p>
        <p>T</p> 
        </Col> */}
        <Col className="pb-1" xs={12}>
            <div className={`${styles.Titlebox}`}>
            <Row>
                <Col xs={2} className="float-right" >
                    <Image
                        className={`float-right ${styles.SmallPanel}`}
                        src={door}
                        alt="door"
                        height="100"
                    />
                </Col>
                <Col xs={8} className={`d-flex align-items-center justify-content-center ${styles.Alignme}`} >
                    <div >
                    {work && <h2 className={` text-center ${styles.Title}`}>{work} </h2>}
                    {title && <h2 className={` text-center ${styles.Title2}`}>{title} </h2>}
                    {title4 && <h2 className={` text-center ${styles.Title2}`}>{title4} </h2>}
                    {scene && <h2 className={` text-center ${styles.Title2}`}>Scene {scene} </h2>}
                    <h5 style={{ textTransform: 'capitalize'}} className={`text-center ${styles.Title3}`}>{title2} {title3}</h5>
                    {/* <p style={{ textTransform: 'capitalize'}} className={`mb-0 text-center ${styles.Title3}`}>{title3} </p> */}
                    </div>
                </Col>
            </Row>
            </div>
            </Col>
        {/* <Col xs={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 1 }}
            md={{ span: 1, offset: 0 }}
            className={`text-center px-0 mx-0 ${styles.Longboxr}`}
        >    
        <p>C</p> 
        <p>A</p>
        <p>L</p>
        <p>L</p> 
        <p>E</p>
        <p>R</p> 
        </Col> */}
    </Row>
    </div>
    )
}

export default TopBox2